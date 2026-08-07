#!/usr/bin/env python3
"""Build monthly corporate-bond quintile and decile long-short portfolios.

The public source currently provides total ``monthly_return``.  The output is
therefore explicitly labelled as total-return performance until a supplied
release contains an excess-return field.
"""

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


BOND_CHARACTERISTICS = [
    "rating", "duration", "VaR_5%", "Amihud", "1-month_mom", "ytm", "size", "age", "time2maturity",
    "turnover", "VaR_10%", "std_Amihud", "Roll", "BPW", "P_HL", "P_FHT", "TC_IQR", "Range_daily",
    "trades", "variance", "skewness", "kurtosis", "COSKEW", "ISKEW", "market_beta",
    "market_residual_variance", "term_beta", "default_beta", "term_default_residual_variance", "drf_beta",
    "crf_beta", "lrf_beta", "liq_beta", "vix_beta", "unc_beta", "6-month_mom", "12-month_mom",
    "LTR_mom", "barQ", "std_barQ_1mom", "range_monthly",
]


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


def finite_or_none(value: object, digits: int = 8) -> float | None:
    if value is None or pd.isna(value) or not math.isfinite(float(value)):
        return None
    return round(float(value), digits)


def cumulative_returns(returns: list[float | None]) -> list[float | None]:
    wealth = 1.0
    cumulative = []
    for value in returns:
        if value is None:
            cumulative.append(None)
            continue
        wealth *= 1.0 + value
        cumulative.append(finite_or_none(wealth - 1.0))
    return cumulative


def max_drawdown(returns: list[float]) -> float | None:
    if not returns:
        return None
    wealth = peak = 1.0
    drawdown = 0.0
    for value in returns:
        wealth *= 1.0 + value
        peak = max(peak, wealth)
        drawdown = min(drawdown, wealth / peak - 1.0)
    return drawdown


def annualized_sharpe(returns: list[float]) -> float | None:
    if len(returns) < 2:
        return None
    mean = sum(returns) / len(returns)
    variance = sum((value - mean) ** 2 for value in returns) / (len(returns) - 1)
    return mean / math.sqrt(variance) * math.sqrt(12) if variance > 0 else None


def calendar_year_returns(rows: list[dict[str, object]]) -> list[float]:
    wealth_by_year: dict[str, float] = {}
    for row in rows:
        value = row.get("long_short")
        if value is None or not math.isfinite(float(value)):
            continue
        year = str(row["date"])[:4]
        wealth_by_year[year] = wealth_by_year.get(year, 1.0) * (1.0 + float(value))
    return [wealth - 1.0 for _, wealth in sorted(wealth_by_year.items())]


def summarize(rows: list[dict[str, object]]) -> dict[str, object]:
    returns = [float(row["long_short"]) for row in rows if row.get("long_short") is not None]
    mean = sum(returns) / len(returns) if returns else None
    geometric = None
    if returns and all(value > -1.0 for value in returns):
        geometric = math.prod(1.0 + value for value in returns) ** (12 / len(returns)) - 1.0
    return {
        "months": len(returns),
        "arithmetic_mean_monthly": finite_or_none(mean),
        "geometric_mean_annualized": finite_or_none(geometric),
        "sharpe_annualized": finite_or_none(annualized_sharpe(returns)),
        "max_drawdown_monthly": finite_or_none(max_drawdown(returns)),
        "max_drawdown_yearly": finite_or_none(max_drawdown(calendar_year_returns(rows))),
        "max_1m_loss": finite_or_none(min(returns) if returns else None),
    }


def load_directions(path: Path | None) -> dict[str, int]:
    if path is None:
        return {}
    frame = pd.read_csv(path)
    return {
        str(row["Characteristic"]): int(row["Direction"])
        for _, row in frame.iterrows()
        if pd.notna(row.get("Characteristic")) and pd.notna(row.get("Direction"))
    }


def serialize(portfolio: pd.DataFrame) -> tuple[list[dict[str, object]], dict[str, object]]:
    rows: list[dict[str, object]] = []
    for row in portfolio.to_dict("records"):
        long_return = finite_or_none(row.get("ret_long"))
        short_return = finite_or_none(row.get("ret_short"))
        spread = None if long_return is None or short_return is None else finite_or_none(long_return - short_return)
        rows.append({
            "date": row["month"], "long": long_return, "short": short_return, "long_short": spread,
            "long_count": int(0 if pd.isna(row.get("count_long")) else row.get("count_long")),
            "short_count": int(0 if pd.isna(row.get("count_short")) else row.get("count_short")),
        })
    returns = [row.get("long_short") for row in rows]
    for row, cumulative in zip(rows, cumulative_returns(returns)):
        row["cum_long_short"] = cumulative
    return rows, summarize(rows)


def build_one(frame: pd.DataFrame, characteristic: str, direction: int, min_bonds: int) -> dict[str, object]:
    signal = frame[["month", "ret", "weight", characteristic]].rename(columns={characteristic: "signal"}).dropna(subset=["ret", "signal"])
    signal = signal.loc[signal.groupby("month")["signal"].transform("size") >= min_bonds].copy()
    signal["rank"] = signal.groupby("month")["signal"].rank(method="first")
    signal["n"] = signal.groupby("month")["signal"].transform("size")
    quantiles: dict[str, object] = {}
    for groups in (5, 10):
        sorted_signal = signal.copy()
        sorted_signal["bucket"] = (((sorted_signal["rank"] - 1) * groups / sorted_signal["n"]).astype(int) + 1).clip(1, groups)
        long_bucket, short_bucket = (groups, 1) if direction >= 0 else (1, groups)
        sorted_signal = sorted_signal.loc[sorted_signal["bucket"].isin([long_bucket, short_bucket])].copy()
        sorted_signal["leg"] = sorted_signal["bucket"].map({long_bucket: "long", short_bucket: "short"})
        ew = sorted_signal.groupby(["month", "leg"], observed=True).agg(ret=("ret", "mean"), count=("ret", "size")).unstack("leg").sort_index()
        ew.columns = [f"{metric}_{leg}" for metric, leg in ew.columns]
        ew = ew.reset_index()
        weighted = sorted_signal.loc[sorted_signal["weight"].notna() & (sorted_signal["weight"] > 0)].copy()
        weighted["weighted_return"] = weighted["ret"] * weighted["weight"]
        vw = weighted.groupby(["month", "leg"], observed=True).agg(weighted_return=("weighted_return", "sum"), weight=("weight", "sum"), count=("ret", "size")).assign(ret=lambda value: value["weighted_return"] / value["weight"]).drop(columns=["weighted_return", "weight"]).unstack("leg").sort_index()
        vw.columns = [f"{metric}_{leg}" for metric, leg in vw.columns]
        vw = vw.reset_index()
        vw_rows, vw_summary = serialize(vw)
        ew_rows, ew_summary = serialize(ew)
        quantiles[str(groups)] = {"vw": vw_rows, "ew": ew_rows, "summary": {"vw": vw_summary, "ew": ew_summary}}
    return {"direction": direction, "long_leg": "High" if direction >= 0 else "Low", "short_leg": "Low" if direction >= 0 else "High", "quantiles": quantiles}


def build(source: str, output: Path, release_id: str, return_column: str, min_bonds: int, directions_path: Path | None) -> None:
    source_path, temporary_directory = maybe_download(source)
    try:
        table = feather.read_table(source_path, memory_map=True)
        required = {"complete_cusip", "date", "size", return_column, *BOND_CHARACTERISTICS}
        missing = required - set(table.column_names)
        if missing:
            raise ValueError(f"Source is missing required columns: {', '.join(sorted(missing))}")
        columns = list(dict.fromkeys(["complete_cusip", "date", "size", return_column, *BOND_CHARACTERISTICS]))
        frame = table.select(columns).to_pandas()
        frame["date"] = pd.to_datetime(frame["date"], errors="coerce")
        frame = frame.dropna(subset=["complete_cusip", "date"]).sort_values(["complete_cusip", "date"])
        numeric_columns = list(dict.fromkeys(["size", return_column, *BOND_CHARACTERISTICS]))
        for column in numeric_columns:
            frame[column] = pd.to_numeric(frame[column], errors="coerce")
        # Form every portfolio on information available in the immediately preceding
        # calendar month and realize the supplied current-month return.  Do not treat
        # a stale observation as t-1 when a bond disappears from the panel temporarily.
        frame["__month_index"] = frame["date"].dt.year * 12 + frame["date"].dt.month
        previous_month_index = frame.groupby("complete_cusip", sort=False)["__month_index"].shift(1)
        has_previous_calendar_month = frame["__month_index"].sub(previous_month_index).eq(1)
        lag_columns = list(dict.fromkeys(["size", *BOND_CHARACTERISTICS]))
        frame[lag_columns] = frame.groupby("complete_cusip", sort=False)[lag_columns].shift(1)
        frame.loc[~has_previous_calendar_month, lag_columns] = pd.NA
        frame["month"] = frame["date"].dt.to_period("M").astype(str)
        # ``size`` is both a sorting characteristic and the amount-outstanding
        # weight.  Keep the signal column and copy it to a dedicated weight column.
        frame["weight"] = frame["size"]
        frame = frame.rename(columns={return_column: "ret"})
        directions = load_directions(directions_path)
        available = [name for name in BOND_CHARACTERISTICS if name in frame.columns]
        if len(available) != len(BOND_CHARACTERISTICS):
            raise AssertionError("Bond long-short output must contain all 41 characteristics.")
        series = {name: build_one(frame, name, directions.get(name, 1), min_bonds) for name in available}
        payload = {
            "metadata": {
                "release_id": release_id, "source": Path(urlparse(source).path).name if source.startswith("http") else source_path.name,
                "generated_at": datetime.now(timezone.utc).isoformat(timespec="seconds"), "frequency": "monthly",
                "return_column": return_column, "return_basis": "total_return_pending_excess_return" if return_column == "monthly_return" else "excess_return",
                "signal_timing": "characteristics and amount outstanding come from the immediately preceding calendar month; the current-month return is realized after formation",
                "weighting": "equal-weighted and size (amount outstanding)-weighted", "min_bonds": min_bonds,
                "orientation": "direction_adjusted" if directions_path else "high_minus_low",
                "formation": "monthly quintile and decile sorts; the default is High minus Low unless a literature-confirmed direction CSV is supplied",
            },
            "characteristics": available, "series": series,
        }
        output.parent.mkdir(parents=True, exist_ok=True)
        output.write_text(json.dumps(payload, separators=(",", ":")), encoding="utf-8")
    finally:
        if temporary_directory is not None:
            temporary_directory.cleanup()


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--source", required=True, help="Local Feather path or Dropbox URL.")
    parser.add_argument("--output", default="chars/data/bond_long_short_raw.json")
    parser.add_argument("--release-id", default="2024-12")
    parser.add_argument("--return-column", default="monthly_return")
    parser.add_argument("--min-bonds", type=int, default=30)
    parser.add_argument("--directions", type=Path, default=None)
    args = parser.parse_args()
    build(args.source, Path(args.output), args.release_id, args.return_column, args.min_bonds, args.directions)


if __name__ == "__main__":
    main()
