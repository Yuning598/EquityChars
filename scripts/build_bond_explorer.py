#!/usr/bin/env python3
"""Build a small monthly summary JSON for the bond characteristic explorer."""

from __future__ import annotations

import argparse
import json
import math
import tempfile
import urllib.request
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import parse_qsl, urlencode, urlparse, urlunparse

import pandas as pd
import pyarrow.feather as feather
from pandas.api.types import is_numeric_dtype


IDENTIFIER_COLUMNS = {
    "index",
    "complete_cusip",
    "trd_exctn_dt",
    "last_trade_on",
    "date",
}


def direct_dropbox_url(url: str) -> str:
    parsed = urlparse(url)
    if "dropbox.com" not in parsed.netloc:
        return url
    query = dict(parse_qsl(parsed.query, keep_blank_values=True))
    query["dl"] = "1"
    return urlunparse(parsed._replace(query=urlencode(query)))


def maybe_download(source: str) -> tuple[Path, tempfile.TemporaryDirectory[str] | None]:
    if source.startswith(("http://", "https://")):
        tmpdir = tempfile.TemporaryDirectory()
        target = Path(tmpdir.name) / "source.feather"
        urllib.request.urlretrieve(direct_dropbox_url(source), target)
        return target, tmpdir
    return Path(source), None


def month_from_series(series: pd.Series) -> pd.Series:
    if pd.api.types.is_datetime64_any_dtype(series):
        return series.dt.to_period("M").astype(str)
    parsed = pd.to_datetime(series, errors="coerce")
    return parsed.dt.to_period("M").astype(str)


def finite_or_none(value: float) -> float | None:
    if value is None or not math.isfinite(value):
        return None
    return round(value, 6)


def source_name(source: str) -> str:
    if source.startswith(("http://", "https://")):
        return Path(urlparse(source).path).name
    return Path(source).name


def build_summary(source: str, output: Path, release_id: str, dataset_label: str) -> None:
    source_path, tmpdir = maybe_download(source)
    try:
        table = feather.read_table(source_path, memory_map=True)
        frame = table.to_pandas()
        date_column = "date" if "date" in frame.columns else "trd_exctn_dt"
        frame["__month"] = month_from_series(frame[date_column])
        frame = frame.dropna(subset=["__month"])

        numeric_columns = [
            column
            for column in frame.columns
            if column not in IDENTIFIER_COLUMNS
            and column != "__month"
            and is_numeric_dtype(frame[column])
        ]

        rows_by_month = frame["__month"].value_counts().sort_index()
        months = [str(month) for month in rows_by_month.index]
        series = {}
        for column in sorted(numeric_columns):
            grouped = (
                pd.DataFrame(
                    {
                        "month": frame["__month"],
                        "value": pd.to_numeric(frame[column], errors="coerce"),
                    }
                )
                .dropna()
                .groupby("month")["value"]
                .agg(["count", "mean"])
            )
            values = []
            for month in months:
                rows = int(rows_by_month.get(month, 0))
                if month in grouped.index:
                    n = int(grouped.loc[month, "count"])
                    mean = float(grouped.loc[month, "mean"])
                else:
                    n = 0
                    mean = float("nan")
                values.append(
                    {
                        "period": month,
                        "n": n,
                        "coverage": finite_or_none(n / rows if rows else float("nan")),
                        "mean": finite_or_none(mean),
                    }
                )
            series[column] = values

        payload = {
            "metadata": {
                "release_id": release_id,
                "dataset": dataset_label,
                "source": source_name(source),
                "generated_at": datetime.now(timezone.utc).isoformat(timespec="seconds"),
                "rows": int(len(frame)),
                "characteristics": len(numeric_columns),
                "frequency": "monthly",
            },
            "periods": months,
            "characteristics": sorted(numeric_columns),
            "series": series,
        }

        output.parent.mkdir(parents=True, exist_ok=True)
        output.write_text(json.dumps(payload, separators=(",", ":")), encoding="utf-8")
    finally:
        if tmpdir is not None:
            tmpdir.cleanup()


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--source", required=True, help="Local Feather path or Dropbox URL.")
    parser.add_argument("--output", default="docs/data/bond_monthly_raw.json")
    parser.add_argument("--release-id", default="2024-12")
    parser.add_argument("--dataset-label", default="characteristics_raw")
    args = parser.parse_args()
    build_summary(
        source=args.source,
        output=Path(args.output),
        release_id=args.release_id,
        dataset_label=args.dataset_label,
    )


if __name__ == "__main__":
    main()
