#!/usr/bin/env python3
"""Validate generated equity or bond long-short website data."""

from __future__ import annotations

import argparse
import csv
import json
import math
from pathlib import Path


def load_directions(path: Path | None) -> dict[str, int]:
    if path is None:
        return {}
    with path.open(encoding="utf-8", newline="") as handle:
        return {
            row["Acronym"]: int(row["Direction"])
            for row in csv.DictReader(handle)
            if row.get("Acronym") and row.get("Direction")
        }


def blocks(result: dict[str, object]):
    quantiles = result.get("quantiles")
    if isinstance(quantiles, dict):
        for quantile, block in quantiles.items():
            if isinstance(block, dict):
                for weighting in ("vw", "ew"):
                    yield quantile, weighting, block.get(weighting, [])
    else:
        for weighting in ("vw", "ew"):
            yield "10", weighting, result.get(weighting, [])


def close(left: float, right: float) -> bool:
    return math.isclose(left, right, rel_tol=1e-12, abs_tol=1.1e-8)


def validate(
    path: Path,
    expected_characteristics: int | None,
    required_quantiles: set[str],
    directions_path: Path | None,
) -> tuple[int, int]:
    payload = json.loads(path.read_text(encoding="utf-8"))
    characteristics = payload.get("characteristics")
    series = payload.get("series")
    if not isinstance(characteristics, list) or not isinstance(series, dict):
        raise ValueError("Payload must contain a characteristic list and series object.")
    if set(characteristics) != set(series):
        raise ValueError("Characteristic list and series keys differ.")
    if expected_characteristics is not None and len(characteristics) != expected_characteristics:
        raise ValueError(f"Expected {expected_characteristics} characteristics, found {len(characteristics)}.")

    directions = load_directions(directions_path)
    if directions and set(characteristics) != set(directions):
        raise ValueError("Direction CSV and generated characteristics differ.")

    row_count = 0
    for characteristic in characteristics:
        result = series[characteristic]
        direction = int(result.get("direction", 1))
        if direction not in (-1, 1):
            raise ValueError(f"{characteristic}: invalid direction {direction}.")
        if directions and direction != directions[characteristic]:
            raise ValueError(f"{characteristic}: generated direction differs from direction CSV.")
        expected_legs = ("High", "Low") if direction == 1 else ("Low", "High")
        if (result.get("long_leg"), result.get("short_leg")) != expected_legs:
            raise ValueError(f"{characteristic}: leg labels disagree with direction.")
        quantiles = result.get("quantiles")
        if required_quantiles and (
            not isinstance(quantiles, dict) or not required_quantiles.issubset(quantiles)
        ):
            raise ValueError(f"{characteristic}: missing required quantile sorts.")

        for quantile, weighting, rows in blocks(result):
            if not isinstance(rows, list):
                raise ValueError(f"{characteristic}/{quantile}/{weighting}: rows are not a list.")
            wealth = 1.0
            previous_date = ""
            for row in rows:
                row_count += 1
                date = str(row.get("date", ""))
                if previous_date and date <= previous_date:
                    raise ValueError(f"{characteristic}/{quantile}/{weighting}: dates are not strictly increasing.")
                previous_date = date
                long_return, short_return, spread = row.get("long"), row.get("short"), row.get("long_short")
                if long_return is None or short_return is None or spread is None:
                    raise ValueError(f"{characteristic}/{quantile}/{weighting}/{date}: incomplete legs.")
                expected_spread = float(long_return) - float(short_return)
                if not close(float(spread), expected_spread):
                    raise ValueError(f"{characteristic}/{quantile}/{weighting}/{date}: long-short arithmetic failed.")
                if int(row.get("long_count", 0)) <= 0 or int(row.get("short_count", 0)) <= 0:
                    raise ValueError(f"{characteristic}/{quantile}/{weighting}/{date}: empty leg.")
                wealth *= 1.0 + float(spread)
                cumulative = row.get("cum_long_short")
                if cumulative is None or not close(float(cumulative), wealth - 1.0):
                    raise ValueError(f"{characteristic}/{quantile}/{weighting}/{date}: cumulative return failed.")
    return len(characteristics), row_count


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", type=Path, required=True)
    parser.add_argument("--expected-characteristics", type=int)
    parser.add_argument("--require-quantiles", nargs="*", default=[])
    parser.add_argument("--directions", type=Path)
    args = parser.parse_args()
    characteristic_count, row_count = validate(
        args.input,
        args.expected_characteristics,
        set(args.require_quantiles),
        args.directions,
    )
    print(f"Validated {characteristic_count} characteristics and {row_count} portfolio-month rows.")


if __name__ == "__main__":
    main()
