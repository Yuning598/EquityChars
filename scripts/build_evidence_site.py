#!/usr/bin/env python3
"""Build the static EquityChars evidence browser.

The generated site is deliberately dependency-free. It reads the canonical TSV
artifacts, resolves curated line pointers to source excerpts and PDF pages, and
writes ``site/data.js`` so the site also works when opened directly from disk.
"""

from __future__ import annotations

import argparse
import csv
import json
import re
import subprocess
from collections import Counter, defaultdict
from datetime import datetime
from functools import lru_cache
from pathlib import Path
from typing import Iterable
from urllib.parse import quote

try:
    from scripts.extract_html_text import extract_lines
except ModuleNotFoundError:  # Direct execution from the scripts directory.
    from extract_html_text import extract_lines


STOPWORDS = {
    "a",
    "an",
    "and",
    "are",
    "as",
    "at",
    "be",
    "by",
    "for",
    "from",
    "in",
    "into",
    "is",
    "it",
    "of",
    "on",
    "or",
    "that",
    "the",
    "their",
    "this",
    "to",
    "using",
    "with",
}

EVIDENCE_POINTER_RE = re.compile(
    r"(?P<path>extracted-text/[^:;\s()]+\.txt):"
    r"(?P<ranges>\d+(?:-\d+)?(?:,\d+(?:-\d+)?)*)"
    r"(?:@(?P<source_path>(?:papers|supporting-information)/[^;\s()]+\.pdf))?"
)

LOCAL_AUDIT_POINTER_RE = re.compile(
    r"(?P<path>(?:notes|metadata|reports)/[^:;\s]+?\.(?:md|tsv|json))"
)

SOURCE_SENTENCE_EXCLUSIONS = (
    "downloaded from www.",
    "it is illegal to make unauthorized copies",
    "publisher permission",
)

DIRECTION_LABELS = {
    "H-L": "高值做多 · 低值做空",
    "L-H": "低值做多 · 高值做空",
    "not-simple": "非简单多空",
    "ambiguous": "方向待核",
    "transformed": "经过变换",
    "N/A": "不适用",
}

METHOD_FORMULA_LATEX = {
    "BM_IA(i,t) = BM(i,t) − mean[BM(j,t) | j ∈ industry(i)]": (
        r"\(\displaystyle \mathrm{BM\_IA}_{i,t}=\mathrm{BM}_{i,t}-"
        r"\frac{1}{N_{\mathrm{ind},t}}\sum_{j\in\mathrm{ind}(i)}"
        r"\mathrm{BM}_{j,t}\)"
    ),
    "BM = (SEQ + TXDITC − PSTK) / (PRC × SHROUT); BM_IA = BM − industry mean(BM)": (
        r"\(\displaystyle \mathrm{BM}_{i,t}="
        r"\frac{\mathrm{SEQ}_{i,t}+\mathrm{TXDITC}_{i,t}-\mathrm{PSTK}_{i,t}}"
        r"{\mathrm{PRC}_{i,t}\mathrm{SHROUT}_{i,t}},\quad "
        r"\mathrm{BM\_IA}_{i,t}=\mathrm{BM}_{i,t}-"
        r"\overline{\mathrm{BM}}_{\mathrm{industry},t}\)"
    ),
    "CFP_IA(i,t) = CFP(i,t) − mean[CFP(j,t) | j ∈ industry(i)]": (
        r"\(\displaystyle \mathrm{CFP\_IA}_{i,t}=\mathrm{CFP}_{i,t}-"
        r"\overline{\mathrm{CFP}}_{\mathrm{industry},t}\)"
    ),
    "CFP = IB/ME if DP missing; otherwise (IB + DP)/ME; CFP_IA = CFP − industry mean(CFP)": (
        r"\(\displaystyle \mathrm{CFP}_{i,t}="
        r"\begin{cases}\mathrm{IB}_{i,t}/\mathrm{ME}_{i,t},"
        r"&\mathrm{DP}\text{ missing}\\"
        r"(\mathrm{IB}_{i,t}+\mathrm{DP}_{i,t})/\mathrm{ME}_{i,t},"
        r"&\text{otherwise}\end{cases},\quad "
        r"\mathrm{CFP\_IA}_{i,t}=\mathrm{CFP}_{i,t}-"
        r"\overline{\mathrm{CFP}}_{\mathrm{industry},t}\)"
    ),
    "CHEMPIA(i,t) = ΔEMP(i,t) − mean[ΔEMP(j,t) | j ∈ industry(i)]": (
        r"\(\displaystyle \mathrm{CHEMPIA}_{i,t}=\Delta\mathrm{EMP}_{i,t}-"
        r"\overline{\Delta\mathrm{EMP}}_{\mathrm{industry},t}\)"
    ),
    "HIRE = (EMP_t − EMP_t−1) / EMP_t−1; CHEMPIA = HIRE − industry mean(HIRE)": (
        r"\(\displaystyle \mathrm{HIRE}_{i,t}="
        r"\frac{\mathrm{EMP}_{i,t}-\mathrm{EMP}_{i,t-1}}"
        r"{\mathrm{EMP}_{i,t-1}},\quad "
        r"\mathrm{CHEMPIA}_{i,t}=\mathrm{HIRE}_{i,t}-"
        r"\overline{\mathrm{HIRE}}_{\mathrm{industry},t}\)"
    ),
    "ME_IA(i,t) = ME(i,t) − mean[ME(j,t) | j ∈ industry(i)]": (
        r"\(\displaystyle \mathrm{ME\_IA}_{i,t}=\mathrm{ME}_{i,t}-"
        r"\overline{\mathrm{ME}}_{\mathrm{industry},t}\)"
    ),
    "ME = PRC × SHROUT; ME_IA = ME − industry mean(ME)": (
        r"\(\displaystyle \mathrm{ME}_{i,t}="
        r"\mathrm{PRC}_{i,t}\mathrm{SHROUT}_{i,t},\quad "
        r"\mathrm{ME\_IA}_{i,t}=\mathrm{ME}_{i,t}-"
        r"\overline{\mathrm{ME}}_{\mathrm{industry},t}\)"
    ),
    "η = (market value of firm − total assets) / cash holdings": (
        r"\(\displaystyle \eta_{i,t}="
        r"\frac{\mathrm{MVF}_{i,t}-\mathrm{AT}_{i,t}}{\mathrm{CHE}_{i,t}}\)"
    ),
    "CASHPR = (PRC × SHROUT + DLTT − AT) / CHE": (
        r"\(\displaystyle \mathrm{CASHPR}_{i,t}="
        r"\frac{\mathrm{PRC}_{i,t}\mathrm{SHROUT}_{i,t}"
        r"+\mathrm{DLTT}_{i,t}-\mathrm{AT}_{i,t}}{\mathrm{CHE}_{i,t}}\)"
    ),
    "C = CHE / (CSHO × PRCC_F − CEQ)": (
        r"\(\displaystyle C_{i,t}=\frac{\mathrm{CHE}_{i,t}}"
        r"{\mathrm{CSHO}_{i,t}\mathrm{PRCC\_F}_{i,t}-\mathrm{CEQ}_{i,t}}\)"
    ),
    "CashProd = (abs(PRC) × SHROUT − AT) / CHE": (
        r"\(\displaystyle \mathrm{CashProd}_{i,t}="
        r"\frac{|\mathrm{PRC}_{i,t}|\mathrm{SHROUT}_{i,t}-"
        r"\mathrm{AT}_{i,t}}{\mathrm{CHE}_{i,t}}\)"
    ),
    "cashpr = (mve_f + DLTT − AT) / CHE": (
        r"\(\displaystyle \mathrm{cashpr}_{i,t}="
        r"\frac{\mathrm{mve\_f}_{i,t}+\mathrm{DLTT}_{i,t}-"
        r"\mathrm{AT}_{i,t}}{\mathrm{CHE}_{i,t}}\)"
    ),
    "RET − RF = α + β(MKT−RF) + ε; RVAR_CAPM = Var(ε)": (
        r"\(\displaystyle \mathrm{RET}_{i,d}-\mathrm{RF}_{d}="
        r"\alpha_i+\beta_i(\mathrm{MKT}_{d}-\mathrm{RF}_{d})+\varepsilon_{i,d},"
        r"\quad \mathrm{RVAR\_CAPM}_{i,t}=\operatorname{Var}(\varepsilon_{i,d})\)"
    ),
    "RVAR_CAPM = sample Var(ε) from a rolling CAPM excess-return regression": (
        r"\(\displaystyle \mathrm{RVAR\_CAPM}_{i,t}="
        r"\frac{1}{w-1}\sum_{d\in W_t}"
        r"(\varepsilon_{i,d}-\overline{\varepsilon}_{i,t})^2\)"
    ),
    "RET − RF = α + βMKT(MKT−RF) + βSMB·SMB + βHML·HML + ε; RVAR_FF3 = Var(ε)": (
        r"\(\displaystyle \mathrm{RET}_{i,d}-\mathrm{RF}_{d}="
        r"\alpha_i+\beta_i^{M}(\mathrm{MKT}_{d}-\mathrm{RF}_{d})+"
        r"\beta_i^{S}\mathrm{SMB}_{d}+\beta_i^{H}\mathrm{HML}_{d}+"
        r"\varepsilon_{i,d},\quad "
        r"\mathrm{RVAR\_FF3}_{i,t}=\operatorname{Var}(\varepsilon_{i,d})\)"
    ),
    "RVAR_FF3 = sample Var(ε) from a rolling Fama–French 3-factor regression": (
        r"\(\displaystyle \mathrm{RVAR\_FF3}_{i,t}="
        r"\frac{1}{w-1}\sum_{d\in W_t}"
        r"(\varepsilon_{i,d}-\overline{\varepsilon}_{i,t})^2\)"
    ),
    "RVAR_MEAN = Var(daily RET)": (
        r"\(\displaystyle \mathrm{RVAR\_MEAN}_{i,t}="
        r"\operatorname{Var}_{d\in W_t}(\mathrm{RET}_{i,d})\)"
    ),
    "RVAR_MEAN = Var(daily RET) over a rolling 3-month window": (
        r"\(\displaystyle \mathrm{RVAR\_MEAN}_{i,t}="
        r"\operatorname{Var}_{d\in W_{t-2:t}}(\mathrm{RET}_{i,d})\)"
    ),
    "CHMOM = compound(t−6,t−1) − compound(t−12,t−7)": (
        r"\(\displaystyle \mathrm{CHMOM}_{i,t}="
        r"\left[\prod_{\tau=t-6}^{t-1}(1+R_{i,\tau})-1\right]-"
        r"\left[\prod_{\tau=t-12}^{t-7}(1+R_{i,\tau})-1\right]\)"
    ),
    "INVEST = (ΔPPEGT + ΔINVT) / AT(t−1)": (
        r"\(\displaystyle \mathrm{INVEST}_{i,t}="
        r"\frac{\Delta\mathrm{PPEGT}_{i,t}+\Delta\mathrm{INVT}_{i,t}}"
        r"{\mathrm{AT}_{i,t-1}}\)"
    ),
    "ROIC = (EBIT − NOPI) / (LT + CEQ − CHE)": (
        r"\(\displaystyle \mathrm{ROIC}_{i,t}="
        r"\frac{\mathrm{EBIT}_{i,t}-\mathrm{NOPI}_{i,t}}"
        r"{\mathrm{LT}_{i,t}+\mathrm{CEQ}_{i,t}-\mathrm{CHE}_{i,t}}\)"
    ),
}


def read_tsv(path: Path) -> list[dict[str, str]]:
    with path.open(encoding="utf-8", newline="") as handle:
        return list(csv.DictReader(handle, delimiter="\t"))


def tokens(text: str) -> set[str]:
    return {
        word
        for word in re.findall(r"[a-z0-9]+", text.lower())
        if len(word) > 1 and word not in STOPWORDS
    }


def parse_ranges(spec: str) -> list[tuple[int, int]]:
    ranges: list[tuple[int, int]] = []
    for part in spec.split(","):
        if "-" in part:
            start_text, end_text = part.split("-", 1)
        else:
            start_text = end_text = part
        start, end = int(start_text), int(end_text)
        ranges.append((min(start, end), max(start, end)))
    return ranges


def parse_evidence_pointers(pointer: str) -> list[dict[str, object]]:
    parsed: list[dict[str, object]] = []
    for match in EVIDENCE_POINTER_RE.finditer(pointer):
        item: dict[str, object] = {
            "path": match.group("path"),
            "ranges": parse_ranges(match.group("ranges")),
        }
        if match.group("source_path"):
            item["source_path"] = match.group("source_path")
        parsed.append(item)
    return parsed


def local_audit_sources(
    pointer: str, project_root: Path
) -> list[dict[str, str]]:
    sources: list[dict[str, str]] = []
    seen: set[str] = set()
    for match in LOCAL_AUDIT_POINTER_RE.finditer(pointer):
        path = match.group("path")
        if path in seen or not (project_root / path).is_file():
            continue
        seen.add(path)
        sources.append({"path": path, "href": web_path(path)})
    return sources


def text_lines_with_pages(text: str) -> list[tuple[str, int]]:
    """Return one-based text lines with their one-based PDF page."""
    page = 1
    mapped: list[tuple[str, int]] = []
    for raw in text.split("\n"):
        form_feeds = raw.count("\f")
        if form_feeds:
            page += form_feeds
            raw = raw.replace("\f", "")
        mapped.append((raw, page))
    return mapped


def normalized_source_text(text: str) -> str:
    return re.sub(r"\s+", " ", text).strip()


def sentence_candidates(text: str) -> list[str]:
    clean = normalized_source_text(text)
    if not clean:
        return []
    sentences = re.split(r"(?<=[.!?])\s+(?=[A-Z0-9(\"'])", clean)
    result = []
    for sentence in sentences:
        sentence = sentence.strip()
        lower = sentence.lower()
        if len(sentence) < 35:
            continue
        if lower.startswith("empty cell"):
            continue
        if sum(character.isdigit() for character in sentence) / len(sentence) > 0.16:
            continue
        if any(marker in lower for marker in SOURCE_SENTENCE_EXCLUSIONS):
            continue
        result.append(sentence[:700])
    return result


def sentence_score(sentence: str, query_tokens: set[str]) -> float:
    sentence_tokens = tokens(sentence)
    if not sentence_tokens:
        return 0
    overlap = len(sentence_tokens & query_tokens)
    directional = len(
        sentence_tokens
        & {
            "buy",
            "decile",
            "high",
            "highest",
            "low",
            "lowest",
            "long",
            "portfolio",
            "rank",
            "sell",
            "short",
            "sort",
            "spread",
            "weight",
            "weights",
        }
    )
    return overlap * 2 + directional + min(len(sentence), 320) / 1000


def select_sentences(text: str, query_tokens: set[str], limit: int = 2) -> list[str]:
    candidates = sentence_candidates(text)
    if not candidates:
        fallback = normalized_source_text(text)
        return [fallback[:500]] if fallback else []
    ranked = sorted(
        enumerate(candidates),
        key=lambda item: (-sentence_score(item[1], query_tokens), item[0]),
    )[:limit]
    return [sentence for _, sentence in sorted(ranked)]


def layout_text_variants(lines: list[str]) -> list[str]:
    """Return reading-order variants for text extracted with ``-layout``.

    Multi-column PDF text commonly places both columns on the same physical
    line. Joining those lines directly produces sentences that jump between
    columns. When a range has repeated wide gaps, keep each column together
    and use those column streams as the candidate reading order.
    """
    full_text = " ".join(lines)
    columns: list[list[str]] = []
    split_lines = 0
    for line in lines:
        parts = [part.strip() for part in re.split(r"\s{6,}", line.strip()) if part.strip()]
        if len(parts) > 1:
            split_lines += 1
        for index, part in enumerate(parts):
            while len(columns) <= index:
                columns.append([])
            columns[index].append(part)

    populated = [" ".join(column) for column in columns if len(" ".join(column)) >= 60]
    if split_lines >= 3 and len(populated) >= 2:
        return populated
    return [full_text]


def select_layout_sentences(
    lines: list[str], query_tokens: set[str], limit: int = 2
) -> list[str]:
    candidates: list[tuple[float, int, int, str]] = []
    for variant_index, variant in enumerate(layout_text_variants(lines)):
        sentences = sentence_candidates(variant)
        if not sentences:
            fallback = normalized_source_text(variant)
            if fallback:
                sentences = [fallback[:500]]
        for sentence_index, sentence in enumerate(sentences):
            candidates.append(
                (
                    sentence_score(sentence, query_tokens),
                    variant_index,
                    sentence_index,
                    sentence,
                )
            )

    ranked = sorted(
        candidates,
        key=lambda item: (-item[0], item[1], item[2]),
    )
    selected: list[str] = []
    seen: set[str] = set()
    for _, _, _, sentence in ranked:
        key = sentence.lower()
        if key in seen:
            continue
        seen.add(key)
        selected.append(sentence)
        if len(selected) == limit:
            break
    return selected


def evidence_from_ranges(
    path: Path,
    ranges: Iterable[tuple[int, int]],
    query_tokens: set[str],
) -> list[dict[str, object]]:
    lines = text_lines_with_pages(path.read_text(encoding="utf-8", errors="replace"))
    evidence: list[dict[str, object]] = []
    seen: set[tuple[str, int]] = set()
    for start, end in ranges:
        start = max(start, 1)
        end = min(end, len(lines))
        if start > end:
            continue
        by_page: dict[int, list[str]] = {}
        for line, page in lines[start - 1 : end]:
            if line.strip():
                by_page.setdefault(page, []).append(line)
        for page, page_lines in by_page.items():
            for sentence in select_layout_sentences(page_lines, query_tokens, limit=1):
                key = (sentence, page)
                if key in seen:
                    continue
                seen.add(key)
                evidence.append(
                    {
                        "text": sentence,
                        "page": page,
                        "line_start": start,
                        "line_end": end,
                        "method": "curated_lines",
                        "method_label": "人工定位证据",
                        "text_path": path.as_posix(),
                    }
                )
    return evidence[:8]


@lru_cache(maxsize=None)
def extract_pdf_text(pdf_path: Path) -> str:
    try:
        completed = subprocess.run(
            ["pdftotext", "-layout", str(pdf_path), "-"],
            check=False,
            capture_output=True,
            text=True,
            timeout=120,
        )
    except FileNotFoundError:
        try:
            from pypdf import PdfReader

            reader = PdfReader(pdf_path)
            pages: list[str] = []
            for page in reader.pages:
                try:
                    pages.append(page.extract_text(extraction_mode="layout") or "")
                except TypeError:
                    pages.append(page.extract_text() or "")
            return "\f".join(pages)
        except Exception:
            return ""
    except subprocess.TimeoutExpired:
        return ""
    return completed.stdout if completed.returncode == 0 else ""


def auto_evidence_from_pdf(
    pdf_path: Path, query_tokens: set[str]
) -> list[dict[str, object]]:
    text = extract_pdf_text(pdf_path)
    if not text:
        return []
    candidates: list[tuple[float, int, str]] = []
    for page, page_text in enumerate(text.split("\f"), start=1):
        for sentence in sentence_candidates(page_text):
            score = sentence_score(sentence, query_tokens)
            if score > 0:
                candidates.append((score, page, sentence))
    selected: list[dict[str, object]] = []
    seen: set[str] = set()
    for _, page, sentence in sorted(candidates, reverse=True):
        normalized = sentence.lower()
        if normalized in seen:
            continue
        seen.add(normalized)
        selected.append(
            {
                "text": sentence,
                "page": page,
                "line_start": None,
                "line_end": None,
                "method": "automatic_pdf_search",
                "method_label": "自动定位候选句",
                "text_path": "",
            }
        )
        if len(selected) == 3:
            break
    return selected


def auto_evidence_from_html(
    html_path: Path, query_tokens: set[str]
) -> list[dict[str, object]]:
    lines = extract_lines(
        html_path.read_text(encoding="utf-8", errors="replace")
    )
    candidates: list[tuple[float, int, str]] = []
    for index, sentence in enumerate(sentence_candidates("\n".join(lines))):
        score = sentence_score(sentence, query_tokens)
        if score > 0:
            candidates.append((score, index, sentence))

    selected: list[dict[str, object]] = []
    seen: set[str] = set()
    for _, _, sentence in sorted(candidates, key=lambda item: (-item[0], item[1])):
        normalized = sentence.lower()
        if normalized in seen:
            continue
        seen.add(normalized)
        selected.append(
            {
                "text": sentence,
                "page": None,
                "line_start": None,
                "line_end": None,
                "method": "automatic_html_search",
                "method_label": "自动定位 HTML 候选句",
                "text_path": "",
            }
        )
        if len(selected) == 3:
            break
    return selected


@lru_cache(maxsize=None)
def pdf_page_count(pdf_path: Path) -> int | None:
    try:
        completed = subprocess.run(
            ["pdfinfo", str(pdf_path)],
            check=False,
            capture_output=True,
            text=True,
            timeout=30,
        )
    except FileNotFoundError:
        try:
            from pypdf import PdfReader

            return len(PdfReader(pdf_path).pages)
        except Exception:
            return None
    except subprocess.TimeoutExpired:
        return None
    match = re.search(r"^Pages:\s+(\d+)", completed.stdout, re.MULTILINE)
    return int(match.group(1)) if match else None


def external_evidence_url(pointer: str, paper: dict[str, str]) -> str:
    match = re.search(r"https?://[^\s;]+", pointer)
    if match:
        return match.group(0)
    source_url = paper.get("source_url", "").strip()
    if source_url:
        return source_url
    doi = paper.get("doi", "").strip()
    return f"https://doi.org/{doi}" if doi else ""


def web_path(path: str) -> str:
    return "../" + quote(path, safe="/")


def select_indicator_paper(
    evidence_row: dict[str, str],
    characteristic: dict[str, str],
    papers: dict[str, dict[str, str]],
) -> dict[str, str]:
    source_paper_id = evidence_row["paper_id"]
    authoritative_paper_id = characteristic.get(
        "authoritative_paper_id", ""
    ).strip()
    selected_id = authoritative_paper_id or source_paper_id
    if selected_id not in papers:
        raise ValueError(
            f"Indicator {characteristic.get('characteristic_id', '')} "
            f"references missing paper {selected_id}"
        )
    return papers[selected_id]


def build_method_variant(
    row: dict[str, str], project_root: Path
) -> dict[str, object]:
    source_path = row.get("source_path", "").strip()
    source_url = row.get("source_url", "").strip()
    page_text = row.get("source_page", "").strip()
    source_page = int(page_text) if page_text.isdigit() else None
    source_href = ""
    if source_path and (project_root / source_path).is_file():
        source_href = web_path(source_path)
        if source_page:
            source_href = f"{source_href}#page={source_page}"
    elif source_url:
        source_href = source_url

    return {
        "id": row.get("variant_id", ""),
        "source_id": row.get("source_id", "") or row.get("variant_id", ""),
        "role": row.get("variant_role", ""),
        "source_label": row.get("source_label", ""),
        "source_year": row.get("source_year", ""),
        "formula": row.get("formula", ""),
        "formula_latex": METHOD_FORMULA_LATEX.get(
            row.get("formula", ""), row.get("formula_latex", "")
        ),
        "data_fields": row.get("data_fields", ""),
        "calculation_window": {
            "zh": row.get("calculation_window_zh", ""),
            "en": row.get("calculation_window_en", ""),
        },
        "accounting_lag": {
            "zh": row.get("accounting_lag_zh", ""),
            "en": row.get("accounting_lag_en", ""),
        },
        "portfolio_rule": {
            "zh": row.get("portfolio_rule_zh", ""),
            "en": row.get("portfolio_rule_en", ""),
        },
        "direction": row.get("direction", ""),
        "formula_match": row.get("formula_match", ""),
        "notes": {
            "zh": row.get("notes_zh", ""),
            "en": row.get("notes_en", ""),
        },
        "source_path": source_path,
        "source_page": source_page,
        "source_href": source_href,
    }


def load_literature_formulas(
    path: Path,
    project_root: Path,
    valid_characteristics: set[str],
) -> dict[str, list[dict[str, object]]]:
    grouped: dict[str, list[dict[str, object]]] = defaultdict(list)
    seen: set[tuple[str, str]] = set()
    for row in read_tsv(path):
        characteristic_id = row.get("characteristic_id", "").strip()
        source_id = row.get("source_id", "").strip()
        if characteristic_id not in valid_characteristics:
            raise ValueError(
                f"Literature formula references missing characteristic "
                f"{characteristic_id}"
            )
        key = (characteristic_id, source_id)
        if key in seen:
            raise ValueError(
                f"Duplicate literature formula for {characteristic_id}/{source_id}"
            )
        seen.add(key)
        normalized = dict(row)
        normalized["variant_id"] = source_id
        grouped[characteristic_id].append(
            build_method_variant(normalized, project_root)
        )
    missing = sorted(valid_characteristics - set(grouped))
    if missing:
        raise ValueError(
            f"Missing literature formulas for characteristics: {missing}"
        )
    return grouped


def merge_literature_variants(
    primary: list[dict[str, object]],
    supplemental: list[dict[str, object]],
) -> list[dict[str, object]]:
    """Replace duplicate source rows with richer audited variants.

    ``literature-formulas.tsv`` guarantees one source formula per signal.
    ``method-variants.tsv`` adds publications or formal supplements where
    more than one source formula exists.  A supplemental row for the same
    source replaces the compact generated row but keeps its match label.
    """

    merged = [dict(variant) for variant in primary]
    index = {
        str(variant.get("source_id") or variant.get("id")): position
        for position, variant in enumerate(merged)
    }
    for variant in supplemental:
        source_id = str(variant.get("source_id") or variant.get("id"))
        if source_id in index:
            position = index[source_id]
            replacement = dict(variant)
            replacement["formula_match"] = (
                replacement.get("formula_match")
                or merged[position].get("formula_match", "")
            )
            merged[position] = replacement
        else:
            if not variant.get("formula_match"):
                variant["formula_match"] = "paper_definition"
            index[source_id] = len(merged)
            merged.append(dict(variant))
    return merged


def attach_variant_evidence(
    variants: list[dict[str, object]],
    excerpts: list[dict[str, object]],
) -> None:
    """Add the first matching PDF page when a variant only links a file."""

    for variant in variants:
        if variant.get("source_page") or not variant.get("source_path"):
            continue
        source_path = str(variant["source_path"])
        source_href = web_path(source_path)
        excerpt = next(
            (
                item
                for item in excerpts
                if (
                    str(item.get("source_file", "")) == source_path
                    or str(item.get("href", "")).startswith(source_href)
                )
                and item.get("href")
            ),
            None,
        )
        if not excerpt:
            continue
        variant["source_page"] = excerpt.get("page")
        variant["source_href"] = excerpt["href"]


def build_calculation(row: dict[str, str]) -> dict[str, object]:
    return {
        "formula_latex": row.get("formula_latex", ""),
        "formula_direction": row.get("formula_direction", ""),
        "data_fields": row.get("data_fields", ""),
        "calculation_window": {
            "zh": row.get("calculation_window_zh", ""),
            "en": row.get("calculation_window_en", ""),
        },
        "accounting_lag": {
            "zh": row.get("accounting_lag_zh", ""),
            "en": row.get("accounting_lag_en", ""),
        },
        "source_label": row.get("source_label", ""),
        "source_url": row.get("source_url", ""),
        "provenance": row.get("provenance", ""),
        "source_commit": row.get("source_commit", ""),
        "code_path": row.get("code_path", ""),
        "code_lines": row.get("code_lines", ""),
        "code_frequency": {
            "zh": row.get("code_frequency_zh", ""),
            "en": row.get("code_frequency_en", ""),
        },
        "reconcile_url": row.get("reconcile_url", ""),
        "notes": {
            "zh": row.get("notes_zh", ""),
            "en": row.get("notes_en", ""),
        },
    }


def load_calculations(
    path: Path,
    valid_characteristics: set[str],
) -> dict[str, dict[str, object]]:
    calculations: dict[str, dict[str, object]] = {}
    for row in read_tsv(path):
        characteristic_id = row.get("characteristic_id", "").strip()
        if characteristic_id not in valid_characteristics:
            raise ValueError(
                f"Calculation references missing characteristic "
                f"{characteristic_id}"
            )
        if characteristic_id in calculations:
            raise ValueError(
                f"Duplicate calculation for characteristic {characteristic_id}"
            )
        calculations[characteristic_id] = build_calculation(row)
    missing = sorted(valid_characteristics - set(calculations))
    if missing:
        raise ValueError(f"Missing calculations for characteristics: {missing}")
    return calculations


def load_method_designs(
    path: Path,
    expected_characteristics: set[str],
) -> dict[str, dict[str, object]]:
    """Load research designs used when no simple long-short spread exists."""

    required_fields = {
        "method_family",
        "method_summary_zh",
        "signal_role_zh",
        "signal_role_en",
        "estimand_zh",
        "estimand_en",
        "interpretation_zh",
    }
    designs: dict[str, dict[str, object]] = {}
    for row in read_tsv(path):
        characteristic_id = row.get("characteristic_id", "").strip()
        if characteristic_id not in expected_characteristics:
            raise ValueError(
                "Method design references a characteristic that is not "
                f"classified as not-simple: {characteristic_id}"
            )
        if characteristic_id in designs:
            raise ValueError(
                f"Duplicate method design for characteristic {characteristic_id}"
            )
        missing_fields = sorted(
            field for field in required_fields if not row.get(field, "").strip()
        )
        if missing_fields:
            raise ValueError(
                f"Method design for {characteristic_id} is missing "
                f"fields: {missing_fields}"
            )
        designs[characteristic_id] = {
            "family": row["method_family"].strip(),
            "summary": {
                "zh": row["method_summary_zh"].strip(),
                "en": "",
            },
            "signal_role": {
                "zh": row["signal_role_zh"].strip(),
                "en": row["signal_role_en"].strip(),
            },
            "estimand": {
                "zh": row["estimand_zh"].strip(),
                "en": row["estimand_en"].strip(),
            },
            "interpretation": {
                "zh": row["interpretation_zh"].strip(),
                "en": "",
            },
        }
    missing = sorted(expected_characteristics - set(designs))
    if missing:
        raise ValueError(
            f"Missing method designs for not-simple characteristics: {missing}"
        )
    return designs


def load_method_variants(
    path: Path,
    project_root: Path,
    valid_characteristics: set[str] | None = None,
) -> dict[str, list[dict[str, object]]]:
    grouped: dict[str, list[dict[str, object]]] = defaultdict(list)
    if not path.is_file():
        return grouped
    for row in read_tsv(path):
        characteristic_id = row.get("characteristic_id", "").strip()
        if (
            valid_characteristics is not None
            and characteristic_id not in valid_characteristics
        ):
            raise ValueError(
                f"Method variant references missing characteristic "
                f"{characteristic_id}"
            )
        # Project implementation is generated from the authoritative
        # calculations.tsv/CIZ-code mapping.  Older hand-maintained project
        # rows are intentionally not shipped as competing definitions.
        if row.get("variant_role", "").strip() == "project_implementation":
            continue
        grouped[characteristic_id].append(
            build_method_variant(row, project_root)
        )
    return grouped


def build_indicator(
    evidence_row: dict[str, str],
    characteristic: dict[str, str],
    paper: dict[str, str],
    project_root: Path,
) -> dict[str, object]:
    local_file = paper.get("local_file", "").strip()
    local_path = project_root / local_file if local_file else None
    artifact_type = (
        local_path.suffix.lower().lstrip(".")
        if local_path and local_path.exists()
        else "none"
    )
    query = " ".join(
        [
            evidence_row.get("raw_signal", ""),
            evidence_row.get("breakpoints", ""),
            evidence_row.get("weighting", ""),
            evidence_row.get("rebalancing_frequency", ""),
            evidence_row.get("long_leg", ""),
            evidence_row.get("short_leg", ""),
            characteristic.get("characteristic_name", ""),
        ]
    )
    query_tokens = tokens(query)
    excerpts: list[dict[str, object]] = []
    for parsed in parse_evidence_pointers(evidence_row.get("evidence_pointer", "")):
        text_path = project_root / str(parsed["path"])
        if text_path.exists():
            resolved = evidence_from_ranges(
                text_path,
                parsed["ranges"],  # type: ignore[arg-type]
                query_tokens,
            )
            for excerpt in resolved:
                excerpt["text_path"] = str(parsed["path"])
                if parsed.get("source_path"):
                    excerpt["source_file"] = str(parsed["source_path"])
            excerpts.extend(resolved)
    if not excerpts and artifact_type == "pdf" and local_path:
        excerpts = auto_evidence_from_pdf(local_path, query_tokens)
    elif not excerpts and artifact_type == "html" and local_path:
        excerpts = auto_evidence_from_html(local_path, query_tokens)

    page_count = (
        pdf_page_count(local_path)
        if artifact_type == "pdf" and local_path
        else None
    )
    local_href = web_path(local_file) if local_file else ""
    for excerpt in excerpts:
        page = excerpt.get("page")
        source_file = str(excerpt.get("source_file", ""))
        source_path = project_root / source_file if source_file else None
        source_type = (
            source_path.suffix.lower().lstrip(".")
            if source_path and source_path.exists()
            else artifact_type
        )
        source_href = web_path(source_file) if source_file else local_href
        if source_type == "pdf" and isinstance(page, int) and source_href:
            excerpt["href"] = f"{source_href}#page={page}"
            excerpt["open_label"] = f"查看 PDF 第 {page} 页"
        elif source_type == "html" and source_href:
            text_fragment = quote(str(excerpt.get("text", ""))[:180], safe="")
            excerpt["href"] = f"{source_href}#:~:text={text_fragment}"
            excerpt["open_label"] = "在本地 HTML 中定位"
        elif source_href:
            excerpt["href"] = source_href
            excerpt["open_label"] = "查看本地全文"
        else:
            excerpt["href"] = external_evidence_url(
                evidence_row.get("evidence_pointer", ""), paper
            )
            excerpt["open_label"] = "查看外部来源"

    direction = evidence_row.get("paper_lms_direction", "")
    return {
        "id": characteristic.get("characteristic_id", ""),
        "name": characteristic.get("characteristic_name", ""),
        "signal_definition": characteristic.get("signal_definition", ""),
        "sort_variable": characteristic.get("sort_variable", ""),
        "code_direction": characteristic.get("code_effective_direction", ""),
        "paper_direction": direction,
        "direction_label": DIRECTION_LABELS.get(direction, direction),
        "agreement": characteristic.get("code_paper_agreement", ""),
        "status": characteristic.get("status", ""),
        "code_long_leg": characteristic.get("long_leg", ""),
        "code_short_leg": characteristic.get("short_leg", ""),
        "code_notes": characteristic.get("notes", ""),
        "raw_signal": evidence_row.get("raw_signal", ""),
        "construction_summary": evidence_row.get("construction_summary", ""),
        "sample_and_timing": evidence_row.get("sample_and_timing", ""),
        "breakpoints": evidence_row.get("breakpoints", ""),
        "weighting": evidence_row.get("weighting", ""),
        "rebalancing_frequency": evidence_row.get("rebalancing_frequency", ""),
        "holding_period": evidence_row.get("holding_period", ""),
        "paper_long_leg": evidence_row.get("long_leg", ""),
        "paper_short_leg": evidence_row.get("short_leg", ""),
        "confidence": evidence_row.get("confidence", ""),
        "evidence_type": evidence_row.get("evidence_type", ""),
        "evidence_pointer": evidence_row.get("evidence_pointer", ""),
        "reviewer_notes": evidence_row.get("reviewer_notes", ""),
        "audit_sources": local_audit_sources(
            evidence_row.get("evidence_pointer", ""), project_root
        ),
        "evidence": excerpts,
        "evidence_mode": (
            "curated"
            if any(item["method"] == "curated_lines" for item in excerpts)
            else "automatic"
            if excerpts
            else "external_only"
        ),
        "paper": {
            "id": paper.get("paper_id", ""),
            "title": paper.get("title", ""),
            "authors": paper.get("authors", ""),
            "year": paper.get("year", ""),
            "venue": paper.get("venue", ""),
            "doi": paper.get("doi", ""),
            "source_url": paper.get("source_url", ""),
            "local_file": local_file,
            "local_href": local_href,
            "artifact_type": artifact_type,
            "pdf_pages": page_count,
            "access_status": paper.get("access_status", ""),
        },
    }


def build_site_data(project_root: Path) -> dict[str, object]:
    metadata = project_root / "metadata"
    characteristics = {
        row["characteristic_id"]: row
        for row in read_tsv(metadata / "characteristics.tsv")
    }
    papers = {row["paper_id"]: row for row in read_tsv(metadata / "papers.tsv")}
    evidence_rows = read_tsv(metadata / "construction-evidence.tsv")
    not_simple_ids = {
        row["characteristic_id"]
        for row in evidence_rows
        if row.get("paper_lms_direction") == "not-simple"
    }
    method_designs = load_method_designs(
        metadata / "method-designs.tsv",
        not_simple_ids,
    )
    method_variants = load_method_variants(
        metadata / "method-variants.tsv",
        project_root,
        set(characteristics),
    )
    literature_formulas = load_literature_formulas(
        metadata / "literature-formulas.tsv",
        project_root,
        set(characteristics),
    )
    calculations = load_calculations(
        metadata / "calculations.tsv",
        set(characteristics),
    )
    indicators = []
    for row in evidence_rows:
        characteristic = characteristics[row["characteristic_id"]]
        paper = select_indicator_paper(row, characteristic, papers)
        indicator = build_indicator(row, characteristic, paper, project_root)
        variants = merge_literature_variants(
            literature_formulas[row["characteristic_id"]],
            method_variants.get(row["characteristic_id"], []),
        )
        attach_variant_evidence(variants, indicator["evidence"])
        indicator["method_variants"] = variants
        indicator["calculation"] = calculations[row["characteristic_id"]]
        method_design = method_designs.get(row["characteristic_id"])
        if method_design:
            method_design["summary"]["en"] = indicator["construction_summary"]
            indicator["method_design"] = method_design
        indicators.append(indicator)
    indicators.sort(key=lambda item: str(item["id"]).lower())

    direction_counts = Counter(item["paper_direction"] for item in indicators)
    confidence_counts = Counter(item["confidence"] for item in indicators)
    evidence_counts = Counter(item["evidence_mode"] for item in indicators)
    artifact_counts = Counter(item["paper"]["artifact_type"] for item in indicators)
    method_counts = Counter(
        item["method_design"]["family"]
        for item in indicators
        if item.get("method_design")
    )
    return {
        "generated_at": datetime.now().astimezone().isoformat(timespec="seconds"),
        "title": "EquityChars Signal Atlas",
        "subtitle": "多空方向、构造规则与可回溯文献证据",
        "summary": {
            "indicators": len(indicators),
            "papers": len({item["paper"]["id"] for item in indicators}),
            "directions": dict(direction_counts),
            "confidence": dict(confidence_counts),
            "evidence": dict(evidence_counts),
            "artifacts": dict(artifact_counts),
            "methods": dict(method_counts),
        },
        "direction_labels": DIRECTION_LABELS,
        "indicators": indicators,
    }


def write_data_js(path: Path, data: dict[str, object]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    payload = json.dumps(data, ensure_ascii=False, indent=2)
    path.write_text(
        "window.SIGNAL_ATLAS_DATA = " + payload + ";\n",
        encoding="utf-8",
        newline="\n",
    )


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--project-root",
        type=Path,
        default=Path(__file__).resolve().parents[1],
    )
    parser.add_argument("--output", type=Path, default=Path("site/data.js"))
    args = parser.parse_args()
    project_root = args.project_root.resolve()
    output = args.output
    if not output.is_absolute():
        output = project_root / output
    data = build_site_data(project_root)
    write_data_js(output, data)
    summary = data["summary"]
    print(
        f"wrote {output.relative_to(project_root)} with "
        f"{summary['indicators']} indicators; "
        f"evidence={summary['evidence']}; artifacts={summary['artifacts']}"
    )


if __name__ == "__main__":
    main()
