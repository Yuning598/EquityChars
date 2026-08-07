#!/usr/bin/env python3
"""Reorient precomputed long-short series without rebuilding the raw sorts.

Changing a signal from High-minus-Low to Low-minus-High only swaps the two
legs and negates the spread.  This utility applies that exact transformation
to an existing JSON artifact so the checked-in website data can be corrected
even when the large source panel is not available locally.
"""

from __future__ import annotations

import argparse
import csv
import json
import math
from pathlib import Path


def load_directions(path: Path) -> dict[str, int]:
    with path.open(encoding="utf-8", newline="") as handle:
        return {
            row["Acronym"]: int(row["Direction"])
            for row in csv.DictReader(handle)
            if row.get("Acronym") and row.get("Direction")
        }


def reorient_rows(rows: list[dict[str, object]]) -> None:
    wealth = 1.0
    for row in rows:
        row["long"], row["short"] = row.get("short"), row.get("long")
        row["long_count"], row["short_count"] = row.get("short_count", 0), row.get("long_count", 0)
        long_return, short_return = row.get("long"), row.get("short")
        spread = None if long_return is None or short_return is None else round(float(long_return) - float(short_return), 8)
        row["long_short"] = spread
        if spread is None or not math.isfinite(spread):
            row["cum_long_short"] = None
        else:
            wealth *= 1.0 + spread
            row["cum_long_short"] = round(wealth - 1.0, 8)


def weighting_blocks(result: dict[str, object]):
    quantiles = result.get("quantiles")
    if isinstance(quantiles, dict):
        for quantile in quantiles.values():
            if isinstance(quantile, dict):
                for weighting in ("vw", "ew"):
                    rows = quantile.get(weighting)
                    if isinstance(rows, list):
                        yield rows
    else:
        for weighting in ("vw", "ew"):
            rows = result.get(weighting)
            if isinstance(rows, list):
                yield rows


def reorient(path: Path, directions_path: Path) -> list[str]:
    payload = json.loads(path.read_text(encoding="utf-8"))
    directions = load_directions(directions_path)
    changed: list[str] = []
    for characteristic, result in payload.get("series", {}).items():
        target = directions.get(characteristic)
        if target not in (-1, 1) or int(result.get("direction", 1)) == target:
            continue
        for rows in weighting_blocks(result):
            reorient_rows(rows)
        result["direction"] = target
        result["long_leg"] = "High" if target == 1 else "Low"
        result["short_leg"] = "Low" if target == 1 else "High"
        changed.append(characteristic)
    metadata = payload.setdefault("metadata", {})
    metadata["orientation"] = "direction_adjusted"
    metadata["directions_source"] = directions_path.as_posix()
    path.write_text(json.dumps(payload, separators=(",", ":")), encoding="utf-8")
    return changed


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", type=Path, required=True)
    parser.add_argument("--directions", type=Path, required=True)
    args = parser.parse_args()
    changed = reorient(args.input, args.directions)
    print("Reoriented: " + (", ".join(changed) if changed else "none"))


if __name__ == "__main__":
    main()
