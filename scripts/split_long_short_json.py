#!/usr/bin/env python3
"""Split a monolithic long-short JSON payload into a small index and lazy-loaded series."""

from __future__ import annotations

import argparse
import json
from pathlib import Path


def split_payload(source: Path, index_output: Path, series_directory: Path) -> None:
    payload = json.loads(source.read_text(encoding="utf-8"))
    characteristics = payload.get("characteristics")
    series = payload.get("series")
    if not isinstance(characteristics, list) or not isinstance(series, dict):
        raise ValueError("Source must contain characteristics and series.")
    if set(characteristics) != set(series):
        raise ValueError("Characteristic list and series keys differ.")

    series_directory.mkdir(parents=True, exist_ok=True)
    series_meta = {}
    for characteristic in characteristics:
        result = series[characteristic]
        series_meta[characteristic] = {
            "direction": result.get("direction", 1),
            "long_leg": result.get("long_leg", "High"),
            "short_leg": result.get("short_leg", "Low"),
        }
        (series_directory / f"{characteristic}.json").write_text(
            json.dumps(result, separators=(",", ":")), encoding="utf-8"
        )

    index = {
        "metadata": payload.get("metadata", {}),
        "characteristics": characteristics,
        "series_meta": series_meta,
        "data_layout": "per_characteristic",
    }
    index_output.parent.mkdir(parents=True, exist_ok=True)
    index_output.write_text(json.dumps(index, separators=(",", ":")), encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--source", type=Path, required=True)
    parser.add_argument("--index-output", type=Path, required=True)
    parser.add_argument("--series-directory", type=Path, required=True)
    args = parser.parse_args()
    split_payload(args.source, args.index_output, args.series_directory)


if __name__ == "__main__":
    main()
