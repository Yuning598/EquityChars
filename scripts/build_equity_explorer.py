#!/usr/bin/env python3
"""Build a small monthly summary JSON for the equity characteristic explorer."""

from __future__ import annotations

import argparse
import json
import math
import tempfile
import urllib.request
from collections import defaultdict
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import parse_qsl, urlencode, urlparse, urlunparse

import pandas as pd
import pyarrow.parquet as pq
from pandas.api.types import is_numeric_dtype


IDENTIFIER_COLUMNS = {
    "gvkey",
    "permno",
    "ticker",
    "conm",
    "comnam",
    "sic",
    "prc",
    "shrout",
    "ret",
    "date",
    "datadate",
    "ffi49",
    "lag_me",
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
        target = Path(tmpdir.name) / "source.parquet"
        urllib.request.urlretrieve(direct_dropbox_url(source), target)
        return target, tmpdir
    return Path(source), None


def month_from_series(series: pd.Series) -> pd.Series:
    if pd.api.types.is_datetime64_any_dtype(series):
        return series.dt.to_period("M").astype(str)
    parsed = pd.to_datetime(series, errors="coerce")
    return parsed.dt.to_period("M").astype(str)


def display_name(column: str) -> str:
    return column[5:] if column.startswith("rank_") else column


def finite_or_none(value: float) -> float | None:
    if value is None or not math.isfinite(value):
        return None
    return round(value, 6)


def build_summary(
    source: str,
    output: Path,
    release_id: str,
    dataset_label: str,
    batch_size: int,
) -> None:
    source_path, tmpdir = maybe_download(source)
    try:
        parquet = pq.ParquetFile(source_path)
        schema = parquet.schema_arrow
        date_column = "date" if "date" in schema.names else "datadate"
        numeric_columns = []
        for field in schema:
            name = field.name
            if name in IDENTIFIER_COLUMNS:
                continue
            if name == date_column:
                continue
            if str(field.type).startswith(("int", "uint", "float", "double", "decimal")):
                numeric_columns.append(name)

        rows_by_month: defaultdict[str, int] = defaultdict(int)
        counts: defaultdict[tuple[str, str], int] = defaultdict(int)
        sums: defaultdict[tuple[str, str], float] = defaultdict(float)

        columns = [date_column, *numeric_columns]
        for batch in parquet.iter_batches(batch_size=batch_size, columns=columns):
            frame = batch.to_pandas()
            frame["__month"] = month_from_series(frame[date_column])
            frame = frame.dropna(subset=["__month"])

            for month, rows in frame["__month"].value_counts().items():
                rows_by_month[str(month)] += int(rows)

            for column in numeric_columns:
                series = pd.to_numeric(frame[column], errors="coerce")
                if not is_numeric_dtype(series):
                    continue
                grouped = pd.DataFrame({"month": frame["__month"], "value": series}).dropna()
                if grouped.empty:
                    continue
                agg = grouped.groupby("month")["value"].agg(["count", "sum"])
                char_name = display_name(column)
                for month, row in agg.iterrows():
                    key = (char_name, str(month))
                    counts[key] += int(row["count"])
                    sums[key] += float(row["sum"])

        months = sorted(rows_by_month)
        characteristics = sorted({display_name(column) for column in numeric_columns})
        series = {}
        for char in characteristics:
            values = []
            for month in months:
                n = counts.get((char, month), 0)
                rows = rows_by_month.get(month, 0)
                mean = sums[(char, month)] / n if n else float("nan")
                values.append(
                    {
                        "period": month,
                        "n": n,
                        "coverage": finite_or_none(n / rows if rows else float("nan")),
                        "mean": finite_or_none(mean),
                    }
                )
            series[char] = values

        payload = {
            "metadata": {
                "release_id": release_id,
                "dataset": dataset_label,
                "source": Path(str(source)).name if not source.startswith(("http://", "https://")) else source,
                "generated_at": datetime.now(timezone.utc).isoformat(timespec="seconds"),
                "rows": parquet.metadata.num_rows,
                "characteristics": len(characteristics),
                "frequency": "monthly",
            },
            "periods": months,
            "characteristics": characteristics,
            "series": series,
        }

        output.parent.mkdir(parents=True, exist_ok=True)
        output.write_text(json.dumps(payload, separators=(",", ":")), encoding="utf-8")
    finally:
        if tmpdir is not None:
            tmpdir.cleanup()


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--source", required=True, help="Local parquet path or Dropbox URL.")
    parser.add_argument("--output", default="chars/data/equity_monthly_raw_no_impute.json")
    parser.add_argument("--release-id", default="2026-04")
    parser.add_argument("--dataset-label", default="chars_raw_no_impute")
    parser.add_argument("--batch-size", type=int, default=100_000)
    args = parser.parse_args()
    build_summary(
        source=args.source,
        output=Path(args.output),
        release_id=args.release_id,
        dataset_label=args.dataset_label,
        batch_size=args.batch_size,
    )


if __name__ == "__main__":
    main()
