#!/usr/bin/env python3
"""Build corporate bond characteristic documentation from the release schema."""

from __future__ import annotations

import argparse
import csv
import subprocess
from datetime import date
from pathlib import Path

import pyarrow.feather as feather


IDENTIFIER_COLUMNS = {
    "index",
    "complete_cusip",
    "trd_exctn_dt",
    "last_trade_on",
    "date",
}


METRICS = [
    ("clean_price", "Issue terms", "Clean transaction price after TRACE cleaning.", "Clean bond price used in monthly aggregation."),
    ("size", "Issue terms", "Bond issue size or amount outstanding proxy.", "Release-level issue size variable."),
    ("rating", "Issue terms", "Numeric credit rating measure.", "Merged rating value after rating data processing."),
    ("ytm", "Issue terms", "Yield to maturity.", "Monthly bond yield-to-maturity measure."),
    ("duration", "Issue terms", "Bond duration.", "Monthly bond duration measure."),
    ("benchmark_duration", "Issue terms", "Benchmark duration matched to the bond.", "Duration of the matched benchmark Treasury or fixed-income benchmark."),
    ("age", "Issue terms", "Bond age.", "Elapsed time since issuance or first valid record."),
    ("time2maturity", "Issue terms", "Remaining time to maturity.", "Time from the monthly observation date to maturity."),
    ("Amihud", "Trading activity", "Amihud-style price impact illiquidity.", "Absolute return scaled by trading activity."),
    ("std_Amihud", "Trading activity", "Standardized Amihud illiquidity.", "Standardized version of Amihud across the bond panel."),
    ("Roll", "Trading activity", "Roll effective spread estimator.", "Roll spread estimate from serial covariance in price changes."),
    ("BPW", "Trading activity", "Bond price-width liquidity proxy.", "TRACE price dispersion or width-based liquidity metric."),
    ("TC_IQR", "Trading activity", "Interquartile transaction-cost proxy.", "Interquartile range of transaction-cost estimates."),
    ("P_HL", "Trading activity", "High-low price spread proxy.", "Monthly high-low price range liquidity proxy."),
    ("PI_Roll", "Trading activity", "Price-impact Roll proxy.", "Price-impact variant based on the Roll spread estimator."),
    ("PI_HL", "Trading activity", "Price-impact high-low proxy.", "Price-impact variant based on high-low price information."),
    ("barQ", "Trading activity", "Average quote or quantity proxy.", "Monthly average quote/quantity metric from TRACE records."),
    ("std_barQ_1mom", "Trading activity", "Standardized one-month barQ momentum.", "Standardized one-month change in barQ."),
    ("Range_daily", "Trading activity", "Daily price range.", "Within-month daily price range summary."),
    ("trades", "Trading activity", "Number of trades.", "Monthly count of valid TRACE transactions."),
    ("P_Zeros", "Trading activity", "Zero-trading probability proxy.", "Fraction or probability proxy for zero trading activity."),
    ("P_FHT", "Trading activity", "FHT liquidity proxy.", "Fong-Holden-Trzcinka style liquidity estimate."),
    ("PI_FHT", "Trading activity", "Price-impact FHT proxy.", "Price-impact variant of the FHT liquidity estimate."),
    ("volume", "Trading activity", "Trading volume.", "Monthly valid TRACE trading volume."),
    ("turnover", "Trading activity", "Bond turnover.", "Trading volume scaled by size or amount outstanding."),
    ("range_monthly", "Trading activity", "Monthly price range.", "Monthly high-low or range-based price variation."),
    ("monthly_return", "Return risk", "Monthly bond return.", "Cleaned monthly bond return."),
    ("monthly_return_winsorized", "Return risk", "Winsorized monthly bond return.", "Monthly bond return after winsorization."),
    ("variance", "Return risk", "Return variance.", "Within-window variance of bond returns."),
    ("skewness", "Return risk", "Return skewness.", "Within-window skewness of bond returns."),
    ("kurtosis", "Return risk", "Return kurtosis.", "Within-window kurtosis of bond returns."),
    ("min_daily", "Return risk", "Minimum daily return.", "Worst valid daily return within the month."),
    ("max_daily", "Return risk", "Maximum daily return.", "Best valid daily return within the month."),
    ("VaR_5%", "Return risk", "Five percent value at risk.", "Lower-tail five percent value-at-risk estimate."),
    ("VaR_10%", "Return risk", "Ten percent value at risk.", "Lower-tail ten percent value-at-risk estimate."),
    ("VaR_5%ES", "Return risk", "Five percent expected shortfall.", "Average loss conditional on the five percent lower tail."),
    ("VaR_10%ES", "Return risk", "Ten percent expected shortfall.", "Average loss conditional on the ten percent lower tail."),
    ("COSKEW", "Return risk", "Coskewness.", "Coskewness with the market or benchmark factor."),
    ("ISKEW", "Return risk", "Idiosyncratic skewness.", "Skewness of residual or idiosyncratic bond returns."),
    ("1-month_mom", "Momentum", "One-month momentum.", "Lagged one-month bond return signal."),
    ("6-month_mom", "Momentum", "Six-month momentum.", "Intermediate-horizon lagged bond return signal."),
    ("12-month_mom", "Momentum", "Twelve-month momentum.", "Longer-horizon lagged bond return signal."),
    ("LTR_mom", "Momentum", "Long-term reversal or momentum.", "Long-term return continuation/reversal signal."),
    ("market_beta", "Market exposure", "Market beta.", "Bond return beta to the market factor."),
    ("market_residual_variance", "Market exposure", "Market-model residual variance.", "Residual variance from the market factor model."),
    ("term_beta", "Market exposure", "Term beta.", "Bond return beta to the term factor."),
    ("default_beta", "Market exposure", "Default beta.", "Bond return beta to the default factor."),
    ("term_default_residual_variance", "Market exposure", "Term-default residual variance.", "Residual variance from the term/default factor model."),
    ("drf_beta", "Market exposure", "Downside-risk factor beta.", "Bond return beta to the DRF factor."),
    ("crf_beta", "Market exposure", "Credit-risk factor beta.", "Bond return beta to the CRF factor."),
    ("lrf_beta", "Market exposure", "Liquidity-risk factor beta.", "Bond return beta to the LRF factor."),
    ("liq_beta", "Market exposure", "Liquidity beta.", "Bond return beta to the liquidity factor."),
    ("vix_beta", "Market exposure", "VIX beta.", "Bond return beta to volatility innovations."),
    ("unc_beta", "Market exposure", "Uncertainty beta.", "Bond return beta to macro uncertainty innovations."),
]


LATEX_REPLACEMENTS = {
    "\\": r"\textbackslash{}",
    "&": r"\&",
    "%": r"\%",
    "$": r"\$",
    "#": r"\#",
    "_": r"\_",
    "{": r"\{",
    "}": r"\}",
    "~": r"\textasciitilde{}",
    "^": r"\textasciicircum{}",
}


def latex_escape(value: str) -> str:
    return "".join(LATEX_REPLACEMENTS.get(char, char) for char in value)


def release_columns(source: Path) -> list[str]:
    table = feather.read_table(source, memory_map=True)
    return [
        field.name
        for field in table.schema
        if field.name not in IDENTIFIER_COLUMNS and str(field.type).startswith(("int", "uint", "float", "double"))
    ]


def metric_rows() -> list[dict[str, str]]:
    return [
        {
            "Acronym": name,
            "Description": description,
            "Category": category,
            "Calculation": calculation,
        }
        for name, category, description, calculation in METRICS
    ]


def validate_against_release(source: Path) -> None:
    schema_cols = set(release_columns(source))
    documented = {name for name, *_ in METRICS}
    missing = sorted(schema_cols - documented)
    extra = sorted(documented - schema_cols)
    if missing or extra:
        raise SystemExit(
            "Bond documentation does not match release schema.\n"
            f"Missing from docs: {missing}\n"
            f"Extra in docs: {extra}"
        )


def write_summary_csv(rows: list[dict[str, str]], output: Path) -> None:
    output.parent.mkdir(parents=True, exist_ok=True)
    with output.open("w", newline="", encoding="utf-8") as handle:
        writer = csv.DictWriter(handle, fieldnames=["Acronym", "Description", "Category", "Calculation"])
        writer.writeheader()
        writer.writerows(rows)


def definitions_tex(rows: list[dict[str, str]], source_csv: Path, release_file: Path) -> str:
    body = "\n".join(
        " & ".join(
            [
                latex_escape(row["Acronym"]),
                latex_escape(row["Description"]),
                latex_escape(row["Category"]),
            ]
        )
        + r" \\"
        for row in rows
    )
    return rf"""\documentclass[10pt]{{article}}
\usepackage[utf8]{{inputenc}}
\usepackage[T1]{{fontenc}}
\usepackage{{geometry}}
\usepackage{{booktabs}}
\usepackage{{longtable}}
\usepackage{{array}}
\usepackage{{palatino}}
\usepackage{{hyperref}}
\geometry{{letterpaper, landscape, margin=0.55in}}
\hypersetup{{colorlinks=true, urlcolor=blue, linkcolor=blue}}
\setlength{{\parindent}}{{0pt}}
\renewcommand{{\arraystretch}}{{1.18}}

\begin{{document}}

\begin{{center}}
{{\Large\bfseries Corporate Bond Characteristics Definitions}}\\[0.35em]
{{\small Source: \texttt{{{latex_escape(str(source_csv))}}}; release schema: \texttt{{{latex_escape(release_file.name)}}}. Generated {date.today().isoformat()}.}}
\end{{center}}

\small
\begin{{longtable}}{{>{{\raggedright\arraybackslash}}p{{1.4in}} >{{\raggedright\arraybackslash}}p{{6.5in}} >{{\raggedright\arraybackslash}}p{{1.7in}}}}
\toprule
\textbf{{Acronym}} & \textbf{{Description}} & \textbf{{Category}} \\
\midrule
\endfirsthead
\toprule
\textbf{{Acronym}} & \textbf{{Description}} & \textbf{{Category}} \\
\midrule
\endhead
\midrule
\multicolumn{{3}}{{r}}{{Continued on next page}} \\
\endfoot
\bottomrule
\endlastfoot
{body}
\end{{longtable}}

\end{{document}}
"""


def calculations_tex(rows: list[dict[str, str]], release_file: Path) -> str:
    body = "\n".join(
        " & ".join(
            [
                latex_escape(row["Acronym"]),
                latex_escape(row["Calculation"]),
                latex_escape(row["Category"]),
            ]
        )
        + r" \\"
        for row in rows
    )
    return rf"""\documentclass[11pt]{{article}}
\usepackage[T1]{{fontenc}}
\usepackage[utf8]{{inputenc}}
\usepackage{{array}}
\usepackage{{booktabs}}
\usepackage{{geometry}}
\usepackage{{longtable}}
\usepackage{{pdflscape}}
\usepackage{{palatino}}
\usepackage[hyperindex,breaklinks]{{hyperref}}

\geometry{{a4paper, margin=0.85in}}
\hypersetup{{colorlinks=true, linkcolor=blue, citecolor=blue, urlcolor=blue}}
\setlength{{\parindent}}{{0pt}}
\renewcommand{{\arraystretch}}{{1.18}}

\title{{\Large\bfseries Corporate Bond Characteristics Calculation Documentation}}
\author{{US Equity Characteristics Data}}
\date{{\today}}

\begin{{document}}
\maketitle

\begin{{abstract}}
This document records the public-release metric definitions for the corporate
bond characteristic panel. The current GitHub repository does not contain the
private corporate bond construction code, so this document is schema-checked
against \texttt{{{latex_escape(release_file.name)}}} and describes the released
variables rather than an audited source-code formula trace.
\end{{abstract}}

\section{{Notation}}
Bond is indexed by \(i\) and calendar month by \(t\). Measures are computed
from the cleaned monthly corporate bond panel unless stated otherwise.

\begin{{landscape}}
\small
\begin{{longtable}}{{p{{0.17\linewidth}}p{{0.62\linewidth}}p{{0.15\linewidth}}}}
\caption{{Corporate Bond Characteristics Metric Table}}\label{{tab:bond-formula-table}}\\
\toprule
Characteristic & Metric definition & Category\\
\midrule
\endfirsthead
\toprule
Characteristic & Metric definition & Category\\
\midrule
\endhead
\bottomrule
\endfoot
{body}
\end{{longtable}}
\end{{landscape}}

\end{{document}}
"""


def run_pdflatex(tex_path: Path) -> None:
    command = ["pdflatex", "-interaction=nonstopmode", "-halt-on-error", tex_path.name]
    subprocess.run(command, cwd=tex_path.parent, check=True)
    subprocess.run(command, cwd=tex_path.parent, check=True)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--source", default="/mnt/e/Dropbox/Research/Data/BondChars/characteristics_raw.feather")
    parser.add_argument("--summary-csv", default="documents/bond_characteristics_summary.csv")
    parser.add_argument("--definitions-output", default="chars/files/bond_characteristics_definitions.pdf")
    parser.add_argument("--calculation-tex", default="documents/formula_docs/bond_characteristics_calculation.tex")
    parser.add_argument("--calculation-output", default="chars/files/bond_characteristics_calculation.pdf")
    parser.add_argument("--workdir", default="/tmp/bond-characteristics-docs")
    args = parser.parse_args()

    source = Path(args.source)
    rows = metric_rows()
    validate_against_release(source)

    summary_csv = Path(args.summary_csv)
    write_summary_csv(rows, summary_csv)

    workdir = Path(args.workdir)
    workdir.mkdir(parents=True, exist_ok=True)
    definitions_path = workdir / "bond_characteristics_definitions.tex"
    definitions_path.write_text(definitions_tex(rows, summary_csv, source), encoding="utf-8")
    run_pdflatex(definitions_path)
    definitions_output = Path(args.definitions_output)
    definitions_output.parent.mkdir(parents=True, exist_ok=True)
    definitions_output.write_bytes((workdir / "bond_characteristics_definitions.pdf").read_bytes())

    calculation_tex = Path(args.calculation_tex)
    calculation_tex.parent.mkdir(parents=True, exist_ok=True)
    calculation_tex.write_text(calculations_tex(rows, source), encoding="utf-8")
    work_calc = workdir / "calculation"
    work_calc.mkdir(parents=True, exist_ok=True)
    calc_work_tex = work_calc / "bond_characteristics_calculation.tex"
    calc_work_tex.write_text(calculation_tex.read_text(encoding="utf-8"), encoding="utf-8")
    run_pdflatex(calc_work_tex)
    calculation_output = Path(args.calculation_output)
    calculation_output.parent.mkdir(parents=True, exist_ok=True)
    calculation_output.write_bytes((work_calc / "bond_characteristics_calculation.pdf").read_bytes())


if __name__ == "__main__":
    main()
