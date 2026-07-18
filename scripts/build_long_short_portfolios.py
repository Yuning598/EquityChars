#!/usr/bin/env python3
"""Build long-short characteristic portfolio summaries for the website."""

from __future__ import annotations

import argparse
import json
import math
import tempfile
import urllib.request
from concurrent.futures import ProcessPoolExecutor, as_completed
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import parse_qsl, urlencode, urlparse, urlunparse

import pandas as pd
import pyarrow.parquet as pq


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


def finite_or_none(value: float | None, digits: int = 8) -> float | None:
    if value is None or not math.isfinite(value):
        return None
    return round(float(value), digits)


def cumulative_returns(returns: list[float | None]) -> list[float | None]:
    wealth = 1.0
    out: list[float | None] = []
    for value in returns:
        if value is None:
            out.append(None)
            continue
        wealth *= 1.0 + value
        out.append(finite_or_none(wealth - 1.0))
    return out


def annualized_sharpe(returns: list[float]) -> float | None:
    if len(returns) < 2:
        return None
    mean = sum(returns) / len(returns)
    variance = sum((x - mean) ** 2 for x in returns) / (len(returns) - 1)
    if variance <= 0:
        return None
    return mean / math.sqrt(variance) * math.sqrt(12)


def max_drawdown(returns: list[float]) -> float | None:
    if not returns:
        return None
    wealth = 1.0
    peak = 1.0
    drawdown = 0.0
    for value in returns:
        wealth *= 1.0 + value
        peak = max(peak, wealth)
        drawdown = min(drawdown, wealth / peak - 1.0)
    return drawdown


def characteristic_columns(path: Path) -> list[str]:
    schema = pq.ParquetFile(path).schema_arrow
    needed = {"date", "ret", "me"}
    missing = needed - set(schema.names)
    if missing:
        raise ValueError(f"Source is missing required columns: {', '.join(sorted(missing))}")
    chars = []
    for field in schema:
        name = field.name
        if name in IDENTIFIER_COLUMNS and name != "me":
            continue
        if str(field.type).startswith(("int", "uint", "float", "double", "decimal")):
            chars.append(name[5:] if name.startswith("rank_") else name)
    return sorted(set(chars))


def resolve_repo_path(path: Path) -> Path:
    if path.exists() or path.is_absolute():
        return path
    repo_path = Path(__file__).resolve().parents[1] / path
    return repo_path if repo_path.exists() else path


def load_directions(path: Path | None) -> dict[str, int]:
    if path is None:
        return {}
    path = resolve_repo_path(path)
    if not path.exists():
        raise FileNotFoundError(f"Direction file not found: {path}")
    frame = pd.read_csv(path)
    return {
        str(row["Acronym"]): int(row["Direction"])
        for _, row in frame.iterrows()
        if pd.notna(row.get("Acronym")) and pd.notna(row.get("Direction"))
    }


def normalize_characteristics(values: list[str] | None) -> list[str] | None:
    if values is None:
        return None
    normalized: list[str] = []
    for value in values:
        for part in value.split(","):
            char = part.strip()
            if char and char not in normalized:
                normalized.append(char)
    return normalized or None


def leg_metadata(direction: int) -> dict[str, object]:
    return {
        "direction": direction,
        "long_leg": "High" if direction >= 0 else "Low",
        "short_leg": "Low" if direction >= 0 else "High",
    }


def summarize_returns(returns: list[float]) -> dict[str, object]:
    mean = sum(returns) / len(returns) if returns else None
    vol = None
    if len(returns) > 1 and mean is not None:
        vol = math.sqrt(sum((x - mean) ** 2 for x in returns) / (len(returns) - 1))
    return {
        "months": len(returns),
        "mean_monthly": finite_or_none(mean),
        "vol_monthly": finite_or_none(vol),
        "sharpe_annualized": finite_or_none(annualized_sharpe(returns)),
        "max_drawdown": finite_or_none(max_drawdown(returns)),
        "max_1m_loss": finite_or_none(min(returns) if returns else None),
    }


def recompute_rows(rows: list[dict[str, object]]) -> tuple[list[dict[str, object]], dict[str, object]]:
    sorted_rows = sorted(rows, key=lambda row: str(row["date"]))
    returns: list[float] = []
    cumulative_source: list[float | None] = []
    for row in sorted_rows:
        value = row.get("long_short")
        numeric = float(value) if value is not None and math.isfinite(float(value)) else None
        cumulative_source.append(numeric)
        if numeric is not None:
            returns.append(numeric)
    for row, cumret in zip(sorted_rows, cumulative_returns(cumulative_source)):
        row["cum_long_short"] = cumret
    return sorted_rows, summarize_returns(returns)


def empty_result(direction: int) -> dict[str, object]:
    return {**leg_metadata(direction), "vw": [], "ew": [], "summary": {"vw": {}, "ew": {}}}


def latest_month(existing: dict[str, object] | None) -> str | None:
    if not existing:
        return None
    latest: str | None = None
    for weighting in ("vw", "ew"):
        rows = existing.get(weighting) if isinstance(existing, dict) else None
        if not isinstance(rows, list):
            continue
        for row in rows:
            if isinstance(row, dict) and isinstance(row.get("date"), str):
                latest = max(latest, row["date"]) if latest else row["date"]
    return latest


def merge_weighting_rows(
    existing_rows: list[dict[str, object]] | None,
    new_rows: list[dict[str, object]] | None,
) -> tuple[list[dict[str, object]], dict[str, object]]:
    by_date: dict[str, dict[str, object]] = {}
    for source_rows in (existing_rows or [], new_rows or []):
        for row in source_rows:
            date = row.get("date")
            if isinstance(date, str):
                clean = dict(row)
                clean.pop("cum_long_short", None)
                by_date[date] = clean
    return recompute_rows(list(by_date.values()))


def merge_result(
    existing: dict[str, object] | None,
    new: dict[str, object],
    direction: int,
) -> dict[str, object]:
    metadata = leg_metadata(direction)
    vw_rows, vw_summary = merge_weighting_rows(
        existing.get("vw") if isinstance(existing, dict) else None,
        new.get("vw") if isinstance(new, dict) else None,
    )
    ew_rows, ew_summary = merge_weighting_rows(
        existing.get("ew") if isinstance(existing, dict) else None,
        new.get("ew") if isinstance(new, dict) else None,
    )
    return {
        **metadata,
        "vw": vw_rows,
        "ew": ew_rows,
        "summary": {"vw": vw_summary, "ew": ew_summary},
    }


def build_one_characteristic(
    path: Path,
    characteristic: str,
    min_stocks: int,
    direction: int,
    start_month: str | None = None,
) -> dict[str, object]:
    columns = ["date", "ret", "me"] if characteristic == "me" else ["date", "ret", "me", characteristic]
    frame = pq.read_table(path, columns=columns).to_pandas()
    if characteristic == "me":
        frame["signal"] = frame["me"]
    else:
        frame = frame.rename(columns={characteristic: "signal"})
    frame["date"] = pd.to_datetime(frame["date"], errors="coerce")
    for column in ["ret", "me", "signal"]:
        frame[column] = pd.to_numeric(frame[column], errors="coerce")
    frame = frame.replace([math.inf, -math.inf], pd.NA).dropna(subset=["date", "ret", "signal"])
    if frame.empty:
        return empty_result(direction)

    frame["month"] = frame["date"].dt.strftime("%Y-%m")
    if start_month:
        frame = frame.loc[frame["month"] > start_month].copy()
        if frame.empty:
            return empty_result(direction)
    n_month = frame.groupby("month")["signal"].transform("size")
    frame = frame.loc[n_month >= min_stocks].copy()
    if frame.empty:
        return empty_result(direction)

    frame["rank_month"] = frame.groupby("month")["signal"].rank(method="first", ascending=True)
    frame["n_month"] = frame.groupby("month")["signal"].transform("size")
    frame["decile"] = (((frame["rank_month"] - 1) * 10 / frame["n_month"]).astype(int) + 1).clip(1, 10)
    frame = frame.loc[frame["decile"].isin([1, 10])].copy()
    long_decile = 10 if direction >= 0 else 1
    short_decile = 1 if direction >= 0 else 10
    frame["leg"] = frame["decile"].map({long_decile: "long", short_decile: "short"})
    frame["vw_weight"] = frame["me"].where(frame["me"].notna() & (frame["me"] > 0))

    ew = (
        frame.groupby(["month", "leg"], observed=True)
        .agg(ret=("ret", "mean"), count=("ret", "size"))
        .unstack("leg")
        .sort_index()
    )
    ew.columns = [f"{metric}_{leg}" for metric, leg in ew.columns]
    ew = ew.reset_index()

    vw_source = frame.dropna(subset=["vw_weight"]).copy()
    if vw_source.empty:
        vw = pd.DataFrame(columns=["month"])
    else:
        vw_source["weighted_ret"] = vw_source["ret"] * vw_source["vw_weight"]
        vw = (
            vw_source.groupby(["month", "leg"], observed=True)
            .agg(weighted_ret=("weighted_ret", "sum"), weight=("vw_weight", "sum"), count=("ret", "size"))
            .assign(ret=lambda data: data["weighted_ret"] / data["weight"])
            .drop(columns=["weighted_ret", "weight"])
            .unstack("leg")
            .sort_index()
        )
        vw.columns = [f"{metric}_{leg}" for metric, leg in vw.columns]
        vw = vw.reset_index()

    def serialize(portfolio: pd.DataFrame) -> tuple[list[dict[str, object]], dict[str, object]]:
        if portfolio.empty:
            return [], {}
        rows = []
        returns = []
        for row in portfolio.to_dict("records"):
            long_ret = row.get("ret_long")
            short_ret = row.get("ret_short")
            long_ret = None if pd.isna(long_ret) else long_ret
            short_ret = None if pd.isna(short_ret) else short_ret
            long_short = None if long_ret is None or short_ret is None else float(long_ret) - float(short_ret)
            if long_short is not None and math.isfinite(long_short):
                returns.append(long_short)
            rows.append(
                {
                    "date": row["month"],
                    "long": finite_or_none(long_ret),
                    "short": finite_or_none(short_ret),
                    "long_short": finite_or_none(long_short),
                    "long_count": int(0 if pd.isna(row.get("count_long")) else row.get("count_long") or 0),
                    "short_count": int(0 if pd.isna(row.get("count_short")) else row.get("count_short") or 0),
                }
            )
        return recompute_rows(rows)

    vw_rows, vw_summary = serialize(vw)
    ew_rows, ew_summary = serialize(ew)
    return {
        **leg_metadata(direction),
        "vw": vw_rows,
        "ew": ew_rows,
        "summary": {"vw": vw_summary, "ew": ew_summary},
    }


def build_portfolios(
    source: str,
    output: Path,
    release_id: str,
    dataset_label: str,
    min_stocks: int,
    limit: int | None,
    workers: int,
    directions_path: Path | None,
    update_mode: str,
    characteristics: list[str] | None = None,
) -> None:
    source_path, tmpdir = maybe_download(source)
    try:
        all_chars = characteristic_columns(source_path)
        requested_chars = normalize_characteristics(characteristics)
        if requested_chars is not None:
            missing = sorted(set(requested_chars) - set(all_chars))
            if missing:
                raise ValueError(f"Requested characteristics are missing from source: {', '.join(missing)}")
            chars = requested_chars
        else:
            chars = all_chars
        if limit is not None:
            chars = chars[:limit]
        directions = load_directions(directions_path)
        existing_payload: dict[str, object] = {}
        existing_series: dict[str, dict[str, object]] = {}
        partial_recompute = requested_chars is not None
        if (update_mode == "incremental" or partial_recompute) and output.exists():
            existing_payload = json.loads(output.read_text(encoding="utf-8"))
            existing_series = existing_payload.get("series", {}) if isinstance(existing_payload.get("series"), dict) else {}

        results: dict[str, dict[str, object]] = {}
        if workers <= 1:
            for index, char in enumerate(chars, start=1):
                start_month = latest_month(existing_series.get(char)) if update_mode == "incremental" else None
                suffix = f" after {start_month}" if start_month else " full history"
                print(f"[{index}/{len(chars)}] {char}{suffix}", flush=True)
                new_result = build_one_characteristic(
                    source_path,
                    char,
                    min_stocks,
                    directions.get(char, 1),
                    start_month,
                )
                results[char] = (
                    merge_result(existing_series.get(char), new_result, directions.get(char, 1))
                    if update_mode == "incremental"
                    else new_result
                )
        else:
            completed = 0
            with ProcessPoolExecutor(max_workers=workers) as executor:
                futures = {
                    executor.submit(
                        build_one_characteristic,
                        source_path,
                        char,
                        min_stocks,
                        directions.get(char, 1),
                        latest_month(existing_series.get(char)) if update_mode == "incremental" else None,
                    ): char
                    for char in chars
                }
                for future in as_completed(futures):
                    char = futures[future]
                    completed += 1
                    print(f"[{completed}/{len(chars)}] {char}", flush=True)
                    new_result = future.result()
                    results[char] = (
                        merge_result(existing_series.get(char), new_result, directions.get(char, 1))
                        if update_mode == "incremental"
                        else new_result
                    )

        computed_series = {
            char: {
                "direction": results[char]["direction"],
                "long_leg": results[char]["long_leg"],
                "short_leg": results[char]["short_leg"],
                "vw": results[char]["vw"],
                "ew": results[char]["ew"],
            }
            for char in chars
        }
        computed_summary = {char: results[char]["summary"] for char in chars}

        if partial_recompute and existing_payload:
            series = dict(existing_series)
            series.update(computed_series)
            existing_summary = existing_payload.get("summary", {})
            summary = dict(existing_summary) if isinstance(existing_summary, dict) else {}
            summary.update(computed_summary)
            existing_chars = existing_payload.get("characteristics")
            if isinstance(existing_chars, list):
                output_chars = [str(char) for char in existing_chars]
                for char in chars:
                    if char not in output_chars:
                        output_chars.append(char)
            else:
                output_chars = sorted(series)
        else:
            series = computed_series
            summary = computed_summary
            output_chars = chars

        metadata = {
            "release_id": release_id,
            "dataset": dataset_label,
            "source": Path(str(source)).name if not source.startswith(("http://", "https://")) else source,
            "generated_at": datetime.now(timezone.utc).isoformat(timespec="seconds"),
            "characteristics": len(output_chars),
            "orientation": "direction_adjusted",
            "directions_source": str(directions_path) if directions_path else None,
            "update_mode": update_mode,
            "previous_generated_at": (
                existing_payload.get("metadata", {}).get("generated_at")
                if isinstance(existing_payload.get("metadata"), dict)
                else None
            ),
            "formation": "monthly decile portfolios; long high-signal decile when Direction=1 and low-signal decile when Direction=-1; ret is already shifted to t+1 in the source file",
        }
        if partial_recompute:
            metadata["partial_recomputed_characteristics"] = chars

        payload = {
            "metadata": metadata,
            "characteristics": output_chars,
            "series": series,
            "summary": summary,
        }
        output.parent.mkdir(parents=True, exist_ok=True)
        output.write_text(json.dumps(payload, separators=(",", ":")), encoding="utf-8")
    finally:
        if tmpdir is not None:
            tmpdir.cleanup()


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--source", required=True, help="Local parquet path or Dropbox URL.")
    parser.add_argument("--output", default="chars/data/equity_long_short_raw_no_impute.json")
    parser.add_argument("--release-id", default="2026-04")
    parser.add_argument("--dataset-label", default="chars_raw_no_impute")
    parser.add_argument("--min-stocks", type=int, default=100)
    parser.add_argument("--limit", type=int, default=None, help="Optional development limit for the number of characteristics.")
    parser.add_argument("--workers", type=int, default=1, help="Number of characteristics to process in parallel.")
    parser.add_argument("--directions", default="documents/signal_directions.csv")
    parser.add_argument(
        "--update-mode",
        choices=["incremental", "full"],
        default="incremental",
        help="Use incremental to append months after the existing output; use full after historical revisions or direction changes.",
    )
    parser.add_argument(
        "--characteristics",
        nargs="+",
        default=None,
        help="Optional acronyms to recompute and replace in the output. Comma-separated values are also accepted.",
    )
    args = parser.parse_args()
    build_portfolios(
        source=args.source,
        output=Path(args.output),
        release_id=args.release_id,
        dataset_label=args.dataset_label,
        min_stocks=args.min_stocks,
        limit=args.limit,
        workers=args.workers,
        directions_path=Path(args.directions) if args.directions else None,
        update_mode=args.update_mode,
        characteristics=args.characteristics,
    )


if __name__ == "__main__":
    main()
