#!/usr/bin/env python3
"""Build the equity characteristic definitions PDF from chars_summary.csv."""

from __future__ import annotations

import argparse
import csv
import subprocess
from datetime import date
from pathlib import Path


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


def clean_year(value: str) -> str:
    if not value:
        return ""
    try:
        numeric = float(value)
    except ValueError:
        return value
    if numeric.is_integer():
        return str(int(numeric))
    return value


def load_rows(path: Path) -> list[dict[str, str]]:
    with path.open(newline="", encoding="utf-8-sig") as handle:
        return list(csv.DictReader(handle))


def build_tex(rows: list[dict[str, str]], source_csv: Path) -> str:
    body_rows = []
    for row in rows:
        body_rows.append(
            " & ".join(
                [
                    latex_escape(row["Acronym"]),
                    latex_escape(row["Description"]),
                    latex_escape(row["Author"]),
                    latex_escape(clean_year(row["Pub Year"])),
                    latex_escape(row["Category"]),
                ]
            )
            + r" \\"
        )

    table_body = "\n".join(body_rows)
    source_name = latex_escape(str(source_csv))
    generated = date.today().isoformat()

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
{{\Large\bfseries Equity Characteristics Definitions}}\\[0.35em]
{{\small Source: \texttt{{{source_name}}}. Generated {generated}.}}
\end{{center}}

\small
\begin{{longtable}}{{>{{\raggedright\arraybackslash}}p{{1.05in}} >{{\raggedright\arraybackslash}}p{{3.25in}} >{{\raggedright\arraybackslash}}p{{2.45in}} >{{\raggedleft\arraybackslash}}p{{0.55in}} >{{\raggedright\arraybackslash}}p{{1.15in}}}}
\toprule
\textbf{{Acronym}} & \textbf{{Description}} & \textbf{{Author}} & \textbf{{Year}} & \textbf{{Category}} \\
\midrule
\endfirsthead
\toprule
\textbf{{Acronym}} & \textbf{{Description}} & \textbf{{Author}} & \textbf{{Year}} & \textbf{{Category}} \\
\midrule
\endhead
\midrule
\multicolumn{{5}}{{r}}{{Continued on next page}} \\
\endfoot
\bottomrule
\endlastfoot
{table_body}
\end{{longtable}}

\end{{document}}
"""


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--source", default="documents/chars_summary.csv")
    parser.add_argument("--output", default="docs/files/equity_characteristics_definitions.pdf")
    parser.add_argument("--workdir", default="/tmp/equity-characteristics-definitions")
    args = parser.parse_args()

    source = Path(args.source)
    output = Path(args.output)
    workdir = Path(args.workdir)
    workdir.mkdir(parents=True, exist_ok=True)

    tex_path = workdir / "equity_characteristics_definitions.tex"
    tex_path.write_text(build_tex(load_rows(source), source), encoding="utf-8")

    command = ["pdflatex", "-interaction=nonstopmode", "-halt-on-error", tex_path.name]
    subprocess.run(command, cwd=workdir, check=True)
    subprocess.run(command, cwd=workdir, check=True)
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_bytes((workdir / "equity_characteristics_definitions.pdf").read_bytes())


if __name__ == "__main__":
    main()
