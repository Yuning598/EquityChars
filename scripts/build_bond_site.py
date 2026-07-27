#!/usr/bin/env python3
"""Build the static corporate-bond evidence browser.

The shared BondChars directory is deliberately outside this build.  This script
reads only versioned TSV files in the present audit project and writes
``site/bond-data.js``.
"""

from __future__ import annotations

import argparse
import csv
import json
import re
from datetime import datetime, timezone
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]

EXPECTED_CORE_FIELDS = {
    "age",
    "rating",
    "time2maturity",
    "size",
    "duration",
    "VaR_5%",
    "VaR_10%",
    "BPW",
    "Roll",
    "P_HL",
    "P_FHT",
    "Amihud",
    "std_Amihud",
    "TC_IQR",
    "market_beta",
    "default_beta",
    "term_beta",
    "liq_beta",
    "drf_beta",
    "crf_beta",
    "lrf_beta",
    "vix_beta",
    "unc_beta",
    "1-month_mom",
    "variance",
    "skewness",
    "kurtosis",
    "COSKEW",
    "ISKEW",
    "Range_daily",
    "trades",
    "market_residual_variance",
    "term_default_residual_variance",
    "turnover",
    "ytm",
    "6-month_mom",
    "12-month_mom",
    "LTR_mom",
    "barQ",
    "std_barQ_1mom",
    "range_monthly",
}

BOND_PAGE_VIEWS = {
    "bond-paper-wiki.html": "papers",
    "bond-characteristics.html": "characteristics",
    "bond-return-definitions.html": "returns",
    "bond-portfolio-construction.html": "methods",
    "bond-data-provenance.html": "provenance",
}

EXPECTED_AUXILIARY_FIELDS = {
    "clean_price",
    "monthly_return",
    "monthly_return_winsorized",
    "min_daily",
    "max_daily",
    "PI_Roll",
    "PI_HL",
    "P_Zeros",
    "PI_FHT",
    "VaR_5%ES",
    "VaR_10%ES",
    "benchmark_duration",
    "volume",
}


SOURCE_EVIDENCE_NOTES = {
    "deep-tangency-portfolio": {"title_zh": "深度切点组合", "locator_zh": "定位：摘要第 1 页；132 项特征与 41 项债券变量第 4 页；Table A1 第 45 页。", "locator_en": "Locator: p. 1 abstract; 132 characteristics and 41 bond variables p. 4; Table A1 p. 45.", "quote": "We use 132 firm-level characteristics from three sources."},
    "common-risk-factors-in-the-cross-section-of-corporate-bond-returns": {"title_zh": "公司债横截面风险因子", "locator_zh": "定位：本地 PDF 第 1 页，摘要。", "locator_en": "Locator: local PDF, p. 1, abstract.", "quote": "downside risk is the strongest predictor of future bond returns."},
    "long-term-reversals-in-the-corporate-bond-market": {"title_zh": "公司债市场的长期反转", "locator_zh": "定位：本地 PDF 第 1 页，摘要；形成期与分组规则见第 10 页。", "locator_en": "Locator: local PDF, p. 1 abstract; formation rule on p. 10.", "quote": "Long-term reversals in corporate bond returns are economically and statistically significant."},
}
EVIDENCE_EXCERPTS = {
    "deep-tangency-portfolio": [
        {"page": 4, "quote": "We use 132 firm-level characteristics from three sources: (i) 41 bond-specific variables from the merged TRACE-FISD data."},
        {"page": 45, "quote": "Table A1: Description of 41 Bond Characteristics."},
    ],
    "common-risk-factors-in-the-cross-section-of-corporate-bond-returns": [
        {"page": 1, "quote": "We investigate the cross-sectional determinants of corporate bond returns and find that downside risk is the strongest predictor of future bond returns."},
    ],
    "long-term-reversals-in-the-corporate-bond-market": [
        {"page": 10, "quote": "For each month from January 1977 to December 2017, we form quintile portfolios by sorting corporate bonds based on their past 36-month cumulative returns (LTR)."},
    ],
}
LOCAL_PAPER_ARCHIVES = {
    "Deep Tangency Portfolio": ("papers/bond/feng-et-al-deep-tangency-portfolio.pdf", 45),
    "Common Risk Factors in the Cross-Section of Corporate Bond Returns": ("papers/bond/bai-bali-wen-common-risk-factors-corporate-bond-returns.pdf", 1),
    "Long-Term Reversals in the Corporate Bond Market": ("papers/bond/bali-et-al-long-term-reversals-corporate-bond-market.pdf", 1),
}


def paper_id(title: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", title.lower()).strip("-")


def build_paper_wiki(
    characteristics: list[dict[str, str]], methods: list[dict[str, str]]
) -> list[dict[str, object]]:
    """Create a source-level paper index without inventing field-level provenance."""
    entries: dict[str, dict[str, object]] = {}

    def add(
        title: str,
        authors_year: str,
        venue: str,
        source_url: str,
        locator: str,
        *,
        characteristic: bool = False,
        method: bool = False,
    ) -> str:
        key = paper_id(title)
        entry = entries.setdefault(
            key,
            {
                "paper_id": key,
                "title": title,
                "authors_year": authors_year,
                "venue": venue,
                "source_url": source_url,
                "locators": [],
                "characteristic_count": 0,
                "method_count": 0,
            },
        )
        if locator and locator not in entry["locators"]:
            entry["locators"].append(locator)
        if characteristic:
            entry["characteristic_count"] += 1
        if method:
            entry["method_count"] += 1
        return key

    for row in characteristics:
        key = add(
            "Deep Tangency Portfolio",
            "Feng, Jiang, Li, Song, and Wang (2026)",
            "Management Science, forthcoming; local author-version PDF",
            row["source_url"],
            row["evidence_pointer"],
            characteristic=True,
        )
        row["paper_id"] = key

    for row in methods:
        key = add(
            row["title"],
            row["authors_year"],
            row["outlet_status"],
            row["source_url"],
            row["evidence_pointer"],
            method=True,
        )
        row["paper_id"] = key

    add(
        "Common Risk Factors in the Cross-Section of Corporate Bond Returns",
        "Bai, Bali, and Wen (2019)",
        "Journal of Financial Economics 131, 619-642",
        "https://faculty.georgetown.edu/qw50/RiskFactor.pdf",
        "Local PDF, p. 1, abstract",
    )
    for title, (local_file, local_page) in LOCAL_PAPER_ARCHIVES.items():
        key = paper_id(title)
        if key in entries:
            entries[key]["local_file"] = local_file
            entries[key]["local_page"] = local_page
            entries[key]["evidence_excerpts"] = EVIDENCE_EXCERPTS.get(key, [])

    return sorted(
        entries.values(),
        key=lambda entry: (-int(entry["characteristic_count"]), entry["title"]),
    )

def read_tsv(path: Path) -> list[dict[str, str]]:
    with path.open(encoding="utf-8-sig", newline="") as handle:
        return list(csv.DictReader(handle, delimiter="\t"))


def assert_unique(rows: list[dict[str, str]], key: str, label: str) -> None:
    values = [row[key] for row in rows]
    if len(values) != len(set(values)):
        raise ValueError(f"{label} contains duplicate {key} values")


def validate(
    characteristics: list[dict[str, str]],
    methods: list[dict[str, str]],
    auxiliary: list[dict[str, str]],
) -> None:
    if len(characteristics) != 41:
        raise ValueError(f"expected 41 source-matched bond characteristics, got {len(characteristics)}")
    if {row["source_field"] for row in characteristics} != EXPECTED_CORE_FIELDS:
        raise ValueError("core bond-characteristic fields do not match the audited 41-field crosswalk")
    if any(row["status"] != "source-matched" for row in characteristics):
        raise ValueError("every core bond characteristic must be source-matched")
    if any(row["direction"] != "模型决定" for row in characteristics):
        raise ValueError("individual directions must remain model-determined for the 41 deep-model inputs")
    if len(auxiliary) != 13:
        raise ValueError(f"expected 13 auxiliary numeric fields, got {len(auxiliary)}")
    if {row["source_field"] for row in auxiliary} != EXPECTED_AUXILIARY_FIELDS:
        raise ValueError("auxiliary bond fields do not match the audited 13-field list")
    if any(row["core_signal"] != "no" for row in auxiliary):
        raise ValueError("auxiliary fields must not be promoted to core signals")
    if len(methods) < 10:
        raise ValueError("bond portfolio-method table is unexpectedly incomplete")
    assert_unique(characteristics, "characteristic_id", "bond characteristics")
    assert_unique(methods, "method_id", "bond methods")
    assert_unique(auxiliary, "source_field", "bond auxiliary fields")


def route_assets(view: str) -> tuple[str, str]:
    """Return the smallest asset set required by a physical Bond route."""
    scripts = [
        '    <script defer src="navigation.js"></script>',
        '    <script defer src="bond-i18n.js"></script>',
        '    <script defer src="bond-shared-data.js"></script>',
    ]
    styles: list[str] = []
    if view == "characteristics":
        styles.append('    <link rel="stylesheet" href="vendor/katex/katex.min.css">')
        scripts.extend([
            '    <script defer src="bond-characteristics-data.js"></script>',
            '    <script defer src="bond-calculations.js"></script>',
            '    <script defer src="bond-paper-drawer.js"></script>',
        ])
    elif view == "returns":
        scripts.append('    <script defer src="bond-return-evidence.js"></script>')
    elif view == "methods":
        scripts.append('    <script defer src="bond-methods-data.js"></script>')
    elif view == "papers":
        scripts.append('    <script defer src="bond-paper-drawer.js"></script>')
    scripts.append('    <script defer src="bond.js"></script>')
    if view == "characteristics":
        scripts.extend([
            '    <script defer src="vendor/katex/katex.min.js"></script>',
            '    <script defer src="bond-math.js"></script>',
        ])
    return "\n".join(styles), "\n".join(scripts)


def build_route_pages(template: Path, output_directory: Path) -> list[Path]:
    """Generate physical Bond routes with only the assets each view needs."""
    source = template.read_text(encoding="utf-8")
    marker = '<body class="bond-page">'
    if source.count(marker) != 1:
        raise ValueError("Bond template must contain exactly one unscoped bond-page body marker")
    if "<!-- BOND_ROUTE_STYLE -->" not in source or "<!-- BOND_ROUTE_SCRIPTS -->" not in source:
        raise ValueError("Bond template must contain route asset markers")

    generated: list[Path] = []
    for filename, view in BOND_PAGE_VIEWS.items():
        target = output_directory / filename
        styles, scripts = route_assets(view)
        page = source.replace(marker, f'<body class="bond-page" data-bond-view="{view}">')
        page = page.replace("<!-- BOND_ROUTE_STYLE -->", styles).replace("<!-- BOND_ROUTE_SCRIPTS -->", scripts)
        target.write_text(page, encoding="utf-8")
        generated.append(target)
    return generated

def build(output: Path) -> dict[str, object]:
    metadata = ROOT / "metadata"
    characteristics = read_tsv(metadata / "bond-characteristics.tsv")
    methods = read_tsv(metadata / "bond-portfolio-methods.tsv")
    auxiliary = read_tsv(metadata / "bond-auxiliary-fields.tsv")
    audit_rows = read_tsv(metadata / "bond-dataset-audit.tsv")
    validate(characteristics, methods, auxiliary)
    paper_wiki = build_paper_wiki(characteristics, methods)
    papers_by_id = {str(paper["paper_id"]): paper for paper in paper_wiki}
    source_evidence = [{**papers_by_id[paper_id], **notes} for paper_id, notes in SOURCE_EVIDENCE_NOTES.items()]

    shared_payload: dict[str, object] = {
        "generatedAt": datetime.now(timezone.utc).replace(microsecond=0).isoformat(),
        "audit": {row["metric"]: row for row in audit_rows},
        "auxiliaryFields": auxiliary,
        "paperWiki": paper_wiki,
        "sourceEvidence": source_evidence,
        "summary": {"characteristicCount": len(characteristics), "methodCount": len(methods)},
    }

    def write_fragment(filename: str, value: object) -> None:
        (output.parent / filename).write_text(
            "Object.assign(window.BOND_ATLAS_DATA ||= {}, " + json.dumps(value, ensure_ascii=False, indent=2) + ");\n",
            encoding="utf-8",
        )

    write_fragment("bond-shared-data.js", shared_payload)
    write_fragment("bond-characteristics-data.js", {"characteristics": characteristics})
    write_fragment("bond-methods-data.js", {"methods": methods})
    payload: dict[str, object] = {
        "generatedAt": datetime.now(timezone.utc).replace(microsecond=0).isoformat(),
        "characteristics": characteristics,
        "methods": methods,
        "auxiliaryFields": auxiliary,
        "audit": {row["metric"]: row for row in audit_rows},
        "paperWiki": paper_wiki,
        "sourceEvidence": source_evidence,
    }
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(
        "window.BOND_ATLAS_DATA = "
        + json.dumps(payload, ensure_ascii=False, indent=2)
        + ";\n",
        encoding="utf-8",
    )
    return payload


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--output",
        type=Path,
        default=ROOT / "site" / "bond-data.js",
    )
    args = parser.parse_args()
    payload = build(args.output)
    pages = build_route_pages(ROOT / "site" / "bond.html", ROOT / "site")
    print(
        "built",
        args.output,
        f"({len(payload['characteristics'])} characteristics, "
        f"{len(payload['methods'])} methods; {len(pages)} route pages)",
    )


if __name__ == "__main__":
    main()
