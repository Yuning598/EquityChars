#!/usr/bin/env python3
"""Create the checked-in calculation crosswalk used by the static site.

The checked-out EquityChars CIZ implementation is authoritative.  The legacy
formula document and the local LaTeX seeds below are used only to typeset code
that has been mapped back to ``chars_ciz``.  Every emitted row must appear in
the CIZ final-output registry and link to the exact source commit and line.
"""

from __future__ import annotations

import argparse
import ast
import csv
import re
import subprocess
from pathlib import Path


DEFAULT_EQUITYCHARS_REPO = Path("/home/yunting/project/EquityChars/repo")
DEFAULT_EQUITYCHARS_REF = "fork/main"
EQUITYCHARS_GITHUB_ROOT = "https://github.com/Yuning598/EquityChars"
EQUITYCHARS_FORMULA_URL = (
    f"{EQUITYCHARS_GITHUB_ROOT}/blob/website/"
    "documents/formula_docs/equity_characteristics_calculation.tex"
)
OPEN_SOURCE_AP_ROOT = (
    "https://github.com/OpenSourceAP/CrossSection/blob/master/"
    "Signals/pyCode"
)

FORMULA_ROW_RE = re.compile(
    r"\\\(\\mathrm\{(?P<id>[^}]+)\}\\\)\s*&\s*"
    r"(?P<formula>.*?)\s*&\s*"
    r"\\\((?P<direction>[+-]1)\\\)\\\\",
    re.DOTALL,
)

CRSP_FIELDS = {
    "ASKHI",
    "BIDLO",
    "COUNTZERO",
    "DLYHIGH",
    "DLYLOW",
    "DLYRET",
    "DIVAMT",
    "PRC",
    "RET",
    "RETX",
    "SHROUT",
    "VOL",
}

COMPUSTAT_FIELDS = {
    "ACO",
    "ACT",
    "AJEX",
    "AJEXQ",
    "AO",
    "AP",
    "AT",
    "ATQ",
    "CAPX",
    "CEQ",
    "CEQQ",
    "CHE",
    "COGS",
    "CSHO",
    "CSHRC",
    "DC",
    "DLC",
    "DLTT",
    "DM",
    "DP",
    "DPQ",
    "DVT",
    "EBIT",
    "EMP",
    "EPSPXQ",
    "FATB",
    "FATL",
    "GDWL",
    "IB",
    "IBQ",
    "INTAN",
    "INVT",
    "IVAO",
    "LCO",
    "LCT",
    "LO",
    "LT",
    "MIB",
    "NI",
    "NOPI",
    "OANCF",
    "OIADP",
    "PPENB",
    "PPENLS",
    "PPENT",
    "PPENTQ",
    "PPEGT",
    "PRCC_F",
    "PSTK",
    "PSTKL",
    "PSTKRV",
    "RECT",
    "REVT",
    "SALE",
    "SALEQ",
    "SEQ",
    "TXDI",
    "TXDITC",
    "TXFED",
    "TXFO",
    "TXP",
    "TXT",
    "XAD",
    "XINT",
    "XRD",
    "XRDQ",
    "XSGA",
}

FACTOR_FIELDS = {"EXRET", "HML", "MKTRF", "RF", "SMB"}

FIELD_ALIASES = {
    "AskHi": "ASKHI",
    "BidLo": "BIDLO",
}

THREE_MONTH_DAILY = {
    "baspread",
    "beta",
    "ill",
    "maxret",
    "rvar_capm",
    "rvar_ff3",
    "rvar_mean",
    "std_dolvol",
    "std_turn",
    "zerotrade",
}

QUARTERLY = {"alm", "ato", "cinvest", "nincr", "rna", "roavol", "sue"}

MONTHLY = {
    "abr",
    "age",
    "chmom",
    "divi",
    "divo",
    "dolvol",
    "indmom",
    "me",
    "mom12m",
    "mom1m",
    "mom36m",
    "mom60m",
    "mom6m",
    "re",
    "seas1a",
    "turn",
}

CIZ_PATHS = {
    "accounting": "chars_ciz/accounting.py",
    "rolling": "chars_ciz/rolling_chars.py",
    "abr": "chars_ciz/abr.py",
    "sue": "chars_ciz/sue.py",
    "re": "chars_ciz/myre.py",
    "registry": "chars_ciz/impute_rank_output.py",
}

ROLLING_VARS = {
    "baspread",
    "beta",
    "ill",
    "maxret",
    "rvar_capm",
    "rvar_ff3",
    "rvar_mean",
    "std_dolvol",
    "std_turn",
    "zerotrade",
}

SPECIAL_CODE_PATH = {
    "abr": "abr",
    "sue": "sue",
    "re": "re",
    **{characteristic_id: "rolling" for characteristic_id in ROLLING_VARS},
}


def source_url(path: str) -> str:
    return f"{OPEN_SOURCE_AP_ROOT}/{path}"


def supplemental_rows() -> dict[str, dict[str, str]]:
    """LaTeX seeds for CIZ signals absent from the legacy formula document."""

    rows: dict[str, dict[str, str]] = {}

    def add(
        characteristic_id: str,
        formula: str,
        fields: str,
        path: str,
        *,
        window_zh: str = "年度 Compustat 输入；最新已对齐值进入月度面板。",
        window_en: str = (
            "Annual Compustat inputs; the latest aligned value enters "
            "the monthly panel."
        ),
        note_zh: str = "",
        note_en: str = "",
    ) -> None:
        rows[characteristic_id] = {
            "formula_latex": formula,
            "data_fields": fields,
            "calculation_window_zh": window_zh,
            "calculation_window_en": window_en,
            "source_label": "Open Source Asset Pricing replication code",
            "source_url": source_url(path),
            "notes_zh": note_zh
            or (
                "当前 EquityChars 公式表未列此项；此处按官方复现代码补全，"
                "仍需以上游实际生成代码作最终核验。"
            ),
            "notes_en": note_en
            or (
                "The current EquityChars formula table omits this signal. "
                "This row follows the official replication code and still "
                "requires final verification against the upstream generator."
            ),
        }

    add(
        "chinv",
        r"\(\displaystyle \mathrm{CHINV}_{i,t}="
        r"\frac{\mathrm{INVT}_{i,t}-\mathrm{INVT}_{i,t-1}}"
        r"{\tfrac12(\mathrm{AT}_{i,t}+\mathrm{AT}_{i,t-1})}\)",
        "Compustat: INVT, AT",
        "Predictors/ChInv.py",
    )
    add(
        "chmom",
        r"\(\displaystyle \mathrm{CHMOM}_{i,t}="
        r"\left[\prod_{k=1}^{6}(1+\mathrm{RET}_{i,t-k})-1\right]-"
        r"\left[\prod_{k=7}^{12}(1+\mathrm{RET}_{i,t-k})-1\right]\)",
        "CRSP monthly: RET",
        "Predictors/MomRev.py",
        window_zh="月频；近 6 个月累计收益减去此前 6 个月累计收益。",
        window_en=(
            "Monthly; cumulative return over the latest six months minus "
            "the preceding six months."
        ),
        note_zh=(
            "公式按本项目 construction-evidence 的连续 chmom 定义展示；"
            "Open Source AP 的 MomRev 是极端组合二元版本，两者不可混同。"
        ),
        note_en=(
            "The formula follows this audit's continuous chmom definition. "
            "Open Source AP's MomRev is a binary extreme-portfolio variant."
        ),
    )
    add(
        "chpmia",
        r"\(\displaystyle \mathrm{PM}_{i,t}=\frac{\mathrm{IB}_{i,t}}"
        r"{\mathrm{SALE}_{i,t}},\quad \Delta\mathrm{PM}_{i,t}="
        r"\mathrm{PM}_{i,t}-\mathrm{PM}_{i,t-1},\quad "
        r"\mathrm{CHPMIA}_{i,t}=\Delta\mathrm{PM}_{i,t}-"
        r"\overline{\Delta\mathrm{PM}}_{\mathrm{industry},t}\)",
        "Compustat: IB, SALE; industry classification",
        "Placebos/ZZ1_PM_ChPM.py",
        note_zh=(
            "上游复现代码直接构造 ΔPM；行业去均值来自 chpmia 标签，"
            "当前 EquityChars 公式表把该项误写为 chpm。"
        ),
        note_en=(
            "The upstream code directly constructs change in PM; chpmia "
            "adds the labelled industry demeaning. The current formula table "
            "mislabels the row as chpm."
        ),
    )
    add(
        "convind",
        r"\(\displaystyle \mathrm{CONVIND}_{i,t}="
        r"\mathbf{1}\{\mathrm{DC}_{i,t}>0\ \lor\ "
        r"\mathrm{CSHRC}_{i,t}>0\}\)",
        "Compustat: DC, CSHRC",
        "Predictors/ConvDebt.py",
    )
    add(
        "currat",
        r"\(\displaystyle \mathrm{ACT}^{*}_{i,t}="
        r"\begin{cases}\mathrm{ACT}_{i,t},&\text{available}\\"
        r"\mathrm{CHE}_{i,t}+\mathrm{RECT}_{i,t}+\mathrm{INVT}_{i,t},"
        r"&\text{otherwise}\end{cases},\quad "
        r"\mathrm{LCT}^{*}_{i,t}=\begin{cases}\mathrm{LCT}_{i,t},"
        r"&\text{available}\\\mathrm{AP}_{i,t},&\text{otherwise}"
        r"\end{cases},\quad \mathrm{CURRAT}_{i,t}="
        r"\frac{\mathrm{ACT}^{*}_{i,t}}{\mathrm{LCT}^{*}_{i,t}}\)",
        "Compustat: ACT, LCT, CHE, RECT, INVT, AP",
        "Placebos/ZZ1_currat_pchcurrat.py",
    )
    add(
        "divi",
        r"\(\displaystyle \mathrm{INIT}_{i,t}="
        r"\mathbf{1}\{\mathrm{DIVAMT}_{i,t}>0,\ "
        r"\sum_{k=1}^{24}\mathrm{DIVAMT}_{i,t-k}=0\},\quad "
        r"\mathrm{DIVI}_{i,t}=\max_{0\le k\le5}\mathrm{INIT}_{i,t-k}\)",
        "CRSP distributions: DIVAMT, DISTCD",
        "Predictors/DivInit.py",
        window_zh="月频；24 个月无现金股利后首次支付，事件状态保留 6 个月。",
        window_en=(
            "Monthly; first cash dividend after 24 dividend-free months, "
            "with the event flag retained for six months."
        ),
    )
    add(
        "divo",
        r"\(\displaystyle \mathrm{DIVO}_{i,t}="
        r"\mathbf{1}\{\exists s\in\{t-1,t\}:"
        r"\mathrm{OMISSION}_{i,s}=1\}\)",
        "CRSP distributions: DIVAMT, DISTCD",
        "Predictors/DivOmit.py",
        window_zh=(
            "月频；先按 18–24 个月支付历史识别稳定的季、半年或年度支付者，"
            "再识别应付未付事件；事件状态保留 2 个月。"
        ),
        window_en=(
            "Monthly; stable quarterly, semiannual, or annual payers are "
            "identified from 18–24 months of history before a missed "
            "expected payment is flagged for two months."
        ),
    )
    add(
        "egr",
        r"\(\displaystyle \mathrm{EGR}_{i,t}="
        r"\frac{\mathrm{CEQ}_{i,t}-\mathrm{CEQ}_{i,t-1}}"
        r"{\tfrac12(\mathrm{AT}_{i,t}+\mathrm{AT}_{i,t-1})}\)",
        "Compustat: CEQ, AT",
        "Predictors/DelEqu.py",
    )
    add(
        "grcapx",
        r"\(\displaystyle \mathrm{GRCAPX}_{i,t}="
        r"\frac{\mathrm{CAPX}_{i,t}-\mathrm{CAPX}_{i,t-2}}"
        r"{\mathrm{CAPX}_{i,t-2}},\quad "
        r"\mathrm{CAPX}_{i,t}\leftarrow\Delta\mathrm{PPENT}_{i,t}"
        r"\ \text{if CAPX is missing}\)",
        "Compustat: CAPX, PPENT",
        "Predictors/ZZ1_grcapx_grcapx1y_grcapx3y.py",
        window_zh="年度 Compustat 输入；当前值相对两年前的资本开支增长。",
        window_en=(
            "Annual Compustat inputs; current capital expenditure growth "
            "relative to two years earlier."
        ),
    )
    add(
        "indmom",
        r"\(\displaystyle \mathrm{INDMOM}_{i,t}="
        r"\sum_{j\in\mathrm{SIC2}(i)}"
        r"\frac{\mathrm{ME}_{j,t-1}}{\sum_{\ell\in\mathrm{SIC2}(i)}"
        r"\mathrm{ME}_{\ell,t-1}}\mathrm{MOM6M}_{j,t}\)",
        "CRSP monthly: RET, PRC, SHROUT; industry: two-digit SIC",
        "Predictors/IndMom.py",
        window_zh="月频；两位 SIC 行业内公司过去 6 个月收益的市值加权均值。",
        window_en=(
            "Monthly; market-equity-weighted six-month firm returns within "
            "each two-digit SIC industry."
        ),
    )
    add(
        "invest",
        r"\(\displaystyle \mathrm{INVEST}_{i,t}="
        r"\frac{\Delta\mathrm{PPEGT}_{i,t}+\Delta\mathrm{INVT}_{i,t}}"
        r"{\mathrm{AT}_{i,t-1}},\quad "
        r"\mathrm{PPEGT}\leftarrow\mathrm{PPENT}\ "
        r"\text{if PPEGT is missing}\)",
        "Compustat: PPEGT, PPENT, INVT, AT",
        "Predictors/InvestPPEInv.py",
    )
    add(
        "pchcapx_ia",
        r"\(\displaystyle B_{i,t}=\tfrac12("
        r"\mathrm{CAPX}_{i,t-1}+\mathrm{CAPX}_{i,t-2}),\quad "
        r"g^{CAPX}_{i,t}=\frac{\mathrm{CAPX}_{i,t}-B_{i,t}}{B_{i,t}},"
        r"\quad \mathrm{PCHCAPX\_IA}_{i,t}=g^{CAPX}_{i,t}-"
        r"\overline{g^{CAPX}}_{\mathrm{SIC2},t}\)",
        "Compustat: CAPX, PPENT; industry: two-digit SIC",
        "Predictors/ChInvIA.py",
        window_zh=(
            "年度 Compustat 输入；当前 CAPX 相对前两年均值增长，再减同月 "
            "SIC2 行业均值；第二个滞后缺失时改用一年增长。"
        ),
        window_en=(
            "Annual Compustat inputs; current CAPX growth relative to the "
            "prior-two-year mean, less the same-month SIC2 mean. A one-year "
            "growth rate is used when the second lag is missing."
        ),
    )
    add(
        "pchcurrat",
        r"\(\displaystyle \mathrm{PCHCURRAT}_{i,t}="
        r"\frac{\mathrm{CURRAT}_{i,t}-\mathrm{CURRAT}_{i,t-1}}"
        r"{\mathrm{CURRAT}_{i,t-1}}\)",
        "Compustat: ACT, LCT, CHE, RECT, INVT, AP",
        "Placebos/ZZ1_currat_pchcurrat.py",
    )
    add(
        "pchdepr",
        r"\(\displaystyle \mathrm{PCHDEPR}_{i,t}="
        r"\frac{\mathrm{DP}_{i,t}/\mathrm{PPENT}_{i,t}-"
        r"\mathrm{DP}_{i,t-1}/\mathrm{PPENT}_{i,t-1}}"
        r"{\mathrm{DP}_{i,t-1}/\mathrm{PPENT}_{i,t-1}}\)",
        "Compustat: DP, PPENT",
        "Placebos/pchdepr.py",
    )
    add(
        "pchgm_pchsale",
        r"\(\displaystyle \mathrm{PCHGM\_PCHSALE}_{i,t}="
        r"\frac{\mathrm{GP}_{i,t}-\mathrm{GP}_{i,t-1}}"
        r"{\mathrm{GP}_{i,t-1}}-"
        r"\frac{\mathrm{SALE}_{i,t}-\mathrm{SALE}_{i,t-1}}"
        r"{\mathrm{SALE}_{i,t-1}},\quad "
        r"\mathrm{GP}=\mathrm{SALE}-\mathrm{COGS}\)",
        "Compustat: SALE, COGS",
        "Placebos/pchgm_pchsale.py",
    )
    add(
        "pchquick",
        r"\(\displaystyle \mathrm{QUICK}_{i,t}="
        r"\frac{\mathrm{ACT}_{i,t}-\mathrm{INVT}_{i,t}}"
        r"{\mathrm{LCT}_{i,t}},\quad "
        r"\mathrm{PCHQUICK}_{i,t}="
        r"\frac{\mathrm{QUICK}_{i,t}-\mathrm{QUICK}_{i,t-1}}"
        r"{\mathrm{QUICK}_{i,t-1}}\)",
        "Compustat: ACT, INVT, LCT",
        "Placebos/pchquick.py",
    )
    growth_definition = (
        r"\(\displaystyle g_t(X)=\frac{X_t-\tfrac12(X_{t-1}+X_{t-2})}"
        r"{\tfrac12(X_{t-1}+X_{t-2})}\)"
    )
    add(
        "pchsale_pchinvt",
        growth_definition
        + r", \(\displaystyle \mathrm{PCHSALE\_PCHINVT}_{i,t}="
        r"g_t(\mathrm{SALE}_i)-g_t(\mathrm{INVT}_i)\)",
        "Compustat: SALE, INVT",
        "Predictors/GrSaleToGrInv.py",
        window_zh=(
            "年度 Compustat 输入；各变量相对前两年均值的增长率之差；"
            "第二个滞后缺失时用一年增长。"
        ),
        window_en=(
            "Annual Compustat inputs; difference between growth rates "
            "relative to prior-two-year means, with one-year growth used "
            "when the second lag is missing."
        ),
    )
    add(
        "pchsale_pchrect",
        growth_definition
        + r", \(\displaystyle \mathrm{PCHSALE\_PCHRECT}_{i,t}="
        r"g_t(\mathrm{SALE}_i)-g_t(\mathrm{RECT}_i)\)",
        "Compustat: SALE, RECT",
        "Placebos/GrSaleToGrReceivables.py",
        window_zh=(
            "年度 Compustat 输入；各变量相对前两年均值的增长率之差；"
            "第二个滞后缺失时用一年增长。"
        ),
        window_en=(
            "Annual Compustat inputs; difference between growth rates "
            "relative to prior-two-year means, with one-year growth used "
            "when the second lag is missing."
        ),
    )
    add(
        "pchsale_pchxsga",
        growth_definition
        + r", \(\displaystyle \mathrm{PCHSALE\_PCHXSGA}_{i,t}="
        r"g_t(\mathrm{SALE}_i)-g_t(\mathrm{XSGA}_i)\)",
        "Compustat: SALE, XSGA",
        "Predictors/GrSaleToGrOverhead.py",
        window_zh=(
            "年度 Compustat 输入；各变量相对前两年均值的增长率之差；"
            "第二个滞后缺失时用一年增长。"
        ),
        window_en=(
            "Annual Compustat inputs; difference between growth rates "
            "relative to prior-two-year means, with one-year growth used "
            "when the second lag is missing."
        ),
    )
    add(
        "pchsaleinv",
        r"\(\displaystyle R_{i,t}=\frac{\mathrm{SALE}_{i,t}}"
        r"{\mathrm{INVT}_{i,t}},\quad \mathrm{PCHSALEINV}_{i,t}="
        r"\frac{R_{i,t}-R_{i,t-1}}{R_{i,t-1}}\)",
        "Compustat: SALE, INVT",
        "Placebos/pchsaleinv.py",
    )
    add(
        "quick",
        r"\(\displaystyle \mathrm{QUICK}_{i,t}="
        r"\frac{\mathrm{ACT}_{i,t}-\mathrm{INVT}_{i,t}}"
        r"{\mathrm{LCT}_{i,t}}\)",
        "Compustat: ACT, INVT, LCT",
        "Placebos/quick.py",
    )
    add(
        "rd",
        r"\(\displaystyle \mathrm{RD}_{i,t}="
        r"\mathbf{1}\left\{\frac{\mathrm{XRD}_{i,t}}{\mathrm{XRD}_{i,t-1}}"
        r">1.05,\ \frac{\mathrm{XRD}_{i,t}/\mathrm{AT}_{i,t}}"
        r"{\mathrm{XRD}_{i,t-1}/\mathrm{AT}_{i,t-1}}>1.05\right\}\)",
        "Compustat: XRD, AT, REVT",
        "Predictors/SurpriseRD.py",
        note_zh=(
            "项目标签是 R&D increase，不是 XRD/ME。复现代码还要求 "
            "XRD/REVT 与 XRD/AT 为正；当前和滞后 XRD 均可用时，"
            "不满足筛选条件的观测置 0。"
        ),
        note_en=(
            "The project label is R&D increase, not XRD/ME. The replication "
            "also requires positive XRD/REVT and XRD/AT; observations with "
            "available current and lagged XRD that fail the screen are zero."
        ),
    )
    add(
        "realestate",
        r"\(\displaystyle \mathrm{RE}_{i,t}="
        r"\begin{cases}(\mathrm{FATB}_{i,t}+\mathrm{FATL}_{i,t})/"
        r"\mathrm{PPEGT}_{i,t},&\text{available}\\"
        r"(\mathrm{PPENB}_{i,t}+\mathrm{PPENLS}_{i,t})/"
        r"\mathrm{PPENT}_{i,t},&\text{otherwise}\end{cases},\quad "
        r"\mathrm{REALESTATE}_{i,t}=\mathrm{RE}_{i,t}-"
        r"\overline{\mathrm{RE}}_{\mathrm{SIC2},t}\)",
        "Compustat: FATB, FATL, PPEGT, PPENB, PPENLS, PPENT, AT; industry: SIC",
        "Predictors/realestate.py",
    )
    add(
        "roavol",
        r"\(\displaystyle \mathrm{ROA}^{Q}_{i,t}="
        r"\frac{\mathrm{IBQ}_{i,t}}{\mathrm{ATQ}_{i,t-3}},\quad "
        r"\mathrm{ROAVOL}_{i,t}="
        r"\operatorname{Std}_{s\in[t-47,t]}(\mathrm{ROA}^{Q}_{i,s})\)",
        "Compustat quarterly: IBQ, ATQ",
        "Placebos/roavol.py",
        window_zh="滚动 48 个月，至少 24 个有效月度对齐观测。",
        window_en=(
            "Rolling 48 months with at least 24 valid monthly aligned "
            "observations."
        ),
    )
    add(
        "roic",
        r"\(\displaystyle \mathrm{ROIC}_{i,t}="
        r"\frac{\mathrm{EBIT}_{i,t}-\mathrm{NOPI}_{i,t}}"
        r"{\mathrm{CEQ}_{i,t}+\mathrm{LT}_{i,t}-\mathrm{CHE}_{i,t}}\)",
        "Compustat: EBIT, NOPI, CEQ, LT, CHE",
        "Placebos/roic.py",
    )
    add(
        "rvar_mean",
        r"\(\displaystyle \mathrm{RVAR\_MEAN}_{i,t}="
        r"\frac{1}{w-1}\sum_{s=t-w+1}^{t}"
        r"(\mathrm{RET}_{i,s}-\overline{\mathrm{RET}}_{i,t})^2\)",
        "CRSP daily: RET",
        "Predictors/ZZ0_RealizedVol_IdioVol3F_ReturnSkew3F.py",
        window_zh="滚动 3 个月日收益；w 为窗口内有效交易日数。",
        window_en=(
            "Rolling three months of daily returns; w is the number of "
            "valid trading days in the window."
        ),
        note_zh=(
            "当前 EquityChars 表把同一公式标成 svar；本页按项目导出名 "
            "rvar_mean 归一化。"
        ),
        note_en=(
            "The current EquityChars table labels this same formula as svar; "
            "the site normalizes it to the exported name rvar_mean."
        ),
    )
    add(
        "salecash",
        r"\(\displaystyle \mathrm{SALECASH}_{i,t}="
        r"\frac{\mathrm{SALE}_{i,t}}{\mathrm{CHE}_{i,t}}\)",
        "Compustat: SALE, CHE",
        "Placebos/salecash.py",
    )
    add(
        "saleinv",
        r"\(\displaystyle \mathrm{SALEINV}_{i,t}="
        r"\frac{\mathrm{SALE}_{i,t}}{\mathrm{INVT}_{i,t}}\)",
        "Compustat: SALE, INVT",
        "Placebos/saleinv.py",
    )
    add(
        "salerec",
        r"\(\displaystyle \mathrm{SALEREC}_{i,t}="
        r"\frac{\mathrm{SALE}_{i,t}}{\mathrm{RECT}_{i,t}}\)",
        "Compustat: SALE, RECT",
        "Placebos/salerec.py",
    )
    add(
        "secured",
        r"\(\displaystyle \mathrm{SECURED}_{i,t}="
        r"\begin{cases}\mathrm{DM}_{i,t}/"
        r"(\mathrm{DLTT}_{i,t}+\mathrm{DLC}_{i,t}),&"
        r"\mathrm{DLTT},\mathrm{DLC}\text{ available and DLTT}\ne0\\"
        r"0,&\text{otherwise}\end{cases}\)",
        "Compustat: DM, DLTT, DLC",
        "Placebos/secured.py",
    )
    add(
        "securedind",
        r"\(\displaystyle \mathrm{SECUREDIND}_{i,t}="
        r"\mathbf{1}\{\mathrm{DM}_{i,t}\ne0\}\)",
        "Compustat: DM",
        "Placebos/securedind.py",
    )
    add(
        "sin",
        r"\(\displaystyle \mathrm{SIN}_{i,t}="
        r"\mathbf{1}\{\mathrm{SIC/NAICS/segment}_{i}"
        r"\in\mathcal{S}_{\mathrm{alcohol,tobacco,gaming}}\}\)",
        "Compustat segments: SIC, NAICS, firm/segment identifiers",
        "Predictors/sinAlgo.py",
        window_zh="行业分类事件；首次识别后向公司完整历史和未来回填。",
        window_en=(
            "Industry-classification event; once identified, the flag is "
            "backfilled across the firm's full history and future."
        ),
        note_zh=(
            "完整 SIC/NAICS 集合较长，页面保留集合记号；来源链接可查看"
            "全部分类条件及可比公司定义。"
        ),
        note_en=(
            "The full SIC/NAICS set is lengthy, so the page uses set notation; "
            "the source link contains every classification and comparable-firm rule."
        ),
    )
    add(
        "tang",
        r"\(\displaystyle \mathrm{TANG}_{i,t}="
        r"\frac{\mathrm{CHE}_{i,t}+0.715\,\mathrm{RECT}_{i,t}+"
        r"0.547\,\mathrm{INVT}_{i,t}+0.535\,\mathrm{PPENT}_{i,t}}"
        r"{\mathrm{AT}_{i,t}}\)",
        "Compustat: CHE, RECT, INVT, PPENT, AT, SIC",
        "Predictors/tang.py",
        note_zh=(
            "复现样本仅保留 SIC 2000–3999 的制造业公司，并剔除按 AT "
            "计最小的三分之一。"
        ),
        note_en=(
            "The replication keeps manufacturing firms with SIC 2000–3999 "
            "and excludes the smallest total-asset tercile."
        ),
    )
    add(
        "tb",
        r"\(\displaystyle \mathrm{TB}_{i,t}="
        r"\frac{\mathrm{TXFO}_{i,t}+\mathrm{TXFED}_{i,t}}"
        r"{\tau_t\,\mathrm{IB}_{i,t}},\quad "
        r"\mathrm{TXFO}+\mathrm{TXFED}\leftarrow"
        r"\mathrm{TXT}-\mathrm{TXDI}\ \text{if unavailable}\)",
        "Compustat: TXFO, TXFED, TXT, TXDI, IB",
        "Predictors/Tax.py",
        note_zh=(
            "法定税率 τ 按年份取 0.48、0.46、0.40、0.34 或 0.35；"
            "非正 IB 且存在正税项时信号置 1。"
        ),
        note_en=(
            "The statutory rate tau is 0.48, 0.46, 0.40, 0.34, or 0.35 "
            "depending on year; the signal is set to one for non-positive "
            "IB with positive tax activity."
        ),
    )
    return rows


# These are mathematical transcriptions of the active ``chars_ciz`` code where
# the legacy formula document is stale, incomplete, or describes another
# implementation.  Keep each entry paired with a regression assertion below.
CIZ_FORMULA_OVERRIDES = {
    "abr": (
        r"\(\displaystyle \mathrm{ABR}_{i,t}="
        r"\sum_{\tau=-2}^{1}\left[\mathrm{DLYRET}_{i,t+\tau}-"
        r"(\mathrm{MKTRF}_{t+\tau}+\mathrm{RF}_{t+\tau})\right]\)"
    ),
    "baspread": (
        r"\(\displaystyle \mathrm{BASPREAD}_{i,t}="
        r"\operatorname{Mean}_{d\in W_t}\left["
        r"\frac{\mathrm{DLYHIGH}_{i,d}-\mathrm{DLYLOW}_{i,d}}"
        r"{(\mathrm{DLYHIGH}_{i,d}+\mathrm{DLYLOW}_{i,d})/2}\right]\)"
    ),
    "bm": (
        r"\(\displaystyle \mathrm{PS}=\operatorname{coalesce}"
        r"(\mathrm{PSTKRV},\mathrm{PSTKL},\mathrm{PSTK}),\quad "
        r"\mathrm{SEQ}^{*}=\operatorname{coalesce}"
        r"(\mathrm{SEQ},\mathrm{CEQ}+\mathrm{PSTK},\mathrm{AT}-\mathrm{LT}),"
        r"\quad \mathrm{BE}=\mathrm{SEQ}^{*}+\mathrm{TXDITC}-\mathrm{PS},"
        r"\quad \mathrm{BM}=\frac{\mathrm{BE}}{\mathrm{ME}}\)"
    ),
    "cfp": (
        r"\(\displaystyle \mathrm{CFP}^{A}_{i,t}="
        r"\frac{\mathrm{IB}_{i,t}+\operatorname{coalesce}(\mathrm{DP}_{i,t},0)}"
        r"{\mathrm{ME}_{i,t}},\quad "
        r"\mathrm{CFP}^{Q}_{i,t}="
        r"\frac{\mathrm{TTM4}(\mathrm{IBQ})_{i,t}+"
        r"\operatorname{coalesce}(\mathrm{TTM4}(\mathrm{DPQ})_{i,t},0)}"
        r"{\mathrm{ME}_{i,t}}\)"
    ),
    "currat": (
        r"\(\displaystyle \mathrm{CURRAT}_{i,t}="
        r"\frac{\mathrm{ACT}_{i,t}}{\mathrm{LCT}_{i,t}}\)"
    ),
    "divi": (
        r"\(\displaystyle \mathrm{DIVI}_{i,t}="
        r"\mathbf{1}\{\mathrm{DVT}_{i,t}>0\ \land\ "
        r"(\mathrm{DVT}_{i,t-1}=0\ \lor\ \mathrm{DVT}_{i,t-1}\text{ missing})\}\)"
    ),
    "divo": (
        r"\(\displaystyle \mathrm{DIVO}_{i,t}="
        r"\mathbf{1}\{(\mathrm{DVT}_{i,t}=0\ \lor\ "
        r"\mathrm{DVT}_{i,t}\text{ missing})\ \land\ "
        r"\mathrm{DVT}_{i,t-1}>0\}\)"
    ),
    "dolvol": (
        r"\(\displaystyle \mathrm{DOLVOL}_{i,t}="
        r"\log(\mathrm{VOL}_{i,t-2}\,\mathrm{PRC}_{i,t-2})\)"
    ),
    "egr": (
        r"\(\displaystyle \mathrm{EGR}^{A}_{i,t}="
        r"\frac{\mathrm{CEQ}_{i,t}-\mathrm{CEQ}_{i,t-1}}{\mathrm{CEQ}_{i,t-1}},"
        r"\quad \mathrm{EGR}^{Q}_{i,t}="
        r"\frac{\mathrm{CEQQ}_{i,t}-\mathrm{CEQQ}_{i,t-4}}{\mathrm{CEQQ}_{i,t-4}}\)"
    ),
    "grcapx": (
        r"\(\displaystyle \mathrm{GRCAPX}_{i,t}="
        r"\frac{\mathrm{CAPX}_{i,t}-\mathrm{CAPX}_{i,t-2}}"
        r"{\mathrm{CAPX}_{i,t-2}}\)"
    ),
    "hire": (
        r"\(\displaystyle \mathrm{HIRE}_{i,t}="
        r"\begin{cases}(\mathrm{EMP}_{i,t}-\mathrm{EMP}_{i,t-1})/"
        r"\mathrm{EMP}_{i,t-1},&\mathrm{EMP}_{i,t},\mathrm{EMP}_{i,t-1}"
        r"\text{ available},\\0,&\text{otherwise}.\end{cases}\)"
    ),
    "ill": (
        r"\(\displaystyle \mathrm{ILL}_{i,t}="
        r"\operatorname{Mean}_{d\in W_t}"
        r"\left(\frac{|\mathrm{RET}_{i,d}|}"
        r"{|\mathrm{PRC}_{i,d}|\,\mathrm{VOL}_{i,d}}\right)\)"
    ),
    "indmom": (
        r"\(\displaystyle \mathrm{INDMOM}_{i,t}="
        r"\frac{\sum_{j:\mathrm{FFI49}_j=\mathrm{FFI49}_i}"
        r"\mathrm{ME}_{j,t}\,\mathrm{MOM6M}_{j,t}}"
        r"{\sum_{j:\mathrm{FFI49}_j=\mathrm{FFI49}_i}\mathrm{ME}_{j,t}}\)"
    ),
    "me": (
        r"\(\displaystyle \mathrm{ME}_{c,t}="
        r"\frac{1}{1000}\sum_{s\in c}|\mathrm{PRC}_{s,t}|"
        r"\,\mathrm{SHROUT}_{s,t}\)"
    ),
    "mom6m": (
        r"\(\displaystyle \mathrm{MOM6M}_{i,t}="
        r"\prod_{k=1}^{6}(1+\mathrm{RET}_{i,t-k})-1\)"
    ),
    "mom12m": (
        r"\(\displaystyle \mathrm{MOM12M}_{i,t}="
        r"\prod_{k=1}^{12}(1+\mathrm{RET}_{i,t-k})-1\)"
    ),
    "mom36m": (
        r"\(\displaystyle \mathrm{MOM36M}_{i,t}="
        r"\prod_{k=13}^{36}(1+\mathrm{RET}_{i,t-k})-1\)"
    ),
    "mom60m": (
        r"\(\displaystyle \mathrm{MOM60M}_{i,t}="
        r"\prod_{k=13}^{60}(1+\mathrm{RET}_{i,t-k})-1\)"
    ),
    "nincr": (
        r"\(\displaystyle I_k=\mathbf{1}\{\mathrm{IBQ}_{i,t-k}>"
        r"\mathrm{IBQ}_{i,t-k-4}\},\quad "
        r"\mathrm{NINCR}_{i,t}=\sum_{m=0}^{7}\prod_{k=0}^{m}I_k\)"
    ),
    "pchcapx_ia": (
        r"\(\displaystyle g^{CAPX}_{i,t}="
        r"\frac{\mathrm{CAPX}_{i,t}-\mathrm{CAPX}_{i,t-1}}"
        r"{\mathrm{CAPX}_{i,t-1}},\quad "
        r"\mathrm{PCHCAPX\_IA}_{i,t}=g^{CAPX}_{i,t}-"
        r"\overline{g^{CAPX}}_{\mathrm{FFI49}(i),t}\)"
    ),
    "pchsale_pchinvt": (
        r"\(\displaystyle \mathrm{PCHSALE\_PCHINVT}_{i,t}="
        r"\frac{\Delta\mathrm{SALE}_{i,t}}{\mathrm{SALE}_{i,t-1}}-"
        r"\frac{\Delta\mathrm{INVT}_{i,t}}{\mathrm{INVT}_{i,t-1}}\)"
    ),
    "pchsale_pchrect": (
        r"\(\displaystyle \mathrm{PCHSALE\_PCHRECT}_{i,t}="
        r"\frac{\Delta\mathrm{SALE}_{i,t}}{\mathrm{SALE}_{i,t-1}}-"
        r"\frac{\Delta\mathrm{RECT}_{i,t}}{\mathrm{RECT}_{i,t-1}}\)"
    ),
    "pchsale_pchxsga": (
        r"\(\displaystyle \mathrm{PCHSALE\_PCHXSGA}_{i,t}="
        r"\frac{\Delta\mathrm{SALE}_{i,t}}{\mathrm{SALE}_{i,t-1}}-"
        r"\frac{\Delta\mathrm{XSGA}_{i,t}}{\mathrm{XSGA}_{i,t-1}}\)"
    ),
    "pscore": (
        r"\(\displaystyle \mathrm{PSCORE}_{i,t}="
        r"\sum_{j=1}^{9}p_{j,i,t},\qquad p_{j,i,t}\in\{0,1\}\)"
    ),
    "rd": (
        r"\(\displaystyle \mathrm{RD}^{A}_{i,t}="
        r"\mathbf{1}\left\{\frac{\mathrm{XRD}_{i,t}/\mathrm{AT}_{i,t}}"
        r"{\mathrm{XRD}_{i,t-1}/\mathrm{AT}_{i,t-1}}-1>0.05\right\},"
        r"\quad \mathrm{RD}^{Q}_{i,t}="
        r"\mathbf{1}\left\{\frac{\mathrm{TTM4}(\mathrm{XRDQ})_{i,t}/"
        r"\mathrm{ATQ}_{i,t}}{\mathrm{TTM4}(\mathrm{XRDQ})_{i,t-4}/"
        r"\mathrm{ATQ}_{i,t-4}}-1>0.05\right\}\)"
    ),
    "realestate": (
        r"\(\displaystyle \mathrm{REALESTATE}_{i,t}="
        r"\frac{\mathrm{FATB}_{i,t}+\mathrm{FATL}_{i,t}}"
        r"{\operatorname{coalesce}(\mathrm{PPEGT}_{i,t},\mathrm{PPENT}_{i,t})}\)"
    ),
    "roavol": (
        r"\(\displaystyle \mathrm{ROA}^{Q}_{i,t}="
        r"\frac{\mathrm{IBQ}_{i,t}}{\mathrm{ATQ}_{i,t-1}},\quad "
        r"\mathrm{ROAVOL}_{i,t}="
        r"\operatorname{Std}\{\mathrm{ROA}^{Q}_{i,t-k}:k=0,\ldots,15\}\)"
    ),
    "secured": (
        r"\(\displaystyle \mathrm{SECURED}_{i,t}="
        r"\frac{\mathrm{DM}_{i,t}}{\mathrm{DLTT}_{i,t}}\)"
    ),
    "sin": (
        r"\(\displaystyle \mathrm{SIN}_{i,t}="
        r"\mathbf{1}\{\mathrm{SIC}\in[2100,2199]\cup[2080,2085]\ "
        r"\lor\ \mathrm{NAICS}\in\mathcal{G}_{gaming}\}\)"
    ),
    "tb": (
        r"\(\displaystyle T_{i,t}="
        r"\frac{\operatorname{coalesce}(\mathrm{TXFO}_{i,t}+"
        r"\mathrm{TXFED}_{i,t},\mathrm{TXT}_{i,t}-\mathrm{TXDI}_{i,t})}"
        r"{\tau_t\,\mathrm{IB}_{i,t}},\quad "
        r"\mathrm{TB}_{i,t}=T_{i,t}-\overline{T}_{\mathrm{FFI49}(i),t}\)"
    ),
    "turn": (
        r"\(\displaystyle \mathrm{TURN}_{i,t}="
        r"\frac{(\mathrm{VOL}_{i,t-1}+\mathrm{VOL}_{i,t-2}+"
        r"\mathrm{VOL}_{i,t-3})/3/1000}{\mathrm{SHROUT}_{i,t}}\)"
    ),
}

CIZ_WINDOW_OVERRIDES = {
    "age": (
        "年频；公司在 Compustat 年度样本中的累计记录数。",
        "Annual; cumulative firm record count in the Compustat annual sample.",
    ),
    "mom6m": ("月频；收益滞后 1–6 月。", "Monthly; return lags 1–6."),
    "mom12m": ("月频；收益滞后 1–12 月。", "Monthly; return lags 1–12."),
    "mom36m": ("月频；收益滞后 13–36 月。", "Monthly; return lags 13–36."),
    "mom60m": ("月频；收益滞后 13–60 月。", "Monthly; return lags 13–60."),
    "roavol": (
        "季度；当期及前 15 个季度的 ROA 标准差。",
        "Quarterly; standard deviation of ROA over the current and prior 15 quarters.",
    ),
    "turn": (
        "月频；前 3 个月成交量均值除以当期流通股数。",
        "Monthly; mean volume over the prior three months divided by current shares outstanding.",
    ),
}


def normalize_formula(value: str) -> str:
    return " ".join(value.split())


def git_output(repo: Path, *args: str) -> str:
    result = subprocess.run(
        ["git", "-C", str(repo), *args],
        check=True,
        capture_output=True,
        text=True,
    )
    return result.stdout


def load_ciz_sources(repo: Path, ref: str) -> tuple[str, dict[str, str]]:
    commit = git_output(repo, "rev-parse", ref).strip()
    sources = {
        key: git_output(repo, "show", f"{ref}:{path}")
        for key, path in CIZ_PATHS.items()
    }
    return commit, sources


def parse_registry(source: str) -> dict[str, list[str]]:
    tree = ast.parse(source)
    registry: dict[str, list[str]] = {}
    wanted = {"ACCOUNTING_VARS", "A_ONLY_VARS", "Q_ONLY_VARS", "M_VARS"}
    for node in tree.body:
        if not isinstance(node, (ast.Assign, ast.AnnAssign)):
            continue
        targets = node.targets if isinstance(node, ast.Assign) else [node.target]
        value = node.value
        for target in targets:
            if isinstance(target, ast.Name) and target.id in wanted:
                parsed = ast.literal_eval(value)
                if not isinstance(parsed, list) or not all(
                    isinstance(item, str) for item in parsed
                ):
                    raise ValueError(f"{target.id} is not a string list")
                registry[target.id] = parsed
    missing = sorted(wanted - set(registry))
    if missing:
        raise ValueError(f"CIZ registry missing lists: {missing}")
    return registry


def registry_groups(registry: dict[str, list[str]]) -> dict[str, str]:
    groups: dict[str, str] = {}
    for list_name in ("ACCOUNTING_VARS", "A_ONLY_VARS", "Q_ONLY_VARS", "M_VARS"):
        for characteristic_id in registry[list_name]:
            if characteristic_id == "datadate":
                continue
            if characteristic_id in groups:
                raise ValueError(
                    f"CIZ registry repeats {characteristic_id} in "
                    f"{groups[characteristic_id]} and {list_name}"
                )
            groups[characteristic_id] = list_name
    return groups


def active_alias_lines(source: str, characteristic_id: str) -> list[int]:
    pattern = re.compile(
        rf"\.alias\(\s*['\"]{re.escape(characteristic_id)}['\"]\s*\)"
    )
    return [
        line_number
        for line_number, line in enumerate(source.splitlines(), start=1)
        if not line.lstrip().startswith("#") and pattern.search(line)
    ]


def code_location(
    characteristic_id: str,
    sources: dict[str, str],
) -> tuple[str, list[int]]:
    source_key = SPECIAL_CODE_PATH.get(characteristic_id, "accounting")
    path = CIZ_PATHS[source_key]
    lines = active_alias_lines(sources[source_key], characteristic_id)
    if characteristic_id == "roavol":
        lines = [
            line_number
            for line_number, line in enumerate(
                sources["accounting"].splitlines(), start=1
            )
            if "pl.Series('roavol'" in line
        ]
    if not lines:
        raise ValueError(
            f"Could not locate active CIZ construction for {characteristic_id}"
        )
    return path, lines


def github_line_url(commit: str, path: str, lines: list[int]) -> str:
    anchor = f"#L{lines[0]}"
    if len(lines) == 1:
        anchor = f"#L{lines[0]}"
    return f"{EQUITYCHARS_GITHUB_ROOT}/blob/{commit}/{path}{anchor}"


def code_frequency(group: str, characteristic_id: str) -> tuple[str, str]:
    if group == "ACCOUNTING_VARS":
        return (
            "年频与季频；最终按 datadate 取较新的非空值。",
            "Annual and quarterly; the final output uses the newer non-null value by datadate.",
        )
    if group == "A_ONLY_VARS":
        return ("年频。", "Annual.")
    if group == "Q_ONLY_VARS":
        if characteristic_id == "abr":
            return (
                "季度财报事件；[-2,+1] 交易日 ABR 对齐到月度。",
                "Quarterly earnings event; trading-day [-2,+1] ABR aligned to monthly dates.",
            )
        if characteristic_id == "sue":
            return (
                "季度财报；季度 SUE 对齐到月度。",
                "Quarterly earnings; quarterly SUE aligned to monthly dates.",
            )
        return ("季频。", "Quarterly.")
    if characteristic_id in ROLLING_VARS:
        return (
            "日频输入；滚动 3 个月，至少 21 个观测。",
            "Daily inputs; rolling three months with at least 21 observations.",
        )
    if characteristic_id == "re":
        return ("月频 I/B/E/S 修正。", "Monthly I/B/E/S revisions.")
    return ("月频。", "Monthly.")


def code_lag(group: str) -> tuple[str, str]:
    if group == "ACCOUNTING_VARS":
        return (
            "年频与季频结果均在 CIZ 中对齐；最终比较 datadate，取较新的可用值。",
            "CIZ aligns both annual and quarterly results, then selects the newer available value by datadate.",
        )
    if group == "A_ONLY_VARS":
        return (
            "按 chars_ciz 年频 jdate 对齐；未另行添加页面假设。",
            "Aligned by the chars_ciz annual jdate rule; the page adds no extra assumption.",
        )
    if group == "Q_ONLY_VARS":
        return (
            "按 chars_ciz 的季度或事件日期对齐；未另行添加页面假设。",
            "Aligned by the chars_ciz quarterly or event-date rule; the page adds no extra assumption.",
        )
    return (
        "信号在 t 月形成；最终输出将收益移至 t+1 月。",
        "The signal is formed at month t; final output shifts the return to month t+1.",
    )


def formula_tokens(formula: str) -> set[str]:
    tokens = {
        match.replace(r"\_", "_").upper()
        for match in re.findall(r"\\mathrm\{([^}]+)\}", formula)
    }
    for source, target in FIELD_ALIASES.items():
        if source in formula:
            tokens.add(target)
    return tokens


def detect_fields(formula: str) -> str:
    tokens = formula_tokens(formula)
    groups: list[str] = []
    crsp = sorted(tokens & CRSP_FIELDS)
    compustat = sorted(tokens & COMPUSTAT_FIELDS)
    factors = sorted(tokens & FACTOR_FIELDS)
    if crsp:
        groups.append(f"CRSP: {', '.join(crsp)}")
    if compustat:
        groups.append(f"Compustat: {', '.join(compustat)}")
    if factors:
        groups.append(f"Factor data: {', '.join(factors)}")
    if "SP500" in formula.upper():
        groups.append("Benchmark: S&P 500 return")
    if "MONTHLY\\_REVISION" in formula:
        groups.append("I/B/E/S: monthly earnings-forecast revision")
    if "industry" in formula.lower() or r"\mathrm{ind}" in formula:
        groups.append("Industry classification")
    if "FFI49" in formula.upper():
        groups.append("Fama–French 49 industry")
    return "; ".join(groups) or "Derived/intermediate variables; raw fields not stated"


def default_window(characteristic_id: str) -> tuple[str, str]:
    if characteristic_id in THREE_MONTH_DAILY:
        return (
            "滚动 3 个月日频观测；w 为窗口内有效交易日数。",
            (
                "Rolling three months of daily observations; w is the "
                "number of valid trading days."
            ),
        )
    if characteristic_id == "abr":
        return (
            "财报公告日前 2 个交易日至后 1 个交易日。",
            "Four-trading-day window from day -2 through day +1 around earnings.",
        )
    if characteristic_id == "mom12m":
        return ("月频；t-11 至 t-1。", "Monthly; months t-11 through t-1.")
    if characteristic_id == "mom6m":
        return ("月频；t-5 至 t-1。", "Monthly; months t-5 through t-1.")
    if characteristic_id == "mom36m":
        return ("月频；t-35 至 t-12。", "Monthly; months t-35 through t-12.")
    if characteristic_id == "mom60m":
        return ("月频；t-59 至 t-12。", "Monthly; months t-59 through t-12.")
    if characteristic_id == "seas1a":
        return ("月频；使用 t-11 月收益。", "Monthly; uses the return at t-11.")
    if characteristic_id == "dolvol":
        return (
            "月频；使用滞后 2 个月的成交量与价格。",
            "Monthly; uses volume and price lagged by two months.",
        )
    if characteristic_id == "re":
        return (
            "最近 3–6 次月度预测修正，窗口随可用历史数变化。",
            (
                "Latest 3–6 monthly forecast revisions, with the window "
                "varying by available history."
            ),
        )
    if characteristic_id in QUARTERLY:
        return (
            "季度 Compustat 输入；公式中的 t-k 表示季度或月度对齐滞后。",
            (
                "Quarterly Compustat inputs; t-k denotes the quarterly or "
                "monthly aligned lag shown in the formula."
            ),
        )
    if characteristic_id in MONTHLY:
        return (
            "月频输入；按公式所示滞后构造。",
            "Monthly inputs with lags as shown in the formula.",
        )
    return (
        "年度 Compustat 输入；最新已对齐值进入月度面板。",
        (
            "Annual Compustat inputs; the latest aligned value enters "
            "the monthly panel."
        ),
    )


def lag_note(fields: str) -> tuple[str, str]:
    if "Compustat" in fields and "CRSP" in fields:
        return (
            "当前公式表未注明 CRSP/Compustat 对齐滞后。",
            "The formula table does not state the CRSP/Compustat alignment lag.",
        )
    if "Compustat" in fields:
        return (
            "当前公式表未注明 Compustat 可得性滞后。",
            "The formula table does not state the Compustat availability lag.",
        )
    return (
        "当前公式表未注明信号期与收益期的额外等待期。",
        (
            "The formula table does not state an additional wait between "
            "signal and return periods."
        ),
    )


def parse_equitychars_formulas(path: Path) -> dict[str, dict[str, str]]:
    text = path.read_text(encoding="utf-8")
    rows: dict[str, dict[str, str]] = {}
    for match in FORMULA_ROW_RE.finditer(text):
        characteristic_id = match.group("id").replace(r"\_", "_")
        if characteristic_id in {"chpm", "dy", "svar"}:
            continue
        formula = normalize_formula(match.group("formula"))
        fields = detect_fields(formula)
        window_zh, window_en = default_window(characteristic_id)
        lag_zh, lag_en = lag_note(fields)
        rows[characteristic_id] = {
            "characteristic_id": characteristic_id,
            "formula_latex": formula,
            "formula_direction": match.group("direction"),
            "data_fields": fields,
            "calculation_window_zh": window_zh,
            "calculation_window_en": window_en,
            "accounting_lag_zh": lag_zh,
            "accounting_lag_en": lag_en,
            "source_label": "EquityChars maintained formula table",
            "source_url": EQUITYCHARS_FORMULA_URL,
            "provenance": "equitychars_formula_table",
            "notes_zh": "项目维护公式；窗口或字段未明示处不作额外推断。",
            "notes_en": (
                "Maintained project formula; unstated windows or fields are "
                "not inferred."
            ),
        }
    return rows


def load_characteristic_ids(path: Path) -> list[str]:
    with path.open(encoding="utf-8", newline="") as handle:
        return [row["characteristic_id"] for row in csv.DictReader(handle, delimiter="\t")]


def build_rows(
    formula_path: Path,
    characteristics_path: Path,
    equitychars_repo: Path,
    equitychars_ref: str,
) -> list[dict[str, str]]:
    characteristic_ids = load_characteristic_ids(characteristics_path)
    rows = parse_equitychars_formulas(formula_path)
    supplements = supplemental_rows()
    for characteristic_id, supplement in supplements.items():
        lag_zh, lag_en = lag_note(supplement["data_fields"])
        rows[characteristic_id] = {
            "characteristic_id": characteristic_id,
            "formula_latex": supplement["formula_latex"],
            "formula_direction": "",
            "data_fields": supplement["data_fields"],
            "calculation_window_zh": supplement["calculation_window_zh"],
            "calculation_window_en": supplement["calculation_window_en"],
            "accounting_lag_zh": lag_zh,
            "accounting_lag_en": lag_en,
            "source_label": supplement["source_label"],
            "source_url": supplement["source_url"],
            "provenance": "opensourceap_supplement",
            "notes_zh": supplement["notes_zh"],
            "notes_en": supplement["notes_en"],
        }

    expected = set(characteristic_ids)
    seed_ids = set(rows)
    if expected != seed_ids:
        missing = sorted(expected - seed_ids)
        extra = sorted(seed_ids - expected)
        raise ValueError(f"formula coverage mismatch: missing={missing}; extra={extra}")

    commit, sources = load_ciz_sources(equitychars_repo, equitychars_ref)
    registry = parse_registry(sources["registry"])
    groups = registry_groups(registry)
    registered = set(groups)
    if expected - registered:
        raise ValueError(
            "CIZ registry does not contain audit characteristics: "
            f"{sorted(expected - registered)}"
        )
    unexpected = registered - expected
    if unexpected != {"dy"}:
        raise ValueError(
            "CIZ registry/audit scope changed; expected only dy outside the "
            f"98-signal audit, found {sorted(unexpected)}"
        )

    reconcile_line = next(
        (
            line_number
            for line_number, line in enumerate(
                sources["registry"].splitlines(), start=1
            )
            if line.startswith("def _reconcile")
        ),
        None,
    )
    if reconcile_line is None:
        raise ValueError("Could not locate CIZ annual/quarterly reconciliation")
    reconcile_url = (
        f"{EQUITYCHARS_GITHUB_ROOT}/blob/{commit}/{CIZ_PATHS['registry']}"
        f"#L{reconcile_line}"
    )

    output: list[dict[str, str]] = []
    for characteristic_id in characteristic_ids:
        row = rows[characteristic_id]
        if characteristic_id == "chmom":
            # CIZ explicitly excludes Gettleman and Marks (2006), so chmom has
            # no valid chars_ciz implementation location. Preserve the audited
            # literature definition instead of mapping it to an unrelated
            # accounting variable through the broad registry group.
            output.append(
                {
                    "characteristic_id": characteristic_id,
                    "formula_latex": row["formula_latex"],
                    "formula_direction": "H-L",
                    "data_fields": "CRSP monthly: RET",
                    "calculation_window_zh": (
                        "月频；最近六个月累计收益减去此前六个月累计收益。"
                    ),
                    "calculation_window_en": (
                        "Monthly; cumulative return over months t-6 to t-1 "
                        "minus cumulative return over months t-12 to t-7."
                    ),
                    "accounting_lag_zh": "不适用；该特征仅使用月度收益。",
                    "accounting_lag_en": (
                        "Not applicable; the characteristic uses monthly "
                        "returns only."
                    ),
                    "source_label": (
                        "经审计的文献定义 · Gettleman and Marks (2006)"
                    ),
                    "source_url": (
                        "https://papers.ssrn.com/sol3/"
                        "papers.cfm?abstract_id=802724"
                    ),
                    "provenance": "literature_audit_override",
                    "source_commit": "",
                    "code_path": "",
                    "code_lines": "",
                    "code_frequency_zh": "月频收益信号；无会计数据频率。",
                    "code_frequency_en": (
                        "Monthly return signal; no accounting-data frequency."
                    ),
                    "reconcile_url": "",
                    "notes_zh": (
                        "CIZ 明确未纳入 Gettleman and Marks (2006)。"
                        "因此不得把 chmom 归到 chars_ciz/accounting.py，"
                        "也不得把二元反转指标 MomRev 视为该信号的实现。"
                    ),
                    "notes_en": (
                        "CIZ explicitly omits Gettleman and Marks (2006). "
                        "Accordingly, chmom must not be attributed to "
                        "chars_ciz/accounting.py, and the binary MomRev "
                        "indicator is not an implementation of this signal."
                    ),
                }
            )
            continue
        group = groups[characteristic_id]
        path, lines = code_location(characteristic_id, sources)
        frequency_zh, frequency_en = code_frequency(group, characteristic_id)
        window_zh, window_en = CIZ_WINDOW_OVERRIDES.get(
            characteristic_id, (frequency_zh, frequency_en)
        )
        lag_zh, lag_en = code_lag(group)
        formula = CIZ_FORMULA_OVERRIDES.get(
            characteristic_id, row["formula_latex"]
        )
        if characteristic_id in CIZ_FORMULA_OVERRIDES:
            detected_fields = detect_fields(formula)
            fields = (
                detected_fields
                if not detected_fields.startswith("Derived/intermediate")
                else row["data_fields"]
            )
        else:
            fields = row["data_fields"]

        line_label = ", ".join(f"L{line}" for line in lines)
        if group == "ACCOUNTING_VARS":
            note_zh = (
                "公式按 chars_ciz 代码转写。年频与季频同时可用时，最终输出"
                "按 datadate 选择较新的非空值。"
            )
            note_en = (
                "Formula transcribed from chars_ciz. When annual and quarterly "
                "values both exist, final output selects the newer non-null "
                "value by datadate."
            )
        else:
            note_zh = "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。"
            note_en = (
                "Formula transcribed from chars_ciz; the legacy SIZ definition "
                "is not used."
            )

        output.append(
            {
                "characteristic_id": characteristic_id,
                "formula_latex": formula,
                "formula_direction": row["formula_direction"],
                "data_fields": fields,
                "calculation_window_zh": window_zh,
                "calculation_window_en": window_en,
                "accounting_lag_zh": lag_zh,
                "accounting_lag_en": lag_en,
                "source_label": (
                    f"EquityChars CIZ · {Path(path).name} · {line_label}"
                ),
                "source_url": github_line_url(commit, path, lines),
                "provenance": "equitychars_ciz_code",
                "source_commit": commit,
                "code_path": path,
                "code_lines": ",".join(str(line) for line in lines),
                "code_frequency_zh": frequency_zh,
                "code_frequency_en": frequency_en,
                "reconcile_url": (
                    reconcile_url if group == "ACCOUNTING_VARS" else ""
                ),
                "notes_zh": note_zh,
                "notes_en": note_en,
            }
        )
    return output


def write_tsv(path: Path, rows: list[dict[str, str]]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    fieldnames = [
        "characteristic_id",
        "formula_latex",
        "formula_direction",
        "data_fields",
        "calculation_window_zh",
        "calculation_window_en",
        "accounting_lag_zh",
        "accounting_lag_en",
        "source_label",
        "source_url",
        "provenance",
        "source_commit",
        "code_path",
        "code_lines",
        "code_frequency_zh",
        "code_frequency_en",
        "reconcile_url",
        "notes_zh",
        "notes_en",
    ]
    with path.open("w", encoding="utf-8", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=fieldnames, delimiter="\t")
        writer.writeheader()
        writer.writerows(rows)


def main() -> None:
    parser = argparse.ArgumentParser()
    project_root = Path(__file__).resolve().parents[1]
    parser.add_argument(
        "--formula-source",
        type=Path,
        default=Path(
            "/home/yunting/project/EquityChars/repo/documents/formula_docs/"
            "equity_characteristics_calculation.tex"
        ),
    )
    parser.add_argument(
        "--characteristics",
        type=Path,
        default=project_root / "metadata" / "characteristics.tsv",
    )
    parser.add_argument(
        "--output",
        type=Path,
        default=project_root / "metadata" / "calculations.tsv",
    )
    parser.add_argument(
        "--equitychars-repo",
        type=Path,
        default=DEFAULT_EQUITYCHARS_REPO,
    )
    parser.add_argument(
        "--equitychars-ref",
        default=DEFAULT_EQUITYCHARS_REF,
    )
    args = parser.parse_args()
    rows = build_rows(
        args.formula_source,
        args.characteristics,
        args.equitychars_repo,
        args.equitychars_ref,
    )
    write_tsv(args.output, rows)
    print(f"wrote {args.output} with {len(rows)} formulas")


if __name__ == "__main__":
    main()
