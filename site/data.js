window.SIGNAL_ATLAS_DATA = {
  "generated_at": "2026-07-26T23:17:56+08:00",
  "title": "EquityChars Signal Atlas",
  "subtitle": "多空方向、构造规则与可回溯文献证据",
  "summary": {
    "indicators": 98,
    "papers": 62,
    "directions": {
      "not-simple": 48,
      "L-H": 16,
      "N/A": 14,
      "H-L": 20
    },
    "confidence": {
      "high": 89,
      "medium": 9
    },
    "evidence": {
      "curated": 84,
      "external_only": 1,
      "automatic": 13
    },
    "artifacts": {
      "pdf": 74,
      "none": 8,
      "html": 16
    },
    "methods": {
      "sorted_portfolio_comparison": 6,
      "implied_cost_of_capital": 2,
      "cross_sectional_return_regression": 18,
      "beta_pricing_test": 1,
      "model_weighted_zero_investment": 6,
      "multivariate_prediction_model": 11,
      "event_study": 3,
      "corporate_investment_regression": 1
    }
  },
  "direction_labels": {
    "H-L": "高值做多 · 低值做空",
    "L-H": "低值做多 · 高值做空",
    "not-simple": "非简单多空",
    "ambiguous": "方向待核",
    "transformed": "经过变换",
    "N/A": "不适用"
  },
  "indicators": [
    {
      "id": "abr",
      "name": "cumulative abnormal returns around earnings announcement dates",
      "signal_definition": "cumulative abnormal returns around earnings announcement dates",
      "sort_variable": "abr",
      "code_direction": "H-L",
      "paper_direction": "not-simple",
      "direction_label": "非简单多空",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Chan, Jegadeesh, and Lakonishok (1996). Formula table direction: +1.",
      "raw_signal": "abnormal return relative to the equally weighted market index cumulated from two days before to one day after the most recent past quarterly earnings announcement",
      "construction_summary": "Stocks are sorted monthly into ten portfolios by ABR; the paper reports buy-and-hold returns after formation and states favorable announcement-return stocks outperform unfavorable ones, but does not define a standalone ABR zero-cost H-L portfolio.",
      "sample_and_timing": "Domestic NYSE/AMEX/Nasdaq primary stocks with CRSP and COMPUSTAT coverage; monthly formations from January 1977 to January 1993; returns start after skipping the first five days after formation.",
      "breakpoints": "NYSE-only decile breakpoints; earnings-momentum breakpoints use NYSE firms with earnings reported in the prior three months.",
      "weighting": "Equal-weighted stocks within each decile portfolio.",
      "rebalancing_frequency": "Monthly formation/ranking; remaining stocks rebalanced to equal weights at the end of each reported period for subsequent-period returns.",
      "holding_period": "Following six months and first, second, and third subsequent years.",
      "paper_long_leg": "high ABR / large favorable announcement returns",
      "paper_short_leg": "low ABR / large unfavorable announcement returns",
      "confidence": "high",
      "evidence_type": "extracted_text",
      "evidence_pointer": "extracted-text/chan-1996.txt:222-240,270-290,329-345,670-679,783-784,833-847",
      "reviewer_notes": "ABR has clear signal, breakpoints, weighting, and return windows; the original text supports H outperforming L but not a clearly formed simple ABR-only long-short portfolio.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "In our earnings momentum strategies, the breakpoints in any given month are based on all NYSE firms that have reported earnings within the prior three months.",
          "page": 5,
          "line_start": 222,
          "line_end": 240,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/chan-1996.txt",
          "href": "../papers/chan-1996/chan-jegadeesh-lakonishok-1996-jstor.pdf#page=5",
          "open_label": "查看 PDF 第 5 页"
        },
        {
          "text": "Another measure of earnings surprise is the cumulative abnormal stock return around the most recent announcement date of earnings up to month t, ABR, defined as +1 ABRit =E (rij - rmj) (2) j=-2 where ri is stock i's return on dayj (with the earni 0) and rmj is the return on the equally-weighted market index.",
          "page": 6,
          "line_start": 270,
          "line_end": 290,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/chan-1996.txt",
          "href": "../papers/chan-1996/chan-jegadeesh-lakonishok-1996-jstor.pdf#page=6",
          "open_label": "查看 PDF 第 6 页"
        },
        {
          "text": "If a stock is delisted after it is included in a portfolio but before the end of the holding period over which returns are calculated, we replace its return until the end of the period with the return on a value-weighted market index.",
          "page": 7,
          "line_start": 329,
          "line_end": 345,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/chan-1996.txt",
          "href": "../papers/chan-1996/chan-jegadeesh-lakonishok-1996-jstor.pdf#page=7",
          "open_label": "查看 PDF 第 7 页"
        },
        {
          "text": "Our results in Table IV actually indicate that the differences in returns associated with differences in past abnormal announcement returns are as large as the differences induced by ranking on SUE.7 Stocks with large favorable announcement returns subsequently out-",
          "page": 12,
          "line_start": 670,
          "line_end": 679,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/chan-1996.txt",
          "href": "../papers/chan-1996/chan-jegadeesh-lakonishok-1996-jstor.pdf#page=12",
          "open_label": "查看 PDF 第 12 页"
        },
        {
          "text": "perform stocks with large unfavorable announcement returns by 5.9 percent in the first six months, and by 8.3 percent in the first year.",
          "page": 14,
          "line_start": 783,
          "line_end": 784,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/chan-1996.txt",
          "href": "../papers/chan-1996/chan-jegadeesh-lakonishok-1996-jstor.pdf#page=14",
          "open_label": "查看 PDF 第 14 页"
        },
        {
          "text": "Abnormal returns are relative to the equally-weighted market index and are cumulated from two days before to one day after the date of earnings announcement.",
          "page": 15,
          "line_start": 833,
          "line_end": 847,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/chan-1996.txt",
          "href": "../papers/chan-1996/chan-jegadeesh-lakonishok-1996-jstor.pdf#page=15",
          "open_label": "查看 PDF 第 15 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "chan-1996",
        "title": "Momentum Strategies",
        "authors": "Louis K. C. Chan; Narasimhan Jegadeesh; Josef Lakonishok",
        "year": "1996",
        "venue": "The Journal of Finance",
        "doi": "10.1111/j.1540-6261.1996.tb05222.x",
        "source_url": "https://onlinelibrary.wiley.com/doi/10.1111/j.1540-6261.1996.tb05222.x",
        "local_file": "papers/chan-1996/chan-jegadeesh-lakonishok-1996-jstor.pdf",
        "local_href": "../papers/chan-1996/chan-jegadeesh-lakonishok-1996-jstor.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 34,
        "access_status": "full_text_pdf_jstor"
      },
      "method_variants": [
        {
          "id": "chan-1996",
          "source_id": "chan-1996",
          "role": "original_paper",
          "source_label": "Momentum Strategies",
          "source_year": "1996",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{ABR}_{i,q}=\\sum_{\\tau=-2}^{1}\\left(R_{i,q+\\tau}-R^{EW}_{m,q+\\tau}\\right)\\)",
          "data_fields": "abnormal return relative to the equally weighted market index cumulated from two days before to one day after the most recent past quarterly earnings announcement",
          "calculation_window": {
            "zh": "Domestic NYSE/AMEX/Nasdaq primary stocks with CRSP and COMPUSTAT coverage; monthly formations from January 1977 to January 1993; returns start after skipping the first five days after formation.",
            "en": "Domestic NYSE/AMEX/Nasdaq primary stocks with CRSP and COMPUSTAT coverage; monthly formations from January 1977 to January 1993; returns start after skipping the first five days after formation."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "NYSE-only decile breakpoints; earnings-momentum breakpoints use NYSE firms with earnings reported in the prior three months. Equal-weighted stocks within each decile portfolio. Monthly formation/ranking; remaining stocks rebalanced to equal weights at the end of each reported period for subsequent-period returns. Following six months and first, second, and third subsequent years.",
            "en": "NYSE-only decile breakpoints; earnings-momentum breakpoints use NYSE firms with earnings reported in the prior three months. Equal-weighted stocks within each decile portfolio. Monthly formation/ranking; remaining stocks rebalanced to equal weights at the end of each reported period for subsequent-period returns. Following six months and first, second, and third subsequent years."
          },
          "direction": "not-simple",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/chan-1996/chan-jegadeesh-lakonishok-1996-jstor.pdf",
          "source_page": 5,
          "source_href": "../papers/chan-1996/chan-jegadeesh-lakonishok-1996-jstor.pdf#page=5"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{ABR}_{i,t}=\\sum_{\\tau=-2}^{1}\\left[\\mathrm{DLYRET}_{i,t+\\tau}-(\\mathrm{MKTRF}_{t+\\tau}+\\mathrm{RF}_{t+\\tau})\\right]\\)",
        "formula_direction": "+1",
        "data_fields": "CRSP: DLYRET; Factor data: MKTRF, RF",
        "calculation_window": {
          "zh": "季度财报事件；[-2,+1] 交易日 ABR 对齐到月度。",
          "en": "Quarterly earnings event; trading-day [-2,+1] ABR aligned to monthly dates."
        },
        "accounting_lag": {
          "zh": "按 chars_ciz 的季度或事件日期对齐；未另行添加页面假设。",
          "en": "Aligned by the chars_ciz quarterly or event-date rule; the page adds no extra assumption."
        },
        "source_label": "EquityChars CIZ · abr.py · L176",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/abr.py#L176",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/abr.py",
        "code_lines": "176",
        "code_frequency": {
          "zh": "季度财报事件；[-2,+1] 交易日 ABR 对齐到月度。",
          "en": "Quarterly earnings event; trading-day [-2,+1] ABR aligned to monthly dates."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      },
      "method_design": {
        "family": "sorted_portfolio_comparison",
        "summary": {
          "zh": "每月按公告期累计异常收益（ABR）形成十分位组合，组内等权，并考察形成后六个月及更长期限的买入并持有收益。",
          "en": "Stocks are sorted monthly into ten portfolios by ABR; the paper reports buy-and-hold returns after formation and states favorable announcement-return stocks outperform unfavorable ones, but does not define a standalone ABR zero-cost H-L portfolio."
        },
        "signal_role": {
          "zh": "组合排序变量",
          "en": "Portfolio sorting variable"
        },
        "estimand": {
          "zh": "各ABR十分位组合的形成后收益",
          "en": "Post-formation returns of ABR decile portfolios"
        },
        "interpretation": {
          "zh": "论文报告分组收益及高低端比较，但未将ABR定义为独立的零成本两端组合。",
          "en": ""
        }
      }
    },
    {
      "id": "absacc",
      "name": "Absolute accruals",
      "signal_definition": "Absolute accruals",
      "sort_variable": "absacc",
      "code_direction": "L-H",
      "paper_direction": "L-H",
      "direction_label": "低值做多 · 高值做空",
      "agreement": "yes",
      "status": "paper_direction_verified",
      "code_long_leg": "Low",
      "code_short_leg": "High",
      "code_notes": "Repo attribution: Bandyopadhyay, Huang, and Wirjanto (2010). Formula table direction: -1.",
      "raw_signal": "Accrual volatility (ACCV)",
      "construction_summary": "Compute each firm's standard deviation of accruals-to-sales over the past 16 quarters; every month rank all sample stocks into ten increasing-ACCV portfolios. Table II reports D1-D10, explicitly long the lowest-volatility decile and short the highest-volatility decile.",
      "sample_and_timing": "U.S. quarterly accounting data and monthly returns, 1976-2008; a 16-quarter signal window precedes portfolio formation.",
      "breakpoints": "Monthly deciles using the ranked ACCV values of all stocks; breakpoints are updated month by month.",
      "weighting": "Both equal-weighted and value-weighted returns are reported.",
      "rebalancing_frequency": "Monthly.",
      "holding_period": "One month in Table II, with robustness horizons through five years.",
      "paper_long_leg": "Decile 1, lowest accrual volatility.",
      "paper_short_leg": "Decile 10, highest accrual volatility.",
      "confidence": "high",
      "evidence_type": "repository_indexed_original_pdf",
      "evidence_pointer": "https://citeseerx.ist.psu.edu/document?doi=def4e90345f7f37ec26dab23a24c50ed5552828a&repid=rep1&type=pdf#Table-II; web-indexed original working-paper PDF Table II",
      "reviewer_notes": "The indexed original PDF states ACCV is the 16-quarter standard deviation of accruals-to-sales and labels the explicit spread D1-D10; direct file retrieval was blocked by the repository TLS handshake, so no local PDF is claimed.",
      "audit_sources": [],
      "evidence": [],
      "evidence_mode": "external_only",
      "paper": {
        "id": "bandyopadhyay-2010",
        "title": "The Value of Long-Term Accrual Management",
        "authors": "Tony S. Wirjanto; Sati P. Bandyopadhyay; Alan Guoming Huang",
        "year": "2010",
        "venue": "AAA 2010 Financial Accounting and Reporting Section (FARS) Paper",
        "doi": "10.2139/ssrn.1466347",
        "source_url": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1466347",
        "local_file": "",
        "local_href": "",
        "artifact_type": "none",
        "pdf_pages": null,
        "access_status": "repository_pdf_indexed_download_tls_blocked"
      },
      "method_variants": [
        {
          "id": "bandyopadhyay-2010",
          "source_id": "bandyopadhyay-2010",
          "role": "original_paper",
          "source_label": "The Value of Long-Term Accrual Management",
          "source_year": "2010",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{ACCV}_{i,t}=\\operatorname{SD}_{q=t-15,\\ldots,t}\\!\\left(\\frac{\\mathrm{Accruals}_{i,q}}{\\mathrm{Sales}_{i,q}}\\right)\\)",
          "data_fields": "Accrual volatility (ACCV)",
          "calculation_window": {
            "zh": "U.S. quarterly accounting data and monthly returns, 1976-2008; a 16-quarter signal window precedes portfolio formation.",
            "en": "U.S. quarterly accounting data and monthly returns, 1976-2008; a 16-quarter signal window precedes portfolio formation."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Monthly deciles using the ranked ACCV values of all stocks; breakpoints are updated month by month. Both equal-weighted and value-weighted returns are reported. Monthly. One month in Table II, with robustness horizons through five years.",
            "en": "Monthly deciles using the ranked ACCV values of all stocks; breakpoints are updated month by month. Both equal-weighted and value-weighted returns are reported. Monthly. One month in Table II, with robustness horizons through five years."
          },
          "direction": "L-H",
          "formula_match": "closest_paper_measure",
          "notes": {
            "zh": "论文只给出最接近口径，与项目指标不完全相同。",
            "en": "The paper provides the closest available measure; it is not identical to the project signal."
          },
          "source_path": "",
          "source_page": null,
          "source_href": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1466347"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{ABSACC}_{i,t}=|\\mathrm{ACC}_{i,t}|\\)",
        "formula_direction": "-1",
        "data_fields": "Derived/intermediate variables; raw fields not stated",
        "calculation_window": {
          "zh": "年频。",
          "en": "Annual."
        },
        "accounting_lag": {
          "zh": "按 chars_ciz 年频 jdate 对齐；未另行添加页面假设。",
          "en": "Aligned by the chars_ciz annual jdate rule; the page adds no extra assumption."
        },
        "source_label": "EquityChars CIZ · accounting.py · L445, L1527",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L445",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "445,1527",
        "code_frequency": {
          "zh": "年频。",
          "en": "Annual."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      }
    },
    {
      "id": "acc",
      "name": "Operating Accruals",
      "signal_definition": "Operating Accruals",
      "sort_variable": "acc",
      "code_direction": "L-H",
      "paper_direction": "L-H",
      "direction_label": "低值做多 · 高值做空",
      "agreement": "yes",
      "status": "paper_direction_verified",
      "code_long_leg": "Low",
      "code_short_leg": "High",
      "code_notes": "Repo attribution: Sloan (1996). Formula table direction: -1.",
      "raw_signal": "accruals = change in non-cash current assets minus change in current liabilities excluding short-term debt and taxes payable, minus depreciation, scaled by average total assets",
      "construction_summary": "The published article ranks firms annually by accrual magnitude, assigns equal numbers to ten portfolios, and forms an equal-valued hedge long the lowest-accrual decile and short the highest-accrual decile.",
      "sample_and_timing": "40,679 firm-years from 1962-1991; financial-statement variables are annual, and return accumulation starts four months after fiscal year-end.",
      "breakpoints": "Annual equal-count accrual deciles, lowest through highest.",
      "weighting": "Equal-weighted portfolio abnormal returns; size-adjusted buy-and-hold returns and Jensen alphas are reported.",
      "rebalancing_frequency": "annual",
      "holding_period": "One year for the primary test; the paper also reports years two and three.",
      "paper_long_leg": "lowest-accrual decile",
      "paper_short_leg": "highest-accrual decile",
      "confidence": "high",
      "evidence_type": "published_jstor_pdf_institutional_mirror",
      "evidence_pointer": "extracted-text/sloan-1996-publisher.txt:297-330,878-903,925-951,1009-1011",
      "reviewer_notes": "Verified against the final Accounting Review/JSTOR-formatted PDF publicly hosted by CUHK; journal volume, issue, pages, accrual formula, timing, deciles, weighting, and lowest-minus-highest hedge are explicit. This is a published archival copy, not a draft.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "The measure of firm size employed is total assets, measured as the average of the beginning and end of year book value of total assets (Compustat data item 6).7 The following definitions of the three financial variables are used in the empirical analysis: Income from Continuing Operations Earnings = Average Total Assets Accruals Accrual Component = , and Average Total Assets Income from Continuing Operations - Accruals Cash Flow Component = Average Total Assets The measurement of future stock returns begins four months after the end of the fiscal year from which the financial statement data are gathered.",
          "page": 7,
          "line_start": 297,
          "line_end": 330,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/sloan-1996-publisher.txt",
          "href": "../papers/sloan-1996/sloan-1996-publisher.pdf#page=7",
          "open_label": "查看 PDF 第 7 页"
        },
        {
          "text": "As detailed in section 111, abnormal returns are measured using size adjusted returns and Jensen alphas.16 The first column of results in table 6 reports the size adjusted returns for the first year following portfolio formation.",
          "page": 19,
          "line_start": 878,
          "line_end": 903,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/sloan-1996-publisher.txt",
          "href": "../papers/sloan-1996/sloan-1996-publisher.pdf#page=19",
          "open_label": "查看 PDF 第 19 页"
        },
        {
          "text": "The values in parentheses are t-statistics based on the time-series of the annual portfolio abnormal stock returns. a Accruals is the change in non-cash current assets, less the change in current liabilities (exclusive of short-term debt and taxes payable), less depreciation expense, all divided by average total assets.",
          "page": 20,
          "line_start": 925,
          "line_end": 951,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/sloan-1996-publisher.txt",
          "href": "../papers/sloan-1996/sloan-1996-publisher.pdf#page=20",
          "open_label": "查看 PDF 第 20 页"
        },
        {
          "text": "Returns by calendar year to a hedge portfolio taking a long position in the stock of firms in the lowest decile of accruals and an equal-sized short position in the stock of firms in the highest decile of accruals.",
          "page": 22,
          "line_start": 1009,
          "line_end": 1011,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/sloan-1996-publisher.txt",
          "href": "../papers/sloan-1996/sloan-1996-publisher.pdf#page=22",
          "open_label": "查看 PDF 第 22 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "sloan-1996",
        "title": "Do Stock Prices Fully Reflect Information in Accruals and Cash Flows About Future Earnings?",
        "authors": "Richard G. Sloan",
        "year": "1996",
        "venue": "The Accounting Review",
        "doi": "10.2308/tar-9608042309",
        "source_url": "https://doi.org/10.2308/tar-9608042309",
        "local_file": "papers/sloan-1996/sloan-1996-publisher.pdf",
        "local_href": "../papers/sloan-1996/sloan-1996-publisher.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 30,
        "access_status": "full_text_pdf_publisher"
      },
      "method_variants": [
        {
          "id": "sloan-1996",
          "source_id": "sloan-1996",
          "role": "original_paper",
          "source_label": "Do Stock Prices Fully Reflect Information in Accruals and Cash Flows About Future Earnings?",
          "source_year": "1996",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{ACC}_{i,t}=\\frac{\\Delta(\\mathrm{ACT}-\\mathrm{CHE})_{i,t}-\\Delta(\\mathrm{LCT}-\\mathrm{DLC}-\\mathrm{TXP})_{i,t}-\\mathrm{DP}_{i,t}}{(\\mathrm{AT}_{i,t}+\\mathrm{AT}_{i,t-1})/2}\\)",
          "data_fields": "accruals = change in non-cash current assets minus change in current liabilities excluding short-term debt and taxes payable, minus depreciation, scaled by average total assets",
          "calculation_window": {
            "zh": "40,679 firm-years from 1962-1991; financial-statement variables are annual, and return accumulation starts four months after fiscal year-end.",
            "en": "40,679 firm-years from 1962-1991; financial-statement variables are annual, and return accumulation starts four months after fiscal year-end."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Annual equal-count accrual deciles, lowest through highest. Equal-weighted portfolio abnormal returns; size-adjusted buy-and-hold returns and Jensen alphas are reported. annual One year for the primary test; the paper also reports years two and three.",
            "en": "Annual equal-count accrual deciles, lowest through highest. Equal-weighted portfolio abnormal returns; size-adjusted buy-and-hold returns and Jensen alphas are reported. annual One year for the primary test; the paper also reports years two and three."
          },
          "direction": "L-H",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/sloan-1996/sloan-1996-publisher.pdf",
          "source_page": 7,
          "source_href": "../papers/sloan-1996/sloan-1996-publisher.pdf#page=7"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{ACC}_{i,t}= \\begin{cases} \\dfrac{(\\Delta\\mathrm{ACT}_{i,t}-\\Delta\\mathrm{CHE}_{i,t}) -\\Delta\\mathrm{LCT}_{i,t}+\\Delta\\mathrm{DLC}_{i,t}+\\Delta\\mathrm{TXP}_{i,t} -\\mathrm{DP}_{i,t}} {\\frac{1}{2}(\\mathrm{AT}_{i,t}+\\mathrm{AT}_{i,t-1})}, & \\mathrm{OANCF}_{i,t}\\text{ missing},\\\\[0.6em] \\dfrac{\\mathrm{NI}_{i,t}-\\mathrm{OANCF}_{i,t}} {\\frac{1}{2}(\\mathrm{AT}_{i,t}+\\mathrm{AT}_{i,t-1})}, & \\text{otherwise}. \\end{cases}\\)",
        "formula_direction": "-1",
        "data_fields": "Compustat: ACT, AT, CHE, DLC, DP, LCT, NI, OANCF, TXP",
        "calculation_window": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "accounting_lag": {
          "zh": "年频与季频结果均在 CIZ 中对齐；最终比较 datadate，取较新的可用值。",
          "en": "CIZ aligns both annual and quarterly results, then selects the newer available value by datadate."
        },
        "source_label": "EquityChars CIZ · accounting.py · L440, L1522",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L440",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "440,1522",
        "code_frequency": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "reconcile_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/impute_rank_output.py#L85",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写。年频与季频同时可用时，最终输出按 datadate 选择较新的非空值。",
          "en": "Formula transcribed from chars_ciz. When annual and quarterly values both exist, final output selects the newer non-null value by datadate."
        }
      }
    },
    {
      "id": "adm",
      "name": "Advertising Expense-to-market",
      "signal_definition": "Advertising Expense-to-market",
      "sort_variable": "adm",
      "code_direction": "H-L",
      "paper_direction": "not-simple",
      "direction_label": "非简单多空",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Chan, Lakonishok, and Sougiannis (2001). Formula table direction: +1.",
      "raw_signal": "advertising expenditure relative to market value of equity",
      "construction_summary": "Stocks are ranked annually by advertising expense-to-market into five equally sized portfolios, with nonadvertising firms separate; the paper reports buy-and-hold returns and control-portfolio excess returns, but does not define a simple long-short advertising portfolio.",
      "sample_and_timing": "Domestic NYSE/AMEX/Nasdaq primary stocks with CRSP and COMPUSTAT coverage; portfolios formed at end of April each year from 1975 to 1995 using most recently available accounting data with a four-month reporting delay.",
      "breakpoints": "Five equally sized portfolios among firms with advertising expenditures; no-advertising firms assigned to a separate portfolio.",
      "weighting": "Equally weighted annual buy-and-hold portfolio returns; excess returns use equally weighted size and book-to-market matched control portfolios.",
      "rebalancing_frequency": "Annual April formation; text says portfolio composition is revised each year.",
      "holding_period": "First, second, and third postformation years and average over the three postformation years.",
      "paper_long_leg": "high advertising-to-market / quintile 5",
      "paper_short_leg": "low advertising-to-market / quintile 1",
      "confidence": "high",
      "evidence_type": "extracted_text",
      "evidence_pointer": "extracted-text/chan-2001.txt:498-514,1142-1165,1195-1205,1210-1233,1367-1369",
      "reviewer_notes": "Clear annual quintile sort and high-minus-low comparison data exist, but no explicit simple H-L/L-H long-short portfolio is formed.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "Portfolios are formed at the end of April each year, based on the most recently available accounting information (as- suming a four-month delay between the end of a firm's fiscal year and the This content downloaded from 144.214.9.191 on Sat, 25 Jul 2026 15:49:44 UTC All use subject to https://about.jstor.org/terms",
          "page": 9,
          "line_start": 498,
          "line_end": 514,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/chan-2001.txt",
          "href": "../papers/chan-2001/chan-lakonishok-sougiannis-2001-jstor.pdf#page=9",
          "open_label": "查看 PDF 第 9 页"
        },
        {
          "text": "Since we focus on valuation effects over longer horizons, we calculate equally weighted an- nual buy-and-hold returns over each of the three years following portfolio",
          "page": 10,
          "line_start": 498,
          "line_end": 514,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/chan-2001.txt",
          "href": "../papers/chan-2001/chan-lakonishok-sougiannis-2001-jstor.pdf#page=10",
          "open_label": "查看 PDF 第 10 页"
        },
        {
          "text": "Table VII provides results for portfolios sorted by advertising expendi- tures relative to market value of equity.24 The number of firms that do ad- vertising is roughly the same as those doing R&D (about 1,200 firms on average each year report nonzero expense for either advertising or R&D).",
          "page": 22,
          "line_start": 1142,
          "line_end": 1165,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/chan-2001.txt",
          "href": "../papers/chan-2001/chan-lakonishok-sougiannis-2001-jstor.pdf#page=22",
          "open_label": "查看 PDF 第 22 页"
        },
        {
          "text": "At the end of April each year from 1975 to 1995, all stocks are ranked by their advertising expenditure relative to the market value of equity, and assigned to one of five equally sized portfolios.",
          "page": 23,
          "line_start": 1195,
          "line_end": 1205,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/chan-2001.txt",
          "href": "../papers/chan-2001/chan-lakonishok-sougiannis-2001-jstor.pdf#page=23",
          "open_label": "查看 PDF 第 23 页"
        },
        {
          "text": "1(Low) 2 3 4 5 (High) Nonadvertising Panel A: Returns Before and After Portfolio Formation Average annual return over 0.3146 0.2286 0.1978 0.1769 0.1402 0.1981 5-year period before portfolio formation First year after portfolio formation 0.1651 0.1958 0.2179 0.2246 0.2276 0.1946 Second year after portfolio formation 0.1491 0.1945 0.2113 0.2045 0.2321 0.1886 Third year after portfolio formation 0.1648 0.1972 0.2189 0.2196 0.2491 0.1854 Average annual return over 0.1597 0.1958 0.2160 0.2162 0.2363",
          "page": 23,
          "line_start": 1210,
          "line_end": 1233,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/chan-2001.txt",
          "href": "../papers/chan-2001/chan-lakonishok-sougiannis-2001-jstor.pdf#page=23",
          "open_label": "查看 PDF 第 23 页"
        },
        {
          "text": "In the text, we report returns based on a buy-and-hold strategy, where the composition of the portfolio is revised each year.",
          "page": 25,
          "line_start": 1367,
          "line_end": 1369,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/chan-2001.txt",
          "href": "../papers/chan-2001/chan-lakonishok-sougiannis-2001-jstor.pdf#page=25",
          "open_label": "查看 PDF 第 25 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "chan-2001",
        "title": "The Stock Market Valuation of Research and Development Expenditures",
        "authors": "Louis K. C. Chan; Josef Lakonishok; Theodore Sougiannis",
        "year": "2001",
        "venue": "The Journal of Finance",
        "doi": "10.1111/0022-1082.00411",
        "source_url": "https://onlinelibrary.wiley.com/doi/10.1111/0022-1082.00411",
        "local_file": "papers/chan-2001/chan-lakonishok-sougiannis-2001-jstor.pdf",
        "local_href": "../papers/chan-2001/chan-lakonishok-sougiannis-2001-jstor.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 27,
        "access_status": "full_text_pdf_jstor"
      },
      "method_variants": [
        {
          "id": "chan-2001",
          "source_id": "chan-2001",
          "role": "original_paper",
          "source_label": "The Stock Market Valuation of Research and Development Expenditures",
          "source_year": "2001",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{ADM}_{i,t}=\\frac{\\mathrm{XAD}_{i,t}}{\\mathrm{ME}_{i,t}}\\)",
          "data_fields": "advertising expenditure relative to market value of equity",
          "calculation_window": {
            "zh": "Domestic NYSE/AMEX/Nasdaq primary stocks with CRSP and COMPUSTAT coverage; portfolios formed at end of April each year from 1975 to 1995 using most recently available accounting data with a four-month reporting delay.",
            "en": "Domestic NYSE/AMEX/Nasdaq primary stocks with CRSP and COMPUSTAT coverage; portfolios formed at end of April each year from 1975 to 1995 using most recently available accounting data with a four-month reporting delay."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Five equally sized portfolios among firms with advertising expenditures; no-advertising firms assigned to a separate portfolio. Equally weighted annual buy-and-hold portfolio returns; excess returns use equally weighted size and book-to-market matched control portfolios. Annual April formation; text says portfolio composition is revised each year. First, second, and third postformation years and average over the three postformation years.",
            "en": "Five equally sized portfolios among firms with advertising expenditures; no-advertising firms assigned to a separate portfolio. Equally weighted annual buy-and-hold portfolio returns; excess returns use equally weighted size and book-to-market matched control portfolios. Annual April formation; text says portfolio composition is revised each year. First, second, and third postformation years and average over the three postformation years."
          },
          "direction": "not-simple",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/chan-2001/chan-lakonishok-sougiannis-2001-jstor.pdf",
          "source_page": 9,
          "source_href": "../papers/chan-2001/chan-lakonishok-sougiannis-2001-jstor.pdf#page=9"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{ADM}_{i,t}=\\frac{\\mathrm{XAD}_{i,t}}{\\mathrm{ME}_{i,t}}\\).",
        "formula_direction": "+1",
        "data_fields": "Compustat: XAD",
        "calculation_window": {
          "zh": "年频。",
          "en": "Annual."
        },
        "accounting_lag": {
          "zh": "按 chars_ciz 年频 jdate 对齐；未另行添加页面假设。",
          "en": "Aligned by the chars_ciz annual jdate rule; the page adds no extra assumption."
        },
        "source_label": "EquityChars CIZ · accounting.py · L2328",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L2328",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "2328",
        "code_frequency": {
          "zh": "年频。",
          "en": "Annual."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      },
      "method_design": {
        "family": "sorted_portfolio_comparison",
        "summary": {
          "zh": "每年按广告费用与市值之比形成五个等规模组合，并将无广告费用企业单列；结果变量为买入并持有收益及相对规模—账面市值比匹配组合的超额收益。",
          "en": "Stocks are ranked annually by advertising expense-to-market into five equally sized portfolios, with nonadvertising firms separate; the paper reports buy-and-hold returns and control-portfolio excess returns, but does not define a simple long-short advertising portfolio."
        },
        "signal_role": {
          "zh": "组合排序变量",
          "en": "Portfolio sorting variable"
        },
        "estimand": {
          "zh": "广告强度组合的原始收益与匹配调整收益",
          "en": "Raw and matched-control returns of advertising-intensity portfolios"
        },
        "interpretation": {
          "zh": "论文报告分组收益及端点比较，但未将广告强度定义为独立的零成本两端组合。",
          "en": ""
        }
      }
    },
    {
      "id": "age",
      "name": "# years since first Compustat coverage",
      "signal_definition": "# years since first Compustat coverage",
      "sort_variable": "age",
      "code_direction": "L-H",
      "paper_direction": "L-H",
      "direction_label": "低值做多 · 高值做空",
      "agreement": "yes",
      "status": "paper_direction_verified",
      "code_long_leg": "Low",
      "code_short_leg": "High",
      "code_notes": "Repo attribution: Jiang, Lee, and Zhang (2005). Formula table direction: -1.",
      "raw_signal": "Firm Age = number of months between event month t and the first month that the stock appears in CRSP",
      "construction_summary": "The published article sorts firms monthly on Firm Age as an information-uncertainty proxy; its standalone age table uses ten portfolios and reports V10-V1, where V10 is youngest/low age and V1 is oldest/high age.",
      "sample_and_timing": "NYSE/AMEX/NASDAQ firms from 1965-2001; excludes closed-end funds, REITs, ADRs, foreign firms, very small firms, and firms with less than 12 months of CRSP past returns.",
      "breakpoints": "Monthly deciles on Firm Age; V1 is oldest/high age and V10 is youngest/low age.",
      "weighting": "Equal-weighted portfolio returns.",
      "rebalancing_frequency": "Monthly.",
      "holding_period": "Next K months, K=6 or 12; holding-period returns average strategies initiated in the current and previous K-1 months.",
      "paper_long_leg": "youngest / low Firm Age portfolio (V10)",
      "paper_short_leg": "oldest / high Firm Age portfolio (V1)",
      "confidence": "high",
      "evidence_type": "publisher_final_pdf",
      "evidence_pointer": "extracted-text/jiang-2005-publisher.txt:352,394-400,472-512,553-572",
      "reviewer_notes": "Verified against the formal Review of Accounting Studies publisher PDF; age definition, monthly sort, equal-weighted overlapping returns, and V10-minus-V1 direction are explicit.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "Firm Age is deﬁned as the number of months between event",
          "page": 8,
          "line_start": 352,
          "line_end": 352,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/jiang-2005-publisher.txt",
          "href": "../papers/jiang-2005/jiang-2005-publisher.pdf#page=8",
          "open_label": "查看 PDF 第 8 页"
        },
        {
          "text": "Similar to Jegadeesh and Titman (1993), the monthly return for a K-month holding period is based on an equal-weighted average of portfolio returns from",
          "page": 9,
          "line_start": 394,
          "line_end": 400,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/jiang-2005-publisher.txt",
          "href": "../papers/jiang-2005/jiang-2005-publisher.pdf#page=9",
          "open_label": "查看 PDF 第 9 页"
        },
        {
          "text": "For example, panel A shows that ﬁrms in the youngest decile earn average monthly returns of 0.89% over the next six months.",
          "page": 10,
          "line_start": 472,
          "line_end": 512,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/jiang-2005-publisher.txt",
          "href": "../papers/jiang-2005/jiang-2005-publisher.pdf#page=10",
          "open_label": "查看 PDF 第 10 页"
        },
        {
          "text": "Starting in January of 1965, each month we sort all stocks using one of the four IU proxies into 10 equal-weighted portfolios, and document the average monthly returns over the next K months, where K=6 or 12.",
          "page": 11,
          "line_start": 472,
          "line_end": 512,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/jiang-2005-publisher.txt",
          "href": "../papers/jiang-2005/jiang-2005-publisher.pdf#page=11",
          "open_label": "查看 PDF 第 11 页"
        },
        {
          "text": "V3 represents the highest IU portfolio (young, high volatility, high volume or high duration), while V1 represents the lowest IU portfolio (old, low volatility, low volume or low duration).",
          "page": 12,
          "line_start": 553,
          "line_end": 572,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/jiang-2005-publisher.txt",
          "href": "../papers/jiang-2005/jiang-2005-publisher.pdf#page=12",
          "open_label": "查看 PDF 第 12 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "jiang-2005",
        "title": "Information Uncertainty and Expected Returns",
        "authors": "Guohua Jiang, Charles M. C. Lee, and Yi Zhang",
        "year": "2005",
        "venue": "Review of Accounting Studies",
        "doi": "10.1007/s11142-005-1528-2",
        "source_url": "https://doi.org/10.1007/s11142-005-1528-2",
        "local_file": "papers/jiang-2005/jiang-2005-publisher.pdf",
        "local_href": "../papers/jiang-2005/jiang-2005-publisher.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 37,
        "access_status": "full_text_pdf_publisher"
      },
      "method_variants": [
        {
          "id": "jiang-2005",
          "source_id": "jiang-2005",
          "role": "original_paper",
          "source_label": "Information Uncertainty and Expected Returns",
          "source_year": "2005",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{Age}_{i,t}=t-\\mathrm{FirstCRSPMonth}_{i}\\)",
          "data_fields": "Firm Age = number of months between event month t and the first month that the stock appears in CRSP",
          "calculation_window": {
            "zh": "NYSE/AMEX/NASDAQ firms from 1965-2001; excludes closed-end funds, REITs, ADRs, foreign firms, very small firms, and firms with less than 12 months of CRSP past returns.",
            "en": "NYSE/AMEX/NASDAQ firms from 1965-2001; excludes closed-end funds, REITs, ADRs, foreign firms, very small firms, and firms with less than 12 months of CRSP past returns."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Monthly deciles on Firm Age; V1 is oldest/high age and V10 is youngest/low age. Equal-weighted portfolio returns. Monthly. Next K months, K=6 or 12; holding-period returns average strategies initiated in the current and previous K-1 months.",
            "en": "Monthly deciles on Firm Age; V1 is oldest/high age and V10 is youngest/low age. Equal-weighted portfolio returns. Monthly. Next K months, K=6 or 12; holding-period returns average strategies initiated in the current and previous K-1 months."
          },
          "direction": "L-H",
          "formula_match": "closest_paper_measure",
          "notes": {
            "zh": "论文只给出最接近口径，与项目指标不完全相同。",
            "en": "The paper provides the closest available measure; it is not identical to the project signal."
          },
          "source_path": "papers/jiang-2005/jiang-2005-publisher.pdf",
          "source_page": 8,
          "source_href": "../papers/jiang-2005/jiang-2005-publisher.pdf#page=8"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{AGE}_{i,t}=\\mathrm{count}_{i,t}\\), the Compustat history counter used in the CIZ pipeline.",
        "formula_direction": "-1",
        "data_fields": "Derived/intermediate variables; raw fields not stated",
        "calculation_window": {
          "zh": "年频；公司在 Compustat 年度样本中的累计记录数。",
          "en": "Annual; cumulative firm record count in the Compustat annual sample."
        },
        "accounting_lag": {
          "zh": "按 chars_ciz 年频 jdate 对齐；未另行添加页面假设。",
          "en": "Aligned by the chars_ciz annual jdate rule; the page adds no extra assumption."
        },
        "source_label": "EquityChars CIZ · accounting.py · L1062",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L1062",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "1062",
        "code_frequency": {
          "zh": "年频。",
          "en": "Annual."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      }
    },
    {
      "id": "agr",
      "name": "Asset growth",
      "signal_definition": "Asset growth",
      "sort_variable": "agr",
      "code_direction": "L-H",
      "paper_direction": "L-H",
      "direction_label": "低值做多 · 高值做空",
      "agreement": "yes",
      "status": "paper_direction_verified",
      "code_long_leg": "Low",
      "code_short_leg": "High",
      "code_notes": "Repo attribution: Cooper, Gulen, and Schill (2008). Formula table direction: -1.",
      "raw_signal": "year-on-year percentage change in total assets",
      "construction_summary": "Asset-growth signal based on annual growth in total assets; low-growth firms earn higher subsequent returns.",
      "sample_and_timing": "U.S. stock cross section in the 2008 Journal of Finance paper; annual asset-growth sorts with subsequent return tests.",
      "breakpoints": "not reported in abstract",
      "weighting": "quintile sorts with an explicit spread column; equal- and value-weighted portfolios",
      "rebalancing_frequency": "annual",
      "holding_period": "subsequent annual returns",
      "paper_long_leg": "low asset growth",
      "paper_short_leg": "high asset growth",
      "confidence": "high",
      "evidence_type": "direct_method_passage",
      "evidence_pointer": "doi:10.1111/j.1540-6261.2008.01370.x; scholar:10.1111/j.1540-6261.2008.01370.x_0043 (Table II)",
      "reviewer_notes": "Table II explicitly reports the low-growth and high-growth deciles plus a spread column, so the directional construction is directly stated.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "Such large differences in raw returns are hard to explain using traditional measures of expected returns: with standard risk adjustments the spread between low and high asset growth firms remains highly significant at 8% per year for VW portfolios and 20% per year for equal-weighted (EW) portfolios.",
          "page": 3,
          "line_start": null,
          "line_end": null,
          "method": "automatic_pdf_search",
          "method_label": "自动定位候选句",
          "text_path": "",
          "href": "../papers/cooper-2008/cooper-gulen-schill-2008-jstor.pdf#page=3",
          "open_label": "查看 PDF 第 3 页"
        },
        {
          "text": "MV is the June(?) market value, BHRET6 is the buy-and-hold return over January(?)-June(?), BHRET36 is the 36-month buy and hold return over July(?-3) to June(?), CI is the measure of abnormal capital investment as defined in Titman, Wei, and Xie (2004), L2ASSETG is the asset growth defined as the percentage change in total assets from the fiscal year ending in calendar year ?-3 to fiscal year ending in calendar year t-2, ASSETG is the asset growth defined as the percentage change in total assets from the fiscal year ending in calendar year t?2 to fiscal year ending in calendar year t?1,5YASSETG is a 5-year weighted average rank of asset growth, and 5YSALESG is a 5-year weighted average rank ",
          "page": 21,
          "line_start": null,
          "line_end": null,
          "method": "automatic_pdf_search",
          "method_label": "自动定位候选句",
          "text_path": "",
          "href": "../papers/cooper-2008/cooper-gulen-schill-2008-jstor.pdf#page=21",
          "open_label": "查看 PDF 第 21 页"
        },
        {
          "text": "1626 The Journal of Finance Panel A: Equal-weighted portfolios 200% 150% - Decile 10 (High growth) Decile 1 (Low growth) - -Spread (1-10) Panel B: Value-weighted portfolios -50% - Decile 10 (High growth) Decile 1 (Low growth) - -Spread (1-10)1 Figure 3.",
          "page": 19,
          "line_start": null,
          "line_end": null,
          "method": "automatic_pdf_search",
          "method_label": "自动定位候选句",
          "text_path": "",
          "href": "../papers/cooper-2008/cooper-gulen-schill-2008-jstor.pdf#page=19",
          "open_label": "查看 PDF 第 19 页"
        }
      ],
      "evidence_mode": "automatic",
      "paper": {
        "id": "cooper-2008",
        "title": "Asset Growth and the Cross-Section of Stock Returns",
        "authors": "Michael J. Cooper; Huseyin Gulen; Michael J. Schill",
        "year": "2008",
        "venue": "The Journal of Finance",
        "doi": "10.1111/j.1540-6261.2008.01370.x",
        "source_url": "https://onlinelibrary.wiley.com/doi/10.1111/j.1540-6261.2008.01370.x",
        "local_file": "papers/cooper-2008/cooper-gulen-schill-2008-jstor.pdf",
        "local_href": "../papers/cooper-2008/cooper-gulen-schill-2008-jstor.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 44,
        "access_status": "full_text_pdf_jstor"
      },
      "method_variants": [
        {
          "id": "cooper-2008",
          "source_id": "cooper-2008",
          "role": "original_paper",
          "source_label": "Asset Growth and the Cross-Section of Stock Returns",
          "source_year": "2008",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{AGR}_{i,t}=\\frac{\\mathrm{AT}_{i,t}-\\mathrm{AT}_{i,t-1}}{\\mathrm{AT}_{i,t-1}}\\)",
          "data_fields": "year-on-year percentage change in total assets",
          "calculation_window": {
            "zh": "U.S. stock cross section in the 2008 Journal of Finance paper; annual asset-growth sorts with subsequent return tests.",
            "en": "U.S. stock cross section in the 2008 Journal of Finance paper; annual asset-growth sorts with subsequent return tests."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "not reported in abstract quintile sorts with an explicit spread column; equal- and value-weighted portfolios annual subsequent annual returns",
            "en": "not reported in abstract quintile sorts with an explicit spread column; equal- and value-weighted portfolios annual subsequent annual returns"
          },
          "direction": "L-H",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/cooper-2008/cooper-gulen-schill-2008-jstor.pdf",
          "source_page": 3,
          "source_href": "../papers/cooper-2008/cooper-gulen-schill-2008-jstor.pdf#page=3"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{AGR}_{i,t}=\\frac{\\Delta\\mathrm{AT}_{i,t}}{\\mathrm{AT}_{i,t-1}}\\)",
        "formula_direction": "-1",
        "data_fields": "Compustat: AT",
        "calculation_window": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "accounting_lag": {
          "zh": "年频与季频结果均在 CIZ 中对齐；最终比较 datadate，取较新的可用值。",
          "en": "CIZ aligns both annual and quarterly results, then selects the newer available value by datadate."
        },
        "source_label": "EquityChars CIZ · accounting.py · L450, L1547",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L450",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "450,1547",
        "code_frequency": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "reconcile_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/impute_rank_output.py#L85",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写。年频与季频同时可用时，最终输出按 datadate 选择较新的非空值。",
          "en": "Formula transcribed from chars_ciz. When annual and quarterly values both exist, final output selects the newer non-null value by datadate."
        }
      }
    },
    {
      "id": "alm",
      "name": "Quarterly Asset Liquidity",
      "signal_definition": "Quarterly Asset Liquidity",
      "sort_variable": "alm",
      "code_direction": "L-H",
      "paper_direction": "not-simple",
      "direction_label": "非简单多空",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "Low",
      "code_short_leg": "High",
      "code_notes": "Repo attribution: Ortiz-Molina and Phillips (2014). Formula table direction: -1.",
      "raw_signal": "real-asset illiquidity measures MNoPotBuy, NLPotBuy, and MTotM&A; also MInM&A and MOutM&A",
      "construction_summary": "The published article measures real-asset illiquidity using the absence or financial slack of potential buyers and minus industry M&A activity, standardizes the measures, and relates them to implied cost of capital. Univariate tables sort firms into asset-illiquidity quintiles; regressions use standardized variables.",
      "sample_and_timing": "Sample period 1984-2006 for the main asset-illiquidity/cost-of-capital tests; measures use three-digit SIC industries and are often averaged over the past five years.",
      "breakpoints": "Annual quintiles by real-asset illiquidity for univariate tests; standardized variables in regressions.",
      "weighting": "Equal-weighted and value-weighted average implied-cost-of-capital portfolios in univariate tests; regression-based main evidence.",
      "rebalancing_frequency": "Annual.",
      "holding_period": "N/A; expected cost-of-capital tests, not realized-return holding-period portfolios.",
      "paper_long_leg": "No explicit traded long leg; the paper reports the high-minus-low asset-illiquidity cost-of-capital premium.",
      "paper_short_leg": "No explicit traded short leg; the paper reports the high-minus-low asset-illiquidity cost-of-capital premium.",
      "confidence": "high",
      "evidence_type": "publisher_final_pdf",
      "evidence_pointer": "extracted-text/ortiz-molina-2014-publisher.txt:86-119,219-226,307,340-388,548-570,642-723",
      "reviewer_notes": "Verified against the formal Journal of Financial and Quantitative Analysis publisher PDF. The repo label “Quarterly Asset Liquidity” is unsupported: the paper studies annual implied cost of capital and does not define a realized-return long-short strategy.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "In univariate tests using both the ICC and the FFCC and the measures of real asset illiquidity, we find a real asset illiquidity premium (i.e., the cost of capital 2 In an international setting, Lee, Ng, and Swaminathan (2009) further show that the ICC provides clear evidence of economic relations that would otherwise be obscured by the noise in realized returns.",
          "page": 2,
          "line_start": 86,
          "line_end": 119,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/ortiz-molina-2014-publisher.txt",
          "href": "../papers/ortiz-molina-2014/ortiz-molina-2014-publisher.pdf#page=2",
          "open_label": "查看 PDF 第 2 页"
        },
        {
          "text": "Our multivariate cross-sectional and time-series tests further support our hypothesis: Firms with more illiquid real assets have higher cost of capital than firms with less illiquid real assets, and firms’ cost of capi- tal is higher during periods of high real asset illiquidity.",
          "page": 3,
          "line_start": 86,
          "line_end": 119,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/ortiz-molina-2014-publisher.txt",
          "href": "../papers/ortiz-molina-2014/ortiz-molina-2014-publisher.pdf#page=3",
          "open_label": "查看 PDF 第 3 页"
        },
        {
          "text": "in cost of capital between the high and low real asset illiquidity firms, that is, a real asset illiquidity premium.",
          "page": 5,
          "line_start": 219,
          "line_end": 226,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/ortiz-molina-2014-publisher.txt",
          "href": "../papers/ortiz-molina-2014/ortiz-molina-2014-publisher.pdf#page=5",
          "open_label": "查看 PDF 第 5 页"
        },
        {
          "text": "observations during 1984–2006.",
          "page": 7,
          "line_start": 307,
          "line_end": 307,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/ortiz-molina-2014-publisher.txt",
          "href": "../papers/ortiz-molina-2014/ortiz-molina-2014-publisher.pdf#page=7",
          "open_label": "查看 PDF 第 7 页"
        },
        {
          "text": "We use three measures of real asset illiquidity based on industry definitions at the 3-digit SIC level.",
          "page": 7,
          "line_start": 340,
          "line_end": 388,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/ortiz-molina-2014-publisher.txt",
          "href": "../papers/ortiz-molina-2014/ortiz-molina-2014-publisher.pdf#page=7",
          "open_label": "查看 PDF 第 7 页"
        },
        {
          "text": "It cap- tures the historical illiquidity of a firm’s assets using minus the value of M&A activity in the firm’s industry scaled by industry assets (Sibilkov (2009) uses a similar measure).",
          "page": 8,
          "line_start": 340,
          "line_end": 388,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/ortiz-molina-2014-publisher.txt",
          "href": "../papers/ortiz-molina-2014/ortiz-molina-2014-publisher.pdf#page=8",
          "open_label": "查看 PDF 第 8 页"
        },
        {
          "text": "The measures of real asset illiquidity use 3-digit SIC industry deﬁnitions: MNoPotBuy is minus the number of rival ﬁrms in the industry that have debt ratings (calculated for the period 1985–2006 because bond ratings become available in 1985); NLPotBuy is the average book leverage net of cash holdings of rival ﬁrms in the industry, averaged over the past 5 years; MTotM&A is minus the value of all M&A activity in the industry scaled by the book value of the assets in the industry, averaged over the past 5 years; MInM&A is minus the value of M&A activity in the industry involving acquirers that operate within the industry scaled by the book value of the assets in the industry, averaged over th",
          "page": 11,
          "line_start": 548,
          "line_end": 570,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/ortiz-molina-2014-publisher.txt",
          "href": "../papers/ortiz-molina-2014/ortiz-molina-2014-publisher.pdf#page=11",
          "open_label": "查看 PDF 第 11 页"
        },
        {
          "text": "Using the original (nonstandardized) real asset illiq- uidity variables, the mean value of MNoPotBuy is −13.4 firms, the mean value of NLPotBuy is 0.068, and the mean value of MTotM&A is −4.2%.",
          "page": 12,
          "line_start": 642,
          "line_end": 723,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/ortiz-molina-2014-publisher.txt",
          "href": "../papers/ortiz-molina-2014/ortiz-molina-2014-publisher.pdf#page=12",
          "open_label": "查看 PDF 第 12 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "ortiz-molina-2014",
        "title": "Real Asset Illiquidity and the Cost of Capital",
        "authors": "Hernán Ortiz-Molina and Gordon M. Phillips",
        "year": "2014",
        "venue": "Journal of Financial and Quantitative Analysis",
        "doi": "10.1017/S0022109014000210",
        "source_url": "https://doi.org/10.1017/S0022109014000210",
        "local_file": "papers/ortiz-molina-2014/ortiz-molina-2014-publisher.pdf",
        "local_href": "../papers/ortiz-molina-2014/ortiz-molina-2014-publisher.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 32,
        "access_status": "full_text_pdf_publisher"
      },
      "method_variants": [
        {
          "id": "ortiz-molina-2014",
          "source_id": "ortiz-molina-2014",
          "role": "original_paper",
          "source_label": "Real Asset Illiquidity and the Cost of Capital",
          "source_year": "2014",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{ALM}_{j,t}\\in\\left\\{\\mathrm{MNoPotBuy}_{j,t},\\mathrm{NLPotBuy}_{j,t},\\mathrm{MTotM\\&A}_{j,t},\\mathrm{MInM\\&A}_{j,t},\\mathrm{MOutM\\&A}_{j,t}\\right\\}\\)",
          "data_fields": "real-asset illiquidity measures MNoPotBuy, NLPotBuy, and MTotM&A; also MInM&A and MOutM&A",
          "calculation_window": {
            "zh": "Sample period 1984-2006 for the main asset-illiquidity/cost-of-capital tests; measures use three-digit SIC industries and are often averaged over the past five years.",
            "en": "Sample period 1984-2006 for the main asset-illiquidity/cost-of-capital tests; measures use three-digit SIC industries and are often averaged over the past five years."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Annual quintiles by real-asset illiquidity for univariate tests; standardized variables in regressions. Equal-weighted and value-weighted average implied-cost-of-capital portfolios in univariate tests; regression-based main evidence. Annual. N/A; expected cost-of-capital tests, not realized-return holding-period portfolios.",
            "en": "Annual quintiles by real-asset illiquidity for univariate tests; standardized variables in regressions. Equal-weighted and value-weighted average implied-cost-of-capital portfolios in univariate tests; regression-based main evidence. Annual. N/A; expected cost-of-capital tests, not realized-return holding-period portfolios."
          },
          "direction": "not-simple",
          "formula_match": "closest_paper_measure",
          "notes": {
            "zh": "论文只给出最接近口径，与项目指标不完全相同。",
            "en": "The paper provides the closest available measure; it is not identical to the project signal."
          },
          "source_path": "papers/ortiz-molina-2014/ortiz-molina-2014-publisher.pdf",
          "source_page": 2,
          "source_href": "../papers/ortiz-molina-2014/ortiz-molina-2014-publisher.pdf#page=2"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\begin{aligned} \\mathrm{ALM}_{i,t}&=\\frac{\\mathrm{ALA}_{i,t}} {\\mathrm{AT}_{i,t}+\\mathrm{PRCC\\_F}_{i,t}\\mathrm{CSHO}_{i,t}-\\mathrm{CEQ}_{i,t}},\\\\ \\mathrm{ALA}_{i,t}&=\\mathrm{CHE}_{i,t} +0.75(\\mathrm{ACT}_{i,t}-\\mathrm{CHE}_{i,t})\\\\ &\\quad-0.5(\\mathrm{AT}_{i,t}-\\mathrm{ACT}_{i,t}-\\mathrm{GDWL}_{i,t}-\\mathrm{INTAN}_{i,t}). \\end{aligned}\\)",
        "formula_direction": "-1",
        "data_fields": "Compustat: ACT, AT, CEQ, CHE, CSHO, GDWL, INTAN, PRCC_F",
        "calculation_window": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "accounting_lag": {
          "zh": "年频与季频结果均在 CIZ 中对齐；最终比较 datadate，取较新的可用值。",
          "en": "CIZ aligns both annual and quarterly results, then selects the newer available value by datadate."
        },
        "source_label": "EquityChars CIZ · accounting.py · L1019, L2445",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L1019",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "1019,2445",
        "code_frequency": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "reconcile_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/impute_rank_output.py#L85",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写。年频与季频同时可用时，最终输出按 datadate 选择较新的非空值。",
          "en": "Formula transcribed from chars_ciz. When annual and quarterly values both exist, final output selects the newer non-null value by datadate."
        }
      },
      "method_design": {
        "family": "implied_cost_of_capital",
        "summary": {
          "zh": "将潜在收购方的缺失或财务余裕以及行业并购活跃度构造成实体资产非流动性度量，标准化后用于隐含资本成本回归，并辅以年度五分位比较。",
          "en": "The published article measures real-asset illiquidity using the absence or financial slack of potential buyers and minus industry M&A activity, standardizes the measures, and relates them to implied cost of capital. Univariate tables sort firms into asset-illiquidity quintiles; regressions use standardized variables."
        },
        "signal_role": {
          "zh": "标准化解释变量",
          "en": "Standardized explanatory variable"
        },
        "estimand": {
          "zh": "隐含资本成本的横截面差异",
          "en": "Cross-sectional variation in implied cost of capital"
        },
        "interpretation": {
          "zh": "被解释变量是预期资本成本而非实现股票收益，因而不能解释为可交易的H−L或L−H组合。",
          "en": ""
        }
      }
    },
    {
      "id": "ato",
      "name": "Asset Turnover",
      "signal_definition": "Asset Turnover",
      "sort_variable": "ato",
      "code_direction": "H-L",
      "paper_direction": "not-simple",
      "direction_label": "非简单多空",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Soliman (2008). Formula table direction: +1.",
      "raw_signal": "ATO = sales divided by average net operating assets",
      "construction_summary": "The published article uses the level of asset turnover as a DuPont component and control in predictive return regressions. It finds that the change in ATO, rather than the level, carries the return-predictive result; no standalone level-ATO long/short portfolio is defined.",
      "sample_and_timing": "38,716 firm-years from 1984-2002; financial firms and observations lacking I/B/E/S, Compustat, or CRSP data are excluded.",
      "breakpoints": "Annual decile ranks in the future-return regressions.",
      "weighting": "N/A; Fama-MacBeth regression evidence rather than a standalone level-ATO portfolio.",
      "rebalancing_frequency": "annual",
      "holding_period": "One-year future market-adjusted return beginning four months after fiscal year-end.",
      "paper_long_leg": "N/A",
      "paper_short_leg": "N/A",
      "confidence": "high",
      "evidence_type": "publisher_final_jstor_pdf",
      "evidence_pointer": "extracted-text/soliman-2008-publisher.txt:391-399,669-729,837-905,1577-1713",
      "reviewer_notes": "Verified against the final Accounting Review/JSTOR PDF. Do not transfer the positive high-minus-low result for ΔATO to the level-ATO repository characteristic.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "ATO captures the firm's efficiency in using operating assets to generate sales and is often interpreted as a measure of asset utilization by managers.",
          "page": 7,
          "line_start": 391,
          "line_end": 399,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/soliman-2008-publisher.txt",
          "href": "../papers/soliman-2008/soliman-2008-publisher.pdf#page=7",
          "open_label": "查看 PDF 第 7 页"
        },
        {
          "text": "To implement this trading strategy, I explore whether investors understand the future implications of ARNOA as a function of the DuPont components using the following regression: R,+, = Po + pIARNOAt + p2APMt + p3AATOt + p4RSST Controls + p5RNOA, + p6PM, + pATO, + psFama-French Risk Factors + Et+l (6) where: R,,, = future stock returns are measured using compounded buy-hold market-adjusted returns (raw return minus the corresponding value-weighted return), inclusive of dividends and other distributions beginning four months after the end of the fiscal year t and continuing for one year.23 22 Because short-window return tests capture the updating of priors and represent new information, I onl",
          "page": 11,
          "line_start": 669,
          "line_end": 729,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/soliman-2008-publisher.txt",
          "href": "../papers/soliman-2008/soliman-2008-publisher.pdf#page=11",
          "open_label": "查看 PDF 第 11 页"
        },
        {
          "text": "In these tests, I use rank regressions where the co independent variable amount is replaced with its annual decile rank servative statistical tests; the variables are scale-free and the only a regression's functional form is that the relations are monotonic (Ima To create decile ranks, all the continuous variables are sorted annually groups numbered 0 to 9 each year and then divided by 9.",
          "page": 12,
          "line_start": 669,
          "line_end": 729,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/soliman-2008-publisher.txt",
          "href": "../papers/soliman-2008/soliman-2008-publisher.pdf#page=12",
          "open_label": "查看 PDF 第 12 页"
        },
        {
          "text": "Financial statement data are obtained from the Compustat annual database, and stock return data are obtained The Accounting Review, May 2008 This content downloaded from 144.214.9.191 on Sun, 26 Jul 2026 03:27:57 UTC All use subject to https://about.jstor.org/terms",
          "page": 13,
          "line_start": 837,
          "line_end": 905,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/soliman-2008-publisher.txt",
          "href": "../papers/soliman-2008/soliman-2008-publisher.pdf#page=13",
          "open_label": "查看 PDF 第 13 页"
        },
        {
          "text": "Thus, all t on the same sample.26 Variable Measurement DuPont Decomposition RNOA is operating income before interest (Compustat item #178) divided by averag net operating assets (NOA), where NOA is Operating Assets, - Operating Liabilitiest.",
          "page": 14,
          "line_start": 837,
          "line_end": 905,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/soliman-2008-publisher.txt",
          "href": "../papers/soliman-2008/soliman-2008-publisher.pdf#page=14",
          "open_label": "查看 PDF 第 14 页"
        },
        {
          "text": "The abnormal future return on such a simple signal is surprising, but is consistent with the future forecast error tests presented below.",
          "page": 24,
          "line_start": 1577,
          "line_end": 1713,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/soliman-2008-publisher.txt",
          "href": "../papers/soliman-2008/soliman-2008-publisher.pdf#page=24",
          "open_label": "查看 PDF 第 24 页"
        },
        {
          "text": "846 TABLE 7 Time-Series Means and t-Statistics for Coefficients from Annual Cross-Sectional Regres s of Future Abnormal Returns on the Ranks of DuPont Components R,+I = Po + plARNOAt + p2APMt + p3AATOt + p4RSST Controls + p5RNOAt + p6PM + p7ATOt + p8Fama French Risk Factors + et+ Independent Variables Model 1 Model 2 Model 3 -0.061 Intercept -2.15 -0.49 -2.83 0.001 ARNOA, 0.006 0.33 0.078 AATO, -0.513 -0.557 AWC, -0.162 -0.193 NCO -3.96 -5.26 -0.041 -0.108 -1.14 -2.29 0.070 1.41 0.110 1.04 0.000 ATO, FF Risk Adjusted The sample consists of 38,716 firm-year ob annual regressions using the Fama-MacBeth StdDevp follows: i where regressions R,t1(Future Abnormal Returns) = compoun distributions l",
          "page": 25,
          "line_start": 1577,
          "line_end": 1713,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/soliman-2008-publisher.txt",
          "href": "../papers/soliman-2008/soliman-2008-publisher.pdf#page=25",
          "open_label": "查看 PDF 第 25 页"
        },
        {
          "text": "ANCO, = change in net noncurrent operating assets is defined as NCOt - N NCO is calculated as Non-Current Operating Assets (NCOA) - Non- Operating Liabilities (NCOL), and NCOA = Total Assets (Compust #6) - Current Assets (Compustat Item #4) - Investments and Adv (Compustat Item #32), and NCOL = Total Liabilities (Compustat It - Current Liabilities (Compustat Item #5) - Long-Term Debt (Com Item #9).",
          "page": 26,
          "line_start": 1577,
          "line_end": 1713,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/soliman-2008-publisher.txt",
          "href": "../papers/soliman-2008/soliman-2008-publisher.pdf#page=26",
          "open_label": "查看 PDF 第 26 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "soliman-2008",
        "title": "The Use of DuPont Analysis by Market Participants",
        "authors": "Mark T. Soliman",
        "year": "2008",
        "venue": "The Accounting Review",
        "doi": "10.2308/accr.2008.83.3.823",
        "source_url": "https://onlinelibrary.wiley.com/doi/abs/10.2308/accr.2008.83.3.823",
        "local_file": "papers/soliman-2008/soliman-2008-publisher.pdf",
        "local_href": "../papers/soliman-2008/soliman-2008-publisher.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 32,
        "access_status": "full_text_pdf_publisher"
      },
      "method_variants": [
        {
          "id": "soliman-2008",
          "source_id": "soliman-2008",
          "role": "original_paper",
          "source_label": "The Use of DuPont Analysis by Market Participants",
          "source_year": "2008",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{ATO}_{i,t}=\\frac{\\mathrm{SALE}_{i,t}}{(\\mathrm{NOA}_{i,t}+\\mathrm{NOA}_{i,t-1})/2}\\)",
          "data_fields": "ATO = sales divided by average net operating assets",
          "calculation_window": {
            "zh": "38,716 firm-years from 1984-2002; financial firms and observations lacking I/B/E/S, Compustat, or CRSP data are excluded.",
            "en": "38,716 firm-years from 1984-2002; financial firms and observations lacking I/B/E/S, Compustat, or CRSP data are excluded."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Annual decile ranks in the future-return regressions. N/A; Fama-MacBeth regression evidence rather than a standalone level-ATO portfolio. annual One-year future market-adjusted return beginning four months after fiscal year-end.",
            "en": "Annual decile ranks in the future-return regressions. N/A; Fama-MacBeth regression evidence rather than a standalone level-ATO portfolio. annual One-year future market-adjusted return beginning four months after fiscal year-end."
          },
          "direction": "not-simple",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/soliman-2008/soliman-2008-publisher.pdf",
          "source_page": 7,
          "source_href": "../papers/soliman-2008/soliman-2008-publisher.pdf#page=7"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{ATO}^{A}_{i,t}=\\frac{\\mathrm{SALE}_{i,t}}{\\mathrm{NOA}^{raw}_{i,t-1}},\\quad \\mathrm{ATO}^{Q}_{i,t}=\\frac{\\mathrm{SALEQ}_{i,t}}{\\mathrm{NOA}^{raw}_{i,t-4}}\\)",
        "formula_direction": "+1",
        "data_fields": "Compustat: SALE, SALEQ",
        "calculation_window": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "accounting_lag": {
          "zh": "年频与季频结果均在 CIZ 中对齐；最终比较 datadate，取较新的可用值。",
          "en": "CIZ aligns both annual and quarterly results, then selects the newer available value by datadate."
        },
        "source_label": "EquityChars CIZ · accounting.py · L608, L1769",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L608",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "608,1769",
        "code_frequency": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "reconcile_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/impute_rank_output.py#L85",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写。年频与季频同时可用时，最终输出按 datadate 选择较新的非空值。",
          "en": "Formula transcribed from chars_ciz. When annual and quarterly values both exist, final output selects the newer non-null value by datadate."
        }
      },
      "method_design": {
        "family": "cross_sectional_return_regression",
        "summary": {
          "zh": "将资产周转率水平作为DuPont分解项和控制变量，以年度十分位秩进入未来一年市场调整收益回归；主要预测结果来自资产周转率的变动而非其水平。",
          "en": "The published article uses the level of asset turnover as a DuPont component and control in predictive return regressions. It finds that the change in ATO, rather than the level, carries the return-predictive result; no standalone level-ATO long/short portfolio is defined."
        },
        "signal_role": {
          "zh": "解释变量与控制变量",
          "en": "Explanatory and control variable"
        },
        "estimand": {
          "zh": "未来一年市场调整收益",
          "en": "One-year-ahead market-adjusted return"
        },
        "interpretation": {
          "zh": "识别对象是条件回归系数而非两端组合收益；系数符号不直接定义可交易的H−L或L−H组合。",
          "en": ""
        }
      }
    },
    {
      "id": "baspread",
      "name": "Bid-ask spread rolling 3m",
      "signal_definition": "Bid-ask spread rolling 3m",
      "sort_variable": "baspread",
      "code_direction": "H-L",
      "paper_direction": "N/A",
      "direction_label": "不适用",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Amihud and Mendelson (1989). Formula table direction: +1.",
      "raw_signal": "bid-ask percentage spread",
      "construction_summary": "Form 49 equal portfolios in a 7-by-7 sort on bid-ask spread and beta; spread is estimated from the year just preceding the test year and portfolio excess returns are then measured.",
      "sample_and_timing": "Beta is estimated over the prior 60 months; bid-ask spread is measured from the data in the year just preceding year n; the portfolio returns are reported for 1961-1980.",
      "breakpoints": "7 spread groups x 7 beta groups; the cited passage does not report numeric cutpoints.",
      "weighting": "Equal portfolios / equal-weighted portfolio excess returns.",
      "rebalancing_frequency": "Annual.",
      "holding_period": "One year.",
      "paper_long_leg": "Higher-spread portfolio / no explicit long leg stated in the passage.",
      "paper_short_leg": "Lower-spread portfolio / no explicit short leg stated in the passage.",
      "confidence": "high",
      "evidence_type": "direct_method_passage",
      "evidence_pointer": "doi:10.1111/j.1540-6261.1989.tb05067.x; scholar:10.1111/j.1540-6261.1989.tb05067.x_0003 (Section I); scholar:10.1111/j.1540-6261.1989.tb05067.x_0004 (Table I)",
      "reviewer_notes": "Direct construction text supports the 7x7 sort, prior-window beta estimation, and annual spread measurement; the paper does not state an explicit long-short hedge in the cited passage.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "The coefficient Y2 measures the effect of residual risk on portfolio returns; the null (CAPM) Table I Correlation Coefficients between the Variables Studied For each portfolio p and in each year n, we have the portfolio excess return R,pn (the- average monthly return on the stocks in portfolio p in excess of the monthly T-bill rate), the systematic risk op, the residual risk afpn, the average size SZpn (the average market value of the common stock of the firms in portfolio p), and the average bid- ask percentage spread, Spn 6,n and apn are estimated from the market model, where the equally weighted portfolio excess returns are regressed on the market equally weighted excess return over the s",
          "page": 5,
          "line_start": null,
          "line_end": null,
          "method": "automatic_pdf_search",
          "method_label": "自动定位候选句",
          "text_path": "",
          "href": "../papers/amihud-1989/amihud-mendelson-1989-jstor.pdf#page=5",
          "open_label": "查看 PDF 第 5 页"
        },
        {
          "text": "484 The Journal of Finance Table II Results for the Regression of Average Monthly Portfolio Excess Return in Year n, Rpns on the Portfolio Systematic Risk, fpns the Portfolio Residual Risk, p,,n, the Average Market Value of the Common Stock of the Firms in Portfolio p, SZp,,, and the Average Percentage Bid-Ask Spread, Sp,: Rpn ` 'Yo + 'YilApn + 'Y2O!pn + 1(3SZpn +y4Spn +>191 dnDYn + e,p (2) D Y, are dummy variables which control for differences in the mean returns between years.",
          "page": 7,
          "line_start": null,
          "line_end": null,
          "method": "automatic_pdf_search",
          "method_label": "自动定位候选句",
          "text_path": "",
          "href": "../papers/amihud-1989/amihud-mendelson-1989-jstor.pdf#page=7",
          "open_label": "查看 PDF 第 7 页"
        },
        {
          "text": "The percentage bid-ask spread (= dollar spread divided by the stock price) was calculated from data in Fitch's Stock Quotations on the NYSE, giving one spread observation per stock for each of the years 1960-1979.5 The test procedure consists of forming stock portfolios, calculating for each its / coefficient, residual standard deviation, size, and bid-ask spread, and then testing the cross-sectional relation between the average returns and these port- folio characteristics over the period 1961-1980.",
          "page": 4,
          "line_start": null,
          "line_end": null,
          "method": "automatic_pdf_search",
          "method_label": "自动定位候选句",
          "text_path": "",
          "href": "../papers/amihud-1989/amihud-mendelson-1989-jstor.pdf#page=4",
          "open_label": "查看 PDF 第 4 页"
        }
      ],
      "evidence_mode": "automatic",
      "paper": {
        "id": "amihud-1989",
        "title": "The Effects of Beta, Bid-Ask Spread, Residual Risk, and Size on Stock Returns",
        "authors": "Yakov Amihud; Haim Mendelson",
        "year": "1989",
        "venue": "The Journal of Finance",
        "doi": "10.1111/j.1540-6261.1989.tb05067.x",
        "source_url": "https://doi.org/10.1111/j.1540-6261.1989.tb05067.x",
        "local_file": "papers/amihud-1989/amihud-mendelson-1989-jstor.pdf",
        "local_href": "../papers/amihud-1989/amihud-mendelson-1989-jstor.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 9,
        "access_status": "full_text_pdf_jstor"
      },
      "method_variants": [
        {
          "id": "amihud-1989",
          "source_id": "amihud-1989",
          "role": "original_paper",
          "source_label": "The Effects of Beta, Bid-Ask Spread, Residual Risk, and Size on Stock Returns",
          "source_year": "1989",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{Spread}_{i,t}=\\frac{\\mathrm{ASK}_{i,t}-\\mathrm{BID}_{i,t}}{(\\mathrm{ASK}_{i,t}+\\mathrm{BID}_{i,t})/2}\\)",
          "data_fields": "bid-ask percentage spread",
          "calculation_window": {
            "zh": "Beta is estimated over the prior 60 months; bid-ask spread is measured from the data in the year just preceding year n; the portfolio returns are reported for 1961-1980.",
            "en": "Beta is estimated over the prior 60 months; bid-ask spread is measured from the data in the year just preceding year n; the portfolio returns are reported for 1961-1980."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "7 spread groups x 7 beta groups; the cited passage does not report numeric cutpoints. Equal portfolios / equal-weighted portfolio excess returns. Annual. One year.",
            "en": "7 spread groups x 7 beta groups; the cited passage does not report numeric cutpoints. Equal portfolios / equal-weighted portfolio excess returns. Annual. One year."
          },
          "direction": "N/A",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/amihud-1989/amihud-mendelson-1989-jstor.pdf",
          "source_page": 5,
          "source_href": "../papers/amihud-1989/amihud-mendelson-1989-jstor.pdf#page=5"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{BASPREAD}_{i,t}=\\operatorname{Mean}_{d\\in W_t}\\left[\\frac{\\mathrm{DLYHIGH}_{i,d}-\\mathrm{DLYLOW}_{i,d}}{(\\mathrm{DLYHIGH}_{i,d}+\\mathrm{DLYLOW}_{i,d})/2}\\right]\\)",
        "formula_direction": "+1",
        "data_fields": "CRSP: DLYHIGH, DLYLOW",
        "calculation_window": {
          "zh": "日频输入；滚动 3 个月，至少 21 个观测。",
          "en": "Daily inputs; rolling three months with at least 21 observations."
        },
        "accounting_lag": {
          "zh": "信号在 t 月形成；最终输出将收益移至 t+1 月。",
          "en": "The signal is formed at month t; final output shifts the return to month t+1."
        },
        "source_label": "EquityChars CIZ · rolling_chars.py · L159",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/rolling_chars.py#L159",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/rolling_chars.py",
        "code_lines": "159",
        "code_frequency": {
          "zh": "日频输入；滚动 3 个月，至少 21 个观测。",
          "en": "Daily inputs; rolling three months with at least 21 observations."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      }
    },
    {
      "id": "beta",
      "name": "Beta rolling 3m",
      "signal_definition": "Beta rolling 3m",
      "sort_variable": "beta",
      "code_direction": "H-L",
      "paper_direction": "not-simple",
      "direction_label": "非简单多空",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Fama and MacBeth (1973). Formula table direction: +1.",
      "raw_signal": "estimated market beta, cov(Ri,Rm) / var(Rm), using Fisher's equally weighted NYSE return index",
      "construction_summary": "The published article forms 20 portfolios from ranked individual-security beta estimates to reduce errors in variables, re-estimates portfolio betas in a subsequent window, and runs monthly cross-sectional risk-return regressions in later test periods. It does not define a high-minus-low beta trading spread.",
      "sample_and_timing": "Nine predictive formation/estimation/test sequences spanning 1926-June 1968; typically seven formation years, five initial estimation years, and four test years.",
      "breakpoints": "Twenty beta-ranked portfolios with approximately equal security counts; first is lowest beta and last is highest beta.",
      "weighting": "Equal-weighted individual-security returns within each portfolio each month.",
      "rebalancing_frequency": "Portfolios are reformed at four-year test-period intervals; component betas update annually and portfolio betas update monthly for delistings.",
      "holding_period": "Monthly returns during each subsequent test window.",
      "paper_long_leg": "N/A",
      "paper_short_leg": "N/A",
      "confidence": "high",
      "evidence_type": "publisher_final_jstor_pdf",
      "evidence_pointer": "extracted-text/fama-1973-publisher.txt:465-575,593-635,650-735",
      "reviewer_notes": "Verified against the final Journal of Political Economy/JSTOR PDF. The original 1973 source establishes predictive beta-ranked portfolio regressions but no explicit long-high or long-low hedge, so a repository LMS direction cannot be attributed to the paper.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "In this paper A cov (Ri, Rm ) where cov(Ri, R,,,) and a'(Rm) are estimates of cov(Ri, R,,) and 62(Rm) obtained from monthly returns, and where the proxy chosen for Rmt is \"Fisher's Arithmetic Index,\" an equally weighted average of the returns on all stocks listed on the New York Stock Exchange in month t.",
          "page": 9,
          "line_start": 465,
          "line_end": 575,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/fama-1973-publisher.txt",
          "href": "../papers/fama-1973/fama-1973-publisher.pdf#page=9",
          "open_label": "查看 PDF 第 9 页"
        },
        {
          "text": "The subscript t is added to indicate that each month t of the following four years (1935-38) these 1pt are recomputed as simple averages of individual security Pi, thus ad- justing the portfolio jpt month by month to allow for delisting of securi- ties.",
          "page": 10,
          "line_start": 465,
          "line_end": 575,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/fama-1973-publisher.txt",
          "href": "../papers/fama-1973/fama-1973-publisher.pdf#page=10",
          "open_label": "查看 PDF 第 10 页"
        },
        {
          "text": "The month-by-month returns on the 20 portfolios, with equal weighting of individual securities each month, are also computed for the 4-year period 1935-38.",
          "page": 11,
          "line_start": 465,
          "line_end": 575,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/fama-1973-publisher.txt",
          "href": "../papers/fama-1973/fama-1973-publisher.pdf#page=11",
          "open_label": "查看 PDF 第 11 页"
        },
        {
          "text": "This content downloaded from 144.214.9.191 on Sun, 26 Jul 2026 03:18:37 UTC All use subject to https://about.jstor.org/terms",
          "page": 11,
          "line_start": 593,
          "line_end": 635,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/fama-1973-publisher.txt",
          "href": "../papers/fama-1973/fama-1973-publisher.pdf#page=11",
          "open_label": "查看 PDF 第 11 页"
        },
        {
          "text": "His results also led us to require that to be included in a portfolio a security available in the first month of a testing period must also have data for all 5 years of the preceding estimation period and for at least 4 years of the portfolio formation period.",
          "page": 12,
          "line_start": 593,
          "line_end": 635,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/fama-1973-publisher.txt",
          "href": "../papers/fama-1973/fama-1973-publisher.pdf#page=12",
          "open_label": "查看 PDF 第 12 页"
        },
        {
          "text": "This content downloaded from 144.214.9.191 on Sun, 26 Jul 2026 03:18:37 UTC All use subject to https://about.jstor.org/terms",
          "page": 12,
          "line_start": 650,
          "line_end": 735,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/fama-1973-publisher.txt",
          "href": "../papers/fama-1973/fama-1973-publisher.pdf#page=12",
          "open_label": "查看 PDF 第 12 页"
        },
        {
          "text": "Nevertheless, it is interesting to note that if the disturbances 3jt in (8) were independent from security to security, the relative increase in the precision of the AP obtained by using portfolios rather than individual securities would be about the same for all portfolios.",
          "page": 13,
          "line_start": 650,
          "line_end": 735,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/fama-1973-publisher.txt",
          "href": "../papers/fama-1973/fama-1973-publisher.pdf#page=13",
          "open_label": "查看 PDF 第 13 页"
        },
        {
          "text": "RISK, RETURN, AND EQUILIBRIUM 6I9 TABLE 1 (Continued) 6789 PERIODS Portfolio formation period ...",
          "page": 14,
          "line_start": 650,
          "line_end": 735,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/fama-1973-publisher.txt",
          "href": "../papers/fama-1973/fama-1973-publisher.pdf#page=14",
          "open_label": "查看 PDF 第 14 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "fama-1973",
        "title": "Risk, Return, and Equilibrium: Empirical Tests",
        "authors": "Eugene F. Fama; James D. MacBeth",
        "year": "1973",
        "venue": "Journal of Political Economy, 81(3), 607-636",
        "doi": "10.1086/260061",
        "source_url": "https://www.journals.uchicago.edu/doi/10.1086/260061",
        "local_file": "papers/fama-1973/fama-1973-publisher.pdf",
        "local_href": "../papers/fama-1973/fama-1973-publisher.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 31,
        "access_status": "full_text_pdf_publisher"
      },
      "method_variants": [
        {
          "id": "fama-1973",
          "source_id": "fama-1973",
          "role": "original_paper",
          "source_label": "Risk, Return, and Equilibrium: Empirical Tests",
          "source_year": "1973",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\beta_i=\\frac{\\operatorname{Cov}(R_i,R_m)}{\\operatorname{Var}(R_m)}\\)",
          "data_fields": "estimated market beta, cov(Ri,Rm) / var(Rm), using Fisher's equally weighted NYSE return index",
          "calculation_window": {
            "zh": "Nine predictive formation/estimation/test sequences spanning 1926-June 1968; typically seven formation years, five initial estimation years, and four test years.",
            "en": "Nine predictive formation/estimation/test sequences spanning 1926-June 1968; typically seven formation years, five initial estimation years, and four test years."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Twenty beta-ranked portfolios with approximately equal security counts; first is lowest beta and last is highest beta. Equal-weighted individual-security returns within each portfolio each month. Portfolios are reformed at four-year test-period intervals; component betas update annually and portfolio betas update monthly for delistings. Monthly returns during each subsequent test window.",
            "en": "Twenty beta-ranked portfolios with approximately equal security counts; first is lowest beta and last is highest beta. Equal-weighted individual-security returns within each portfolio each month. Portfolios are reformed at four-year test-period intervals; component betas update annually and portfolio betas update monthly for delistings. Monthly returns during each subsequent test window."
          },
          "direction": "not-simple",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/fama-1973/fama-1973-publisher.pdf",
          "source_page": 9,
          "source_href": "../papers/fama-1973/fama-1973-publisher.pdf#page=9"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{BETA}_{i,t}= \\frac{\\sum_{s\\in W_{i,t}}(\\mathrm{MKTRF}_s-\\overline{\\mathrm{MKTRF}}) (\\mathrm{EXRET}_{i,s}-\\overline{\\mathrm{EXRET}}_i)} {\\sum_{s\\in W_{i,t}}(\\mathrm{MKTRF}_s-\\overline{\\mathrm{MKTRF}})^2}\\)",
        "formula_direction": "+1",
        "data_fields": "Factor data: EXRET, MKTRF",
        "calculation_window": {
          "zh": "日频输入；滚动 3 个月，至少 21 个观测。",
          "en": "Daily inputs; rolling three months with at least 21 observations."
        },
        "accounting_lag": {
          "zh": "信号在 t 月形成；最终输出将收益移至 t+1 月。",
          "en": "The signal is formed at month t; final output shifts the return to month t+1."
        },
        "source_label": "EquityChars CIZ · rolling_chars.py · L108",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/rolling_chars.py#L108",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/rolling_chars.py",
        "code_lines": "108",
        "code_frequency": {
          "zh": "日频输入；滚动 3 个月，至少 21 个观测。",
          "en": "Daily inputs; rolling three months with at least 21 observations."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      },
      "method_design": {
        "family": "beta_pricing_test",
        "summary": {
          "zh": "先按个股β估计值形成20个组合以缓解变量测量误差，再在独立窗口重新估计组合β，并在后续检验期实施逐月横截面风险—收益回归。",
          "en": "The published article forms 20 portfolios from ranked individual-security beta estimates to reduce errors in variables, re-estimates portfolio betas in a subsequent window, and runs monthly cross-sectional risk-return regressions in later test periods. It does not define a high-minus-low beta trading spread."
        },
        "signal_role": {
          "zh": "系统性风险暴露",
          "en": "Systematic risk exposure"
        },
        "estimand": {
          "zh": "β的风险价格与横截面期望收益斜率",
          "en": "Price of beta risk and the cross-sectional expected-return slope"
        },
        "interpretation": {
          "zh": "论文检验的是β的定价斜率，而不是高β组合减低β组合的实现收益。",
          "en": ""
        }
      }
    },
    {
      "id": "bm",
      "name": "Book-to-market equity",
      "signal_definition": "Book-to-market equity",
      "sort_variable": "bm",
      "code_direction": "H-L",
      "paper_direction": "not-simple",
      "direction_label": "非简单多空",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Rosenberg, Reid, and Lanstein (1985). Formula table direction: +1.",
      "raw_signal": "book-to-price ratio",
      "construction_summary": "The final article's book/price strategy gives positive exposure to high book/price stocks and negative exposure to low book/price stocks, but it is an optimized pure hedge rather than a simple quantile spread. Weights sum to zero overall and within each of 55 industries, are orthogonal to eleven risk indexes and the return-reversal strategy, and are variance-minimizing.",
      "sample_and_timing": "HICAP universe of approximately 1,400 large Compustat companies; monthly data from January 1973-March 1980 for the retrospective B/P test and April 1980-September 1984 for the prospective evaluation.",
      "breakpoints": "No quantile breakpoint; the weighted book/price exposure is fixed at one cross-sectional standard deviation above the capitalization-weighted market mean.",
      "weighting": "Optimized positive and negative zero-investment weights, industry-neutral and orthogonal to eleven risk indexes and the companion strategy.",
      "rebalancing_frequency": "Monthly weights; less than 5% monthly turnover.",
      "holding_period": "Monthly returns; high-book/price holdings tend to remain in the strategy for more than one year.",
      "paper_long_leg": "High book/price exposure through positive optimized weights.",
      "paper_short_leg": "Low book/price exposure through negative optimized weights.",
      "confidence": "high",
      "evidence_type": "publisher_final_pdf_visual_and_text",
      "evidence_pointer": "extracted-text/rosenberg-1985-publisher.txt:3-63,128-179,278-295,328-347; visual first page",
      "reviewer_notes": "Verified against the formal eight-page Journal of Portfolio Management PDF. The economic sign is high-minus-low, but the published return is an orthogonalized minimum-variance hedge, so it is not classified as a simple H-L portfolio.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "For the book/price strategy, the weighted sum of book/price ratios diflers from the market average by one cross-sectional standard deviation of that ratio.",
          "page": 2,
          "line_start": 3,
          "line_end": 63,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/rosenberg-1985-publisher.txt",
          "href": "../papers/rosenberg-1985/rosenberg-1985-publisher.pdf#page=2",
          "open_label": "查看 PDF 第 2 页"
        },
        {
          "text": "We also carefully screened the data base to remove as many errors as 12 possible, so that the investment returns would be % valid. -B5 0 We based this analysis primarily upon the Standard & Poor’s Compustat data base and the IBES The systematic risk coefficient, p, was indistingulsh- able from zero, so it is not reported in the table.",
          "page": 4,
          "line_start": 128,
          "line_end": 179,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/rosenberg-1985-publisher.txt",
          "href": "../papers/rosenberg-1985/rosenberg-1985-publisher.pdf#page=4",
          "open_label": "查看 PDF 第 4 页"
        },
        {
          "text": "The mean monthly return is smaller, but the time-series variability of the performance.",
          "page": 5,
          "line_start": 278,
          "line_end": 295,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/rosenberg-1985-publisher.txt",
          "href": "../papers/rosenberg-1985/rosenberg-1985-publisher.pdf#page=5",
          "open_label": "查看 PDF 第 5 页"
        },
        {
          "text": "Since time-series standard deviation of the B/P strategy re- the SRR strategy reported in Table 4 involves holding one portfolio long and another portfolio short, and since approximately 50% of the stocks in each port- folio are switched each month, there is a trading cost",
          "page": 6,
          "line_start": 278,
          "line_end": 295,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/rosenberg-1985-publisher.txt",
          "href": "../papers/rosenberg-1985/rosenberg-1985-publisher.pdf#page=6",
          "open_label": "查看 PDF 第 6 页"
        },
        {
          "text": "POSSIBLE BIAS In the present case, we have made each strat- egy orthogonal to the other strategy, to 55 industry groupings, and to 11 other “risk indexes,” which are continuous variables characterizing the stocks.",
          "page": 6,
          "line_start": 328,
          "line_end": 347,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/rosenberg-1985-publisher.txt",
          "href": "../papers/rosenberg-1985/rosenberg-1985-publisher.pdf#page=6",
          "open_label": "查看 PDF 第 6 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "rosenberg-1985",
        "title": "Persuasive evidence of market inefficiency",
        "authors": "Barr Rosenberg, Kenneth Reid, and Ronald Lanstein",
        "year": "1985",
        "venue": "Journal of Portfolio Management",
        "doi": "10.3905/jpm.1985.409007",
        "source_url": "https://doi.org/10.3905/jpm.1985.409007",
        "local_file": "papers/rosenberg-1985/rosenberg-1985-publisher.pdf",
        "local_href": "../papers/rosenberg-1985/rosenberg-1985-publisher.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 8,
        "access_status": "full_text_pdf_publisher"
      },
      "method_variants": [
        {
          "id": "rosenberg-1985",
          "source_id": "rosenberg-1985",
          "role": "original_paper",
          "source_label": "Persuasive evidence of market inefficiency",
          "source_year": "1985",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{BM}_{i,t}=\\frac{\\mathrm{BookEquity}_{i,t}}{\\mathrm{MarketEquity}_{i,t}}\\)",
          "data_fields": "book-to-price ratio",
          "calculation_window": {
            "zh": "HICAP universe of approximately 1,400 large Compustat companies; monthly data from January 1973-March 1980 for the retrospective B/P test and April 1980-September 1984 for the prospective evaluation.",
            "en": "HICAP universe of approximately 1,400 large Compustat companies; monthly data from January 1973-March 1980 for the retrospective B/P test and April 1980-September 1984 for the prospective evaluation."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "No quantile breakpoint; the weighted book/price exposure is fixed at one cross-sectional standard deviation above the capitalization-weighted market mean. Optimized positive and negative zero-investment weights, industry-neutral and orthogonal to eleven risk indexes and the companion strategy. Monthly weights; less than 5% monthly turnover. Monthly returns; high-book/price holdings tend to remain in the strategy for more than one year.",
            "en": "No quantile breakpoint; the weighted book/price exposure is fixed at one cross-sectional standard deviation above the capitalization-weighted market mean. Optimized positive and negative zero-investment weights, industry-neutral and orthogonal to eleven risk indexes and the companion strategy. Monthly weights; less than 5% monthly turnover. Monthly returns; high-book/price holdings tend to remain in the strategy for more than one year."
          },
          "direction": "not-simple",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/rosenberg-1985/rosenberg-1985-publisher.pdf",
          "source_page": 2,
          "source_href": "../papers/rosenberg-1985/rosenberg-1985-publisher.pdf#page=2"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{PS}=\\operatorname{coalesce}(\\mathrm{PSTKRV},\\mathrm{PSTKL},\\mathrm{PSTK}),\\quad \\mathrm{SEQ}^{*}=\\operatorname{coalesce}(\\mathrm{SEQ},\\mathrm{CEQ}+\\mathrm{PSTK},\\mathrm{AT}-\\mathrm{LT}),\\quad \\mathrm{BE}=\\mathrm{SEQ}^{*}+\\mathrm{TXDITC}-\\mathrm{PS},\\quad \\mathrm{BM}=\\frac{\\mathrm{BE}}{\\mathrm{ME}}\\)",
        "formula_direction": "+1",
        "data_fields": "Compustat: AT, CEQ, LT, PSTK, PSTKL, PSTKRV, SEQ, TXDITC",
        "calculation_window": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "accounting_lag": {
          "zh": "年频与季频结果均在 CIZ 中对齐；最终比较 datadate，取较新的可用值。",
          "en": "CIZ aligns both annual and quarterly results, then selects the newer available value by datadate."
        },
        "source_label": "EquityChars CIZ · accounting.py · L2265, L2390",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L2265",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "2265,2390",
        "code_frequency": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "reconcile_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/impute_rank_output.py#L85",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写。年频与季频同时可用时，最终输出按 datadate 选择较新的非空值。",
          "en": "Formula transcribed from chars_ciz. When annual and quarterly values both exist, final output selects the newer non-null value by datadate."
        }
      },
      "method_design": {
        "family": "model_weighted_zero_investment",
        "summary": {
          "zh": "构造账面市值比纯对冲组合：总权重及55个行业内权重均为零，对11项风险指数与反转策略正交，并在给定账面市值比暴露下最小化组合方差。",
          "en": "The final article's book/price strategy gives positive exposure to high book/price stocks and negative exposure to low book/price stocks, but it is an optimized pure hedge rather than a simple quantile spread. Weights sum to zero overall and within each of 55 industries, are orthogonal to eleven risk indexes and the return-reversal strategy, and are variance-minimizing."
        },
        "signal_role": {
          "zh": "目标特征暴露",
          "en": "Target characteristic exposure"
        },
        "estimand": {
          "zh": "受约束零投资组合的收益",
          "en": "Return on a constrained zero-investment portfolio"
        },
        "interpretation": {
          "zh": "该组合虽为零投资，但权重由约束优化确定，不能等同于分位数排序形成的简单H−L组合。",
          "en": ""
        }
      }
    },
    {
      "id": "bm_ia",
      "name": "Industry-adjusted book to market",
      "signal_definition": "Industry-adjusted book to market",
      "sort_variable": "bm_ia",
      "code_direction": "H-L",
      "paper_direction": "N/A",
      "direction_label": "不适用",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Asness, Porter, and Stevens (2000). Formula table direction: +1.",
      "raw_signal": "industry-adjusted book-to-market",
      "construction_summary": "Book-to-market minus the industry mean of book-to-market.",
      "sample_and_timing": "Annual Compustat and CRSP data; the later formal appendix records annual frequency.",
      "breakpoints": "Industry demeaning; no standalone portfolio cutoffs are reported in the formal cross-check.",
      "weighting": "Not reported.",
      "rebalancing_frequency": "Annual.",
      "holding_period": "Not reported.",
      "paper_long_leg": "Higher industry-adjusted book-to-market exposure.",
      "paper_short_leg": "Lower industry-adjusted book-to-market exposure.",
      "confidence": "medium",
      "evidence_type": "formal_published_si_crosscheck",
      "evidence_pointer": "extracted-text/fallahgoul-2024-supplement.txt:4435-4441@supporting-information/fallahgoul-2024/fallahgoul-franstianto-lin-2024-supplement.pdf; extracted-text/gu-2020-internet-appendix.txt:2088-2093@supporting-information/gu-2020/gu-kelly-xiu-2020-internet-appendix.pdf",
      "reviewer_notes": "Two formal journal supplements confirm the exact definition, annual frequency, and that the original Asness-Porter-Stevens source is a working paper. No published standalone H-L portfolio recipe was found, so direction is not promoted from the code sign.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "bm_ia Industry-adjusted book to market Compustat+CRSP Annual Book-to-market (bm) − industry mean of book-to-market (bm)",
          "page": 37,
          "line_start": 4435,
          "line_end": 4441,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/fallahgoul-2024-supplement.txt",
          "source_file": "supporting-information/fallahgoul-2024/fallahgoul-franstianto-lin-2024-supplement.pdf",
          "href": "../supporting-information/fallahgoul-2024/fallahgoul-franstianto-lin-2024-supplement.pdf#page=37",
          "open_label": "查看 PDF 第 37 页"
        },
        {
          "text": "bm ia Industry-adjusted book to market Asness, Porter & Stevens 2000, WP Compustat+CRSP Annual",
          "page": 14,
          "line_start": 2088,
          "line_end": 2093,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/gu-2020-internet-appendix.txt",
          "source_file": "supporting-information/gu-2020/gu-kelly-xiu-2020-internet-appendix.pdf",
          "href": "../supporting-information/gu-2020/gu-kelly-xiu-2020-internet-appendix.pdf#page=14",
          "open_label": "查看 PDF 第 14 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "asness-2000",
        "title": "Predicting Stock Returns Using Industry-Relative Firm Characteristics",
        "authors": "Clifford S. Asness; R. Burt Porter; Ross L. Stevens",
        "year": "2000",
        "venue": "AQR Capital Management working paper",
        "doi": "10.2139/ssrn.213872",
        "source_url": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=213872",
        "local_file": "",
        "local_href": "",
        "artifact_type": "none",
        "pdf_pages": null,
        "access_status": "not_requested"
      },
      "method_variants": [
        {
          "id": "asness-2000",
          "source_id": "asness-2000",
          "role": "original_paper",
          "source_label": "Asness, Porter & Stevens — Predicting Stock Returns Using Industry-Relative Firm Characteristics",
          "source_year": "2000",
          "formula": "BM_IA(i,t) = BM(i,t) − mean[BM(j,t) | j ∈ industry(i)]",
          "formula_latex": "\\(\\displaystyle \\mathrm{BM\\_IA}_{i,t}=\\mathrm{BM}_{i,t}-\\frac{1}{N_{\\mathrm{ind},t}}\\sum_{j\\in\\mathrm{ind}(i)}\\mathrm{BM}_{j,t}\\)",
          "data_fields": "论文概念：book equity、market equity、industry membership",
          "calculation_window": {
            "zh": "年度公司特征；同一期横截面行业均值。原文样本为 1963-06 至 1998-11。",
            "en": "Annual firm characteristic and same-period cross-sectional industry mean. The source sample runs from June 1963 to November 1998."
          },
          "accounting_lag": {
            "zh": "公开摘要未说明。",
            "en": "Not stated in the public abstract."
          },
          "portfolio_rule": {
            "zh": "论文把特征拆为行业内与跨行业部分；公开摘要未给出可直接复刻的独立 H-L 组合窗口。",
            "en": "The paper decomposes the characteristic into within- and across-industry components; the public abstract does not state a standalone replicable H-L portfolio window."
          },
          "direction": "N/A",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "这是 bm_ia 的直接来源，不是基础 bm 论文；该研究目前确认仍为 working paper。",
            "en": "This is the direct source for bm_ia, not a generic book-to-market paper; the study remains a working paper in the verified record."
          },
          "source_path": "",
          "source_page": null,
          "source_href": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=213872"
        },
        {
          "id": "fallahgoul-2024",
          "source_id": "fallahgoul-2024",
          "role": "published_replication",
          "source_label": "Fallahgoul, Franstianto & Lin — Journal Supplement",
          "source_year": "2024",
          "formula": "BM_IA(i,t) = BM(i,t) − mean[BM(j,t) | j ∈ industry(i)]",
          "formula_latex": "\\(\\displaystyle \\mathrm{BM\\_IA}_{i,t}=\\mathrm{BM}_{i,t}-\\frac{1}{N_{\\mathrm{ind},t}}\\sum_{j\\in\\mathrm{ind}(i)}\\mathrm{BM}_{j,t}\\)",
          "data_fields": "Compustat+CRSP: BM and industry membership",
          "calculation_window": {
            "zh": "年频；同一期行业横截面去均值。",
            "en": "Annual; demeaned within the same-period industry cross-section."
          },
          "accounting_lag": {
            "zh": "该定义表未注明。",
            "en": "Not stated in the definition table."
          },
          "portfolio_rule": {
            "zh": "该行用于公式复核，没有单列组合形成规则。",
            "en": "This row cross-checks the formula and does not separately state portfolio formation."
          },
          "direction": "未注明",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "正式期刊补充材料明确写出行业调整公式。",
            "en": "The formal journal supplement states the industry-adjusted formula explicitly."
          },
          "source_path": "supporting-information/fallahgoul-2024/fallahgoul-franstianto-lin-2024-supplement.pdf",
          "source_page": 37,
          "source_href": "../supporting-information/fallahgoul-2024/fallahgoul-franstianto-lin-2024-supplement.pdf#page=37"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{BM\\_IA}_{i,t}=\\mathrm{BM}_{i,t} -\\frac{1}{N_{\\mathrm{ind},t}}\\sum_{j\\in\\mathrm{ind}(i)}\\mathrm{BM}_{j,t}\\)",
        "formula_direction": "+1",
        "data_fields": "Industry classification",
        "calculation_window": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "accounting_lag": {
          "zh": "年频与季频结果均在 CIZ 中对齐；最终比较 datadate，取较新的可用值。",
          "en": "CIZ aligns both annual and quarterly results, then selects the newer available value by datadate."
        },
        "source_label": "EquityChars CIZ · accounting.py · L2273, L2397",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L2273",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "2273,2397",
        "code_frequency": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "reconcile_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/impute_rank_output.py#L85",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写。年频与季频同时可用时，最终输出按 datadate 选择较新的非空值。",
          "en": "Formula transcribed from chars_ciz. When annual and quarterly values both exist, final output selects the newer non-null value by datadate."
        }
      }
    },
    {
      "id": "cash",
      "name": "Cash holdings",
      "signal_definition": "Cash holdings",
      "sort_variable": "cash",
      "code_direction": "H-L",
      "paper_direction": "N/A",
      "direction_label": "不适用",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Lakonishok, Shleifer, and Vishny (1994). Formula table direction: +1.",
      "raw_signal": "Cash holdings",
      "construction_summary": "The published article defines cash flow (earnings plus depreciation), cash-flow-to-price, and growth in cash flow, but it does not define or sort on a standalone cash-holdings ratio matching EquityChars `cash`. This repository attribution therefore cannot support a simple LMS rule for the implemented signal.",
      "sample_and_timing": "NYSE and AMEX, portfolios formed annually at the end of April from 1968 with up to five post-formation years; this sample description applies to the paper, not to a cash-holdings sort.",
      "breakpoints": "N/A; no matching cash-holdings sort.",
      "weighting": "N/A.",
      "rebalancing_frequency": "N/A.",
      "holding_period": "N/A.",
      "paper_long_leg": "N/A.",
      "paper_short_leg": "N/A.",
      "confidence": "high",
      "evidence_type": "publisher_final_jstor_pdf",
      "evidence_pointer": "extracted-text/lakonishok-1994-publisher.txt:215-365,440-540",
      "reviewer_notes": "The final Journal of Finance article's “cash flow” is not cash holdings. Treat the EquityChars paper attribution as a source-mapping mismatch unless another authoritative LSV construction is supplied.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "The potential bias toward high returns among low valuation firms is driven by data for the first 5 or so years that the firm appears on COMPUSTAT.",
          "page": 5,
          "line_start": 215,
          "line_end": 365,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/lakonishok-1994-publisher.txt",
          "href": "../papers/lakonishok-1994/lakonishok-1994-publisher.pdf#page=5",
          "open_label": "查看 PDF 第 5 页"
        },
        {
          "text": "For each stock in the portfolio, replace its return in each year with an annual buy-and-hold return on an equally weighted portfolio of all stocks in its size decile for that year.",
          "page": 6,
          "line_start": 215,
          "line_end": 365,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/lakonishok-1994-publisher.txt",
          "href": "../papers/lakonishok-1994/lakonishok-1994-publisher.pdf#page=6",
          "open_label": "查看 PDF 第 6 页"
        },
        {
          "text": "For these classifications, we consider only stocks with positive ratios of cash flow-to-price or earnings-to-price because negative ratios cannot be interpreted in terms of expected growth rates.4 For purposes other than classifying individual stocks into portfolios, these ratios are computed for the entire equally weighted portfolios (and then averaged across all formation periods) without eliminating individual stocks in the portfolio that have negative values for the variable.",
          "page": 7,
          "line_start": 215,
          "line_end": 365,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/lakonishok-1994-publisher.txt",
          "href": "../papers/lakonishok-1994/lakonishok-1994-publisher.pdf#page=7",
          "open_label": "查看 PDF 第 7 页"
        },
        {
          "text": "According to these expressions, holding discount rates and payout ratios constant,5 a high cash flow-to-price (C/P) firm has a low expected growth rate of cash flow, while. a low C/P firm has a high expected growth rate of cash flow, and similarly for the ratio of earnings-to-price (E/P).6 While the assumption of a constant 5In Section V, we compare risk characteristics, and hence appropriate discount rates, of the various portfolios.",
          "page": 9,
          "line_start": 440,
          "line_end": 540,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/lakonishok-1994-publisher.txt",
          "href": "../papers/lakonishok-1994/lakonishok-1994-publisher.pdf#page=9",
          "open_label": "查看 PDF 第 9 页"
        },
        {
          "text": "Contrarian Investment, Extrapolation, and Risk 1549 Table I-Continued Glamour Value 1 2 3 4 5 6 7 8 9 10 Panel C: E/P R, 0.123 0.125 0.140 0.130 0.135 0.156 0.170 0.180 0.193 0.162 R2 0.101 0.113 0.124 0.143 0.167 0.164 0.180 0.185 0.183 0.174 R3 0.118 0.138 0.157 0.171 0.171 0.191 0.198 0.188 0.188 0.195 R4 0.111 0.124 0.145 0.151 0.157 0.159 0.198 0.199 0.205 0.214 R5 0.119 0.129 0.151 0.167 0.171 0.168 0.196 0.201 0.211 0.207 AR 0.114 0.126 0.143 0.152 0.160 0.167 0.188 0.191 0.196 0.190 CR5 ",
          "page": 10,
          "line_start": 440,
          "line_end": 540,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/lakonishok-1994-publisher.txt",
          "href": "../papers/lakonishok-1994/lakonishok-1994-publisher.pdf#page=10",
          "open_label": "查看 PDF 第 10 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "lakonishok-1994",
        "title": "Contrarian Investment, Extrapolation, and Risk",
        "authors": "Josef Lakonishok, Andrei Shleifer, and Robert W. Vishny",
        "year": "1994",
        "venue": "The Journal of Finance",
        "doi": "10.1111/j.1540-6261.1994.tb04772.x",
        "source_url": "https://doi.org/10.1111/j.1540-6261.1994.tb04772.x",
        "local_file": "papers/lakonishok-1994/lakonishok-1994-publisher.pdf",
        "local_href": "../papers/lakonishok-1994/lakonishok-1994-publisher.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 39,
        "access_status": "full_text_pdf_jstor"
      },
      "method_variants": [
        {
          "id": "lakonishok-1994",
          "source_id": "lakonishok-1994",
          "role": "original_paper",
          "source_label": "Contrarian Investment, Extrapolation, and Risk",
          "source_year": "1994",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{CFP}_{i,t}=\\frac{\\mathrm{Earnings}_{i,t}+\\mathrm{Depreciation}_{i,t}}{\\mathrm{MarketValue}_{i,t}}\\)",
          "data_fields": "Cash holdings",
          "calculation_window": {
            "zh": "NYSE and AMEX, portfolios formed annually at the end of April from 1968 with up to five post-formation years; this sample description applies to the paper, not to a cash-holdings sort.",
            "en": "NYSE and AMEX, portfolios formed annually at the end of April from 1968 with up to five post-formation years; this sample description applies to the paper, not to a cash-holdings sort."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "N/A; no matching cash-holdings sort. N/A. N/A. N/A.",
            "en": "N/A; no matching cash-holdings sort. N/A. N/A. N/A."
          },
          "direction": "N/A",
          "formula_match": "closest_paper_measure",
          "notes": {
            "zh": "论文只给出最接近口径，与项目指标不完全相同。",
            "en": "The paper provides the closest available measure; it is not identical to the project signal."
          },
          "source_path": "papers/lakonishok-1994/lakonishok-1994-publisher.pdf",
          "source_page": 5,
          "source_href": "../papers/lakonishok-1994/lakonishok-1994-publisher.pdf#page=5"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{CASH}_{i,t}=\\frac{\\mathrm{CHE}_{i,t}}{\\mathrm{AT}_{i,t}}\\)",
        "formula_direction": "+1",
        "data_fields": "Compustat: AT, CHE",
        "calculation_window": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "accounting_lag": {
          "zh": "年频与季频结果均在 CIZ 中对齐；最终比较 datadate，取较新的可用值。",
          "en": "CIZ aligns both annual and quarterly results, then selects the newer available value by datadate."
        },
        "source_label": "EquityChars CIZ · accounting.py · L509, L1481",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L509",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "509,1481",
        "code_frequency": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "reconcile_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/impute_rank_output.py#L85",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写。年频与季频同时可用时，最终输出按 datadate 选择较新的非空值。",
          "en": "Formula transcribed from chars_ciz. When annual and quarterly values both exist, final output selects the newer non-null value by datadate."
        }
      }
    },
    {
      "id": "cashdebt",
      "name": "Cash flow to debt",
      "signal_definition": "Cash flow to debt",
      "sort_variable": "cashdebt",
      "code_direction": "H-L",
      "paper_direction": "not-simple",
      "direction_label": "非简单多空",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Ou and Penman (1989). Formula table direction: +1.",
      "raw_signal": "Cash flow to total debt",
      "construction_summary": "The paper treats cash flow to debt as one accounting descriptor among a large candidate set and combines selected descriptors through a stepwise logit into Pr, the estimated probability of a one-year-ahead earnings increase. It does not form a univariate cashdebt portfolio.",
      "sample_and_timing": "Descriptors are estimated on 1965-1972 or 1973-1977 data; annual positions are formed for 1973-1983 three months after fiscal year-end.",
      "breakpoints": "The published portfolio cutoffs apply to composite Pr (>0.6 versus <=0.4), not to cashdebt.",
      "weighting": "Mean monthly returns on each composite position; the reported hedge is the zero-investment difference between the two sides.",
      "rebalancing_frequency": "Annual overlapping formation with monthly portfolio rebalancing in the cumulative-return calculation.",
      "holding_period": "24 months.",
      "paper_long_leg": "Composite portfolio only: Pr > 0.6; no univariate cashdebt long leg.",
      "paper_short_leg": "Composite portfolio only: Pr <= 0.4; no univariate cashdebt short leg.",
      "confidence": "high",
      "evidence_type": "author_institution_full_text",
      "evidence_pointer": "extracted-text/ou-1989.txt:396-470 (Table 2),535-617 (Table 3),665-685 (preset strategy),860-890 (Table 6 notes); papers/ou-1989/ou-1989.pdf",
      "reviewer_notes": "The source's H-L rule is for the composite earnings-increase probability, not for this input descriptor; do not transfer that sign to a standalone cashdebt sort.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "We then drop all variables for which coefficient estimates in this multivariate estimation are not significant at the 0.10 level, leaving 19 variables for the 1965-1972 period and 18 for the 1973-1977 6The first period is longer than the second because of the need to calculate an earnings drift term over four years preceding the relevant earnings prediction year and because the 1984 COMPUSTAT files used have data only from 1965 onwards.",
          "page": 9,
          "line_start": 396,
          "line_end": 470,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/ou-1989.txt",
          "href": "../papers/ou-1989/ou-1989.pdf#page=9",
          "open_label": "查看 PDF 第 9 页"
        },
        {
          "text": "1965-1972 estimation Accounting descriptor a Current ratio %A in 1 Quick ratio %A in 3 Days sales in accs. receivable 15632 %A in 5 Inventory turnover %Zl in 7 Inventory/total assets %A in 9 %A in inventory %A in sales %A in depreciation A in dividend per share Depreciation/plant assets %zi in 15 Return on opening equity A in 17 %A in (capital expenditure/ 13378 19, one-year lag Debt-equity ratio %A in 21 LT debt to equity %A in 23 Equity to fixed assets %A in 25 Times interest earned %A in 27 Sales/total assets %A in 29 Return on total assets Return on closing equity Gross margin ratio %A in 33",
          "page": 10,
          "line_start": 396,
          "line_end": 470,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/ou-1989.txt",
          "href": "../papers/ou-1989/ou-1989.pdf#page=10",
          "open_label": "查看 PDF 第 10 页"
        },
        {
          "text": "Op. profit (before dep.) to sales %A in 35 Pretax income to sales %A in 37 Net profit margin %A in 39 Sales to total cash Sales to accs. receivable Sales to inventory %A in 43 Sales to working capital %A in 45 Sales to fixed assets %A in production %A in R & D %A in ( R & D / s a l e s ) %A in advertising expense %A in (advertising/sales) %A in total assets Cash flow to total debt Working c a p i t a l / t o t a l assets 15604 0.0850 1.16 0.282",
          "page": 11,
          "line_start": 396,
          "line_end": 470,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/ou-1989.txt",
          "href": "../papers/ou-1989/ou-1989.pdf#page=11",
          "open_label": "查看 PDF 第 11 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "ou-1989",
        "title": "Financial statement analysis and the prediction of stock returns",
        "authors": "Jane A. Ou and Stephen H. Penman",
        "year": "1989",
        "venue": "Journal of Accounting and Economics",
        "doi": "10.1016/0165-4101(89)90017-7",
        "source_url": "https://doi.org/10.1016/0165-4101(89)90017-7",
        "local_file": "papers/ou-1989/ou-1989.pdf",
        "local_href": "../papers/ou-1989/ou-1989.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 35,
        "access_status": "full_text_pdf_author_institution"
      },
      "method_variants": [
        {
          "id": "ou-1989",
          "source_id": "ou-1989",
          "role": "original_paper",
          "source_label": "Financial statement analysis and the prediction of stock returns",
          "source_year": "1989",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{CashDebt}_{i,t}=\\frac{\\mathrm{CashFlow}_{i,t}}{\\mathrm{DLC}_{i,t}+\\mathrm{DLTT}_{i,t}}\\)",
          "data_fields": "Cash flow to total debt",
          "calculation_window": {
            "zh": "Descriptors are estimated on 1965-1972 or 1973-1977 data; annual positions are formed for 1973-1983 three months after fiscal year-end.",
            "en": "Descriptors are estimated on 1965-1972 or 1973-1977 data; annual positions are formed for 1973-1983 three months after fiscal year-end."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "The published portfolio cutoffs apply to composite Pr (>0.6 versus <=0.4), not to cashdebt. Mean monthly returns on each composite position; the reported hedge is the zero-investment difference between the two sides. Annual overlapping formation with monthly portfolio rebalancing in the cumulative-return calculation. 24 months.",
            "en": "The published portfolio cutoffs apply to composite Pr (>0.6 versus <=0.4), not to cashdebt. Mean monthly returns on each composite position; the reported hedge is the zero-investment difference between the two sides. Annual overlapping formation with monthly portfolio rebalancing in the cumulative-return calculation. 24 months."
          },
          "direction": "not-simple",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/ou-1989/ou-1989.pdf",
          "source_page": 9,
          "source_href": "../papers/ou-1989/ou-1989.pdf#page=9"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{CASHDEBT}_{i,t}= \\frac{\\mathrm{IB}_{i,t}+\\mathrm{DP}_{i,t}} {\\frac{1}{2}(\\mathrm{LT}_{i,t}+\\mathrm{LT}_{i,t-1})}\\)",
        "formula_direction": "+1",
        "data_fields": "Compustat: DP, IB, LT",
        "calculation_window": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "accounting_lag": {
          "zh": "年频与季频结果均在 CIZ 中对齐；最终比较 datadate，取较新的可用值。",
          "en": "CIZ aligns both annual and quarterly results, then selects the newer available value by datadate."
        },
        "source_label": "EquityChars CIZ · accounting.py · L647, L1585",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L647",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "647,1585",
        "code_frequency": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "reconcile_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/impute_rank_output.py#L85",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写。年频与季频同时可用时，最终输出按 datadate 选择较新的非空值。",
          "en": "Formula transcribed from chars_ciz. When annual and quarterly values both exist, final output selects the newer non-null value by datadate."
        }
      },
      "method_design": {
        "family": "multivariate_prediction_model",
        "summary": {
          "zh": "现金流量与债务之比作为候选会计变量进入逐步Logit模型，用于估计下一年度盈利增加的概率Pr；投资组合按Pr阈值形成，而非按该比率单独排序。",
          "en": "The paper treats cash flow to debt as one accounting descriptor among a large candidate set and combines selected descriptors through a stepwise logit into Pr, the estimated probability of a one-year-ahead earnings increase. It does not form a univariate cashdebt portfolio."
        },
        "signal_role": {
          "zh": "多变量模型的候选解释变量",
          "en": "Candidate predictor in a multivariate model"
        },
        "estimand": {
          "zh": "下一年度盈利增加的预测概率Pr",
          "en": "Predicted probability Pr of a one-year-ahead earnings increase"
        },
        "interpretation": {
          "zh": "该变量仅是综合预测模型的输入；论文交易对象是预测概率Pr，而不是该变量的单变量多空组合。",
          "en": ""
        }
      }
    },
    {
      "id": "cashpr",
      "name": "Cash productivity",
      "signal_definition": "Cash productivity",
      "sort_variable": "cashpr",
      "code_direction": "L-H",
      "paper_direction": "L-H",
      "direction_label": "低值做多 · 高值做空",
      "agreement": "yes",
      "status": "paper_direction_verified",
      "code_long_leg": "Low",
      "code_short_leg": "High",
      "code_notes": "Repo attribution: Chandrashekar and Rao (2009). Formula table direction: -1.",
      "raw_signal": "cash productivity",
      "construction_summary": "The repository uses (market equity + long-term debt - total assets) / cash. The 2009 working paper defines eta as (market value of the firm - total assets) / cash using full book debt, which reduces to (market equity - book equity) / cash. Rao, Tang, and Chandrashekar (2013) publish the reciprocal C = cash / (market equity - book equity).",
      "sample_and_timing": "Rao et al. use CRSP/Compustat data from 1963-2010, form portfolios at each month-end, and lag annual accounting variables by at least four months.",
      "breakpoints": "Ten deciles ranked by scaled cash C.",
      "weighting": "Equal-weighted and value-weighted returns are reported.",
      "rebalancing_frequency": "Monthly.",
      "holding_period": "One month.",
      "paper_long_leg": "Low repository cash productivity / high published C.",
      "paper_short_leg": "High repository cash productivity / low published C.",
      "confidence": "medium",
      "evidence_type": "publisher_final_reciprocal_plus_formal_replication_variants",
      "evidence_pointer": "extracted-text/rao-2013-publisher.txt:12-51,63-65,85-93,104-125,267-270,320-324,571-583@papers/rao-2013/rao2013.pdf; extracted-text/fallahgoul-2024-supplement.txt:4453-4461@supporting-information/fallahgoul-2024/fallahgoul-franstianto-lin-2024-supplement.pdf; extracted-text/gu-2020-internet-appendix.txt:2109-2114@supporting-information/gu-2020/gu-kelly-xiu-2020-internet-appendix.pdf; extracted-text/chen-zimmermann-2022-online-appendix.txt:570-575@supporting-information/chen-zimmermann-2022/chen-zimmermann-2022-online-appendix.pdf",
      "reviewer_notes": "The 2013 final article is a formal successor/reformulation and directly confirms the L-H orientation after inverting C. It does not match the repository numerator exactly: EquityChars adds long-term debt before subtracting assets, while the final paper uses market equity minus book equity and Chen-Zimmermann uses market equity minus total assets. The original working-paper attribution is therefore retained and confidence remains medium.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "10 portfolios based on C-deciles, and find that over the period of 1963–2010, the time- hereafter) portfolio returns increases from 0.59% per month (in the lowest C-decile) to 1.64% per month (in the highest C-decile).",
          "page": 1,
          "line_start": 12,
          "line_end": 51,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/rao-2013-publisher.txt",
          "source_file": "papers/rao-2013/rao2013.pdf",
          "href": "../papers/rao-2013/rao2013.pdf#page=1",
          "open_label": "查看 PDF 第 1 页"
        },
        {
          "text": "Our key variable, the scaled cash measure, C, is calculated by dividing a firm’s cash holdings by the difference between the market and book values of its",
          "page": 2,
          "line_start": 63,
          "line_end": 65,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/rao-2013-publisher.txt",
          "source_file": "papers/rao-2013/rao2013.pdf",
          "href": "../papers/rao-2013/rao2013.pdf#page=2",
          "open_label": "查看 PDF 第 2 页"
        },
        {
          "text": "All variables are updated monthly if possible with a minimum lag of four months between the previous fiscal year-end and the portfolio-formation date.",
          "page": 2,
          "line_start": 85,
          "line_end": 93,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/rao-2013-publisher.txt",
          "source_file": "papers/rao-2013/rao2013.pdf",
          "href": "../papers/rao-2013/rao2013.pdf#page=2",
          "open_label": "查看 PDF 第 2 页"
        },
        {
          "text": "Thus, the trading strategy of taking a long position in the highest decile and an offsetting short position in the lowest decile offers a time-series average monthly return of 1.05%, which is significant",
          "page": 3,
          "line_start": 104,
          "line_end": 125,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/rao-2013-publisher.txt",
          "source_file": "papers/rao-2013/rao2013.pdf",
          "href": "../papers/rao-2013/rao2013.pdf#page=3",
          "open_label": "查看 PDF 第 3 页"
        },
        {
          "text": "At the end of each month, stocks are allocated into deciles based on scaled cash, which is measured as the log cash holding (cash and short-term investment assets) per dollar of market valuation premium (difference between market value of common equity and book value of the common equity).",
          "page": 6,
          "line_start": 267,
          "line_end": 270,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/rao-2013-publisher.txt",
          "source_file": "papers/rao-2013/rao2013.pdf",
          "href": "../papers/rao-2013/rao2013.pdf#page=6",
          "open_label": "查看 PDF 第 6 页"
        },
        {
          "text": "The hedge portfolio is constructed by taking a long position in the highest-ranked cash efficiency decile and an offsetting short position in the lowest-ranked cash efficiency decile.",
          "page": 7,
          "line_start": 320,
          "line_end": 324,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/rao-2013-publisher.txt",
          "source_file": "papers/rao-2013/rao2013.pdf",
          "href": "../papers/rao-2013/rao2013.pdf#page=7",
          "open_label": "查看 PDF 第 7 页"
        },
        {
          "text": "For example, we find that a high-C decile portfolio earns an equal-weighted monthly return of 164 basis points and a value-weighted return of 127 basis points.",
          "page": 11,
          "line_start": 571,
          "line_end": 583,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/rao-2013-publisher.txt",
          "source_file": "papers/rao-2013/rao2013.pdf",
          "href": "../papers/rao-2013/rao2013.pdf#page=11",
          "open_label": "查看 PDF 第 11 页"
        },
        {
          "text": "cashpr Cash productivity Compustat Annual Fiscal-year-end market capitalization (mve_f) + long-term debt (dltt) − total assets (at)) / Cash and cash equivalents (che)",
          "page": 37,
          "line_start": 4453,
          "line_end": 4461,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/fallahgoul-2024-supplement.txt",
          "source_file": "supporting-information/fallahgoul-2024/fallahgoul-franstianto-lin-2024-supplement.pdf",
          "href": "../supporting-information/fallahgoul-2024/fallahgoul-franstianto-lin-2024-supplement.pdf#page=37",
          "open_label": "查看 PDF 第 37 页"
        },
        {
          "text": "cashpr Cash productivity Chandrashekar & Rao 2009, WP Compustat Annual",
          "page": 14,
          "line_start": 2109,
          "line_end": 2114,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/gu-2020-internet-appendix.txt",
          "source_file": "supporting-information/gu-2020/gu-kelly-xiu-2020-internet-appendix.pdf",
          "href": "../supporting-information/gu-2020/gu-kelly-xiu-2020-internet-appendix.pdf#page=14",
          "open_label": "查看 PDF 第 14 页"
        },
        {
          "text": "Cash productivity is equal to the difference between mve_c and total assets (at) divided by cash and short-term investments (che).",
          "page": 12,
          "line_start": 570,
          "line_end": 575,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/chen-zimmermann-2022-online-appendix.txt",
          "source_file": "supporting-information/chen-zimmermann-2022/chen-zimmermann-2022-online-appendix.pdf",
          "href": "../supporting-information/chen-zimmermann-2022/chen-zimmermann-2022-online-appendix.pdf#page=12",
          "open_label": "查看 PDF 第 12 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "chandrashekar-2009",
        "title": "The Productivity of Corporate Cash Holdings and the Cross-Section of Expected Stock Returns",
        "authors": "Satyajit Chandrashekar; Ramesh K. S. Rao",
        "year": "2009",
        "venue": "SSRN Electronic Journal / working paper",
        "doi": "10.2139/ssrn.1334162",
        "source_url": "https://doi.org/10.2139/ssrn.1334162",
        "local_file": "",
        "local_href": "",
        "artifact_type": "none",
        "pdf_pages": null,
        "access_status": "not_requested"
      },
      "method_variants": [
        {
          "id": "chandrashekar-2009",
          "source_id": "chandrashekar-2009",
          "role": "original_paper",
          "source_label": "Chandrashekar & Rao — The Productivity of Corporate Cash Holdings and the Cross-Section of Expected Stock Returns",
          "source_year": "2009",
          "formula": "η = (market value of firm − total assets) / cash holdings",
          "formula_latex": "\\(\\displaystyle \\eta_{i,t}=\\frac{\\mathrm{MVF}_{i,t}-\\mathrm{AT}_{i,t}}{\\mathrm{CHE}_{i,t}}\\)",
          "data_fields": "论文概念：market value of firm、total assets、cash holdings；当前没有正式全文可核 exact vendor mnemonics",
          "calculation_window": {
            "zh": "年频公司特征；已核记录的原始样本为 1963–2003。",
            "en": "Annual firm characteristic; the verified record reports the original sample as 1963–2003."
          },
          "accounting_lag": {
            "zh": "当前可访问记录未说明。",
            "en": "Not stated in the currently accessible record."
          },
          "portfolio_rule": {
            "zh": "当前可访问记录不足以独立确认精确分组、持有窗口和权重。",
            "en": "The currently accessible record is insufficient to independently verify exact breakpoints, holding window, and weighting."
          },
          "direction": "未独立核实",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "保留原始 working paper，不用后续论文覆盖；未确认的字段明确留空。",
            "en": "The original working paper is retained rather than replaced by later papers; unverified implementation fields remain explicit."
          },
          "source_path": "",
          "source_page": null,
          "source_href": "https://doi.org/10.2139/ssrn.1334162"
        },
        {
          "id": "rao-2013",
          "source_id": "rao-2013",
          "role": "published_followup",
          "source_label": "Rao, Tang & Chandrashekar — Do Corporate Cash Holdings Predict Stock Returns?",
          "source_year": "2013",
          "formula": "C = CHE / (CSHO × PRCC_F − CEQ)",
          "formula_latex": "\\(\\displaystyle C_{i,t}=\\frac{\\mathrm{CHE}_{i,t}}{\\mathrm{CSHO}_{i,t}\\mathrm{PRCC\\_F}_{i,t}-\\mathrm{CEQ}_{i,t}}\\)",
          "data_fields": "Compustat: CHE, CSHO, PRCC_F, CEQ；CRSP: monthly RET, lagged market equity",
          "calculation_window": {
            "zh": "财年末变量；每月用最新可得 C 重新分组。",
            "en": "Fiscal-year-end variables; portfolios are refreshed monthly with the latest available C."
          },
          "accounting_lag": {
            "zh": "财年末到组合形成日至少滞后 4 个月。",
            "en": "At least four months between fiscal year-end and portfolio formation."
          },
          "portfolio_rule": {
            "zh": "每月十分位，持有 1 个月；做多高 C 的 D10、做空低 C 的 D1；报告等权和市值加权。",
            "en": "Monthly deciles held for one month; long high-C D10 and short low-C D1; both equal- and value-weighted."
          },
          "direction": "H-L",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "这是正式发表的后续版本。它使用原始 η 的倒数式 C，且分母写成市值减账面权益，不能与项目公式当作完全相同。",
            "en": "This is the published follow-up. It uses the reciprocal-style C and a market-minus-book-equity denominator, so it is not identical to the project formula."
          },
          "source_path": "papers/rao-2013/rao2013.pdf",
          "source_page": 2,
          "source_href": "../papers/rao-2013/rao2013.pdf#page=2"
        },
        {
          "id": "chen-zimmermann-2022",
          "source_id": "chen-zimmermann-2022",
          "role": "published_replication",
          "source_label": "Chen & Zimmermann — Open Source Cross-Sectional Asset Pricing, Online Appendix",
          "source_year": "2022",
          "formula": "CashProd = (abs(PRC) × SHROUT − AT) / CHE",
          "formula_latex": "\\(\\displaystyle \\mathrm{CashProd}_{i,t}=\\frac{|\\mathrm{PRC}_{i,t}|\\mathrm{SHROUT}_{i,t}-\\mathrm{AT}_{i,t}}{\\mathrm{CHE}_{i,t}}\\)",
          "data_fields": "CRSP: PRC, SHROUT; Compustat: AT, CHE",
          "calculation_window": {
            "zh": "定义表标为 Original；原始样本 1963–2003。",
            "en": "The definition table labels the timing as Original; the original sample is 1963–2003."
          },
          "accounting_lag": {
            "zh": "该定义表未注明。",
            "en": "Not stated in the definition table."
          },
          "portfolio_rule": {
            "zh": "该行用于公式复核，没有单列组合形成规则。",
            "en": "This row is a formula cross-check and does not separately state the portfolio-formation rule."
          },
          "direction": "未注明",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "这一复现口径不含 DLTT，因此与 EquityChars/Fallahgoul 的分子不同。",
            "en": "This replication omits DLTT, so its numerator differs from EquityChars/Fallahgoul."
          },
          "source_path": "supporting-information/chen-zimmermann-2022/chen-zimmermann-2022-online-appendix.pdf",
          "source_page": 12,
          "source_href": "../supporting-information/chen-zimmermann-2022/chen-zimmermann-2022-online-appendix.pdf#page=12"
        },
        {
          "id": "fallahgoul-2024",
          "source_id": "fallahgoul-2024",
          "role": "published_replication",
          "source_label": "Fallahgoul, Franstianto & Lin — Journal Supplement",
          "source_year": "2024",
          "formula": "cashpr = (mve_f + DLTT − AT) / CHE",
          "formula_latex": "\\(\\displaystyle \\mathrm{cashpr}_{i,t}=\\frac{\\mathrm{mve\\_f}_{i,t}+\\mathrm{DLTT}_{i,t}-\\mathrm{AT}_{i,t}}{\\mathrm{CHE}_{i,t}}\\)",
          "data_fields": "CRSP: fiscal-year-end MVE_F; Compustat: DLTT, AT, CHE",
          "calculation_window": {
            "zh": "年频。",
            "en": "Annual."
          },
          "accounting_lag": {
            "zh": "该定义表未注明。",
            "en": "Not stated in the definition table."
          },
          "portfolio_rule": {
            "zh": "该行用于特征定义复核，没有单列组合形成规则。",
            "en": "This row is a characteristic-definition cross-check and does not separately state the portfolio-formation rule."
          },
          "direction": "未注明",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "公式与 EquityChars 最接近，但市值明确使用财年末 mve_f。",
            "en": "This formula is closest to EquityChars, but explicitly uses fiscal-year-end market equity mve_f."
          },
          "source_path": "supporting-information/fallahgoul-2024/fallahgoul-franstianto-lin-2024-supplement.pdf",
          "source_page": 37,
          "source_href": "../supporting-information/fallahgoul-2024/fallahgoul-franstianto-lin-2024-supplement.pdf#page=37"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{CASHPR}_{i,t}= \\frac{\\mathrm{ME}_{i,t}+\\mathrm{DLTT}_{i,t}-\\mathrm{AT}_{i,t}}{\\mathrm{CHE}_{i,t}}\\)",
        "formula_direction": "-1",
        "data_fields": "Compustat: AT, CHE, DLTT",
        "calculation_window": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "accounting_lag": {
          "zh": "年频与季频结果均在 CIZ 中对齐；最终比较 datadate，取较新的可用值。",
          "en": "CIZ aligns both annual and quarterly results, then selects the newer available value by datadate."
        },
        "source_label": "EquityChars CIZ · accounting.py · L2338, L2461",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L2338",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "2338,2461",
        "code_frequency": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "reconcile_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/impute_rank_output.py#L85",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写。年频与季频同时可用时，最终输出按 datadate 选择较新的非空值。",
          "en": "Formula transcribed from chars_ciz. When annual and quarterly values both exist, final output selects the newer non-null value by datadate."
        }
      }
    },
    {
      "id": "cfp",
      "name": "Cash flow to price ratio",
      "signal_definition": "Cash flow to price ratio",
      "sort_variable": "cfp",
      "code_direction": "H-L",
      "paper_direction": "H-L",
      "direction_label": "高值做多 · 低值做空",
      "agreement": "yes",
      "status": "paper_direction_verified",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Lakonishok, Shleifer, and Vishny (1994). Formula table direction: +1.",
      "raw_signal": "Cash flow to price (C/P), with cash flow defined as earnings plus depreciation",
      "construction_summary": "Form annual deciles on positive cash-flow-to-price ratios. High-C/P stocks are value stocks and low-C/P stocks are glamour stocks; the tenth decile outperforms the first decile.",
      "sample_and_timing": "NYSE and AMEX; annual end-of-April formations beginning in 1968; accounting data from COMPUSTAT and returns from CRSP; performance examined for five years.",
      "breakpoints": "Deciles on positive C/P; high C/P is decile 10 and low C/P is decile 1.",
      "weighting": "Equal-weighted within portfolios; raw and size-adjusted returns are reported.",
      "rebalancing_frequency": "Annual formation and annual rebalancing.",
      "holding_period": "One through five post-formation years.",
      "paper_long_leg": "Decile 10, high C/P / value.",
      "paper_short_leg": "Decile 1, low C/P / glamour.",
      "confidence": "high",
      "evidence_type": "publisher_final_jstor_pdf",
      "evidence_pointer": "extracted-text/lakonishok-1994-publisher.txt:215-365,440-565",
      "reviewer_notes": "Verified against the final Journal of Finance/JSTOR PDF. The article explicitly identifies high C/P as value, low C/P as glamour, and reports an 11 percentage-point average annual extreme-decile return difference.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "The potential bias toward high returns among low valuation firms is driven by data for the first 5 or so years that the firm appears on COMPUSTAT.",
          "page": 5,
          "line_start": 215,
          "line_end": 365,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/lakonishok-1994-publisher.txt",
          "href": "../papers/lakonishok-1994/lakonishok-1994-publisher.pdf#page=5",
          "open_label": "查看 PDF 第 5 页"
        },
        {
          "text": "Within each of our portfolios, we equally weight all the stocks and compute returns using an annual buy-and-hold strategy for Years +1, +2,..., +5 relative to the time of formation.",
          "page": 6,
          "line_start": 215,
          "line_end": 365,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/lakonishok-1994-publisher.txt",
          "href": "../papers/lakonishok-1994/lakonishok-1994-publisher.pdf#page=6",
          "open_label": "查看 PDF 第 6 页"
        },
        {
          "text": "For these classifications, we consider only stocks with positive ratios of cash flow-to-price or earnings-to-price because negative ratios cannot be interpreted in terms of expected growth rates.4 For purposes other than classifying individual stocks into portfolios, these ratios are computed for the entire equally weighted portfolios (and then averaged across all formation periods) without eliminating individual stocks in the portfolio that have negative values for the variable.",
          "page": 7,
          "line_start": 215,
          "line_end": 365,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/lakonishok-1994-publisher.txt",
          "href": "../papers/lakonishok-1994/lakonishok-1994-publisher.pdf#page=7",
          "open_label": "查看 PDF 第 7 页"
        },
        {
          "text": "According to these expressions, holding discount rates and payout ratios constant,5 a high cash flow-to-price (C/P) firm has a low expected growth rate of cash flow, while. a low C/P firm has a high expected growth rate of cash flow, and similarly for the ratio of earnings-to-price (E/P).6 While the assumption of a constant 5In Section V, we compare risk characteristics, and hence appropriate discount rates, of the various portfolios.",
          "page": 9,
          "line_start": 440,
          "line_end": 565,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/lakonishok-1994-publisher.txt",
          "href": "../papers/lakonishok-1994/lakonishok-1994-publisher.pdf#page=9",
          "open_label": "查看 PDF 第 9 页"
        },
        {
          "text": "High C/P stocks are identified with value stocks because their growth rate of cash flow is expected to be low, or, alternatively, their prices are low per dollar of cash flow.",
          "page": 10,
          "line_start": 440,
          "line_end": 565,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/lakonishok-1994-publisher.txt",
          "href": "../papers/lakonishok-1994/lakonishok-1994-publisher.pdf#page=10",
          "open_label": "查看 PDF 第 10 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "lakonishok-1994",
        "title": "Contrarian Investment, Extrapolation, and Risk",
        "authors": "Josef Lakonishok, Andrei Shleifer, and Robert W. Vishny",
        "year": "1994",
        "venue": "The Journal of Finance",
        "doi": "10.1111/j.1540-6261.1994.tb04772.x",
        "source_url": "https://doi.org/10.1111/j.1540-6261.1994.tb04772.x",
        "local_file": "papers/lakonishok-1994/lakonishok-1994-publisher.pdf",
        "local_href": "../papers/lakonishok-1994/lakonishok-1994-publisher.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 39,
        "access_status": "full_text_pdf_jstor"
      },
      "method_variants": [
        {
          "id": "lakonishok-1994",
          "source_id": "lakonishok-1994",
          "role": "original_paper",
          "source_label": "Contrarian Investment, Extrapolation, and Risk",
          "source_year": "1994",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{CFP}_{i,t}=\\frac{\\mathrm{Earnings}_{i,t}+\\mathrm{Depreciation}_{i,t}}{\\mathrm{MarketValue}_{i,t}}\\)",
          "data_fields": "Cash flow to price (C/P), with cash flow defined as earnings plus depreciation",
          "calculation_window": {
            "zh": "NYSE and AMEX; annual end-of-April formations beginning in 1968; accounting data from COMPUSTAT and returns from CRSP; performance examined for five years.",
            "en": "NYSE and AMEX; annual end-of-April formations beginning in 1968; accounting data from COMPUSTAT and returns from CRSP; performance examined for five years."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Deciles on positive C/P; high C/P is decile 10 and low C/P is decile 1. Equal-weighted within portfolios; raw and size-adjusted returns are reported. Annual formation and annual rebalancing. One through five post-formation years.",
            "en": "Deciles on positive C/P; high C/P is decile 10 and low C/P is decile 1. Equal-weighted within portfolios; raw and size-adjusted returns are reported. Annual formation and annual rebalancing. One through five post-formation years."
          },
          "direction": "H-L",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/lakonishok-1994/lakonishok-1994-publisher.pdf",
          "source_page": 5,
          "source_href": "../papers/lakonishok-1994/lakonishok-1994-publisher.pdf#page=5"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{CFP}^{A}_{i,t}=\\frac{\\mathrm{IB}_{i,t}+\\operatorname{coalesce}(\\mathrm{DP}_{i,t},0)}{\\mathrm{ME}_{i,t}},\\quad \\mathrm{CFP}^{Q}_{i,t}=\\frac{\\mathrm{TTM4}(\\mathrm{IBQ})_{i,t}+\\operatorname{coalesce}(\\mathrm{TTM4}(\\mathrm{DPQ})_{i,t},0)}{\\mathrm{ME}_{i,t}}\\)",
        "formula_direction": "+1",
        "data_fields": "Compustat: DP, DPQ, IB, IBQ",
        "calculation_window": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "accounting_lag": {
          "zh": "年频与季频结果均在 CIZ 中对齐；最终比较 datadate，取较新的可用值。",
          "en": "CIZ aligns both annual and quarterly results, then selects the newer available value by datadate."
        },
        "source_label": "EquityChars CIZ · accounting.py · L2290, L2412",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L2290",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "2290,2412",
        "code_frequency": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "reconcile_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/impute_rank_output.py#L85",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写。年频与季频同时可用时，最终输出按 datadate 选择较新的非空值。",
          "en": "Formula transcribed from chars_ciz. When annual and quarterly values both exist, final output selects the newer non-null value by datadate."
        }
      }
    },
    {
      "id": "cfp_ia",
      "name": "Industry-adjusted cash flow to price ratio",
      "signal_definition": "Industry-adjusted cash flow to price ratio",
      "sort_variable": "cfp_ia",
      "code_direction": "H-L",
      "paper_direction": "N/A",
      "direction_label": "不适用",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Asness, Porter, and Stevens (2000). Formula table direction: +1.",
      "raw_signal": "industry-adjusted cash flow-to-price ratio",
      "construction_summary": "Cash-flow-to-price ratio minus its industry mean.",
      "sample_and_timing": "Annual Compustat data; the later formal appendix records annual frequency.",
      "breakpoints": "Industry demeaning; no standalone portfolio cutoffs are reported in the formal cross-check.",
      "weighting": "Not reported.",
      "rebalancing_frequency": "Annual.",
      "holding_period": "Not reported.",
      "paper_long_leg": "Higher industry-adjusted cash-flow-to-price exposure.",
      "paper_short_leg": "Lower industry-adjusted cash-flow-to-price exposure.",
      "confidence": "medium",
      "evidence_type": "formal_published_si_crosscheck",
      "evidence_pointer": "extracted-text/fallahgoul-2024-supplement.txt:4485-4491@supporting-information/fallahgoul-2024/fallahgoul-franstianto-lin-2024-supplement.pdf; extracted-text/gu-2020-internet-appendix.txt:2123-2128@supporting-information/gu-2020/gu-kelly-xiu-2020-internet-appendix.pdf",
      "reviewer_notes": "Two formal journal supplements confirm the exact definition, annual frequency, and working-paper provenance. No published standalone H-L portfolio recipe was found.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "cfp_ia Industry-adjusted cash flow to price ratio Compustat Annual Cash flow to price ratio (cpr) − industry mean of cash flow to price ratio",
          "page": 37,
          "line_start": 4485,
          "line_end": 4491,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/fallahgoul-2024-supplement.txt",
          "source_file": "supporting-information/fallahgoul-2024/fallahgoul-franstianto-lin-2024-supplement.pdf",
          "href": "../supporting-information/fallahgoul-2024/fallahgoul-franstianto-lin-2024-supplement.pdf#page=37",
          "open_label": "查看 PDF 第 37 页"
        },
        {
          "text": "cfp ia Industry-adjusted cash flow to price ratio Asness, Porter & Stevens 2000, WP Compustat Annual",
          "page": 14,
          "line_start": 2123,
          "line_end": 2128,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/gu-2020-internet-appendix.txt",
          "source_file": "supporting-information/gu-2020/gu-kelly-xiu-2020-internet-appendix.pdf",
          "href": "../supporting-information/gu-2020/gu-kelly-xiu-2020-internet-appendix.pdf#page=14",
          "open_label": "查看 PDF 第 14 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "asness-2000",
        "title": "Predicting Stock Returns Using Industry-Relative Firm Characteristics",
        "authors": "Clifford S. Asness; R. Burt Porter; Ross L. Stevens",
        "year": "2000",
        "venue": "AQR Capital Management working paper",
        "doi": "10.2139/ssrn.213872",
        "source_url": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=213872",
        "local_file": "",
        "local_href": "",
        "artifact_type": "none",
        "pdf_pages": null,
        "access_status": "not_requested"
      },
      "method_variants": [
        {
          "id": "asness-2000",
          "source_id": "asness-2000",
          "role": "original_paper",
          "source_label": "Asness, Porter & Stevens — Predicting Stock Returns Using Industry-Relative Firm Characteristics",
          "source_year": "2000",
          "formula": "CFP_IA(i,t) = CFP(i,t) − mean[CFP(j,t) | j ∈ industry(i)]",
          "formula_latex": "\\(\\displaystyle \\mathrm{CFP\\_IA}_{i,t}=\\mathrm{CFP}_{i,t}-\\overline{\\mathrm{CFP}}_{\\mathrm{industry},t}\\)",
          "data_fields": "论文概念：cash flow、market equity、industry membership",
          "calculation_window": {
            "zh": "年度公司特征；同一期横截面行业均值。原文样本为 1963-06 至 1998-11。",
            "en": "Annual firm characteristic and same-period cross-sectional industry mean. The source sample runs from June 1963 to November 1998."
          },
          "accounting_lag": {
            "zh": "公开摘要未说明。",
            "en": "Not stated in the public abstract."
          },
          "portfolio_rule": {
            "zh": "论文把特征拆为行业内与跨行业部分；公开摘要未给出可直接复刻的独立 H-L 组合窗口。",
            "en": "The paper decomposes the characteristic into within- and across-industry components; the public abstract does not state a standalone replicable H-L portfolio window."
          },
          "direction": "N/A",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "这是 cfp_ia 的直接来源，不是基础 cfp 论文；该研究目前确认仍为 working paper。",
            "en": "This is the direct source for cfp_ia, not a generic cash-flow-to-price paper; the study remains a working paper in the verified record."
          },
          "source_path": "",
          "source_page": null,
          "source_href": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=213872"
        },
        {
          "id": "fallahgoul-2024",
          "source_id": "fallahgoul-2024",
          "role": "published_replication",
          "source_label": "Fallahgoul, Franstianto & Lin — Journal Supplement",
          "source_year": "2024",
          "formula": "CFP_IA(i,t) = CFP(i,t) − mean[CFP(j,t) | j ∈ industry(i)]",
          "formula_latex": "\\(\\displaystyle \\mathrm{CFP\\_IA}_{i,t}=\\mathrm{CFP}_{i,t}-\\overline{\\mathrm{CFP}}_{\\mathrm{industry},t}\\)",
          "data_fields": "Compustat: cash-flow-to-price and industry membership",
          "calculation_window": {
            "zh": "年频；同一期行业横截面去均值。",
            "en": "Annual; demeaned within the same-period industry cross-section."
          },
          "accounting_lag": {
            "zh": "该定义表未注明。",
            "en": "Not stated in the definition table."
          },
          "portfolio_rule": {
            "zh": "该行用于公式复核，没有单列组合形成规则。",
            "en": "This row cross-checks the formula and does not separately state portfolio formation."
          },
          "direction": "未注明",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "正式期刊补充材料明确写出行业调整公式。",
            "en": "The formal journal supplement states the industry-adjusted formula explicitly."
          },
          "source_path": "supporting-information/fallahgoul-2024/fallahgoul-franstianto-lin-2024-supplement.pdf",
          "source_page": 37,
          "source_href": "../supporting-information/fallahgoul-2024/fallahgoul-franstianto-lin-2024-supplement.pdf#page=37"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{CFP\\_IA}_{i,t}=\\mathrm{CFP}_{i,t}-\\overline{\\mathrm{CFP}}_{\\mathrm{industry},t}\\).",
        "formula_direction": "+1",
        "data_fields": "Industry classification",
        "calculation_window": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "accounting_lag": {
          "zh": "年频与季频结果均在 CIZ 中对齐；最终比较 datadate，取较新的可用值。",
          "en": "CIZ aligns both annual and quarterly results, then selects the newer available value by datadate."
        },
        "source_label": "EquityChars CIZ · accounting.py · L2298, L2420",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L2298",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "2298,2420",
        "code_frequency": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "reconcile_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/impute_rank_output.py#L85",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写。年频与季频同时可用时，最终输出按 datadate 选择较新的非空值。",
          "en": "Formula transcribed from chars_ciz. When annual and quarterly values both exist, final output selects the newer non-null value by datadate."
        }
      }
    },
    {
      "id": "chatoia",
      "name": "Industry-adjusted change in asset turnover",
      "signal_definition": "Industry-adjusted change in asset turnover",
      "sort_variable": "chatoia",
      "code_direction": "H-L",
      "paper_direction": "not-simple",
      "direction_label": "非简单多空",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Soliman (2008). Formula table direction: +1.",
      "raw_signal": "repository signal is industry-adjusted change in asset turnover; closest paper variable is unadjusted ΔATO = ATO(t) - ATO(t-1)",
      "construction_summary": "The published article ranks unadjusted ΔATO annually and reports that moving from the bottom to the top decile predicts about 7.8% future abnormal return before the full controls and about 5.2% after them. The exact repository signal is industry-adjusted, which this article does not construct, so the published hedge cannot be treated as an exact chatoia strategy.",
      "sample_and_timing": "38,716 firm-years from 1984-2002; future returns begin four months after fiscal year-end.",
      "breakpoints": "Annual deciles numbered 0-9 for the paper's unadjusted ΔATO.",
      "weighting": "Regression-implied top-minus-bottom decile hedge; underlying future returns are compounded buy-and-hold market-adjusted returns.",
      "rebalancing_frequency": "annual",
      "holding_period": "One year.",
      "paper_long_leg": "Closest paper strategy: highest unadjusted ΔATO decile.",
      "paper_short_leg": "Closest paper strategy: lowest unadjusted ΔATO decile.",
      "confidence": "high",
      "evidence_type": "publisher_final_jstor_pdf",
      "evidence_pointer": "extracted-text/soliman-2008-publisher.txt:391-399,669-729,837-905,1577-1713",
      "reviewer_notes": "Verified against the final Accounting Review/JSTOR PDF. Closest paper direction is H-L for unadjusted ΔATO, but the repository's industry adjustment is absent; retain not-simple to prevent a false exact attribution.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "ATO captures the firm's efficiency in using operating assets to generate sales and is often interpreted as a measure of asset utilization by managers.",
          "page": 7,
          "line_start": 391,
          "line_end": 399,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/soliman-2008-publisher.txt",
          "href": "../papers/soliman-2008/soliman-2008-publisher.pdf#page=7",
          "open_label": "查看 PDF 第 7 页"
        },
        {
          "text": "To implement this trading strategy, I explore whether investors understand the future implications of ARNOA as a function of the DuPont components using the following regression: R,+, = Po + pIARNOAt + p2APMt + p3AATOt + p4RSST Controls + p5RNOA, + p6PM, + pATO, + psFama-French Risk Factors + Et+l (6) where: R,,, = future stock returns are measured using compounded buy-hold market-adjusted returns (raw return minus the corresponding value-weighted return), inclusive of dividends and other distributions beginning four months after the end of the fiscal year t and continuing for one year.23 22 Because short-window return tests capture the updating of priors and represent new information, I onl",
          "page": 11,
          "line_start": 669,
          "line_end": 729,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/soliman-2008-publisher.txt",
          "href": "../papers/soliman-2008/soliman-2008-publisher.pdf#page=11",
          "open_label": "查看 PDF 第 11 页"
        },
        {
          "text": "In these tests, I use rank regressions where the co independent variable amount is replaced with its annual decile rank servative statistical tests; the variables are scale-free and the only a regression's functional form is that the relations are monotonic (Ima To create decile ranks, all the continuous variables are sorted annually groups numbered 0 to 9 each year and then divided by 9.",
          "page": 12,
          "line_start": 669,
          "line_end": 729,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/soliman-2008-publisher.txt",
          "href": "../papers/soliman-2008/soliman-2008-publisher.pdf#page=12",
          "open_label": "查看 PDF 第 12 页"
        },
        {
          "text": "Financial statement data are obtained from the Compustat annual database, and stock return data are obtained The Accounting Review, May 2008 This content downloaded from 144.214.9.191 on Sun, 26 Jul 2026 03:27:57 UTC All use subject to https://about.jstor.org/terms",
          "page": 13,
          "line_start": 837,
          "line_end": 905,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/soliman-2008-publisher.txt",
          "href": "../papers/soliman-2008/soliman-2008-publisher.pdf#page=13",
          "open_label": "查看 PDF 第 13 页"
        },
        {
          "text": "Firm-year observations that are (1) not tracked by I/B/E/S, (2 data on Compustat to compute the financial statement variables used in not have contemporaneous and future return data on CRSP are elimin sample to have I/B/E/S data biases the sample toward larger firms with ana In addition, all observations that do not have all the necessary informa tests are removed as well as firm-year observations with negative NOA come.25 These criteria yield a final sample size of 38,716 firm-year obs missing analyst forecasts, financial statement, and returns data.",
          "page": 14,
          "line_start": 837,
          "line_end": 905,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/soliman-2008-publisher.txt",
          "href": "../papers/soliman-2008/soliman-2008-publisher.pdf#page=14",
          "open_label": "查看 PDF 第 14 页"
        },
        {
          "text": "The coefficient on AATO indicates that a trading strategy optimizing the information in AATO would result in a hedge return of The Accounting Review, May 2008 This content downloaded from 144.214.9.191 on Sun, 26 Jul 2026 03:27:57 UTC All use subject to https://about.jstor.org/terms",
          "page": 24,
          "line_start": 1577,
          "line_end": 1713,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/soliman-2008-publisher.txt",
          "href": "../papers/soliman-2008/soliman-2008-publisher.pdf#page=24",
          "open_label": "查看 PDF 第 24 页"
        },
        {
          "text": "846 TABLE 7 Time-Series Means and t-Statistics for Coefficients from Annual Cross-Sectional Regres s of Future Abnormal Returns on the Ranks of DuPont Components R,+I = Po + plARNOAt + p2APMt + p3AATOt + p4RSST Controls + p5RNOAt + p6PM + p7ATOt + p8Fama French Risk Factors + et+ Independent Variables Model 1 Model 2 Model 3 -0.061 Intercept -2.15 -0.49 -2.83 0.001 ARNOA, 0.006 0.33 0.078 AATO, -0.513 -0.557 AWC, -0.162 -0.193 NCO -3.96 -5.26 -0.041 -0.108 -1.14 -2.29 0.070 1.41 0.110 1.04 0.000 ATO, FF Risk Adjusted The sample consists of 38,716 firm-year ob annual regressions using the Fama-MacBeth StdDevp follows: i where regressions R,t1(Future Abnormal Returns) = compoun distributions l",
          "page": 25,
          "line_start": 1577,
          "line_end": 1713,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/soliman-2008-publisher.txt",
          "href": "../papers/soliman-2008/soliman-2008-publisher.pdf#page=25",
          "open_label": "查看 PDF 第 25 页"
        },
        {
          "text": "Model 3 shows that the significance remains even after including the change of RNOA.33 Recall that changes in ATO positively predict future changes in profitability.",
          "page": 26,
          "line_start": 1577,
          "line_end": 1713,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/soliman-2008-publisher.txt",
          "href": "../papers/soliman-2008/soliman-2008-publisher.pdf#page=26",
          "open_label": "查看 PDF 第 26 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "soliman-2008",
        "title": "The Use of DuPont Analysis by Market Participants",
        "authors": "Mark T. Soliman",
        "year": "2008",
        "venue": "The Accounting Review",
        "doi": "10.2308/accr.2008.83.3.823",
        "source_url": "https://onlinelibrary.wiley.com/doi/abs/10.2308/accr.2008.83.3.823",
        "local_file": "papers/soliman-2008/soliman-2008-publisher.pdf",
        "local_href": "../papers/soliman-2008/soliman-2008-publisher.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 32,
        "access_status": "full_text_pdf_publisher"
      },
      "method_variants": [
        {
          "id": "soliman-2008",
          "source_id": "soliman-2008",
          "role": "original_paper",
          "source_label": "The Use of DuPont Analysis by Market Participants",
          "source_year": "2008",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\Delta\\mathrm{ATO}_{i,t}=\\mathrm{ATO}_{i,t}-\\mathrm{ATO}_{i,t-1}\\)",
          "data_fields": "repository signal is industry-adjusted change in asset turnover; closest paper variable is unadjusted ΔATO = ATO(t) - ATO(t-1)",
          "calculation_window": {
            "zh": "38,716 firm-years from 1984-2002; future returns begin four months after fiscal year-end.",
            "en": "38,716 firm-years from 1984-2002; future returns begin four months after fiscal year-end."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Annual deciles numbered 0-9 for the paper's unadjusted ΔATO. Regression-implied top-minus-bottom decile hedge; underlying future returns are compounded buy-and-hold market-adjusted returns. annual One year.",
            "en": "Annual deciles numbered 0-9 for the paper's unadjusted ΔATO. Regression-implied top-minus-bottom decile hedge; underlying future returns are compounded buy-and-hold market-adjusted returns. annual One year."
          },
          "direction": "not-simple",
          "formula_match": "closest_paper_measure",
          "notes": {
            "zh": "论文只给出最接近口径，与项目指标不完全相同。",
            "en": "The paper provides the closest available measure; it is not identical to the project signal."
          },
          "source_path": "papers/soliman-2008/soliman-2008-publisher.pdf",
          "source_page": 7,
          "source_href": "../papers/soliman-2008/soliman-2008-publisher.pdf#page=7"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\begin{aligned} \\mathrm{NOA}^{raw}_{i,t}&=(\\mathrm{AT}_{i,t}-\\mathrm{CHE}_{i,t}-\\mathrm{IVAO}_{i,t})\\\\ &\\quad-(\\mathrm{AT}_{i,t}-\\mathrm{DLC}_{i,t}-\\mathrm{DLTT}_{i,t}-\\mathrm{MIB}_{i,t}-\\mathrm{PSTK}_{i,t}-\\mathrm{CEQ}_{i,t}),\\\\ \\mathrm{CHATO}_{i,t}&= \\frac{\\mathrm{SALE}_{i,t}}{\\frac{1}{2}(\\mathrm{NOA}^{raw}_{i,t}+\\mathrm{NOA}^{raw}_{i,t-1})} -\\frac{\\mathrm{SALE}_{i,t-1}}{\\frac{1}{2}(\\mathrm{NOA}^{raw}_{i,t-1}+\\mathrm{NOA}^{raw}_{i,t-2})},\\\\ \\mathrm{CHATOIA}_{i,t}&=\\mathrm{CHATO}_{i,t}-\\overline{\\mathrm{CHATO}}_{\\mathrm{industry},t}. \\end{aligned}\\)",
        "formula_direction": "+1",
        "data_fields": "Compustat: AT, CEQ, CHE, DLC, DLTT, IVAO, MIB, PSTK, SALE; Industry classification",
        "calculation_window": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "accounting_lag": {
          "zh": "年频与季频结果均在 CIZ 中对齐；最终比较 datadate，取较新的可用值。",
          "en": "CIZ aligns both annual and quarterly results, then selects the newer available value by datadate."
        },
        "source_label": "EquityChars CIZ · accounting.py · L1101, L1749",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L1101",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "1101,1749",
        "code_frequency": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "reconcile_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/impute_rank_output.py#L85",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写。年频与季频同时可用时，最终输出按 datadate 选择较新的非空值。",
          "en": "Formula transcribed from chars_ciz. When annual and quarterly values both exist, final output selects the newer non-null value by datadate."
        }
      },
      "method_design": {
        "family": "cross_sectional_return_regression",
        "summary": {
          "zh": "论文按未经行业调整的资产周转率变动形成年度十分位秩，并在未来收益回归中估计从最低到最高十分位的预测差异；该度量并非项目采用的行业调整版本。",
          "en": "The published article ranks unadjusted ΔATO annually and reports that moving from the bottom to the top decile predicts about 7.8% future abnormal return before the full controls and about 5.2% after them. The exact repository signal is industry-adjusted, which this article does not construct, so the published hedge cannot be treated as an exact chatoia strategy."
        },
        "signal_role": {
          "zh": "最接近的文献解释变量",
          "en": "Closest source-paper predictor"
        },
        "estimand": {
          "zh": "未来一年异常收益",
          "en": "One-year-ahead abnormal return"
        },
        "interpretation": {
          "zh": "识别对象是未经行业调整变量的回归预测差异，既非独立零成本组合，也不与项目特征完全相同。",
          "en": ""
        }
      }
    },
    {
      "id": "chcsho",
      "name": "Change in shares outstanding",
      "signal_definition": "Change in shares outstanding",
      "sort_variable": "chcsho",
      "code_direction": "L-H",
      "paper_direction": "not-simple",
      "direction_label": "非简单多空",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "Low",
      "code_short_leg": "High",
      "code_notes": "Repo attribution: Pontiff and Woodgate (2008). Formula table direction: -1.",
      "raw_signal": "ISSUE(t,t-11) = ln(split-adjusted shares outstanding at t) - ln(split-adjusted shares outstanding at t-11)",
      "construction_summary": "The published article uses the annual log change in split-adjusted CRSP shares outstanding in Fama-MacBeth predictive regressions. It reports a negative relation with future returns but does not define a characteristic-sorted hedge portfolio.",
      "sample_and_timing": "The primary sample contains monthly CRSP observations from January 1970-December 2003; an out-of-sample test covers September 1932-December 1969.",
      "breakpoints": "N/A; predictive cross-sectional regressions rather than portfolio sorts.",
      "weighting": "N/A; no standalone hedge portfolio.",
      "rebalancing_frequency": "monthly regressions with a rolling annual signal",
      "holding_period": "One month, six months, one year, second-year annual, and third-year annual holding-period dependent variables.",
      "paper_long_leg": "N/A",
      "paper_short_leg": "N/A",
      "confidence": "high",
      "evidence_type": "publisher_final_jstor_pdf",
      "evidence_pointer": "extracted-text/pontiff-2008-publisher.txt:151-216,565-615,743-783",
      "reviewer_notes": "Verified against the final Journal of Finance/JSTOR PDF. The annual ISSUE coefficient is negative and significant, but no paper-defined high-minus-low or low-minus-high portfolio exists.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "We use this measure of adjusted shares to compute annual share i time t as ISSUEtyt-ii = Ln(AdjustedSharest) ?",
          "page": 4,
          "line_start": 151,
          "line_end": 216,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/pontiff-2008-publisher.txt",
          "href": "../papers/pontiff-2008/pontiff-2008-publisher.pdf#page=4",
          "open_label": "查看 PDF 第 4 页"
        },
        {
          "text": "924 The Journal of Finance In our regression tables we refer to the annual issuance variable as ISSUE and the 5-year Daniel and Titman issuance variable as DT ISSUE.",
          "page": 5,
          "line_start": 151,
          "line_end": 216,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/pontiff-2008-publisher.txt",
          "href": "../papers/pontiff-2008/pontiff-2008-publisher.pdf#page=5",
          "open_label": "查看 PDF 第 5 页"
        },
        {
          "text": "From the monthly holding period regressions, annual share issuance has a slope of ?2.23, implying that a one-standard deviation change (0.15) in share issuance is associated with a 0.33% decrease in the monthly cross-sectional return.",
          "page": 12,
          "line_start": 565,
          "line_end": 615,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/pontiff-2008-publisher.txt",
          "href": "../papers/pontiff-2008/pontiff-2008-publisher.pdf#page=12",
          "open_label": "查看 PDF 第 12 页"
        },
        {
          "text": "932 The Journal of Finance Table III Fama-MacBeth Cross-Sectional Regressions, 1970-2003 Fama-MacBeth cross-sectional regressions results are computed for stock returns of various hold ing periods (each panel gives the appropriate holding period) on the following variables: the natural logarithm of the ratio of the book value of equity to the market value of equity measured at the end of December t?1, BM; a book-to-market dummy variable that is zero if BM is missing, BM Dum.; the natural logarithm of market equity measured at the end of June, ME; the past 6 months stock return as a proxy for momentum, MOM; and the change in the logarithm of the number of shares outstanding adjusted for split",
          "page": 13,
          "line_start": 565,
          "line_end": 615,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/pontiff-2008-publisher.txt",
          "href": "../papers/pontiff-2008/pontiff-2008-publisher.pdf#page=13",
          "open_label": "查看 PDF 第 13 页"
        },
        {
          "text": "Overall, we interpret these results as evidence that both issuance m predict cross-sectional returns, though annual issuance in particula stronger ability to predict cross-sectional returns than other popular va Since cross-sectional equity issuance is negatively related to future r these findings are consistent with a model in which managers issu when it is overvalued and repurchase equity when it is undervalued.",
          "page": 15,
          "line_start": 743,
          "line_end": 783,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/pontiff-2008-publisher.txt",
          "href": "../papers/pontiff-2008/pontiff-2008-publisher.pdf#page=15",
          "open_label": "查看 PDF 第 15 页"
        },
        {
          "text": "From the monthly regressions, annual issuance only explains 0.22% of the average cross-sectional return variance, whereas 5-year issuance only explains 0.53% of the average cross-sectional return vari ance.",
          "page": 16,
          "line_start": 743,
          "line_end": 783,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/pontiff-2008-publisher.txt",
          "href": "../papers/pontiff-2008/pontiff-2008-publisher.pdf#page=16",
          "open_label": "查看 PDF 第 16 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "pontiff-2008",
        "title": "Share Issuance and Cross-sectional Returns",
        "authors": "Jeffrey Pontiff and Artemiza Woodgate",
        "year": "2008",
        "venue": "The Journal of Finance",
        "doi": "10.1111/j.1540-6261.2008.01335.x",
        "source_url": "https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1540-6261.2008.01335.x",
        "local_file": "papers/pontiff-2008/pontiff-2008-publisher.pdf",
        "local_href": "../papers/pontiff-2008/pontiff-2008-publisher.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 26,
        "access_status": "full_text_pdf_publisher"
      },
      "method_variants": [
        {
          "id": "pontiff-2008",
          "source_id": "pontiff-2008",
          "role": "original_paper",
          "source_label": "Share Issuance and Cross-sectional Returns",
          "source_year": "2008",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{ISSUE}_{i,t:t-11}=\\ln(\\mathrm{SplitAdjustedShares}_{i,t})-\\ln(\\mathrm{SplitAdjustedShares}_{i,t-11})\\)",
          "data_fields": "ISSUE(t,t-11) = ln(split-adjusted shares outstanding at t) - ln(split-adjusted shares outstanding at t-11)",
          "calculation_window": {
            "zh": "The primary sample contains monthly CRSP observations from January 1970-December 2003; an out-of-sample test covers September 1932-December 1969.",
            "en": "The primary sample contains monthly CRSP observations from January 1970-December 2003; an out-of-sample test covers September 1932-December 1969."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "N/A; predictive cross-sectional regressions rather than portfolio sorts. N/A; no standalone hedge portfolio. monthly regressions with a rolling annual signal One month, six months, one year, second-year annual, and third-year annual holding-period dependent variables.",
            "en": "N/A; predictive cross-sectional regressions rather than portfolio sorts. N/A; no standalone hedge portfolio. monthly regressions with a rolling annual signal One month, six months, one year, second-year annual, and third-year annual holding-period dependent variables."
          },
          "direction": "not-simple",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/pontiff-2008/pontiff-2008-publisher.pdf",
          "source_page": 4,
          "source_href": "../papers/pontiff-2008/pontiff-2008-publisher.pdf#page=4"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{CHCSHO}_{i,t}=\\frac{\\mathrm{CSHO}_{i,t}}{\\mathrm{CSHO}_{i,t-1}}-1\\)",
        "formula_direction": "-1",
        "data_fields": "Compustat: CSHO",
        "calculation_window": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "accounting_lag": {
          "zh": "年频与季频结果均在 CIZ 中对齐；最终比较 datadate，取较新的可用值。",
          "en": "CIZ aligns both annual and quarterly results, then selects the newer available value by datadate."
        },
        "source_label": "EquityChars CIZ · accounting.py · L536, L1577",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L536",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "536,1577",
        "code_frequency": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "reconcile_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/impute_rank_output.py#L85",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写。年频与季频同时可用时，最终输出按 datadate 选择较新的非空值。",
          "en": "Formula transcribed from chars_ciz. When annual and quarterly values both exist, final output selects the newer non-null value by datadate."
        }
      },
      "method_design": {
        "family": "cross_sectional_return_regression",
        "summary": {
          "zh": "将拆股调整后流通股数的年度对数变动置于逐月Fama–MacBeth预测回归，并分别考察一个月至三年的未来持有期收益。",
          "en": "The published article uses the annual log change in split-adjusted CRSP shares outstanding in Fama-MacBeth predictive regressions. It reports a negative relation with future returns but does not define a characteristic-sorted hedge portfolio."
        },
        "signal_role": {
          "zh": "横截面预测变量",
          "en": "Cross-sectional predictor"
        },
        "estimand": {
          "zh": "不同期限的未来股票收益",
          "en": "Future stock returns over several horizons"
        },
        "interpretation": {
          "zh": "方向反映横截面回归中的条件预测关系，不等同于可交易的两端组合收益。",
          "en": ""
        }
      }
    },
    {
      "id": "chempia",
      "name": "Industry-adjusted change in employees",
      "signal_definition": "Industry-adjusted change in employees",
      "sort_variable": "chempia",
      "code_direction": "L-H",
      "paper_direction": "N/A",
      "direction_label": "不适用",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "Low",
      "code_short_leg": "High",
      "code_notes": "Repo attribution: Asness, Porter, and Stevens (2000). Formula table direction: -1.",
      "raw_signal": "industry-adjusted change in employees",
      "construction_summary": "Change in employees minus the industry mean of employee change.",
      "sample_and_timing": "Annual Compustat data; the later formal appendix records annual frequency.",
      "breakpoints": "Industry demeaning; no standalone portfolio cutoffs are reported in the formal cross-check.",
      "weighting": "Not reported.",
      "rebalancing_frequency": "Annual.",
      "holding_period": "Not reported.",
      "paper_long_leg": "Lower industry-adjusted employee growth, following the repository sign only.",
      "paper_short_leg": "Higher industry-adjusted employee growth, following the repository sign only.",
      "confidence": "medium",
      "evidence_type": "formal_published_si_crosscheck",
      "evidence_pointer": "extracted-text/fallahgoul-2024-supplement.txt:4522-4528@supporting-information/fallahgoul-2024/fallahgoul-franstianto-lin-2024-supplement.pdf; extracted-text/gu-2020-internet-appendix.txt:2144-2149@supporting-information/gu-2020/gu-kelly-xiu-2020-internet-appendix.pdf",
      "reviewer_notes": "The exact definition and annual frequency are confirmed. Gu et al. list Asness-Porter-Stevens as a 1994 working paper, while the repository groups it under 2000; this year mismatch and the absence of a published standalone spread keep confidence at medium.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "chempia Industry-adjusted change in employees Compustat Annual Change in employees (chemp) − industry mean of change in employees",
          "page": 38,
          "line_start": 4522,
          "line_end": 4528,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/fallahgoul-2024-supplement.txt",
          "source_file": "supporting-information/fallahgoul-2024/fallahgoul-franstianto-lin-2024-supplement.pdf",
          "href": "../supporting-information/fallahgoul-2024/fallahgoul-franstianto-lin-2024-supplement.pdf#page=38",
          "open_label": "查看 PDF 第 38 页"
        },
        {
          "text": "chempia Industry-adjusted change in employees Asness, Porter & Stevens 1994, WP Compustat Annual",
          "page": 14,
          "line_start": 2144,
          "line_end": 2149,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/gu-2020-internet-appendix.txt",
          "source_file": "supporting-information/gu-2020/gu-kelly-xiu-2020-internet-appendix.pdf",
          "href": "../supporting-information/gu-2020/gu-kelly-xiu-2020-internet-appendix.pdf#page=14",
          "open_label": "查看 PDF 第 14 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "asness-2000",
        "title": "Predicting Stock Returns Using Industry-Relative Firm Characteristics",
        "authors": "Clifford S. Asness; R. Burt Porter; Ross L. Stevens",
        "year": "2000",
        "venue": "AQR Capital Management working paper",
        "doi": "10.2139/ssrn.213872",
        "source_url": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=213872",
        "local_file": "",
        "local_href": "",
        "artifact_type": "none",
        "pdf_pages": null,
        "access_status": "not_requested"
      },
      "method_variants": [
        {
          "id": "asness-2000",
          "source_id": "asness-2000",
          "role": "original_paper",
          "source_label": "Asness, Porter & Stevens — Predicting Stock Returns Using Industry-Relative Firm Characteristics",
          "source_year": "2000",
          "formula": "CHEMPIA(i,t) = ΔEMP(i,t) − mean[ΔEMP(j,t) | j ∈ industry(i)]",
          "formula_latex": "\\(\\displaystyle \\mathrm{CHEMPIA}_{i,t}=\\Delta\\mathrm{EMP}_{i,t}-\\overline{\\Delta\\mathrm{EMP}}_{\\mathrm{industry},t}\\)",
          "data_fields": "论文概念：current and lagged employment、industry membership",
          "calculation_window": {
            "zh": "年度公司特征；同一期横截面行业均值。原文样本为 1963-06 至 1998-11。",
            "en": "Annual firm characteristic and same-period cross-sectional industry mean. The source sample runs from June 1963 to November 1998."
          },
          "accounting_lag": {
            "zh": "公开摘要未说明。",
            "en": "Not stated in the public abstract."
          },
          "portfolio_rule": {
            "zh": "论文把员工变化拆为行业内与跨行业部分；公开摘要未给出可直接复刻的独立 L-H 组合窗口。",
            "en": "The paper decomposes employee change into within- and across-industry components; the public abstract does not state a standalone replicable L-H portfolio window."
          },
          "direction": "N/A",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "这是 chempia 的直接来源；不是一般雇员增长论文。",
            "en": "This is the direct source for chempia, rather than a generic employee-growth paper."
          },
          "source_path": "",
          "source_page": null,
          "source_href": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=213872"
        },
        {
          "id": "fallahgoul-2024",
          "source_id": "fallahgoul-2024",
          "role": "published_replication",
          "source_label": "Fallahgoul, Franstianto & Lin — Journal Supplement",
          "source_year": "2024",
          "formula": "CHEMPIA(i,t) = ΔEMP(i,t) − mean[ΔEMP(j,t) | j ∈ industry(i)]",
          "formula_latex": "\\(\\displaystyle \\mathrm{CHEMPIA}_{i,t}=\\Delta\\mathrm{EMP}_{i,t}-\\overline{\\Delta\\mathrm{EMP}}_{\\mathrm{industry},t}\\)",
          "data_fields": "Compustat: employee change and industry membership",
          "calculation_window": {
            "zh": "年频；同一期行业横截面去均值。",
            "en": "Annual; demeaned within the same-period industry cross-section."
          },
          "accounting_lag": {
            "zh": "该定义表未注明。",
            "en": "Not stated in the definition table."
          },
          "portfolio_rule": {
            "zh": "该行用于公式复核，没有单列组合形成规则。",
            "en": "This row cross-checks the formula and does not separately state portfolio formation."
          },
          "direction": "未注明",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "正式期刊补充材料明确写出行业调整公式。",
            "en": "The formal journal supplement states the industry-adjusted formula explicitly."
          },
          "source_path": "supporting-information/fallahgoul-2024/fallahgoul-franstianto-lin-2024-supplement.pdf",
          "source_page": 38,
          "source_href": "../supporting-information/fallahgoul-2024/fallahgoul-franstianto-lin-2024-supplement.pdf#page=38"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{HIRE}_{i,t}=\\begin{cases} (\\mathrm{EMP}_{i,t}-\\mathrm{EMP}_{i,t-1})/\\mathrm{EMP}_{i,t-1}, & \\text{available},\\\\ 0, & \\text{otherwise}, \\end{cases}\\quad \\mathrm{CHEMPIA}_{i,t}=\\mathrm{HIRE}_{i,t}-\\overline{\\mathrm{HIRE}}_{\\mathrm{industry},t}\\)",
        "formula_direction": "-1",
        "data_fields": "Compustat: EMP; Industry classification",
        "calculation_window": {
          "zh": "年频。",
          "en": "Annual."
        },
        "accounting_lag": {
          "zh": "按 chars_ciz 年频 jdate 对齐；未另行添加页面假设。",
          "en": "Aligned by the chars_ciz annual jdate rule; the page adds no extra assumption."
        },
        "source_label": "EquityChars CIZ · accounting.py · L1077",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L1077",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "1077",
        "code_frequency": {
          "zh": "年频。",
          "en": "Annual."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      }
    },
    {
      "id": "chinv",
      "name": "Change in inventory",
      "signal_definition": "Change in inventory",
      "sort_variable": "chinv",
      "code_direction": "L-H",
      "paper_direction": "L-H",
      "direction_label": "低值做多 · 高值做空",
      "agreement": "yes",
      "status": "paper_direction_verified",
      "code_long_leg": "Low",
      "code_short_leg": "High",
      "code_notes": "Repo attribution: Thomas and Zhang (2002). Formula table has no entry for this signal.",
      "raw_signal": "change in total inventory",
      "construction_summary": "The published article sorts inventory changes into annual deciles and measures 12-month size-adjusted returns beginning four months after fiscal year-end; its hedge return is the lowest inventory-change decile minus the highest.",
      "sample_and_timing": "Annual Compustat/CRSP sample; 28 annual hedge returns; future return window begins four months after the inventory-change fiscal year-end.",
      "breakpoints": "Annual deciles based on each year's inventory-change distribution.",
      "weighting": "Buy-and-hold stock returns adjusted by the value-weighted return of the corresponding CRSP size-decile portfolio.",
      "rebalancing_frequency": "Annual.",
      "holding_period": "12 months, beginning four months after fiscal year-end.",
      "paper_long_leg": "lowest inventory-change decile",
      "paper_short_leg": "highest inventory-change decile",
      "confidence": "high",
      "evidence_type": "publisher_final_pdf",
      "evidence_pointer": "extracted-text/thomas-2002-publisher.txt:17-24,110-116,128-143,182-205,226-257",
      "reviewer_notes": "Verified against the formal Review of Accounting Studies publisher PDF; annual deciles, return timing, adjustment, and lowest-minus-highest hedge direction are explicit.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "To assist future investigations in formulating additional explanations, we document several empirical regularities for extreme inventory change deciles.",
          "page": 1,
          "line_start": 17,
          "line_end": 24,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/thomas-2002-publisher.txt",
          "href": "../papers/thomas-2002/thomas-2002-publisher.pdf#page=1",
          "open_label": "查看 PDF 第 1 页"
        },
        {
          "text": "These decile ranks are constructed based on each year’s distribution.4 Size-adjusted return (SAR) represents the difference between the firm’s buy-and-hold return and the buy-and-hold return on a value-weighted portfolio of firms in the same CRSP size decile.",
          "page": 3,
          "line_start": 110,
          "line_end": 116,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/thomas-2002-publisher.txt",
          "href": "../papers/thomas-2002/thomas-2002-publisher.pdf#page=3",
          "open_label": "查看 PDF 第 3 页"
        },
        {
          "text": "Importance of Inventory Changes The first row in Table 1, Panel A, provides the mean size-adjusted abnormal returns (SARt+1 ) earned by different accrual deciles over the 12 month period beginning 4 months after year 0.",
          "page": 3,
          "line_start": 128,
          "line_end": 143,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/thomas-2002-publisher.txt",
          "href": "../papers/thomas-2002/thomas-2002-publisher.pdf#page=3",
          "open_label": "查看 PDF 第 3 页"
        },
        {
          "text": "SARt+1 = 12-month buy and hold return beginning 4 months after fiscal year-end of inventory change year less corresponding size portfolio buy and hold return.",
          "page": 4,
          "line_start": 182,
          "line_end": 205,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/thomas-2002-publisher.txt",
          "href": "../papers/thomas-2002/thomas-2002-publisher.pdf#page=4",
          "open_label": "查看 PDF 第 4 页"
        },
        {
          "text": "Ignoring correlations among regressors, this regression analysis is equivalent to examining hedge returns (with the signs reversed, since hedge returns are based on SARt+1 for the lowest minus SARt+1 for the highest decile), provided abnormal returns are related linearly to the different decile ranks.",
          "page": 5,
          "line_start": 226,
          "line_end": 257,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/thomas-2002-publisher.txt",
          "href": "../papers/thomas-2002/thomas-2002-publisher.pdf#page=5",
          "open_label": "查看 PDF 第 5 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "thomas-2002",
        "title": "Inventory Changes and Future Returns",
        "authors": "Jacob K. Thomas and Huai Zhang",
        "year": "2002",
        "venue": "Review of Accounting Studies",
        "doi": "10.1023/A:1020221918065",
        "source_url": "https://doi.org/10.1023/A:1020221918065",
        "local_file": "papers/thomas-2002/thomas-2002-publisher.pdf",
        "local_href": "../papers/thomas-2002/thomas-2002-publisher.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 25,
        "access_status": "full_text_pdf_publisher"
      },
      "method_variants": [
        {
          "id": "thomas-2002",
          "source_id": "thomas-2002",
          "role": "original_paper",
          "source_label": "Inventory Changes and Future Returns",
          "source_year": "2002",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{CHINV}_{i,t}=\\frac{\\mathrm{INVT}_{i,t}-\\mathrm{INVT}_{i,t-1}}{(\\mathrm{AT}_{i,t}+\\mathrm{AT}_{i,t-1})/2}\\)",
          "data_fields": "change in total inventory",
          "calculation_window": {
            "zh": "Annual Compustat/CRSP sample; 28 annual hedge returns; future return window begins four months after the inventory-change fiscal year-end.",
            "en": "Annual Compustat/CRSP sample; 28 annual hedge returns; future return window begins four months after the inventory-change fiscal year-end."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Annual deciles based on each year's inventory-change distribution. Buy-and-hold stock returns adjusted by the value-weighted return of the corresponding CRSP size-decile portfolio. Annual. 12 months, beginning four months after fiscal year-end.",
            "en": "Annual deciles based on each year's inventory-change distribution. Buy-and-hold stock returns adjusted by the value-weighted return of the corresponding CRSP size-decile portfolio. Annual. 12 months, beginning four months after fiscal year-end."
          },
          "direction": "L-H",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/thomas-2002/thomas-2002-publisher.pdf",
          "source_page": 1,
          "source_href": "../papers/thomas-2002/thomas-2002-publisher.pdf#page=1"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{CHINV}_{i,t}=\\frac{\\mathrm{INVT}_{i,t}-\\mathrm{INVT}_{i,t-1}}{\\tfrac12(\\mathrm{AT}_{i,t}+\\mathrm{AT}_{i,t-1})}\\)",
        "formula_direction": "",
        "data_fields": "Compustat: INVT, AT",
        "calculation_window": {
          "zh": "年频。",
          "en": "Annual."
        },
        "accounting_lag": {
          "zh": "按 chars_ciz 年频 jdate 对齐；未另行添加页面假设。",
          "en": "Aligned by the chars_ciz annual jdate rule; the page adds no extra assumption."
        },
        "source_label": "EquityChars CIZ · accounting.py · L691",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L691",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "691",
        "code_frequency": {
          "zh": "年频。",
          "en": "Annual."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      }
    },
    {
      "id": "chmom",
      "name": "Change in 6-month momentum",
      "signal_definition": "Change in 6-month momentum",
      "sort_variable": "chmom",
      "code_direction": "H-L",
      "paper_direction": "H-L",
      "direction_label": "高值做多 · 低值做空",
      "agreement": "yes",
      "status": "paper_direction_supported_by_contemporaneous_summary",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "The formal formula cross-checks identify adjacent non-overlapping six-month return windows. A contemporaneous summary of Gettleman and Marks (2006) reports that high price acceleration outperforms low price acceleration, supporting H-L. The primary PDF remains unavailable, so the original breakpoints, weighting, and standalone holding period are not treated as verified.",
      "raw_signal": "change in 6-month momentum",
      "construction_summary": "Cumulative return from months t-6 through t-1 minus cumulative return from months t-12 through t-7.",
      "sample_and_timing": "Monthly CRSP signal; the contemporaneous summary reports an original 1926–2003 sample.",
      "breakpoints": "Extreme high- and low-acceleration portfolios are reported; the exact source-paper cutoffs have not been recovered.",
      "weighting": "Not recovered from the accessible source material.",
      "rebalancing_frequency": "Monthly signal formation; the source-paper portfolio rebalancing rule has not been verified.",
      "holding_period": "The contemporaneous summary reports a six-month horizon for acceleration-refined momentum; the standalone acceleration-spread holding period is not verified.",
      "paper_long_leg": "Stocks with high change in six-month momentum (high price acceleration).",
      "paper_short_leg": "Stocks with low change in six-month momentum (low price acceleration).",
      "confidence": "medium",
      "evidence_type": "formal_formula_crosscheck_and_contemporaneous_direction_summary",
      "evidence_pointer": "paper: extracted-text/fallahgoul-2024-supplement.txt:4540-4546@supporting-information/fallahgoul-2024/fallahgoul-franstianto-lin-2024-supplement.pdf; extracted-text/gu-2020-internet-appendix.txt:2158-2163@supporting-information/gu-2020/gu-kelly-xiu-2020-internet-appendix.pdf; original-record: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=802724; contemporaneous-summary: https://www.cxoadvisory.com/momentum-investing/buying-on-impulse-change-in-momentum/",
      "reviewer_notes": "Published formula tables verify CHMOM = compound(t−6,t−1) − compound(t−12,t−7). A contemporaneous paper summary reports positive high-minus-low acceleration spreads. CIZ explicitly omits the unpublished Gettleman–Marks signal, HXZ has no identical entry, and JKP lists the two return-window components separately. Direction is therefore H-L, while exact source-paper breakpoints, weights, and the standalone holding rule remain pending.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "chmom Change in 6-month momentum CRSP Monthly Cumulative returns from months t-6 to t-1 − cumulative returns from months t-12 to t-7",
          "page": 38,
          "line_start": 4540,
          "line_end": 4546,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/fallahgoul-2024-supplement.txt",
          "source_file": "supporting-information/fallahgoul-2024/fallahgoul-franstianto-lin-2024-supplement.pdf",
          "href": "../supporting-information/fallahgoul-2024/fallahgoul-franstianto-lin-2024-supplement.pdf#page=38",
          "open_label": "查看 PDF 第 38 页"
        },
        {
          "text": "chmom Change in 6-month momentum Gettleman & Marks 2006, WP CRSP Monthly",
          "page": 14,
          "line_start": 2158,
          "line_end": 2163,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/gu-2020-internet-appendix.txt",
          "source_file": "supporting-information/gu-2020/gu-kelly-xiu-2020-internet-appendix.pdf",
          "href": "../supporting-information/gu-2020/gu-kelly-xiu-2020-internet-appendix.pdf#page=14",
          "open_label": "查看 PDF 第 14 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "gettleman-2006",
        "title": "Acceleration Strategies",
        "authors": "Eric Gettleman; Joseph M. Marks",
        "year": "2006",
        "venue": "SSRN Electronic Journal",
        "doi": "10.2139/ssrn.802724",
        "source_url": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=802724",
        "local_file": "",
        "local_href": "",
        "artifact_type": "none",
        "pdf_pages": null,
        "access_status": "not_requested"
      },
      "method_variants": [
        {
          "id": "gettleman-2006",
          "source_id": "gettleman-2006",
          "role": "original_paper",
          "source_label": "Acceleration Strategies",
          "source_year": "2006",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{CHMOM}_{i,t}=\\left[\\prod_{\\tau=t-6}^{t-1}(1+R_{i,\\tau})-1\\right]-\\left[\\prod_{\\tau=t-12}^{t-7}(1+R_{i,\\tau})-1\\right]\\)",
          "data_fields": "change in 6-month momentum",
          "calculation_window": {
            "zh": "月频；最近六个月（t−6 至 t−1）的累计收益减去此前六个月（t−12 至 t−7）的累计收益。",
            "en": "Monthly; cumulative return over t−6 to t−1 minus cumulative return over t−12 to t−7."
          },
          "accounting_lag": {
            "zh": "不适用；该特征仅使用月度收益。",
            "en": "Not applicable; the characteristic uses monthly returns only."
          },
          "portfolio_rule": {
            "zh": "当期资料支持做多高价格加速度、做空低价格加速度；原始论文的精确断点、加权与独立组合持有期尚未由原文核实。",
            "en": "Contemporaneous evidence supports long high price acceleration and short low price acceleration; exact original breakpoints, weighting, and standalone holding period remain unverified from the primary paper."
          },
          "direction": "H-L",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "正式发表的附录材料核实了相邻两个六个月窗口的差值。CIZ 明确未纳入该工作论文信号；HXZ 与 JKP 均未提供完全相同的差值因子。",
            "en": "Published appendices verify the difference between adjacent six-month windows. CIZ explicitly omits the working-paper signal; neither HXZ nor JKP provides the identical difference factor."
          },
          "source_path": "",
          "source_page": null,
          "source_href": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=802724"
        },
        {
          "id": "fallahgoul-2024",
          "source_id": "fallahgoul-2024",
          "role": "published_replication",
          "source_label": "Fallahgoul, Franstianto & Lin — Journal Supplement",
          "source_year": "2024",
          "formula": "CHMOM = compound(t−6,t−1) − compound(t−12,t−7)",
          "formula_latex": "\\(\\displaystyle \\mathrm{CHMOM}_{i,t}=\\left[\\prod_{\\tau=t-6}^{t-1}(1+R_{i,\\tau})-1\\right]-\\left[\\prod_{\\tau=t-12}^{t-7}(1+R_{i,\\tau})-1\\right]\\)",
          "data_fields": "CRSP: monthly RET",
          "calculation_window": {
            "zh": "月频；比较相邻两个六个月累计收益窗口。",
            "en": "Monthly; compares two adjacent six-month cumulative-return windows."
          },
          "accounting_lag": {
            "zh": "该定义表未注明额外跳月。",
            "en": "No additional skip is stated in the definition table."
          },
          "portfolio_rule": {
            "zh": "该行用于公式复核，没有单列组合形成规则。",
            "en": "This row cross-checks the formula and does not separately state portfolio formation."
          },
          "direction": "未注明",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "正式期刊补充材料给出完整窗口。",
            "en": "The formal journal supplement states both windows explicitly."
          },
          "source_path": "supporting-information/fallahgoul-2024/fallahgoul-franstianto-lin-2024-supplement.pdf",
          "source_page": 38,
          "source_href": "../supporting-information/fallahgoul-2024/fallahgoul-franstianto-lin-2024-supplement.pdf#page=38"
        },
        {
          "id": "ciz-2022-coverage",
          "source_id": "ciz-2022-coverage",
          "role": "coverage_audit",
          "source_label": "Chen & Zimmermann — Open Source Cross-Sectional Asset Pricing",
          "source_year": "2022",
          "formula": "未构造 CHMOM；Gettleman and Marks (2006) 被明确列为未纳入的工作论文信号。",
          "formula_latex": "",
          "data_fields": "",
          "calculation_window": {
            "zh": "不适用。",
            "en": "Not applicable."
          },
          "accounting_lag": {
            "zh": "不适用。",
            "en": "Not applicable."
          },
          "portfolio_rule": {
            "zh": "不适用。",
            "en": "Not applicable."
          },
          "direction": "",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "CIZ 从 HXZ 的特征库出发，但明确剔除七个未发表工作论文特征，其中包括 Gettleman and Marks (2006)。",
            "en": "CIZ starts from the HXZ characteristic set but explicitly excludes seven unpublished-working-paper signals, including Gettleman and Marks (2006)."
          },
          "source_path": "",
          "source_page": null,
          "source_href": "https://www.federalreserve.gov/econres/feds/files/2021-037pap.pdf"
        },
        {
          "id": "hxz-2020-coverage",
          "source_id": "hxz-2020-coverage",
          "role": "coverage_audit",
          "source_label": "Hou, Xue & Zhang — Replicating Anomalies",
          "source_year": "2020",
          "formula": "HXZ 特征库中没有与 CHMOM 完全相同的相邻六个月收益差。",
          "formula_latex": "",
          "data_fields": "CRSP monthly returns for related momentum signals",
          "calculation_window": {
            "zh": "不适用；这是覆盖核验而非 HXZ 构造。",
            "en": "Not applicable; this is a coverage audit rather than an HXZ construction."
          },
          "accounting_lag": {
            "zh": "不适用。",
            "en": "Not applicable."
          },
          "portfolio_rule": {
            "zh": "不适用。",
            "en": "Not applicable."
          },
          "direction": "",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "CIZ 的来源核算将 Gettleman–Marks 归于后续候选，而非 HXZ 的 240 个特征；HXZ 正文与附录也未检出该信号。",
            "en": "CIZ source accounting places Gettleman–Marks among later candidates rather than HXZ’s 240 characteristics; the HXZ paper and appendix contain no identical signal."
          },
          "source_path": "",
          "source_page": null,
          "source_href": "https://academic.oup.com/rfs/article/33/5/2019/5236964"
        },
        {
          "id": "jkp-2023-decomposition",
          "source_id": "jkp-2023-decomposition",
          "role": "component_decomposition",
          "source_label": "Jensen, Kelly & Pedersen — Is There a Replication Crisis in Finance?",
          "source_year": "2023",
          "formula": "CHMOM = ret_6_1 − ret_12_7；JKP 分别列示 ret_6_1 与 ret_12_7，但不构造二者之差。",
          "formula_latex": "",
          "data_fields": "CRSP: monthly RET",
          "calculation_window": {
            "zh": "ret_6_1 使用 t−6 至 t−1；ret_12_7 使用 t−12 至 t−7。",
            "en": "ret_6_1 uses t−6 to t−1; ret_12_7 uses t−12 to t−7."
          },
          "accounting_lag": {
            "zh": "不适用；仅使用收益。",
            "en": "Not applicable; return data only."
          },
          "portfolio_rule": {
            "zh": "JKP 对每个组成特征按国家—月份形成三分位，以非微型股确定断点，采用设上限的市值加权并持有一个月；这些规则并未用于 CHMOM 差值。",
            "en": "For each component characteristic, JKP forms country-month terciles using non-microcap breakpoints, capped value weights, and one-month holding; these rules are not applied to a CHMOM difference factor."
          },
          "direction": "",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "JKP 将两个窗口视为独立的正向动量特征（两者原文符号均为 +1）。因此它可验证 CHMOM 的代数拆分，却不能验证 CHMOM 本身的收益方向或组合设计。",
            "en": "JKP treats both windows as separate positive-signed momentum characteristics. It verifies the algebraic decomposition but not CHMOM’s own return direction or portfolio design."
          },
          "source_path": "",
          "source_page": null,
          "source_href": "https://jkpfactors.s3.amazonaws.com/documents/Documentation.pdf"
        },
        {
          "id": "novy-marx-2012",
          "source_id": "novy-marx-2012",
          "role": "related_top_journal_method",
          "source_label": "Novy-Marx — Is Momentum Really Momentum? (Journal of Financial Economics)",
          "source_year": "2012",
          "formula": "ret_12_7 = compound(t−12,t−7)",
          "formula_latex": "",
          "data_fields": "CRSP: monthly RET",
          "calculation_window": {
            "zh": "组合形成前第 12 至第 7 个月的累计收益。",
            "en": "Cumulative return over months t−12 to t−7 before portfolio formation."
          },
          "accounting_lag": {
            "zh": "不适用；仅使用收益。",
            "en": "Not applicable; return data only."
          },
          "portfolio_rule": {
            "zh": "按较早期中期动量排序；高 ret_12_7 相对低 ret_12_7。",
            "en": "Sort on intermediate-horizon past performance; high ret_12_7 relative to low ret_12_7."
          },
          "direction": "H-L",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "这是最接近的顶级金融期刊构造，但仅对应 CHMOM 的第二个组成部分，而且 CHMOM 对该部分取负号；它不是 CHMOM 的原始出处。",
            "en": "This is the closest top-finance-journal construction, but it is only CHMOM’s second component and CHMOM enters it with a negative sign; it is not the source of CHMOM."
          },
          "source_path": "",
          "source_page": null,
          "source_href": "https://www.sciencedirect.com/science/article/pii/S0304405X11001152"
        },
        {
          "id": "ardila-2021",
          "source_id": "ardila-2021",
          "role": "related_published_method",
          "source_label": "Ardila-Alvarez, Forró & Sornette — The acceleration effect and Gamma factor in asset pricing",
          "source_year": "2021",
          "formula": "Γ_i,t(f) = r_i,t(f) − r_i,t−f(f); f = 6 gives a difference between adjacent six-month returns.",
          "formula_latex": "",
          "data_fields": "Monthly stock prices or returns",
          "calculation_window": {
            "zh": "一般 Γ 在两个相邻的等长窗口间取收益差；f=6 时与 CHMOM 的窗口逻辑相同。论文基准 Γ* 另向前平移六个月。",
            "en": "General Γ differences two adjacent equal-length return windows; at f=6 its window logic matches CHMOM. The paper’s baseline Γ* is shifted back by an additional six months."
          },
          "accounting_lag": {
            "zh": "不适用；仅使用收益。",
            "en": "Not applicable; return data only."
          },
          "portfolio_rule": {
            "zh": "按 Γ* 形成市值加权十分位组合；做多高 Γ*、做空低 Γ*。",
            "en": "Value-weighted decile portfolios sorted on Γ*; long high Γ* and short low Γ*."
          },
          "direction": "H-L",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "这是后续正式发表的加速度构造，但发表在 Physica A，并非顶级金融期刊；其基准 Γ* 与 CHMOM 还存在额外六个月位移。",
            "en": "This is a later published acceleration construction in Physica A, not a top finance journal; its baseline Γ* also differs from CHMOM by an additional six-month shift."
          },
          "source_path": "",
          "source_page": null,
          "source_href": "https://doi.org/10.1016/j.physa.2020.125367"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{CHMOM}_{i,t}=\\left[\\prod_{k=1}^{6}(1+\\mathrm{RET}_{i,t-k})-1\\right]-\\left[\\prod_{k=7}^{12}(1+\\mathrm{RET}_{i,t-k})-1\\right]\\)",
        "formula_direction": "H-L",
        "data_fields": "CRSP monthly: RET",
        "calculation_window": {
          "zh": "月频；最近六个月（t−6 至 t−1）累计收益减去此前六个月（t−12 至 t−7）累计收益。",
          "en": "Monthly; cumulative return over t−6 to t−1 minus cumulative return over t−12 to t−7."
        },
        "accounting_lag": {
          "zh": "不适用；该特征仅使用月度收益。",
          "en": "Not applicable; the characteristic uses monthly returns only."
        },
        "source_label": "经审计的文献定义 · Gettleman and Marks (2006)",
        "source_url": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=802724",
        "provenance": "literature_audit_override",
        "source_commit": "",
        "code_path": "",
        "code_lines": "",
        "code_frequency": {
          "zh": "月频收益信号；无会计数据频率。",
          "en": "Monthly return signal; no accounting-data frequency."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "CIZ 明确未纳入 Gettleman and Marks (2006)。因此不得把 chmom 归到 chars_ciz/accounting.py，也不得把二元反转指标 MomRev 视为该信号的实现。",
          "en": "CIZ explicitly omits Gettleman and Marks (2006). Accordingly, chmom must not be attributed to chars_ciz/accounting.py, and the binary MomRev indicator is not an implementation of this signal."
        }
      }
    },
    {
      "id": "chpmia",
      "name": "Industry-adjusted change in profit margin",
      "signal_definition": "Industry-adjusted change in profit margin",
      "sort_variable": "chpmia",
      "code_direction": "H-L",
      "paper_direction": "not-simple",
      "direction_label": "非简单多空",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Soliman (2008). Formula table has no entry for this signal.",
      "raw_signal": "repository signal is industry-adjusted change in profit margin; closest paper variable is unadjusted ΔPM = PM(t) - PM(t-1)",
      "construction_summary": "The published article includes unadjusted ΔPM in annual decile-rank future-return regressions, but does not construct the repository's industry-adjusted variable and does not report the robust positive hedge result found for ΔATO.",
      "sample_and_timing": "38,716 firm-years from 1984-2002; future returns begin four months after fiscal year-end.",
      "breakpoints": "Annual decile ranks for the paper's unadjusted ΔPM.",
      "weighting": "N/A; regression evidence does not establish a matching industry-adjusted traded spread.",
      "rebalancing_frequency": "annual",
      "holding_period": "One year.",
      "paper_long_leg": "N/A",
      "paper_short_leg": "N/A",
      "confidence": "high",
      "evidence_type": "publisher_final_jstor_pdf",
      "evidence_pointer": "extracted-text/soliman-2008-publisher.txt:391-399,669-729,837-905,1577-1727",
      "reviewer_notes": "Verified against the final Accounting Review/JSTOR PDF. The exact industry-adjusted chpmia construction is absent, so no repository LMS direction is attributed.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "PM measures the firm's ability to control the costs incurred to generate sales and gives insight into the sensitivity of operating income to product price and cost structure.",
          "page": 7,
          "line_start": 391,
          "line_end": 399,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/soliman-2008-publisher.txt",
          "href": "../papers/soliman-2008/soliman-2008-publisher.pdf#page=7",
          "open_label": "查看 PDF 第 7 页"
        },
        {
          "text": "To implement this trading strategy, I explore whether investors understand the future implications of ARNOA as a function of the DuPont components using the following regression: R,+, = Po + pIARNOAt + p2APMt + p3AATOt + p4RSST Controls + p5RNOA, + p6PM, + pATO, + psFama-French Risk Factors + Et+l (6) where: R,,, = future stock returns are measured using compounded buy-hold market-adjusted returns (raw return minus the corresponding value-weighted return), inclusive of dividends and other distributions beginning four months after the end of the fiscal year t and continuing for one year.23 22 Because short-window return tests capture the updating of priors and represent new information, I onl",
          "page": 11,
          "line_start": 669,
          "line_end": 729,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/soliman-2008-publisher.txt",
          "href": "../papers/soliman-2008/soliman-2008-publisher.pdf#page=11",
          "open_label": "查看 PDF 第 11 页"
        },
        {
          "text": "In these tests, I use rank regressions where the co independent variable amount is replaced with its annual decile rank servative statistical tests; the variables are scale-free and the only a regression's functional form is that the relations are monotonic (Ima To create decile ranks, all the continuous variables are sorted annually groups numbered 0 to 9 each year and then divided by 9.",
          "page": 12,
          "line_start": 669,
          "line_end": 729,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/soliman-2008-publisher.txt",
          "href": "../papers/soliman-2008/soliman-2008-publisher.pdf#page=12",
          "open_label": "查看 PDF 第 12 页"
        },
        {
          "text": "Financial statement data are obtained from the Compustat annual database, and stock return data are obtained The Accounting Review, May 2008 This content downloaded from 144.214.9.191 on Sun, 26 Jul 2026 03:27:57 UTC All use subject to https://about.jstor.org/terms",
          "page": 13,
          "line_start": 837,
          "line_end": 905,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/soliman-2008-publisher.txt",
          "href": "../papers/soliman-2008/soliman-2008-publisher.pdf#page=13",
          "open_label": "查看 PDF 第 13 页"
        },
        {
          "text": "25 Removing firms with negative operating income results in a loss of about 8,500 firm-year observations from my sample (about 18 percent), which is slightly less than the percentage Hayn (1995) reports because operating income is further up the income statement and does not include special items.",
          "page": 14,
          "line_start": 837,
          "line_end": 905,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/soliman-2008-publisher.txt",
          "href": "../papers/soliman-2008/soliman-2008-publisher.pdf#page=14",
          "open_label": "查看 PDF 第 14 页"
        },
        {
          "text": "Additionally, the chance that AATO is simply measuring risk is also minimized by the low increase in adjusted R2 in Table 4 when adding the DuPont components.",
          "page": 24,
          "line_start": 1577,
          "line_end": 1727,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/soliman-2008-publisher.txt",
          "href": "../papers/soliman-2008/soliman-2008-publisher.pdf#page=24",
          "open_label": "查看 PDF 第 24 页"
        },
        {
          "text": "846 TABLE 7 Time-Series Means and t-Statistics for Coefficients from Annual Cross-Sectional Regres s of Future Abnormal Returns on the Ranks of DuPont Components R,+I = Po + plARNOAt + p2APMt + p3AATOt + p4RSST Controls + p5RNOAt + p6PM + p7ATOt + p8Fama French Risk Factors + et+ Independent Variables Model 1 Model 2 Model 3 -0.061 Intercept -2.15 -0.49 -2.83 0.001 ARNOA, 0.006 0.33 0.078 AATO, -0.513 -0.557 AWC, -0.162 -0.193 NCO -3.96 -5.26 -0.041 -0.108 -1.14 -2.29 0.070 1.41 0.110 1.04 0.000 ATO, FF Risk Adjusted The sample consists of 38,716 firm-year ob annual regressions using the Fama-MacBeth StdDevp follows: i where regressions R,t1(Future Abnormal Returns) = compoun distributions l",
          "page": 25,
          "line_start": 1577,
          "line_end": 1727,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/soliman-2008-publisher.txt",
          "href": "../papers/soliman-2008/soliman-2008-publisher.pdf#page=25",
          "open_label": "查看 PDF 第 25 页"
        },
        {
          "text": "ANCO, = change in net noncurrent operating assets is defined as NCOt - N NCO is calculated as Non-Current Operating Assets (NCOA) - Non- Operating Liabilities (NCOL), and NCOA = Total Assets (Compust #6) - Current Assets (Compustat Item #4) - Investments and Adv (Compustat Item #32), and NCOL = Total Liabilities (Compustat It - Current Liabilities (Compustat Item #5) - Long-Term Debt (Com Item #9).",
          "page": 26,
          "line_start": 1577,
          "line_end": 1727,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/soliman-2008-publisher.txt",
          "href": "../papers/soliman-2008/soliman-2008-publisher.pdf#page=26",
          "open_label": "查看 PDF 第 26 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "soliman-2008",
        "title": "The Use of DuPont Analysis by Market Participants",
        "authors": "Mark T. Soliman",
        "year": "2008",
        "venue": "The Accounting Review",
        "doi": "10.2308/accr.2008.83.3.823",
        "source_url": "https://onlinelibrary.wiley.com/doi/abs/10.2308/accr.2008.83.3.823",
        "local_file": "papers/soliman-2008/soliman-2008-publisher.pdf",
        "local_href": "../papers/soliman-2008/soliman-2008-publisher.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 32,
        "access_status": "full_text_pdf_publisher"
      },
      "method_variants": [
        {
          "id": "soliman-2008",
          "source_id": "soliman-2008",
          "role": "original_paper",
          "source_label": "The Use of DuPont Analysis by Market Participants",
          "source_year": "2008",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\Delta\\mathrm{PM}_{i,t}=\\mathrm{PM}_{i,t}-\\mathrm{PM}_{i,t-1}\\)",
          "data_fields": "repository signal is industry-adjusted change in profit margin; closest paper variable is unadjusted ΔPM = PM(t) - PM(t-1)",
          "calculation_window": {
            "zh": "38,716 firm-years from 1984-2002; future returns begin four months after fiscal year-end.",
            "en": "38,716 firm-years from 1984-2002; future returns begin four months after fiscal year-end."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Annual decile ranks for the paper's unadjusted ΔPM. N/A; regression evidence does not establish a matching industry-adjusted traded spread. annual One year.",
            "en": "Annual decile ranks for the paper's unadjusted ΔPM. N/A; regression evidence does not establish a matching industry-adjusted traded spread. annual One year."
          },
          "direction": "not-simple",
          "formula_match": "closest_paper_measure",
          "notes": {
            "zh": "论文只给出最接近口径，与项目指标不完全相同。",
            "en": "The paper provides the closest available measure; it is not identical to the project signal."
          },
          "source_path": "papers/soliman-2008/soliman-2008-publisher.pdf",
          "source_page": 7,
          "source_href": "../papers/soliman-2008/soliman-2008-publisher.pdf#page=7"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{PM}_{i,t}=\\frac{\\mathrm{IB}_{i,t}}{\\mathrm{SALE}_{i,t}},\\quad \\Delta\\mathrm{PM}_{i,t}=\\mathrm{PM}_{i,t}-\\mathrm{PM}_{i,t-1},\\quad \\mathrm{CHPMIA}_{i,t}=\\Delta\\mathrm{PM}_{i,t}-\\overline{\\Delta\\mathrm{PM}}_{\\mathrm{industry},t}\\)",
        "formula_direction": "",
        "data_fields": "Compustat: IB, SALE; industry classification",
        "calculation_window": {
          "zh": "年频。",
          "en": "Annual."
        },
        "accounting_lag": {
          "zh": "按 chars_ciz 年频 jdate 对齐；未另行添加页面假设。",
          "en": "Aligned by the chars_ciz annual jdate rule; the page adds no extra assumption."
        },
        "source_label": "EquityChars CIZ · accounting.py · L1089",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L1089",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "1089",
        "code_frequency": {
          "zh": "年频。",
          "en": "Annual."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      },
      "method_design": {
        "family": "cross_sectional_return_regression",
        "summary": {
          "zh": "论文以未经行业调整的利润率变动十分位秩进入未来一年收益回归，但未构造项目采用的行业调整利润率变动。",
          "en": "The published article includes unadjusted ΔPM in annual decile-rank future-return regressions, but does not construct the repository's industry-adjusted variable and does not report the robust positive hedge result found for ΔATO."
        },
        "signal_role": {
          "zh": "最接近的文献解释变量",
          "en": "Closest source-paper predictor"
        },
        "estimand": {
          "zh": "未来一年市场调整收益",
          "en": "One-year-ahead market-adjusted return"
        },
        "interpretation": {
          "zh": "回归检验使用的变量与项目特征并不完全相同，且论文没有定义相应的独立多空组合。",
          "en": ""
        }
      }
    },
    {
      "id": "chtx",
      "name": "Change in tax expense",
      "signal_definition": "Change in tax expense",
      "sort_variable": "chtx",
      "code_direction": "H-L",
      "paper_direction": "H-L",
      "direction_label": "高值做多 · 低值做空",
      "agreement": "yes",
      "status": "paper_direction_verified",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Thomas and Zhang (2011). Formula table direction: +1.",
      "raw_signal": "change in tax expense",
      "construction_summary": "Quarterly tax-expense surprise is explicitly arranged as a D10-D1 hedge portfolio in the original-text evidence.",
      "sample_and_timing": "Quarterly tax-expense surprise with a next-quarter follow-through.",
      "breakpoints": "D10 vs D1 decile portfolios.",
      "weighting": "Equal-weighted hedge",
      "rebalancing_frequency": "quarterly",
      "holding_period": "next quarter / delayed response window",
      "paper_long_leg": "High",
      "paper_short_leg": "Low",
      "confidence": "high",
      "evidence_type": "Scholar Gateway original-text chunk",
      "evidence_pointer": "10.1111/j.1475-679X.2011.00409.x#t2; Scholar Gateway chunk 20",
      "reviewer_notes": "This is the only row in the batch retained as an explicit long-high / short-low construction.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "Results in column 1 indicate that the positive correlation between tax expense surprises and fu ture returns is fairly monotonic across the tax expense surprise deciles, and that correlation can be represented as a 3.90% hedge return over three months, from investing long (short) in the highest (lowest) tax expense surprise decile (=6.24% -2.34%).",
          "page": 15,
          "line_start": null,
          "line_end": null,
          "method": "automatic_pdf_search",
          "method_label": "自动定位候选句",
          "text_path": "",
          "href": "../papers/thomas-2011/thomas-zhang-2011-jstor.pdf#page=15",
          "open_label": "查看 PDF 第 15 页"
        },
        {
          "text": "We calculate the mean hedge portfolio returns (decile 10 less decile 1) for the fiscal quarters ending in each calendar quarter between 1977:1 and 2006:IV for three measures of surprise: (1) seasonally differenced tax ex pense (AT), (2) seasonally differenced earnings (AE), and (3) the resid uals from quarterly regressions of seasonally differenced tax expense on seasonally differenced earnings (residual AT).",
          "page": 25,
          "line_start": null,
          "line_end": null,
          "method": "automatic_pdf_search",
          "method_label": "自动定位候选句",
          "text_path": "",
          "href": "../papers/thomas-2011/thomas-zhang-2011-jstor.pdf#page=25",
          "open_label": "查看 PDF 第 25 页"
        },
        {
          "text": "TAX EXPENSE MOMENTUM 807 differential between high and low residual A T deciles of 2.56% is lower than that based on AT but is statistically significant (^-statistic of 7.83) and eco nomically significant (equivalent to an annualized return of about 10%).18 Roughly speaking, of the total information in AT about future re turns, only a third is common to AE (which is computed as [3.90% ?2.56%]/3.90%).",
          "page": 18,
          "line_start": null,
          "line_end": null,
          "method": "automatic_pdf_search",
          "method_label": "自动定位候选句",
          "text_path": "",
          "href": "../papers/thomas-2011/thomas-zhang-2011-jstor.pdf#page=18",
          "open_label": "查看 PDF 第 18 页"
        }
      ],
      "evidence_mode": "automatic",
      "paper": {
        "id": "thomas-2011",
        "title": "Tax Expense Momentum",
        "authors": "Jacob Thomas and Frank X. Zhang",
        "year": "2011",
        "venue": "Journal of Accounting Research",
        "doi": "10.1111/j.1475-679X.2011.00409.x",
        "source_url": "https://onlinelibrary.wiley.com/doi/full/10.1111/j.1475-679X.2011.00409.x",
        "local_file": "papers/thomas-2011/thomas-zhang-2011-jstor.pdf",
        "local_href": "../papers/thomas-2011/thomas-zhang-2011-jstor.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 32,
        "access_status": "full_text_pdf_jstor"
      },
      "method_variants": [
        {
          "id": "thomas-2011",
          "source_id": "thomas-2011",
          "role": "original_paper",
          "source_label": "Tax Expense Momentum",
          "source_year": "2011",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{CHTX}_{i,q}=\\Delta_4\\mathrm{TaxExpense}_{i,q}\\)",
          "data_fields": "change in tax expense",
          "calculation_window": {
            "zh": "Quarterly tax-expense surprise with a next-quarter follow-through.",
            "en": "Quarterly tax-expense surprise with a next-quarter follow-through."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "D10 vs D1 decile portfolios. Equal-weighted hedge quarterly next quarter / delayed response window",
            "en": "D10 vs D1 decile portfolios. Equal-weighted hedge quarterly next quarter / delayed response window"
          },
          "direction": "H-L",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/thomas-2011/thomas-zhang-2011-jstor.pdf",
          "source_page": 15,
          "source_href": "../papers/thomas-2011/thomas-zhang-2011-jstor.pdf#page=15"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{CHTX}_{i,t}=\\frac{\\mathrm{TXT}_{i,t}-\\mathrm{TXT}_{i,t-1}}{\\mathrm{AT}_{i,t-1}}\\)",
        "formula_direction": "+1",
        "data_fields": "Compustat: AT, TXT",
        "calculation_window": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "accounting_lag": {
          "zh": "年频与季频结果均在 CIZ 中对齐；最终比较 datadate，取较新的可用值。",
          "en": "CIZ aligns both annual and quarterly results, then selects the newer available value by datadate."
        },
        "source_label": "EquityChars CIZ · accounting.py · L583, L1468",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L583",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "583,1468",
        "code_frequency": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "reconcile_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/impute_rank_output.py#L85",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写。年频与季频同时可用时，最终输出按 datadate 选择较新的非空值。",
          "en": "Formula transcribed from chars_ciz. When annual and quarterly values both exist, final output selects the newer non-null value by datadate."
        }
      }
    },
    {
      "id": "cinvest",
      "name": "Corporate investment",
      "signal_definition": "Corporate investment",
      "sort_variable": "cinvest",
      "code_direction": "L-H",
      "paper_direction": "L-H",
      "direction_label": "低值做多 · 高值做空",
      "agreement": "yes",
      "status": "paper_direction_verified",
      "code_long_leg": "Low",
      "code_short_leg": "High",
      "code_notes": "Repo attribution: Titman, Wei, and Xie (2004). Formula table direction: -1.",
      "raw_signal": "abnormal capital investment CI = CE(t-1) / average[CE(t-2), CE(t-3), CE(t-4)] - 1, where CE is capex scaled by sales",
      "construction_summary": "The published article measures abnormal capital investment from capital expenditures scaled by sales relative to the prior three-year average, sorts stocks into five ascending CI quintiles, and forms a CI-spread portfolio long the two lowest CI portfolios and short the two highest.",
      "sample_and_timing": "CI uses fiscal-year t-1 accounting data; returns from July of year t to June of year t+1; sample return period July 1973-June 1996.",
      "breakpoints": "CI quintiles in ascending order.",
      "weighting": "Value-weighted excess monthly returns; CI-spread has one-dollar long low-CI and one-dollar short high-CI.",
      "rebalancing_frequency": "Annual.",
      "holding_period": "12 months for year-one returns; paper also reports first through fifth post-formation years and five-year cumulative returns.",
      "paper_long_leg": "two lowest CI quintiles (1st and 2nd)",
      "paper_short_leg": "two highest CI quintiles (4th and 5th)",
      "confidence": "high",
      "evidence_type": "publisher_final_pdf",
      "evidence_pointer": "extracted-text/titman-2004-publisher.txt:138-143,188-220,367-375,442-450,746-747",
      "reviewer_notes": "Verified against the formal Journal of Financial and Quantitative Analysis publisher PDF; formula, timing, ascending quintiles, weighting, and low-minus-high CI spread are explicit.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "More specifically, we test whether returns on portfolios with low abnormal capital investments are significantly higher than those with high abnormal capital investments.",
          "page": 3,
          "line_start": 138,
          "line_end": 143,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/titman-2004-publisher.txt",
          "href": "../papers/titman-2004/titman-2004-publisher.pdf#page=3",
          "open_label": "查看 PDF 第 3 页"
        },
        {
          "text": "We use the last three-year average capital expenditures to project the firm’s formation year’s benchmark investment, and interpret firms with high CI as high investors.",
          "page": 4,
          "line_start": 188,
          "line_end": 220,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/titman-2004-publisher.txt",
          "href": "../papers/titman-2004/titman-2004-publisher.pdf#page=4",
          "open_label": "查看 PDF 第 4 页"
        },
        {
          "text": "Based on these portfolios, we form a CI-spread portfolio that has a $1 long position in the two lowest CI portfolios (the first and the second) and a $1 short position in the two highest CI portfolios (the fourth and fifth).",
          "page": 7,
          "line_start": 367,
          "line_end": 375,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/titman-2004-publisher.txt",
          "href": "../papers/titman-2004/titman-2004-publisher.pdf#page=7",
          "open_label": "查看 PDF 第 7 页"
        },
        {
          "text": "The CI -spread denotes a zero-investment portfolio that has a long position in the lowest two CI portfolios and a short position in the highest two CI portfolios.",
          "page": 8,
          "line_start": 442,
          "line_end": 450,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/titman-2004-publisher.txt",
          "href": "../papers/titman-2004/titman-2004-publisher.pdf#page=8",
          "open_label": "查看 PDF 第 8 页"
        },
        {
          "text": "The CI -spread is a zero-cost portfolio that has a $1 long position in the lowest two CI portfolios and a $1 short position in the highest two CI",
          "page": 13,
          "line_start": 746,
          "line_end": 747,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/titman-2004-publisher.txt",
          "href": "../papers/titman-2004/titman-2004-publisher.pdf#page=13",
          "open_label": "查看 PDF 第 13 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "titman-2004",
        "title": "Capital Investments and Stock Returns",
        "authors": "Sheridan Titman, K. C. John Wei, and Feixue Xie",
        "year": "2004",
        "venue": "Journal of Financial and Quantitative Analysis",
        "doi": "10.1017/S0022109000003173",
        "source_url": "https://www.cambridge.org/core/journals/journal-of-financial-and-quantitative-analysis/article/abs/capital-investments-and-stock-returns/2C5E2AD6BEBB31D61A126FC4AB6FBFA2",
        "local_file": "papers/titman-2004/titman-2004-publisher.pdf",
        "local_href": "../papers/titman-2004/titman-2004-publisher.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 24,
        "access_status": "full_text_pdf_publisher"
      },
      "method_variants": [
        {
          "id": "titman-2004",
          "source_id": "titman-2004",
          "role": "original_paper",
          "source_label": "Capital Investments and Stock Returns",
          "source_year": "2004",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{CI}_{i,t}=\\frac{\\mathrm{CE}_{i,t-1}}{\\left(\\mathrm{CE}_{i,t-2}+\\mathrm{CE}_{i,t-3}+\\mathrm{CE}_{i,t-4}\\right)/3}-1,\\qquad \\mathrm{CE}=\\frac{\\mathrm{CAPX}}{\\mathrm{SALE}}\\)",
          "data_fields": "abnormal capital investment CI = CE(t-1) / average[CE(t-2), CE(t-3), CE(t-4)] - 1, where CE is capex scaled by sales",
          "calculation_window": {
            "zh": "CI uses fiscal-year t-1 accounting data; returns from July of year t to June of year t+1; sample return period July 1973-June 1996.",
            "en": "CI uses fiscal-year t-1 accounting data; returns from July of year t to June of year t+1; sample return period July 1973-June 1996."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "CI quintiles in ascending order. Value-weighted excess monthly returns; CI-spread has one-dollar long low-CI and one-dollar short high-CI. Annual. 12 months for year-one returns; paper also reports first through fifth post-formation years and five-year cumulative returns.",
            "en": "CI quintiles in ascending order. Value-weighted excess monthly returns; CI-spread has one-dollar long low-CI and one-dollar short high-CI. Annual. 12 months for year-one returns; paper also reports first through fifth post-formation years and five-year cumulative returns."
          },
          "direction": "L-H",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/titman-2004/titman-2004-publisher.pdf",
          "source_page": 3,
          "source_href": "../papers/titman-2004/titman-2004-publisher.pdf#page=3"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{CINVEST}_{i,t}= \\frac{\\mathrm{PPENTQ}_{i,t}-\\mathrm{PPENTQ}_{i,t-1}}{\\mathrm{SALEQ}_{i,t}} -\\frac{1}{3}\\sum_{k=1}^{3} \\frac{\\mathrm{PPENTQ}_{i,t-k}-\\mathrm{PPENTQ}_{i,t-k-1}}{\\mathrm{SALEQ}_{i,t-k}}\\)",
        "formula_direction": "-1",
        "data_fields": "Compustat: PPENTQ, SALEQ",
        "calculation_window": {
          "zh": "季频。",
          "en": "Quarterly."
        },
        "accounting_lag": {
          "zh": "按 chars_ciz 的季度或事件日期对齐；未另行添加页面假设。",
          "en": "Aligned by the chars_ciz quarterly or event-date rule; the page adds no extra assumption."
        },
        "source_label": "EquityChars CIZ · accounting.py · L1947, L1965",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L1947",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "1947,1965",
        "code_frequency": {
          "zh": "季频。",
          "en": "Quarterly."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      }
    },
    {
      "id": "convind",
      "name": "Convertible debt indicator",
      "signal_definition": "Convertible debt indicator",
      "sort_variable": "convind",
      "code_direction": "L-H",
      "paper_direction": "not-simple",
      "direction_label": "非简单多空",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "Low",
      "code_short_leg": "High",
      "code_notes": "Repo attribution: Valta (2016). Formula table has no entry for this signal.",
      "raw_signal": "no paper indicator; closest priced variable is convertible debt / total debt",
      "construction_summary": "The published article defines continuous convertible-debt exposure and sorts firms with convertible debt into five quantiles; the repo binary convind label is not the paper's return-sort variable. If mapped to the continuous paper portfolio, the spread is high minus low rather than the repo L-H indicator.",
      "sample_and_timing": "U.S. CRSP/Compustat/Thomson sample, 1985-2012; fiscal year-ends in calendar t-1 are matched to July t through June t+1 returns; portfolios form monthly.",
      "breakpoints": "Five monthly quantiles among firms with convertible debt outstanding; no return-sort breakpoint for the repo binary indicator was found.",
      "weighting": "Individual-stock quantile alphas and equal- and value-weighted monthly portfolio returns.",
      "rebalancing_frequency": "Monthly.",
      "holding_period": "One month, with annual accounting data on July-to-June timing.",
      "paper_long_leg": "Closest paper strategy: highest convertible-debt proportion quintile.",
      "paper_short_leg": "Closest paper strategy: lowest convertible-debt proportion quintile.",
      "confidence": "high",
      "evidence_type": "publisher_final_pdf",
      "evidence_pointer": "extracted-text/valta-2016-publisher.txt:69-85,108-123,368-619,629-633,743-744,797-848,997-1064",
      "reviewer_notes": "Verified against the formal Journal of Financial and Quantitative Analysis publisher PDF. Repo mismatch remains: convind is binary, while the priced portfolio uses the continuous convertible-debt proportion.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "More specifically, the model predicts that expected stock returns are higher for firms that have a greater fraction of secured or con- vertible debt.",
          "page": 2,
          "line_start": 69,
          "line_end": 85,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/valta-2016-publisher.txt",
          "href": "../papers/valta-2016/valta-2016-publisher.pdf#page=2",
          "open_label": "查看 PDF 第 2 页"
        },
        {
          "text": "Finally, I find supporting evidence for the prediction that stock returns are increas- ing with the fraction of firms’ convertible debt.",
          "page": 3,
          "line_start": 108,
          "line_end": 123,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/valta-2016-publisher.txt",
          "href": "../papers/valta-2016/valta-2016-publisher.pdf#page=3",
          "open_label": "查看 PDF 第 3 页"
        },
        {
          "text": "Consider a firm with outstanding equity, perpetual straight debt with coupon (CS), and perpetual convertible debt with coupon (CC), as long as the firm’s cash flow is above the renegotiation threshold and no conversion takes place.",
          "page": 8,
          "line_start": 368,
          "line_end": 619,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/valta-2016-publisher.txt",
          "href": "../papers/valta-2016/valta-2016-publisher.pdf#page=8",
          "open_label": "查看 PDF 第 8 页"
        },
        {
          "text": "A firm has convertible and straight debt outstanding, shareholders choose the equity value-maximizing renegotiation threshold, XD , and convertible debt holders choose the debt value-maximizing conversion threshold, XC .",
          "page": 9,
          "line_start": 368,
          "line_end": 619,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/valta-2016-publisher.txt",
          "href": "../papers/valta-2016/valta-2016-publisher.pdf#page=9",
          "open_label": "查看 PDF 第 9 页"
        },
        {
          "text": "Shareholders choose the equity-value-maximizing rene- gotiation strategy given their beliefs about the debt holders’ conversion strategy.",
          "page": 10,
          "line_start": 368,
          "line_end": 619,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/valta-2016-publisher.txt",
          "href": "../papers/valta-2016/valta-2016-publisher.pdf#page=10",
          "open_label": "查看 PDF 第 10 页"
        },
        {
          "text": "https://doi.org/10.1017/S002210901600003X Published online by Cambridge University Press Valta 207 Accordingly, debt holders select an optimal conversion strategy to maximize the convertible debt value given their beliefs about shareholders’ renegotiation strategy.",
          "page": 11,
          "line_start": 368,
          "line_end": 619,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/valta-2016-publisher.txt",
          "href": "../papers/valta-2016/valta-2016-publisher.pdf#page=11",
          "open_label": "查看 PDF 第 11 页"
        },
        {
          "text": "FIGURE 2 Equity Value and Expected Stock Return Figure 2 shows the value of equity and the expected stock return for various proportions of convertible debt to total debt ϕ.",
          "page": 12,
          "line_start": 368,
          "line_end": 619,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/valta-2016-publisher.txt",
          "href": "../papers/valta-2016/valta-2016-publisher.pdf#page=12",
          "open_label": "查看 PDF 第 12 页"
        },
        {
          "text": "Hence, secured debt is the proportion of secured debt (DM) to total debt (DLC + DLTT), and convertible debt is the proportion of convertible debt",
          "page": 13,
          "line_start": 629,
          "line_end": 633,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/valta-2016-publisher.txt",
          "href": "../papers/valta-2016/valta-2016-publisher.pdf#page=13",
          "open_label": "查看 PDF 第 13 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "valta-2016",
        "title": "Strategic Default, Debt Structure, and Stock Returns",
        "authors": "Philip Valta",
        "year": "2016",
        "venue": "Journal of Financial and Quantitative Analysis",
        "doi": "10.1017/S002210901600003X",
        "source_url": "https://www.cambridge.org/core/journals/journal-of-financial-and-quantitative-analysis/article/abs/strategic-default-debt-structure-and-stock-returns/E68AD030B31B9D4E20BDA3B7EA881040",
        "local_file": "papers/valta-2016/valta-2016-publisher.pdf",
        "local_href": "../papers/valta-2016/valta-2016-publisher.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 33,
        "access_status": "full_text_pdf_publisher"
      },
      "method_variants": [
        {
          "id": "valta-2016",
          "source_id": "valta-2016",
          "role": "original_paper",
          "source_label": "Strategic Default, Debt Structure, and Stock Returns",
          "source_year": "2016",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{ConvertibleDebtShare}_{i,t}=\\frac{\\mathrm{ConvertibleDebt}_{i,t}}{\\mathrm{TotalDebt}_{i,t}}\\)",
          "data_fields": "no paper indicator; closest priced variable is convertible debt / total debt",
          "calculation_window": {
            "zh": "U.S. CRSP/Compustat/Thomson sample, 1985-2012; fiscal year-ends in calendar t-1 are matched to July t through June t+1 returns; portfolios form monthly.",
            "en": "U.S. CRSP/Compustat/Thomson sample, 1985-2012; fiscal year-ends in calendar t-1 are matched to July t through June t+1 returns; portfolios form monthly."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Five monthly quantiles among firms with convertible debt outstanding; no return-sort breakpoint for the repo binary indicator was found. Individual-stock quantile alphas and equal- and value-weighted monthly portfolio returns. Monthly. One month, with annual accounting data on July-to-June timing.",
            "en": "Five monthly quantiles among firms with convertible debt outstanding; no return-sort breakpoint for the repo binary indicator was found. Individual-stock quantile alphas and equal- and value-weighted monthly portfolio returns. Monthly. One month, with annual accounting data on July-to-June timing."
          },
          "direction": "not-simple",
          "formula_match": "closest_paper_measure",
          "notes": {
            "zh": "论文只给出最接近口径，与项目指标不完全相同。",
            "en": "The paper provides the closest available measure; it is not identical to the project signal."
          },
          "source_path": "papers/valta-2016/valta-2016-publisher.pdf",
          "source_page": 2,
          "source_href": "../papers/valta-2016/valta-2016-publisher.pdf#page=2"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{CONVIND}_{i,t}=\\mathbf{1}\\{\\mathrm{DC}_{i,t}>0\\ \\lor\\ \\mathrm{CSHRC}_{i,t}>0\\}\\)",
        "formula_direction": "",
        "data_fields": "Compustat: DC, CSHRC",
        "calculation_window": {
          "zh": "年频。",
          "en": "Annual."
        },
        "accounting_lag": {
          "zh": "按 chars_ciz 年频 jdate 对齐；未另行添加页面假设。",
          "en": "Aligned by the chars_ciz annual jdate rule; the page adds no extra assumption."
        },
        "source_label": "EquityChars CIZ · accounting.py · L933",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L933",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "933",
        "code_frequency": {
          "zh": "年频。",
          "en": "Annual."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      },
      "method_design": {
        "family": "sorted_portfolio_comparison",
        "summary": {
          "zh": "在存在可转换债务的企业中，按可转换债务占比形成五分位组合，考察个股α以及等权和市值加权组合收益；项目特征则为是否存在可转换债务的二元指标。",
          "en": "The published article defines continuous convertible-debt exposure and sorts firms with convertible debt into five quantiles; the repo binary convind label is not the paper's return-sort variable. If mapped to the continuous paper portfolio, the spread is high minus low rather than the repo L-H indicator."
        },
        "signal_role": {
          "zh": "连续代理变量",
          "en": "Continuous proxy for the project indicator"
        },
        "estimand": {
          "zh": "条件于可转换债务为正的分位数组合收益",
          "en": "Returns of conditional convertible-debt quantile portfolios"
        },
        "interpretation": {
          "zh": "论文排序的是连续债务占比而非二元指标；其端点比较不能作为项目指标的精确多空方向。",
          "en": ""
        }
      }
    },
    {
      "id": "currat",
      "name": "Current ratio",
      "signal_definition": "Current ratio",
      "sort_variable": "currat",
      "code_direction": "H-L",
      "paper_direction": "not-simple",
      "direction_label": "非简单多空",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Ou and Penman (1989). Formula table has no entry for this signal.",
      "raw_signal": "Current ratio",
      "construction_summary": "The paper treats current ratio as one accounting descriptor among a large candidate set and combines selected descriptors through a stepwise logit into Pr, the estimated probability of a one-year-ahead earnings increase. It does not form a univariate current-ratio portfolio.",
      "sample_and_timing": "Descriptors are estimated on 1965-1972 or 1973-1977 data; annual positions are formed for 1973-1983 three months after fiscal year-end.",
      "breakpoints": "The published portfolio cutoffs apply to composite Pr (>0.6 versus <=0.4), not to current ratio.",
      "weighting": "Mean monthly returns on each composite position; the reported hedge is the zero-investment difference between the two sides.",
      "rebalancing_frequency": "Annual overlapping formation with monthly portfolio rebalancing in the cumulative-return calculation.",
      "holding_period": "24 months.",
      "paper_long_leg": "Composite portfolio only: Pr > 0.6; no univariate current-ratio long leg.",
      "paper_short_leg": "Composite portfolio only: Pr <= 0.4; no univariate current-ratio short leg.",
      "confidence": "high",
      "evidence_type": "author_institution_full_text",
      "evidence_pointer": "extracted-text/ou-1989.txt:396-470 (Table 2),535-617 (Table 3),665-685 (preset strategy),860-890 (Table 6 notes); papers/ou-1989/ou-1989.pdf",
      "reviewer_notes": "The source's H-L rule is for the composite earnings-increase probability, not for this input descriptor.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "We then drop all variables for which coefficient estimates in this multivariate estimation are not significant at the 0.10 level, leaving 19 variables for the 1965-1972 period and 18 for the 1973-1977 6The first period is longer than the second because of the need to calculate an earnings drift term over four years preceding the relevant earnings prediction year and because the 1984 COMPUSTAT files used have data only from 1965 onwards.",
          "page": 9,
          "line_start": 396,
          "line_end": 470,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/ou-1989.txt",
          "href": "../papers/ou-1989/ou-1989.pdf#page=9",
          "open_label": "查看 PDF 第 9 页"
        },
        {
          "text": "1965-1972 estimation Accounting descriptor a Current ratio %A in 1 Quick ratio %A in 3 Days sales in accs. receivable 15632 %A in 5 Inventory turnover %Zl in 7 Inventory/total assets %A in 9 %A in inventory %A in sales %A in depreciation A in dividend per share Depreciation/plant assets %zi in 15 Return on opening equity A in 17 %A in (capital expenditure/ 13378 19, one-year lag Debt-equity ratio %A in 21 LT debt to equity %A in 23 Equity to fixed assets %A in 25 Times interest earned %A in 27 Sales/total assets %A in 29 Return on total assets Return on closing equity Gross margin ratio %A in 33",
          "page": 10,
          "line_start": 396,
          "line_end": 470,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/ou-1989.txt",
          "href": "../papers/ou-1989/ou-1989.pdf#page=10",
          "open_label": "查看 PDF 第 10 页"
        },
        {
          "text": "Op. profit (before dep.) to sales %A in 35 Pretax income to sales %A in 37 Net profit margin %A in 39 Sales to total cash Sales to accs. receivable Sales to inventory %A in 43 Sales to working capital %A in 45 Sales to fixed assets %A in production %A in R & D %A in ( R & D / s a l e s ) %A in advertising expense %A in (advertising/sales) %A in total assets Cash flow to total debt Working c a p i t a l / t o t a l assets 15604 0.0850 1.16 0.282",
          "page": 11,
          "line_start": 396,
          "line_end": 470,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/ou-1989.txt",
          "href": "../papers/ou-1989/ou-1989.pdf#page=11",
          "open_label": "查看 PDF 第 11 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "ou-1989",
        "title": "Financial statement analysis and the prediction of stock returns",
        "authors": "Jane A. Ou and Stephen H. Penman",
        "year": "1989",
        "venue": "Journal of Accounting and Economics",
        "doi": "10.1016/0165-4101(89)90017-7",
        "source_url": "https://doi.org/10.1016/0165-4101(89)90017-7",
        "local_file": "papers/ou-1989/ou-1989.pdf",
        "local_href": "../papers/ou-1989/ou-1989.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 35,
        "access_status": "full_text_pdf_author_institution"
      },
      "method_variants": [
        {
          "id": "ou-1989",
          "source_id": "ou-1989",
          "role": "original_paper",
          "source_label": "Financial statement analysis and the prediction of stock returns",
          "source_year": "1989",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{CurrentRatio}_{i,t}=\\frac{\\mathrm{ACT}_{i,t}}{\\mathrm{LCT}_{i,t}}\\)",
          "data_fields": "Current ratio",
          "calculation_window": {
            "zh": "Descriptors are estimated on 1965-1972 or 1973-1977 data; annual positions are formed for 1973-1983 three months after fiscal year-end.",
            "en": "Descriptors are estimated on 1965-1972 or 1973-1977 data; annual positions are formed for 1973-1983 three months after fiscal year-end."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "The published portfolio cutoffs apply to composite Pr (>0.6 versus <=0.4), not to current ratio. Mean monthly returns on each composite position; the reported hedge is the zero-investment difference between the two sides. Annual overlapping formation with monthly portfolio rebalancing in the cumulative-return calculation. 24 months.",
            "en": "The published portfolio cutoffs apply to composite Pr (>0.6 versus <=0.4), not to current ratio. Mean monthly returns on each composite position; the reported hedge is the zero-investment difference between the two sides. Annual overlapping formation with monthly portfolio rebalancing in the cumulative-return calculation. 24 months."
          },
          "direction": "not-simple",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/ou-1989/ou-1989.pdf",
          "source_page": 9,
          "source_href": "../papers/ou-1989/ou-1989.pdf#page=9"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{CURRAT}_{i,t}=\\frac{\\mathrm{ACT}_{i,t}}{\\mathrm{LCT}_{i,t}}\\)",
        "formula_direction": "",
        "data_fields": "Compustat: ACT, LCT",
        "calculation_window": {
          "zh": "年频。",
          "en": "Annual."
        },
        "accounting_lag": {
          "zh": "按 chars_ciz 年频 jdate 对齐；未另行添加页面假设。",
          "en": "Aligned by the chars_ciz annual jdate rule; the page adds no extra assumption."
        },
        "source_label": "EquityChars CIZ · accounting.py · L801",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L801",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "801",
        "code_frequency": {
          "zh": "年频。",
          "en": "Annual."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      },
      "method_design": {
        "family": "multivariate_prediction_model",
        "summary": {
          "zh": "流动比率作为候选会计变量进入逐步Logit模型，用于估计下一年度盈利增加的概率Pr；投资组合按Pr阈值形成，而非按流动比率单独排序。",
          "en": "The paper treats current ratio as one accounting descriptor among a large candidate set and combines selected descriptors through a stepwise logit into Pr, the estimated probability of a one-year-ahead earnings increase. It does not form a univariate current-ratio portfolio."
        },
        "signal_role": {
          "zh": "多变量模型的候选解释变量",
          "en": "Candidate predictor in a multivariate model"
        },
        "estimand": {
          "zh": "下一年度盈利增加的预测概率Pr",
          "en": "Predicted probability Pr of a one-year-ahead earnings increase"
        },
        "interpretation": {
          "zh": "该变量仅是综合预测模型的输入；论文交易对象是预测概率Pr，而不是该变量的单变量多空组合。",
          "en": ""
        }
      }
    },
    {
      "id": "depr",
      "name": "Depreciation / PP and E",
      "signal_definition": "Depreciation / PP and E",
      "sort_variable": "depr",
      "code_direction": "H-L",
      "paper_direction": "not-simple",
      "direction_label": "非简单多空",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Holthausen and Larcker (1992). Formula table direction: +1.",
      "raw_signal": "depreciation divided by plant assets",
      "construction_summary": "Depreciation/plant assets is one of 60 candidate ratios in multivariate stepwise-logit models predicting the sign of subsequent 12-month excess returns. It enters eight of the twelve models, six times positively and twice negatively; the paper sorts the composite predicted-return probability, not this ratio alone.",
      "sample_and_timing": "Models are estimated separately for NYSE/AMEX and OTC firms on 1973-1977 and 1978-1982 data and tested out of sample through 1988; accounting data are assumed available four months after fiscal year-end.",
      "breakpoints": "Composite probability-score deciles based on in-sample cutoffs; portfolios 1-3 are long and 8-10 short. No standalone depreciation breakpoint.",
      "weighting": "Pooled equal-weighted observations and an implementable annual weighting scheme are both reported for the composite strategy.",
      "rebalancing_frequency": "Annual signal/portfolio formation.",
      "holding_period": "12 months primarily; 24-, 36-, and 48-month buy-and-hold results also reported.",
      "paper_long_leg": "N/A",
      "paper_short_leg": "N/A",
      "confidence": "high",
      "evidence_type": "publisher_final_pdf",
      "evidence_pointer": "extracted-text/holthausen-1992-publisher.txt:300-339,524-543,738-792",
      "reviewer_notes": "Verified against the formal 39-page Journal of Accounting and Economics PDF. Because depreciation is only an input to a changing multivariate model and its coefficient sign is not invariant, no standalone H-L/L-H direction is attributable.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "Models which predict Jensen alphas are somewhat less correlated (0.25 for NYSE/AMEX correlated 0.44 for NYSE/AMEX 6T~o variables, depreciation divided by plant assets and percentage change in total assets, enter the models eight times.",
          "page": 7,
          "line_start": 300,
          "line_end": 339,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/holthausen-1992-publisher.txt",
          "href": "../papers/holthausen-1992/holthausen-1992-publisher.pdf#page=7",
          "open_label": "查看 PDF 第 7 页"
        },
        {
          "text": "In the portfolio trading strategies which follow, observations considered predictions of positive excess returns (the long portfolio), and obser- vations assigned to portfolios 8 to 10 are considered predictions excess returns (the short portfolio).",
          "page": 11,
          "line_start": 524,
          "line_end": 543,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/holthausen-1992-publisher.txt",
          "href": "../papers/holthausen-1992/holthausen-1992-publisher.pdf#page=11",
          "open_label": "查看 PDF 第 11 页"
        },
        {
          "text": "Calculate buy-and-hold market-adjusted returns starting at the beginning of the fourth month after the fiscal year-end, April 1979, for 12-, 24-, 36-, and 48-month holding periods. “For example, suppose a firm’s returns are no longer available 30 months after it entered the long or short portfolio of the trading strategy.",
          "page": 15,
          "line_start": 738,
          "line_end": 792,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/holthausen-1992-publisher.txt",
          "href": "../papers/holthausen-1992/holthausen-1992-publisher.pdf#page=15",
          "open_label": "查看 PDF 第 15 页"
        },
        {
          "text": "Calculate average long, short, and hedge market-adjusted portfolio returns (based on one of two weighting schemes) for 12-, 24-, 36-, and 48-month holding periods.",
          "page": 16,
          "line_start": 738,
          "line_end": 792,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/holthausen-1992-publisher.txt",
          "href": "../papers/holthausen-1992/holthausen-1992-publisher.pdf#page=16",
          "open_label": "查看 PDF 第 16 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "holthausen-1992",
        "title": "The prediction of stock returns using financial statement information",
        "authors": "Robert W. Holthausen; David F. Larcker",
        "year": "1992",
        "venue": "Journal of Accounting and Economics, 15(2-3), 373-411",
        "doi": "10.1016/0165-4101(92)90025-W",
        "source_url": "https://doi.org/10.1016/0165-4101(92)90025-W",
        "local_file": "papers/holthausen-1992/holthausen-1992-publisher.pdf",
        "local_href": "../papers/holthausen-1992/holthausen-1992-publisher.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 39,
        "access_status": "full_text_pdf_publisher"
      },
      "method_variants": [
        {
          "id": "holthausen-1992",
          "source_id": "holthausen-1992",
          "role": "original_paper",
          "source_label": "The prediction of stock returns using financial statement information",
          "source_year": "1992",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{DEPR}_{i,t}=\\frac{\\mathrm{DP}_{i,t}}{\\mathrm{PlantAssets}_{i,t}}\\)",
          "data_fields": "depreciation divided by plant assets",
          "calculation_window": {
            "zh": "Models are estimated separately for NYSE/AMEX and OTC firms on 1973-1977 and 1978-1982 data and tested out of sample through 1988; accounting data are assumed available four months after fiscal year-end.",
            "en": "Models are estimated separately for NYSE/AMEX and OTC firms on 1973-1977 and 1978-1982 data and tested out of sample through 1988; accounting data are assumed available four months after fiscal year-end."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Composite probability-score deciles based on in-sample cutoffs; portfolios 1-3 are long and 8-10 short. No standalone depreciation breakpoint. Pooled equal-weighted observations and an implementable annual weighting scheme are both reported for the composite strategy. Annual signal/portfolio formation. 12 months primarily; 24-, 36-, and 48-month buy-and-hold results also reported.",
            "en": "Composite probability-score deciles based on in-sample cutoffs; portfolios 1-3 are long and 8-10 short. No standalone depreciation breakpoint. Pooled equal-weighted observations and an implementable annual weighting scheme are both reported for the composite strategy. Annual signal/portfolio formation. 12 months primarily; 24-, 36-, and 48-month buy-and-hold results also reported."
          },
          "direction": "not-simple",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/holthausen-1992/holthausen-1992-publisher.pdf",
          "source_page": 7,
          "source_href": "../papers/holthausen-1992/holthausen-1992-publisher.pdf#page=7"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{DEPR}_{i,t}=\\frac{\\mathrm{DP}_{i,t}}{\\mathrm{PPENT}_{i,t}}\\)",
        "formula_direction": "+1",
        "data_fields": "Compustat: DP, PPENT",
        "calculation_window": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "accounting_lag": {
          "zh": "年频与季频结果均在 CIZ 中对齐；最终比较 datadate，取较新的可用值。",
          "en": "CIZ aligns both annual and quarterly results, then selects the newer available value by datadate."
        },
        "source_label": "EquityChars CIZ · accounting.py · L613, L1681",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L613",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "613,1681",
        "code_frequency": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "reconcile_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/impute_rank_output.py#L85",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写。年频与季频同时可用时，最终输出按 datadate 选择较新的非空值。",
          "en": "Formula transcribed from chars_ciz. When annual and quarterly values both exist, final output selects the newer non-null value by datadate."
        }
      },
      "method_design": {
        "family": "multivariate_prediction_model",
        "summary": {
          "zh": "折旧与固定资产之比属于60个候选比率之一，进入预测随后12个月超额收益符号的逐步Logit模型；不同模型中的入选频率与系数符号并不完全一致。",
          "en": "Depreciation/plant assets is one of 60 candidate ratios in multivariate stepwise-logit models predicting the sign of subsequent 12-month excess returns. It enters eight of the twelve models, six times positively and twice negatively; the paper sorts the composite predicted-return probability, not this ratio alone."
        },
        "signal_role": {
          "zh": "多变量模型的候选解释变量",
          "en": "Candidate predictor in a multivariate model"
        },
        "estimand": {
          "zh": "未来12个月超额收益为正的预测概率",
          "en": "Predicted probability of a positive 12-month excess return"
        },
        "interpretation": {
          "zh": "论文按综合预测概率形成组合，而非对该比率进行单变量排序，因而不存在唯一的单变量多空方向。",
          "en": ""
        }
      }
    },
    {
      "id": "divi",
      "name": "Dividend initiation",
      "signal_definition": "Dividend initiation",
      "sort_variable": "divi",
      "code_direction": "H-L",
      "paper_direction": "not-simple",
      "direction_label": "非简单多空",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Michaely, Thaler, and Womack (1995). Formula table has no entry for this signal.",
      "raw_signal": "cash dividend initiation event",
      "construction_summary": "Event study of first cash dividend payments; computes buy-and-hold excess returns for initiation firms versus benchmarks, and in the naive trading rule buys initiation-event stocks after announcement with an offsetting short position in the CRSP equal-weighted index.",
      "sample_and_timing": "NYSE/AMEX firms initiating cash dividends during 1964-1988; 561 initiation events; event window and post-event returns measured relative to announcement.",
      "breakpoints": "Event group, not cross-sectional breakpoints.",
      "weighting": "Average excess returns across event firms; naive rule uses equal-dollar long stock position offset by short CRSP equal-weighted index.",
      "rebalancing_frequency": "Event-driven.",
      "holding_period": "Three-day event window plus one- and three-year post-event buy-and-hold excess returns; naive rule holds one year / 252 trading days.",
      "paper_long_leg": "initiation-event stocks",
      "paper_short_leg": "CRSP equal-weighted index / benchmark offset",
      "confidence": "high",
      "evidence_type": "extracted_text",
      "evidence_pointer": "extracted-text/michaely-1995.txt:207-233,504-535,712-719,1591-1602",
      "reviewer_notes": "Event-group construction, not a high-minus-low continuous sort.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "(Reinstitution of a cash dividend is not considered a dividend initiation for our purposes.) The following criteria are used for inclusion in our initia- tion sample: 1.",
          "page": 5,
          "line_start": 207,
          "line_end": 233,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/michaely-1995.txt",
          "href": "../papers/michaely-1995/michaely-thaler-womack-1995-jstor.pdf#page=5",
          "open_label": "查看 PDF 第 5 页"
        },
        {
          "text": "More precisely, for each stock, the excess return is defined as the geometrically compounded (buy-and-hold) return on the stock minus the geometrically compounded return on either (1) the equally-weighted CRSP index including dividends, (2) the appropriate CRSP market-capitalization decile, (3) the equally-weighted market index adjusted for the beta of each stock, or (4) a matching firm in the same industry (two-digit SIC code) that is closest in market capitalization: b b ERj(a to b) = rJ t=a t=a (1 + Rjt) - 7 (I + MRt) (1) where ERj(a to b) = Excess return for firm j from time period a to b.",
          "page": 11,
          "line_start": 504,
          "line_end": 535,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/michaely-1995.txt",
          "href": "../papers/michaely-1995/michaely-thaler-womack-1995-jstor.pdf#page=11",
          "open_label": "查看 PDF 第 11 页"
        },
        {
          "text": "For initiating firms, the stock prices continue to rise even after the initiation announcement: the first year excess return is 7.5 percent, significantly different from zero (t = 3.37) and the three-year excess return is + 24.8 percent (t = 3.81).",
          "page": 14,
          "line_start": 712,
          "line_end": 719,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/michaely-1995.txt",
          "href": "../papers/michaely-1995/michaely-thaler-womack-1995-jstor.pdf#page=14",
          "open_label": "查看 PDF 第 14 页"
        },
        {
          "text": "For each initiation event in our sample we buy a given long position (say $1,000) in the stock at the closing price on the day after the initiation announcement, and offset this position by selling short the market (as measured by the CRSP equally-weighted index).",
          "page": 29,
          "line_start": 1591,
          "line_end": 1602,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/michaely-1995.txt",
          "href": "../papers/michaely-1995/michaely-thaler-womack-1995-jstor.pdf#page=29",
          "open_label": "查看 PDF 第 29 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "michaely-1995",
        "title": "Price Reactions to Dividend Initiations and Omissions: Overreaction or Drift?",
        "authors": "Roni Michaely, Richard H. Thaler, and Kent L. Womack",
        "year": "1995",
        "venue": "The Journal of Finance",
        "doi": "10.1111/j.1540-6261.1995.tb04796.x",
        "source_url": "https://doi.org/10.1111/j.1540-6261.1995.tb04796.x",
        "local_file": "papers/michaely-1995/michaely-thaler-womack-1995-jstor.pdf",
        "local_href": "../papers/michaely-1995/michaely-thaler-womack-1995-jstor.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 37,
        "access_status": "full_text_pdf_jstor"
      },
      "method_variants": [
        {
          "id": "michaely-1995",
          "source_id": "michaely-1995",
          "role": "original_paper",
          "source_label": "Price Reactions to Dividend Initiations and Omissions: Overreaction or Drift?",
          "source_year": "1995",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{DIVI}_{i,t}=\\mathbf{1}\\!\\left\\{\\mathrm{Dividend}_{i,t}>0,\\ \\mathrm{Dividend}_{i,t-1}=0\\right\\}\\)",
          "data_fields": "cash dividend initiation event",
          "calculation_window": {
            "zh": "NYSE/AMEX firms initiating cash dividends during 1964-1988; 561 initiation events; event window and post-event returns measured relative to announcement.",
            "en": "NYSE/AMEX firms initiating cash dividends during 1964-1988; 561 initiation events; event window and post-event returns measured relative to announcement."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Event group, not cross-sectional breakpoints. Average excess returns across event firms; naive rule uses equal-dollar long stock position offset by short CRSP equal-weighted index. Event-driven. Three-day event window plus one- and three-year post-event buy-and-hold excess returns; naive rule holds one year / 252 trading days.",
            "en": "Event group, not cross-sectional breakpoints. Average excess returns across event firms; naive rule uses equal-dollar long stock position offset by short CRSP equal-weighted index. Event-driven. Three-day event window plus one- and three-year post-event buy-and-hold excess returns; naive rule holds one year / 252 trading days."
          },
          "direction": "not-simple",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/michaely-1995/michaely-thaler-womack-1995-jstor.pdf",
          "source_page": 5,
          "source_href": "../papers/michaely-1995/michaely-thaler-womack-1995-jstor.pdf#page=5"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{DIVI}_{i,t}=\\mathbf{1}\\{\\mathrm{DVT}_{i,t}>0\\ \\land\\ (\\mathrm{DVT}_{i,t-1}=0\\ \\lor\\ \\mathrm{DVT}_{i,t-1}\\text{ missing})\\}\\)",
        "formula_direction": "",
        "data_fields": "Compustat: DVT",
        "calculation_window": {
          "zh": "年频。",
          "en": "Annual."
        },
        "accounting_lag": {
          "zh": "按 chars_ciz 年频 jdate 对齐；未另行添加页面假设。",
          "en": "Aligned by the chars_ciz annual jdate rule; the page adds no extra assumption."
        },
        "source_label": "EquityChars CIZ · accounting.py · L1116",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L1116",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "1116",
        "code_frequency": {
          "zh": "年频。",
          "en": "Annual."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      },
      "method_design": {
        "family": "event_study",
        "summary": {
          "zh": "以首次支付现金股利为事件，计算公告窗口及事件后一至三年的买入并持有超额收益；朴素交易检验在公告后买入事件公司并卖空CRSP等权指数。",
          "en": "Event study of first cash dividend payments; computes buy-and-hold excess returns for initiation firms versus benchmarks, and in the naive trading rule buys initiation-event stocks after announcement with an offsetting short position in the CRSP equal-weighted index."
        },
        "signal_role": {
          "zh": "事件识别变量",
          "en": "Event indicator"
        },
        "estimand": {
          "zh": "股利发起事件相对基准的异常收益",
          "en": "Abnormal returns around and after dividend initiations"
        },
        "interpretation": {
          "zh": "识别对象是事件公司相对基准的异常收益，不是横截面特征分位数形成的两端组合。",
          "en": ""
        }
      }
    },
    {
      "id": "divo",
      "name": "Dividend omission",
      "signal_definition": "Dividend omission",
      "sort_variable": "divo",
      "code_direction": "L-H",
      "paper_direction": "not-simple",
      "direction_label": "非简单多空",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "Low",
      "code_short_leg": "High",
      "code_notes": "Repo attribution: Michaely, Thaler, and Womack (1995). Formula table has no entry for this signal.",
      "raw_signal": "cash dividend omission event",
      "construction_summary": "Event study of firms omitting regular cash dividends; computes buy-and-hold excess returns versus benchmarks, and in the naive trading rule shorts omission-event stocks after announcement with an offsetting long position in the CRSP equal-weighted index.",
      "sample_and_timing": "NYSE/AMEX firms with regular cash dividends that omitted payments during 1964-1988; 887 omission events; event window and post-event returns measured relative to announcement.",
      "breakpoints": "Event group, not cross-sectional breakpoints.",
      "weighting": "Average excess returns across event firms; naive rule uses equal-dollar short stock position offset by long CRSP equal-weighted index.",
      "rebalancing_frequency": "Event-driven.",
      "holding_period": "Three-day event window plus one- and three-year post-event buy-and-hold excess returns; naive rule holds one year / 252 trading days.",
      "paper_long_leg": "CRSP equal-weighted index / benchmark offset",
      "paper_short_leg": "omission-event stocks",
      "confidence": "high",
      "evidence_type": "extracted_text",
      "evidence_pointer": "extracted-text/michaely-1995.txt:274-290,446-459,504-535,872-879,1591-1602",
      "reviewer_notes": "Event-group construction; profitable trade is short omission firms and long benchmark, so this is not a simple H-L/L-H characteristic spread.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "Specifically, for a company's dividend record to be considered as a potential omission event in our sample, one of the following must have occurred: 1.",
          "page": 6,
          "line_start": 274,
          "line_end": 290,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/michaely-1995.txt",
          "href": "../papers/michaely-1995/michaely-thaler-womack-1995-jstor.pdf#page=6",
          "open_label": "查看 PDF 第 6 页"
        },
        {
          "text": "No record of an omission announcement could be found in the WSJ Index or Moody's Dividend Record, or the WSJ Index made it clear that no dividend omission had occurred during the suspicious time period (40 exclusions).",
          "page": 10,
          "line_start": 446,
          "line_end": 459,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/michaely-1995.txt",
          "href": "../papers/michaely-1995/michaely-thaler-womack-1995-jstor.pdf#page=10",
          "open_label": "查看 PDF 第 10 页"
        },
        {
          "text": "More precisely, for each stock, the excess return is defined as the geometrically compounded (buy-and-hold) return on the stock minus the geometrically compounded return on either (1) the equally-weighted CRSP index including dividends, (2) the appropriate CRSP market-capitalization decile, (3) the equally-weighted market index adjusted for the beta of each stock, or (4) a matching firm in the same industry (two-digit SIC code) that is closest in market capitalization: b b ERj(a to b) = rJ t=a t=a (1 + Rjt) - 7 (I + MRt) (1) where ERj(a to b) = Excess return for firm j from time period a to b.",
          "page": 11,
          "line_start": 504,
          "line_end": 535,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/michaely-1995.txt",
          "href": "../papers/michaely-1995/michaely-thaler-womack-1995-jstor.pdf#page=11",
          "open_label": "查看 PDF 第 11 页"
        },
        {
          "text": "That is, the omission sample excess return shows a significant drift for one and three years after the event regardless of the benchmark portfolio used.",
          "page": 16,
          "line_start": 872,
          "line_end": 879,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/michaely-1995.txt",
          "href": "../papers/michaely-1995/michaely-thaler-womack-1995-jstor.pdf#page=16",
          "open_label": "查看 PDF 第 16 页"
        },
        {
          "text": "For each initiation event in our sample we buy a given long position (say $1,000) in the stock at the closing price on the day after the initiation announcement, and offset this position by selling short the market (as measured by the CRSP equally-weighted index).",
          "page": 29,
          "line_start": 1591,
          "line_end": 1602,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/michaely-1995.txt",
          "href": "../papers/michaely-1995/michaely-thaler-womack-1995-jstor.pdf#page=29",
          "open_label": "查看 PDF 第 29 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "michaely-1995",
        "title": "Price Reactions to Dividend Initiations and Omissions: Overreaction or Drift?",
        "authors": "Roni Michaely, Richard H. Thaler, and Kent L. Womack",
        "year": "1995",
        "venue": "The Journal of Finance",
        "doi": "10.1111/j.1540-6261.1995.tb04796.x",
        "source_url": "https://doi.org/10.1111/j.1540-6261.1995.tb04796.x",
        "local_file": "papers/michaely-1995/michaely-thaler-womack-1995-jstor.pdf",
        "local_href": "../papers/michaely-1995/michaely-thaler-womack-1995-jstor.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 37,
        "access_status": "full_text_pdf_jstor"
      },
      "method_variants": [
        {
          "id": "michaely-1995",
          "source_id": "michaely-1995",
          "role": "original_paper",
          "source_label": "Price Reactions to Dividend Initiations and Omissions: Overreaction or Drift?",
          "source_year": "1995",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{DIVO}_{i,t}=\\mathbf{1}\\!\\left\\{\\mathrm{Dividend}_{i,t}=0,\\ \\mathrm{Dividend}_{i,t-1}>0\\right\\}\\)",
          "data_fields": "cash dividend omission event",
          "calculation_window": {
            "zh": "NYSE/AMEX firms with regular cash dividends that omitted payments during 1964-1988; 887 omission events; event window and post-event returns measured relative to announcement.",
            "en": "NYSE/AMEX firms with regular cash dividends that omitted payments during 1964-1988; 887 omission events; event window and post-event returns measured relative to announcement."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Event group, not cross-sectional breakpoints. Average excess returns across event firms; naive rule uses equal-dollar short stock position offset by long CRSP equal-weighted index. Event-driven. Three-day event window plus one- and three-year post-event buy-and-hold excess returns; naive rule holds one year / 252 trading days.",
            "en": "Event group, not cross-sectional breakpoints. Average excess returns across event firms; naive rule uses equal-dollar short stock position offset by long CRSP equal-weighted index. Event-driven. Three-day event window plus one- and three-year post-event buy-and-hold excess returns; naive rule holds one year / 252 trading days."
          },
          "direction": "not-simple",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/michaely-1995/michaely-thaler-womack-1995-jstor.pdf",
          "source_page": 6,
          "source_href": "../papers/michaely-1995/michaely-thaler-womack-1995-jstor.pdf#page=6"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{DIVO}_{i,t}=\\mathbf{1}\\{(\\mathrm{DVT}_{i,t}=0\\ \\lor\\ \\mathrm{DVT}_{i,t}\\text{ missing})\\ \\land\\ \\mathrm{DVT}_{i,t-1}>0\\}\\)",
        "formula_direction": "",
        "data_fields": "Compustat: DVT",
        "calculation_window": {
          "zh": "年频。",
          "en": "Annual."
        },
        "accounting_lag": {
          "zh": "按 chars_ciz 年频 jdate 对齐；未另行添加页面假设。",
          "en": "Aligned by the chars_ciz annual jdate rule; the page adds no extra assumption."
        },
        "source_label": "EquityChars CIZ · accounting.py · L1129",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L1129",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "1129",
        "code_frequency": {
          "zh": "年频。",
          "en": "Annual."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      },
      "method_design": {
        "family": "event_study",
        "summary": {
          "zh": "以停止支付常规现金股利为事件，计算公告窗口及事件后一至三年的买入并持有超额收益；朴素交易检验卖空事件公司并买入CRSP等权指数。",
          "en": "Event study of firms omitting regular cash dividends; computes buy-and-hold excess returns versus benchmarks, and in the naive trading rule shorts omission-event stocks after announcement with an offsetting long position in the CRSP equal-weighted index."
        },
        "signal_role": {
          "zh": "事件识别变量",
          "en": "Event indicator"
        },
        "estimand": {
          "zh": "股利停止事件相对基准的异常收益",
          "en": "Abnormal returns around and after dividend omissions"
        },
        "interpretation": {
          "zh": "识别对象是事件公司相对基准的异常收益，不是横截面特征分位数形成的两端组合。",
          "en": ""
        }
      }
    },
    {
      "id": "dolvol",
      "name": "Dollar trading volume",
      "signal_definition": "Dollar trading volume",
      "sort_variable": "dolvol",
      "code_direction": "L-H",
      "paper_direction": "not-simple",
      "direction_label": "非简单多空",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "Low",
      "code_short_leg": "High",
      "code_notes": "Repo attribution: Chordia, Subrahmanyam, and Anshuman (2001). Formula table direction: -1.",
      "raw_signal": "natural logarithm of dollar trading volume in month t-2",
      "construction_summary": "The published paper includes DVOL as a monthly characteristic in Fama-MacBeth cross-sectional regressions of risk-adjusted returns. DVOL is the log dollar volume in the second-to-last month and has a negative return coefficient; the paper does not form a standalone DVOL long-short portfolio.",
      "sample_and_timing": "NYSE/AMEX common stocks, January 1966-December 1995; monthly characteristics and returns, with DVOL lagged to month t-2.",
      "breakpoints": "Monthly cross-sectional regression characteristic; no DVOL portfolio breakpoints.",
      "weighting": "Fama-MacBeth and purged regression estimators; no portfolio weights for DVOL.",
      "rebalancing_frequency": "Monthly.",
      "holding_period": "One-month return regression.",
      "paper_long_leg": "N/A",
      "paper_short_leg": "N/A",
      "confidence": "high",
      "evidence_type": "extracted_text",
      "evidence_pointer": "extracted-text/chordia-2001-publisher.txt:36-60,110-121,361-361,664-665",
      "reviewer_notes": "The prior row conflated the level DVOL variable with variability. Publisher full text defines DVOL as the level of log dollar volume and supports a negative regression coefficient, not a simple LMS portfolio.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "DVOL – the natural logarithm of the dollar volume of trading in the security in the second to last month.",
          "page": 1,
          "line_start": 36,
          "line_end": 60,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/chordia-2001-publisher.txt",
          "href": "../papers/chordia-2001/chordia-2001-publisher-fulltext.html#:~:text=DVOL%20%E2%80%93%20the%20natural%20logarithm%20of%20the%20dollar%20volume%20of%20trading%20in%20the%20security%20in%20the%20second%20to%20last%20month.",
          "open_label": "在本地 HTML 中定位"
        },
        {
          "text": "DVOL is the logarithm of the dollar trading volume, and STDVOL and CVVOL are the logarithms of the standard deviation and the coefficient of variation of dollar trading volume calculated over the past 36 months.",
          "page": 1,
          "line_start": 110,
          "line_end": 121,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/chordia-2001-publisher.txt",
          "href": "../papers/chordia-2001/chordia-2001-publisher-fulltext.html#:~:text=DVOL%20is%20the%20logarithm%20of%20the%20dollar%20trading%20volume%2C%20and%20STDVOL%20and%20CVVOL%20are%20the%20logarithms%20of%20the%20standard%20deviation%20and%20the%20coefficient%20of%20variation%20of%20dollar%20trading%20volume%20calc",
          "open_label": "在本地 HTML 中定位"
        },
        {
          "text": "We proxy for liquidity, inverse of the market impact costs and/or bid–ask spreads, by the monthly dollar trading volume.",
          "page": 1,
          "line_start": 361,
          "line_end": 361,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/chordia-2001-publisher.txt",
          "href": "../papers/chordia-2001/chordia-2001-publisher-fulltext.html#:~:text=We%20proxy%20for%20liquidity%2C%20inverse%20of%20the%20market%20impact%20costs%20and%2For%20bid%E2%80%93ask%20spreads%2C%20by%20the%20monthly%20dollar%20trading%20volume.",
          "open_label": "在本地 HTML 中定位"
        },
        {
          "text": "In Panel B of Table 5, we repeat the analysis using turnover instead of dollar volume as a measure of trading activity.",
          "page": 1,
          "line_start": 664,
          "line_end": 665,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/chordia-2001-publisher.txt",
          "href": "../papers/chordia-2001/chordia-2001-publisher-fulltext.html#:~:text=In%20Panel%20B%20of%20Table%205%2C%20we%20repeat%20the%20analysis%20using%20turnover%20instead%20of%20dollar%20volume%20as%20a%20measure%20of%20trading%20activity.",
          "open_label": "在本地 HTML 中定位"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "chordia-2001",
        "title": "Trading Activity and Expected Stock Returns",
        "authors": "Tarun Chordia; Avanidhar Subrahmanyam; V. Ravi Anshuman",
        "year": "2001",
        "venue": "Journal of Financial Economics",
        "doi": "10.1016/S0304-405X(00)00080-5",
        "source_url": "https://www.sciencedirect.com/science/article/pii/S0304405X00000805",
        "local_file": "papers/chordia-2001/chordia-2001-publisher-fulltext.html",
        "local_href": "../papers/chordia-2001/chordia-2001-publisher-fulltext.html",
        "artifact_type": "html",
        "pdf_pages": null,
        "access_status": "full_text_html_publisher_verified"
      },
      "method_variants": [
        {
          "id": "chordia-2001",
          "source_id": "chordia-2001",
          "role": "original_paper",
          "source_label": "Trading Activity and Expected Stock Returns",
          "source_year": "2001",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{DVOL}_{i,t}=\\ln\\!\\left(\\mathrm{DollarVolume}_{i,t-2}\\right)\\)",
          "data_fields": "natural logarithm of dollar trading volume in month t-2",
          "calculation_window": {
            "zh": "NYSE/AMEX common stocks, January 1966-December 1995; monthly characteristics and returns, with DVOL lagged to month t-2.",
            "en": "NYSE/AMEX common stocks, January 1966-December 1995; monthly characteristics and returns, with DVOL lagged to month t-2."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Monthly cross-sectional regression characteristic; no DVOL portfolio breakpoints. Fama-MacBeth and purged regression estimators; no portfolio weights for DVOL. Monthly. One-month return regression.",
            "en": "Monthly cross-sectional regression characteristic; no DVOL portfolio breakpoints. Fama-MacBeth and purged regression estimators; no portfolio weights for DVOL. Monthly. One-month return regression."
          },
          "direction": "not-simple",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/chordia-2001/chordia-2001-publisher-fulltext.html",
          "source_page": 1,
          "source_href": "../papers/chordia-2001/chordia-2001-publisher-fulltext.html#:~:text=DVOL%20%E2%80%93%20the%20natural%20logarithm%20of%20the%20dollar%20volume%20of%20trading%20in%20the%20security%20in%20the%20second%20to%20last%20month."
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{DOLVOL}_{i,t}=\\log(\\mathrm{VOL}_{i,t-2}\\,\\mathrm{PRC}_{i,t-2})\\)",
        "formula_direction": "-1",
        "data_fields": "CRSP: PRC, VOL",
        "calculation_window": {
          "zh": "月频。",
          "en": "Monthly."
        },
        "accounting_lag": {
          "zh": "信号在 t 月形成；最终输出将收益移至 t+1 月。",
          "en": "The signal is formed at month t; final output shifts the return to month t+1."
        },
        "source_label": "EquityChars CIZ · accounting.py · L2146",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L2146",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "2146",
        "code_frequency": {
          "zh": "月频。",
          "en": "Monthly."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      },
      "method_design": {
        "family": "cross_sectional_return_regression",
        "summary": {
          "zh": "以滞后第二个月的美元成交额对数作为月度特征，置于风险调整收益的Fama–MacBeth横截面回归。",
          "en": "The published paper includes DVOL as a monthly characteristic in Fama-MacBeth cross-sectional regressions of risk-adjusted returns. DVOL is the log dollar volume in the second-to-last month and has a negative return coefficient; the paper does not form a standalone DVOL long-short portfolio."
        },
        "signal_role": {
          "zh": "横截面预测变量",
          "en": "Cross-sectional predictor"
        },
        "estimand": {
          "zh": "下一月风险调整收益",
          "en": "Next-month risk-adjusted return"
        },
        "interpretation": {
          "zh": "方向反映横截面回归系数，不等同于独立的美元成交额多空组合收益。",
          "en": ""
        }
      }
    },
    {
      "id": "egr",
      "name": "Growth in common shareholder equity",
      "signal_definition": "Growth in common shareholder equity",
      "sort_variable": "egr",
      "code_direction": "L-H",
      "paper_direction": "not-simple",
      "direction_label": "非简单多空",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "Low",
      "code_short_leg": "High",
      "code_notes": "Repo attribution: Richardson, Sloan, Soliman, and Tuna (2005). Formula table has no entry for this signal.",
      "raw_signal": "change in external equity financing (ΔEquity), where book common equity is scaled by average total assets",
      "construction_summary": "The published article decomposes accruals and financing changes and tests ΔEquity in predictive return regressions; it does not define a standalone simple long/short egr portfolio matching the repository characteristic.",
      "sample_and_timing": "Annual U.S. firm-year observations, 1962-2001; stock returns are measured over the 12 months beginning four months after fiscal year-end.",
      "breakpoints": "N/A; regression and decomposition evidence rather than an explicit portfolio sort.",
      "weighting": "N/A",
      "rebalancing_frequency": "annual",
      "holding_period": "12 months, beginning four months after fiscal year-end.",
      "paper_long_leg": "N/A",
      "paper_short_leg": "N/A",
      "confidence": "high",
      "evidence_type": "publisher_full_text",
      "evidence_pointer": "extracted-text/richardson-2005-publisher.txt:71-77,235,1162,1165,1170-1172,1379,1501",
      "reviewer_notes": "Verified against the formal Journal of Accounting and Economics publisher full text. The paper's ΔEquity is an external-equity-financing component; no simple egr hedge direction should be inferred from its regression coefficient.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "Net assets would therefore equal cash, and through the balance sheet identity, owners’ equity would also equal cash: CashBasisNetAssets=Cash=CashBasisOwnersEquity Earnings under the cash basis of accounting, ‘cash earnings’, can then be derived through the clean surplus relation as: CashEarningst=ChangeinCashBasisOwners’Equityt+NetCashDistributionstoEquityt=ChangeinCasht+NetCashDistributionstoEquityt Net cash distributions to equity holders represent all cash payments from the firm to equity holders (i.e., cash dividends plus stock repurchases less equity issuances).",
          "page": 1,
          "line_start": 71,
          "line_end": 77,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/richardson-2005-publisher.txt",
          "href": "../papers/richardson-2005/richardson-2005-publisher-fulltext.html#:~:text=Net%20assets%20would%20therefore%20equal%20cash%2C%20and%20through%20the%20balance%20sheet%20identity%2C%20owners%E2%80%99%20equity%20would%20also%20equal%20cash%3A%20CashBasisNetAssets%3DCash%3DCashBasisOwnersEquity%20Earnings%20under%20th",
          "open_label": "在本地 HTML 中定位"
        },
        {
          "text": "The size-adjusted return is calculated by deducting the value-weighted average return for all firms in the same size-matched decile, where size is measured as the market capitalization at the beginning of the return cumulation period.",
          "page": 1,
          "line_start": 235,
          "line_end": 235,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/richardson-2005-publisher.txt",
          "href": "../papers/richardson-2005/richardson-2005-publisher-fulltext.html#:~:text=The%20size-adjusted%20return%20is%20calculated%20by%20deducting%20the%20value-weighted%20average%20return%20for%20all%20firms%20in%20the%20same%20size-matched%20decile%2C%20where%20size%20is%20measured%20as%20the%20market%20capitaliza",
          "open_label": "在本地 HTML 中定位"
        },
        {
          "text": "ΔEquity is the change in external equity financing defined as EQt−EQt−1.",
          "page": 1,
          "line_start": 1162,
          "line_end": 1162,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/richardson-2005-publisher.txt",
          "href": "../papers/richardson-2005/richardson-2005-publisher-fulltext.html#:~:text=%CE%94Equity%20is%20the%20change%20in%20external%20equity%20financing%20defined%20as%20EQt%E2%88%92EQt%E2%88%921.",
          "open_label": "在本地 HTML 中定位"
        },
        {
          "text": "Using the balance sheet identity and our earlier terminology, we can decompose operating asset accruals (ΔOA) into its financing sources as follows: (22)ΔOA=ΔOL+ΔFINL+ΔEQUITY-ΔFA,where ΔOA is the change in operating assets (ΔCOA+ΔNCOA), ΔOL the change in operating liabilities (ΔCOL+ΔNCOL), ΔFINL the change in debt (including preferred stock), ΔEQUITY the change in common equity and ΔFA the change in financial assets (including cash).",
          "page": 1,
          "line_start": 1165,
          "line_end": 1165,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/richardson-2005-publisher.txt",
          "href": "../papers/richardson-2005/richardson-2005-publisher-fulltext.html#:~:text=Using%20the%20balance%20sheet%20identity%20and%20our%20earlier%20terminology%2C%20we%20can%20decompose%20operating%20asset%20accruals%20%28%CE%94OA%29%20into%20its%20financing%20sources%20as%20follows%3A%20%2822%29%CE%94OA%3D%CE%94OL%2B%CE%94FINL%2B%CE%94EQUITY-%CE%94FA%2Cw",
          "open_label": "在本地 HTML 中定位"
        },
        {
          "text": "This table replicates the analysis in Table 5 after replacing the dependent variable with the next year's annual size-adjusted buy-hold stock return (measured starting four months after the fiscal year end).",
          "page": 1,
          "line_start": 1170,
          "line_end": 1172,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/richardson-2005-publisher.txt",
          "href": "../papers/richardson-2005/richardson-2005-publisher-fulltext.html#:~:text=This%20table%20replicates%20the%20analysis%20in%20Table%205%20after%20replacing%20the%20dependent%20variable%20with%20the%20next%20year%27s%20annual%20size-adjusted%20buy-hold%20stock%20return%20%28measured%20starting%20four%20months%20",
          "open_label": "在本地 HTML 中定位"
        },
        {
          "text": "RETt+1=ρ0+ρ1ROAt+ρ2ΔOLt+ρ3ΔFINLt–ρ4ΔFAt+ρ5ΔEquityt+υt+1",
          "page": 1,
          "line_start": 1379,
          "line_end": 1379,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/richardson-2005-publisher.txt",
          "href": "../papers/richardson-2005/richardson-2005-publisher-fulltext.html#:~:text=RETt%2B1%3D%CF%810%2B%CF%811ROAt%2B%CF%812%CE%94OLt%2B%CF%813%CE%94FINLt%E2%80%93%CF%814%CE%94FAt%2B%CF%815%CE%94Equityt%2B%CF%85t%2B1",
          "open_label": "在本地 HTML 中定位"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "richardson-2005",
        "title": "Accrual reliability, earnings persistence and stock prices",
        "authors": "Scott A. Richardson, Richard G. Sloan, Mark T. Soliman, and Irem Tuna",
        "year": "2005",
        "venue": "Journal of Accounting and Economics",
        "doi": "10.1016/j.jacceco.2005.04.005",
        "source_url": "https://www.sciencedirect.com/science/article/abs/pii/S0165410105000406",
        "local_file": "papers/richardson-2005/richardson-2005-publisher-fulltext.html",
        "local_href": "../papers/richardson-2005/richardson-2005-publisher-fulltext.html",
        "artifact_type": "html",
        "pdf_pages": null,
        "access_status": "full_text_html_publisher_verified"
      },
      "method_variants": [
        {
          "id": "richardson-2005",
          "source_id": "richardson-2005",
          "role": "original_paper",
          "source_label": "Accrual reliability, earnings persistence and stock prices",
          "source_year": "2005",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\Delta\\mathrm{Equity}_{i,t}=\\frac{\\mathrm{CEQ}_{i,t}-\\mathrm{CEQ}_{i,t-1}}{(\\mathrm{AT}_{i,t}+\\mathrm{AT}_{i,t-1})/2}\\)",
          "data_fields": "change in external equity financing (ΔEquity), where book common equity is scaled by average total assets",
          "calculation_window": {
            "zh": "Annual U.S. firm-year observations, 1962-2001; stock returns are measured over the 12 months beginning four months after fiscal year-end.",
            "en": "Annual U.S. firm-year observations, 1962-2001; stock returns are measured over the 12 months beginning four months after fiscal year-end."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "N/A; regression and decomposition evidence rather than an explicit portfolio sort. N/A annual 12 months, beginning four months after fiscal year-end.",
            "en": "N/A; regression and decomposition evidence rather than an explicit portfolio sort. N/A annual 12 months, beginning four months after fiscal year-end."
          },
          "direction": "not-simple",
          "formula_match": "closest_paper_measure",
          "notes": {
            "zh": "论文只给出最接近口径，与项目指标不完全相同。",
            "en": "The paper provides the closest available measure; it is not identical to the project signal."
          },
          "source_path": "papers/richardson-2005/richardson-2005-publisher-fulltext.html",
          "source_page": 1,
          "source_href": "../papers/richardson-2005/richardson-2005-publisher-fulltext.html#:~:text=Net%20assets%20would%20therefore%20equal%20cash%2C%20and%20through%20the%20balance%20sheet%20identity%2C%20owners%E2%80%99%20equity%20would%20also%20equal%20cash%3A%20CashBasisNetAssets%3DCash%3DCashBasisOwnersEquity%20Earnings%20under%20th"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{EGR}^{A}_{i,t}=\\frac{\\mathrm{CEQ}_{i,t}-\\mathrm{CEQ}_{i,t-1}}{\\mathrm{CEQ}_{i,t-1}},\\quad \\mathrm{EGR}^{Q}_{i,t}=\\frac{\\mathrm{CEQQ}_{i,t}-\\mathrm{CEQQ}_{i,t-4}}{\\mathrm{CEQQ}_{i,t-4}}\\)",
        "formula_direction": "",
        "data_fields": "Compustat: CEQ, CEQQ",
        "calculation_window": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "accounting_lag": {
          "zh": "年频与季频结果均在 CIZ 中对齐；最终比较 datadate，取较新的可用值。",
          "en": "CIZ aligns both annual and quarterly results, then selects the newer available value by datadate."
        },
        "source_label": "EquityChars CIZ · accounting.py · L641, L1689",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L641",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "641,1689",
        "code_frequency": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "reconcile_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/impute_rank_output.py#L85",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写。年频与季频同时可用时，最终输出按 datadate 选择较新的非空值。",
          "en": "Formula transcribed from chars_ciz. When annual and quarterly values both exist, final output selects the newer non-null value by datadate."
        }
      },
      "method_design": {
        "family": "cross_sectional_return_regression",
        "summary": {
          "zh": "论文分解应计项目与融资变动，并在预测收益回归中检验权益融资变动；该变量与项目的股权增长特征属于相近但并非完全相同的定义。",
          "en": "The published article decomposes accruals and financing changes and tests ΔEquity in predictive return regressions; it does not define a standalone simple long/short egr portfolio matching the repository characteristic."
        },
        "signal_role": {
          "zh": "最接近的文献解释变量",
          "en": "Closest source-paper predictor"
        },
        "estimand": {
          "zh": "未来股票收益",
          "en": "Future stock return"
        },
        "interpretation": {
          "zh": "回归检验使用的是相近融资变动度量，既非项目特征的精确定义，也未形成独立两端组合。",
          "en": ""
        }
      }
    },
    {
      "id": "ep",
      "name": "Earnings-to-price",
      "signal_definition": "Earnings-to-price",
      "sort_variable": "ep",
      "code_direction": "H-L",
      "paper_direction": "N/A",
      "direction_label": "不适用",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Basu (1977). Formula table direction: +1.",
      "raw_signal": "price-to-earnings ratio (P/E)",
      "construction_summary": "Compute P/E ratios for each sample security as of December 31, form five portfolios of similar P/E ratios, buy them on the following April 1, and track returns for the next 12 months under a buy-and-hold policy.",
      "sample_and_timing": "P/E is measured on December 31; portfolios are formed the following April 1; returns are computed for the next 12 months.",
      "breakpoints": "Five portfolios of similar P/E ratios; no numeric breakpoint cutoffs are given in the cited passage.",
      "weighting": "Equal initial investment; buy-and-hold.",
      "rebalancing_frequency": "Annual formation.",
      "holding_period": "12 months.",
      "paper_long_leg": "Highest-P/E portfolio / no explicit long leg stated in the passage.",
      "paper_short_leg": "Lowest-P/E portfolio / no explicit short leg stated in the passage.",
      "confidence": "high",
      "evidence_type": "direct_method_passage",
      "evidence_pointer": "doi:10.1111/j.1540-6261.1977.tb01979.x; scholar:10.1111/j.1540-6261.1977.tb01979.x_0001 (Section II); scholar:10.1111/j.1540-6261.1977.tb01979.x_0047 (Table 1)",
      "reviewer_notes": "Direct methodology passage supports the annual P/E sort, April formation date, and 12-month buy-and-hold return window.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "Table 1 shows the scores of the three performance measures and selected summary statistics for the (i) five P/E portfolios (A = highest P/E, B, C, D and E = lowest P/E); (ii) highest P/E portfolio (A) excluding firms with negative earnings, A*; (iii) sample, S and (iv) Fisher's Index, F.",
          "page": 5,
          "line_start": null,
          "line_end": null,
          "method": "automatic_pdf_search",
          "method_label": "自动定位候选句",
          "text_path": "",
          "href": "../papers/basu-1977/basu-1977-jstor.pdf#page=5",
          "open_label": "查看 PDF 第 5 页"
        },
        {
          "text": "Investment Performance of Common Stocks in Relation to Price-Earnings 677 z x (previous column) is significantly different from 0.50. decile; and (ii) * denotes the portfolio yielding the highest wealth relative in a given decile.",
          "page": 16,
          "line_start": null,
          "line_end": null,
          "method": "automatic_pdf_search",
          "method_label": "自动定位候选句",
          "text_path": "",
          "href": "../papers/basu-1977/basu-1977-jstor.pdf#page=16",
          "open_label": "查看 PDF 第 16 页"
        },
        {
          "text": "The monthly returns on each of these portfolios were then computed for the next twelve months assuming an equal initial investment in each of their respective securities and then a buy-and-hold policy.9 The above procedure was repeated annually on each April 1 giving 14 years (April 1957-March 1971) of return data for each of the P/E portfolios.",
          "page": 4,
          "line_start": null,
          "line_end": null,
          "method": "automatic_pdf_search",
          "method_label": "自动定位候选句",
          "text_path": "",
          "href": "../papers/basu-1977/basu-1977-jstor.pdf#page=4",
          "open_label": "查看 PDF 第 4 页"
        }
      ],
      "evidence_mode": "automatic",
      "paper": {
        "id": "basu-1977",
        "title": "Investment Performance of Common Stocks in Relation to Their Price-Earnings Ratios: A Test of the Efficient Market Hypothesis",
        "authors": "Sanjoy Basu",
        "year": "1977",
        "venue": "The Journal of Finance",
        "doi": "10.1111/j.1540-6261.1977.tb01979.x",
        "source_url": "https://doi.org/10.1111/j.1540-6261.1977.tb01979.x",
        "local_file": "papers/basu-1977/basu-1977-jstor.pdf",
        "local_href": "../papers/basu-1977/basu-1977-jstor.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 21,
        "access_status": "full_text_pdf_jstor"
      },
      "method_variants": [
        {
          "id": "basu-1977",
          "source_id": "basu-1977",
          "role": "original_paper",
          "source_label": "Investment Performance of Common Stocks in Relation to Their Price-Earnings Ratios: A Test of the Efficient Market Hypothesis",
          "source_year": "1977",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{PE}_{i,t}=\\frac{\\mathrm{Price}_{i,t}}{\\mathrm{EarningsPerShare}_{i,t}}\\)",
          "data_fields": "price-to-earnings ratio (P/E)",
          "calculation_window": {
            "zh": "P/E is measured on December 31; portfolios are formed the following April 1; returns are computed for the next 12 months.",
            "en": "P/E is measured on December 31; portfolios are formed the following April 1; returns are computed for the next 12 months."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Five portfolios of similar P/E ratios; no numeric breakpoint cutoffs are given in the cited passage. Equal initial investment; buy-and-hold. Annual formation. 12 months.",
            "en": "Five portfolios of similar P/E ratios; no numeric breakpoint cutoffs are given in the cited passage. Equal initial investment; buy-and-hold. Annual formation. 12 months."
          },
          "direction": "N/A",
          "formula_match": "closest_paper_measure",
          "notes": {
            "zh": "论文只给出最接近口径，与项目指标不完全相同。",
            "en": "The paper provides the closest available measure; it is not identical to the project signal."
          },
          "source_path": "papers/basu-1977/basu-1977-jstor.pdf",
          "source_page": 5,
          "source_href": "../papers/basu-1977/basu-1977-jstor.pdf#page=5"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{EP}_{i,t}=\\frac{\\mathrm{IB}_{i,t}}{\\mathrm{ME}_{i,t}}\\)",
        "formula_direction": "+1",
        "data_fields": "Compustat: IB",
        "calculation_window": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "accounting_lag": {
          "zh": "年频与季频结果均在 CIZ 中对齐；最终比较 datadate，取较新的可用值。",
          "en": "CIZ aligns both annual and quarterly results, then selects the newer available value by datadate."
        },
        "source_label": "EquityChars CIZ · accounting.py · L2303, L2425",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L2303",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "2303,2425",
        "code_frequency": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "reconcile_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/impute_rank_output.py#L85",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写。年频与季频同时可用时，最终输出按 datadate 选择较新的非空值。",
          "en": "Formula transcribed from chars_ciz. When annual and quarterly values both exist, final output selects the newer non-null value by datadate."
        }
      }
    },
    {
      "id": "gma",
      "name": "Gross profitability",
      "signal_definition": "Gross profitability",
      "sort_variable": "gma",
      "code_direction": "H-L",
      "paper_direction": "H-L",
      "direction_label": "高值做多 · 低值做空",
      "agreement": "yes",
      "status": "paper_direction_verified",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Novy-Marx (2013). Formula table direction: +1.",
      "raw_signal": "Gross profits-to-assets, (REVT - COGS) / AT",
      "construction_summary": "At the end of each June, sort eligible stocks into profitability quintiles using NYSE breakpoints on annual gross profits-to-assets. Table 2 reports a profitable-minus-unprofitable spread, with the most profitable firms earning 0.31% per month more than the least profitable firms.",
      "sample_and_timing": "Compustat data beginning in 1962; accounting data for a fiscal year are used from the following June; returns cover July 1963 through December 2010; financial firms are excluded.",
      "breakpoints": "NYSE quintiles on gross profits-to-assets.",
      "weighting": "Value-weighted monthly excess returns.",
      "rebalancing_frequency": "Annual, at the end of June.",
      "holding_period": "Twelve months until the next June rebalance; the paper also reports a separate monthly high-frequency robustness strategy.",
      "paper_long_leg": "Most profitable / highest gross profits-to-assets quintile.",
      "paper_short_leg": "Least profitable / lowest gross profits-to-assets quintile.",
      "confidence": "high",
      "evidence_type": "publisher_full_text_cityu",
      "evidence_pointer": "extracted-text/novy-marx-2013.txt:118-139 (definition and sample),249-299 (Section 2.2 and Table 2); papers/novy-marx-2013/novy-marx-2013-authoritative-fulltext.html",
      "reviewer_notes": "The publisher text explicitly labels the spread profitable minus unprofitable; embedded Appendix A is part of the article and no separate SI/data/code attachment was exposed.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "Panel A reports results from Fama and MacBeth regressions of returns on gross profits (revenues minus cost of goods sold, REVT − COGS) scaled by assets (AT), as well as income before extraordinary items (IB) and free cash flow (net income plus amortization and depreciation minus changes in working capital and capital expenditures, NI+DP−WCAPCH−CAPX) each scaled by book equity.",
          "page": 1,
          "line_start": 118,
          "line_end": 139,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/novy-marx-2013.txt",
          "href": "../papers/novy-marx-2013/novy-marx-2013-authoritative-fulltext.html#:~:text=Panel%20A%20reports%20results%20from%20Fama%20and%20MacBeth%20regressions%20of%20returns%20on%20gross%20profits%20%28revenues%20minus%20cost%20of%20goods%20sold%2C%20REVT%20%E2%88%92%20COGS%29%20scaled%20by%20assets%20%28AT%29%2C%20as%20well%20as%20income%20befo",
          "open_label": "在本地 HTML 中定位"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "novy-marx-2013",
        "title": "The other side of value: The gross profitability premium",
        "authors": "Robert Novy-Marx",
        "year": "2013",
        "venue": "Journal of Financial Economics",
        "doi": "10.1016/j.jfineco.2013.01.003",
        "source_url": "https://doi.org/10.1016/j.jfineco.2013.01.003",
        "local_file": "papers/novy-marx-2013/novy-marx-2013-authoritative-fulltext.html",
        "local_href": "../papers/novy-marx-2013/novy-marx-2013-authoritative-fulltext.html",
        "artifact_type": "html",
        "pdf_pages": null,
        "access_status": "full_text_html_cityu"
      },
      "method_variants": [
        {
          "id": "novy-marx-2013",
          "source_id": "novy-marx-2013",
          "role": "original_paper",
          "source_label": "The other side of value: The gross profitability premium",
          "source_year": "2013",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{GPA}_{i,t}=\\frac{\\mathrm{REVT}_{i,t}-\\mathrm{COGS}_{i,t}}{\\mathrm{AT}_{i,t-1}}\\)",
          "data_fields": "Gross profits-to-assets, (REVT - COGS) / AT",
          "calculation_window": {
            "zh": "Compustat data beginning in 1962; accounting data for a fiscal year are used from the following June; returns cover July 1963 through December 2010; financial firms are excluded.",
            "en": "Compustat data beginning in 1962; accounting data for a fiscal year are used from the following June; returns cover July 1963 through December 2010; financial firms are excluded."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "NYSE quintiles on gross profits-to-assets. Value-weighted monthly excess returns. Annual, at the end of June. Twelve months until the next June rebalance; the paper also reports a separate monthly high-frequency robustness strategy.",
            "en": "NYSE quintiles on gross profits-to-assets. Value-weighted monthly excess returns. Annual, at the end of June. Twelve months until the next June rebalance; the paper also reports a separate monthly high-frequency robustness strategy."
          },
          "direction": "H-L",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/novy-marx-2013/novy-marx-2013-authoritative-fulltext.html",
          "source_page": 1,
          "source_href": "../papers/novy-marx-2013/novy-marx-2013-authoritative-fulltext.html#:~:text=Panel%20A%20reports%20results%20from%20Fama%20and%20MacBeth%20regressions%20of%20returns%20on%20gross%20profits%20%28revenues%20minus%20cost%20of%20goods%20sold%2C%20REVT%20%E2%88%92%20COGS%29%20scaled%20by%20assets%20%28AT%29%2C%20as%20well%20as%20income%20befo"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{GMA}_{i,t}=\\frac{\\mathrm{REVT}_{i,t}-\\mathrm{COGS}_{i,t}}{\\mathrm{AT}_{i,t-1}}\\)",
        "formula_direction": "+1",
        "data_fields": "Compustat: AT, COGS, REVT",
        "calculation_window": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "accounting_lag": {
          "zh": "年频与季频结果均在 CIZ 中对齐；最终比较 datadate，取较新的可用值。",
          "en": "CIZ aligns both annual and quarterly results, then selects the newer available value by datadate."
        },
        "source_label": "EquityChars CIZ · accounting.py · L531, L1624",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L531",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "531,1624",
        "code_frequency": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "reconcile_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/impute_rank_output.py#L85",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写。年频与季频同时可用时，最终输出按 datadate 选择较新的非空值。",
          "en": "Formula transcribed from chars_ciz. When annual and quarterly values both exist, final output selects the newer non-null value by datadate."
        }
      }
    },
    {
      "id": "grcapx",
      "name": "Growth in capital expenditures",
      "signal_definition": "Growth in capital expenditures",
      "sort_variable": "grcapx",
      "code_direction": "L-H",
      "paper_direction": "N/A",
      "direction_label": "不适用",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "Low",
      "code_short_leg": "High",
      "code_notes": "Repo attribution: Anderson and Garcia-Feijoo (2006). Formula table has no entry for this signal.",
      "raw_signal": "capital investment growth (cegth2 = (capexp_t-1 - capexp_t-3) / capexp_t-3)",
      "construction_summary": "At the end of June each year, sort stocks into five quintiles on capital investment growth from fiscal year t-3 to t-1, then compute monthly returns from July of year t to June of year t+1.",
      "sample_and_timing": "Sample period is 1976-1999 with 36 months of return history before inclusion; the key growth proxy is measured from fiscal year t-3 to t-1.",
      "breakpoints": "Five quintiles; no numeric breakpoint cutoffs are stated in the cited passage.",
      "weighting": "Value-weighted in panels C/E; Fama-French methodology is used.",
      "rebalancing_frequency": "Annual formation at end of June; monthly return measurement thereafter.",
      "holding_period": "12 months.",
      "paper_long_leg": "Highest capital investment growth quintile / no explicit long leg stated in the passage.",
      "paper_short_leg": "Lowest capital investment growth quintile / no explicit short leg stated in the passage.",
      "confidence": "high",
      "evidence_type": "direct_method_passage",
      "evidence_pointer": "doi:10.1111/j.1540-6261.2006.00833.x; scholar:10.1111/j.1540-6261.2006.00833.x_0007 (Section II); scholar:10.1111/j.1540-6261.2006.00833.x_0019 (Section III)",
      "reviewer_notes": "Direct construction text supports the cegth2 proxy, annual quintile sorts, July-to-June return window, and the value-weighted portfolio panels.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "Capital Investment, Growth Options, and Security Returns 189 Table V Average Monthly Percent Returns for Portfolios Based on Growth in Capital Expenditures, Book-to-Market, and Size At the end of June of each year t, t = 1976 to 1998, stocks are allocated to five groups based on growth rates in capital expenditures from the end of fiscal year t - 3 to the end of fiscal year t - 1 (cegth2) or capital expenditures in t - 1 relative to the simple average of capital expenditures in years t - 2, t - 3, and t - 4 (cegth3).",
          "page": 20,
          "line_start": null,
          "line_end": null,
          "method": "automatic_pdf_search",
          "method_label": "自动定位候选句",
          "text_path": "",
          "href": "../papers/anderson-2006/anderson-garcia-feijoo-2006-jstor.pdf#page=20",
          "open_label": "查看 PDF 第 20 页"
        },
        {
          "text": "We Table III Average Monthly % Returns and Characteristics for Quintile Portfolios Based on Growth Rates in Capital Expenditures At the end of June of each year t, t = 1976 to 1998, five quintile portfolios are formed based on growth rates in capital expenditures from the end of fiscal year t - 3 to the end of fiscal year t - 1 (Panels A, B, and C) or capital expenditures in t - 1 relative to the simple average over the previous 3 years (Panels D and E).",
          "page": 14,
          "line_start": null,
          "line_end": null,
          "method": "automatic_pdf_search",
          "method_label": "自动定位候选句",
          "text_path": "",
          "href": "../papers/anderson-2006/anderson-garcia-feijoo-2006-jstor.pdf#page=14",
          "open_label": "查看 PDF 第 14 页"
        },
        {
          "text": "Panel B shows that for the year after portfolio formation, average monthly returns are 1.18% for the highest cegth2 portfolio versus 1.75% for the lowest cegth2 portfolio.7 In addition, the average monthly return difference between low and high cegth2 portfolios is 0.57%, which is significantly different from 0 (t-stat = 5.05).",
          "page": 15,
          "line_start": null,
          "line_end": null,
          "method": "automatic_pdf_search",
          "method_label": "自动定位候选句",
          "text_path": "",
          "href": "../papers/anderson-2006/anderson-garcia-feijoo-2006-jstor.pdf#page=15",
          "open_label": "查看 PDF 第 15 页"
        }
      ],
      "evidence_mode": "automatic",
      "paper": {
        "id": "anderson-2006",
        "title": "Empirical Evidence on Capital Investment, Growth Options, and Security Returns",
        "authors": "Christopher W. Anderson; Luis Garcia-Feijoo",
        "year": "2006",
        "venue": "The Journal of Finance",
        "doi": "10.1111/j.1540-6261.2006.00833.x",
        "source_url": "https://doi.org/10.1111/j.1540-6261.2006.00833.x",
        "local_file": "papers/anderson-2006/anderson-garcia-feijoo-2006-jstor.pdf",
        "local_href": "../papers/anderson-2006/anderson-garcia-feijoo-2006-jstor.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 25,
        "access_status": "full_text_pdf_jstor"
      },
      "method_variants": [
        {
          "id": "anderson-2006",
          "source_id": "anderson-2006",
          "role": "original_paper",
          "source_label": "Empirical Evidence on Capital Investment, Growth Options, and Security Returns",
          "source_year": "2006",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{CEGTH2}_{i,t}=\\frac{\\mathrm{CAPEX}_{i,t-1}-\\mathrm{CAPEX}_{i,t-3}}{\\mathrm{CAPEX}_{i,t-3}}\\)",
          "data_fields": "capital investment growth (cegth2 = (capexp_t-1 - capexp_t-3) / capexp_t-3)",
          "calculation_window": {
            "zh": "Sample period is 1976-1999 with 36 months of return history before inclusion; the key growth proxy is measured from fiscal year t-3 to t-1.",
            "en": "Sample period is 1976-1999 with 36 months of return history before inclusion; the key growth proxy is measured from fiscal year t-3 to t-1."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Five quintiles; no numeric breakpoint cutoffs are stated in the cited passage. Value-weighted in panels C/E; Fama-French methodology is used. Annual formation at end of June; monthly return measurement thereafter. 12 months.",
            "en": "Five quintiles; no numeric breakpoint cutoffs are stated in the cited passage. Value-weighted in panels C/E; Fama-French methodology is used. Annual formation at end of June; monthly return measurement thereafter. 12 months."
          },
          "direction": "N/A",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/anderson-2006/anderson-garcia-feijoo-2006-jstor.pdf",
          "source_page": 20,
          "source_href": "../papers/anderson-2006/anderson-garcia-feijoo-2006-jstor.pdf#page=20"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{GRCAPX}_{i,t}=\\frac{\\mathrm{CAPX}_{i,t}-\\mathrm{CAPX}_{i,t-2}}{\\mathrm{CAPX}_{i,t-2}}\\)",
        "formula_direction": "",
        "data_fields": "Compustat: CAPX",
        "calculation_window": {
          "zh": "年频。",
          "en": "Annual."
        },
        "accounting_lag": {
          "zh": "按 chars_ciz 年频 jdate 对齐；未另行添加页面假设。",
          "en": "Aligned by the chars_ciz annual jdate rule; the page adds no extra assumption."
        },
        "source_label": "EquityChars CIZ · accounting.py · L778",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L778",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "778",
        "code_frequency": {
          "zh": "年频。",
          "en": "Annual."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      }
    },
    {
      "id": "grltnoa",
      "name": "Growth in long-term net operating assets",
      "signal_definition": "Growth in long-term net operating assets",
      "sort_variable": "grltnoa",
      "code_direction": "H-L",
      "paper_direction": "N/A",
      "direction_label": "不适用",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Fairfield, Whisenant, and Yohn (2003). Formula table direction: +1.",
      "raw_signal": "GrNOA = net operating assets at fiscal year t divided by net operating assets at fiscal year t-1",
      "construction_summary": "The published article studies how accruals and cash flows relate to growth in net operating assets and future operating profitability. It forms annual GrNOA-ranked deciles for accounting regressions, but does not define a realized-return long-short portfolio for grltnoa.",
      "sample_and_timing": "Compustat observations with December fiscal year-ends from 1963-2001; annual accounting regressions and GrNOA-ranked subsamples.",
      "breakpoints": "Annual deciles ranked by growth in net operating assets for regression analysis.",
      "weighting": "N/A; no return portfolio.",
      "rebalancing_frequency": "Annual.",
      "holding_period": "N/A; accounting persistence tests.",
      "paper_long_leg": "N/A",
      "paper_short_leg": "N/A",
      "confidence": "high",
      "evidence_type": "publisher_final_pdf",
      "evidence_pointer": "extracted-text/fairfield-2003-publisher.txt:75-93,240-298,449-468,844-917",
      "reviewer_notes": "Verified against the formal Review of Accounting Studies publisher PDF. The source paper supports an accounting GrNOA construct but no paper-reported realized-return L/S direction.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "We investigate whether the differential persistence of accruals and cash ﬂows for one-year-ahead return on net operating assets (RNOA) results from differential associations with one-year-ahead operating income or with growth in net operating assets, or both.",
          "page": 2,
          "line_start": 75,
          "line_end": 93,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/fairfield-2003-publisher.txt",
          "href": "../papers/fairfield-2003/fairfield-2003-publisher.pdf#page=2",
          "open_label": "查看 PDF 第 2 页"
        },
        {
          "text": "OPINCtþ1 is, therefore, not affected by growth in net operating assets in year t.",
          "page": 5,
          "line_start": 240,
          "line_end": 298,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/fairfield-2003-publisher.txt",
          "href": "../papers/fairfield-2003/fairfield-2003-publisher.pdf#page=5",
          "open_label": "查看 PDF 第 5 页"
        },
        {
          "text": "226 FAIRFIELD, WHISENANT AND YOHN We differentiate operating income deﬂated by lagged net operating assets, OPINC, from operating income deﬂated by contemporaneous net operating assets, RNOA.9 OPINCtþ1 is deﬁned as: ðOperating IncomeÞtþ1 OPINCtþ1 ¼ : NOAt\u00051 The explanatory variables in the model are current operating cash ﬂows and operating accruals.",
          "page": 6,
          "line_start": 240,
          "line_end": 298,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/fairfield-2003-publisher.txt",
          "href": "../papers/fairfield-2003/fairfield-2003-publisher.pdf#page=6",
          "open_label": "查看 PDF 第 6 页"
        },
        {
          "text": "THE DIFFERENTIAL PERSISTENCE OF ACCRUALS AND CASH FLOWS 227 with growth in net operating assets in year t using the following model:",
          "page": 7,
          "line_start": 240,
          "line_end": 298,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/fairfield-2003-publisher.txt",
          "href": "../papers/fairfield-2003/fairfield-2003-publisher.pdf#page=7",
          "open_label": "查看 PDF 第 7 页"
        },
        {
          "text": "GrNOAt ¼ net operating assets at the end of ﬁscal-year t, divided by net operating assets at the end of ﬁscal-year t \u0005 1.",
          "page": 9,
          "line_start": 449,
          "line_end": 468,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/fairfield-2003-publisher.txt",
          "href": "../papers/fairfield-2003/fairfield-2003-publisher.pdf#page=9",
          "open_label": "查看 PDF 第 9 页"
        },
        {
          "text": "Evidence on the Association Between Cash Flows and Accruals and Net Operating Assets We predict that the well-documented differential persistence of the components of current proﬁtability for explaining future proﬁtability is, at least in part, attributable to the differential relations between operating cash ﬂows and accruals in year t and growth in net operating assets in year t.",
          "page": 10,
          "line_start": 449,
          "line_end": 468,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/fairfield-2003-publisher.txt",
          "href": "../papers/fairfield-2003/fairfield-2003-publisher.pdf#page=10",
          "open_label": "查看 PDF 第 10 页"
        },
        {
          "text": "Equation (3) : OPINCtþ1 ¼ b0 þ b1 CFOt þ b2 ACCt þ utþ1 Portfolio Ranking by Growth in NOAt ðGrNOAt ¼ NOAt =NOAt\u00051 Þ Deciles Full Sample Mean GrNOAt Panel A: Estimation resultsa Intercept CFOt ACCt Adjusted R2 Panel B: Tests of differences in persistence of cash ﬂow and accrual components of operating incomeb Coefﬁcient Comparisons Test: b1 ¼ b2 (0.573) Panel C: Means (standard deviations) of ACC and CFO for full sample and within growth deciles ACCt =NOAt\u00051 (0.33) CFOt =NOAt\u00051 (0.25) THE DIFFERENTIAL PERSISTENCE OF ACCRUALS AND CASH FLOWS Number of observations ¼ 28,472 ﬁrm-years between 1972 and 1993.",
          "page": 17,
          "line_start": 844,
          "line_end": 917,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/fairfield-2003-publisher.txt",
          "href": "../papers/fairfield-2003/fairfield-2003-publisher.pdf#page=17",
          "open_label": "查看 PDF 第 17 页"
        },
        {
          "text": "These lowest two deciles report negative growth in net operating assets while the other eight deciles exhibit positive growth.",
          "page": 18,
          "line_start": 844,
          "line_end": 917,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/fairfield-2003-publisher.txt",
          "href": "../papers/fairfield-2003/fairfield-2003-publisher.pdf#page=18",
          "open_label": "查看 PDF 第 18 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "fairfield-2003",
        "title": "The Differential Persistence of Accruals and Cash Flows for Future Operating Income versus Future Profitability",
        "authors": "Patricia M. Fairfield; Scott Whisenant; Teri Lombardi Yohn",
        "year": "2003",
        "venue": "Review of Accounting Studies, 8(2/3), 221-243",
        "doi": "10.1023/A:1024413412176",
        "source_url": "https://doi.org/10.1023/A:1024413412176",
        "local_file": "papers/fairfield-2003/fairfield-2003-publisher.pdf",
        "local_href": "../papers/fairfield-2003/fairfield-2003-publisher.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 23,
        "access_status": "full_text_pdf_publisher"
      },
      "method_variants": [
        {
          "id": "fairfield-2003",
          "source_id": "fairfield-2003",
          "role": "original_paper",
          "source_label": "The Differential Persistence of Accruals and Cash Flows for Future Operating Income versus Future Profitability",
          "source_year": "2003",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{GrNOA}_{i,t}=\\frac{\\mathrm{NOA}_{i,t}}{\\mathrm{NOA}_{i,t-1}}\\)",
          "data_fields": "GrNOA = net operating assets at fiscal year t divided by net operating assets at fiscal year t-1",
          "calculation_window": {
            "zh": "Compustat observations with December fiscal year-ends from 1963-2001; annual accounting regressions and GrNOA-ranked subsamples.",
            "en": "Compustat observations with December fiscal year-ends from 1963-2001; annual accounting regressions and GrNOA-ranked subsamples."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Annual deciles ranked by growth in net operating assets for regression analysis. N/A; no return portfolio. Annual. N/A; accounting persistence tests.",
            "en": "Annual deciles ranked by growth in net operating assets for regression analysis. N/A; no return portfolio. Annual. N/A; accounting persistence tests."
          },
          "direction": "N/A",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/fairfield-2003/fairfield-2003-publisher.pdf",
          "source_page": 2,
          "source_href": "../papers/fairfield-2003/fairfield-2003-publisher.pdf#page=2"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\begin{aligned} \\mathrm{LTNOA}_{i,t}&=(\\mathrm{RECT}_{i,t}+\\mathrm{INVT}_{i,t}+\\mathrm{PPENT}_{i,t}+\\mathrm{ACO}_{i,t}+\\mathrm{INTAN}_{i,t}+\\mathrm{AO}_{i,t})\\\\ &\\quad-(\\mathrm{AP}_{i,t}+\\mathrm{LCO}_{i,t}+\\mathrm{LO}_{i,t}),\\\\ \\Delta\\mathrm{WCNOA}_{i,t}&=(\\mathrm{RECT}_{i,t}-\\mathrm{RECT}_{i,t-1})+(\\mathrm{INVT}_{i,t}-\\mathrm{INVT}_{i,t-1})+(\\mathrm{ACO}_{i,t}-\\mathrm{ACO}_{i,t-1})\\\\ &\\quad-(\\mathrm{AP}_{i,t}-\\mathrm{AP}_{i,t-1})-(\\mathrm{LCO}_{i,t}-\\mathrm{LCO}_{i,t-1}),\\\\ \\mathrm{GRLTNOA}_{i,t}&= \\frac{\\mathrm{LTNOA}_{i,t}}{\\mathrm{AT}_{i,t}} -\\frac{\\mathrm{LTNOA}_{i,t-1}}{\\mathrm{AT}_{i,t-1}} -\\frac{\\Delta\\mathrm{WCNOA}_{i,t}}{\\frac{1}{2}(\\mathrm{AT}_{i,t}+\\mathrm{AT}_{i,t-1})}. \\end{aligned}\\)",
        "formula_direction": "+1",
        "data_fields": "Compustat: ACO, AO, AP, AT, INTAN, INVT, LCO, LO, PPENT, RECT",
        "calculation_window": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "accounting_lag": {
          "zh": "年频与季频结果均在 CIZ 中对齐；最终比较 datadate，取较新的可用值。",
          "en": "CIZ aligns both annual and quarterly results, then selects the newer available value by datadate."
        },
        "source_label": "EquityChars CIZ · accounting.py · L917, L1826",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L917",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "917,1826",
        "code_frequency": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "reconcile_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/impute_rank_output.py#L85",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写。年频与季频同时可用时，最终输出按 datadate 选择较新的非空值。",
          "en": "Formula transcribed from chars_ciz. When annual and quarterly values both exist, final output selects the newer non-null value by datadate."
        }
      }
    },
    {
      "id": "herf",
      "name": "Industry sales concentration",
      "signal_definition": "Industry sales concentration",
      "sort_variable": "herf",
      "code_direction": "L-H",
      "paper_direction": "H-L",
      "direction_label": "高值做多 · 低值做空",
      "agreement": "no",
      "status": "paper_direction_verified",
      "code_long_leg": "Low",
      "code_short_leg": "High",
      "code_notes": "Repo attribution: Hou and Robinson (2006). Formula table direction: -1.",
      "raw_signal": "H(Sales) = sum of squared firm sales shares within each three-digit SIC industry, averaged over the prior 3 years",
      "construction_summary": "The published article sorts industries into annual H(Sales) quintiles and explicitly reports Quintile 5 minus Quintile 1, where Q5 is most concentrated and Q1 is least concentrated.",
      "sample_and_timing": "The CRSP/Compustat sample covers July 1963-December 2001; fiscal-year t-1 accounting information is matched to July t-June t+1 returns.",
      "breakpoints": "In June each year, three-digit SIC industries are sorted into H(Sales) quintiles.",
      "weighting": "Firm-level tests equally weight firms within each concentration portfolio; industry-level tests first form industry portfolios and then equally weight industries within each quintile.",
      "rebalancing_frequency": "annual",
      "holding_period": "12 months, July through June.",
      "paper_long_leg": "most concentrated industry quintile (Q5)",
      "paper_short_leg": "least concentrated industry quintile (Q1)",
      "confidence": "high",
      "evidence_type": "publisher_final_jstor_pdf",
      "evidence_pointer": "extracted-text/hou-2006-publisher.txt:331-350,398-447,620-715",
      "reviewer_notes": "Verified against the final Journal of Finance/JSTOR PDF. The paper explicitly tabulates Q5-Q1 as -0.26% per month raw and -0.36% characteristic-adjusted; the repository's L-H implementation reverses the paper's reported spread sign while capturing the positive low-concentration premium.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "To be included in our return tests, a firm must have CRSP stock price, shares outstanding and three-digit SIC classification data for June of year t.3 Many of our tests require the presence of COMPUSTAT data on earnings, sales, book equity, market equity, and total assets for fiscal year t - 1.",
          "page": 7,
          "line_start": 331,
          "line_end": 350,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/hou-2006-publisher.txt",
          "href": "../papers/hou-2006/hou-2006-publisher.pdf#page=7",
          "open_label": "查看 PDF 第 7 页"
        },
        {
          "text": "We perform the above culations each year for each industry, and then average the values over the 3 years.",
          "page": 8,
          "line_start": 398,
          "line_end": 447,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/hou-2006-publisher.txt",
          "href": "../papers/hou-2006/hou-2006-publisher.pdf#page=8",
          "open_label": "查看 PDF 第 8 页"
        },
        {
          "text": "Characteristics of Concentration-Sorted Portfolios",
          "page": 9,
          "line_start": 398,
          "line_end": 447,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/hou-2006-publisher.txt",
          "href": "../papers/hou-2006/hou-2006-publisher.pdf#page=9",
          "open_label": "查看 PDF 第 9 页"
        },
        {
          "text": "This content downloaded from 144.214.9.191 on Sun, 26 Jul 2026 03:33:44 UTC All use subject to https://about.jstor.org/terms",
          "page": 12,
          "line_start": 620,
          "line_end": 715,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/hou-2006-publisher.txt",
          "href": "../papers/hou-2006/hou-2006-publisher.pdf#page=12",
          "open_label": "查看 PDF 第 12 页"
        },
        {
          "text": "The right panel reports returns calculated by first forming industry portfolios, and then equally weighting in- dustry returns within each concentration quintile.",
          "page": 13,
          "line_start": 620,
          "line_end": 715,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/hou-2006-publisher.txt",
          "href": "../papers/hou-2006/hou-2006-publisher.pdf#page=13",
          "open_label": "查看 PDF 第 13 页"
        },
        {
          "text": "Table III Industry Concentration and the Cross-Section In June of each year, industries are grouped into quintiles based on their H(Sales) are reported, as well as the difference between Quintile 5 (most concentrated) and Qu Firm-level raw returns are unadjusted returns averaged across firms within the s subtracting the return on a characteristic-based benchmark from each firm's return based benchmarks are constructed following Daniel et al.",
          "page": 14,
          "line_start": 620,
          "line_end": 715,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/hou-2006-publisher.txt",
          "href": "../papers/hou-2006/hou-2006-publisher.pdf#page=14",
          "open_label": "查看 PDF 第 14 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "hou-2006",
        "title": "Industry Concentration and Average Stock Returns",
        "authors": "Kewei Hou; David T. Robinson",
        "year": "2006",
        "venue": "The Journal of Finance, 61(4), 1927-1956",
        "doi": "10.1111/j.1540-6261.2006.00893.x",
        "source_url": "https://doi.org/10.1111/j.1540-6261.2006.00893.x",
        "local_file": "papers/hou-2006/hou-2006-publisher.pdf",
        "local_href": "../papers/hou-2006/hou-2006-publisher.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 31,
        "access_status": "full_text_pdf_publisher"
      },
      "method_variants": [
        {
          "id": "hou-2006",
          "source_id": "hou-2006",
          "role": "original_paper",
          "source_label": "Industry Concentration and Average Stock Returns",
          "source_year": "2006",
          "formula": "",
          "formula_latex": "\\(\\displaystyle H_{j,t}=\\frac{1}{3}\\sum_{\\tau=t-2}^{t}\\sum_{i\\in j}\\left(\\frac{\\mathrm{SALE}_{i,\\tau}}{\\sum_{k\\in j}\\mathrm{SALE}_{k,\\tau}}\\right)^2\\)",
          "data_fields": "H(Sales) = sum of squared firm sales shares within each three-digit SIC industry, averaged over the prior 3 years",
          "calculation_window": {
            "zh": "The CRSP/Compustat sample covers July 1963-December 2001; fiscal-year t-1 accounting information is matched to July t-June t+1 returns.",
            "en": "The CRSP/Compustat sample covers July 1963-December 2001; fiscal-year t-1 accounting information is matched to July t-June t+1 returns."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "In June each year, three-digit SIC industries are sorted into H(Sales) quintiles. Firm-level tests equally weight firms within each concentration portfolio; industry-level tests first form industry portfolios and then equally weight industries within each quintile. annual 12 months, July through June.",
            "en": "In June each year, three-digit SIC industries are sorted into H(Sales) quintiles. Firm-level tests equally weight firms within each concentration portfolio; industry-level tests first form industry portfolios and then equally weight industries within each quintile. annual 12 months, July through June."
          },
          "direction": "H-L",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/hou-2006/hou-2006-publisher.pdf",
          "source_page": 7,
          "source_href": "../papers/hou-2006/hou-2006-publisher.pdf#page=7"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle S_{j,t}=\\sum_{i\\in j}\\mathrm{SALE}_{i,t},\\quad \\mathrm{HERF}_{j,t}=\\sum_{i\\in j}\\left(\\frac{\\mathrm{SALE}_{i,t}}{S_{j,t}}\\right)^2\\)",
        "formula_direction": "-1",
        "data_fields": "Compustat: SALE",
        "calculation_window": {
          "zh": "年频。",
          "en": "Annual."
        },
        "accounting_lag": {
          "zh": "按 chars_ciz 年频 jdate 对齐；未另行添加页面假设。",
          "en": "Aligned by the chars_ciz annual jdate rule; the page adds no extra assumption."
        },
        "source_label": "EquityChars CIZ · accounting.py · L1049",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L1049",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "1049",
        "code_frequency": {
          "zh": "年频。",
          "en": "Annual."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      }
    },
    {
      "id": "hire",
      "name": "Employee growth rate",
      "signal_definition": "Employee growth rate",
      "sort_variable": "hire",
      "code_direction": "L-H",
      "paper_direction": "L-H",
      "direction_label": "低值做多 · 高值做空",
      "agreement": "yes",
      "status": "paper_direction_verified",
      "code_long_leg": "Low",
      "code_short_leg": "High",
      "code_notes": "Repo attribution: Bazdresch, Belo, and Lin (2014). Formula table direction: -1.",
      "raw_signal": "HN(t) = [employees(t) - employees(t-1)] / [0.5 × (employees(t-1) + employees(t))]",
      "construction_summary": "The published article sorts firms into hiring-rate deciles and explicitly reports the L2H hiring return spread, long the lowest-hiring portfolio and short the highest-hiring portfolio.",
      "sample_and_timing": "NYSE/AMEX/NASDAQ common stocks, July 1965-June 2010; December-fiscal-year firms; at the end of June t, hiring measured at the end of t-1 predicts returns from July t through June t+1.",
      "breakpoints": "Deciles of the hiring-rate distribution among all but microcap firms; the resulting breakpoints are applied to the full universe.",
      "weighting": "Equal-weighted and value-weighted portfolio returns are both reported; the main L2H spread is 10.4% per year equal-weighted and 5.6% value-weighted.",
      "rebalancing_frequency": "annual",
      "holding_period": "12 months, July through June.",
      "paper_long_leg": "lowest-hiring-rate decile",
      "paper_short_leg": "highest-hiring-rate decile",
      "confidence": "high",
      "evidence_type": "publisher_final_jstor_pdf",
      "evidence_pointer": "extracted-text/bazdresch-2014-publisher.txt:298-381,409-426,500-504",
      "reviewer_notes": "Verified against the final Journal of Political Economy/JSTOR PDF; formula, sample, June formation, decile breakpoints, weighting, holding period, and low-minus-high direction are explicit.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "The key variables for the empirical work are the firm’s labor hiring and investment rates.5 The hiring rate is given by HNt 5 Ht =½0:5 \u0002 ðNt21 1 Nt Þ\u0003, in which the number of employees ðNtÞ is given by Compustat data item EMP, and net hiring ðHtÞ is given by the change in the number of em- ployees from year t 2 1 to year t ðHt 5 Nt 2 Nt21 Þ.",
          "page": 7,
          "line_start": 298,
          "line_end": 381,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/bazdresch-2014-publisher.txt",
          "href": "../papers/bazdresch-2014/bazdresch-2014-publisher.pdf#page=7",
          "open_label": "查看 PDF 第 7 页"
        },
        {
          "text": "To define the hiring rate breakpoints used to allocate firms into portfolios, we follow Fama and French ð2008Þ and compute the deciles of the hiring rate cross-sectional distribution of all but micro cap firms in NYSE-AMEX- NASDAQ.",
          "page": 8,
          "line_start": 298,
          "line_end": 381,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/bazdresch-2014-publisher.txt",
          "href": "../papers/bazdresch-2014/bazdresch-2014-publisher.pdf#page=8",
          "open_label": "查看 PDF 第 8 页"
        },
        {
          "text": "The average equal-weighted return spread ðL2H, the hiring return spreadÞ is 10.4 percent per year, and this value is more than 5.7 standard errors from zero.",
          "page": 9,
          "line_start": 409,
          "line_end": 426,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/bazdresch-2014-publisher.txt",
          "href": "../papers/bazdresch-2014/bazdresch-2014-publisher.pdf#page=9",
          "open_label": "查看 PDF 第 9 页"
        },
        {
          "text": "Note.—This table reports the average equal- and value-weighted excess stock returns and abnormal returns of 10 portfolios one-way sorted on hiring rate.",
          "page": 10,
          "line_start": 500,
          "line_end": 504,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/bazdresch-2014-publisher.txt",
          "href": "../papers/bazdresch-2014/bazdresch-2014-publisher.pdf#page=10",
          "open_label": "查看 PDF 第 10 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "bazdresch-2014",
        "title": "Labor Hiring, Investment, and Stock Return Predictability in the Cross Section",
        "authors": "Frederico Belo; Xiaoji Lin; Santiago Bazdresch",
        "year": "2014",
        "venue": "Journal of Political Economy",
        "doi": "10.1086/674549",
        "source_url": "https://www.journals.uchicago.edu/doi/10.1086/674549",
        "local_file": "papers/bazdresch-2014/bazdresch-2014-publisher.pdf",
        "local_href": "../papers/bazdresch-2014/bazdresch-2014-publisher.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 50,
        "access_status": "full_text_pdf_publisher"
      },
      "method_variants": [
        {
          "id": "bazdresch-2014",
          "source_id": "bazdresch-2014",
          "role": "original_paper",
          "source_label": "Labor Hiring, Investment, and Stock Return Predictability in the Cross Section",
          "source_year": "2014",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{HN}_{i,t}=\\frac{\\mathrm{EMP}_{i,t}-\\mathrm{EMP}_{i,t-1}}{0.5\\left(\\mathrm{EMP}_{i,t-1}+\\mathrm{EMP}_{i,t}\\right)}\\)",
          "data_fields": "HN(t) = [employees(t) - employees(t-1)] / [0.5 × (employees(t-1) + employees(t))]",
          "calculation_window": {
            "zh": "NYSE/AMEX/NASDAQ common stocks, July 1965-June 2010; December-fiscal-year firms; at the end of June t, hiring measured at the end of t-1 predicts returns from July t through June t+1.",
            "en": "NYSE/AMEX/NASDAQ common stocks, July 1965-June 2010; December-fiscal-year firms; at the end of June t, hiring measured at the end of t-1 predicts returns from July t through June t+1."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Deciles of the hiring-rate distribution among all but microcap firms; the resulting breakpoints are applied to the full universe. Equal-weighted and value-weighted portfolio returns are both reported; the main L2H spread is 10.4% per year equal-weighted and 5.6% value-weighted. annual 12 months, July through June.",
            "en": "Deciles of the hiring-rate distribution among all but microcap firms; the resulting breakpoints are applied to the full universe. Equal-weighted and value-weighted portfolio returns are both reported; the main L2H spread is 10.4% per year equal-weighted and 5.6% value-weighted. annual 12 months, July through June."
          },
          "direction": "L-H",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/bazdresch-2014/bazdresch-2014-publisher.pdf",
          "source_page": 7,
          "source_href": "../papers/bazdresch-2014/bazdresch-2014-publisher.pdf#page=7"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{HIRE}_{i,t}=\\begin{cases}(\\mathrm{EMP}_{i,t}-\\mathrm{EMP}_{i,t-1})/\\mathrm{EMP}_{i,t-1},&\\mathrm{EMP}_{i,t},\\mathrm{EMP}_{i,t-1}\\text{ available},\\\\0,&\\text{otherwise}.\\end{cases}\\)",
        "formula_direction": "-1",
        "data_fields": "Compustat: EMP",
        "calculation_window": {
          "zh": "年频。",
          "en": "Annual."
        },
        "accounting_lag": {
          "zh": "按 chars_ciz 年频 jdate 对齐；未另行添加页面假设。",
          "en": "Aligned by the chars_ciz annual jdate rule; the page adds no extra assumption."
        },
        "source_label": "EquityChars CIZ · accounting.py · L1028, L1035",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L1028",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "1028,1035",
        "code_frequency": {
          "zh": "年频。",
          "en": "Annual."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      }
    },
    {
      "id": "ill",
      "name": "Illiquidity rolling 3m",
      "signal_definition": "Illiquidity rolling 3m",
      "sort_variable": "ill",
      "code_direction": "H-L",
      "paper_direction": "N/A",
      "direction_label": "不适用",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Amihud (2002). Formula table direction: +1.",
      "raw_signal": "ILLIQ = average daily absolute return divided by dollar volume",
      "construction_summary": "The illiquidity measure is the daily ratio of absolute stock return to dollar volume, averaged over some period; higher illiquidity predicts higher expected returns.",
      "sample_and_timing": "Daily stock data; the abstract frames both cross-sectional and time-series tests rather than a single traded portfolio.",
      "breakpoints": "Daily ratio averaged over a period; no numeric cutoffs reported in the abstract.",
      "weighting": "Regression-based and time-series tests; no portfolio weights reported in the abstract.",
      "rebalancing_frequency": "N/A",
      "holding_period": "N/A",
      "paper_long_leg": "Higher illiquidity / higher average |return| per dollar volume.",
      "paper_short_leg": "Lower illiquidity / lower average |return| per dollar volume.",
      "confidence": "high",
      "evidence_type": "public_html",
      "evidence_pointer": "doi:10.1016/S1386-4181(01)00024-6; sciencedirect:abstract",
      "reviewer_notes": "Abstract-level support is strong for the ILLIQ definition; the paper does not describe a simple hedge recipe in the abstract.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "The study employs a new measure of illiquidity, ILLIQ, the ratio of a stock absolute dail y return to its daily dollar volume, averaged over some period (here, a year).",
          "page": 31,
          "line_start": null,
          "line_end": null,
          "method": "automatic_pdf_search",
          "method_label": "自动定位候选句",
          "text_path": "",
          "href": "../papers/amihud-2002/amihud-2002-nyu.pdf#page=31",
          "open_label": "查看 PDF 第 31 页"
        },
        {
          "text": "The illiquidity measure here is the average daily ratio of absolute stock return to dollar volume, which is easily obtained from daily stock data for long time series in most stock markets.",
          "page": 2,
          "line_start": null,
          "line_end": null,
          "method": "automatic_pdf_search",
          "method_label": "自动定位候选句",
          "text_path": "",
          "href": "../papers/amihud-2002/amihud-2002-nyu.pdf#page=2",
          "open_label": "查看 PDF 第 2 页"
        },
        {
          "text": "Table 3: The effect of market illiquidity on expected stock excess return Estimates of the models: (11) (RM-Rf)y = g0 + g1 lnAILLIQy-1 + g2 lnAILLIQyU + wy , RMy is the annual equall y-weighted market return and Rf is the one-year Treasury bill yield as of the beginning of year y. lnAILLIQy is market illiquidity, the logarithm of the average across stocks of the daily absolute stock return divided by the dail y dollar volume of the stock (averaged over the year). lnAILLIQyU is the unexpected market illiquidity, the residual from an autoregressive model of lnAILLIQy.",
          "page": 41,
          "line_start": null,
          "line_end": null,
          "method": "automatic_pdf_search",
          "method_label": "自动定位候选句",
          "text_path": "",
          "href": "../papers/amihud-2002/amihud-2002-nyu.pdf#page=41",
          "open_label": "查看 PDF 第 41 页"
        }
      ],
      "evidence_mode": "automatic",
      "paper": {
        "id": "amihud-2002",
        "title": "Illiquidity and Stock Returns: Cross-Section and Time-Series Effects",
        "authors": "Yakov Amihud",
        "year": "2002",
        "venue": "Journal of Financial Markets",
        "doi": "10.1016/S1386-4181(01)00024-6",
        "source_url": "https://www.sciencedirect.com/science/article/pii/S1386418101000246",
        "local_file": "papers/amihud-2002/amihud-2002-nyu.pdf",
        "local_href": "../papers/amihud-2002/amihud-2002-nyu.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 50,
        "access_status": "full_text_pdf_verified"
      },
      "method_variants": [
        {
          "id": "amihud-2002",
          "source_id": "amihud-2002",
          "role": "original_paper",
          "source_label": "Illiquidity and Stock Returns: Cross-Section and Time-Series Effects",
          "source_year": "2002",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{ILLIQ}_{i,t}=\\frac{1}{D_{i,t}}\\sum_{d=1}^{D_{i,t}}\\frac{\\lvert R_{i,d}\\rvert}{\\mathrm{DollarVolume}_{i,d}}\\)",
          "data_fields": "ILLIQ = average daily absolute return divided by dollar volume",
          "calculation_window": {
            "zh": "Daily stock data; the abstract frames both cross-sectional and time-series tests rather than a single traded portfolio.",
            "en": "Daily stock data; the abstract frames both cross-sectional and time-series tests rather than a single traded portfolio."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Daily ratio averaged over a period; no numeric cutoffs reported in the abstract. Regression-based and time-series tests; no portfolio weights reported in the abstract. N/A N/A",
            "en": "Daily ratio averaged over a period; no numeric cutoffs reported in the abstract. Regression-based and time-series tests; no portfolio weights reported in the abstract. N/A N/A"
          },
          "direction": "N/A",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/amihud-2002/amihud-2002-nyu.pdf",
          "source_page": 31,
          "source_href": "../papers/amihud-2002/amihud-2002-nyu.pdf#page=31"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{ILL}_{i,t}=\\operatorname{Mean}_{d\\in W_t}\\left(\\frac{|\\mathrm{RET}_{i,d}|}{|\\mathrm{PRC}_{i,d}|\\,\\mathrm{VOL}_{i,d}}\\right)\\)",
        "formula_direction": "+1",
        "data_fields": "CRSP: PRC, RET, VOL",
        "calculation_window": {
          "zh": "日频输入；滚动 3 个月，至少 21 个观测。",
          "en": "Daily inputs; rolling three months with at least 21 observations."
        },
        "accounting_lag": {
          "zh": "信号在 t 月形成；最终输出将收益移至 t+1 月。",
          "en": "The signal is formed at month t; final output shifts the return to month t+1."
        },
        "source_label": "EquityChars CIZ · rolling_chars.py · L228",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/rolling_chars.py#L228",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/rolling_chars.py",
        "code_lines": "228",
        "code_frequency": {
          "zh": "日频输入；滚动 3 个月，至少 21 个观测。",
          "en": "Daily inputs; rolling three months with at least 21 observations."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      }
    },
    {
      "id": "indmom",
      "name": "Industry momentum",
      "signal_definition": "Industry momentum",
      "sort_variable": "indmom",
      "code_direction": "H-L",
      "paper_direction": "H-L",
      "direction_label": "高值做多 · 低值做空",
      "agreement": "yes",
      "status": "paper_direction_verified",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Moskowitz and Grinblatt (1999). Formula table has no entry for this signal.",
      "raw_signal": "lagged industry return",
      "construction_summary": "Forms 20 value-weighted two-digit-SIC industry portfolios monthly, ranks industries by L-month lagged returns, and forms IM(L,H) industry momentum portfolios long past winning industries and short past losing industries; main analysis emphasizes six-month ranking/six-month holding.",
      "sample_and_timing": "CRSP/COMPUSTAT; 20 value-weighted industry portfolios formed monthly from July 1963 to July 1995.",
      "breakpoints": "Top three and bottom three industries by past L-month return; table also defines middle three ranks 9-11.",
      "weighting": "Industries are value-weighted internally; winner and loser sides are equal-weighted across selected industries.",
      "rebalancing_frequency": "Monthly.",
      "holding_period": "H months; main six-month hold, with H = 1, 6, 12, 24, or 36 months tested.",
      "paper_long_leg": "highest past-return industries / winners",
      "paper_short_leg": "lowest past-return industries / losers",
      "confidence": "high",
      "evidence_type": "extracted_text",
      "evidence_pointer": "extracted-text/moskowitz-1999.txt:221-243,591-615,1179-1194,1230-1240,1460-1465",
      "reviewer_notes": "Simple industry-level return-sort strategy; distinguish from individual-stock momentum.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "We adjust industry returns for size (market capitalization and book-to-market equity (BE/ME), since much research has documented the ability of these variables to capture the cross section of expected re turns.4 Table I reports the size and BE/ME-adjusted industry returns, wh stocks within the industry are matched with well-diversified portfolios similar size and BE/ME, and the value-weighted average of stock returns",
          "page": 5,
          "line_start": 221,
          "line_end": 243,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/moskowitz-1999.txt",
          "href": "../papers/moskowitz-1999/moskowitz-grinblatt-1999-jstor.pdf#page=5",
          "open_label": "查看 PDF 第 5 页"
        },
        {
          "text": "To analyze the components in equation (6), we form winners - losers self- financing momentum investment strategies in individual stocks by ranking stocks based on their prior L-month returns and forming a zero-cost portfo- lio of the highest past L-month return stocks funded by shorting a portfolio of low past return stocks.",
          "page": 11,
          "line_start": 591,
          "line_end": 615,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/moskowitz-1999.txt",
          "href": "../papers/moskowitz-1999/moskowitz-grinblatt-1999-jstor.pdf#page=11",
          "open_label": "查看 PDF 第 11 页"
        },
        {
          "text": "Ranking the 20 industries based on their L-month lagged returns, we for portfolios of the highest and lowest past performing industries, hold t for H months, and rebalance monthly.",
          "page": 22,
          "line_start": 1179,
          "line_end": 1194,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/moskowitz-1999.txt",
          "href": "../papers/moskowitz-1999/moskowitz-grinblatt-1999-jstor.pdf#page=22",
          "open_label": "查看 PDF 第 22 页"
        },
        {
          "text": "The industry momentum portfolios are formed based on L-month lagged returns and the IM(L, H) industry momentum trading strategy, where the winners portfolio is the equal-wei industries, the middle portfolio is the equal-weighted return of the middle three momentum in weighted return of the lowest three momentum industries.",
          "page": 23,
          "line_start": 1230,
          "line_end": 1240,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/moskowitz-1999.txt",
          "href": "../papers/moskowitz-1999/moskowitz-grinblatt-1999-jstor.pdf#page=23",
          "open_label": "查看 PDF 第 23 页"
        },
        {
          "text": "Diagnostics on Industry Momentum Trading Strateg Summary statistics on the industries that comprise our industry momentum trading strategies ar IM(1,1) industry momentum trading strategy, where the winners are the highest three past one- lowest three past one-month return industries.",
          "page": 28,
          "line_start": 1460,
          "line_end": 1465,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/moskowitz-1999.txt",
          "href": "../papers/moskowitz-1999/moskowitz-grinblatt-1999-jstor.pdf#page=28",
          "open_label": "查看 PDF 第 28 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "moskowitz-1999",
        "title": "Do Industries Explain Momentum?",
        "authors": "Tobias J. Moskowitz and Mark Grinblatt",
        "year": "1999",
        "venue": "The Journal of Finance",
        "doi": "10.1111/0022-1082.00146",
        "source_url": "https://doi.org/10.1111/0022-1082.00146",
        "local_file": "papers/moskowitz-1999/moskowitz-grinblatt-1999-jstor.pdf",
        "local_href": "../papers/moskowitz-1999/moskowitz-grinblatt-1999-jstor.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 43,
        "access_status": "full_text_pdf_jstor"
      },
      "method_variants": [
        {
          "id": "moskowitz-1999",
          "source_id": "moskowitz-1999",
          "role": "original_paper",
          "source_label": "Do Industries Explain Momentum?",
          "source_year": "1999",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{INDMOM}_{j,t}=\\sum_{i\\in j}w^{ME}_{i,t-1}\\!\\left[\\prod_{k=1}^{L}(1+R_{i,t-k})-1\\right]\\)",
          "data_fields": "lagged industry return",
          "calculation_window": {
            "zh": "CRSP/COMPUSTAT; 20 value-weighted industry portfolios formed monthly from July 1963 to July 1995.",
            "en": "CRSP/COMPUSTAT; 20 value-weighted industry portfolios formed monthly from July 1963 to July 1995."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Top three and bottom three industries by past L-month return; table also defines middle three ranks 9-11. Industries are value-weighted internally; winner and loser sides are equal-weighted across selected industries. Monthly. H months; main six-month hold, with H = 1, 6, 12, 24, or 36 months tested.",
            "en": "Top three and bottom three industries by past L-month return; table also defines middle three ranks 9-11. Industries are value-weighted internally; winner and loser sides are equal-weighted across selected industries. Monthly. H months; main six-month hold, with H = 1, 6, 12, 24, or 36 months tested."
          },
          "direction": "H-L",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/moskowitz-1999/moskowitz-grinblatt-1999-jstor.pdf",
          "source_page": 5,
          "source_href": "../papers/moskowitz-1999/moskowitz-grinblatt-1999-jstor.pdf#page=5"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{INDMOM}_{i,t}=\\frac{\\sum_{j:\\mathrm{FFI49}_j=\\mathrm{FFI49}_i}\\mathrm{ME}_{j,t}\\,\\mathrm{MOM6M}_{j,t}}{\\sum_{j:\\mathrm{FFI49}_j=\\mathrm{FFI49}_i}\\mathrm{ME}_{j,t}}\\)",
        "formula_direction": "",
        "data_fields": "Fama–French 49 industry",
        "calculation_window": {
          "zh": "月频。",
          "en": "Monthly."
        },
        "accounting_lag": {
          "zh": "信号在 t 月形成；最终输出将收益移至 t+1 月。",
          "en": "The signal is formed at month t; final output shifts the return to month t+1."
        },
        "source_label": "EquityChars CIZ · accounting.py · L2361, L2477",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L2361",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "2361,2477",
        "code_frequency": {
          "zh": "月频。",
          "en": "Monthly."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      }
    },
    {
      "id": "invest",
      "name": "Capital expenditures and inventory",
      "signal_definition": "Capital expenditures and inventory",
      "sort_variable": "invest",
      "code_direction": "L-H",
      "paper_direction": "L-H",
      "direction_label": "低值做多 · 高值做空",
      "agreement": "yes",
      "status": "paper_direction_verified",
      "code_long_leg": "Low",
      "code_short_leg": "High",
      "code_notes": "Repo attribution: Chen and Zhang (2010). Formula table has no entry for this signal.",
      "raw_signal": "capital expenditures and inventory",
      "construction_summary": "Annual change in gross property, plant, and equipment plus annual change in inventories, scaled by lagged total assets.",
      "sample_and_timing": "Annual Compustat signal; the published article forms monthly investment-factor returns from low- and high-investment stocks.",
      "breakpoints": "Independent 30/40/30 sorts on size, book-to-market, and investment-to-assets, producing 27 portfolios.",
      "weighting": "Value-weighted returns within the 27 portfolios; INV averages the nine low-investment portfolios minus the nine high-investment portfolios.",
      "rebalancing_frequency": "Annual accounting signal; portfolios formed each June and factor returns measured monthly.",
      "holding_period": "One month.",
      "paper_long_leg": "Lowest 30% investment-to-assets.",
      "paper_short_leg": "Highest 30% investment-to-assets.",
      "confidence": "high",
      "evidence_type": "formal_published_exact_equivalent",
      "evidence_pointer": "extracted-text/lyandres-2008-publisher.txt:1520-1544@papers/lyandres-2008/lyandres-sun-zhang-2008.pdf; extracted-text/lyandres-2008-publisher.txt:1550-1562@papers/lyandres-2008/lyandres-sun-zhang-2008.pdf; extracted-text/fallahgoul-2024-supplement.txt:4718-4724@supporting-information/fallahgoul-2024/fallahgoul-franstianto-lin-2024-supplement.pdf",
      "reviewer_notes": "The RFS typeset final directly matches the repository formula and verifies the L-H factor, breakpoints, and weighting. The repository's Chen-Zhang 2010 JF citation is withdrawn/incorrect, and Hou (2015) uses ΔA/A; Lyandres-Sun-Zhang (2008) is therefore retained as the exact published equivalent.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "We define the investment factor, denoted INV, as the average returns of the nine low investment-to- assets portfolios minus the average returns of the nine high investment-to-assets portfolios.",
          "page": 13,
          "line_start": 1520,
          "line_end": 1544,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/lyandres-2008-publisher.txt",
          "source_file": "papers/lyandres-2008/lyandres-sun-zhang-2008.pdf",
          "href": "../papers/lyandres-2008/lyandres-sun-zhang-2008.pdf#page=13",
          "open_label": "查看 PDF 第 13 页"
        },
        {
          "text": "The investment factor is defined as INV ≡ (1/9) �3 i=1 �3 j=1 pi j1 − (1/9) �3 i=1 �3 j=1 pi j3.",
          "page": 14,
          "line_start": 1550,
          "line_end": 1562,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/lyandres-2008-publisher.txt",
          "source_file": "papers/lyandres-2008/lyandres-sun-zhang-2008.pdf",
          "href": "../papers/lyandres-2008/lyandres-sun-zhang-2008.pdf#page=14",
          "open_label": "查看 PDF 第 14 页"
        },
        {
          "text": "invest Capital expenditures and inventory Compustat Annual (Change in gross property, plant, and equipment (ppegt) + change in inventories (invt)) / total assets (at) in year t-1",
          "page": 39,
          "line_start": 4718,
          "line_end": 4724,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/fallahgoul-2024-supplement.txt",
          "source_file": "supporting-information/fallahgoul-2024/fallahgoul-franstianto-lin-2024-supplement.pdf",
          "href": "../supporting-information/fallahgoul-2024/fallahgoul-franstianto-lin-2024-supplement.pdf#page=39",
          "open_label": "查看 PDF 第 39 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "lyandres-2008",
        "title": "The New Issues Puzzle: Testing the Investment-Based Explanation",
        "authors": "Evgeny Lyandres; Le Sun; Lu Zhang",
        "year": "2008",
        "venue": "The Review of Financial Studies, 21(6), 2825-2855",
        "doi": "10.1093/rfs/hhm058",
        "source_url": "https://academic.oup.com/rfs/article/21/6/2825/1574519",
        "local_file": "papers/lyandres-2008/lyandres-sun-zhang-2008.pdf",
        "local_href": "../papers/lyandres-2008/lyandres-sun-zhang-2008.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 31,
        "access_status": "full_text_pdf_publisher_typeset"
      },
      "method_variants": [
        {
          "id": "lyandres-2008",
          "source_id": "lyandres-2008",
          "role": "original_paper",
          "source_label": "The New Issues Puzzle: Testing the Investment-Based Explanation",
          "source_year": "2008",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{INVEST}_{i,t}=\\frac{\\Delta\\mathrm{PPEGT}_{i,t}+\\Delta\\mathrm{INVT}_{i,t}}{\\mathrm{AT}_{i,t-1}}\\)",
          "data_fields": "capital expenditures and inventory",
          "calculation_window": {
            "zh": "Annual Compustat signal; the published article forms monthly investment-factor returns from low- and high-investment stocks.",
            "en": "Annual Compustat signal; the published article forms monthly investment-factor returns from low- and high-investment stocks."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Independent 30/40/30 sorts on size, book-to-market, and investment-to-assets, producing 27 portfolios. Value-weighted returns within the 27 portfolios; INV averages the nine low-investment portfolios minus the nine high-investment portfolios. Annual accounting signal; portfolios formed each June and factor returns measured monthly. One month.",
            "en": "Independent 30/40/30 sorts on size, book-to-market, and investment-to-assets, producing 27 portfolios. Value-weighted returns within the 27 portfolios; INV averages the nine low-investment portfolios minus the nine high-investment portfolios. Annual accounting signal; portfolios formed each June and factor returns measured monthly. One month."
          },
          "direction": "L-H",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/lyandres-2008/lyandres-sun-zhang-2008.pdf",
          "source_page": 13,
          "source_href": "../papers/lyandres-2008/lyandres-sun-zhang-2008.pdf#page=13"
        },
        {
          "id": "fallahgoul-2024",
          "source_id": "fallahgoul-2024",
          "role": "published_replication",
          "source_label": "Fallahgoul, Franstianto & Lin — Journal Supplement",
          "source_year": "2024",
          "formula": "INVEST = (ΔPPEGT + ΔINVT) / AT(t−1)",
          "formula_latex": "\\(\\displaystyle \\mathrm{INVEST}_{i,t}=\\frac{\\Delta\\mathrm{PPEGT}_{i,t}+\\Delta\\mathrm{INVT}_{i,t}}{\\mathrm{AT}_{i,t-1}}\\)",
          "data_fields": "Compustat: PPEGT, INVT, AT",
          "calculation_window": {
            "zh": "年频；分母使用 t−1 总资产。",
            "en": "Annual; lagged total assets are used in the denominator."
          },
          "accounting_lag": {
            "zh": "该定义表未注明。",
            "en": "Not stated in the definition table."
          },
          "portfolio_rule": {
            "zh": "该行用于公式复核，没有单列组合形成规则。",
            "en": "This row cross-checks the formula and does not separately state portfolio formation."
          },
          "direction": "未注明",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "正式期刊补充材料与已核发表投资因子口径一致。",
            "en": "The formal journal supplement matches the audited published investment-factor definition."
          },
          "source_path": "supporting-information/fallahgoul-2024/fallahgoul-franstianto-lin-2024-supplement.pdf",
          "source_page": 39,
          "source_href": "../supporting-information/fallahgoul-2024/fallahgoul-franstianto-lin-2024-supplement.pdf#page=39"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{INVEST}_{i,t}=\\frac{\\Delta\\mathrm{PPEGT}_{i,t}+\\Delta\\mathrm{INVT}_{i,t}}{\\mathrm{AT}_{i,t-1}},\\quad \\mathrm{PPEGT}\\leftarrow\\mathrm{PPENT}\\ \\text{if PPEGT is missing}\\)",
        "formula_direction": "",
        "data_fields": "Compustat: PPEGT, PPENT, INVT, AT",
        "calculation_window": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "accounting_lag": {
          "zh": "年频与季频结果均在 CIZ 中对齐；最终比较 datadate，取较新的可用值。",
          "en": "CIZ aligns both annual and quarterly results, then selects the newer available value by datadate."
        },
        "source_label": "EquityChars CIZ · accounting.py · L633, L1666",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L633",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "633,1666",
        "code_frequency": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "reconcile_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/impute_rank_output.py#L85",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写。年频与季频同时可用时，最终输出按 datadate 选择较新的非空值。",
          "en": "Formula transcribed from chars_ciz. When annual and quarterly values both exist, final output selects the newer non-null value by datadate."
        }
      }
    },
    {
      "id": "lev",
      "name": "Leverage",
      "signal_definition": "Leverage",
      "sort_variable": "lev",
      "code_direction": "H-L",
      "paper_direction": "not-simple",
      "direction_label": "非简单多空",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Bhandari (1988). Formula table direction: +1.",
      "raw_signal": "(book value of total assets - book value of common equity) / market value of common equity",
      "construction_summary": "DER is tested in a cross-sectional expected-return equation with LTEQ and BETA, after sorting stocks into 27 portfolios by size, portfolio-formation beta, and DER; the paper reports implied maximum-minus-minimum DER return differences but does not define a simple buy-high/sell-low strategy.",
      "sample_and_timing": "Monthly CRSP returns with COMPUSTAT accounting values; for each test subperiod, LTEQ and DER use latest available prior accounting values and portfolios/variables are updated for each new subperiod.",
      "breakpoints": "Three equal-sized groups on LTEQ, then three on portfolio-formation BETA, then three on DER, yielding 27 portfolios.",
      "weighting": "Equal-weighted stocks within each portfolio; regression/portfolio tests, not a stated long-short portfolio.",
      "rebalancing_frequency": "Updated for each new subperiod; not updated within a subperiod.",
      "holding_period": "Monthly test returns within each subperiod.",
      "paper_long_leg": "high DER / maximum average DER portfolios",
      "paper_short_leg": "low DER / minimum average DER portfolios",
      "confidence": "high",
      "evidence_type": "extracted_text",
      "evidence_pointer": "extracted-text/bhandari-1988.txt:134-173,258-285,632-652,762-765,1116-1121",
      "reviewer_notes": "Original text defines DER precisely and supports a positive DER-return relation, but the construction is cross-sectional/27-portfolio testing; do not promote the max-minus-min implied difference to a simple H-L LMS.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "Subscript i represents the common stock i, and E(j)'s are assumed to be fixed within a This content downloaded from 144.214.9.191 on Sat, 25 Jul 2026 15:48:58 UTC All use subject to https://about.jstor.org/terms",
          "page": 3,
          "line_start": 134,
          "line_end": 173,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/bhandari-1988.txt",
          "href": "../papers/bhandari-1988/bhandari-1988-jstor.pdf#page=3",
          "open_label": "查看 PDF 第 3 页"
        },
        {
          "text": "DER is the ratio: book value of total assets - book value of common equity market value of common equity measured at the accounting year-ends.",
          "page": 4,
          "line_start": 134,
          "line_end": 173,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/bhandari-1988.txt",
          "href": "../papers/bhandari-1988/bhandari-1988-jstor.pdf#page=4",
          "open_label": "查看 PDF 第 4 页"
        },
        {
          "text": "All sample stocks are first ranked on LTEQ and divided into three groups containing equal numbers of stocks.8 Within each of these groups, the stocks are ranked on the portfolio-formation BETA and subdivided into three equal-sized groups.",
          "page": 6,
          "line_start": 258,
          "line_end": 285,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/bhandari-1988.txt",
          "href": "../papers/bhandari-1988/bhandari-1988-jstor.pdf#page=6",
          "open_label": "查看 PDF 第 6 页"
        },
        {
          "text": "For example, they imply a difference in the expected returns of 5.83 percent [= (2.81 - 0.14) x 0.182 x 12] per annum (we ignore compounding in annualizing the results since we are dealing with \"excess\" returns) including January, 2.66 percent in January and 3.17 percent in the remaining months, between our maximum and minimum average DER portfolios, controlling for LTEQ and BETA, in the manufacturing-firms sample.",
          "page": 13,
          "line_start": 632,
          "line_end": 652,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/bhandari-1988.txt",
          "href": "../papers/bhandari-1988/bhandari-1988-jstor.pdf#page=13",
          "open_label": "查看 PDF 第 13 页"
        },
        {
          "text": "the difference between returns on two particular portfolios, we can create a portfolio based on DERs that will give positive \"excess\" returns most of the time and slightly negative \"excess\" returns once in a while.",
          "page": 15,
          "line_start": 762,
          "line_end": 765,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/bhandari-1988.txt",
          "href": "../papers/bhandari-1988/bhandari-1988-jstor.pdf#page=15",
          "open_label": "查看 PDF 第 15 页"
        },
        {
          "text": "Thus, the ratio of long-term debt to equity is not able to differentiate between many firms that have different amounts of common equity relative to their total assets.",
          "page": 22,
          "line_start": 1116,
          "line_end": 1121,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/bhandari-1988.txt",
          "href": "../papers/bhandari-1988/bhandari-1988-jstor.pdf#page=22",
          "open_label": "查看 PDF 第 22 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "bhandari-1988",
        "title": "Debt/Equity Ratio and Expected Common Stock Returns: Empirical Evidence",
        "authors": "Laxmi Chand Bhandari",
        "year": "1988",
        "venue": "The Journal of Finance",
        "doi": "10.1111/j.1540-6261.1988.tb03952.x",
        "source_url": "https://onlinelibrary.wiley.com/doi/10.1111/j.1540-6261.1988.tb03952.x",
        "local_file": "papers/bhandari-1988/bhandari-1988-jstor.pdf",
        "local_href": "../papers/bhandari-1988/bhandari-1988-jstor.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 23,
        "access_status": "full_text_pdf_jstor"
      },
      "method_variants": [
        {
          "id": "bhandari-1988",
          "source_id": "bhandari-1988",
          "role": "original_paper",
          "source_label": "Debt/Equity Ratio and Expected Common Stock Returns: Empirical Evidence",
          "source_year": "1988",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{LEV}_{i,t}=\\frac{\\mathrm{AT}_{i,t}-\\mathrm{CEQ}_{i,t}}{\\mathrm{ME}_{i,t}}\\)",
          "data_fields": "(book value of total assets - book value of common equity) / market value of common equity",
          "calculation_window": {
            "zh": "Monthly CRSP returns with COMPUSTAT accounting values; for each test subperiod, LTEQ and DER use latest available prior accounting values and portfolios/variables are updated for each new subperiod.",
            "en": "Monthly CRSP returns with COMPUSTAT accounting values; for each test subperiod, LTEQ and DER use latest available prior accounting values and portfolios/variables are updated for each new subperiod."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Three equal-sized groups on LTEQ, then three on portfolio-formation BETA, then three on DER, yielding 27 portfolios. Equal-weighted stocks within each portfolio; regression/portfolio tests, not a stated long-short portfolio. Updated for each new subperiod; not updated within a subperiod. Monthly test returns within each subperiod.",
            "en": "Three equal-sized groups on LTEQ, then three on portfolio-formation BETA, then three on DER, yielding 27 portfolios. Equal-weighted stocks within each portfolio; regression/portfolio tests, not a stated long-short portfolio. Updated for each new subperiod; not updated within a subperiod. Monthly test returns within each subperiod."
          },
          "direction": "not-simple",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/bhandari-1988/bhandari-1988-jstor.pdf",
          "source_page": 3,
          "source_href": "../papers/bhandari-1988/bhandari-1988-jstor.pdf#page=3"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{LEV}_{i,t}=\\frac{\\mathrm{LT}_{i,t}}{\\mathrm{ME}_{i,t}}\\)",
        "formula_direction": "+1",
        "data_fields": "Compustat: LT",
        "calculation_window": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "accounting_lag": {
          "zh": "年频与季频结果均在 CIZ 中对齐；最终比较 datadate，取较新的可用值。",
          "en": "CIZ aligns both annual and quarterly results, then selects the newer available value by datadate."
        },
        "source_label": "EquityChars CIZ · accounting.py · L2313, L2430",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L2313",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "2313,2430",
        "code_frequency": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "reconcile_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/impute_rank_output.py#L85",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写。年频与季频同时可用时，最终输出按 datadate 选择较新的非空值。",
          "en": "Formula transcribed from chars_ciz. When annual and quarterly values both exist, final output selects the newer non-null value by datadate."
        }
      },
      "method_design": {
        "family": "cross_sectional_return_regression",
        "summary": {
          "zh": "先按规模、组合形成期β和债务权益比形成27个组合，再在横截面期望收益方程中联合估计债务权益比、账面杠杆和β的定价关系。",
          "en": "DER is tested in a cross-sectional expected-return equation with LTEQ and BETA, after sorting stocks into 27 portfolios by size, portfolio-formation beta, and DER; the paper reports implied maximum-minus-minimum DER return differences but does not define a simple buy-high/sell-low strategy."
        },
        "signal_role": {
          "zh": "横截面定价变量",
          "en": "Cross-sectional pricing variable"
        },
        "estimand": {
          "zh": "条件期望收益中的杠杆系数",
          "en": "Leverage coefficient in the conditional expected-return equation"
        },
        "interpretation": {
          "zh": "论文报告的是条件系数及其经济量级，不是按杠杆单变量形成的简单多空组合。",
          "en": ""
        }
      }
    },
    {
      "id": "lgr",
      "name": "Growth in long-term debt",
      "signal_definition": "Growth in long-term debt",
      "sort_variable": "lgr",
      "code_direction": "L-H",
      "paper_direction": "not-simple",
      "direction_label": "非简单多空",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "Low",
      "code_short_leg": "High",
      "code_notes": "Repo attribution: Richardson, Sloan, Soliman, and Tuna (2005). Formula table direction: -1.",
      "raw_signal": "change in total financial liabilities (ΔFINL), comprising long-term debt, debt in current liabilities, and preferred stock, scaled by average total assets",
      "construction_summary": "The closest published component to repository lgr is ΔFINL, which the article uses in accrual/financing decompositions and predictive return regressions; it is broader than growth in long-term debt and is not presented as a simple standalone lgr long/short portfolio.",
      "sample_and_timing": "Annual U.S. firm-year observations, 1962-2001; stock returns are measured over the 12 months beginning four months after fiscal year-end.",
      "breakpoints": "N/A; regression and decomposition evidence rather than a matching long-term-debt portfolio sort.",
      "weighting": "N/A",
      "rebalancing_frequency": "annual",
      "holding_period": "12 months, beginning four months after fiscal year-end.",
      "paper_long_leg": "N/A",
      "paper_short_leg": "N/A",
      "confidence": "high",
      "evidence_type": "publisher_full_text",
      "evidence_pointer": "extracted-text/richardson-2005-publisher.txt:163-167,221-235,665,1170-1172,1252,1374,1499,1705",
      "reviewer_notes": "Verified against the formal Journal of Accounting and Economics publisher full text. Mapping caveat: repository lgr is narrower than the paper's ΔFINL because ΔFINL also includes current debt and preferred stock.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "FINL=Long term debt (Compustat Item #9)+Debt in Current Liabilities (Compustat Item #34)+Preferred Stock (Compustat Item #130).",
          "page": 1,
          "line_start": 163,
          "line_end": 167,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/richardson-2005-publisher.txt",
          "href": "../papers/richardson-2005/richardson-2005-publisher-fulltext.html#:~:text=FINL%3DLong%20term%20debt%20%28Compustat%20Item%20%239%29%2BDebt%20in%20Current%20Liabilities%20%28Compustat%20Item%20%2334%29%2BPreferred%20Stock%20%28Compustat%20Item%20%23130%29.",
          "open_label": "在本地 HTML 中定位"
        },
        {
          "text": "Our third and final major category of accruals is the change in net financial assets, ΔFIN. ΔFIN is measured as the change in short-term investments and long-term investments less the change in short-term debt, long-term debt and preferred stock.",
          "page": 1,
          "line_start": 221,
          "line_end": 235,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/richardson-2005-publisher.txt",
          "href": "../papers/richardson-2005/richardson-2005-publisher-fulltext.html#:~:text=Our%20third%20and%20final%20major%20category%20of%20accruals%20is%20the%20change%20in%20net%20financial%20assets%2C%20%CE%94FIN.%20%CE%94FIN%20is%20measured%20as%20the%20change%20in%20short-term%20investments%20and%20long-term%20investments%20less%20",
          "open_label": "在本地 HTML 中定位"
        },
        {
          "text": "This table replicates the analysis in Table 5 after replacing the dependent variable with the next year's annual size-adjusted buy-hold stock return (measured starting four months after the fiscal year end).",
          "page": 1,
          "line_start": 1170,
          "line_end": 1172,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/richardson-2005-publisher.txt",
          "href": "../papers/richardson-2005/richardson-2005-publisher-fulltext.html#:~:text=This%20table%20replicates%20the%20analysis%20in%20Table%205%20after%20replacing%20the%20dependent%20variable%20with%20the%20next%20year%27s%20annual%20size-adjusted%20buy-hold%20stock%20return%20%28measured%20starting%20four%20months%20",
          "open_label": "在本地 HTML 中定位"
        },
        {
          "text": "RETt+1=ρ0+ρ1ROAt+ρ2ΔCOAt–ρ3ΔCOLt+ρ4ΔNCOAt–ρ5ΔNCOLt+ρ6ΔSTIt+ρ7ΔLTIt–ρ8ΔFINLt+υt+1",
          "page": 1,
          "line_start": 1252,
          "line_end": 1252,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/richardson-2005-publisher.txt",
          "href": "../papers/richardson-2005/richardson-2005-publisher-fulltext.html#:~:text=RETt%2B1%3D%CF%810%2B%CF%811ROAt%2B%CF%812%CE%94COAt%E2%80%93%CF%813%CE%94COLt%2B%CF%814%CE%94NCOAt%E2%80%93%CF%815%CE%94NCOLt%2B%CF%816%CE%94STIt%2B%CF%817%CE%94LTIt%E2%80%93%CF%818%CE%94FINLt%2B%CF%85t%2B1",
          "open_label": "在本地 HTML 中定位"
        },
        {
          "text": "Panel C of Table 8 reports regression results for the extended accrual decomposition.",
          "page": 1,
          "line_start": 1374,
          "line_end": 1374,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/richardson-2005-publisher.txt",
          "href": "../papers/richardson-2005/richardson-2005-publisher-fulltext.html#:~:text=Panel%20C%20of%20Table%208%20reports%20regression%20results%20for%20the%20extended%20accrual%20decomposition.",
          "open_label": "在本地 HTML 中定位"
        },
        {
          "text": "FINL=Long-term debt (Compustat Item #9)+Debt in Current Liabilities (Compustat Item #34)+Preferred Stock (Compustat Item #130).",
          "page": 1,
          "line_start": 1499,
          "line_end": 1499,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/richardson-2005-publisher.txt",
          "href": "../papers/richardson-2005/richardson-2005-publisher-fulltext.html#:~:text=FINL%3DLong-term%20debt%20%28Compustat%20Item%20%239%29%2BDebt%20in%20Current%20Liabilities%20%28Compustat%20Item%20%2334%29%2BPreferred%20Stock%20%28Compustat%20Item%20%23130%29.",
          "open_label": "在本地 HTML 中定位"
        },
        {
          "text": "Decomposition of ΔFIN into ΔSTI, ΔLTI and ΔFINL shows that the source of negative hedge portfolio returns is ΔFINL, which is the financing component having the strongest correlation with operating accruals. ΔLTI is associated with a positive hedge portfolio return of 5.2%, consistent with its lower persistence and reliability.",
          "page": 1,
          "line_start": 1705,
          "line_end": 1705,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/richardson-2005-publisher.txt",
          "href": "../papers/richardson-2005/richardson-2005-publisher-fulltext.html#:~:text=Decomposition%20of%20%CE%94FIN%20into%20%CE%94STI%2C%20%CE%94LTI%20and%20%CE%94FINL%20shows%20that%20the%20source%20of%20negative%20hedge%20portfolio%20returns%20is%20%CE%94FINL%2C%20which%20is%20the%20financing%20component%20having%20the%20strongest%20correlatio",
          "open_label": "在本地 HTML 中定位"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "richardson-2005",
        "title": "Accrual reliability, earnings persistence and stock prices",
        "authors": "Scott A. Richardson, Richard G. Sloan, Mark T. Soliman, and Irem Tuna",
        "year": "2005",
        "venue": "Journal of Accounting and Economics",
        "doi": "10.1016/j.jacceco.2005.04.005",
        "source_url": "https://www.sciencedirect.com/science/article/abs/pii/S0165410105000406",
        "local_file": "papers/richardson-2005/richardson-2005-publisher-fulltext.html",
        "local_href": "../papers/richardson-2005/richardson-2005-publisher-fulltext.html",
        "artifact_type": "html",
        "pdf_pages": null,
        "access_status": "full_text_html_publisher_verified"
      },
      "method_variants": [
        {
          "id": "richardson-2005",
          "source_id": "richardson-2005",
          "role": "original_paper",
          "source_label": "Accrual reliability, earnings persistence and stock prices",
          "source_year": "2005",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\Delta\\mathrm{FINL}_{i,t}=\\frac{\\Delta(\\mathrm{DLTT}+\\mathrm{DLC}+\\mathrm{PSTK})_{i,t}}{(\\mathrm{AT}_{i,t}+\\mathrm{AT}_{i,t-1})/2}\\)",
          "data_fields": "change in total financial liabilities (ΔFINL), comprising long-term debt, debt in current liabilities, and preferred stock, scaled by average total assets",
          "calculation_window": {
            "zh": "Annual U.S. firm-year observations, 1962-2001; stock returns are measured over the 12 months beginning four months after fiscal year-end.",
            "en": "Annual U.S. firm-year observations, 1962-2001; stock returns are measured over the 12 months beginning four months after fiscal year-end."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "N/A; regression and decomposition evidence rather than a matching long-term-debt portfolio sort. N/A annual 12 months, beginning four months after fiscal year-end.",
            "en": "N/A; regression and decomposition evidence rather than a matching long-term-debt portfolio sort. N/A annual 12 months, beginning four months after fiscal year-end."
          },
          "direction": "not-simple",
          "formula_match": "closest_paper_measure",
          "notes": {
            "zh": "论文只给出最接近口径，与项目指标不完全相同。",
            "en": "The paper provides the closest available measure; it is not identical to the project signal."
          },
          "source_path": "papers/richardson-2005/richardson-2005-publisher-fulltext.html",
          "source_page": 1,
          "source_href": "../papers/richardson-2005/richardson-2005-publisher-fulltext.html#:~:text=FINL%3DLong%20term%20debt%20%28Compustat%20Item%20%239%29%2BDebt%20in%20Current%20Liabilities%20%28Compustat%20Item%20%2334%29%2BPreferred%20Stock%20%28Compustat%20Item%20%23130%29."
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{LGR}_{i,t}=\\frac{\\mathrm{LT}_{i,t}}{\\mathrm{LT}_{i,t-1}}-1\\)",
        "formula_direction": "-1",
        "data_fields": "Compustat: LT",
        "calculation_window": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "accounting_lag": {
          "zh": "年频与季频结果均在 CIZ 中对齐；最终比较 datadate，取较新的可用值。",
          "en": "CIZ aligns both annual and quarterly results, then selects the newer available value by datadate."
        },
        "source_label": "EquityChars CIZ · accounting.py · L545, L1676",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L545",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "545,1676",
        "code_frequency": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "reconcile_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/impute_rank_output.py#L85",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写。年频与季频同时可用时，最终输出按 datadate 选择较新的非空值。",
          "en": "Formula transcribed from chars_ciz. When annual and quarterly values both exist, final output selects the newer non-null value by datadate."
        }
      },
      "method_design": {
        "family": "cross_sectional_return_regression",
        "summary": {
          "zh": "最接近项目长期债务增长的文献变量是更宽泛的融资负债变动ΔFINL；论文在应计与融资分解后的预测收益回归中检验该变量。",
          "en": "The closest published component to repository lgr is ΔFINL, which the article uses in accrual/financing decompositions and predictive return regressions; it is broader than growth in long-term debt and is not presented as a simple standalone lgr long/short portfolio."
        },
        "signal_role": {
          "zh": "最接近的文献解释变量",
          "en": "Closest source-paper predictor"
        },
        "estimand": {
          "zh": "未来股票收益",
          "en": "Future stock return"
        },
        "interpretation": {
          "zh": "回归变量宽于项目定义且未单独排序，因此不能据此赋予项目特征精确的多空方向。",
          "en": ""
        }
      }
    },
    {
      "id": "maxret",
      "name": "Maximum daily returns rolling 3m",
      "signal_definition": "Maximum daily returns rolling 3m",
      "sort_variable": "maxret",
      "code_direction": "L-H",
      "paper_direction": "N/A",
      "direction_label": "不适用",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "Low",
      "code_short_leg": "High",
      "code_notes": "Repo attribution: Bali, Cakici, and Whitelaw (2011). Formula table direction: -1.",
      "raw_signal": "maximum daily return over the past one month (MAX)",
      "construction_summary": "Sort stocks by MAX; the paper documents a negative relation between MAX and expected returns, with low-MAX stocks outperforming high-MAX stocks by more than 1% per month.",
      "sample_and_timing": "Prior one-month daily returns define MAX; portfolio returns are reported for July 1962-Dec 2005.",
      "breakpoints": "Deciles on MAX.",
      "weighting": "Decile sorts; the abstract reports low-vs-high decile return differences rather than a specific weighting rule.",
      "rebalancing_frequency": "Monthly.",
      "holding_period": "One month.",
      "paper_long_leg": "Low MAX / low lottery-like upside.",
      "paper_short_leg": "High MAX / high lottery-like upside.",
      "confidence": "high",
      "evidence_type": "public_html",
      "evidence_pointer": "doi:10.1016/j.jfineco.2010.08.014; sciencedirect:abstract",
      "reviewer_notes": "Abstract-level support is strong for the signal definition and the low-vs-high relation; the exact portfolio construction details beyond deciles are not fully spelled out in the abstract.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "The table reports average returns across the ten control deciles to produce decile portfolios with dispersion in MAX but with similar levels of the control variable. “Return difference” is the difference in average monthly returns between high MAX and low MAX portfolios. “Alpha difference” is the difference in four-factor alphas between high MAX and low MAX portfolios.",
          "page": null,
          "line_start": null,
          "line_end": null,
          "method": "automatic_html_search",
          "method_label": "自动定位 HTML 候选句",
          "text_path": "",
          "href": "../papers/bali-2011/bali-2011-publisher-fulltext.html#:~:text=The%20table%20reports%20average%20returns%20across%20the%20ten%20control%20deciles%20to%20produce%20decile%20portfolios%20with%20dispersion%20in%20MAX%20but%20with%20similar%20levels%20of%20the%20control%20variable.%20%E2%80%9CReturn%20differ",
          "open_label": "在本地 HTML 中定位"
        },
        {
          "text": "Consequently, we first form the MAX(1) portfolios based on the highest daily return over the past 3, 6, and 12 months, and the average raw return differences between the high MAX and low MAX portfolios are −0.63%, −0.52%, and −0.41% per month, respectively.",
          "page": null,
          "line_start": null,
          "line_end": null,
          "method": "automatic_html_search",
          "method_label": "自动定位 HTML 候选句",
          "text_path": "",
          "href": "../papers/bali-2011/bali-2011-publisher-fulltext.html#:~:text=Consequently%2C%20we%20first%20form%20the%20MAX%281%29%20portfolios%20based%20on%20the%20highest%20daily%20return%20over%20the%20past%203%2C%206%2C%20and%2012%20months%2C%20and%20the%20average%20raw%20return%20differences%20between%20the%20high%20MAX%20a",
          "open_label": "在本地 HTML 中定位"
        },
        {
          "text": "The table reports for each decile the average across the months in the sample of the median values within each month of various characteristics for the stocks—the maximum daily return (in percent), the market beta, the market capitalization (in millions of dollars), the book-to-market (BM) ratio, our measure of illiquidity (scaled by 105), the price (in dollars), the return in the portfolio formation month (labeled REV), the cumulative return over the 11 months prior to portfolio formation (labeled MOM), and the idiosyncratic volatility over the past one month (IVOL).",
          "page": null,
          "line_start": null,
          "line_end": null,
          "method": "automatic_html_search",
          "method_label": "自动定位 HTML 候选句",
          "text_path": "",
          "href": "../papers/bali-2011/bali-2011-publisher-fulltext.html#:~:text=The%20table%20reports%20for%20each%20decile%20the%20average%20across%20the%20months%20in%20the%20sample%20of%20the%20median%20values%20within%20each%20month%20of%20various%20characteristics%20for%20the%20stocks%E2%80%94the%20maximum%20daily%20ret",
          "open_label": "在本地 HTML 中定位"
        }
      ],
      "evidence_mode": "automatic",
      "paper": {
        "id": "bali-2011",
        "title": "Maxing Out: Stocks as Lotteries and the Cross-Section of Expected Returns",
        "authors": "Turan G. Bali; Nusret Cakici; Robert F. Whitelaw",
        "year": "2011",
        "venue": "Journal of Financial Economics",
        "doi": "10.1016/j.jfineco.2010.08.014",
        "source_url": "https://www.sciencedirect.com/science/article/pii/S0304405X1000190X",
        "local_file": "papers/bali-2011/bali-2011-publisher-fulltext.html",
        "local_href": "../papers/bali-2011/bali-2011-publisher-fulltext.html",
        "artifact_type": "html",
        "pdf_pages": null,
        "access_status": "full_text_html_publisher_verified"
      },
      "method_variants": [
        {
          "id": "bali-2011",
          "source_id": "bali-2011",
          "role": "original_paper",
          "source_label": "Maxing Out: Stocks as Lotteries and the Cross-Section of Expected Returns",
          "source_year": "2011",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{MAX}_{i,t}=\\max_{d\\in t-1}R_{i,d}\\)",
          "data_fields": "maximum daily return over the past one month (MAX)",
          "calculation_window": {
            "zh": "Prior one-month daily returns define MAX; portfolio returns are reported for July 1962-Dec 2005.",
            "en": "Prior one-month daily returns define MAX; portfolio returns are reported for July 1962-Dec 2005."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Deciles on MAX. Decile sorts; the abstract reports low-vs-high decile return differences rather than a specific weighting rule. Monthly. One month.",
            "en": "Deciles on MAX. Decile sorts; the abstract reports low-vs-high decile return differences rather than a specific weighting rule. Monthly. One month."
          },
          "direction": "N/A",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/bali-2011/bali-2011-publisher-fulltext.html",
          "source_page": null,
          "source_href": "../papers/bali-2011/bali-2011-publisher-fulltext.html#:~:text=The%20table%20reports%20average%20returns%20across%20the%20ten%20control%20deciles%20to%20produce%20decile%20portfolios%20with%20dispersion%20in%20MAX%20but%20with%20similar%20levels%20of%20the%20control%20variable.%20%E2%80%9CReturn%20differ"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{MAXRET}_{i,t}=\\max_{d\\in D_t}\\mathrm{RET}_{i,d}\\)",
        "formula_direction": "-1",
        "data_fields": "CRSP: RET",
        "calculation_window": {
          "zh": "日频输入；滚动 3 个月，至少 21 个观测。",
          "en": "Daily inputs; rolling three months with at least 21 observations."
        },
        "accounting_lag": {
          "zh": "信号在 t 月形成；最终输出将收益移至 t+1 月。",
          "en": "The signal is formed at month t; final output shifts the return to month t+1."
        },
        "source_label": "EquityChars CIZ · rolling_chars.py · L129",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/rolling_chars.py#L129",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/rolling_chars.py",
        "code_lines": "129",
        "code_frequency": {
          "zh": "日频输入；滚动 3 个月，至少 21 个观测。",
          "en": "Daily inputs; rolling three months with at least 21 observations."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      }
    },
    {
      "id": "me",
      "name": "the market equity",
      "signal_definition": "the market equity",
      "sort_variable": "me",
      "code_direction": "L-H",
      "paper_direction": "L-H",
      "direction_label": "低值做多 · 高值做空",
      "agreement": "yes",
      "status": "paper_direction_verified",
      "code_long_leg": "Low",
      "code_short_leg": "High",
      "code_notes": "Repo attribution: Banz (1981). Formula table direction: -1.",
      "raw_signal": "market equity = stock price times shares outstanding",
      "construction_summary": "The final article's illustrative arbitrage strategy ranks stocks solely by market value, invests equal dollar amounts in the 10, 20, or 50 smallest and largest firms, adjusts the two legs to the same beta, and reports small-minus-large returns.",
      "sample_and_timing": "All NYSE common stocks with at least five years of data during 1926-1975; the explicit arbitrage table covers 1931-1975.",
      "breakpoints": "Extreme size portfolios containing the 10, 20, or 50 smallest and largest firms at the beginning of each year.",
      "weighting": "Equal-weighted within each leg; legs are levered or unlevered to equal beta and form a zero-net-investment, zero-beta spread.",
      "rebalancing_frequency": "Annual constituent selection with monthly rebalancing.",
      "holding_period": "Five years.",
      "paper_long_leg": "Smallest / lowest-market-equity firms.",
      "paper_short_leg": "Largest / highest-market-equity firms.",
      "confidence": "high",
      "evidence_type": "publisher_final_pdf",
      "evidence_pointer": "extracted-text/banz-1981-publisher.txt:174-189,213-223,518-635",
      "reviewer_notes": "Verified against the formal 16-page Journal of Financial Economics scan. Table 3 explicitly labels the spread “small firms held long, large firms held short”; this is a low-minus-high size strategy.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "Monthly price and return data and the number of shares outstanding monthly returns file of the Center for Research in Security Prices (CRSP) of the University of Chicago.",
          "page": 4,
          "line_start": 174,
          "line_end": 189,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/banz-1981-publisher.txt",
          "href": "../papers/banz-1981/banz-1981-publisher.pdf#page=4",
          "open_label": "查看 PDF 第 4 页"
        },
        {
          "text": "The securities are assigned to one of twenty-five portfolios containing similar numbers of securities, first to one of five on the basis of the market value of the stock, then the securities in each of those five are in turn assigned to one of five portfolios on the basis of their beta.",
          "page": 5,
          "line_start": 213,
          "line_end": 223,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/banz-1981-publisher.txt",
          "href": "../papers/banz-1981/banz-1981-publisher.pdf#page=5",
          "open_label": "查看 PDF 第 5 页"
        },
        {
          "text": "As an illustration, consider putting equal dollar amounts into portfolios containing the smallest, largest and median-sized firms at the beginning of a year.",
          "page": 11,
          "line_start": 518,
          "line_end": 635,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/banz-1981-publisher.txt",
          "href": "../papers/banz-1981/banz-1981-publisher.pdf#page=11",
          "open_label": "查看 PDF 第 11 页"
        },
        {
          "text": "R.W Bunz, Return and firm SLW 25 portfolios - 0.00044 (- 2.54) - 0.00037 (-1.88) - 0.00056 (-1.91) - 0.00085 (-2.48) 0.00003 (-0 13) - 0.00023) (-0.65) - 0.00091 (- 1.84) on the portfolios containing the of the three differ- are then interpreted as ‘arbitrage’ returns, since, e.g., R,, is the zero net investment are used rather than more sophisticated that the size effect is not due to firms, is between rebalancmg includes stocks d&ted accurate only for the first month of",
          "page": 12,
          "line_start": 518,
          "line_end": 635,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/banz-1981-publisher.txt",
          "href": "../papers/banz-1981/banz-1981-publisher.pdf#page=12",
          "open_label": "查看 PDF 第 12 页"
        },
        {
          "text": "Table 3 Mean monthly returns on ‘arbitrage’ R,-R,=a*,+&(R,-R,) i,d n=lO Onerall period 1931Ll975 (2.99) Flue-year subperIod 1931-1935 (2.25) 19361940 (0 82) 1941-1945 (2 29) 1946-1950 (-1 17) 1951-1955 (-0.89) 1956-1960 (0.67) 1961-1965 (1.38) 1966-1970 (1.64) 1971-1975 (0 60) “Equally-welghted portfohos with n securities, adjusted for differences In market parentheses. %mall firms held long, large firms held short. ‘Small firms held long, median-stze firms held short. dMedlan-slze firms held lo",
          "page": 13,
          "line_start": 518,
          "line_end": 635,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/banz-1981-publisher.txt",
          "href": "../papers/banz-1981/banz-1981-publisher.pdf#page=13",
          "open_label": "查看 PDF 第 13 页"
        },
        {
          "text": "Since the fifty largest firms make up more than 25 percent of the total market value of NYSE stocks, it is not surprising return of a portfolio of those large firms can be explained by its relation with the value-weighted market index.",
          "page": 14,
          "line_start": 518,
          "line_end": 635,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/banz-1981-publisher.txt",
          "href": "../papers/banz-1981/banz-1981-publisher.pdf#page=14",
          "open_label": "查看 PDF 第 14 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "banz-1981",
        "title": "The Relationship between Return and Market Value of Common Stocks",
        "authors": "Rolf W. Banz",
        "year": "1981",
        "venue": "Journal of Financial Economics",
        "doi": "10.1016/0304-405X(81)90018-0",
        "source_url": "https://doi.org/10.1016/0304-405X(81)90018-0",
        "local_file": "papers/banz-1981/banz-1981-publisher.pdf",
        "local_href": "../papers/banz-1981/banz-1981-publisher.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 16,
        "access_status": "full_text_pdf_publisher"
      },
      "method_variants": [
        {
          "id": "banz-1981",
          "source_id": "banz-1981",
          "role": "original_paper",
          "source_label": "The Relationship between Return and Market Value of Common Stocks",
          "source_year": "1981",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{ME}_{i,t}=\\mathrm{Price}_{i,t}\\times\\mathrm{Shares}_{i,t}\\)",
          "data_fields": "market equity = stock price times shares outstanding",
          "calculation_window": {
            "zh": "All NYSE common stocks with at least five years of data during 1926-1975; the explicit arbitrage table covers 1931-1975.",
            "en": "All NYSE common stocks with at least five years of data during 1926-1975; the explicit arbitrage table covers 1931-1975."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Extreme size portfolios containing the 10, 20, or 50 smallest and largest firms at the beginning of each year. Equal-weighted within each leg; legs are levered or unlevered to equal beta and form a zero-net-investment, zero-beta spread. Annual constituent selection with monthly rebalancing. Five years.",
            "en": "Extreme size portfolios containing the 10, 20, or 50 smallest and largest firms at the beginning of each year. Equal-weighted within each leg; legs are levered or unlevered to equal beta and form a zero-net-investment, zero-beta spread. Annual constituent selection with monthly rebalancing. Five years."
          },
          "direction": "L-H",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/banz-1981/banz-1981-publisher.pdf",
          "source_page": 4,
          "source_href": "../papers/banz-1981/banz-1981-publisher.pdf#page=4"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{ME}_{c,t}=\\frac{1}{1000}\\sum_{s\\in c}|\\mathrm{PRC}_{s,t}|\\,\\mathrm{SHROUT}_{s,t}\\)",
        "formula_direction": "-1",
        "data_fields": "CRSP: PRC, SHROUT",
        "calculation_window": {
          "zh": "月频。",
          "en": "Monthly."
        },
        "accounting_lag": {
          "zh": "信号在 t 月形成；最终输出将收益移至 t+1 月。",
          "en": "The signal is formed at month t; final output shifts the return to month t+1."
        },
        "source_label": "EquityChars CIZ · accounting.py · L162, L185, L2079",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L162",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "162,185,2079",
        "code_frequency": {
          "zh": "月频。",
          "en": "Monthly."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      }
    },
    {
      "id": "me_ia",
      "name": "Industry-adjusted size",
      "signal_definition": "Industry-adjusted size",
      "sort_variable": "me_ia",
      "code_direction": "L-H",
      "paper_direction": "N/A",
      "direction_label": "不适用",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "Low",
      "code_short_leg": "High",
      "code_notes": "Repo attribution: Asness, Porter, and Stevens (2000). Formula table direction: -1.",
      "raw_signal": "industry-adjusted size",
      "construction_summary": "Fiscal-year-end market capitalization minus its industry mean; later literature calls the variable mve_ia.",
      "sample_and_timing": "Annual Compustat data; the later formal appendix records annual frequency.",
      "breakpoints": "Industry demeaning; no standalone portfolio cutoffs are reported in the formal cross-check.",
      "weighting": "Not reported.",
      "rebalancing_frequency": "Annual.",
      "holding_period": "Not reported.",
      "paper_long_leg": "Lower industry-adjusted size, following the repository sign only.",
      "paper_short_leg": "Higher industry-adjusted size, following the repository sign only.",
      "confidence": "medium",
      "evidence_type": "formal_published_si_crosscheck",
      "evidence_pointer": "extracted-text/fallahgoul-2024-supplement.txt:4793-4799@supporting-information/fallahgoul-2024/fallahgoul-franstianto-lin-2024-supplement.pdf; extracted-text/gu-2020-internet-appendix.txt:2398-2405@supporting-information/gu-2020/gu-kelly-xiu-2020-internet-appendix.pdf",
      "reviewer_notes": "The exact definition, annual frequency, and working-paper provenance are confirmed. The repository acronym me_ia corresponds to mve_ia in the formal supplements; no published standalone L-H portfolio recipe was found.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "mve_ia Industry-adjusted size Compustat Annual Fiscal-year-end market capitalization (mve_f) − industry mean of fiscal-year-end market capitalization",
          "page": 39,
          "line_start": 4793,
          "line_end": 4799,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/fallahgoul-2024-supplement.txt",
          "source_file": "supporting-information/fallahgoul-2024/fallahgoul-franstianto-lin-2024-supplement.pdf",
          "href": "../supporting-information/fallahgoul-2024/fallahgoul-franstianto-lin-2024-supplement.pdf#page=39",
          "open_label": "查看 PDF 第 39 页"
        },
        {
          "text": "mve ia Industry-adjusted size Asness, Porter & Stevens 2000, WP Compustat Annual 53 nincr",
          "page": 15,
          "line_start": 2398,
          "line_end": 2405,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/gu-2020-internet-appendix.txt",
          "source_file": "supporting-information/gu-2020/gu-kelly-xiu-2020-internet-appendix.pdf",
          "href": "../supporting-information/gu-2020/gu-kelly-xiu-2020-internet-appendix.pdf#page=15",
          "open_label": "查看 PDF 第 15 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "asness-2000",
        "title": "Predicting Stock Returns Using Industry-Relative Firm Characteristics",
        "authors": "Clifford S. Asness; R. Burt Porter; Ross L. Stevens",
        "year": "2000",
        "venue": "AQR Capital Management working paper",
        "doi": "10.2139/ssrn.213872",
        "source_url": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=213872",
        "local_file": "",
        "local_href": "",
        "artifact_type": "none",
        "pdf_pages": null,
        "access_status": "not_requested"
      },
      "method_variants": [
        {
          "id": "asness-2000",
          "source_id": "asness-2000",
          "role": "original_paper",
          "source_label": "Asness, Porter & Stevens — Predicting Stock Returns Using Industry-Relative Firm Characteristics",
          "source_year": "2000",
          "formula": "ME_IA(i,t) = ME(i,t) − mean[ME(j,t) | j ∈ industry(i)]",
          "formula_latex": "\\(\\displaystyle \\mathrm{ME\\_IA}_{i,t}=\\mathrm{ME}_{i,t}-\\overline{\\mathrm{ME}}_{\\mathrm{industry},t}\\)",
          "data_fields": "论文概念：market equity、industry membership",
          "calculation_window": {
            "zh": "年度公司特征；同一期横截面行业均值。原文样本为 1963-06 至 1998-11。",
            "en": "Annual firm characteristic and same-period cross-sectional industry mean. The source sample runs from June 1963 to November 1998."
          },
          "accounting_lag": {
            "zh": "公开摘要未说明。",
            "en": "Not stated in the public abstract."
          },
          "portfolio_rule": {
            "zh": "论文把规模拆为行业内与跨行业部分；公开摘要未给出可直接复刻的独立 L-H 组合窗口。",
            "en": "The paper decomposes size into within- and across-industry components; the public abstract does not state a standalone replicable L-H portfolio window."
          },
          "direction": "N/A",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "这是 me_ia 的直接来源，不是基础规模效应论文。",
            "en": "This is the direct source for me_ia, not a generic size-effect paper."
          },
          "source_path": "",
          "source_page": null,
          "source_href": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=213872"
        },
        {
          "id": "fallahgoul-2024",
          "source_id": "fallahgoul-2024",
          "role": "published_replication",
          "source_label": "Fallahgoul, Franstianto & Lin — Journal Supplement",
          "source_year": "2024",
          "formula": "ME_IA(i,t) = ME(i,t) − mean[ME(j,t) | j ∈ industry(i)]",
          "formula_latex": "\\(\\displaystyle \\mathrm{ME\\_IA}_{i,t}=\\mathrm{ME}_{i,t}-\\overline{\\mathrm{ME}}_{\\mathrm{industry},t}\\)",
          "data_fields": "Compustat: fiscal-year-end market capitalization and industry membership",
          "calculation_window": {
            "zh": "年频；同一期行业横截面去均值。",
            "en": "Annual; demeaned within the same-period industry cross-section."
          },
          "accounting_lag": {
            "zh": "该定义表未注明。",
            "en": "Not stated in the definition table."
          },
          "portfolio_rule": {
            "zh": "该行用于公式复核，没有单列组合形成规则。",
            "en": "This row cross-checks the formula and does not separately state portfolio formation."
          },
          "direction": "未注明",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "正式期刊补充材料使用财年末市值 mve_f。",
            "en": "The formal journal supplement uses fiscal-year-end market equity mve_f."
          },
          "source_path": "supporting-information/fallahgoul-2024/fallahgoul-franstianto-lin-2024-supplement.pdf",
          "source_page": 39,
          "source_href": "../supporting-information/fallahgoul-2024/fallahgoul-franstianto-lin-2024-supplement.pdf#page=39"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{ME\\_IA}_{i,t}=\\mathrm{ME}_{i,t}-\\overline{\\mathrm{ME}}_{\\mathrm{industry},t}\\)",
        "formula_direction": "-1",
        "data_fields": "Industry classification",
        "calculation_window": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "accounting_lag": {
          "zh": "年频与季频结果均在 CIZ 中对齐；最终比较 datadate，取较新的可用值。",
          "en": "CIZ aligns both annual and quarterly results, then selects the newer available value by datadate."
        },
        "source_label": "EquityChars CIZ · accounting.py · L2280, L2404",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L2280",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "2280,2404",
        "code_frequency": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "reconcile_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/impute_rank_output.py#L85",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写。年频与季频同时可用时，最终输出按 datadate 选择较新的非空值。",
          "en": "Formula transcribed from chars_ciz. When annual and quarterly values both exist, final output selects the newer non-null value by datadate."
        }
      }
    },
    {
      "id": "mom12m",
      "name": "Momentum rolling 12m",
      "signal_definition": "Momentum rolling 12m",
      "sort_variable": "mom12m",
      "code_direction": "H-L",
      "paper_direction": "H-L",
      "direction_label": "高值做多 · 低值做空",
      "agreement": "yes",
      "status": "paper_direction_verified",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Jegadeesh (1990). Formula table direction: +1.",
      "raw_signal": "twelve-month lagged stock return",
      "construction_summary": "S12 ranks securities in descending order by twelve-month lagged returns, forms ten equal-weight predictive portfolios, revises them monthly, and evaluates the P1-P10 zero-net-investment extreme-decile spread.",
      "sample_and_timing": "CRSP monthly returns; portfolio formation January 1934-1987; parameters and portfolios updated monthly.",
      "breakpoints": "Monthly deciles; P1 is highest twelve-month lagged return, P10 is lowest.",
      "weighting": "Equal weight within each decile; P1-P10 zero-net-investment spread reported.",
      "rebalancing_frequency": "Monthly.",
      "holding_period": "One month.",
      "paper_long_leg": "P1 / highest twelve-month lagged returns",
      "paper_short_leg": "P10 / lowest twelve-month lagged returns",
      "confidence": "high",
      "evidence_type": "extracted_text",
      "evidence_pointer": "extracted-text/jegadeesh-1990.txt:400-417,438-447,505-528",
      "reviewer_notes": "S12 is explicitly descending by twelve-month lagged return and reports the extreme-decile difference.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "Specifically, the securities in the top decile are assigned to portfolio P1, the securities in the next decile are assigned to portfolio P2, and so on, and each security in a portfolio is assigned equal weight.",
          "page": 8,
          "line_start": 400,
          "line_end": 417,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/jegadeesh-1990.txt",
          "href": "../papers/jegadeesh-1990/jegadeesh-1990-jstor.pdf#page=8",
          "open_label": "查看 PDF 第 8 页"
        },
        {
          "text": "Under this strategy the securities are ranked in descending order on the basis of twelve-month lagged returns, and the portfolios P 1 to P 10 are formed as before.",
          "page": 9,
          "line_start": 438,
          "line_end": 447,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/jegadeesh-1990.txt",
          "href": "../papers/jegadeesh-1990/jegadeesh-1990-jstor.pdf#page=9",
          "open_label": "查看 PDF 第 9 页"
        },
        {
          "text": "The F-statistics under the hypothesis that the abnormal returns on the portfolio P 1 to P10 are jointly equal to zero are 17.94 and 4.99 under the strategies S 1 and S 12, respectively, both significant at the one percent level.",
          "page": 10,
          "line_start": 505,
          "line_end": 528,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/jegadeesh-1990.txt",
          "href": "../papers/jegadeesh-1990/jegadeesh-1990-jstor.pdf#page=10",
          "open_label": "查看 PDF 第 10 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "jegadeesh-1990",
        "title": "Evidence of Predictable Behavior of Security Returns",
        "authors": "Narasimhan Jegadeesh",
        "year": "1990",
        "venue": "The Journal of Finance",
        "doi": "10.1111/j.1540-6261.1990.tb05110.x",
        "source_url": "https://doi.org/10.1111/j.1540-6261.1990.tb05110.x",
        "local_file": "papers/jegadeesh-1990/jegadeesh-1990-jstor.pdf",
        "local_href": "../papers/jegadeesh-1990/jegadeesh-1990-jstor.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 19,
        "access_status": "full_text_pdf_jstor"
      },
      "method_variants": [
        {
          "id": "jegadeesh-1990",
          "source_id": "jegadeesh-1990",
          "role": "original_paper",
          "source_label": "Evidence of Predictable Behavior of Security Returns",
          "source_year": "1990",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{S12}_{i,t}=R_{i,t-12}\\)",
          "data_fields": "twelve-month lagged stock return",
          "calculation_window": {
            "zh": "CRSP monthly returns; portfolio formation January 1934-1987; parameters and portfolios updated monthly.",
            "en": "CRSP monthly returns; portfolio formation January 1934-1987; parameters and portfolios updated monthly."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Monthly deciles; P1 is highest twelve-month lagged return, P10 is lowest. Equal weight within each decile; P1-P10 zero-net-investment spread reported. Monthly. One month.",
            "en": "Monthly deciles; P1 is highest twelve-month lagged return, P10 is lowest. Equal weight within each decile; P1-P10 zero-net-investment spread reported. Monthly. One month."
          },
          "direction": "H-L",
          "formula_match": "closest_paper_measure",
          "notes": {
            "zh": "论文只给出最接近口径，与项目指标不完全相同。",
            "en": "The paper provides the closest available measure; it is not identical to the project signal."
          },
          "source_path": "papers/jegadeesh-1990/jegadeesh-1990-jstor.pdf",
          "source_page": 8,
          "source_href": "../papers/jegadeesh-1990/jegadeesh-1990-jstor.pdf#page=8"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{MOM12M}_{i,t}=\\prod_{k=1}^{12}(1+\\mathrm{RET}_{i,t-k})-1\\)",
        "formula_direction": "+1",
        "data_fields": "CRSP: RET",
        "calculation_window": {
          "zh": "月频；收益滞后 1–12 月。",
          "en": "Monthly; return lags 1–12."
        },
        "accounting_lag": {
          "zh": "信号在 t 月形成；最终输出将收益移至 t+1 月。",
          "en": "The signal is formed at month t; final output shifts the return to month t+1."
        },
        "source_label": "EquityChars CIZ · accounting.py · L2128",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L2128",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "2128",
        "code_frequency": {
          "zh": "月频。",
          "en": "Monthly."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      }
    },
    {
      "id": "mom1m",
      "name": "Momentum",
      "signal_definition": "Momentum",
      "sort_variable": "mom1m",
      "code_direction": "L-H",
      "paper_direction": "N/A",
      "direction_label": "不适用",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "Low",
      "code_short_leg": "High",
      "code_notes": "Repo attribution: Jegadeesh and Titman (1993). Formula table direction: -1.",
      "raw_signal": "EquityChars uses the current one-month return, RET at t",
      "construction_summary": "The original paper does not construct a one-month formation signal. Its relative-strength strategies rank past returns over J = 3, 6, 9, or 12 months and buy winners minus losers. The paper therefore cannot supply a source-grounded LMS rule for EquityChars `mom1m`.",
      "sample_and_timing": "CRSP sample January 1965-December 1989 for the paper's 3-12 month strategies; not applicable to a one-month signal.",
      "breakpoints": "N/A; the paper has deciles for J = 3, 6, 9, and 12 months only.",
      "weighting": "N/A for the unmatched signal.",
      "rebalancing_frequency": "N/A for the unmatched signal.",
      "holding_period": "N/A for the unmatched signal.",
      "paper_long_leg": "N/A; no one-month portfolio in the paper.",
      "paper_short_leg": "N/A; no one-month portfolio in the paper.",
      "confidence": "high",
      "evidence_type": "publisher_pdf_cityu",
      "evidence_pointer": "extracted-text/jegadeesh-1993.txt:225-299 (Section I and Section II); /home/yunting/project/EquityChars/repo/documents/formula_docs/equity_characteristics_calculation.tex:235-236; papers/jegadeesh-1993/jegadeesh-titman-1993.pdf",
      "reviewer_notes": "This is a source-mapping mismatch, not evidence that the paper endorses EquityChars' L-H sign. The paper's actual tested momentum portfolios are H-L but do not include a one-month formation horizon.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "In each month t, the strategy buys the winner portfolio and sells the loser portfolio holding this position for K months.",
          "page": 5,
          "line_start": 225,
          "line_end": 299,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/jegadeesh-1993.txt",
          "href": "../papers/jegadeesh-1993/jegadeesh-titman-1993.pdf#page=5",
          "open_label": "查看 PDF 第 5 页"
        },
        {
          "text": "The probability of obtaining a single t-statistic as large as 4.28 (obtained with the 12-month/3-month strategy that skips a week) with 32 observations is less than 0.0006, as given by the Bonferroni inequality.5 The most successful zero-cost strategy selects stocks based on their returns over the previous 12 months and then holds the portfolio for 3 months.",
          "page": 6,
          "line_start": 225,
          "line_end": 299,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/jegadeesh-1993.txt",
          "href": "../papers/jegadeesh-1993/jegadeesh-titman-1993.pdf#page=6",
          "open_label": "查看 PDF 第 6 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "jegadeesh-1993",
        "title": "Returns to Buying Winners and Selling Losers: Implications for Stock Market Efficiency",
        "authors": "Narasimhan Jegadeesh and Sheridan Titman",
        "year": "1993",
        "venue": "The Journal of Finance",
        "doi": "10.1111/j.1540-6261.1993.tb04702.x",
        "source_url": "https://doi.org/10.1111/j.1540-6261.1993.tb04702.x",
        "local_file": "papers/jegadeesh-1993/jegadeesh-titman-1993.pdf",
        "local_href": "../papers/jegadeesh-1993/jegadeesh-titman-1993.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 28,
        "access_status": "full_text_pdf_cityu"
      },
      "method_variants": [
        {
          "id": "jegadeesh-1993",
          "source_id": "jegadeesh-1993",
          "role": "original_paper",
          "source_label": "Returns to Buying Winners and Selling Losers: Implications for Stock Market Efficiency",
          "source_year": "1993",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{MOM}_{i,t}^{(J)}=\\prod_{j=1}^{J}(1+R_{i,t-j})-1,\\qquad J\\in\\{3,6,9,12\\}\\)",
          "data_fields": "EquityChars uses the current one-month return, RET at t",
          "calculation_window": {
            "zh": "CRSP sample January 1965-December 1989 for the paper's 3-12 month strategies; not applicable to a one-month signal.",
            "en": "CRSP sample January 1965-December 1989 for the paper's 3-12 month strategies; not applicable to a one-month signal."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "N/A; the paper has deciles for J = 3, 6, 9, and 12 months only. N/A for the unmatched signal. N/A for the unmatched signal. N/A for the unmatched signal.",
            "en": "N/A; the paper has deciles for J = 3, 6, 9, and 12 months only. N/A for the unmatched signal. N/A for the unmatched signal. N/A for the unmatched signal."
          },
          "direction": "N/A",
          "formula_match": "closest_paper_measure",
          "notes": {
            "zh": "论文只给出最接近口径，与项目指标不完全相同。",
            "en": "The paper provides the closest available measure; it is not identical to the project signal."
          },
          "source_path": "papers/jegadeesh-1993/jegadeesh-titman-1993.pdf",
          "source_page": 5,
          "source_href": "../papers/jegadeesh-1993/jegadeesh-titman-1993.pdf#page=5"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{MOM1M}_{i,t}=\\mathrm{RET}_{i,t}\\)",
        "formula_direction": "-1",
        "data_fields": "CRSP: RET",
        "calculation_window": {
          "zh": "月频。",
          "en": "Monthly."
        },
        "accounting_lag": {
          "zh": "信号在 t 月形成；最终输出将收益移至 t+1 月。",
          "en": "The signal is formed at month t; final output shifts the return to month t+1."
        },
        "source_label": "EquityChars CIZ · accounting.py · L2126",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L2126",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "2126",
        "code_frequency": {
          "zh": "月频。",
          "en": "Monthly."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      }
    },
    {
      "id": "mom36m",
      "name": "Momentum rolling 36m",
      "signal_definition": "Momentum rolling 36m",
      "sort_variable": "mom36m",
      "code_direction": "L-H",
      "paper_direction": "N/A",
      "direction_label": "不适用",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "Low",
      "code_short_leg": "High",
      "code_notes": "Repo attribution: Jegadeesh and Titman (1993). Formula table direction: -1.",
      "raw_signal": "EquityChars uses cumulative returns from months t-12 through t-35",
      "construction_summary": "The original paper does not construct a 36-month formation signal. Its longest ranking period is 12 months; the paper's later 36-month analysis tracks post-formation performance of portfolios formed on six-month lagged returns and is not a 36-month sort.",
      "sample_and_timing": "CRSP sample January 1965-December 1989 for the paper's 3-12 month strategies; not applicable to a 36-month signal.",
      "breakpoints": "N/A; no 36-month formation sort.",
      "weighting": "N/A for the unmatched signal.",
      "rebalancing_frequency": "N/A for the unmatched signal.",
      "holding_period": "N/A for the unmatched signal.",
      "paper_long_leg": "N/A; no 36-month formation portfolio.",
      "paper_short_leg": "N/A; no 36-month formation portfolio.",
      "confidence": "high",
      "evidence_type": "publisher_pdf_cityu",
      "evidence_pointer": "extracted-text/jegadeesh-1993.txt:225-299 (J and K strategy definition),1150-1204 (36-month post-formation tracking); /home/yunting/project/EquityChars/repo/documents/formula_docs/equity_characteristics_calculation.tex:238-239; papers/jegadeesh-1993/jegadeesh-titman-1993.pdf",
      "reviewer_notes": "The 36 months in the paper are an event-time evaluation horizon, not the EquityChars raw-signal window. Treat the attribution as unsupported for this signal.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "In each month t, the strategy buys the winner portfolio and sells the loser portfolio holding this position for K months.",
          "page": 5,
          "line_start": 225,
          "line_end": 299,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/jegadeesh-1993.txt",
          "href": "../papers/jegadeesh-1993/jegadeesh-titman-1993.pdf#page=5",
          "open_label": "查看 PDF 第 5 页"
        },
        {
          "text": "The probability of obtaining a single t-statistic as large as 4.28 (obtained with the 12-month/3-month strategy that skips a week) with 32 observations is less than 0.0006, as given by the Bonferroni inequality.5 The most successful zero-cost strategy selects stocks based on their returns over the previous 12 months and then holds the portfolio for 3 months.",
          "page": 6,
          "line_start": 225,
          "line_end": 299,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/jegadeesh-1993.txt",
          "href": "../papers/jegadeesh-1993/jegadeesh-titman-1993.pdf#page=6",
          "open_label": "查看 PDF 第 6 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "jegadeesh-1993",
        "title": "Returns to Buying Winners and Selling Losers: Implications for Stock Market Efficiency",
        "authors": "Narasimhan Jegadeesh and Sheridan Titman",
        "year": "1993",
        "venue": "The Journal of Finance",
        "doi": "10.1111/j.1540-6261.1993.tb04702.x",
        "source_url": "https://doi.org/10.1111/j.1540-6261.1993.tb04702.x",
        "local_file": "papers/jegadeesh-1993/jegadeesh-titman-1993.pdf",
        "local_href": "../papers/jegadeesh-1993/jegadeesh-titman-1993.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 28,
        "access_status": "full_text_pdf_cityu"
      },
      "method_variants": [
        {
          "id": "jegadeesh-1993",
          "source_id": "jegadeesh-1993",
          "role": "original_paper",
          "source_label": "Returns to Buying Winners and Selling Losers: Implications for Stock Market Efficiency",
          "source_year": "1993",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{MOM}_{i,t}^{(J)}=\\prod_{j=1}^{J}(1+R_{i,t-j})-1,\\qquad J\\in\\{3,6,9,12\\}\\)",
          "data_fields": "EquityChars uses cumulative returns from months t-12 through t-35",
          "calculation_window": {
            "zh": "CRSP sample January 1965-December 1989 for the paper's 3-12 month strategies; not applicable to a 36-month signal.",
            "en": "CRSP sample January 1965-December 1989 for the paper's 3-12 month strategies; not applicable to a 36-month signal."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "N/A; no 36-month formation sort. N/A for the unmatched signal. N/A for the unmatched signal. N/A for the unmatched signal.",
            "en": "N/A; no 36-month formation sort. N/A for the unmatched signal. N/A for the unmatched signal. N/A for the unmatched signal."
          },
          "direction": "N/A",
          "formula_match": "closest_paper_measure",
          "notes": {
            "zh": "论文只给出最接近口径，与项目指标不完全相同。",
            "en": "The paper provides the closest available measure; it is not identical to the project signal."
          },
          "source_path": "papers/jegadeesh-1993/jegadeesh-titman-1993.pdf",
          "source_page": 5,
          "source_href": "../papers/jegadeesh-1993/jegadeesh-titman-1993.pdf#page=5"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{MOM36M}_{i,t}=\\prod_{k=13}^{36}(1+\\mathrm{RET}_{i,t-k})-1\\)",
        "formula_direction": "-1",
        "data_fields": "CRSP: RET",
        "calculation_window": {
          "zh": "月频；收益滞后 13–36 月。",
          "en": "Monthly; return lags 13–36."
        },
        "accounting_lag": {
          "zh": "信号在 t 月形成；最终输出将收益移至 t+1 月。",
          "en": "The signal is formed at month t; final output shifts the return to month t+1."
        },
        "source_label": "EquityChars CIZ · accounting.py · L2129",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L2129",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "2129",
        "code_frequency": {
          "zh": "月频。",
          "en": "Monthly."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      }
    },
    {
      "id": "mom60m",
      "name": "Momentum rolling 60m",
      "signal_definition": "Momentum rolling 60m",
      "sort_variable": "mom60m",
      "code_direction": "L-H",
      "paper_direction": "N/A",
      "direction_label": "不适用",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "Low",
      "code_short_leg": "High",
      "code_notes": "Repo attribution: Jegadeesh and Titman (1993). Formula table direction: -1.",
      "raw_signal": "EquityChars uses cumulative returns from months t-12 through t-59",
      "construction_summary": "The original paper does not construct a 60-month formation signal. It tests J = 3, 6, 9, or 12 month momentum strategies; its discussion of 3- to 5-year reversals describes prior literature rather than defining this EquityChars characteristic.",
      "sample_and_timing": "CRSP sample January 1965-December 1989 for the paper's 3-12 month strategies; not applicable to a 60-month signal.",
      "breakpoints": "N/A; no 60-month formation sort.",
      "weighting": "N/A for the unmatched signal.",
      "rebalancing_frequency": "N/A for the unmatched signal.",
      "holding_period": "N/A for the unmatched signal.",
      "paper_long_leg": "N/A; no 60-month formation portfolio.",
      "paper_short_leg": "N/A; no 60-month formation portfolio.",
      "confidence": "high",
      "evidence_type": "publisher_pdf_cityu",
      "evidence_pointer": "extracted-text/jegadeesh-1993.txt:67-80 (prior long-horizon reversal literature),225-299 (tested J and K horizons); /home/yunting/project/EquityChars/repo/documents/formula_docs/equity_characteristics_calculation.tex:241-242; papers/jegadeesh-1993/jegadeesh-titman-1993.pdf",
      "reviewer_notes": "The paper is not an authoritative construction source for the 12-to-59-month EquityChars signal; do not transfer the paper's H-L momentum sign to this unmatched horizon.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "De Bondt and Thaler (1985) show that over 3- to 5-year holding periods stocks that per- formed poorly over the previous 3 to 5 years achieve higher returns than stocks that performed well over the same period.",
          "page": 2,
          "line_start": 67,
          "line_end": 80,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/jegadeesh-1993.txt",
          "href": "../papers/jegadeesh-1993/jegadeesh-titman-1993.pdf#page=2",
          "open_label": "查看 PDF 第 2 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "jegadeesh-1993",
        "title": "Returns to Buying Winners and Selling Losers: Implications for Stock Market Efficiency",
        "authors": "Narasimhan Jegadeesh and Sheridan Titman",
        "year": "1993",
        "venue": "The Journal of Finance",
        "doi": "10.1111/j.1540-6261.1993.tb04702.x",
        "source_url": "https://doi.org/10.1111/j.1540-6261.1993.tb04702.x",
        "local_file": "papers/jegadeesh-1993/jegadeesh-titman-1993.pdf",
        "local_href": "../papers/jegadeesh-1993/jegadeesh-titman-1993.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 28,
        "access_status": "full_text_pdf_cityu"
      },
      "method_variants": [
        {
          "id": "jegadeesh-1993",
          "source_id": "jegadeesh-1993",
          "role": "original_paper",
          "source_label": "Returns to Buying Winners and Selling Losers: Implications for Stock Market Efficiency",
          "source_year": "1993",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{MOM}_{i,t}^{(J)}=\\prod_{j=1}^{J}(1+R_{i,t-j})-1,\\qquad J\\in\\{3,6,9,12\\}\\)",
          "data_fields": "EquityChars uses cumulative returns from months t-12 through t-59",
          "calculation_window": {
            "zh": "CRSP sample January 1965-December 1989 for the paper's 3-12 month strategies; not applicable to a 60-month signal.",
            "en": "CRSP sample January 1965-December 1989 for the paper's 3-12 month strategies; not applicable to a 60-month signal."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "N/A; no 60-month formation sort. N/A for the unmatched signal. N/A for the unmatched signal. N/A for the unmatched signal.",
            "en": "N/A; no 60-month formation sort. N/A for the unmatched signal. N/A for the unmatched signal. N/A for the unmatched signal."
          },
          "direction": "N/A",
          "formula_match": "closest_paper_measure",
          "notes": {
            "zh": "论文只给出最接近口径，与项目指标不完全相同。",
            "en": "The paper provides the closest available measure; it is not identical to the project signal."
          },
          "source_path": "papers/jegadeesh-1993/jegadeesh-titman-1993.pdf",
          "source_page": 2,
          "source_href": "../papers/jegadeesh-1993/jegadeesh-titman-1993.pdf#page=2"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{MOM60M}_{i,t}=\\prod_{k=13}^{60}(1+\\mathrm{RET}_{i,t-k})-1\\)",
        "formula_direction": "-1",
        "data_fields": "CRSP: RET",
        "calculation_window": {
          "zh": "月频；收益滞后 13–60 月。",
          "en": "Monthly; return lags 13–60."
        },
        "accounting_lag": {
          "zh": "信号在 t 月形成；最终输出将收益移至 t+1 月。",
          "en": "The signal is formed at month t; final output shifts the return to month t+1."
        },
        "source_label": "EquityChars CIZ · accounting.py · L2130",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L2130",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "2130",
        "code_frequency": {
          "zh": "月频。",
          "en": "Monthly."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      }
    },
    {
      "id": "mom6m",
      "name": "Momentum rolling 6m",
      "signal_definition": "Momentum rolling 6m",
      "sort_variable": "mom6m",
      "code_direction": "H-L",
      "paper_direction": "H-L",
      "direction_label": "高值做多 · 低值做空",
      "agreement": "yes",
      "status": "paper_direction_verified",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Jegadeesh and Titman (1993). Formula table direction: +1.",
      "raw_signal": "Past J-month compounded return; the representative strategy uses J = 6 months",
      "construction_summary": "At the beginning of every month, rank stocks by past J-month returns, form ten equal-weighted deciles, buy the highest-past-return winner decile, and sell the lowest-past-return loser decile. Positions are held K months with overlapping cohorts and monthly rebalancing; J and K each take 3, 6, 9, or 12 months, with a second family of strategies inserting a one-week skip.",
      "sample_and_timing": "CRSP daily-return file compounded to monthly returns; January 1965-December 1989; stocks need returns over the preceding J months.",
      "breakpoints": "Ten portfolios ranked ascending on J-month lagged returns; lowest-return decile is sell and highest-return decile is buy.",
      "weighting": "Equal-weighted decile portfolios; the published results use monthly rebalanced returns.",
      "rebalancing_frequency": "Monthly formation and rebalancing with K overlapping cohorts.",
      "holding_period": "K = 3, 6, 9, or 12 months; the representative case is 6 months.",
      "paper_long_leg": "Highest past-return decile (winners).",
      "paper_short_leg": "Lowest past-return decile (losers).",
      "confidence": "high",
      "evidence_type": "publisher_pdf_cityu",
      "evidence_pointer": "extracted-text/jegadeesh-1993.txt:225-299 (Section I construction and Section II result),332-393 (Table I notes and 32 strategies),1528-1544 (conclusion); papers/jegadeesh-1993/jegadeesh-titman-1993.pdf",
      "reviewer_notes": "The paper explicitly calls the zero-cost return winners minus losers / buy minus sell. This supports EquityChars' H-L direction for the six-month momentum mapping, subject to the repository formula's own lag-index convention.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "Specifically, a strategy that selects stocks on the basis of returns over the past J months and holds them for K months (we will refer to this as a J-month/K-month strategy) is constructed as follows: At the beginning of each month t the securities are ranked in ascending order on the basis of their returns in the past J months.",
          "page": 5,
          "line_start": 225,
          "line_end": 299,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/jegadeesh-1993.txt",
          "href": "../papers/jegadeesh-1993/jegadeesh-titman-1993.pdf#page=5",
          "open_label": "查看 PDF 第 5 页"
        },
        {
          "text": "Returns to Buying Winners and Selling Losers 69 returns file.4 All stocks with available returns data in the J months preced- ing the portfolio formation date are included in the sample from which the buy and sell portfolios are constructed.",
          "page": 6,
          "line_start": 225,
          "line_end": 299,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/jegadeesh-1993.txt",
          "href": "../papers/jegadeesh-1993/jegadeesh-titman-1993.pdf#page=6",
          "open_label": "查看 PDF 第 6 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "jegadeesh-1993",
        "title": "Returns to Buying Winners and Selling Losers: Implications for Stock Market Efficiency",
        "authors": "Narasimhan Jegadeesh and Sheridan Titman",
        "year": "1993",
        "venue": "The Journal of Finance",
        "doi": "10.1111/j.1540-6261.1993.tb04702.x",
        "source_url": "https://doi.org/10.1111/j.1540-6261.1993.tb04702.x",
        "local_file": "papers/jegadeesh-1993/jegadeesh-titman-1993.pdf",
        "local_href": "../papers/jegadeesh-1993/jegadeesh-titman-1993.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 28,
        "access_status": "full_text_pdf_cityu"
      },
      "method_variants": [
        {
          "id": "jegadeesh-1993",
          "source_id": "jegadeesh-1993",
          "role": "original_paper",
          "source_label": "Returns to Buying Winners and Selling Losers: Implications for Stock Market Efficiency",
          "source_year": "1993",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{MOM6}_{i,t}=\\prod_{j=1}^{6}(1+R_{i,t-j})-1\\)",
          "data_fields": "Past J-month compounded return; the representative strategy uses J = 6 months",
          "calculation_window": {
            "zh": "CRSP daily-return file compounded to monthly returns; January 1965-December 1989; stocks need returns over the preceding J months.",
            "en": "CRSP daily-return file compounded to monthly returns; January 1965-December 1989; stocks need returns over the preceding J months."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Ten portfolios ranked ascending on J-month lagged returns; lowest-return decile is sell and highest-return decile is buy. Equal-weighted decile portfolios; the published results use monthly rebalanced returns. Monthly formation and rebalancing with K overlapping cohorts. K = 3, 6, 9, or 12 months; the representative case is 6 months.",
            "en": "Ten portfolios ranked ascending on J-month lagged returns; lowest-return decile is sell and highest-return decile is buy. Equal-weighted decile portfolios; the published results use monthly rebalanced returns. Monthly formation and rebalancing with K overlapping cohorts. K = 3, 6, 9, or 12 months; the representative case is 6 months."
          },
          "direction": "H-L",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/jegadeesh-1993/jegadeesh-titman-1993.pdf",
          "source_page": 5,
          "source_href": "../papers/jegadeesh-1993/jegadeesh-titman-1993.pdf#page=5"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{MOM6M}_{i,t}=\\prod_{k=1}^{6}(1+\\mathrm{RET}_{i,t-k})-1\\)",
        "formula_direction": "+1",
        "data_fields": "CRSP: RET",
        "calculation_window": {
          "zh": "月频；收益滞后 1–6 月。",
          "en": "Monthly; return lags 1–6."
        },
        "accounting_lag": {
          "zh": "信号在 t 月形成；最终输出将收益移至 t+1 月。",
          "en": "The signal is formed at month t; final output shifts the return to month t+1."
        },
        "source_label": "EquityChars CIZ · accounting.py · L2127",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L2127",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "2127",
        "code_frequency": {
          "zh": "月频。",
          "en": "Monthly."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      }
    },
    {
      "id": "ni",
      "name": "Net Stock Issues",
      "signal_definition": "Net Stock Issues",
      "sort_variable": "ni",
      "code_direction": "L-H",
      "paper_direction": "not-simple",
      "direction_label": "非简单多空",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "Low",
      "code_short_leg": "High",
      "code_notes": "Repo attribution: Pontiff and Woodgate (2008). Formula table direction: -1.",
      "raw_signal": "ISSUE(t,t-11) = ln(split-adjusted shares outstanding at t) - ln(split-adjusted shares outstanding at t-11)",
      "construction_summary": "The closest published variable to repository net stock issues is the annual log change in split-adjusted CRSP shares outstanding. The article tests it in Fama-MacBeth predictive regressions and does not define a simple net-issues hedge portfolio.",
      "sample_and_timing": "The primary sample contains monthly CRSP observations from January 1970-December 2003; an out-of-sample test covers September 1932-December 1969.",
      "breakpoints": "N/A; predictive cross-sectional regressions rather than portfolio sorts.",
      "weighting": "N/A; no standalone hedge portfolio.",
      "rebalancing_frequency": "monthly regressions with a rolling annual signal",
      "holding_period": "One month, six months, one year, second-year annual, and third-year annual holding-period dependent variables.",
      "paper_long_leg": "N/A",
      "paper_short_leg": "N/A",
      "confidence": "high",
      "evidence_type": "publisher_final_jstor_pdf",
      "evidence_pointer": "extracted-text/pontiff-2008-publisher.txt:151-216,565-615,743-783",
      "reviewer_notes": "Verified against the final Journal of Finance/JSTOR PDF. The source supports a negative issuance-return slope, but no paper-defined LMS direction should be inferred; retain not-simple.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "We use this measure of adjusted shares to compute annual share i time t as ISSUEtyt-ii = Ln(AdjustedSharest) ?",
          "page": 4,
          "line_start": 151,
          "line_end": 216,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/pontiff-2008-publisher.txt",
          "href": "../papers/pontiff-2008/pontiff-2008-publisher.pdf#page=4",
          "open_label": "查看 PDF 第 4 页"
        },
        {
          "text": "924 The Journal of Finance In our regression tables we refer to the annual issuance variable as ISSUE and the 5-year Daniel and Titman issuance variable as DT ISSUE.",
          "page": 5,
          "line_start": 151,
          "line_end": 216,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/pontiff-2008-publisher.txt",
          "href": "../papers/pontiff-2008/pontiff-2008-publisher.pdf#page=5",
          "open_label": "查看 PDF 第 5 页"
        },
        {
          "text": "From the monthly holding period regressions, annual share issuance has a slope of ?2.23, implying that a one-standard deviation change (0.15) in share issuance is associated with a 0.33% decrease in the monthly cross-sectional return.",
          "page": 12,
          "line_start": 565,
          "line_end": 615,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/pontiff-2008-publisher.txt",
          "href": "../papers/pontiff-2008/pontiff-2008-publisher.pdf#page=12",
          "open_label": "查看 PDF 第 12 页"
        },
        {
          "text": "932 The Journal of Finance Table III Fama-MacBeth Cross-Sectional Regressions, 1970-2003 Fama-MacBeth cross-sectional regressions results are computed for stock returns of various hold ing periods (each panel gives the appropriate holding period) on the following variables: the natural logarithm of the ratio of the book value of equity to the market value of equity measured at the end of December t?1, BM; a book-to-market dummy variable that is zero if BM is missing, BM Dum.; the natural logarithm of market equity measured at the end of June, ME; the past 6 months stock return as a proxy for momentum, MOM; and the change in the logarithm of the number of shares outstanding adjusted for split",
          "page": 13,
          "line_start": 565,
          "line_end": 615,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/pontiff-2008-publisher.txt",
          "href": "../papers/pontiff-2008/pontiff-2008-publisher.pdf#page=13",
          "open_label": "查看 PDF 第 13 页"
        },
        {
          "text": "Overall, we interpret these results as evidence that both issuance m predict cross-sectional returns, though annual issuance in particula stronger ability to predict cross-sectional returns than other popular va Since cross-sectional equity issuance is negatively related to future r these findings are consistent with a model in which managers issu when it is overvalued and repurchase equity when it is undervalued.",
          "page": 15,
          "line_start": 743,
          "line_end": 783,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/pontiff-2008-publisher.txt",
          "href": "../papers/pontiff-2008/pontiff-2008-publisher.pdf#page=15",
          "open_label": "查看 PDF 第 15 页"
        },
        {
          "text": "From the monthly regressions, annual issuance only explains 0.22% of the average cross-sectional return variance, whereas 5-year issuance only explains 0.53% of the average cross-sectional return vari ance.",
          "page": 16,
          "line_start": 743,
          "line_end": 783,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/pontiff-2008-publisher.txt",
          "href": "../papers/pontiff-2008/pontiff-2008-publisher.pdf#page=16",
          "open_label": "查看 PDF 第 16 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "pontiff-2008",
        "title": "Share Issuance and Cross-sectional Returns",
        "authors": "Jeffrey Pontiff and Artemiza Woodgate",
        "year": "2008",
        "venue": "The Journal of Finance",
        "doi": "10.1111/j.1540-6261.2008.01335.x",
        "source_url": "https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1540-6261.2008.01335.x",
        "local_file": "papers/pontiff-2008/pontiff-2008-publisher.pdf",
        "local_href": "../papers/pontiff-2008/pontiff-2008-publisher.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 26,
        "access_status": "full_text_pdf_publisher"
      },
      "method_variants": [
        {
          "id": "pontiff-2008",
          "source_id": "pontiff-2008",
          "role": "original_paper",
          "source_label": "Share Issuance and Cross-sectional Returns",
          "source_year": "2008",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{ISSUE}_{i,t:t-11}=\\ln(\\mathrm{SplitAdjustedShares}_{i,t})-\\ln(\\mathrm{SplitAdjustedShares}_{i,t-11})\\)",
          "data_fields": "ISSUE(t,t-11) = ln(split-adjusted shares outstanding at t) - ln(split-adjusted shares outstanding at t-11)",
          "calculation_window": {
            "zh": "The primary sample contains monthly CRSP observations from January 1970-December 2003; an out-of-sample test covers September 1932-December 1969.",
            "en": "The primary sample contains monthly CRSP observations from January 1970-December 2003; an out-of-sample test covers September 1932-December 1969."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "N/A; predictive cross-sectional regressions rather than portfolio sorts. N/A; no standalone hedge portfolio. monthly regressions with a rolling annual signal One month, six months, one year, second-year annual, and third-year annual holding-period dependent variables.",
            "en": "N/A; predictive cross-sectional regressions rather than portfolio sorts. N/A; no standalone hedge portfolio. monthly regressions with a rolling annual signal One month, six months, one year, second-year annual, and third-year annual holding-period dependent variables."
          },
          "direction": "not-simple",
          "formula_match": "closest_paper_measure",
          "notes": {
            "zh": "论文只给出最接近口径，与项目指标不完全相同。",
            "en": "The paper provides the closest available measure; it is not identical to the project signal."
          },
          "source_path": "papers/pontiff-2008/pontiff-2008-publisher.pdf",
          "source_page": 4,
          "source_href": "../papers/pontiff-2008/pontiff-2008-publisher.pdf#page=4"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{NI}_{i,t}=\\log(\\mathrm{CSHO}_{i,t}\\mathrm{AJEX}_{i,t}) -\\log(\\mathrm{CSHO}_{i,t-1}\\mathrm{AJEX}_{i,t-1})\\)",
        "formula_direction": "-1",
        "data_fields": "Compustat: AJEX, CSHO, NI",
        "calculation_window": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "accounting_lag": {
          "zh": "年频与季频结果均在 CIZ 中对齐；最终比较 datadate，取较新的可用值。",
          "en": "CIZ aligns both annual and quarterly results, then selects the newer available value by datadate."
        },
        "source_label": "EquityChars CIZ · accounting.py · L485, L1564",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L485",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "485,1564",
        "code_frequency": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "reconcile_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/impute_rank_output.py#L85",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写。年频与季频同时可用时，最终输出按 datadate 选择较新的非空值。",
          "en": "Formula transcribed from chars_ciz. When annual and quarterly values both exist, final output selects the newer non-null value by datadate."
        }
      },
      "method_design": {
        "family": "cross_sectional_return_regression",
        "summary": {
          "zh": "以拆股调整后流通股数的年度对数变动近似净股票发行，并置于Fama–MacBeth未来收益回归。",
          "en": "The closest published variable to repository net stock issues is the annual log change in split-adjusted CRSP shares outstanding. The article tests it in Fama-MacBeth predictive regressions and does not define a simple net-issues hedge portfolio."
        },
        "signal_role": {
          "zh": "最接近的文献解释变量",
          "en": "Closest source-paper predictor"
        },
        "estimand": {
          "zh": "不同期限的未来股票收益",
          "en": "Future stock returns over several horizons"
        },
        "interpretation": {
          "zh": "该度量是项目净股票发行的近似变量，论文仅报告条件回归关系而未定义独立多空组合。",
          "en": ""
        }
      }
    },
    {
      "id": "nincr",
      "name": "Number of earnings increases",
      "signal_definition": "Number of earnings increases",
      "sort_variable": "nincr",
      "code_direction": "H-L",
      "paper_direction": "not-simple",
      "direction_label": "非简单多空",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Barth, Elliott, and Finn (1999). Formula table direction: +1.",
      "raw_signal": "repository signal: number of consecutive quarterly earnings increases; paper variable: consecutive annual earnings increases",
      "construction_summary": "The published paper estimates price and 12-month market-adjusted-return regressions. Its primary UPEARN indicator identifies firms with at least five consecutive years of increasing annual earnings; additional tests distinguish patterns from one through nine or more years. It does not form a standalone nincr return-sorted portfolio.",
      "sample_and_timing": "COMPUSTAT/CRSP firm-years from 1982-1992; the return specification uses compound 12-month market-adjusted returns beginning with the fiscal year's first month.",
      "breakpoints": "Regression indicators for at least five consecutive annual increases and, in sensitivity tests, one through nine or more years; no portfolio breakpoints.",
      "weighting": "Regression analysis; no portfolio weights.",
      "rebalancing_frequency": "Annual firm-year tests.",
      "holding_period": "12-month market-adjusted return in the return specification; no portfolio holding period.",
      "paper_long_leg": "N/A",
      "paper_short_leg": "N/A",
      "confidence": "high",
      "evidence_type": "extracted_text",
      "evidence_pointer": "extracted-text/barth-1999-publisher.txt:137-143,226-260,365-438,455-490,923-945,1219-1225",
      "reviewer_notes": "The journal article measures annual earnings-increase patterns, whereas the repository characteristic counts consecutive quarterly increases. The citation supports the economic idea but not the repository's quarterly construction, so the mapping is not a simple paper LMS.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "Although our primary estimation equations focus on patterns of increasing earnings lasting five years or longer, we also find that earnings multiples are almost monotonically increasing with the length of the in- creasing earnings pattern, with the largest single-year increase from pattern year four to five.",
          "page": 4,
          "line_start": 137,
          "line_end": 143,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/barth-1999-publisher.txt",
          "href": "../papers/barth-1999/barth-elliott-finn-1999.pdf#page=4",
          "open_label": "查看 PDF 第 4 页"
        },
        {
          "text": "least five consecutive prior years of increasing earnings, and zero otherwise; GROWTH = five-year compound annual growth rate of book value of equity, BVE, (BVEtIBVEt-6) 1\"5 - 1; EVAR = variance of the past six years' percentage change in earnings (NIt - NIt-1) labs(NIt-1); DE = debt-to-equity ratio; and i, t denote firms and years.",
          "page": 5,
          "line_start": 226,
          "line_end": 260,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/barth-1999-publisher.txt",
          "href": "../papers/barth-1999/barth-elliott-finn-1999.pdf#page=5",
          "open_label": "查看 PDF 第 5 页"
        },
        {
          "text": "One specification uses annual change in price as the dependent variable, the other uses compound 12-month market-adjusted returns.",
          "page": 7,
          "line_start": 365,
          "line_end": 438,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/barth-1999-publisher.txt",
          "href": "../papers/barth-1999/barth-elliott-finn-1999.pdf#page=7",
          "open_label": "查看 PDF 第 7 页"
        },
        {
          "text": "Ddn is an indicator variable that equals one for firms breaking a pattern of at least five consecutive years of increasing earnings through the prior year by reporting decreasing earnings in the current year, and zero otherwise.",
          "page": 8,
          "line_start": 365,
          "line_end": 438,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/barth-1999-publisher.txt",
          "href": "../papers/barth-1999/barth-elliott-finn-1999.pdf#page=8",
          "open_label": "查看 PDF 第 8 页"
        },
        {
          "text": "The rightmost column shows the percentage of the 21,173 sample firm years with increases in earnings after: a decrease in earnings, 41%; one increase, 24%; two consecutive years of increasing earnings, 13%; three consecutive years, 7%; and so on.",
          "page": 9,
          "line_start": 455,
          "line_end": 490,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/barth-1999-publisher.txt",
          "href": "../papers/barth-1999/barth-elliott-finn-1999.pdf#page=9",
          "open_label": "查看 PDF 第 9 页"
        },
        {
          "text": "Table 4, panel A, reveals that each incremental earnings coefficient, al upn is positive and significantly different from the base earnings coefficient, a1, and that five of the six year-to-year coefficient increases between pattern years one and six are significantly positive.",
          "page": 15,
          "line_start": 923,
          "line_end": 945,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/barth-1999-publisher.txt",
          "href": "../papers/barth-1999/barth-elliott-finn-1999.pdf#page=15",
          "open_label": "查看 PDF 第 15 页"
        },
        {
          "text": "Dup = firm with at least five consecutive years of increasing earnings as of year t (an UPEARN firm); DupN = firm with N consecutive years of increasing earnings, Ne [0, 9 or more]; Ddn,N = firm with N - 5 consecutive years of decreasing earnings following five or more consecutive years of increasing earnings for N= 6 to 9; Doth = firm that was classified as UPEARN in one of the previous four years and had at least",
          "page": 17,
          "line_start": 1219,
          "line_end": 1225,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/barth-1999-publisher.txt",
          "href": "../papers/barth-1999/barth-elliott-finn-1999.pdf#page=17",
          "open_label": "查看 PDF 第 17 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "barth-1999",
        "title": "Market Rewards Associated with Patterns of Increasing Earnings",
        "authors": "Mary E. Barth; John A. Elliott; Mark W. Finn",
        "year": "1999",
        "venue": "Journal of Accounting Research",
        "doi": "10.2307/2491414",
        "source_url": "https://www.jstor.org/stable/2491414",
        "local_file": "papers/barth-1999/barth-elliott-finn-1999.pdf",
        "local_href": "../papers/barth-1999/barth-elliott-finn-1999.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 28,
        "access_status": "full_text_pdf_verified"
      },
      "method_variants": [
        {
          "id": "barth-1999",
          "source_id": "barth-1999",
          "role": "original_paper",
          "source_label": "Market Rewards Associated with Patterns of Increasing Earnings",
          "source_year": "1999",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{NINCR}_{i,t}=\\sum_{k=0}^{K-1}\\mathbf{1}\\!\\left(\\mathrm{Earnings}_{i,t-k}>\\mathrm{Earnings}_{i,t-k-1}\\right)\\)",
          "data_fields": "repository signal: number of consecutive quarterly earnings increases; paper variable: consecutive annual earnings increases",
          "calculation_window": {
            "zh": "COMPUSTAT/CRSP firm-years from 1982-1992; the return specification uses compound 12-month market-adjusted returns beginning with the fiscal year's first month.",
            "en": "COMPUSTAT/CRSP firm-years from 1982-1992; the return specification uses compound 12-month market-adjusted returns beginning with the fiscal year's first month."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Regression indicators for at least five consecutive annual increases and, in sensitivity tests, one through nine or more years; no portfolio breakpoints. Regression analysis; no portfolio weights. Annual firm-year tests. 12-month market-adjusted return in the return specification; no portfolio holding period.",
            "en": "Regression indicators for at least five consecutive annual increases and, in sensitivity tests, one through nine or more years; no portfolio breakpoints. Regression analysis; no portfolio weights. Annual firm-year tests. 12-month market-adjusted return in the return specification; no portfolio holding period."
          },
          "direction": "not-simple",
          "formula_match": "closest_paper_measure",
          "notes": {
            "zh": "论文只给出最接近口径，与项目指标不完全相同。",
            "en": "The paper provides the closest available measure; it is not identical to the project signal."
          },
          "source_path": "papers/barth-1999/barth-elliott-finn-1999.pdf",
          "source_page": 4,
          "source_href": "../papers/barth-1999/barth-elliott-finn-1999.pdf#page=4"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle I_k=\\mathbf{1}\\{\\mathrm{IBQ}_{i,t-k}>\\mathrm{IBQ}_{i,t-k-4}\\},\\quad \\mathrm{NINCR}_{i,t}=\\sum_{m=0}^{7}\\prod_{k=0}^{m}I_k\\)",
        "formula_direction": "+1",
        "data_fields": "Compustat: IBQ",
        "calculation_window": {
          "zh": "季频。",
          "en": "Quarterly."
        },
        "accounting_lag": {
          "zh": "按 chars_ciz 的季度或事件日期对齐；未另行添加页面假设。",
          "en": "Aligned by the chars_ciz quarterly or event-date rule; the page adds no extra assumption."
        },
        "source_label": "EquityChars CIZ · accounting.py · L2011",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L2011",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "2011",
        "code_frequency": {
          "zh": "季频。",
          "en": "Quarterly."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      },
      "method_design": {
        "family": "cross_sectional_return_regression",
        "summary": {
          "zh": "构造连续至少五年盈利增长指标，并在价格回归与未来12个月市场调整收益回归中检验；扩展检验区分连续增长年数。",
          "en": "The published paper estimates price and 12-month market-adjusted-return regressions. Its primary UPEARN indicator identifies firms with at least five consecutive years of increasing annual earnings; additional tests distinguish patterns from one through nine or more years. It does not form a standalone nincr return-sorted portfolio."
        },
        "signal_role": {
          "zh": "盈利增长持续性指标",
          "en": "Earnings-growth persistence indicator"
        },
        "estimand": {
          "zh": "公司价值及未来12个月市场调整收益",
          "en": "Firm value and 12-month-ahead market-adjusted return"
        },
        "interpretation": {
          "zh": "论文检验的是指标在条件回归中的解释力，没有按连续增长次数形成可交易的两端组合。",
          "en": ""
        }
      }
    },
    {
      "id": "noa",
      "name": "(Changes in) Net Operating Assets",
      "signal_definition": "(Changes in) Net Operating Assets",
      "sort_variable": "noa",
      "code_direction": "L-H",
      "paper_direction": "L-H",
      "direction_label": "低值做多 · 高值做空",
      "agreement": "yes",
      "status": "paper_direction_verified",
      "code_long_leg": "Low",
      "code_short_leg": "High",
      "code_notes": "Repo attribution: Hirshleifer, Hou, Teoh, and Zhang (2004). Formula table direction: -1.",
      "raw_signal": "scaled net operating assets = (operating assets - operating liabilities) / lagged total assets",
      "construction_summary": "The published article computes NOA from operating assets minus operating liabilities scaled by lagged total assets; firms are assigned monthly to NOA deciles using prior fiscal-year NOA with at least a four-month lag, and the hedge portfolio is long the lowest NOA decile and short the highest NOA decile.",
      "sample_and_timing": "Monthly portfolio formation July 1964-December 2002 using previous fiscal-year NOA; minimum four-month lag between fiscal year-end and portfolio formation/return matching.",
      "breakpoints": "NOA deciles.",
      "weighting": "Monthly equal-weighted abnormal return within decile; value-weighted variant also reported; benchmark adjustment uses size/book-to-market/momentum matched portfolios.",
      "rebalancing_frequency": "Monthly.",
      "holding_period": "Monthly returns; paper reports annual abnormal returns by summing monthly returns and first/second/third-year effects after release.",
      "paper_long_leg": "lowest NOA decile",
      "paper_short_leg": "highest NOA decile",
      "confidence": "high",
      "evidence_type": "publisher_full_text",
      "evidence_pointer": "extracted-text/hirshleifer-2004-publisher.txt:32-42,74,280-282,742-744,993-1005",
      "reviewer_notes": "Verified against the formal Journal of Accounting and Economics publisher full text; formula, timing, deciles, weighting, and low-minus-high hedge are explicit.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "A trading strategy based upon buying the lowest NOA decile and selling short the highest NOA decile is profitable in 35 out of the 38 years in the sample, and averages equally-weighted monthly abnormal returns of 1.24%, 0.83% and 0.57%, all highly significant, both economically and statistically, in the first, second and third year, respectively, after the release of the balance sheet information.",
          "page": 1,
          "line_start": 32,
          "line_end": 42,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/hirshleifer-2004-publisher.txt",
          "href": "../papers/hirshleifer-2004/hirshleifer-2004-publisher-fulltext.html#:~:text=A%20trading%20strategy%20based%20upon%20buying%20the%20lowest%20NOA%20decile%20and%20selling%20short%20the%20highest%20NOA%20decile%20is%20profitable%20in%2035%20out%20of%20the%2038%20years%20in%20the%20sample%2C%20and%20averages%20equally-weig",
          "open_label": "在本地 HTML 中定位"
        },
        {
          "text": "Scaled net operating assets (NOA) are calculated as the difference between operating assets and operating liabilities, scaled by lagged total assets, as(4)NOAt=(OperatingAssetst-OperatingLiabilitiest)/TotalAssetst-1.Operating assets are calculated as the residual from total assets after subtracting financial assets, and operating liabilities are the residual amount from total assets after subtracting financial liabilities and equity, as follows:(5)OperatingAssetst=TotalAssetst-CashandShort-TermInvestmentt(6)OperatingLiabilitiest=TotalAssetst-Short-TermDebtt-Long-TermDebtt-MinorityInterestt-PreferredStockt-CommonEquityt.Table 1 provides the associated Compustat item numbers.",
          "page": 1,
          "line_start": 74,
          "line_end": 74,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/hirshleifer-2004-publisher.txt",
          "href": "../papers/hirshleifer-2004/hirshleifer-2004-publisher-fulltext.html#:~:text=Scaled%20net%20operating%20assets%20%28NOA%29%20are%20calculated%20as%20the%20difference%20between%20operating%20assets%20and%20operating%20liabilities%2C%20scaled%20by%20lagged%20total%20assets%2C%20as%284%29NOAt%3D%28OperatingAssetst-Op",
          "open_label": "在本地 HTML 中定位"
        },
        {
          "text": "Net operating assets vary from about a median of 26% of lagged total assets in the lowest NOA decile to about 145% in the highest NOA decile.",
          "page": 1,
          "line_start": 280,
          "line_end": 282,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/hirshleifer-2004-publisher.txt",
          "href": "../papers/hirshleifer-2004/hirshleifer-2004-publisher-fulltext.html#:~:text=Net%20operating%20assets%20vary%20from%20about%20a%20median%20of%2026%25%20of%20lagged%20total%20assets%20in%20the%20lowest%20NOA%20decile%20to%20about%20145%25%20in%20the%20highest%20NOA%20decile.",
          "open_label": "在本地 HTML 中定位"
        },
        {
          "text": "The average raw and abnormal returns and t-statistics on these portfolios, as well as the difference in returns between decile portfolio 1 (lowest ranked) and 10 (highest ranked), are reported.",
          "page": 1,
          "line_start": 742,
          "line_end": 744,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/hirshleifer-2004-publisher.txt",
          "href": "../papers/hirshleifer-2004/hirshleifer-2004-publisher-fulltext.html#:~:text=The%20average%20raw%20and%20abnormal%20returns%20and%20t-statistics%20on%20these%20portfolios%2C%20as%20well%20as%20the%20difference%20in%20returns%20between%20decile%20portfolio%201%20%28lowest%20ranked%29%20and%2010%20%28highest%20ranked%29%2C%20",
          "open_label": "在本地 HTML 中定位"
        },
        {
          "text": "Using the characteristic adjustment method, Table 4 indicates that there is a strong and robust relation between a firm's NOA and its subsequent abnormal stock returns for at least 3 years after NOA is measured: In year t+1, the average monthly adjusted equally weighted return spread between lowest and highest NOA deciles is 1.24% per month (t=10.31); in year t+2 the effect is also strong, 0.83% per month (t=7.66), and remains highly significant in year t+3, 0.57% per month (t=5.44).20 The average profit of a NOA hedge strategy (by taking a long position in NOA decile 1 and a short position in NOA decile 10) is more than 88% larger than that based on operating accruals (operating accruals di",
          "page": 1,
          "line_start": 993,
          "line_end": 1005,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/hirshleifer-2004-publisher.txt",
          "href": "../papers/hirshleifer-2004/hirshleifer-2004-publisher-fulltext.html#:~:text=Using%20the%20characteristic%20adjustment%20method%2C%20Table%204%20indicates%20that%20there%20is%20a%20strong%20and%20robust%20relation%20between%20a%20firm%27s%20NOA%20and%20its%20subsequent%20abnormal%20stock%20returns%20for%20at%20least",
          "open_label": "在本地 HTML 中定位"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "hirshleifer-2004",
        "title": "Do investors overvalue firms with bloated balance sheets?",
        "authors": "David Hirshleifer; Kewei Hou; Siew Hong Teoh; Yinglei Zhang",
        "year": "2004",
        "venue": "Journal of Accounting and Economics, 38(1-3), 297-331",
        "doi": "10.1016/j.jacceco.2004.10.002",
        "source_url": "https://doi.org/10.1016/j.jacceco.2004.10.002",
        "local_file": "papers/hirshleifer-2004/hirshleifer-2004-publisher-fulltext.html",
        "local_href": "../papers/hirshleifer-2004/hirshleifer-2004-publisher-fulltext.html",
        "artifact_type": "html",
        "pdf_pages": null,
        "access_status": "full_text_html_publisher_verified"
      },
      "method_variants": [
        {
          "id": "hirshleifer-2004",
          "source_id": "hirshleifer-2004",
          "role": "original_paper",
          "source_label": "Do investors overvalue firms with bloated balance sheets?",
          "source_year": "2004",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{NOA}_{i,t}=\\frac{\\mathrm{OperatingAssets}_{i,t}-\\mathrm{OperatingLiabilities}_{i,t}}{\\mathrm{AT}_{i,t-1}}\\)",
          "data_fields": "scaled net operating assets = (operating assets - operating liabilities) / lagged total assets",
          "calculation_window": {
            "zh": "Monthly portfolio formation July 1964-December 2002 using previous fiscal-year NOA; minimum four-month lag between fiscal year-end and portfolio formation/return matching.",
            "en": "Monthly portfolio formation July 1964-December 2002 using previous fiscal-year NOA; minimum four-month lag between fiscal year-end and portfolio formation/return matching."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "NOA deciles. Monthly equal-weighted abnormal return within decile; value-weighted variant also reported; benchmark adjustment uses size/book-to-market/momentum matched portfolios. Monthly. Monthly returns; paper reports annual abnormal returns by summing monthly returns and first/second/third-year effects after release.",
            "en": "NOA deciles. Monthly equal-weighted abnormal return within decile; value-weighted variant also reported; benchmark adjustment uses size/book-to-market/momentum matched portfolios. Monthly. Monthly returns; paper reports annual abnormal returns by summing monthly returns and first/second/third-year effects after release."
          },
          "direction": "L-H",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/hirshleifer-2004/hirshleifer-2004-publisher-fulltext.html",
          "source_page": 1,
          "source_href": "../papers/hirshleifer-2004/hirshleifer-2004-publisher-fulltext.html#:~:text=A%20trading%20strategy%20based%20upon%20buying%20the%20lowest%20NOA%20decile%20and%20selling%20short%20the%20highest%20NOA%20decile%20is%20profitable%20in%2035%20out%20of%20the%2038%20years%20in%20the%20sample%2C%20and%20averages%20equally-weig"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{NOA}_{i,t}= \\frac{(\\mathrm{AT}_{i,t}-\\mathrm{CHE}_{i,t}-\\mathrm{IVAO}_{i,t}) -(\\mathrm{AT}_{i,t}-\\mathrm{DLC}_{i,t}-\\mathrm{DLTT}_{i,t}-\\mathrm{MIB}_{i,t}-\\mathrm{PSTK}_{i,t}-\\mathrm{CEQ}_{i,t})} {\\mathrm{AT}_{i,t-1}}\\)",
        "formula_direction": "-1",
        "data_fields": "Compustat: AT, CEQ, CHE, DLC, DLTT, IVAO, MIB, PSTK",
        "calculation_window": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "accounting_lag": {
          "zh": "年频与季频结果均在 CIZ 中对齐；最终比较 datadate，取较新的可用值。",
          "en": "CIZ aligns both annual and quarterly results, then selects the newer available value by datadate."
        },
        "source_label": "EquityChars CIZ · accounting.py · L591, L1723",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L591",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "591,1723",
        "code_frequency": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "reconcile_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/impute_rank_output.py#L85",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写。年频与季频同时可用时，最终输出按 datadate 选择较新的非空值。",
          "en": "Formula transcribed from chars_ciz. When annual and quarterly values both exist, final output selects the newer non-null value by datadate."
        }
      }
    },
    {
      "id": "op",
      "name": "Operating profitability",
      "signal_definition": "Operating profitability",
      "sort_variable": "op",
      "code_direction": "H-L",
      "paper_direction": "H-L",
      "direction_label": "高值做多 · 低值做空",
      "agreement": "yes",
      "status": "paper_direction_verified",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Fama and French (2015). Formula table direction: +1.",
      "raw_signal": "Operating profitability (OP)",
      "construction_summary": "At each June formation, independently sort stocks into two size groups and three OP groups; construct six value-weighted intersections. RMW is the average return on the small and big robust-profitability portfolios minus the average return on the small and big weak-profitability portfolios.",
      "sample_and_timing": "July 1963-December 2013; accounting data for the fiscal year ending in t-1 are used at the end of June in year t, with monthly factor returns thereafter.",
      "breakpoints": "NYSE median market cap; 30th and 70th NYSE percentiles for OP.",
      "weighting": "Value-weighted intersection portfolios; the RMW factor equally averages the small and big robust legs and subtracts the corresponding weak legs.",
      "rebalancing_frequency": "Annual June reconstitution.",
      "holding_period": "12 months, measured monthly from July through the following June.",
      "paper_long_leg": "Robust/high OP: (SR + BR) / 2.",
      "paper_short_leg": "Weak/low OP: (SW + BW) / 2.",
      "confidence": "high",
      "evidence_type": "publisher_full_text_cityu",
      "evidence_pointer": "extracted-text/fama-2015.txt:338-375 (Section 4 and Table 3); papers/fama-2015/fama-2015-authoritative-fulltext.html",
      "reviewer_notes": "Original publisher full text explicitly defines RMW as robust minus weak and gives the 2x3 breakpoints, value weighting, and component formula.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "Sort Breakpoints Factors and their components 2×3 sorts on Size: NYSE median SMBB/M=(SH + SN + SL)/3 − (BH + BN + BL)/3 Size and B/M, or Size and OP, or Size and Inv SMBOP=(SR + SN + SW)/3 − (BR + BN + BW)/3 SMBInv=(SC + SN + SA)/3 − (BC + BN + BA)/3 SMB=(SMBB/M + SMBOP + SMBInv)/3 B/M: 30th and 70th NYSE percentiles HML=(SH + BH)/2 − (SL + BL)/2=[(SH − SL) + (BH − BL)]/2 OP: 30th and 70th NYSE percentiles RMW=(SR + BR)/2 − (SW + BW)/2=[(SR − SW) + (BR − BW)]/2 Inv: 30th and 70th NYSE percentiles CMA=(SC + BC)/2 − (SA + BA)/2=[(SC − SA) + (BC − BA)]/2 2×2 sorts on Size: NYSE median SMB=(SH + SL + SR + SW + SC + SA)/6 − (BH + BL + BR + BW + BC + BA)/6 Size and B/M, or Size and OP, or Size and",
          "page": 1,
          "line_start": 338,
          "line_end": 375,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/fama-2015.txt",
          "href": "../papers/fama-2015/fama-2015-authoritative-fulltext.html#:~:text=Sort%20Breakpoints%20Factors%20and%20their%20components%202%C3%973%20sorts%20on%20Size%3A%20NYSE%20median%20SMBB%2FM%3D%28SH%20%2B%20SN%20%2B%20SL%29%2F3%20%E2%88%92%20%28BH%20%2B%20BN%20%2B%20BL%29%2F3%20Size%20and%20B%2FM%2C%20or%20Size%20and%20OP%2C%20or%20Size%20and%20Inv%20SMBOP%3D%28SR%20%2B%20SN",
          "open_label": "在本地 HTML 中定位"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "fama-2015",
        "title": "A five-factor asset pricing model",
        "authors": "Eugene F. Fama; Kenneth R. French",
        "year": "2015",
        "venue": "Journal of Financial Economics, 116(1), 1-22",
        "doi": "10.1016/j.jfineco.2014.10.010",
        "source_url": "https://doi.org/10.1016/j.jfineco.2014.10.010",
        "local_file": "papers/fama-2015/fama-2015-authoritative-fulltext.html",
        "local_href": "../papers/fama-2015/fama-2015-authoritative-fulltext.html",
        "artifact_type": "html",
        "pdf_pages": null,
        "access_status": "full_text_html_cityu"
      },
      "method_variants": [
        {
          "id": "fama-2015",
          "source_id": "fama-2015",
          "role": "original_paper",
          "source_label": "A five-factor asset pricing model",
          "source_year": "2015",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{OP}_{i,t}=\\frac{\\mathrm{REVT}_{i,t}-\\mathrm{COGS}_{i,t}-\\mathrm{XSGA}_{i,t}-\\mathrm{XINT}_{i,t}}{\\mathrm{BookEquity}_{i,t}}\\)",
          "data_fields": "Operating profitability (OP)",
          "calculation_window": {
            "zh": "July 1963-December 2013; accounting data for the fiscal year ending in t-1 are used at the end of June in year t, with monthly factor returns thereafter.",
            "en": "July 1963-December 2013; accounting data for the fiscal year ending in t-1 are used at the end of June in year t, with monthly factor returns thereafter."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "NYSE median market cap; 30th and 70th NYSE percentiles for OP. Value-weighted intersection portfolios; the RMW factor equally averages the small and big robust legs and subtracts the corresponding weak legs. Annual June reconstitution. 12 months, measured monthly from July through the following June.",
            "en": "NYSE median market cap; 30th and 70th NYSE percentiles for OP. Value-weighted intersection portfolios; the RMW factor equally averages the small and big robust legs and subtracts the corresponding weak legs. Annual June reconstitution. 12 months, measured monthly from July through the following June."
          },
          "direction": "H-L",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/fama-2015/fama-2015-authoritative-fulltext.html",
          "source_page": 1,
          "source_href": "../papers/fama-2015/fama-2015-authoritative-fulltext.html#:~:text=Sort%20Breakpoints%20Factors%20and%20their%20components%202%C3%973%20sorts%20on%20Size%3A%20NYSE%20median%20SMBB%2FM%3D%28SH%20%2B%20SN%20%2B%20SL%29%2F3%20%E2%88%92%20%28BH%20%2B%20BN%20%2B%20BL%29%2F3%20Size%20and%20B%2FM%2C%20or%20Size%20and%20OP%2C%20or%20Size%20and%20Inv%20SMBOP%3D%28SR%20%2B%20SN"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{OP}_{i,t}=\\frac{\\mathrm{REVT}_{i,t}-\\mathrm{COGS}_{i,t}-\\mathrm{XSGA}_{i,t}-\\mathrm{XINT}_{i,t}}{\\mathrm{BE}_{i,t}}\\)",
        "formula_direction": "+1",
        "data_fields": "Compustat: COGS, REVT, XINT, XSGA",
        "calculation_window": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "accounting_lag": {
          "zh": "年频与季频结果均在 CIZ 中对齐；最终比较 datadate，取较新的可用值。",
          "en": "CIZ aligns both annual and quarterly results, then selects the newer available value by datadate."
        },
        "source_label": "EquityChars CIZ · accounting.py · L498, L1572",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L498",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "498,1572",
        "code_frequency": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "reconcile_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/impute_rank_output.py#L85",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写。年频与季频同时可用时，最终输出按 datadate 选择较新的非空值。",
          "en": "Formula transcribed from chars_ciz. When annual and quarterly values both exist, final output selects the newer non-null value by datadate."
        }
      }
    },
    {
      "id": "pchcapx_ia",
      "name": "Industry adjusted % change in capital expenditures",
      "signal_definition": "Industry adjusted % change in capital expenditures",
      "sort_variable": "pchcapx_ia",
      "code_direction": "L-H",
      "paper_direction": "not-simple",
      "direction_label": "非简单多空",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "Low",
      "code_short_leg": "High",
      "code_notes": "Repo attribution: Abarbanell and Bushee (1998). Formula table has no entry for this signal.",
      "raw_signal": "industry-adjusted % change in capital expenditures",
      "construction_summary": "CAPX is one of the fundamental signals used in the strategy; the paper links it to capital expenditures relative to the industry benchmark and uses annual zero-investment portfolios.",
      "sample_and_timing": "Sample 1974-1988 for the main strategy and 1989-1993 for the holdout period; signals are formed from annual accounting data.",
      "breakpoints": "Annual decile ranks of the signal, beta, and earnings-change controls.",
      "weighting": "OLS-derived zero-investment weights on [1, RSIGNAL, RBETA, RCEPS].",
      "rebalancing_frequency": "Annual.",
      "holding_period": "12 months.",
      "paper_long_leg": "Low CAPX / lower industry-adjusted capital expenditures.",
      "paper_short_leg": "High CAPX / higher industry-adjusted capital expenditures.",
      "confidence": "high",
      "evidence_type": "public_html",
      "evidence_pointer": "doi:10.2139/ssrn.40740; paperzz:L43-L57; paperzz:L225-L248; paperzz:L314-L323; paperzz:L337-L409",
      "reviewer_notes": "The source uses OLS-derived zero-investment weights rather than a simple low-minus-high spread; the leg sign is therefore not promoted to a simple LMS direction.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "The inclusion of RCEPS implies that abnormal returns to a signal can be interpreted as arising from information about future economic conditions that are not reflected in current earnings.6 Finally, because we have included RBETA in the regressions, this implies all other regression coefficients can be interpreted as abnormal returns to zero- 13 portfolios.7 Our strategy involves positions in only December fiscal-year-end firms that have re- ported results by April to allow for the determination of the portfolio weights from (X'X)-'X' used to determine investment positions.",
          "page": 9,
          "line_start": null,
          "line_end": null,
          "method": "automatic_pdf_search",
          "method_label": "自动定位候选句",
          "text_path": "",
          "href": "../papers/abarbanell-1998/abarbanell-bushee-1998.pdf#page=9",
          "open_label": "查看 PDF 第 9 页"
        },
        {
          "text": "Similarly, the CAPX signal, which was constructed to test the notion that it is good news for future earnings when firm-specific capital expen- ditures outpace industry average capital expenditures, yields results directly opposite to what was hypothesized.",
          "page": 8,
          "line_start": null,
          "line_end": null,
          "method": "automatic_pdf_search",
          "method_label": "自动定位候选句",
          "text_path": "",
          "href": "../papers/abarbanell-1998/abarbanell-bushee-1998.pdf#page=8",
          "open_label": "查看 PDF 第 8 页"
        },
        {
          "text": "26 The Accounting Review, January 1998 9 BHAR(+m)i, = ao + E akRSIGNALkit + aORBETAit k=1 + alRCEPSit + eit (1) where: BHAR(+m)it = the size-adjusted, buy-and-hold abnormal return of firm i cumu- lated from the fourth month after the fiscal year-end of year t through m subsequent months; RSIGNALk i t = scaled decile rank of fundamental signal k for firm i in year t; RBETAi = the scaled decile rank of beta for firm i at the end of fiscal year t.",
          "page": 9,
          "line_start": null,
          "line_end": null,
          "method": "automatic_pdf_search",
          "method_label": "自动定位候选句",
          "text_path": "",
          "href": "../papers/abarbanell-1998/abarbanell-bushee-1998.pdf#page=9",
          "open_label": "查看 PDF 第 9 页"
        }
      ],
      "evidence_mode": "automatic",
      "paper": {
        "id": "abarbanell-1998",
        "title": "Abnormal Returns to a Fundamental Analysis Strategy",
        "authors": "Jeffery S. Abarbanell; Brian J. Bushee",
        "year": "1998",
        "venue": "The Accounting Review",
        "doi": "",
        "source_url": "https://www.jstor.org/stable/248340",
        "local_file": "papers/abarbanell-1998/abarbanell-bushee-1998.pdf",
        "local_href": "../papers/abarbanell-1998/abarbanell-bushee-1998.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 28,
        "access_status": "full_text_pdf_jstor"
      },
      "method_variants": [
        {
          "id": "abarbanell-1998",
          "source_id": "abarbanell-1998",
          "role": "original_paper",
          "source_label": "Abnormal Returns to a Fundamental Analysis Strategy",
          "source_year": "1998",
          "formula": "",
          "formula_latex": "\\(\\displaystyle g(\\mathrm{CAPX}_{i,t})-\\overline{g(\\mathrm{CAPX}_{t})}_{\\,\\mathrm{industry}(i)}\\)",
          "data_fields": "industry-adjusted % change in capital expenditures",
          "calculation_window": {
            "zh": "Sample 1974-1988 for the main strategy and 1989-1993 for the holdout period; signals are formed from annual accounting data.",
            "en": "Sample 1974-1988 for the main strategy and 1989-1993 for the holdout period; signals are formed from annual accounting data."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Annual decile ranks of the signal, beta, and earnings-change controls. OLS-derived zero-investment weights on [1, RSIGNAL, RBETA, RCEPS]. Annual. 12 months.",
            "en": "Annual decile ranks of the signal, beta, and earnings-change controls. OLS-derived zero-investment weights on [1, RSIGNAL, RBETA, RCEPS]. Annual. 12 months."
          },
          "direction": "not-simple",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/abarbanell-1998/abarbanell-bushee-1998.pdf",
          "source_page": 9,
          "source_href": "../papers/abarbanell-1998/abarbanell-bushee-1998.pdf#page=9"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle g^{CAPX}_{i,t}=\\frac{\\mathrm{CAPX}_{i,t}-\\mathrm{CAPX}_{i,t-1}}{\\mathrm{CAPX}_{i,t-1}},\\quad \\mathrm{PCHCAPX\\_IA}_{i,t}=g^{CAPX}_{i,t}-\\overline{g^{CAPX}}_{\\mathrm{FFI49}(i),t}\\)",
        "formula_direction": "",
        "data_fields": "Compustat: CAPX; Fama–French 49 industry",
        "calculation_window": {
          "zh": "年频。",
          "en": "Annual."
        },
        "accounting_lag": {
          "zh": "按 chars_ciz 年频 jdate 对齐；未另行添加页面假设。",
          "en": "Aligned by the chars_ciz annual jdate rule; the page adds no extra assumption."
        },
        "source_label": "EquityChars CIZ · accounting.py · L1187",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L1187",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "1187",
        "code_frequency": {
          "zh": "年频。",
          "en": "Annual."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      },
      "method_design": {
        "family": "model_weighted_zero_investment",
        "summary": {
          "zh": "将行业调整资本支出变动转化为年度十分位秩，并与β和盈利变动秩共同进入OLS权重方程，形成年度零投资基本面策略。",
          "en": "CAPX is one of the fundamental signals used in the strategy; the paper links it to capital expenditures relative to the industry benchmark and uses annual zero-investment portfolios."
        },
        "signal_role": {
          "zh": "基本面信号与目标暴露",
          "en": "Fundamental signal and target exposure"
        },
        "estimand": {
          "zh": "模型加权零投资组合的未来12个月收益",
          "en": "12-month return on a model-weighted zero-investment portfolio"
        },
        "interpretation": {
          "zh": "组合权重由回归约束确定，而非简单买入最低组、卖空最高组，故不编码为普通L−H。",
          "en": ""
        }
      }
    },
    {
      "id": "pchcurrat",
      "name": "% change in current ratio",
      "signal_definition": "% change in current ratio",
      "sort_variable": "pchcurrat",
      "code_direction": "H-L",
      "paper_direction": "not-simple",
      "direction_label": "非简单多空",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Ou and Penman (1989). Formula table has no entry for this signal.",
      "raw_signal": "Percentage change in current ratio",
      "construction_summary": "The paper treats the percentage change in current ratio as one accounting descriptor and combines selected descriptors through a stepwise logit into composite Pr. It does not form a univariate pchcurrat portfolio.",
      "sample_and_timing": "Descriptors are estimated on 1965-1972 or 1973-1977 data; annual positions are formed for 1973-1983 three months after fiscal year-end.",
      "breakpoints": "The published portfolio cutoffs apply to composite Pr (>0.6 versus <=0.4), not to pchcurrat.",
      "weighting": "Mean monthly returns on each composite position; the reported hedge is the zero-investment difference between the two sides.",
      "rebalancing_frequency": "Annual overlapping formation with monthly portfolio rebalancing in the cumulative-return calculation.",
      "holding_period": "24 months.",
      "paper_long_leg": "Composite portfolio only: Pr > 0.6; no univariate pchcurrat long leg.",
      "paper_short_leg": "Composite portfolio only: Pr <= 0.4; no univariate pchcurrat short leg.",
      "confidence": "high",
      "evidence_type": "author_institution_full_text",
      "evidence_pointer": "extracted-text/ou-1989.txt:396-470 (Table 2),535-617 (Table 3),665-685 (preset strategy),860-890 (Table 6 notes); papers/ou-1989/ou-1989.pdf",
      "reviewer_notes": "The source's H-L rule is for composite Pr, not this input descriptor.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "We then drop all variables for which coefficient estimates in this multivariate estimation are not significant at the 0.10 level, leaving 19 variables for the 1965-1972 period and 18 for the 1973-1977 6The first period is longer than the second because of the need to calculate an earnings drift term over four years preceding the relevant earnings prediction year and because the 1984 COMPUSTAT files used have data only from 1965 onwards.",
          "page": 9,
          "line_start": 396,
          "line_end": 470,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/ou-1989.txt",
          "href": "../papers/ou-1989/ou-1989.pdf#page=9",
          "open_label": "查看 PDF 第 9 页"
        },
        {
          "text": "1965-1972 estimation Accounting descriptor a Current ratio %A in 1 Quick ratio %A in 3 Days sales in accs. receivable 15632 %A in 5 Inventory turnover %Zl in 7 Inventory/total assets %A in 9 %A in inventory %A in sales %A in depreciation A in dividend per share Depreciation/plant assets %zi in 15 Return on opening equity A in 17 %A in (capital expenditure/ 13378 19, one-year lag Debt-equity ratio %A in 21 LT debt to equity %A in 23 Equity to fixed assets %A in 25 Times interest earned %A in 27 Sales/total assets %A in 29 Return on total assets Return on closing equity Gross margin ratio %A in 33",
          "page": 10,
          "line_start": 396,
          "line_end": 470,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/ou-1989.txt",
          "href": "../papers/ou-1989/ou-1989.pdf#page=10",
          "open_label": "查看 PDF 第 10 页"
        },
        {
          "text": "Op. profit (before dep.) to sales %A in 35 Pretax income to sales %A in 37 Net profit margin %A in 39 Sales to total cash Sales to accs. receivable Sales to inventory %A in 43 Sales to working capital %A in 45 Sales to fixed assets %A in production %A in R & D %A in ( R & D / s a l e s ) %A in advertising expense %A in (advertising/sales) %A in total assets Cash flow to total debt Working c a p i t a l / t o t a l assets 15604 0.0850 1.16 0.282",
          "page": 11,
          "line_start": 396,
          "line_end": 470,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/ou-1989.txt",
          "href": "../papers/ou-1989/ou-1989.pdf#page=11",
          "open_label": "查看 PDF 第 11 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "ou-1989",
        "title": "Financial statement analysis and the prediction of stock returns",
        "authors": "Jane A. Ou and Stephen H. Penman",
        "year": "1989",
        "venue": "Journal of Accounting and Economics",
        "doi": "10.1016/0165-4101(89)90017-7",
        "source_url": "https://doi.org/10.1016/0165-4101(89)90017-7",
        "local_file": "papers/ou-1989/ou-1989.pdf",
        "local_href": "../papers/ou-1989/ou-1989.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 35,
        "access_status": "full_text_pdf_author_institution"
      },
      "method_variants": [
        {
          "id": "ou-1989",
          "source_id": "ou-1989",
          "role": "original_paper",
          "source_label": "Financial statement analysis and the prediction of stock returns",
          "source_year": "1989",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{PCHCURRAT}_{i,t}=\\frac{\\mathrm{CurrentRatio}_{i,t}-\\mathrm{CurrentRatio}_{i,t-1}}{\\mathrm{CurrentRatio}_{i,t-1}}\\)",
          "data_fields": "Percentage change in current ratio",
          "calculation_window": {
            "zh": "Descriptors are estimated on 1965-1972 or 1973-1977 data; annual positions are formed for 1973-1983 three months after fiscal year-end.",
            "en": "Descriptors are estimated on 1965-1972 or 1973-1977 data; annual positions are formed for 1973-1983 three months after fiscal year-end."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "The published portfolio cutoffs apply to composite Pr (>0.6 versus <=0.4), not to pchcurrat. Mean monthly returns on each composite position; the reported hedge is the zero-investment difference between the two sides. Annual overlapping formation with monthly portfolio rebalancing in the cumulative-return calculation. 24 months.",
            "en": "The published portfolio cutoffs apply to composite Pr (>0.6 versus <=0.4), not to pchcurrat. Mean monthly returns on each composite position; the reported hedge is the zero-investment difference between the two sides. Annual overlapping formation with monthly portfolio rebalancing in the cumulative-return calculation. 24 months."
          },
          "direction": "not-simple",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/ou-1989/ou-1989.pdf",
          "source_page": 9,
          "source_href": "../papers/ou-1989/ou-1989.pdf#page=9"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{PCHCURRAT}_{i,t}=\\frac{\\mathrm{CURRAT}_{i,t}-\\mathrm{CURRAT}_{i,t-1}}{\\mathrm{CURRAT}_{i,t-1}}\\)",
        "formula_direction": "",
        "data_fields": "Compustat: ACT, LCT, CHE, RECT, INVT, AP",
        "calculation_window": {
          "zh": "年频。",
          "en": "Annual."
        },
        "accounting_lag": {
          "zh": "按 chars_ciz 年频 jdate 对齐；未另行添加页面假设。",
          "en": "Aligned by the chars_ciz annual jdate rule; the page adds no extra assumption."
        },
        "source_label": "EquityChars CIZ · accounting.py · L809",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L809",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "809",
        "code_frequency": {
          "zh": "年频。",
          "en": "Annual."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      },
      "method_design": {
        "family": "multivariate_prediction_model",
        "summary": {
          "zh": "流动比率的百分比变动作为候选会计变量进入逐步Logit模型，组合依据综合预测概率Pr形成。",
          "en": "The paper treats the percentage change in current ratio as one accounting descriptor and combines selected descriptors through a stepwise logit into composite Pr. It does not form a univariate pchcurrat portfolio."
        },
        "signal_role": {
          "zh": "多变量模型的候选解释变量",
          "en": "Candidate predictor in a multivariate model"
        },
        "estimand": {
          "zh": "下一年度盈利增加的预测概率Pr",
          "en": "Predicted probability Pr of a one-year-ahead earnings increase"
        },
        "interpretation": {
          "zh": "该变量未被单独排序；论文组合含义属于综合预测概率，而非该变量自身的多空收益。",
          "en": ""
        }
      }
    },
    {
      "id": "pchdepr",
      "name": "% change in depreciation",
      "signal_definition": "% change in depreciation",
      "sort_variable": "pchdepr",
      "code_direction": "H-L",
      "paper_direction": "not-simple",
      "direction_label": "非简单多空",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Holthausen and Larcker (1992). Formula table has no entry for this signal.",
      "raw_signal": "percentage change in depreciation divided by plant assets",
      "construction_summary": "The percentage change in depreciation/plant assets is a candidate ratio in the multivariate stepwise-logit return models and enters five models with a positive sign. The traded portfolios sort the models' composite predicted-return probability rather than this ratio independently.",
      "sample_and_timing": "Models are estimated separately for NYSE/AMEX and OTC firms on 1973-1977 and 1978-1982 data and tested out of sample through 1988; accounting data are assumed available four months after fiscal year-end.",
      "breakpoints": "Composite probability-score deciles based on in-sample cutoffs; portfolios 1-3 are long and 8-10 short. No standalone change-in-depreciation breakpoint.",
      "weighting": "Pooled equal-weighted observations and an implementable annual weighting scheme are both reported for the composite strategy.",
      "rebalancing_frequency": "Annual signal/portfolio formation.",
      "holding_period": "12 months primarily; 24-, 36-, and 48-month buy-and-hold results also reported.",
      "paper_long_leg": "N/A",
      "paper_short_leg": "N/A",
      "confidence": "high",
      "evidence_type": "publisher_final_pdf",
      "evidence_pointer": "extracted-text/holthausen-1992-publisher.txt:300-339,524-543,738-792",
      "reviewer_notes": "Verified against the formal 39-page Journal of Accounting and Economics PDF. The positive logit inputs cannot be converted into a paper-defined characteristic hedge because the source trades only a changing multivariate probability score.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "Models which predict Jensen alphas are somewhat less correlated (0.25 for NYSE/AMEX correlated 0.44 for NYSE/AMEX 6T~o variables, depreciation divided by plant assets and percentage change in total assets, enter the models eight times.",
          "page": 7,
          "line_start": 300,
          "line_end": 339,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/holthausen-1992-publisher.txt",
          "href": "../papers/holthausen-1992/holthausen-1992-publisher.pdf#page=7",
          "open_label": "查看 PDF 第 7 页"
        },
        {
          "text": "In the portfolio trading strategies which follow, observations considered predictions of positive excess returns (the long portfolio), and obser- vations assigned to portfolios 8 to 10 are considered predictions excess returns (the short portfolio).",
          "page": 11,
          "line_start": 524,
          "line_end": 543,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/holthausen-1992-publisher.txt",
          "href": "../papers/holthausen-1992/holthausen-1992-publisher.pdf#page=11",
          "open_label": "查看 PDF 第 11 页"
        },
        {
          "text": "Calculate buy-and-hold market-adjusted returns starting at the beginning of the fourth month after the fiscal year-end, April 1979, for 12-, 24-, 36-, and 48-month holding periods. “For example, suppose a firm’s returns are no longer available 30 months after it entered the long or short portfolio of the trading strategy.",
          "page": 15,
          "line_start": 738,
          "line_end": 792,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/holthausen-1992-publisher.txt",
          "href": "../papers/holthausen-1992/holthausen-1992-publisher.pdf#page=15",
          "open_label": "查看 PDF 第 15 页"
        },
        {
          "text": "Calculate average long, short, and hedge market-adjusted portfolio returns (based on one of two weighting schemes) for 12-, 24-, 36-, and 48-month holding periods.",
          "page": 16,
          "line_start": 738,
          "line_end": 792,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/holthausen-1992-publisher.txt",
          "href": "../papers/holthausen-1992/holthausen-1992-publisher.pdf#page=16",
          "open_label": "查看 PDF 第 16 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "holthausen-1992",
        "title": "The prediction of stock returns using financial statement information",
        "authors": "Robert W. Holthausen; David F. Larcker",
        "year": "1992",
        "venue": "Journal of Accounting and Economics, 15(2-3), 373-411",
        "doi": "10.1016/0165-4101(92)90025-W",
        "source_url": "https://doi.org/10.1016/0165-4101(92)90025-W",
        "local_file": "papers/holthausen-1992/holthausen-1992-publisher.pdf",
        "local_href": "../papers/holthausen-1992/holthausen-1992-publisher.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 39,
        "access_status": "full_text_pdf_publisher"
      },
      "method_variants": [
        {
          "id": "holthausen-1992",
          "source_id": "holthausen-1992",
          "role": "original_paper",
          "source_label": "The prediction of stock returns using financial statement information",
          "source_year": "1992",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{PCHDEPR}_{i,t}=\\frac{\\mathrm{DEPR}_{i,t}-\\mathrm{DEPR}_{i,t-1}}{\\mathrm{DEPR}_{i,t-1}}\\)",
          "data_fields": "percentage change in depreciation divided by plant assets",
          "calculation_window": {
            "zh": "Models are estimated separately for NYSE/AMEX and OTC firms on 1973-1977 and 1978-1982 data and tested out of sample through 1988; accounting data are assumed available four months after fiscal year-end.",
            "en": "Models are estimated separately for NYSE/AMEX and OTC firms on 1973-1977 and 1978-1982 data and tested out of sample through 1988; accounting data are assumed available four months after fiscal year-end."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Composite probability-score deciles based on in-sample cutoffs; portfolios 1-3 are long and 8-10 short. No standalone change-in-depreciation breakpoint. Pooled equal-weighted observations and an implementable annual weighting scheme are both reported for the composite strategy. Annual signal/portfolio formation. 12 months primarily; 24-, 36-, and 48-month buy-and-hold results also reported.",
            "en": "Composite probability-score deciles based on in-sample cutoffs; portfolios 1-3 are long and 8-10 short. No standalone change-in-depreciation breakpoint. Pooled equal-weighted observations and an implementable annual weighting scheme are both reported for the composite strategy. Annual signal/portfolio formation. 12 months primarily; 24-, 36-, and 48-month buy-and-hold results also reported."
          },
          "direction": "not-simple",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/holthausen-1992/holthausen-1992-publisher.pdf",
          "source_page": 7,
          "source_href": "../papers/holthausen-1992/holthausen-1992-publisher.pdf#page=7"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{PCHDEPR}_{i,t}=\\frac{\\mathrm{DP}_{i,t}/\\mathrm{PPENT}_{i,t}-\\mathrm{DP}_{i,t-1}/\\mathrm{PPENT}_{i,t-1}}{\\mathrm{DP}_{i,t-1}/\\mathrm{PPENT}_{i,t-1}}\\)",
        "formula_direction": "",
        "data_fields": "Compustat: DP, PPENT",
        "calculation_window": {
          "zh": "年频。",
          "en": "Annual."
        },
        "accounting_lag": {
          "zh": "按 chars_ciz 年频 jdate 对齐；未另行添加页面假设。",
          "en": "Aligned by the chars_ciz annual jdate rule; the page adds no extra assumption."
        },
        "source_label": "EquityChars CIZ · accounting.py · L743",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L743",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "743",
        "code_frequency": {
          "zh": "年频。",
          "en": "Annual."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      },
      "method_design": {
        "family": "multivariate_prediction_model",
        "summary": {
          "zh": "折旧与固定资产之比的百分比变动作为候选比率进入逐步Logit收益模型，并在部分模型中以正系数入选。",
          "en": "The percentage change in depreciation/plant assets is a candidate ratio in the multivariate stepwise-logit return models and enters five models with a positive sign. The traded portfolios sort the models' composite predicted-return probability rather than this ratio independently."
        },
        "signal_role": {
          "zh": "多变量模型的候选解释变量",
          "en": "Candidate predictor in a multivariate model"
        },
        "estimand": {
          "zh": "未来12个月超额收益为正的预测概率",
          "en": "Predicted probability of a positive 12-month excess return"
        },
        "interpretation": {
          "zh": "论文按模型的综合预测概率形成组合，而不是独立交易该变量。",
          "en": ""
        }
      }
    },
    {
      "id": "pchgm_pchsale",
      "name": "% change in gross margin - % change in sales",
      "signal_definition": "% change in gross margin - % change in sales",
      "sort_variable": "pchgm_pchsale",
      "code_direction": "H-L",
      "paper_direction": "not-simple",
      "direction_label": "非简单多空",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Abarbanell and Bushee (1998). Formula table has no entry for this signal.",
      "raw_signal": "% change in gross margin - % change in sales",
      "construction_summary": "The gross-margin signal is defined as an increase or decrease in the percentage change in gross margin relative to sales; improvements imply better expected operating performance.",
      "sample_and_timing": "Sample 1974-1988 for the main strategy and 1989-1993 for the holdout period; signals are formed from annual accounting data.",
      "breakpoints": "Annual decile ranks of the signal, beta, and earnings-change controls.",
      "weighting": "OLS-derived zero-investment weights on [1, RSIGNAL, RBETA, RCEPS].",
      "rebalancing_frequency": "Annual.",
      "holding_period": "12 months.",
      "paper_long_leg": "High gross-margin growth / higher gross margin relative to sales.",
      "paper_short_leg": "Low gross-margin growth / lower gross margin relative to sales.",
      "confidence": "high",
      "evidence_type": "public_html",
      "evidence_pointer": "doi:10.2139/ssrn.40740; paperzz:L43-L57; paperzz:L231-L235; paperzz:L337-L409",
      "reviewer_notes": "The source uses OLS-derived zero-investment weights rather than a simple high-minus-low spread; the leg sign is therefore not promoted to a simple LMS direction.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "The inclusion of RCEPS implies that abnormal returns to a signal can be interpreted as arising from information about future economic conditions that are not reflected in current earnings.6 Finally, because we have included RBETA in the regressions, this implies all other regression coefficients can be interpreted as abnormal returns to zero- 13 portfolios.7 Our strategy involves positions in only December fiscal-year-end firms that have re- ported results by April to allow for the determination of the portfolio weights from (X'X)-'X' used to determine investment positions.",
          "page": 9,
          "line_start": null,
          "line_end": null,
          "method": "automatic_pdf_search",
          "method_label": "自动定位候选句",
          "text_path": "",
          "href": "../papers/abarbanell-1998/abarbanell-bushee-1998.pdf#page=9",
          "open_label": "查看 PDF 第 9 页"
        },
        {
          "text": "When finished goods inventory increases faster than sales, it is conjectured to be bad news for earnings and vice versa.3 An increase (decrease) in the percentage change in gross margin relative to sales, GM, indicates an improvement (deterioration) in the firm's terms of trade and, hence, expected operating performance.",
          "page": 6,
          "line_start": null,
          "line_end": null,
          "method": "automatic_pdf_search",
          "method_label": "自动定位候选句",
          "text_path": "",
          "href": "../papers/abarbanell-1998/abarbanell-bushee-1998.pdf#page=6",
          "open_label": "查看 PDF 第 6 页"
        },
        {
          "text": "These port- folios are constructed with OLS-derived weights for each independent variable for each firm that are given by the rows of the matrix (X'X)-1X', where X = [1, RSIGNALk, RBETA, RCEPS].",
          "page": 9,
          "line_start": null,
          "line_end": null,
          "method": "automatic_pdf_search",
          "method_label": "自动定位候选句",
          "text_path": "",
          "href": "../papers/abarbanell-1998/abarbanell-bushee-1998.pdf#page=9",
          "open_label": "查看 PDF 第 9 页"
        }
      ],
      "evidence_mode": "automatic",
      "paper": {
        "id": "abarbanell-1998",
        "title": "Abnormal Returns to a Fundamental Analysis Strategy",
        "authors": "Jeffery S. Abarbanell; Brian J. Bushee",
        "year": "1998",
        "venue": "The Accounting Review",
        "doi": "",
        "source_url": "https://www.jstor.org/stable/248340",
        "local_file": "papers/abarbanell-1998/abarbanell-bushee-1998.pdf",
        "local_href": "../papers/abarbanell-1998/abarbanell-bushee-1998.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 28,
        "access_status": "full_text_pdf_jstor"
      },
      "method_variants": [
        {
          "id": "abarbanell-1998",
          "source_id": "abarbanell-1998",
          "role": "original_paper",
          "source_label": "Abnormal Returns to a Fundamental Analysis Strategy",
          "source_year": "1998",
          "formula": "",
          "formula_latex": "\\(\\displaystyle g(\\mathrm{SALE}_{i,t}-\\mathrm{COGS}_{i,t})-g(\\mathrm{SALE}_{i,t})\\)",
          "data_fields": "% change in gross margin - % change in sales",
          "calculation_window": {
            "zh": "Sample 1974-1988 for the main strategy and 1989-1993 for the holdout period; signals are formed from annual accounting data.",
            "en": "Sample 1974-1988 for the main strategy and 1989-1993 for the holdout period; signals are formed from annual accounting data."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Annual decile ranks of the signal, beta, and earnings-change controls. OLS-derived zero-investment weights on [1, RSIGNAL, RBETA, RCEPS]. Annual. 12 months.",
            "en": "Annual decile ranks of the signal, beta, and earnings-change controls. OLS-derived zero-investment weights on [1, RSIGNAL, RBETA, RCEPS]. Annual. 12 months."
          },
          "direction": "not-simple",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/abarbanell-1998/abarbanell-bushee-1998.pdf",
          "source_page": 9,
          "source_href": "../papers/abarbanell-1998/abarbanell-bushee-1998.pdf#page=9"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{PCHGM\\_PCHSALE}_{i,t}=\\frac{\\mathrm{GP}_{i,t}-\\mathrm{GP}_{i,t-1}}{\\mathrm{GP}_{i,t-1}}-\\frac{\\mathrm{SALE}_{i,t}-\\mathrm{SALE}_{i,t-1}}{\\mathrm{SALE}_{i,t-1}},\\quad \\mathrm{GP}=\\mathrm{SALE}-\\mathrm{COGS}\\)",
        "formula_direction": "",
        "data_fields": "Compustat: SALE, COGS",
        "calculation_window": {
          "zh": "年频。",
          "en": "Annual."
        },
        "accounting_lag": {
          "zh": "按 chars_ciz 年频 jdate 对齐；未另行添加页面假设。",
          "en": "Aligned by the chars_ciz annual jdate rule; the page adds no extra assumption."
        },
        "source_label": "EquityChars CIZ · accounting.py · L721",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L721",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "721",
        "code_frequency": {
          "zh": "年频。",
          "en": "Annual."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      },
      "method_design": {
        "family": "model_weighted_zero_investment",
        "summary": {
          "zh": "将毛利率相对销售增长的改善构造成基本面信号，形成年度十分位秩，并与β及盈利变动秩共同进入OLS权重方程。",
          "en": "The gross-margin signal is defined as an increase or decrease in the percentage change in gross margin relative to sales; improvements imply better expected operating performance."
        },
        "signal_role": {
          "zh": "基本面信号与目标暴露",
          "en": "Fundamental signal and target exposure"
        },
        "estimand": {
          "zh": "模型加权零投资组合的未来12个月收益",
          "en": "12-month return on a model-weighted zero-investment portfolio"
        },
        "interpretation": {
          "zh": "组合权重由回归约束确定，不能等同于最高十分位减最低十分位的简单组合。",
          "en": ""
        }
      }
    },
    {
      "id": "pchquick",
      "name": "% change in quick ratio",
      "signal_definition": "% change in quick ratio",
      "sort_variable": "pchquick",
      "code_direction": "H-L",
      "paper_direction": "not-simple",
      "direction_label": "非简单多空",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Ou and Penman (1989). Formula table has no entry for this signal.",
      "raw_signal": "Percentage change in quick ratio",
      "construction_summary": "The paper treats the percentage change in quick ratio as one accounting descriptor and combines selected descriptors through a stepwise logit into composite Pr. It does not form a univariate pchquick portfolio.",
      "sample_and_timing": "Descriptors are estimated on 1965-1972 or 1973-1977 data; annual positions are formed for 1973-1983 three months after fiscal year-end.",
      "breakpoints": "The published portfolio cutoffs apply to composite Pr (>0.6 versus <=0.4), not to pchquick.",
      "weighting": "Mean monthly returns on each composite position; the reported hedge is the zero-investment difference between the two sides.",
      "rebalancing_frequency": "Annual overlapping formation with monthly portfolio rebalancing in the cumulative-return calculation.",
      "holding_period": "24 months.",
      "paper_long_leg": "Composite portfolio only: Pr > 0.6; no univariate pchquick long leg.",
      "paper_short_leg": "Composite portfolio only: Pr <= 0.4; no univariate pchquick short leg.",
      "confidence": "high",
      "evidence_type": "author_institution_full_text",
      "evidence_pointer": "extracted-text/ou-1989.txt:396-470 (Table 2),535-617 (Table 3),665-685 (preset strategy),860-890 (Table 6 notes); papers/ou-1989/ou-1989.pdf",
      "reviewer_notes": "The source's H-L rule is for composite Pr, not this input descriptor.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "We then drop all variables for which coefficient estimates in this multivariate estimation are not significant at the 0.10 level, leaving 19 variables for the 1965-1972 period and 18 for the 1973-1977 6The first period is longer than the second because of the need to calculate an earnings drift term over four years preceding the relevant earnings prediction year and because the 1984 COMPUSTAT files used have data only from 1965 onwards.",
          "page": 9,
          "line_start": 396,
          "line_end": 470,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/ou-1989.txt",
          "href": "../papers/ou-1989/ou-1989.pdf#page=9",
          "open_label": "查看 PDF 第 9 页"
        },
        {
          "text": "1965-1972 estimation Accounting descriptor a Current ratio %A in 1 Quick ratio %A in 3 Days sales in accs. receivable 15632 %A in 5 Inventory turnover %Zl in 7 Inventory/total assets %A in 9 %A in inventory %A in sales %A in depreciation A in dividend per share Depreciation/plant assets %zi in 15 Return on opening equity A in 17 %A in (capital expenditure/ 13378 19, one-year lag Debt-equity ratio %A in 21 LT debt to equity %A in 23 Equity to fixed assets %A in 25 Times interest earned %A in 27 Sales/total assets %A in 29 Return on total assets Return on closing equity Gross margin ratio %A in 33",
          "page": 10,
          "line_start": 396,
          "line_end": 470,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/ou-1989.txt",
          "href": "../papers/ou-1989/ou-1989.pdf#page=10",
          "open_label": "查看 PDF 第 10 页"
        },
        {
          "text": "Op. profit (before dep.) to sales %A in 35 Pretax income to sales %A in 37 Net profit margin %A in 39 Sales to total cash Sales to accs. receivable Sales to inventory %A in 43 Sales to working capital %A in 45 Sales to fixed assets %A in production %A in R & D %A in ( R & D / s a l e s ) %A in advertising expense %A in (advertising/sales) %A in total assets Cash flow to total debt Working c a p i t a l / t o t a l assets 15604 0.0850 1.16 0.282",
          "page": 11,
          "line_start": 396,
          "line_end": 470,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/ou-1989.txt",
          "href": "../papers/ou-1989/ou-1989.pdf#page=11",
          "open_label": "查看 PDF 第 11 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "ou-1989",
        "title": "Financial statement analysis and the prediction of stock returns",
        "authors": "Jane A. Ou and Stephen H. Penman",
        "year": "1989",
        "venue": "Journal of Accounting and Economics",
        "doi": "10.1016/0165-4101(89)90017-7",
        "source_url": "https://doi.org/10.1016/0165-4101(89)90017-7",
        "local_file": "papers/ou-1989/ou-1989.pdf",
        "local_href": "../papers/ou-1989/ou-1989.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 35,
        "access_status": "full_text_pdf_author_institution"
      },
      "method_variants": [
        {
          "id": "ou-1989",
          "source_id": "ou-1989",
          "role": "original_paper",
          "source_label": "Financial statement analysis and the prediction of stock returns",
          "source_year": "1989",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{PCHQUICK}_{i,t}=\\frac{\\mathrm{QuickRatio}_{i,t}-\\mathrm{QuickRatio}_{i,t-1}}{\\mathrm{QuickRatio}_{i,t-1}}\\)",
          "data_fields": "Percentage change in quick ratio",
          "calculation_window": {
            "zh": "Descriptors are estimated on 1965-1972 or 1973-1977 data; annual positions are formed for 1973-1983 three months after fiscal year-end.",
            "en": "Descriptors are estimated on 1965-1972 or 1973-1977 data; annual positions are formed for 1973-1983 three months after fiscal year-end."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "The published portfolio cutoffs apply to composite Pr (>0.6 versus <=0.4), not to pchquick. Mean monthly returns on each composite position; the reported hedge is the zero-investment difference between the two sides. Annual overlapping formation with monthly portfolio rebalancing in the cumulative-return calculation. 24 months.",
            "en": "The published portfolio cutoffs apply to composite Pr (>0.6 versus <=0.4), not to pchquick. Mean monthly returns on each composite position; the reported hedge is the zero-investment difference between the two sides. Annual overlapping formation with monthly portfolio rebalancing in the cumulative-return calculation. 24 months."
          },
          "direction": "not-simple",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/ou-1989/ou-1989.pdf",
          "source_page": 9,
          "source_href": "../papers/ou-1989/ou-1989.pdf#page=9"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{QUICK}_{i,t}=\\frac{\\mathrm{ACT}_{i,t}-\\mathrm{INVT}_{i,t}}{\\mathrm{LCT}_{i,t}},\\quad \\mathrm{PCHQUICK}_{i,t}=\\frac{\\mathrm{QUICK}_{i,t}-\\mathrm{QUICK}_{i,t-1}}{\\mathrm{QUICK}_{i,t-1}}\\)",
        "formula_direction": "",
        "data_fields": "Compustat: ACT, INVT, LCT",
        "calculation_window": {
          "zh": "年频。",
          "en": "Annual."
        },
        "accounting_lag": {
          "zh": "按 chars_ciz 年频 jdate 对齐；未另行添加页面假设。",
          "en": "Aligned by the chars_ciz annual jdate rule; the page adds no extra assumption."
        },
        "source_label": "EquityChars CIZ · accounting.py · L822",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L822",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "822",
        "code_frequency": {
          "zh": "年频。",
          "en": "Annual."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      },
      "method_design": {
        "family": "multivariate_prediction_model",
        "summary": {
          "zh": "速动比率的百分比变动作为候选会计变量进入逐步Logit模型，组合依据综合预测概率Pr形成。",
          "en": "The paper treats the percentage change in quick ratio as one accounting descriptor and combines selected descriptors through a stepwise logit into composite Pr. It does not form a univariate pchquick portfolio."
        },
        "signal_role": {
          "zh": "多变量模型的候选解释变量",
          "en": "Candidate predictor in a multivariate model"
        },
        "estimand": {
          "zh": "下一年度盈利增加的预测概率Pr",
          "en": "Predicted probability Pr of a one-year-ahead earnings increase"
        },
        "interpretation": {
          "zh": "该变量未被单独排序；论文组合含义属于综合预测概率，而非该变量自身的多空收益。",
          "en": ""
        }
      }
    },
    {
      "id": "pchsale_pchinvt",
      "name": "% change in sales - % change in inventory",
      "signal_definition": "% change in sales - % change in inventory",
      "sort_variable": "pchsale_pchinvt",
      "code_direction": "H-L",
      "paper_direction": "not-simple",
      "direction_label": "非简单多空",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Abarbanell and Bushee (1998). Formula table has no entry for this signal.",
      "raw_signal": "% change in sales - % change in inventory",
      "construction_summary": "The inventory signal is the percentage difference between sales and its expected value less an analogous measure for inventory; faster inventory growth than sales is bad news.",
      "sample_and_timing": "Sample 1974-1988 for the main strategy and 1989-1993 for the holdout period; signals are formed from annual accounting data.",
      "breakpoints": "Annual decile ranks of the signal, beta, and earnings-change controls.",
      "weighting": "OLS-derived zero-investment weights on [1, RSIGNAL, RBETA, RCEPS].",
      "rebalancing_frequency": "Annual.",
      "holding_period": "12 months.",
      "paper_long_leg": "Higher sales growth relative to inventory growth.",
      "paper_short_leg": "Lower sales growth relative to inventory growth.",
      "confidence": "high",
      "evidence_type": "public_html",
      "evidence_pointer": "doi:10.2139/ssrn.40740; paperzz:L43-L57; paperzz:L231-L233; paperzz:L337-L409",
      "reviewer_notes": "The source uses OLS-derived zero-investment weights rather than a simple high-minus-low spread; the leg sign is therefore not promoted to a simple LMS direction.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "The inclusion of RCEPS implies that abnormal returns to a signal can be interpreted as arising from information about future economic conditions that are not reflected in current earnings.6 Finally, because we have included RBETA in the regressions, this implies all other regression coefficients can be interpreted as abnormal returns to zero- 13 portfolios.7 Our strategy involves positions in only December fiscal-year-end firms that have re- ported results by April to allow for the determination of the portfolio weights from (X'X)-'X' used to determine investment positions.",
          "page": 9,
          "line_start": null,
          "line_end": null,
          "method": "automatic_pdf_search",
          "method_label": "自动定位候选句",
          "text_path": "",
          "href": "../papers/abarbanell-1998/abarbanell-bushee-1998.pdf#page=9",
          "open_label": "查看 PDF 第 9 页"
        },
        {
          "text": "These port- folios are constructed with OLS-derived weights for each independent variable for each firm that are given by the rows of the matrix (X'X)-1X', where X = [1, RSIGNALk, RBETA, RCEPS].",
          "page": 9,
          "line_start": null,
          "line_end": null,
          "method": "automatic_pdf_search",
          "method_label": "自动定位候选句",
          "text_path": "",
          "href": "../papers/abarbanell-1998/abarbanell-bushee-1998.pdf#page=9",
          "open_label": "查看 PDF 第 9 页"
        },
        {
          "text": "None of the negative abnormal returns were large or significant in the five years in which the strategy failed.'0 To provide a benchmark for assessing the magnitude of returns to future earnings news, we rank the sample firms' earnings changes from the year subsequent to the fundamental signal disclosure into deciles, and scale the decile numbers to take on values between zero and one.",
          "page": 11,
          "line_start": null,
          "line_end": null,
          "method": "automatic_pdf_search",
          "method_label": "自动定位候选句",
          "text_path": "",
          "href": "../papers/abarbanell-1998/abarbanell-bushee-1998.pdf#page=11",
          "open_label": "查看 PDF 第 11 页"
        }
      ],
      "evidence_mode": "automatic",
      "paper": {
        "id": "abarbanell-1998",
        "title": "Abnormal Returns to a Fundamental Analysis Strategy",
        "authors": "Jeffery S. Abarbanell; Brian J. Bushee",
        "year": "1998",
        "venue": "The Accounting Review",
        "doi": "",
        "source_url": "https://www.jstor.org/stable/248340",
        "local_file": "papers/abarbanell-1998/abarbanell-bushee-1998.pdf",
        "local_href": "../papers/abarbanell-1998/abarbanell-bushee-1998.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 28,
        "access_status": "full_text_pdf_jstor"
      },
      "method_variants": [
        {
          "id": "abarbanell-1998",
          "source_id": "abarbanell-1998",
          "role": "original_paper",
          "source_label": "Abnormal Returns to a Fundamental Analysis Strategy",
          "source_year": "1998",
          "formula": "",
          "formula_latex": "\\(\\displaystyle g(\\mathrm{SALE}_{i,t})-g(\\mathrm{INVT}_{i,t})\\)",
          "data_fields": "% change in sales - % change in inventory",
          "calculation_window": {
            "zh": "Sample 1974-1988 for the main strategy and 1989-1993 for the holdout period; signals are formed from annual accounting data.",
            "en": "Sample 1974-1988 for the main strategy and 1989-1993 for the holdout period; signals are formed from annual accounting data."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Annual decile ranks of the signal, beta, and earnings-change controls. OLS-derived zero-investment weights on [1, RSIGNAL, RBETA, RCEPS]. Annual. 12 months.",
            "en": "Annual decile ranks of the signal, beta, and earnings-change controls. OLS-derived zero-investment weights on [1, RSIGNAL, RBETA, RCEPS]. Annual. 12 months."
          },
          "direction": "not-simple",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/abarbanell-1998/abarbanell-bushee-1998.pdf",
          "source_page": 9,
          "source_href": "../papers/abarbanell-1998/abarbanell-bushee-1998.pdf#page=9"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{PCHSALE\\_PCHINVT}_{i,t}=\\frac{\\Delta\\mathrm{SALE}_{i,t}}{\\mathrm{SALE}_{i,t-1}}-\\frac{\\Delta\\mathrm{INVT}_{i,t}}{\\mathrm{INVT}_{i,t-1}}\\)",
        "formula_direction": "",
        "data_fields": "Compustat: INVT, SALE",
        "calculation_window": {
          "zh": "年频。",
          "en": "Annual."
        },
        "accounting_lag": {
          "zh": "按 chars_ciz 年频 jdate 对齐；未另行添加页面假设。",
          "en": "Aligned by the chars_ciz annual jdate rule; the page adds no extra assumption."
        },
        "source_label": "EquityChars CIZ · accounting.py · L698",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L698",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "698",
        "code_frequency": {
          "zh": "年频。",
          "en": "Annual."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      },
      "method_design": {
        "family": "model_weighted_zero_investment",
        "summary": {
          "zh": "以销售增长相对存货增长的差异构造基本面信号，形成年度十分位秩，并与β及盈利变动秩共同进入OLS权重方程。",
          "en": "The inventory signal is the percentage difference between sales and its expected value less an analogous measure for inventory; faster inventory growth than sales is bad news."
        },
        "signal_role": {
          "zh": "基本面信号与目标暴露",
          "en": "Fundamental signal and target exposure"
        },
        "estimand": {
          "zh": "模型加权零投资组合的未来12个月收益",
          "en": "12-month return on a model-weighted zero-investment portfolio"
        },
        "interpretation": {
          "zh": "组合权重由回归约束确定，不能等同于最高十分位减最低十分位的简单组合。",
          "en": ""
        }
      }
    },
    {
      "id": "pchsale_pchrect",
      "name": "% change in sales - % change in A or R",
      "signal_definition": "% change in sales - % change in A or R",
      "sort_variable": "pchsale_pchrect",
      "code_direction": "H-L",
      "paper_direction": "not-simple",
      "direction_label": "非简单多空",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Abarbanell and Bushee (1998). Formula table has no entry for this signal.",
      "raw_signal": "% change in sales - % change in accounts receivable",
      "construction_summary": "The AR signal is the change in accounts receivable relative to the change in sales; the paper treats an AR expansion faster than sales as a warning sign.",
      "sample_and_timing": "Sample 1974-1988 for the main strategy and 1989-1993 for the holdout period; signals are formed from annual accounting data.",
      "breakpoints": "Annual decile ranks of the signal, beta, and earnings-change controls.",
      "weighting": "OLS-derived zero-investment weights on [1, RSIGNAL, RBETA, RCEPS].",
      "rebalancing_frequency": "Annual.",
      "holding_period": "12 months.",
      "paper_long_leg": "Higher sales growth relative to receivables growth.",
      "paper_short_leg": "Lower sales growth relative to receivables growth.",
      "confidence": "high",
      "evidence_type": "public_html",
      "evidence_pointer": "doi:10.2139/ssrn.40740; paperzz:L43-L57; paperzz:L244-L248; paperzz:L337-L409",
      "reviewer_notes": "The source uses OLS-derived zero-investment weights rather than a simple high-minus-low spread; the leg sign is therefore not promoted to a simple LMS direction.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "The inclusion of RCEPS implies that abnormal returns to a signal can be interpreted as arising from information about future economic conditions that are not reflected in current earnings.6 Finally, because we have included RBETA in the regressions, this implies all other regression coefficients can be interpreted as abnormal returns to zero- 13 portfolios.7 Our strategy involves positions in only December fiscal-year-end firms that have re- ported results by April to allow for the determination of the portfolio weights from (X'X)-'X' used to determine investment positions.",
          "page": 9,
          "line_start": null,
          "line_end": null,
          "method": "automatic_pdf_search",
          "method_label": "自动定位候选句",
          "text_path": "",
          "href": "../papers/abarbanell-1998/abarbanell-bushee-1998.pdf#page=9",
          "open_label": "查看 PDF 第 9 页"
        },
        {
          "text": "The AR signal represents the change in accounts receivable relative to the change in sales.",
          "page": 6,
          "line_start": null,
          "line_end": null,
          "method": "automatic_pdf_search",
          "method_label": "自动定位候选句",
          "text_path": "",
          "href": "../papers/abarbanell-1998/abarbanell-bushee-1998.pdf#page=6",
          "open_label": "查看 PDF 第 6 页"
        },
        {
          "text": "These port- folios are constructed with OLS-derived weights for each independent variable for each firm that are given by the rows of the matrix (X'X)-1X', where X = [1, RSIGNALk, RBETA, RCEPS].",
          "page": 9,
          "line_start": null,
          "line_end": null,
          "method": "automatic_pdf_search",
          "method_label": "自动定位候选句",
          "text_path": "",
          "href": "../papers/abarbanell-1998/abarbanell-bushee-1998.pdf#page=9",
          "open_label": "查看 PDF 第 9 页"
        }
      ],
      "evidence_mode": "automatic",
      "paper": {
        "id": "abarbanell-1998",
        "title": "Abnormal Returns to a Fundamental Analysis Strategy",
        "authors": "Jeffery S. Abarbanell; Brian J. Bushee",
        "year": "1998",
        "venue": "The Accounting Review",
        "doi": "",
        "source_url": "https://www.jstor.org/stable/248340",
        "local_file": "papers/abarbanell-1998/abarbanell-bushee-1998.pdf",
        "local_href": "../papers/abarbanell-1998/abarbanell-bushee-1998.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 28,
        "access_status": "full_text_pdf_jstor"
      },
      "method_variants": [
        {
          "id": "abarbanell-1998",
          "source_id": "abarbanell-1998",
          "role": "original_paper",
          "source_label": "Abnormal Returns to a Fundamental Analysis Strategy",
          "source_year": "1998",
          "formula": "",
          "formula_latex": "\\(\\displaystyle g(\\mathrm{SALE}_{i,t})-g(\\mathrm{RECT}_{i,t})\\)",
          "data_fields": "% change in sales - % change in accounts receivable",
          "calculation_window": {
            "zh": "Sample 1974-1988 for the main strategy and 1989-1993 for the holdout period; signals are formed from annual accounting data.",
            "en": "Sample 1974-1988 for the main strategy and 1989-1993 for the holdout period; signals are formed from annual accounting data."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Annual decile ranks of the signal, beta, and earnings-change controls. OLS-derived zero-investment weights on [1, RSIGNAL, RBETA, RCEPS]. Annual. 12 months.",
            "en": "Annual decile ranks of the signal, beta, and earnings-change controls. OLS-derived zero-investment weights on [1, RSIGNAL, RBETA, RCEPS]. Annual. 12 months."
          },
          "direction": "not-simple",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/abarbanell-1998/abarbanell-bushee-1998.pdf",
          "source_page": 9,
          "source_href": "../papers/abarbanell-1998/abarbanell-bushee-1998.pdf#page=9"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{PCHSALE\\_PCHRECT}_{i,t}=\\frac{\\Delta\\mathrm{SALE}_{i,t}}{\\mathrm{SALE}_{i,t-1}}-\\frac{\\Delta\\mathrm{RECT}_{i,t}}{\\mathrm{RECT}_{i,t-1}}\\)",
        "formula_direction": "",
        "data_fields": "Compustat: RECT, SALE",
        "calculation_window": {
          "zh": "年频。",
          "en": "Annual."
        },
        "accounting_lag": {
          "zh": "按 chars_ciz 年频 jdate 对齐；未另行添加页面假设。",
          "en": "Aligned by the chars_ciz annual jdate rule; the page adds no extra assumption."
        },
        "source_label": "EquityChars CIZ · accounting.py · L709",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L709",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "709",
        "code_frequency": {
          "zh": "年频。",
          "en": "Annual."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      },
      "method_design": {
        "family": "model_weighted_zero_investment",
        "summary": {
          "zh": "以销售增长相对应收账款增长的差异构造基本面信号，形成年度十分位秩，并与β及盈利变动秩共同进入OLS权重方程。",
          "en": "The AR signal is the change in accounts receivable relative to the change in sales; the paper treats an AR expansion faster than sales as a warning sign."
        },
        "signal_role": {
          "zh": "基本面信号与目标暴露",
          "en": "Fundamental signal and target exposure"
        },
        "estimand": {
          "zh": "模型加权零投资组合的未来12个月收益",
          "en": "12-month return on a model-weighted zero-investment portfolio"
        },
        "interpretation": {
          "zh": "组合权重由回归约束确定，不能等同于最高十分位减最低十分位的简单组合。",
          "en": ""
        }
      }
    },
    {
      "id": "pchsale_pchxsga",
      "name": "% change in sales - % change in SG and A",
      "signal_definition": "% change in sales - % change in SG and A",
      "sort_variable": "pchsale_pchxsga",
      "code_direction": "H-L",
      "paper_direction": "not-simple",
      "direction_label": "非简单多空",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Abarbanell and Bushee (1998). Formula table has no entry for this signal.",
      "raw_signal": "% change in sales - % change in SG&A",
      "construction_summary": "The S&A signal is increases or decreases in selling and administrative expenses relative to the percentage change in sales.",
      "sample_and_timing": "Sample 1974-1988 for the main strategy and 1989-1993 for the holdout period; signals are formed from annual accounting data.",
      "breakpoints": "Annual decile ranks of the signal, beta, and earnings-change controls.",
      "weighting": "OLS-derived zero-investment weights on [1, RSIGNAL, RBETA, RCEPS].",
      "rebalancing_frequency": "Annual.",
      "holding_period": "12 months.",
      "paper_long_leg": "Higher sales growth relative to SG&A growth.",
      "paper_short_leg": "Lower sales growth relative to SG&A growth.",
      "confidence": "high",
      "evidence_type": "public_html",
      "evidence_pointer": "doi:10.2139/ssrn.40740; paperzz:L43-L57; paperzz:L317-L323; paperzz:L337-L409",
      "reviewer_notes": "The source uses OLS-derived zero-investment weights rather than a simple high-minus-low spread; the leg sign is therefore not promoted to a simple LMS direction.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "The inclusion of RCEPS implies that abnormal returns to a signal can be interpreted as arising from information about future economic conditions that are not reflected in current earnings.6 Finally, because we have included RBETA in the regressions, this implies all other regression coefficients can be interpreted as abnormal returns to zero- 13 portfolios.7 Our strategy involves positions in only December fiscal-year-end firms that have re- ported results by April to allow for the determination of the portfolio weights from (X'X)-'X' used to determine investment positions.",
          "page": 9,
          "line_start": null,
          "line_end": null,
          "method": "automatic_pdf_search",
          "method_label": "自动定位候选句",
          "text_path": "",
          "href": "../papers/abarbanell-1998/abarbanell-bushee-1998.pdf#page=9",
          "open_label": "查看 PDF 第 9 页"
        },
        {
          "text": "These port- folios are constructed with OLS-derived weights for each independent variable for each firm that are given by the rows of the matrix (X'X)-1X', where X = [1, RSIGNALk, RBETA, RCEPS].",
          "page": 9,
          "line_start": null,
          "line_end": null,
          "method": "automatic_pdf_search",
          "method_label": "自动定位候选句",
          "text_path": "",
          "href": "../papers/abarbanell-1998/abarbanell-bushee-1998.pdf#page=9",
          "open_label": "查看 PDF 第 9 页"
        },
        {
          "text": "None of the negative abnormal returns were large or significant in the five years in which the strategy failed.'0 To provide a benchmark for assessing the magnitude of returns to future earnings news, we rank the sample firms' earnings changes from the year subsequent to the fundamental signal disclosure into deciles, and scale the decile numbers to take on values between zero and one.",
          "page": 11,
          "line_start": null,
          "line_end": null,
          "method": "automatic_pdf_search",
          "method_label": "自动定位候选句",
          "text_path": "",
          "href": "../papers/abarbanell-1998/abarbanell-bushee-1998.pdf#page=11",
          "open_label": "查看 PDF 第 11 页"
        }
      ],
      "evidence_mode": "automatic",
      "paper": {
        "id": "abarbanell-1998",
        "title": "Abnormal Returns to a Fundamental Analysis Strategy",
        "authors": "Jeffery S. Abarbanell; Brian J. Bushee",
        "year": "1998",
        "venue": "The Accounting Review",
        "doi": "",
        "source_url": "https://www.jstor.org/stable/248340",
        "local_file": "papers/abarbanell-1998/abarbanell-bushee-1998.pdf",
        "local_href": "../papers/abarbanell-1998/abarbanell-bushee-1998.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 28,
        "access_status": "full_text_pdf_jstor"
      },
      "method_variants": [
        {
          "id": "abarbanell-1998",
          "source_id": "abarbanell-1998",
          "role": "original_paper",
          "source_label": "Abnormal Returns to a Fundamental Analysis Strategy",
          "source_year": "1998",
          "formula": "",
          "formula_latex": "\\(\\displaystyle g(\\mathrm{SALE}_{i,t})-g(\\mathrm{XSGA}_{i,t})\\)",
          "data_fields": "% change in sales - % change in SG&A",
          "calculation_window": {
            "zh": "Sample 1974-1988 for the main strategy and 1989-1993 for the holdout period; signals are formed from annual accounting data.",
            "en": "Sample 1974-1988 for the main strategy and 1989-1993 for the holdout period; signals are formed from annual accounting data."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Annual decile ranks of the signal, beta, and earnings-change controls. OLS-derived zero-investment weights on [1, RSIGNAL, RBETA, RCEPS]. Annual. 12 months.",
            "en": "Annual decile ranks of the signal, beta, and earnings-change controls. OLS-derived zero-investment weights on [1, RSIGNAL, RBETA, RCEPS]. Annual. 12 months."
          },
          "direction": "not-simple",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/abarbanell-1998/abarbanell-bushee-1998.pdf",
          "source_page": 9,
          "source_href": "../papers/abarbanell-1998/abarbanell-bushee-1998.pdf#page=9"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{PCHSALE\\_PCHXSGA}_{i,t}=\\frac{\\Delta\\mathrm{SALE}_{i,t}}{\\mathrm{SALE}_{i,t-1}}-\\frac{\\Delta\\mathrm{XSGA}_{i,t}}{\\mathrm{XSGA}_{i,t-1}}\\)",
        "formula_direction": "",
        "data_fields": "Compustat: SALE, XSGA",
        "calculation_window": {
          "zh": "年频。",
          "en": "Annual."
        },
        "accounting_lag": {
          "zh": "按 chars_ciz 年频 jdate 对齐；未另行添加页面假设。",
          "en": "Aligned by the chars_ciz annual jdate rule; the page adds no extra assumption."
        },
        "source_label": "EquityChars CIZ · accounting.py · L732",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L732",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "732",
        "code_frequency": {
          "zh": "年频。",
          "en": "Annual."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      },
      "method_design": {
        "family": "model_weighted_zero_investment",
        "summary": {
          "zh": "以销售增长相对销售及管理费用增长的差异构造基本面信号，形成年度十分位秩，并与β及盈利变动秩共同进入OLS权重方程。",
          "en": "The S&A signal is increases or decreases in selling and administrative expenses relative to the percentage change in sales."
        },
        "signal_role": {
          "zh": "基本面信号与目标暴露",
          "en": "Fundamental signal and target exposure"
        },
        "estimand": {
          "zh": "模型加权零投资组合的未来12个月收益",
          "en": "12-month return on a model-weighted zero-investment portfolio"
        },
        "interpretation": {
          "zh": "组合权重由回归约束确定，不能等同于最高十分位减最低十分位的简单组合。",
          "en": ""
        }
      }
    },
    {
      "id": "pchsaleinv",
      "name": "% change sales-to-inventory",
      "signal_definition": "% change sales-to-inventory",
      "sort_variable": "pchsaleinv",
      "code_direction": "H-L",
      "paper_direction": "not-simple",
      "direction_label": "非简单多空",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Ou and Penman (1989). Formula table has no entry for this signal.",
      "raw_signal": "Percentage change in inventory turnover (sales to inventory)",
      "construction_summary": "The paper treats the percentage change in inventory turnover as one accounting descriptor and combines selected descriptors through a stepwise logit into composite Pr. It does not form a univariate pchsaleinv portfolio.",
      "sample_and_timing": "Descriptors are estimated on 1965-1972 or 1973-1977 data; annual positions are formed for 1973-1983 three months after fiscal year-end.",
      "breakpoints": "The published portfolio cutoffs apply to composite Pr (>0.6 versus <=0.4), not to pchsaleinv.",
      "weighting": "Mean monthly returns on each composite position; the reported hedge is the zero-investment difference between the two sides.",
      "rebalancing_frequency": "Annual overlapping formation with monthly portfolio rebalancing in the cumulative-return calculation.",
      "holding_period": "24 months.",
      "paper_long_leg": "Composite portfolio only: Pr > 0.6; no univariate pchsaleinv long leg.",
      "paper_short_leg": "Composite portfolio only: Pr <= 0.4; no univariate pchsaleinv short leg.",
      "confidence": "high",
      "evidence_type": "author_institution_full_text",
      "evidence_pointer": "extracted-text/ou-1989.txt:396-470 (Table 2),535-617 (Table 3),665-685 (preset strategy),860-890 (Table 6 notes); papers/ou-1989/ou-1989.pdf",
      "reviewer_notes": "The source's H-L rule is for composite Pr, not this input descriptor.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "We then drop all variables for which coefficient estimates in this multivariate estimation are not significant at the 0.10 level, leaving 19 variables for the 1965-1972 period and 18 for the 1973-1977 6The first period is longer than the second because of the need to calculate an earnings drift term over four years preceding the relevant earnings prediction year and because the 1984 COMPUSTAT files used have data only from 1965 onwards.",
          "page": 9,
          "line_start": 396,
          "line_end": 470,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/ou-1989.txt",
          "href": "../papers/ou-1989/ou-1989.pdf#page=9",
          "open_label": "查看 PDF 第 9 页"
        },
        {
          "text": "1965-1972 estimation Accounting descriptor a Current ratio %A in 1 Quick ratio %A in 3 Days sales in accs. receivable 15632 %A in 5 Inventory turnover %Zl in 7 Inventory/total assets %A in 9 %A in inventory %A in sales %A in depreciation A in dividend per share Depreciation/plant assets %zi in 15 Return on opening equity A in 17 %A in (capital expenditure/ 13378 19, one-year lag Debt-equity ratio %A in 21 LT debt to equity %A in 23 Equity to fixed assets %A in 25 Times interest earned %A in 27 Sales/total assets %A in 29 Return on total assets Return on closing equity Gross margin ratio %A in 33",
          "page": 10,
          "line_start": 396,
          "line_end": 470,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/ou-1989.txt",
          "href": "../papers/ou-1989/ou-1989.pdf#page=10",
          "open_label": "查看 PDF 第 10 页"
        },
        {
          "text": "Op. profit (before dep.) to sales %A in 35 Pretax income to sales %A in 37 Net profit margin %A in 39 Sales to total cash Sales to accs. receivable Sales to inventory %A in 43 Sales to working capital %A in 45 Sales to fixed assets %A in production %A in R & D %A in ( R & D / s a l e s ) %A in advertising expense %A in (advertising/sales) %A in total assets Cash flow to total debt Working c a p i t a l / t o t a l assets 15604 0.0850 1.16 0.282",
          "page": 11,
          "line_start": 396,
          "line_end": 470,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/ou-1989.txt",
          "href": "../papers/ou-1989/ou-1989.pdf#page=11",
          "open_label": "查看 PDF 第 11 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "ou-1989",
        "title": "Financial statement analysis and the prediction of stock returns",
        "authors": "Jane A. Ou and Stephen H. Penman",
        "year": "1989",
        "venue": "Journal of Accounting and Economics",
        "doi": "10.1016/0165-4101(89)90017-7",
        "source_url": "https://doi.org/10.1016/0165-4101(89)90017-7",
        "local_file": "papers/ou-1989/ou-1989.pdf",
        "local_href": "../papers/ou-1989/ou-1989.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 35,
        "access_status": "full_text_pdf_author_institution"
      },
      "method_variants": [
        {
          "id": "ou-1989",
          "source_id": "ou-1989",
          "role": "original_paper",
          "source_label": "Financial statement analysis and the prediction of stock returns",
          "source_year": "1989",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{PCHSALEINV}_{i,t}=\\frac{\\mathrm{SALE}_{i,t}/\\mathrm{INVT}_{i,t}-\\mathrm{SALE}_{i,t-1}/\\mathrm{INVT}_{i,t-1}}{\\mathrm{SALE}_{i,t-1}/\\mathrm{INVT}_{i,t-1}}\\)",
          "data_fields": "Percentage change in inventory turnover (sales to inventory)",
          "calculation_window": {
            "zh": "Descriptors are estimated on 1965-1972 or 1973-1977 data; annual positions are formed for 1973-1983 three months after fiscal year-end.",
            "en": "Descriptors are estimated on 1965-1972 or 1973-1977 data; annual positions are formed for 1973-1983 three months after fiscal year-end."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "The published portfolio cutoffs apply to composite Pr (>0.6 versus <=0.4), not to pchsaleinv. Mean monthly returns on each composite position; the reported hedge is the zero-investment difference between the two sides. Annual overlapping formation with monthly portfolio rebalancing in the cumulative-return calculation. 24 months.",
            "en": "The published portfolio cutoffs apply to composite Pr (>0.6 versus <=0.4), not to pchsaleinv. Mean monthly returns on each composite position; the reported hedge is the zero-investment difference between the two sides. Annual overlapping formation with monthly portfolio rebalancing in the cumulative-return calculation. 24 months."
          },
          "direction": "not-simple",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/ou-1989/ou-1989.pdf",
          "source_page": 9,
          "source_href": "../papers/ou-1989/ou-1989.pdf#page=9"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle R_{i,t}=\\frac{\\mathrm{SALE}_{i,t}}{\\mathrm{INVT}_{i,t}},\\quad \\mathrm{PCHSALEINV}_{i,t}=\\frac{R_{i,t}-R_{i,t-1}}{R_{i,t-1}}\\)",
        "formula_direction": "",
        "data_fields": "Compustat: SALE, INVT",
        "calculation_window": {
          "zh": "年频。",
          "en": "Annual."
        },
        "accounting_lag": {
          "zh": "按 chars_ciz 年频 jdate 对齐；未另行添加页面假设。",
          "en": "Aligned by the chars_ciz annual jdate rule; the page adds no extra assumption."
        },
        "source_label": "EquityChars CIZ · accounting.py · L843",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L843",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "843",
        "code_frequency": {
          "zh": "年频。",
          "en": "Annual."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      },
      "method_design": {
        "family": "multivariate_prediction_model",
        "summary": {
          "zh": "存货周转率的百分比变动作为候选会计变量进入逐步Logit模型，组合依据综合预测概率Pr形成。",
          "en": "The paper treats the percentage change in inventory turnover as one accounting descriptor and combines selected descriptors through a stepwise logit into composite Pr. It does not form a univariate pchsaleinv portfolio."
        },
        "signal_role": {
          "zh": "多变量模型的候选解释变量",
          "en": "Candidate predictor in a multivariate model"
        },
        "estimand": {
          "zh": "下一年度盈利增加的预测概率Pr",
          "en": "Predicted probability Pr of a one-year-ahead earnings increase"
        },
        "interpretation": {
          "zh": "该变量未被单独排序；论文组合含义属于综合预测概率，而非该变量自身的多空收益。",
          "en": ""
        }
      }
    },
    {
      "id": "pctacc",
      "name": "Percent operating accruals",
      "signal_definition": "Percent operating accruals",
      "sort_variable": "pctacc",
      "code_direction": "L-H",
      "paper_direction": "L-H",
      "direction_label": "低值做多 · 高值做空",
      "agreement": "yes",
      "status": "paper_direction_verified",
      "code_long_leg": "Low",
      "code_short_leg": "High",
      "code_notes": "Repo attribution: Hafzalla, Lundholm, and Van Winkle (2011). Formula table direction: -1.",
      "raw_signal": "(Net Income - Cash from Operations) / |Net Income|",
      "construction_summary": "The published article scales operating accruals by absolute net income to preserve the accrual sign, sorts firms into ten portfolios using prior-year decile breakpoints, and reports the hedge as decile 1 minus decile 10.",
      "sample_and_timing": "Nonfinancial Compustat/CRSP firm-years spanning 1989-2008; returns start on the first day of the fourth month after fiscal year-end.",
      "breakpoints": "Prior-year decile breakpoints; ten portfolios; Table 4 reports decile 1 through 10 and decile 1 minus decile 10.",
      "weighting": "Not explicitly stated for the accrual decile portfolios; excess returns use equally weighted size-reference portfolios.",
      "rebalancing_frequency": "Annual.",
      "holding_period": "One year.",
      "paper_long_leg": "Lowest percent operating accrual decile, including large negative percent accruals.",
      "paper_short_leg": "Highest percent operating accrual decile, including positive/high percent accruals.",
      "confidence": "high",
      "evidence_type": "publisher_final_pdf",
      "evidence_pointer": "extracted-text/hafzalla-2011-publisher.txt:19-24,109-111,219-230,298,323-325,573-575,664-685",
      "reviewer_notes": "Verified against the formal The Accounting Review publisher PDF; signal scaling, timing, deciles, and decile-1-minus-decile-10 direction are explicit.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "We find that a trading strategy based on percent accruals yields significantly larger annual hedge returns than the traditional accruals measure, and does so mostly by improving the long position in low-accrual stocks.",
          "page": 1,
          "line_start": 19,
          "line_end": 24,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/hafzalla-2011-publisher.txt",
          "href": "../papers/hafzalla-2011/hafzalla-2011-publisher.pdf#page=1",
          "open_label": "查看 PDF 第 1 页"
        },
        {
          "text": "In order to assure that the sign of the accrual is maintained when we sort firms into portfolios, we scale by the absolute value of net income.",
          "page": 2,
          "line_start": 109,
          "line_end": 111,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/hafzalla-2011-publisher.txt",
          "href": "../papers/hafzalla-2011/hafzalla-2011-publisher.pdf#page=2",
          "open_label": "查看 PDF 第 2 页"
        },
        {
          "text": "That is, our percent accruals measures are: Percent Operating Accruals = 共Net Income − Cash from Operations兲/兩Net Income兩 and Percent Total Accruals = 关Net Income − 共Net Dividends and Distributions to/from Equityholders + increase in the cash balance兲兴/兩Net Income兩.",
          "page": 4,
          "line_start": 219,
          "line_end": 230,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/hafzalla-2011-publisher.txt",
          "href": "../papers/hafzalla-2011/hafzalla-2011-publisher.pdf#page=4",
          "open_label": "查看 PDF 第 4 页"
        },
        {
          "text": "We sorted these into either decile 1 or decile 10, depending on the sign of the",
          "page": 5,
          "line_start": 298,
          "line_end": 298,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/hafzalla-2011-publisher.txt",
          "href": "../papers/hafzalla-2011/hafzalla-2011-publisher.pdf#page=5",
          "open_label": "查看 PDF 第 5 页"
        },
        {
          "text": "As discussed later, we use the prior year’s decile breaks to form portfolios, resulting in 19 years of annual portfolio",
          "page": 6,
          "line_start": 323,
          "line_end": 325,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/hafzalla-2011-publisher.txt",
          "href": "../papers/hafzalla-2011/hafzalla-2011-publisher.pdf#page=6",
          "open_label": "查看 PDF 第 6 页"
        },
        {
          "text": "The lowest decile of percent accruals firms are three times larger and much better",
          "page": 10,
          "line_start": 573,
          "line_end": 575,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/hafzalla-2011-publisher.txt",
          "href": "../papers/hafzalla-2011/hafzalla-2011-publisher.pdf#page=10",
          "open_label": "查看 PDF 第 10 页"
        },
        {
          "text": "The hedge return comes equally from the long and short position, with an TABLE 4 Mean Annual Size-Adjusted Returns to Percent Operating Accrual and Traditional Operating Accrual Portfolios Panel A: Percent Operating Accruals Size-Adjusted Decile 1 2 3 4 5 6 7 8 9 10 Decile 1 ⫺ Decile 10",
          "page": 12,
          "line_start": 664,
          "line_end": 685,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/hafzalla-2011-publisher.txt",
          "href": "../papers/hafzalla-2011/hafzalla-2011-publisher.pdf#page=12",
          "open_label": "查看 PDF 第 12 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "hafzalla-2011",
        "title": "Percent Accruals",
        "authors": "Nader Hafzalla; Russell J. Lundholm; E. Matthew Van Winkle",
        "year": "2011",
        "venue": "The Accounting Review, 86(1), 209-236",
        "doi": "10.2308/accr.00000011",
        "source_url": "https://doi.org/10.2308/accr.00000011",
        "local_file": "papers/hafzalla-2011/hafzalla-2011-publisher.pdf",
        "local_href": "../papers/hafzalla-2011/hafzalla-2011-publisher.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 28,
        "access_status": "full_text_pdf_publisher"
      },
      "method_variants": [
        {
          "id": "hafzalla-2011",
          "source_id": "hafzalla-2011",
          "role": "original_paper",
          "source_label": "Percent Accruals",
          "source_year": "2011",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{PCTACC}_{i,t}=\\frac{\\mathrm{NI}_{i,t}-\\mathrm{CFO}_{i,t}}{\\lvert\\mathrm{NI}_{i,t}\\rvert}\\)",
          "data_fields": "(Net Income - Cash from Operations) / |Net Income|",
          "calculation_window": {
            "zh": "Nonfinancial Compustat/CRSP firm-years spanning 1989-2008; returns start on the first day of the fourth month after fiscal year-end.",
            "en": "Nonfinancial Compustat/CRSP firm-years spanning 1989-2008; returns start on the first day of the fourth month after fiscal year-end."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Prior-year decile breakpoints; ten portfolios; Table 4 reports decile 1 through 10 and decile 1 minus decile 10. Not explicitly stated for the accrual decile portfolios; excess returns use equally weighted size-reference portfolios. Annual. One year.",
            "en": "Prior-year decile breakpoints; ten portfolios; Table 4 reports decile 1 through 10 and decile 1 minus decile 10. Not explicitly stated for the accrual decile portfolios; excess returns use equally weighted size-reference portfolios. Annual. One year."
          },
          "direction": "L-H",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/hafzalla-2011/hafzalla-2011-publisher.pdf",
          "source_page": 1,
          "source_href": "../papers/hafzalla-2011/hafzalla-2011-publisher.pdf#page=1"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{PCTACC}_{i,t}=\\frac{\\mathrm{ACC}_{i,t}}{|\\mathrm{NI}_{i,t}|}\\)",
        "formula_direction": "-1",
        "data_fields": "Compustat: NI",
        "calculation_window": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "accounting_lag": {
          "zh": "年频与季频结果均在 CIZ 中对齐；最终比较 datadate，取较新的可用值。",
          "en": "CIZ aligns both annual and quarterly results, then selects the newer available value by datadate."
        },
        "source_label": "EquityChars CIZ · accounting.py · L551, L1614",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L551",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "551,1614",
        "code_frequency": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "reconcile_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/impute_rank_output.py#L85",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写。年频与季频同时可用时，最终输出按 datadate 选择较新的非空值。",
          "en": "Formula transcribed from chars_ciz. When annual and quarterly values both exist, final output selects the newer non-null value by datadate."
        }
      }
    },
    {
      "id": "pm",
      "name": "profit margin",
      "signal_definition": "profit margin",
      "sort_variable": "pm",
      "code_direction": "H-L",
      "paper_direction": "not-simple",
      "direction_label": "非简单多空",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Soliman (2008). Formula table direction: +1.",
      "raw_signal": "PM = operating income divided by total sales",
      "construction_summary": "The published article uses profit margin as a DuPont component and control in contemporaneous and future-return regressions. It does not define a standalone profit-margin long/short portfolio, and the paper's principal future-return finding concerns change in asset turnover instead.",
      "sample_and_timing": "38,716 firm-years from 1984-2002; future returns begin four months after fiscal year-end.",
      "breakpoints": "Annual decile ranks in future-return regressions.",
      "weighting": "N/A; regression evidence rather than a standalone PM portfolio.",
      "rebalancing_frequency": "annual",
      "holding_period": "One year.",
      "paper_long_leg": "N/A",
      "paper_short_leg": "N/A",
      "confidence": "high",
      "evidence_type": "publisher_final_jstor_pdf",
      "evidence_pointer": "extracted-text/soliman-2008-publisher.txt:134-151,391-399,669-729,837-905,1577-1713",
      "reviewer_notes": "Verified against the final Accounting Review/JSTOR PDF. No simple PM hedge direction should be inferred from the DuPont regression.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "Un margin, however, competition may be less threatening to an efficient deploym It is more difficult to imitate another firm's efficient production processes b imitation often involves large and costly overhauls of current factories and 1Specifically, RNOA = Operating Income/Average Net Operating Assets, PM = Operating Inc ATO = Sales/Average Net Operating Assets.",
          "page": 3,
          "line_start": 134,
          "line_end": 151,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/soliman-2008-publisher.txt",
          "href": "../papers/soliman-2008/soliman-2008-publisher.pdf#page=3",
          "open_label": "查看 PDF 第 3 页"
        },
        {
          "text": "PM measures the firm's ability to control the costs incurred to generate sales and gives insight into the sensitivity of operating income to product price and cost structure.",
          "page": 7,
          "line_start": 391,
          "line_end": 399,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/soliman-2008-publisher.txt",
          "href": "../papers/soliman-2008/soliman-2008-publisher.pdf#page=7",
          "open_label": "查看 PDF 第 7 页"
        },
        {
          "text": "To implement this trading strategy, I explore whether investors understand the future implications of ARNOA as a function of the DuPont components using the following regression: R,+, = Po + pIARNOAt + p2APMt + p3AATOt + p4RSST Controls + p5RNOA, + p6PM, + pATO, + psFama-French Risk Factors + Et+l (6) where: R,,, = future stock returns are measured using compounded buy-hold market-adjusted returns (raw return minus the corresponding value-weighted return), inclusive of dividends and other distributions beginning four months after the end of the fiscal year t and continuing for one year.23 22 Because short-window return tests capture the updating of priors and represent new information, I onl",
          "page": 11,
          "line_start": 669,
          "line_end": 729,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/soliman-2008-publisher.txt",
          "href": "../papers/soliman-2008/soliman-2008-publisher.pdf#page=11",
          "open_label": "查看 PDF 第 11 页"
        },
        {
          "text": "In these tests, I use rank regressions where the co independent variable amount is replaced with its annual decile rank servative statistical tests; the variables are scale-free and the only a regression's functional form is that the relations are monotonic (Ima To create decile ranks, all the continuous variables are sorted annually groups numbered 0 to 9 each year and then divided by 9.",
          "page": 12,
          "line_start": 669,
          "line_end": 729,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/soliman-2008-publisher.txt",
          "href": "../papers/soliman-2008/soliman-2008-publisher.pdf#page=12",
          "open_label": "查看 PDF 第 12 页"
        },
        {
          "text": "Financial statement data are obtained from the Compustat annual database, and stock return data are obtained The Accounting Review, May 2008 This content downloaded from 144.214.9.191 on Sun, 26 Jul 2026 03:27:57 UTC All use subject to https://about.jstor.org/terms",
          "page": 13,
          "line_start": 837,
          "line_end": 905,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/soliman-2008-publisher.txt",
          "href": "../papers/soliman-2008/soliman-2008-publisher.pdf#page=13",
          "open_label": "查看 PDF 第 13 页"
        },
        {
          "text": "RNOA is decomposed into the multiplicative components of (Operating Income (Compustat item #178)/Total Sales (Compustat item #12)) and ATO (Sales/Average NOA).",
          "page": 14,
          "line_start": 837,
          "line_end": 905,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/soliman-2008-publisher.txt",
          "href": "../papers/soliman-2008/soliman-2008-publisher.pdf#page=14",
          "open_label": "查看 PDF 第 14 页"
        },
        {
          "text": "The abnormal future return on such a simple signal is surprising, but is consistent with the future forecast error tests presented below.",
          "page": 24,
          "line_start": 1577,
          "line_end": 1713,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/soliman-2008-publisher.txt",
          "href": "../papers/soliman-2008/soliman-2008-publisher.pdf#page=24",
          "open_label": "查看 PDF 第 24 页"
        },
        {
          "text": "846 TABLE 7 Time-Series Means and t-Statistics for Coefficients from Annual Cross-Sectional Regres s of Future Abnormal Returns on the Ranks of DuPont Components R,+I = Po + plARNOAt + p2APMt + p3AATOt + p4RSST Controls + p5RNOAt + p6PM + p7ATOt + p8Fama French Risk Factors + et+ Independent Variables Model 1 Model 2 Model 3 -0.061 Intercept -2.15 -0.49 -2.83 0.001 ARNOA, 0.006 0.33 0.078 AATO, -0.513 -0.557 AWC, -0.162 -0.193 NCO -3.96 -5.26 -0.041 -0.108 -1.14 -2.29 0.070 1.41 0.110 1.04 0.000 ATO, FF Risk Adjusted The sample consists of 38,716 firm-year ob annual regressions using the Fama-MacBeth StdDevp follows: i where regressions R,t1(Future Abnormal Returns) = compoun distributions l",
          "page": 25,
          "line_start": 1577,
          "line_end": 1713,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/soliman-2008-publisher.txt",
          "href": "../papers/soliman-2008/soliman-2008-publisher.pdf#page=25",
          "open_label": "查看 PDF 第 25 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "soliman-2008",
        "title": "The Use of DuPont Analysis by Market Participants",
        "authors": "Mark T. Soliman",
        "year": "2008",
        "venue": "The Accounting Review",
        "doi": "10.2308/accr.2008.83.3.823",
        "source_url": "https://onlinelibrary.wiley.com/doi/abs/10.2308/accr.2008.83.3.823",
        "local_file": "papers/soliman-2008/soliman-2008-publisher.pdf",
        "local_href": "../papers/soliman-2008/soliman-2008-publisher.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 32,
        "access_status": "full_text_pdf_publisher"
      },
      "method_variants": [
        {
          "id": "soliman-2008",
          "source_id": "soliman-2008",
          "role": "original_paper",
          "source_label": "The Use of DuPont Analysis by Market Participants",
          "source_year": "2008",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{PM}_{i,t}=\\frac{\\mathrm{OperatingIncome}_{i,t}}{\\mathrm{SALE}_{i,t}}\\)",
          "data_fields": "PM = operating income divided by total sales",
          "calculation_window": {
            "zh": "38,716 firm-years from 1984-2002; future returns begin four months after fiscal year-end.",
            "en": "38,716 firm-years from 1984-2002; future returns begin four months after fiscal year-end."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Annual decile ranks in future-return regressions. N/A; regression evidence rather than a standalone PM portfolio. annual One year.",
            "en": "Annual decile ranks in future-return regressions. N/A; regression evidence rather than a standalone PM portfolio. annual One year."
          },
          "direction": "not-simple",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/soliman-2008/soliman-2008-publisher.pdf",
          "source_page": 3,
          "source_href": "../papers/soliman-2008/soliman-2008-publisher.pdf#page=3"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{PM}_{i,t}=\\frac{\\mathrm{OIADP}_{i,t}}{\\mathrm{SALE}_{i,t}}\\)",
        "formula_direction": "+1",
        "data_fields": "Compustat: OIADP, SALE",
        "calculation_window": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "accounting_lag": {
          "zh": "年频与季频结果均在 CIZ 中对齐；最终比较 datadate，取较新的可用值。",
          "en": "CIZ aligns both annual and quarterly results, then selects the newer available value by datadate."
        },
        "source_label": "EquityChars CIZ · accounting.py · L602, L1763",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L602",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "602,1763",
        "code_frequency": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "reconcile_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/impute_rank_output.py#L85",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写。年频与季频同时可用时，最终输出按 datadate 选择较新的非空值。",
          "en": "Formula transcribed from chars_ciz. When annual and quarterly values both exist, final output selects the newer non-null value by datadate."
        }
      },
      "method_design": {
        "family": "cross_sectional_return_regression",
        "summary": {
          "zh": "将利润率作为DuPont分解项和控制变量，置于同期及未来收益回归；论文主要的未来收益结果来自资产周转率变动。",
          "en": "The published article uses profit margin as a DuPont component and control in contemporaneous and future-return regressions. It does not define a standalone profit-margin long/short portfolio, and the paper's principal future-return finding concerns change in asset turnover instead."
        },
        "signal_role": {
          "zh": "解释变量与控制变量",
          "en": "Explanatory and control variable"
        },
        "estimand": {
          "zh": "同期及未来市场调整收益",
          "en": "Contemporaneous and future market-adjusted returns"
        },
        "interpretation": {
          "zh": "识别对象是条件回归系数，论文没有定义独立的利润率两端组合。",
          "en": ""
        }
      }
    },
    {
      "id": "pscore",
      "name": "Performance Score",
      "signal_definition": "Performance Score",
      "sort_variable": "pscore",
      "code_direction": "H-L",
      "paper_direction": "H-L",
      "direction_label": "高值做多 · 低值做空",
      "agreement": "yes",
      "status": "paper_direction_verified",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Piotroski (2000). Formula table direction: +1.",
      "raw_signal": "F-SCORE = sum of nine binary financial statement signals",
      "construction_summary": "F-SCORE sums nine good/bad binary signals: ROA, change in ROA, CFO, accrual, change in margin, change in turnover, change in leverage, change in liquidity, and no equity issuance; the main table classifies low F-SCORE as 0 or 1 and high F-SCORE as 8 or 9, while the calendar-year hedge uses strong F-SCORE >= 5 versus weak F-SCORE < 5.",
      "sample_and_timing": "High book-to-market firms only; 14,043 high-BM firm-years over 21 years; returns start at the beginning of the fifth month after fiscal year-end.",
      "breakpoints": "Highest BM quintile first; main F-SCORE extremes use 0-1 versus 8-9; calendar-year hedge uses >=5 versus <5.",
      "weighting": "Mean buy-and-hold firm returns / equal-weighted portfolio comparison; market-adjusted returns subtract the value-weighted market index buy-and-hold return.",
      "rebalancing_frequency": "Annual.",
      "holding_period": "12 months for main one-year returns; two-year returns also reported.",
      "paper_long_leg": "high or strong F-SCORE firms",
      "paper_short_leg": "low or weak F-SCORE firms",
      "confidence": "high",
      "evidence_type": "full_text",
      "evidence_pointer": "extracted-text/piotroski-2000.txt:390-399,423-458,466-534,572-588,638-647,684-704,1025-1031,1790-1797",
      "reviewer_notes": "The original text contains two thresholds: 0/1 versus 8/9 for main extreme portfolios, and >=5 versus <5 for the calendar-year hedge.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "I chose nine fundamental signals to measure three areas of the firm's financial condition: profitability, financial leverage/liquidity, and oper- ating efficiency.2 The signals used are easy to interpret, easy to imple- ment, and have broad appeal as summary performance statistics.",
          "page": 8,
          "line_start": 390,
          "line_end": 399,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/piotroski-2000.txt",
          "href": "../papers/piotroski-2000/piotroski-2000.pdf#page=8",
          "open_label": "查看 PDF 第 8 页"
        },
        {
          "text": "If the firm's ROA (CFO) is positive, I define the indicator variable FJROA (FTCFO) equal to one, 2 The signals used in this study were identified through professional and academic a cles.",
          "page": 8,
          "line_start": 423,
          "line_end": 458,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/piotroski-2000.txt",
          "href": "../papers/piotroski-2000/piotroski-2000.pdf#page=8",
          "open_label": "查看 PDF 第 8 页"
        },
        {
          "text": "This relationship may be particularly important among value firms, where the incentive to man- age earnings through positive accruals (e.g., to prevent covenant viola- tions) is strong (e.g., Sweeney [1994]).",
          "page": 9,
          "line_start": 423,
          "line_end": 458,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/piotroski-2000.txt",
          "href": "../papers/piotroski-2000/piotroski-2000.pdf#page=9",
          "open_label": "查看 PDF 第 9 页"
        },
        {
          "text": "I define the indicator variable FTALEVER as equal to one (zero) if the firm's leverage ratio fell (rose) in the year preceding portfolio formation.",
          "page": 9,
          "line_start": 466,
          "line_end": 534,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/piotroski-2000.txt",
          "href": "../papers/piotroski-2000/piotroski-2000.pdf#page=9",
          "open_label": "查看 PDF 第 9 页"
        },
        {
          "text": "The indicator variable F-ALIQUID equals one if the firm's liquid- ity improved, zero otherwise.5 I define the indicator variable EQOFFER as equal to one if the firm did not issue common equity in the year preceding portfolio formation, zero otherwise.",
          "page": 10,
          "line_start": 466,
          "line_end": 534,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/piotroski-2000.txt",
          "href": "../papers/piotroski-2000/piotroski-2000.pdf#page=10",
          "open_label": "查看 PDF 第 10 页"
        },
        {
          "text": "Given the nine underlying signals, F-SCORE can range from a low of 0 to a high of 9, where a low (high) FJSCORE represents a firm with very few (mostly) good signals.",
          "page": 11,
          "line_start": 572,
          "line_end": 588,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/piotroski-2000.txt",
          "href": "../papers/piotroski-2000/piotroski-2000.pdf#page=11",
          "open_label": "查看 PDF 第 11 页"
        },
        {
          "text": "market value of equity and BM ratio at fiscal year-end.7 Each fiscal year (i.e., financial report year), I rank all firms with sufficient data to iden- tify book-to-market quintile and size tercile cutoffs.",
          "page": 12,
          "line_start": 638,
          "line_end": 647,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/piotroski-2000.txt",
          "href": "../papers/piotroski-2000/piotroski-2000.pdf#page=12",
          "open_label": "查看 PDF 第 12 页"
        },
        {
          "text": "I define market- adjusted returns as the buy-and-hold return less the value-weighted mar- ket return over the corresponding time period.",
          "page": 13,
          "line_start": 684,
          "line_end": 704,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/piotroski-2000.txt",
          "href": "../papers/piotroski-2000/piotroski-2000.pdf#page=13",
          "open_label": "查看 PDF 第 13 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "piotroski-2000",
        "title": "Value Investing: The Use of Historical Financial Statement Information to Separate Winners from Losers",
        "authors": "Joseph D. Piotroski",
        "year": "2000",
        "venue": "Journal of Accounting Research",
        "doi": "10.2307/2672906",
        "source_url": "https://www.jstor.org/stable/2672906",
        "local_file": "papers/piotroski-2000/piotroski-2000.pdf",
        "local_href": "../papers/piotroski-2000/piotroski-2000.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 42,
        "access_status": "full_text_pdf_verified"
      },
      "method_variants": [
        {
          "id": "piotroski-2000",
          "source_id": "piotroski-2000",
          "role": "original_paper",
          "source_label": "Value Investing: The Use of Historical Financial Statement Information to Separate Winners from Losers",
          "source_year": "2000",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{FScore}_{i,t}=\\mathbf{1}_{ROA}+\\mathbf{1}_{\\Delta ROA}+\\mathbf{1}_{CFO}+\\mathbf{1}_{Accrual}+\\mathbf{1}_{\\Delta Margin}+\\mathbf{1}_{\\Delta Turnover}+\\mathbf{1}_{\\Delta Leverage}+\\mathbf{1}_{\\Delta Liquidity}+\\mathbf{1}_{NoIssue}\\)",
          "data_fields": "F-SCORE = sum of nine binary financial statement signals",
          "calculation_window": {
            "zh": "High book-to-market firms only; 14,043 high-BM firm-years over 21 years; returns start at the beginning of the fifth month after fiscal year-end.",
            "en": "High book-to-market firms only; 14,043 high-BM firm-years over 21 years; returns start at the beginning of the fifth month after fiscal year-end."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Highest BM quintile first; main F-SCORE extremes use 0-1 versus 8-9; calendar-year hedge uses >=5 versus <5. Mean buy-and-hold firm returns / equal-weighted portfolio comparison; market-adjusted returns subtract the value-weighted market index buy-and-hold return. Annual. 12 months for main one-year returns; two-year returns also reported.",
            "en": "Highest BM quintile first; main F-SCORE extremes use 0-1 versus 8-9; calendar-year hedge uses >=5 versus <5. Mean buy-and-hold firm returns / equal-weighted portfolio comparison; market-adjusted returns subtract the value-weighted market index buy-and-hold return. Annual. 12 months for main one-year returns; two-year returns also reported."
          },
          "direction": "H-L",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/piotroski-2000/piotroski-2000.pdf",
          "source_page": 8,
          "source_href": "../papers/piotroski-2000/piotroski-2000.pdf#page=8"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{PSCORE}_{i,t}=\\sum_{j=1}^{9}p_{j,i,t},\\qquad p_{j,i,t}\\in\\{0,1\\}\\)",
        "formula_direction": "+1",
        "data_fields": "Derived/intermediate variables; raw fields not stated",
        "calculation_window": {
          "zh": "季频。",
          "en": "Quarterly."
        },
        "accounting_lag": {
          "zh": "按 chars_ciz 的季度或事件日期对齐；未另行添加页面假设。",
          "en": "Aligned by the chars_ciz quarterly or event-date rule; the page adds no extra assumption."
        },
        "source_label": "EquityChars CIZ · accounting.py · L2057",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L2057",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "2057",
        "code_frequency": {
          "zh": "季频。",
          "en": "Quarterly."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      }
    },
    {
      "id": "quick",
      "name": "Quick ratio",
      "signal_definition": "Quick ratio",
      "sort_variable": "quick",
      "code_direction": "H-L",
      "paper_direction": "not-simple",
      "direction_label": "非简单多空",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Ou and Penman (1989). Formula table has no entry for this signal.",
      "raw_signal": "Quick ratio",
      "construction_summary": "The paper treats quick ratio as one accounting descriptor among a large candidate set and combines selected descriptors through a stepwise logit into composite Pr. It does not form a univariate quick-ratio portfolio.",
      "sample_and_timing": "Descriptors are estimated on 1965-1972 or 1973-1977 data; annual positions are formed for 1973-1983 three months after fiscal year-end.",
      "breakpoints": "The published portfolio cutoffs apply to composite Pr (>0.6 versus <=0.4), not to quick ratio.",
      "weighting": "Mean monthly returns on each composite position; the reported hedge is the zero-investment difference between the two sides.",
      "rebalancing_frequency": "Annual overlapping formation with monthly portfolio rebalancing in the cumulative-return calculation.",
      "holding_period": "24 months.",
      "paper_long_leg": "Composite portfolio only: Pr > 0.6; no univariate quick-ratio long leg.",
      "paper_short_leg": "Composite portfolio only: Pr <= 0.4; no univariate quick-ratio short leg.",
      "confidence": "high",
      "evidence_type": "author_institution_full_text",
      "evidence_pointer": "extracted-text/ou-1989.txt:396-470 (Table 2),535-617 (Table 3),665-685 (preset strategy),860-890 (Table 6 notes); papers/ou-1989/ou-1989.pdf",
      "reviewer_notes": "The source's H-L rule is for composite Pr, not this input descriptor.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "We then drop all variables for which coefficient estimates in this multivariate estimation are not significant at the 0.10 level, leaving 19 variables for the 1965-1972 period and 18 for the 1973-1977 6The first period is longer than the second because of the need to calculate an earnings drift term over four years preceding the relevant earnings prediction year and because the 1984 COMPUSTAT files used have data only from 1965 onwards.",
          "page": 9,
          "line_start": 396,
          "line_end": 470,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/ou-1989.txt",
          "href": "../papers/ou-1989/ou-1989.pdf#page=9",
          "open_label": "查看 PDF 第 9 页"
        },
        {
          "text": "1965-1972 estimation Accounting descriptor a Current ratio %A in 1 Quick ratio %A in 3 Days sales in accs. receivable 15632 %A in 5 Inventory turnover %Zl in 7 Inventory/total assets %A in 9 %A in inventory %A in sales %A in depreciation A in dividend per share Depreciation/plant assets %zi in 15 Return on opening equity A in 17 %A in (capital expenditure/ 13378 19, one-year lag Debt-equity ratio %A in 21 LT debt to equity %A in 23 Equity to fixed assets %A in 25 Times interest earned %A in 27 Sales/total assets %A in 29 Return on total assets Return on closing equity Gross margin ratio %A in 33",
          "page": 10,
          "line_start": 396,
          "line_end": 470,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/ou-1989.txt",
          "href": "../papers/ou-1989/ou-1989.pdf#page=10",
          "open_label": "查看 PDF 第 10 页"
        },
        {
          "text": "Op. profit (before dep.) to sales %A in 35 Pretax income to sales %A in 37 Net profit margin %A in 39 Sales to total cash Sales to accs. receivable Sales to inventory %A in 43 Sales to working capital %A in 45 Sales to fixed assets %A in production %A in R & D %A in ( R & D / s a l e s ) %A in advertising expense %A in (advertising/sales) %A in total assets Cash flow to total debt Working c a p i t a l / t o t a l assets 15604 0.0850 1.16 0.282",
          "page": 11,
          "line_start": 396,
          "line_end": 470,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/ou-1989.txt",
          "href": "../papers/ou-1989/ou-1989.pdf#page=11",
          "open_label": "查看 PDF 第 11 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "ou-1989",
        "title": "Financial statement analysis and the prediction of stock returns",
        "authors": "Jane A. Ou and Stephen H. Penman",
        "year": "1989",
        "venue": "Journal of Accounting and Economics",
        "doi": "10.1016/0165-4101(89)90017-7",
        "source_url": "https://doi.org/10.1016/0165-4101(89)90017-7",
        "local_file": "papers/ou-1989/ou-1989.pdf",
        "local_href": "../papers/ou-1989/ou-1989.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 35,
        "access_status": "full_text_pdf_author_institution"
      },
      "method_variants": [
        {
          "id": "ou-1989",
          "source_id": "ou-1989",
          "role": "original_paper",
          "source_label": "Financial statement analysis and the prediction of stock returns",
          "source_year": "1989",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{QuickRatio}_{i,t}=\\frac{\\mathrm{ACT}_{i,t}-\\mathrm{INVT}_{i,t}}{\\mathrm{LCT}_{i,t}}\\)",
          "data_fields": "Quick ratio",
          "calculation_window": {
            "zh": "Descriptors are estimated on 1965-1972 or 1973-1977 data; annual positions are formed for 1973-1983 three months after fiscal year-end.",
            "en": "Descriptors are estimated on 1965-1972 or 1973-1977 data; annual positions are formed for 1973-1983 three months after fiscal year-end."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "The published portfolio cutoffs apply to composite Pr (>0.6 versus <=0.4), not to quick ratio. Mean monthly returns on each composite position; the reported hedge is the zero-investment difference between the two sides. Annual overlapping formation with monthly portfolio rebalancing in the cumulative-return calculation. 24 months.",
            "en": "The published portfolio cutoffs apply to composite Pr (>0.6 versus <=0.4), not to quick ratio. Mean monthly returns on each composite position; the reported hedge is the zero-investment difference between the two sides. Annual overlapping formation with monthly portfolio rebalancing in the cumulative-return calculation. 24 months."
          },
          "direction": "not-simple",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/ou-1989/ou-1989.pdf",
          "source_page": 9,
          "source_href": "../papers/ou-1989/ou-1989.pdf#page=9"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{QUICK}_{i,t}=\\frac{\\mathrm{ACT}_{i,t}-\\mathrm{INVT}_{i,t}}{\\mathrm{LCT}_{i,t}}\\)",
        "formula_direction": "",
        "data_fields": "Compustat: ACT, INVT, LCT",
        "calculation_window": {
          "zh": "年频。",
          "en": "Annual."
        },
        "accounting_lag": {
          "zh": "按 chars_ciz 年频 jdate 对齐；未另行添加页面假设。",
          "en": "Aligned by the chars_ciz annual jdate rule; the page adds no extra assumption."
        },
        "source_label": "EquityChars CIZ · accounting.py · L814",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L814",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "814",
        "code_frequency": {
          "zh": "年频。",
          "en": "Annual."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      },
      "method_design": {
        "family": "multivariate_prediction_model",
        "summary": {
          "zh": "速动比率作为候选会计变量进入逐步Logit模型，用于估计下一年度盈利增加的概率Pr；组合按Pr阈值形成。",
          "en": "The paper treats quick ratio as one accounting descriptor among a large candidate set and combines selected descriptors through a stepwise logit into composite Pr. It does not form a univariate quick-ratio portfolio."
        },
        "signal_role": {
          "zh": "多变量模型的候选解释变量",
          "en": "Candidate predictor in a multivariate model"
        },
        "estimand": {
          "zh": "下一年度盈利增加的预测概率Pr",
          "en": "Predicted probability Pr of a one-year-ahead earnings increase"
        },
        "interpretation": {
          "zh": "该变量仅是综合预测模型的输入；论文交易对象是预测概率Pr，而不是该变量的单变量多空组合。",
          "en": ""
        }
      }
    },
    {
      "id": "rd",
      "name": "R and D increase",
      "signal_definition": "R and D increase",
      "sort_variable": "rd",
      "code_direction": "H-L",
      "paper_direction": "not-simple",
      "direction_label": "非简单多空",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Eberhart, Maxwell, and Siddique (2004). Formula table has no entry for this signal.",
      "raw_signal": "R&D increase",
      "construction_summary": "Select firms with an unexpected R&D increase; the direct passage describes an R&D/asset-ratio increase screen plus four >=5% filters and a sample-firm versus matched-firm return test.",
      "sample_and_timing": "Post-increase abnormal returns are tracked for 60 months.",
      "breakpoints": "One sample-firm versus matched-firm screen; no quantile breakpoint table in the cited passage.",
      "weighting": "N/A",
      "rebalancing_frequency": "Event-driven.",
      "holding_period": "60 months.",
      "paper_long_leg": "Sample-firm stocks.",
      "paper_short_leg": "Matched-firm stocks.",
      "confidence": "high",
      "evidence_type": "direct_method_passage",
      "evidence_pointer": "doi:10.1111/j.1540-6261.2004.00644.x; scholar:10.1111/j.1540-6261.2004.00644.x_0015 (Methods/Table II)",
      "reviewer_notes": "The original design compares selected event firms with matched firms; it is not a characteristic-sorted high-minus-low or low-minus-high factor.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "To examine whether there are any long-term abnormal stock returns following R&D increases, we use the Fama and French (1993) three-factor model: Rpt - Rft = a + b(Rmt - Rft) + sSMBt + hHMLt + Ept, where Rpt is the average raw return for stocks in calendar month t (where a sample stock is included if month t is within the 60-month period following its R&D increase), Rft is the 1-month T-bill return, Rmt is the CRSP value-weighted market index return, SMBt is the return on a portfolio of small m stocks minus the return on a portfolio of large stocks, and HMLt is the return on a portfolio of stocks with high book-to-market ratios minus the return on a portfolio of stocks with low book-to-market",
          "page": 15,
          "line_start": null,
          "line_end": null,
          "method": "automatic_pdf_search",
          "method_label": "自动定位候选句",
          "text_path": "",
          "href": "../papers/eberhart-2004/eberhart-maxwell-siddique-2004-jstor.pdf#page=15",
          "open_label": "查看 PDF 第 15 页"
        },
        {
          "text": "Therefore, even though there is a significant difference in the PM of our sample firms and our matched firm in the 5-year period preceding the R&D increase, there is no significance difference as of the matching year (i.e., beginning of year zero).",
          "page": 9,
          "line_start": null,
          "line_end": null,
          "method": "automatic_pdf_search",
          "method_label": "自动定位候选句",
          "text_path": "",
          "href": "../papers/eberhart-2004/eberhart-maxwell-siddique-2004-jstor.pdf#page=9",
          "open_label": "查看 PDF 第 9 页"
        },
        {
          "text": "If a matched firm is no longer available in subsequent years, we use the next closest firm as of the beginning of the sample firm's R&D increase year.",
          "page": 13,
          "line_start": null,
          "line_end": null,
          "method": "automatic_pdf_search",
          "method_label": "自动定位候选句",
          "text_path": "",
          "href": "../papers/eberhart-2004/eberhart-maxwell-siddique-2004-jstor.pdf#page=13",
          "open_label": "查看 PDF 第 13 页"
        }
      ],
      "evidence_mode": "automatic",
      "paper": {
        "id": "eberhart-2004",
        "title": "An Examination of Long-Term Abnormal Stock Returns and Operating Performance Following R&D Increases",
        "authors": "Allan C. Eberhart; William F. Maxwell; Akhtar R. Siddique",
        "year": "2004",
        "venue": "The Journal of Finance, 59(2), 623-650",
        "doi": "10.1111/j.1540-6261.2004.00644.x",
        "source_url": "https://onlinelibrary.wiley.com/doi/10.1111/j.1540-6261.2004.00644.x",
        "local_file": "papers/eberhart-2004/eberhart-maxwell-siddique-2004-jstor.pdf",
        "local_href": "../papers/eberhart-2004/eberhart-maxwell-siddique-2004-jstor.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 29,
        "access_status": "full_text_pdf_jstor"
      },
      "method_variants": [
        {
          "id": "eberhart-2004",
          "source_id": "eberhart-2004",
          "role": "original_paper",
          "source_label": "An Examination of Long-Term Abnormal Stock Returns and Operating Performance Following R&D Increases",
          "source_year": "2004",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{RDIncrease}_{i,t}=\\mathbf{1}\\!\\left[g(\\mathrm{R\\&DIntensity}_{i,t})\\ge 5\\%\\right]\\)",
          "data_fields": "R&D increase",
          "calculation_window": {
            "zh": "Post-increase abnormal returns are tracked for 60 months.",
            "en": "Post-increase abnormal returns are tracked for 60 months."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "One sample-firm versus matched-firm screen; no quantile breakpoint table in the cited passage. N/A Event-driven. 60 months.",
            "en": "One sample-firm versus matched-firm screen; no quantile breakpoint table in the cited passage. N/A Event-driven. 60 months."
          },
          "direction": "not-simple",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/eberhart-2004/eberhart-maxwell-siddique-2004-jstor.pdf",
          "source_page": 15,
          "source_href": "../papers/eberhart-2004/eberhart-maxwell-siddique-2004-jstor.pdf#page=15"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{RD}^{A}_{i,t}=\\mathbf{1}\\left\\{\\frac{\\mathrm{XRD}_{i,t}/\\mathrm{AT}_{i,t}}{\\mathrm{XRD}_{i,t-1}/\\mathrm{AT}_{i,t-1}}-1>0.05\\right\\},\\quad \\mathrm{RD}^{Q}_{i,t}=\\mathbf{1}\\left\\{\\frac{\\mathrm{TTM4}(\\mathrm{XRDQ})_{i,t}/\\mathrm{ATQ}_{i,t}}{\\mathrm{TTM4}(\\mathrm{XRDQ})_{i,t-4}/\\mathrm{ATQ}_{i,t-4}}-1>0.05\\right\\}\\)",
        "formula_direction": "",
        "data_fields": "Compustat: AT, ATQ, XRD, XRDQ",
        "calculation_window": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "accounting_lag": {
          "zh": "年频与季频结果均在 CIZ 中对齐；最终比较 datadate，取较新的可用值。",
          "en": "CIZ aligns both annual and quarterly results, then selects the newer available value by datadate."
        },
        "source_label": "EquityChars CIZ · accounting.py · L664, L1607",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L664",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "664,1607",
        "code_frequency": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "reconcile_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/impute_rank_output.py#L85",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写。年频与季频同时可用时，最终输出按 datadate 选择较新的非空值。",
          "en": "Formula transcribed from chars_ciz. When annual and quarterly values both exist, final output selects the newer non-null value by datadate."
        }
      },
      "method_design": {
        "family": "event_study",
        "summary": {
          "zh": "以研发支出相对资产显著上升且满足多项增长筛选的企业为事件样本，将其形成期后收益与特征匹配企业进行比较。",
          "en": "Select firms with an unexpected R&D increase; the direct passage describes an R&D/asset-ratio increase screen plus four >=5% filters and a sample-firm versus matched-firm return test."
        },
        "signal_role": {
          "zh": "事件筛选变量",
          "en": "Event-screening variable"
        },
        "estimand": {
          "zh": "研发支出意外增加企业相对匹配企业的异常收益",
          "en": "Abnormal returns of unexpected R&D-increase firms relative to matched firms"
        },
        "interpretation": {
          "zh": "识别对象是事件样本相对匹配样本的异常收益，不是按研发强度分位数构造的两端组合。",
          "en": ""
        }
      }
    },
    {
      "id": "rd_sale",
      "name": "R and D to sales",
      "signal_definition": "R and D to sales",
      "sort_variable": "rd_sale",
      "code_direction": "H-L",
      "paper_direction": "H-L",
      "direction_label": "高值做多 · 低值做空",
      "agreement": "yes",
      "status": "paper_direction_verified",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Guo, Lev, and Shi (2006). Formula table direction: +1.",
      "raw_signal": "RD_SALES = pre-IPO annual R&D expenditures / pre-IPO annual sales",
      "construction_summary": "The published article classifies IPOs into no-R&D, low-R&D, and high-R&D groups using each issue year's median positive RD_SALES and explicitly forms a zero-investment portfolio long high-R&D IPOs and short no-R&D IPOs.",
      "sample_and_timing": "2,696 U.S. IPOs issued during 1980-1995; portfolio returns run from the 7th through the 42nd month after each IPO, over April 1981-December 1998.",
      "breakpoints": "Within each IPO year, positive-R&D firms are split below/above that year's median RD_SALES; zero-R&D firms form a separate group.",
      "weighting": "Equal-weighted calendar-month portfolio returns.",
      "rebalancing_frequency": "monthly",
      "holding_period": "Months 7-42 after the offering; constituents enter and leave with IPO age.",
      "paper_long_leg": "high-R&D IPO group",
      "paper_short_leg": "no-R&D IPO group",
      "confidence": "high",
      "evidence_type": "publisher_final_pdf_cityu",
      "evidence_pointer": "extracted-text/guo-2006-publisher.txt:252-310,369-377,474-480,1157-1192,1265-1357",
      "reviewer_notes": "Verified against the final Journal of Business Finance & Accounting/Wiley PDF. Table 8 explicitly defines the monthly rebalanced high-R&D-minus-no-R&D zero-investment portfolio; its four-factor alpha is 0.76% per month.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "The intensity of R&D is measured as the ratio of annual R&D expenditures to sales, and alternatively as R&D expenditures to the expected market value of the firm at issuance (the product of the midpoint of the offer price range proxying for expected offer price and the expected number of shares to be outstanding upon the IPO).",
          "page": 5,
          "line_start": 252,
          "line_end": 310,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/guo-2006-publisher.txt",
          "href": "../papers/guo-2006/guo-2006-publisher.pdf#page=5",
          "open_label": "查看 PDF 第 5 页"
        },
        {
          "text": "See the Terms and Conditions (https://onlinelibrary.wiley.com/terms-and-conditions) on Wiley Online Library for rules of use; OA articles are governed by the applicable Creative Commons License EXPLAINING IPO ANOMALIES BY R&D Table 1 Sample Selection Criteria Sample Selection Step Total number of firm commitment domestic IPOs issued during 1980–1995, excluding unit offers Less: financials (SIC, 6,000–7,000) and service firms (SIC, >8,100) Less: IPOs with offer price under $3 per share Less: IPOs with no required price data from SDC or CRSP to compute initial underpricing or subsequent returns Subtotal: Less: observations lacking required Compustat accounting variables Subtotal: Less: observa",
          "page": 6,
          "line_start": 252,
          "line_end": 310,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/guo-2006-publisher.txt",
          "href": "../papers/guo-2006/guo-2006-publisher.pdf#page=6",
          "open_label": "查看 PDF 第 6 页"
        },
        {
          "text": "To mitigate possible undue influence of larger numbers of positive-R&D IPOs in certain years, we use yearly medians of R&D intensity in portfolio formation so that in each sample year low- and high-R&D portfolios have comparable numbers of IPOs.",
          "page": 7,
          "line_start": 369,
          "line_end": 377,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/guo-2006-publisher.txt",
          "href": "../papers/guo-2006/guo-2006-publisher.pdf#page=7",
          "open_label": "查看 PDF 第 7 页"
        },
        {
          "text": "Each of the IPOs issued in the sample year is then classified into a low- or high-R&D portfolio depending on whether its RD_SALES is below or above the median of R&D_Sales.",
          "page": 9,
          "line_start": 474,
          "line_end": 480,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/guo-2006-publisher.txt",
          "href": "../papers/guo-2006/guo-2006-publisher.pdf#page=9",
          "open_label": "查看 PDF 第 9 页"
        },
        {
          "text": "Following recent work that examines the long-term performance of IPOs (Brav et al., 2000; and Eberhart et al., 2004), we use a four factor calendar time-series regression approach in this test: Rpt \u0002 Rf t ¼ a þ b½Rmt \u0002 Rf t \u0003 þ sSMBt þ hHMLt þ pPR12t þ \"t ; ð1Þ where Rpt is the equally-weighted return on the portfolio of IPO firms in calendar month t; Rmt is the return on the value-weighted index of NYSE, AMEX and NASDAQ stocks in month t; Rft is the beginning-of-month three-month T-bill yield in month t; SMBt is the difference between the return on small firms and the return on large firms in month t (size effect); HMLt is the difference between the return on high book-to-market stocks and ",
          "page": 21,
          "line_start": 1157,
          "line_end": 1192,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/guo-2006-publisher.txt",
          "href": "../papers/guo-2006/guo-2006-publisher.pdf#page=21",
          "open_label": "查看 PDF 第 21 页"
        },
        {
          "text": "As our result indicates, the estimated excess return from such a portfolio in a four- factor model is 76 basis points per month, suggesting that IPO firms with no R&D have significantly poorer post-IPO returns than those with high pre-IPO R&D.",
          "page": 23,
          "line_start": 1265,
          "line_end": 1357,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/guo-2006-publisher.txt",
          "href": "../papers/guo-2006/guo-2006-publisher.pdf#page=23",
          "open_label": "查看 PDF 第 23 页"
        },
        {
          "text": "Table 8 Four-Factor Time-Series Regression of Monthly Returns on Zero-Investment Portfolios of IPO Firms Classified by R&D Intensity Panel A: Portfolios Sorted by Ratio of R&D_SALES # 2006 The Authors Coefficient Estimates a Long high-R&D group; short no-R&D group (2.68) Long (high- and low-) R&D groups; short no-R&D group (2.76) Panel B: Portfolios Sorted by Ratio of R&D_EXPMV a Journal compilation # Blackwell Publishing Ltd.",
          "page": 24,
          "line_start": 1265,
          "line_end": 1357,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/guo-2006-publisher.txt",
          "href": "../papers/guo-2006/guo-2006-publisher.pdf#page=24",
          "open_label": "查看 PDF 第 24 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "guo-2006",
        "title": "Explaining the Short- and Long-Term IPO Anomalies in the US by R&D",
        "authors": "Re-Jin Guo; Baruch Lev; Charles Shi",
        "year": "2006",
        "venue": "Journal of Business Finance & Accounting, 33(3-4), 550-579",
        "doi": "10.1111/j.1468-5957.2006.00610.x",
        "source_url": "https://doi.org/10.1111/j.1468-5957.2006.00610.x",
        "local_file": "papers/guo-2006/guo-2006-publisher.pdf",
        "local_href": "../papers/guo-2006/guo-2006-publisher.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 30,
        "access_status": "full_text_pdf_publisher"
      },
      "method_variants": [
        {
          "id": "guo-2006",
          "source_id": "guo-2006",
          "role": "original_paper",
          "source_label": "Explaining the Short- and Long-Term IPO Anomalies in the US by R&D",
          "source_year": "2006",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{RD\\_SALES}_{i}=\\frac{\\mathrm{PreIPO\\ R\\&D}_{i}}{\\mathrm{PreIPO\\ Sales}_{i}}\\)",
          "data_fields": "RD_SALES = pre-IPO annual R&D expenditures / pre-IPO annual sales",
          "calculation_window": {
            "zh": "2,696 U.S. IPOs issued during 1980-1995; portfolio returns run from the 7th through the 42nd month after each IPO, over April 1981-December 1998.",
            "en": "2,696 U.S. IPOs issued during 1980-1995; portfolio returns run from the 7th through the 42nd month after each IPO, over April 1981-December 1998."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Within each IPO year, positive-R&D firms are split below/above that year's median RD_SALES; zero-R&D firms form a separate group. Equal-weighted calendar-month portfolio returns. monthly Months 7-42 after the offering; constituents enter and leave with IPO age.",
            "en": "Within each IPO year, positive-R&D firms are split below/above that year's median RD_SALES; zero-R&D firms form a separate group. Equal-weighted calendar-month portfolio returns. monthly Months 7-42 after the offering; constituents enter and leave with IPO age."
          },
          "direction": "H-L",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/guo-2006/guo-2006-publisher.pdf",
          "source_page": 5,
          "source_href": "../papers/guo-2006/guo-2006-publisher.pdf#page=5"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{RD\\_SALE}_{i,t}=\\frac{\\mathrm{XRD}_{i,t}}{\\mathrm{SALE}_{i,t}}\\)",
        "formula_direction": "+1",
        "data_fields": "Compustat: SALE, XRD",
        "calculation_window": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "accounting_lag": {
          "zh": "年频与季频结果均在 CIZ 中对齐；最终比较 datadate，取较新的可用值。",
          "en": "CIZ aligns both annual and quarterly results, then selects the newer available value by datadate."
        },
        "source_label": "EquityChars CIZ · accounting.py · L520, L1671",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L520",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "520,1671",
        "code_frequency": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "reconcile_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/impute_rank_output.py#L85",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写。年频与季频同时可用时，最终输出按 datadate 选择较新的非空值。",
          "en": "Formula transcribed from chars_ciz. When annual and quarterly values both exist, final output selects the newer non-null value by datadate."
        }
      }
    },
    {
      "id": "rdm",
      "name": "R and D Expense-to-market",
      "signal_definition": "R and D Expense-to-market",
      "sort_variable": "rdm",
      "code_direction": "H-L",
      "paper_direction": "not-simple",
      "direction_label": "非简单多空",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Chan, Lakonishok, and Sougiannis (2001). Formula table direction: +1.",
      "raw_signal": "R&D expenditures relative to market value of equity",
      "construction_summary": "R&D-to-market is treated like a valuation ratio; stocks with R&D are ranked annually into five portfolios by R&D relative to market equity, with no-R&D firms separate; the paper reports buy-and-hold and control-adjusted returns and extreme-quintile spreads, but does not define a simple long-short R&D portfolio.",
      "sample_and_timing": "Domestic NYSE/AMEX/Nasdaq primary stocks with CRSP and COMPUSTAT coverage; portfolios formed at end of April each year from 1975 to 1995 using most recently available accounting data with a four-month reporting delay.",
      "breakpoints": "Five portfolios by R&D-to-market among firms with R&D; no-R&D firms are reported separately; OCR table indicates 1 Low through 5 High.",
      "weighting": "Equally weighted annual buy-and-hold portfolio returns; excess returns use size/book-to-market matched control portfolios.",
      "rebalancing_frequency": "Annual April formation; text says portfolio composition is revised each year.",
      "holding_period": "First, second, and third postformation years and average over the three postformation years.",
      "paper_long_leg": "high R&D-to-market / quintile 5",
      "paper_short_leg": "low R&D-to-market / quintile 1",
      "confidence": "high",
      "evidence_type": "extracted_text",
      "evidence_pointer": "extracted-text/chan-2001.txt:493-501,511-514,733-748,784-812,864-876,1367-1369",
      "reviewer_notes": "Original text supports high R&D-to-market outperforming low and reports an extreme-quintile spread, but this is reported return comparison/control-adjusted testing rather than an explicit simple H-L long-short construction.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "Portfolios are formed at the end of April each year, based on the most recently available accounting information (as- suming a four-month delay between the end of a firm's fiscal year and the",
          "page": 9,
          "line_start": 493,
          "line_end": 501,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/chan-2001.txt",
          "href": "../papers/chan-2001/chan-lakonishok-sougiannis-2001-jstor.pdf#page=9",
          "open_label": "查看 PDF 第 9 页"
        },
        {
          "text": "Since we focus on valuation effects over longer horizons, we calculate equally weighted an- nual buy-and-hold returns over each of the three years following portfolio",
          "page": 10,
          "line_start": 511,
          "line_end": 514,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/chan-2001.txt",
          "href": "../papers/chan-2001/chan-lakonishok-sougiannis-2001-jstor.pdf#page=10",
          "open_label": "查看 PDF 第 10 页"
        },
        {
          "text": "Over the five years prior to portfolio formation, the average annual return of stocks ranked in the top quintile by R&D relative to market is only 9.89 percent (Panel A of Table IV).",
          "page": 14,
          "line_start": 733,
          "line_end": 748,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/chan-2001.txt",
          "href": "../papers/chan-2001/chan-lakonishok-sougiannis-2001-jstor.pdf#page=14",
          "open_label": "查看 PDF 第 14 页"
        },
        {
          "text": "TableIV toEquiyMarkeVl PanelB:ExcsRturAfoiFm PanelA:RtursBfodiFm ReturnsadChciofPlby&DExpv Averagnulxcsto-0.17345286 Thirdyeaftpolmn-0.163849 Secondyarftplim-0.23156 Firstyeafpolmn-0.174568 Averagnulto0.1576923 Thirdyeaftpolmn0.15679234 Secondyarftplim0.14658923 Firstyeafpolmn0.158279364 Averagnulto0.29465187 1(Low)2345HighNn-R&D anulgrowtheisfcpvydm,b divebythproa'sklufq);ngm.PE valueofqity;rngsmkdb( marketvluofqiynds;bj marketquiy.PnlDposchf:vgb;R&xd excsrtunbadolpfimhyzjkq(vR&D) retunoaclpfiskmhdbyz-g.PC formatin;dveghpsy.PlBc'uxqw anulby-dhoretispvfm;c NYSE,AMXandsqometicpryuwhvgCRPOUTfl.I' asignedtofvqulyzpr.SckwhR&DxTm Athendofprilacym1975,skbR&Dxuvq",
          "page": 15,
          "line_start": 784,
          "line_end": 812,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/chan-2001.txt",
          "href": "../papers/chan-2001/chan-lakonishok-sougiannis-2001-jstor.pdf#page=15",
          "open_label": "查看 PDF 第 15 页"
        },
        {
          "text": "Even after adjusting for size and book-to-market (Panels B and C), their returns are still high.17 In Panel B, over the postformation period, quintile portfolio 5 has an average excess return of 6.12 percent per year, yielding a mean spread of 7.83 percent per year between the extreme quin- tiles.18 Excess returns based on adjusted book-to-market ratios (Panel C) tell a similar story.19 One possible explanation for the excess returns on firms with high R&D to market equity draws from related evidence that the market underreacts to managers' signals (see, for example, Ikenberry et al.",
          "page": 17,
          "line_start": 864,
          "line_end": 876,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/chan-2001.txt",
          "href": "../papers/chan-2001/chan-lakonishok-sougiannis-2001-jstor.pdf#page=17",
          "open_label": "查看 PDF 第 17 页"
        },
        {
          "text": "In the text, we report returns based on a buy-and-hold strategy, where the composition of the portfolio is revised each year.",
          "page": 25,
          "line_start": 1367,
          "line_end": 1369,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/chan-2001.txt",
          "href": "../papers/chan-2001/chan-lakonishok-sougiannis-2001-jstor.pdf#page=25",
          "open_label": "查看 PDF 第 25 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "chan-2001",
        "title": "The Stock Market Valuation of Research and Development Expenditures",
        "authors": "Louis K. C. Chan; Josef Lakonishok; Theodore Sougiannis",
        "year": "2001",
        "venue": "The Journal of Finance",
        "doi": "10.1111/0022-1082.00411",
        "source_url": "https://onlinelibrary.wiley.com/doi/10.1111/0022-1082.00411",
        "local_file": "papers/chan-2001/chan-lakonishok-sougiannis-2001-jstor.pdf",
        "local_href": "../papers/chan-2001/chan-lakonishok-sougiannis-2001-jstor.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 27,
        "access_status": "full_text_pdf_jstor"
      },
      "method_variants": [
        {
          "id": "chan-2001",
          "source_id": "chan-2001",
          "role": "original_paper",
          "source_label": "The Stock Market Valuation of Research and Development Expenditures",
          "source_year": "2001",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{RDM}_{i,t}=\\frac{\\mathrm{XRD}_{i,t}}{\\mathrm{ME}_{i,t}}\\)",
          "data_fields": "R&D expenditures relative to market value of equity",
          "calculation_window": {
            "zh": "Domestic NYSE/AMEX/Nasdaq primary stocks with CRSP and COMPUSTAT coverage; portfolios formed at end of April each year from 1975 to 1995 using most recently available accounting data with a four-month reporting delay.",
            "en": "Domestic NYSE/AMEX/Nasdaq primary stocks with CRSP and COMPUSTAT coverage; portfolios formed at end of April each year from 1975 to 1995 using most recently available accounting data with a four-month reporting delay."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Five portfolios by R&D-to-market among firms with R&D; no-R&D firms are reported separately; OCR table indicates 1 Low through 5 High. Equally weighted annual buy-and-hold portfolio returns; excess returns use size/book-to-market matched control portfolios. Annual April formation; text says portfolio composition is revised each year. First, second, and third postformation years and average over the three postformation years.",
            "en": "Five portfolios by R&D-to-market among firms with R&D; no-R&D firms are reported separately; OCR table indicates 1 Low through 5 High. Equally weighted annual buy-and-hold portfolio returns; excess returns use size/book-to-market matched control portfolios. Annual April formation; text says portfolio composition is revised each year. First, second, and third postformation years and average over the three postformation years."
          },
          "direction": "not-simple",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/chan-2001/chan-lakonishok-sougiannis-2001-jstor.pdf",
          "source_page": 9,
          "source_href": "../papers/chan-2001/chan-lakonishok-sougiannis-2001-jstor.pdf#page=9"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{RDM}_{i,t}=\\frac{\\mathrm{XRD}_{i,t}}{\\mathrm{ME}_{i,t}}\\)",
        "formula_direction": "+1",
        "data_fields": "Compustat: XRD",
        "calculation_window": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "accounting_lag": {
          "zh": "年频与季频结果均在 CIZ 中对齐；最终比较 datadate，取较新的可用值。",
          "en": "CIZ aligns both annual and quarterly results, then selects the newer available value by datadate."
        },
        "source_label": "EquityChars CIZ · accounting.py · L2323, L2435",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L2323",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "2323,2435",
        "code_frequency": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "reconcile_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/impute_rank_output.py#L85",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写。年频与季频同时可用时，最终输出按 datadate 选择较新的非空值。",
          "en": "Formula transcribed from chars_ciz. When annual and quarterly values both exist, final output selects the newer non-null value by datadate."
        }
      },
      "method_design": {
        "family": "sorted_portfolio_comparison",
        "summary": {
          "zh": "每年按研发支出与市值之比形成五个组合，并将无研发企业单列；报告买入并持有收益、匹配调整收益及极端五分位差异。",
          "en": "R&D-to-market is treated like a valuation ratio; stocks with R&D are ranked annually into five portfolios by R&D relative to market equity, with no-R&D firms separate; the paper reports buy-and-hold and control-adjusted returns and extreme-quintile spreads, but does not define a simple long-short R&D portfolio."
        },
        "signal_role": {
          "zh": "组合排序变量",
          "en": "Portfolio sorting variable"
        },
        "estimand": {
          "zh": "研发强度组合的原始收益与匹配调整收益",
          "en": "Raw and matched-control returns of R&D-intensity portfolios"
        },
        "interpretation": {
          "zh": "论文报告端点收益差异，但未将研发强度定义为独立、持续再平衡的零成本组合。",
          "en": ""
        }
      }
    },
    {
      "id": "re",
      "name": "Revisions in analysts earnings forecasts",
      "signal_definition": "Revisions in analysts earnings forecasts",
      "sort_variable": "re",
      "code_direction": "H-L",
      "paper_direction": "not-simple",
      "direction_label": "非简单多空",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Chan, Jegadeesh, and Lakonishok (1996). Formula table direction: +1.",
      "raw_signal": "moving average of the last six months' revisions in mean I/B/E/S current-fiscal-year EPS estimates, scaled by beginning-of-month stock price",
      "construction_summary": "Stocks are sorted monthly into ten portfolios by REV6 analyst forecast revisions; the paper reports buy-and-hold returns and spreads for high versus low revision ranks, while the explicit zero-cost portfolio is only for a two-way prior-return plus revision classification.",
      "sample_and_timing": "Domestic NYSE/AMEX/Nasdaq primary stocks with CRSP, COMPUSTAT, and I/B/E/S forecast data where available; monthly formations from January 1977 to January 1993; returns start after skipping the first five days after formation.",
      "breakpoints": "NYSE-only decile breakpoints.",
      "weighting": "Equal-weighted stocks within each decile portfolio.",
      "rebalancing_frequency": "Monthly formation/ranking; remaining stocks rebalanced to equal weights at the end of each reported period for subsequent-period returns.",
      "holding_period": "Following six months and first, second, and third subsequent years; Table X two-way strategy uses six-month holding then reforming.",
      "paper_long_leg": "high REV6 / upward analyst forecast revisions",
      "paper_short_leg": "low REV6 / downward analyst forecast revisions",
      "confidence": "high",
      "evidence_type": "extracted_text",
      "evidence_pointer": "extracted-text/chan-1996.txt:294-308,329-345,794-817,970-986,1056-1072,1715-1756,1811-1817",
      "reviewer_notes": "Single-sort REV6 evidence gives high-minus-low spreads but not a clearly formed standalone simple H-L portfolio; the explicit zero-cost buy/sell language is for a double sort, so mark not-simple.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "To get around this, we define REV6, a six-month moving average of past changes in earnings fore- casts by analysts: REV6it = E - - t(3) j=O Pit-j-i where fit is the consensus (mean) I/B/E/S estimate in month t of firm i's earnings for the current fiscal year (FY1).",
          "page": 6,
          "line_start": 294,
          "line_end": 308,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/chan-1996.txt",
          "href": "../papers/chan-1996/chan-jegadeesh-lakonishok-1996-jstor.pdf#page=6",
          "open_label": "查看 PDF 第 6 页"
        },
        {
          "text": "At the end of the period we rebalance all the remaining stocks in the original portfolio to equal weights in order to calculate returns in subsequent periods.",
          "page": 7,
          "line_start": 329,
          "line_end": 345,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/chan-1996.txt",
          "href": "../papers/chan-1996/chan-jegadeesh-lakonishok-1996-jstor.pdf#page=7",
          "open_label": "查看 PDF 第 7 页"
        },
        {
          "text": "8 We obtain similar results when we use monthly revisions in analyst forecasts instead six-month moving average.",
          "page": 14,
          "line_start": 794,
          "line_end": 817,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/chan-1996.txt",
          "href": "../papers/chan-1996/chan-jegadeesh-lakonishok-1996-jstor.pdf#page=14",
          "open_label": "查看 PDF 第 14 页"
        },
        {
          "text": "At the beginning of every month from January 1977 to January 1993, all stocks are ranked by their moving average of the last six months' revisions in mean I/B/E/S estimates of current fiscal-year earnings per share, relative to beginning-of-month stock price, and assigned to one of ten portfo- lios.",
          "page": 17,
          "line_start": 970,
          "line_end": 986,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/chan-1996.txt",
          "href": "../papers/chan-1996/chan-jegadeesh-lakonishok-1996-jstor.pdf#page=17",
          "open_label": "查看 PDF 第 17 页"
        },
        {
          "text": "Using measures of longer-term earnings news, as given by either standardized unexpected earn- ings or revisions in consensus estimates, turns out to place earnings momen- tum on a more equal footing with price momentum.",
          "page": 18,
          "line_start": 1056,
          "line_end": 1072,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/chan-1996.txt",
          "href": "../papers/chan-1996/chan-jegadeesh-lakonishok-1996-jstor.pdf#page=18",
          "open_label": "查看 PDF 第 18 页"
        },
        {
          "text": "We track the monthly returns from a strategy of buying each portfolio and holding it for six months, when a new portfolio is formed and the process repeated.",
          "page": 28,
          "line_start": 1715,
          "line_end": 1756,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/chan-1996.txt",
          "href": "../papers/chan-1996/chan-jegadeesh-lakonishok-1996-jstor.pdf#page=28",
          "open_label": "查看 PDF 第 28 页"
        },
        {
          "text": "The classification variables are: the stock's compound return over the past six months, and a moving average of the past six months' percentage revisions relative to the beginning-of-month stock price in the mean I/B/E/S estimate of current fiscal-year earnings per share.",
          "page": 29,
          "line_start": 1715,
          "line_end": 1756,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/chan-1996.txt",
          "href": "../papers/chan-1996/chan-jegadeesh-lakonishok-1996-jstor.pdf#page=29",
          "open_label": "查看 PDF 第 29 页"
        },
        {
          "text": "Similarly, ranking stocks by a moving average of past revisions in consensus estimates of earnings produces spreads of 7.7 percent over the next six months.",
          "page": 30,
          "line_start": 1811,
          "line_end": 1817,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/chan-1996.txt",
          "href": "../papers/chan-1996/chan-jegadeesh-lakonishok-1996-jstor.pdf#page=30",
          "open_label": "查看 PDF 第 30 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "chan-1996",
        "title": "Momentum Strategies",
        "authors": "Louis K. C. Chan; Narasimhan Jegadeesh; Josef Lakonishok",
        "year": "1996",
        "venue": "The Journal of Finance",
        "doi": "10.1111/j.1540-6261.1996.tb05222.x",
        "source_url": "https://onlinelibrary.wiley.com/doi/10.1111/j.1540-6261.1996.tb05222.x",
        "local_file": "papers/chan-1996/chan-jegadeesh-lakonishok-1996-jstor.pdf",
        "local_href": "../papers/chan-1996/chan-jegadeesh-lakonishok-1996-jstor.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 34,
        "access_status": "full_text_pdf_jstor"
      },
      "method_variants": [
        {
          "id": "chan-1996",
          "source_id": "chan-1996",
          "role": "original_paper",
          "source_label": "Momentum Strategies",
          "source_year": "1996",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{RE}_{i,t}=\\frac{1}{6\\,P_{i,t-1}}\\sum_{k=1}^{6}\\Delta\\overline{\\mathrm{EPSForecast}}_{i,t-k}\\)",
          "data_fields": "moving average of the last six months' revisions in mean I/B/E/S current-fiscal-year EPS estimates, scaled by beginning-of-month stock price",
          "calculation_window": {
            "zh": "Domestic NYSE/AMEX/Nasdaq primary stocks with CRSP, COMPUSTAT, and I/B/E/S forecast data where available; monthly formations from January 1977 to January 1993; returns start after skipping the first five days after formation.",
            "en": "Domestic NYSE/AMEX/Nasdaq primary stocks with CRSP, COMPUSTAT, and I/B/E/S forecast data where available; monthly formations from January 1977 to January 1993; returns start after skipping the first five days after formation."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "NYSE-only decile breakpoints. Equal-weighted stocks within each decile portfolio. Monthly formation/ranking; remaining stocks rebalanced to equal weights at the end of each reported period for subsequent-period returns. Following six months and first, second, and third subsequent years; Table X two-way strategy uses six-month holding then reforming.",
            "en": "NYSE-only decile breakpoints. Equal-weighted stocks within each decile portfolio. Monthly formation/ranking; remaining stocks rebalanced to equal weights at the end of each reported period for subsequent-period returns. Following six months and first, second, and third subsequent years; Table X two-way strategy uses six-month holding then reforming."
          },
          "direction": "not-simple",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/chan-1996/chan-jegadeesh-lakonishok-1996-jstor.pdf",
          "source_page": 6,
          "source_href": "../papers/chan-1996/chan-jegadeesh-lakonishok-1996-jstor.pdf#page=6"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{RE}_{i,t}=\\frac{1}{n}\\sum_{k=1}^{n}\\mathrm{MONTHLY\\_REVISION}_{i,t-k}\\), where \\(n=3,4,5,6\\) for count \\(4,5,6,\\ge 7\\), respectively.",
        "formula_direction": "+1",
        "data_fields": "I/B/E/S: monthly earnings-forecast revision",
        "calculation_window": {
          "zh": "月频 I/B/E/S 修正。",
          "en": "Monthly I/B/E/S revisions."
        },
        "accounting_lag": {
          "zh": "信号在 t 月形成；最终输出将收益移至 t+1 月。",
          "en": "The signal is formed at month t; final output shifts the return to month t+1."
        },
        "source_label": "EquityChars CIZ · myre.py · L118",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/myre.py#L118",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/myre.py",
        "code_lines": "118",
        "code_frequency": {
          "zh": "月频 I/B/E/S 修正。",
          "en": "Monthly I/B/E/S revisions."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      },
      "method_design": {
        "family": "sorted_portfolio_comparison",
        "summary": {
          "zh": "每月按六个月分析师盈利预测修正形成十分位组合，组内等权并考察形成后收益；明确的零成本策略仅见于预测修正与过去收益的二维分类。",
          "en": "Stocks are sorted monthly into ten portfolios by REV6 analyst forecast revisions; the paper reports buy-and-hold returns and spreads for high versus low revision ranks, while the explicit zero-cost portfolio is only for a two-way prior-return plus revision classification."
        },
        "signal_role": {
          "zh": "组合排序变量",
          "en": "Portfolio sorting variable"
        },
        "estimand": {
          "zh": "预测修正十分位组合的形成后收益",
          "en": "Post-formation returns of forecast-revision decile portfolios"
        },
        "interpretation": {
          "zh": "单变量表报告分组收益及端点比较，但论文没有为该信号单独定义零成本组合。",
          "en": ""
        }
      }
    },
    {
      "id": "realestate",
      "name": "Real estate holdings",
      "signal_definition": "Real estate holdings",
      "sort_variable": "realestate",
      "code_direction": "H-L",
      "paper_direction": "H-L",
      "direction_label": "高值做多 · 低值做空",
      "agreement": "yes",
      "status": "paper_direction_verified",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Tuzel (2010). Formula table has no entry for this signal.",
      "raw_signal": "RER = [(buildings + capitalized leases) / PPE]firm minus the corresponding two-digit-SIC industry average",
      "construction_summary": "The published article computes an industry-adjusted real-estate ratio annually, sorts firms into RER quintiles, and reports the 5-minus-1 portfolio, long high RER and short low RER.",
      "sample_and_timing": "Non-real-estate Compustat firms with capital-composition data, matched to CRSP returns from July 1971-June 2005; fiscal-year t-1 accounting data are matched to July t-June t+1 returns with at least a six-month lag.",
      "breakpoints": "Annual quintiles on industry-adjusted RER.",
      "weighting": "Value-weighted and equal-weighted monthly returns are reported; the significant main 5-1 results use value weighting.",
      "rebalancing_frequency": "Annual.",
      "holding_period": "12 months, July through June after formation.",
      "paper_long_leg": "highest RER quintile (5)",
      "paper_short_leg": "lowest RER quintile (1)",
      "confidence": "high",
      "evidence_type": "publisher_full_text",
      "evidence_pointer": "extracted-text/tuzel-2010-publisher.txt:50-53,603-610,613-817",
      "reviewer_notes": "Verified against the formal Review of Financial Studies publisher full text; RER definition, annual timing, quintiles, weighting, and high-minus-low direction are explicit.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "Whenfirms are sorted on the share of buildings and capital leases in their total physical capital(property, plant, and equipment [PPE]), the firms in the first quintile have an average shareof buildings and capital leases that is 22% lower than the average firm in that industry.Firms in the fifth quintile have 25% more buildings and capital leases than the averagefirm.",
          "page": 1,
          "line_start": 50,
          "line_end": 53,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/tuzel-2010-publisher.txt",
          "href": "../papers/tuzel-2010/tuzel-2010-publisher-fulltext.html#:~:text=Whenfirms%20are%20sorted%20on%20the%20share%20of%20buildings%20and%20capital%20leases%20in%20their%20total%20physical%20capital%28property%2C%20plant%2C%20and%20equipment%20%5BPPE%5D%29%2C%20the%20firms%20in%20the%20first%20quintile%20have%20an%20ave",
          "open_label": "在本地 HTML 中定位"
        },
        {
          "text": "Throughout the rest of the article, the“real estate ratio” refers to the “industry-adjusted real estate ratio,” and it is denoted |$byRER$|⁠.16 My sample consists of all non–real estate firms with data on buildings andcapitalized leases from the Compustat Industrial Annual (1969–2003) and stockreturn data from the Center for Research in Security Prices (CRSP) (July 1971–June2005).17 Firms that do not have data on assets or net and gross PPE areexcluded from the sample.",
          "page": 1,
          "line_start": 603,
          "line_end": 610,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/tuzel-2010-publisher.txt",
          "href": "../papers/tuzel-2010/tuzel-2010-publisher-fulltext.html#:~:text=Throughout%20the%20rest%20of%20the%20article%2C%20the%E2%80%9Creal%20estate%20ratio%E2%80%9D%20refers%20to%20the%20%E2%80%9Cindustry-adjusted%20real%20estate%20ratio%2C%E2%80%9D%20and%20it%20is%20denoted%20%7C%24byRER%24%7C%E2%81%A0.16%20My%20sample%20consists%20of%20all%20non%E2%80%93real%20e",
          "open_label": "在本地 HTML 中定位"
        },
        {
          "text": "For RER,equal-weighted averages are first taken over all firms in that portfolio, then over years.RERis defined as [(buil.+cap. leases) |$/PPE] _{firm} - $| [(buil. + cap. leases) |$/PPE] _{industry}.N$|is the average number of firms in each portfolio. |$r^{e}_{VW}$|is the value-weighted monthly average excess returns (excess of risk-free rate),|$r^{e}_{EW}$|is the equal-weighted monthly average excess returns, annualized; averages are taken over |$time(%)$|⁠.|$r^{IA}_{VW}$|is the value-weighted monthly average industry-adjusted returns (in excess of industry returns,where industry returns are calculated by value weighting the firms in that industry),|$r^{IA}_{EW}$|is the equal-weighted mont",
          "page": 1,
          "line_start": 613,
          "line_end": 817,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/tuzel-2010-publisher.txt",
          "href": "../papers/tuzel-2010/tuzel-2010-publisher-fulltext.html#:~:text=For%20RER%2Cequal-weighted%20averages%20are%20first%20taken%20over%20all%20firms%20in%20that%20portfolio%2C%20then%20over%20years.RERis%20defined%20as%20%5B%28buil.%2Bcap.%20leases%29%20%7C%24%2FPPE%5D%20_%7Bfirm%7D%20-%20%24%7C%20%5B%28buil.%20%2B%20cap.%20leases%29%20",
          "open_label": "在本地 HTML 中定位"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "tuzel-2010",
        "title": "Corporate Real Estate Holdings and the Cross-Section of Stock Returns",
        "authors": "Selale Tuzel",
        "year": "2010",
        "venue": "The Review of Financial Studies",
        "doi": "10.1093/rfs/hhq006",
        "source_url": "https://doi.org/10.1093/rfs/hhq006",
        "local_file": "papers/tuzel-2010/tuzel-2010-publisher-fulltext.html",
        "local_href": "../papers/tuzel-2010/tuzel-2010-publisher-fulltext.html",
        "artifact_type": "html",
        "pdf_pages": null,
        "access_status": "full_text_html_publisher_verified"
      },
      "method_variants": [
        {
          "id": "tuzel-2010",
          "source_id": "tuzel-2010",
          "role": "original_paper",
          "source_label": "Corporate Real Estate Holdings and the Cross-Section of Stock Returns",
          "source_year": "2010",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{RER}_{i,t}=\\frac{\\mathrm{Buildings}_{i,t}+\\mathrm{CapitalizedLeases}_{i,t}}{\\mathrm{PPE}_{i,t}}-\\overline{\\left(\\frac{\\mathrm{Buildings}+\\mathrm{CapitalizedLeases}}{\\mathrm{PPE}}\\right)}_{\\,\\mathrm{SIC2}(i),t}\\)",
          "data_fields": "RER = [(buildings + capitalized leases) / PPE]firm minus the corresponding two-digit-SIC industry average",
          "calculation_window": {
            "zh": "Non-real-estate Compustat firms with capital-composition data, matched to CRSP returns from July 1971-June 2005; fiscal-year t-1 accounting data are matched to July t-June t+1 returns with at least a six-month lag.",
            "en": "Non-real-estate Compustat firms with capital-composition data, matched to CRSP returns from July 1971-June 2005; fiscal-year t-1 accounting data are matched to July t-June t+1 returns with at least a six-month lag."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Annual quintiles on industry-adjusted RER. Value-weighted and equal-weighted monthly returns are reported; the significant main 5-1 results use value weighting. Annual. 12 months, July through June after formation.",
            "en": "Annual quintiles on industry-adjusted RER. Value-weighted and equal-weighted monthly returns are reported; the significant main 5-1 results use value weighting. Annual. 12 months, July through June after formation."
          },
          "direction": "H-L",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/tuzel-2010/tuzel-2010-publisher-fulltext.html",
          "source_page": 1,
          "source_href": "../papers/tuzel-2010/tuzel-2010-publisher-fulltext.html#:~:text=Whenfirms%20are%20sorted%20on%20the%20share%20of%20buildings%20and%20capital%20leases%20in%20their%20total%20physical%20capital%28property%2C%20plant%2C%20and%20equipment%20%5BPPE%5D%29%2C%20the%20firms%20in%20the%20first%20quintile%20have%20an%20ave"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{REALESTATE}_{i,t}=\\frac{\\mathrm{FATB}_{i,t}+\\mathrm{FATL}_{i,t}}{\\operatorname{coalesce}(\\mathrm{PPEGT}_{i,t},\\mathrm{PPENT}_{i,t})}\\)",
        "formula_direction": "",
        "data_fields": "Compustat: FATB, FATL, PPEGT, PPENT",
        "calculation_window": {
          "zh": "年频。",
          "en": "Annual."
        },
        "accounting_lag": {
          "zh": "按 chars_ciz 年频 jdate 对齐；未另行添加页面假设。",
          "en": "Aligned by the chars_ciz annual jdate rule; the page adds no extra assumption."
        },
        "source_label": "EquityChars CIZ · accounting.py · L848, L855",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L848",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "848,855",
        "code_frequency": {
          "zh": "年频。",
          "en": "Annual."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      }
    },
    {
      "id": "rna",
      "name": "Quarterly Return on Net Operating Assets, Quarterly Asset Turnover",
      "signal_definition": "Quarterly Return on Net Operating Assets, Quarterly Asset Turnover",
      "sort_variable": "rna",
      "code_direction": "H-L",
      "paper_direction": "not-simple",
      "direction_label": "非简单多空",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Soliman (2008). Formula table direction: +1.",
      "raw_signal": "repository label is quarterly return on net operating assets / quarterly asset turnover; paper variable is annual RNOA = PM × ATO",
      "construction_summary": "The published article studies annual return on net operating assets and its annual DuPont components. It does not define the repository's quarterly hybrid signal or a matching simple long/short portfolio.",
      "sample_and_timing": "38,716 annual firm-years from 1984-2002.",
      "breakpoints": "N/A; annual regression variables do not match the quarterly repository characteristic.",
      "weighting": "N/A",
      "rebalancing_frequency": "annual in the paper; quarterly in the repository label",
      "holding_period": "N/A",
      "paper_long_leg": "N/A",
      "paper_short_leg": "N/A",
      "confidence": "high",
      "evidence_type": "publisher_final_jstor_pdf",
      "evidence_pointer": "extracted-text/soliman-2008-publisher.txt:134-151,391-399,669-729,837-905",
      "reviewer_notes": "Verified against the final Accounting Review/JSTOR PDF. This is a frequency/definition mismatch: the paper's annual RNOA and ATO do not establish a quarterly rna strategy.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "on net operating assets (RNOA) into profit margin (PM) and asset turnover ( RNOA = PM x ATO.' PM and ATO are accounting signals that measure differen about a firm's operations.",
          "page": 3,
          "line_start": 134,
          "line_end": 151,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/soliman-2008-publisher.txt",
          "href": "../papers/soliman-2008/soliman-2008-publisher.pdf#page=3",
          "open_label": "查看 PDF 第 3 页"
        },
        {
          "text": "be multiplicatively decomposed into PM and ATO as follows: RNOA = PM x ATO where PM = Operating Income/Sales and ATO = Sales/Net Operating Assets.",
          "page": 7,
          "line_start": 391,
          "line_end": 399,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/soliman-2008-publisher.txt",
          "href": "../papers/soliman-2008/soliman-2008-publisher.pdf#page=7",
          "open_label": "查看 PDF 第 7 页"
        },
        {
          "text": "To implement this trading strategy, I explore whether investors understand the future implications of ARNOA as a function of the DuPont components using the following regression: R,+, = Po + pIARNOAt + p2APMt + p3AATOt + p4RSST Controls + p5RNOA, + p6PM, + pATO, + psFama-French Risk Factors + Et+l (6) where: R,,, = future stock returns are measured using compounded buy-hold market-adjusted returns (raw return minus the corresponding value-weighted return), inclusive of dividends and other distributions beginning four months after the end of the fiscal year t and continuing for one year.23 22 Because short-window return tests capture the updating of priors and represent new information, I onl",
          "page": 11,
          "line_start": 669,
          "line_end": 729,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/soliman-2008-publisher.txt",
          "href": "../papers/soliman-2008/soliman-2008-publisher.pdf#page=11",
          "open_label": "查看 PDF 第 11 页"
        },
        {
          "text": "In these tests, I use rank regressions where the co independent variable amount is replaced with its annual decile rank servative statistical tests; the variables are scale-free and the only a regression's functional form is that the relations are monotonic (Ima To create decile ranks, all the continuous variables are sorted annually groups numbered 0 to 9 each year and then divided by 9.",
          "page": 12,
          "line_start": 669,
          "line_end": 729,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/soliman-2008-publisher.txt",
          "href": "../papers/soliman-2008/soliman-2008-publisher.pdf#page=12",
          "open_label": "查看 PDF 第 12 页"
        },
        {
          "text": "Financial statement data are obtained from the Compustat annual database, and stock return data are obtained The Accounting Review, May 2008 This content downloaded from 144.214.9.191 on Sun, 26 Jul 2026 03:27:57 UTC All use subject to https://about.jstor.org/terms",
          "page": 13,
          "line_start": 837,
          "line_end": 905,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/soliman-2008-publisher.txt",
          "href": "../papers/soliman-2008/soliman-2008-publisher.pdf#page=13",
          "open_label": "查看 PDF 第 13 页"
        },
        {
          "text": "Thus, all t on the same sample.26 Variable Measurement DuPont Decomposition RNOA is operating income before interest (Compustat item #178) divided by averag net operating assets (NOA), where NOA is Operating Assets, - Operating Liabilitiest.",
          "page": 14,
          "line_start": 837,
          "line_end": 905,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/soliman-2008-publisher.txt",
          "href": "../papers/soliman-2008/soliman-2008-publisher.pdf#page=14",
          "open_label": "查看 PDF 第 14 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "soliman-2008",
        "title": "The Use of DuPont Analysis by Market Participants",
        "authors": "Mark T. Soliman",
        "year": "2008",
        "venue": "The Accounting Review",
        "doi": "10.2308/accr.2008.83.3.823",
        "source_url": "https://onlinelibrary.wiley.com/doi/abs/10.2308/accr.2008.83.3.823",
        "local_file": "papers/soliman-2008/soliman-2008-publisher.pdf",
        "local_href": "../papers/soliman-2008/soliman-2008-publisher.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 32,
        "access_status": "full_text_pdf_publisher"
      },
      "method_variants": [
        {
          "id": "soliman-2008",
          "source_id": "soliman-2008",
          "role": "original_paper",
          "source_label": "The Use of DuPont Analysis by Market Participants",
          "source_year": "2008",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{RNOA}_{i,t}=\\mathrm{PM}_{i,t}\\times\\mathrm{ATO}_{i,t}\\)",
          "data_fields": "repository label is quarterly return on net operating assets / quarterly asset turnover; paper variable is annual RNOA = PM × ATO",
          "calculation_window": {
            "zh": "38,716 annual firm-years from 1984-2002.",
            "en": "38,716 annual firm-years from 1984-2002."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "N/A; annual regression variables do not match the quarterly repository characteristic. N/A annual in the paper; quarterly in the repository label N/A",
            "en": "N/A; annual regression variables do not match the quarterly repository characteristic. N/A annual in the paper; quarterly in the repository label N/A"
          },
          "direction": "not-simple",
          "formula_match": "closest_paper_measure",
          "notes": {
            "zh": "论文只给出最接近口径，与项目指标不完全相同。",
            "en": "The paper provides the closest available measure; it is not identical to the project signal."
          },
          "source_path": "papers/soliman-2008/soliman-2008-publisher.pdf",
          "source_page": 3,
          "source_href": "../papers/soliman-2008/soliman-2008-publisher.pdf#page=3"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{RNA}_{i,t}=\\frac{\\mathrm{OIADP}_{i,t}}{\\mathrm{NOA}^{raw}_{i,t-1}}\\)",
        "formula_direction": "+1",
        "data_fields": "Compustat: OIADP",
        "calculation_window": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "accounting_lag": {
          "zh": "年频与季频结果均在 CIZ 中对齐；最终比较 datadate，取较新的可用值。",
          "en": "CIZ aligns both annual and quarterly results, then selects the newer available value by datadate."
        },
        "source_label": "EquityChars CIZ · accounting.py · L597, L1758",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L597",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "597,1758",
        "code_frequency": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "reconcile_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/impute_rank_output.py#L85",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写。年频与季频同时可用时，最终输出按 datadate 选择较新的非空值。",
          "en": "Formula transcribed from chars_ciz. When annual and quarterly values both exist, final output selects the newer non-null value by datadate."
        }
      },
      "method_design": {
        "family": "cross_sectional_return_regression",
        "summary": {
          "zh": "论文检验年度净经营资产回报率及其DuPont分解项，并将其用于年度收益回归；项目特征是季度口径的混合度量。",
          "en": "The published article studies annual return on net operating assets and its annual DuPont components. It does not define the repository's quarterly hybrid signal or a matching simple long/short portfolio."
        },
        "signal_role": {
          "zh": "最接近的年度文献变量",
          "en": "Closest annual source-paper measure"
        },
        "estimand": {
          "zh": "年度未来股票收益",
          "en": "Annual future stock return"
        },
        "interpretation": {
          "zh": "文献度量的频率与定义均不匹配项目特征，且没有相应的独立多空组合。",
          "en": ""
        }
      }
    },
    {
      "id": "roa",
      "name": "Return on assets",
      "signal_definition": "Return on assets",
      "sort_variable": "roa",
      "code_direction": "H-L",
      "paper_direction": "H-L",
      "direction_label": "高值做多 · 低值做空",
      "agreement": "yes",
      "status": "paper_direction_verified",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Balakrishnan, Bartov, and Faurel (2010). Formula table direction: +1.",
      "raw_signal": "Quarterly earnings scaled by beginning-of-quarter total assets",
      "construction_summary": "Each fiscal quarter, rank firm-quarter observations into ten earnings deciles using prior-quarter distribution cutoffs. Earnings are before extraordinary items and discontinued operations divided by beginning-of-quarter assets; compute post-announcement buy-and-hold abnormal returns and the High Profit minus High Loss hedge.",
      "sample_and_timing": "458,693 firm-quarters over 1976-2005; day 0 is the quarterly earnings announcement date.",
      "breakpoints": "Quarterly deciles; cutoffs in quarter q use the earnings distribution from quarter q-1 to avoid look-ahead bias.",
      "weighting": "Abnormal returns are size-adjusted or Carhart four-factor adjusted; the hedge is the High Profit portfolio minus the High Loss portfolio.",
      "rebalancing_frequency": "Quarterly.",
      "holding_period": "60 or 120 trading days after announcement; the headline hedge uses [1,120].",
      "paper_long_leg": "Decile 10, High Profit / highest earnings-to-assets.",
      "paper_short_leg": "Decile 1, High Loss / lowest earnings-to-assets.",
      "confidence": "high",
      "evidence_type": "publisher_full_text_cityu",
      "evidence_pointer": "extracted-text/balakrishnan-2010.txt:100-140,337-435 (Sections 2.2 and 3.1-3.2, Table 2); papers/balakrishnan-2010/balakrishnan-2010-authoritative-fulltext.html",
      "reviewer_notes": "Original publisher full text explicitly defines the quarterly ROA-like earnings signal and a long High Profit / short High Loss hedge portfolio.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "All three measures are scaled by beginning-of-quarter total assets (Compustat Quarterly data44) to alleviate a potential heteroscedasticity problem that may arise when earnings data are pooled across firms and over time.4 We measure buy-and-hold abnormal returns, for firm i over n trading days, as follows: (1) ∏ 𝑡 = 1 , 𝑛 ( 1 + 𝑅 it ) − ∏ 𝑡 = 1 , 𝑛 ( 1 + 𝐸 𝑅 it ) where Rit is the daily return for firm i on day t, inclusive of dividends and other distributions, and ERit is the expected return on day t for that firm.",
          "page": 1,
          "line_start": 100,
          "line_end": 140,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/balakrishnan-2010.txt",
          "href": "../papers/balakrishnan-2010/balakrishnan-2010-authoritative-fulltext.html#:~:text=All%20three%20measures%20are%20scaled%20by%20beginning-of-quarter%20total%20assets%20%28Compustat%20Quarterly%20data44%29%20to%20alleviate%20a%20potential%20heteroscedasticity%20problem%20that%20may%20arise%20when%20earnings%20dat",
          "open_label": "在本地 HTML 中定位"
        },
        {
          "text": "To address this problem, we compute cut-off points based on the previous fiscal quarter's earnings distribution.9 For each of the ten portfolios, we compute buy-and-hold abnormal returns over two windows, [1, 60] and [1, 120], where day zero is the quarterly earnings announcement date.10 If investors underreact to loss/profit announcements, we expect the post-announcement returns to vary systematically across the earnings deciles, being most negative for the High Loss portfolio and most positive for the High Profit portfolio, and the spread between the High Profit portfolio and the High Loss portfolio to be significantly positive.",
          "page": 1,
          "line_start": 337,
          "line_end": 435,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/balakrishnan-2010.txt",
          "href": "../papers/balakrishnan-2010/balakrishnan-2010-authoritative-fulltext.html#:~:text=To%20address%20this%20problem%2C%20we%20compute%20cut-off%20points%20based%20on%20the%20previous%20fiscal%20quarter%27s%20earnings%20distribution.9%20For%20each%20of%20the%20ten%20portfolios%2C%20we%20compute%20buy-and-hold%20abnormal%20r",
          "open_label": "在本地 HTML 中定位"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "balakrishnan-2010",
        "title": "Post Loss/Profit Announcement Drift",
        "authors": "Karthik Balakrishnan; Eli Bartov; Lucile Faurel",
        "year": "2010",
        "venue": "Journal of Accounting and Economics",
        "doi": "10.1016/j.jacceco.2009.12.002",
        "source_url": "https://www.sciencedirect.com/science/article/pii/S0165410110000020",
        "local_file": "papers/balakrishnan-2010/balakrishnan-2010-authoritative-fulltext.html",
        "local_href": "../papers/balakrishnan-2010/balakrishnan-2010-authoritative-fulltext.html",
        "artifact_type": "html",
        "pdf_pages": null,
        "access_status": "full_text_html_cityu"
      },
      "method_variants": [
        {
          "id": "balakrishnan-2010",
          "source_id": "balakrishnan-2010",
          "role": "original_paper",
          "source_label": "Post Loss/Profit Announcement Drift",
          "source_year": "2010",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{ROA}_{i,q}=\\frac{\\mathrm{IBQ}_{i,q}}{\\mathrm{ATQ}_{i,q-1}}\\)",
          "data_fields": "Quarterly earnings scaled by beginning-of-quarter total assets",
          "calculation_window": {
            "zh": "458,693 firm-quarters over 1976-2005; day 0 is the quarterly earnings announcement date.",
            "en": "458,693 firm-quarters over 1976-2005; day 0 is the quarterly earnings announcement date."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Quarterly deciles; cutoffs in quarter q use the earnings distribution from quarter q-1 to avoid look-ahead bias. Abnormal returns are size-adjusted or Carhart four-factor adjusted; the hedge is the High Profit portfolio minus the High Loss portfolio. Quarterly. 60 or 120 trading days after announcement; the headline hedge uses [1,120].",
            "en": "Quarterly deciles; cutoffs in quarter q use the earnings distribution from quarter q-1 to avoid look-ahead bias. Abnormal returns are size-adjusted or Carhart four-factor adjusted; the hedge is the High Profit portfolio minus the High Loss portfolio. Quarterly. 60 or 120 trading days after announcement; the headline hedge uses [1,120]."
          },
          "direction": "H-L",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/balakrishnan-2010/balakrishnan-2010-authoritative-fulltext.html",
          "source_page": 1,
          "source_href": "../papers/balakrishnan-2010/balakrishnan-2010-authoritative-fulltext.html#:~:text=All%20three%20measures%20are%20scaled%20by%20beginning-of-quarter%20total%20assets%20%28Compustat%20Quarterly%20data44%29%20to%20alleviate%20a%20potential%20heteroscedasticity%20problem%20that%20may%20arise%20when%20earnings%20dat"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{ROA}_{i,t}=\\frac{\\mathrm{IB}_{i,t}}{\\mathrm{AT}_{i,t-1}}\\).",
        "formula_direction": "+1",
        "data_fields": "Compustat: AT, IB",
        "calculation_window": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "accounting_lag": {
          "zh": "年频与季频结果均在 CIZ 中对齐；最终比较 datadate，取较新的可用值。",
          "en": "CIZ aligns both annual and quarterly results, then selects the newer available value by datadate."
        },
        "source_label": "EquityChars CIZ · accounting.py · L669, L1476",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L669",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "669,1476",
        "code_frequency": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "reconcile_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/impute_rank_output.py#L85",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写。年频与季频同时可用时，最终输出按 datadate 选择较新的非空值。",
          "en": "Formula transcribed from chars_ciz. When annual and quarterly values both exist, final output selects the newer non-null value by datadate."
        }
      }
    },
    {
      "id": "roavol",
      "name": "Earnings volatility",
      "signal_definition": "Earnings volatility",
      "sort_variable": "roavol",
      "code_direction": "L-H",
      "paper_direction": "not-simple",
      "direction_label": "非简单多空",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "Low",
      "code_short_leg": "High",
      "code_notes": "Repo attribution: Francis, LaFond, Olsson, and Schipper (2004). Formula table has no entry for this signal.",
      "raw_signal": "EarnVar = rolling ten-year standard deviation of net income before extraordinary items scaled by beginning-of-year total assets",
      "construction_summary": "The published article measures earnings variability annually, converts EarnVar to decile ranks, and relates the most-versus-least-variable earnings deciles to implied cost of equity. This is a cost-of-capital comparison and regression sensitivity test, not a realized-return long/short portfolio.",
      "sample_and_timing": "Full sample covers 1975-2001; each firm-year EarnVar uses a rolling ten-year window.",
      "breakpoints": "Annual decile ranks of EarnVar; paper reports most-variable versus least-variable earnings deciles.",
      "weighting": "N/A; reported outcomes are implied cost-of-equity differences/regression coefficients, not portfolio returns.",
      "rebalancing_frequency": "annual",
      "holding_period": "N/A; cross-sectional expected cost-of-equity analysis.",
      "paper_long_leg": "No traded long leg; the paper reports the most-variable-minus-least-variable cost-of-equity difference.",
      "paper_short_leg": "No traded short leg.",
      "confidence": "high",
      "evidence_type": "publisher_final_jstor_pdf",
      "evidence_pointer": "extracted-text/francis-2004-publisher.txt:511-516,1831-1875; papers/francis-2004/francis-2004-publisher.pdf:p.998",
      "reviewer_notes": "Verified against the final Accounting Review/JSTOR PDF. Larger EarnVar means more volatile earnings and the paper reports a 382 bp unconditional high-minus-low cost-of-equity difference, but this does not establish the repository's realized-return L-H strategy.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "We calculate the earnings attributes over rolling firm-specific ten-year windows; a firm is included in the year t sample if data are available in years t-9 to t.",
          "page": 10,
          "line_start": 511,
          "line_end": 516,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/francis-2004-publisher.txt",
          "href": "../papers/francis-2004/francis-2004-publisher.pdf#page=10",
          "open_label": "查看 PDF 第 10 页"
        },
        {
          "text": "iability as the rolling ten-year standard deviation of fi items, scaled by beginning of year total assets, Ear values of Earn Var indicate more (less) volatile earn and median values of EarnVar are 0.048 and 0.033, r of 0.049 (not reported).",
          "page": 33,
          "line_start": 1831,
          "line_end": 1875,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/francis-2004-publisher.txt",
          "href": "../papers/francis-2004/francis-2004-publisher.pdf#page=33",
          "open_label": "查看 PDF 第 33 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "francis-2004",
        "title": "Costs of Equity and Earnings Attributes",
        "authors": "Jennifer Francis; Ryan LaFond; Per M. Olsson; Katherine Schipper",
        "year": "2004",
        "venue": "The Accounting Review, 79(4), 967-1010",
        "doi": "10.2308/accr.2004.79.4.967",
        "source_url": "https://doi.org/10.2308/accr.2004.79.4.967",
        "local_file": "papers/francis-2004/francis-2004-publisher.pdf",
        "local_href": "../papers/francis-2004/francis-2004-publisher.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 45,
        "access_status": "full_text_pdf_publisher"
      },
      "method_variants": [
        {
          "id": "francis-2004",
          "source_id": "francis-2004",
          "role": "original_paper",
          "source_label": "Costs of Equity and Earnings Attributes",
          "source_year": "2004",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{EarnVar}_{i,t}=\\operatorname{SD}_{\\tau=t-9,\\ldots,t}\\!\\left(\\frac{\\mathrm{IB}_{i,\\tau}}{\\mathrm{AT}_{i,\\tau-1}}\\right)\\)",
          "data_fields": "EarnVar = rolling ten-year standard deviation of net income before extraordinary items scaled by beginning-of-year total assets",
          "calculation_window": {
            "zh": "Full sample covers 1975-2001; each firm-year EarnVar uses a rolling ten-year window.",
            "en": "Full sample covers 1975-2001; each firm-year EarnVar uses a rolling ten-year window."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Annual decile ranks of EarnVar; paper reports most-variable versus least-variable earnings deciles. N/A; reported outcomes are implied cost-of-equity differences/regression coefficients, not portfolio returns. annual N/A; cross-sectional expected cost-of-equity analysis.",
            "en": "Annual decile ranks of EarnVar; paper reports most-variable versus least-variable earnings deciles. N/A; reported outcomes are implied cost-of-equity differences/regression coefficients, not portfolio returns. annual N/A; cross-sectional expected cost-of-equity analysis."
          },
          "direction": "not-simple",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/francis-2004/francis-2004-publisher.pdf",
          "source_page": 10,
          "source_href": "../papers/francis-2004/francis-2004-publisher.pdf#page=10"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{ROA}^{Q}_{i,t}=\\frac{\\mathrm{IBQ}_{i,t}}{\\mathrm{ATQ}_{i,t-1}},\\quad \\mathrm{ROAVOL}_{i,t}=\\operatorname{Std}\\{\\mathrm{ROA}^{Q}_{i,t-k}:k=0,\\ldots,15\\}\\)",
        "formula_direction": "",
        "data_fields": "Compustat: ATQ, IBQ",
        "calculation_window": {
          "zh": "季度；当期及前 15 个季度的 ROA 标准差。",
          "en": "Quarterly; standard deviation of ROA over the current and prior 15 quarters."
        },
        "accounting_lag": {
          "zh": "按 chars_ciz 的季度或事件日期对齐；未另行添加页面假设。",
          "en": "Aligned by the chars_ciz quarterly or event-date rule; the page adds no extra assumption."
        },
        "source_label": "EquityChars CIZ · accounting.py · L1909",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L1909",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "1909",
        "code_frequency": {
          "zh": "季频。",
          "en": "Quarterly."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      },
      "method_design": {
        "family": "implied_cost_of_capital",
        "summary": {
          "zh": "以十年滚动窗口估计盈利波动性，将其转化为年度十分位秩，并比较最高与最低波动组的隐含权益资本成本，同时实施横截面敏感性回归。",
          "en": "The published article measures earnings variability annually, converts EarnVar to decile ranks, and relates the most-versus-least-variable earnings deciles to implied cost of equity. This is a cost-of-capital comparison and regression sensitivity test, not a realized-return long/short portfolio."
        },
        "signal_role": {
          "zh": "资本成本解释变量",
          "en": "Cost-of-capital explanatory variable"
        },
        "estimand": {
          "zh": "隐含权益资本成本",
          "en": "Implied cost of equity"
        },
        "interpretation": {
          "zh": "被解释变量是预期资本成本而非实现股票收益，因而不能解释为可交易的高波动减低波动组合。",
          "en": ""
        }
      }
    },
    {
      "id": "roe",
      "name": "Return on equity",
      "signal_definition": "Return on equity",
      "sort_variable": "roe",
      "code_direction": "H-L",
      "paper_direction": "H-L",
      "direction_label": "高值做多 · 低值做空",
      "agreement": "yes",
      "status": "paper_direction_verified",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Hou, Xue, and Zhang (2015). Formula table direction: +1.",
      "raw_signal": "income before extraordinary items (Compustat quarterly item IBQ) divided by one-quarter-lagged book equity",
      "construction_summary": "The published article constructs the ROE factor from triple 2x3x3 sorts on size, investment-to-assets, and ROE; it is the simple average of six high-ROE value-weighted intersection portfolios minus the simple average of six low-ROE portfolios.",
      "sample_and_timing": "January 1972-December 2012; excludes financial firms and firms with negative book equity; quarterly earnings enter immediately after public announcement dates RDQ, subject to a six-month freshness limit.",
      "breakpoints": "NYSE median size split; NYSE 30/40/30 investment breakpoints; monthly NYSE 30/40/30 ranked-ROE breakpoints; 18 intersections.",
      "weighting": "Monthly value-weighted portfolio returns; factor uses simple averages across six high-ROE and six low-ROE portfolios.",
      "rebalancing_frequency": "Monthly; ROE portfolios reconstructed monthly, size and investment resorted each June.",
      "holding_period": "One month.",
      "paper_long_leg": "high ROE portfolios",
      "paper_short_leg": "low ROE portfolios",
      "confidence": "high",
      "evidence_type": "publisher_full_text",
      "evidence_pointer": "extracted-text/hou-2015-publisher.txt:52-57,100-105,406-414",
      "reviewer_notes": "Verified against the formal Review of Financial Studies publisher full text; definition, 2x3x3 breakpoints, timing, weighting, and high-minus-low ROE factor are explicit.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "In our model (dubbed the q-factor model), the expected return of an asset in excess of the risk-free rate, denoted E[ri]−rf⁠, is described by the sensitivities of its returns to 4 factors: the market excess return (MKT), the difference between the return on a portfolio of small size stocks and the return on a portfolio of big size stocks (⁠rME⁠), the difference between the return on a portfolio of low investment stocks and the return on a portfolio of high investment stocks (⁠rI/A⁠), and the difference between the return on a portfolio of high profitability (return on equity, ROE) stocks and the return on a portfolio of low profitability stocks (⁠rROE⁠).",
          "page": 1,
          "line_start": 52,
          "line_end": 57,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/hou-2015-publisher.txt",
          "href": "../papers/hou-2015/hou-2015-publisher-fulltext.html#:~:text=In%20our%20model%20%28dubbed%20the%20q-factor%20model%29%2C%20the%20expected%20return%20of%20an%20asset%20in%20excess%20of%20the%20risk-free%20rate%2C%20denoted%20E%5Bri%5D%E2%88%92rf%E2%81%A0%2C%20is%20described%20by%20the%20sensitivities%20of%20its%20returns%20to%204%20",
          "open_label": "在本地 HTML 中定位"
        },
        {
          "text": "We measure profitability as ROE, which is income before extraordinary items (Compustat quarterly item IBQ) divided by 1-quarter-lagged book equity.9 We construct the q-factors from a triple 2-by-3-by-3 sort on size, I/A⁠, and ROE.",
          "page": 1,
          "line_start": 100,
          "line_end": 105,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/hou-2015-publisher.txt",
          "href": "../papers/hou-2015/hou-2015-publisher-fulltext.html#:~:text=We%20measure%20profitability%20as%20ROE%2C%20which%20is%20income%20before%20extraordinary%20items%20%28Compustat%20quarterly%20item%20IBQ%29%20divided%20by%201-quarter-lagged%20book%20equity.9%20We%20construct%20the%20q-factors%20from",
          "open_label": "在本地 HTML 中定位"
        },
        {
          "text": "ROE is income before extraordinary items (Compustat quarterly item IBQ) divided by 1-quarter-lagged book equity.",
          "page": 1,
          "line_start": 406,
          "line_end": 414,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/hou-2015-publisher.txt",
          "href": "../papers/hou-2015/hou-2015-publisher-fulltext.html#:~:text=ROE%20is%20income%20before%20extraordinary%20items%20%28Compustat%20quarterly%20item%20IBQ%29%20divided%20by%201-quarter-lagged%20book%20equity.",
          "open_label": "在本地 HTML 中定位"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "hou-2015",
        "title": "Digesting Anomalies: An Investment Approach",
        "authors": "Kewei Hou, Chen Xue, and Lu Zhang",
        "year": "2015",
        "venue": "The Review of Financial Studies",
        "doi": "10.1093/rfs/hhu068",
        "source_url": "https://doi.org/10.1093/rfs/hhu068",
        "local_file": "papers/hou-2015/hou-2015-publisher-fulltext.html",
        "local_href": "../papers/hou-2015/hou-2015-publisher-fulltext.html",
        "artifact_type": "html",
        "pdf_pages": null,
        "access_status": "full_text_html_publisher_verified"
      },
      "method_variants": [
        {
          "id": "hou-2015",
          "source_id": "hou-2015",
          "role": "original_paper",
          "source_label": "Digesting Anomalies: An Investment Approach",
          "source_year": "2015",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{ROE}_{i,q}=\\frac{\\mathrm{IBQ}_{i,q}}{\\mathrm{BookEquity}_{i,q-1}}\\)",
          "data_fields": "income before extraordinary items (Compustat quarterly item IBQ) divided by one-quarter-lagged book equity",
          "calculation_window": {
            "zh": "January 1972-December 2012; excludes financial firms and firms with negative book equity; quarterly earnings enter immediately after public announcement dates RDQ, subject to a six-month freshness limit.",
            "en": "January 1972-December 2012; excludes financial firms and firms with negative book equity; quarterly earnings enter immediately after public announcement dates RDQ, subject to a six-month freshness limit."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "NYSE median size split; NYSE 30/40/30 investment breakpoints; monthly NYSE 30/40/30 ranked-ROE breakpoints; 18 intersections. Monthly value-weighted portfolio returns; factor uses simple averages across six high-ROE and six low-ROE portfolios. Monthly; ROE portfolios reconstructed monthly, size and investment resorted each June. One month.",
            "en": "NYSE median size split; NYSE 30/40/30 investment breakpoints; monthly NYSE 30/40/30 ranked-ROE breakpoints; 18 intersections. Monthly value-weighted portfolio returns; factor uses simple averages across six high-ROE and six low-ROE portfolios. Monthly; ROE portfolios reconstructed monthly, size and investment resorted each June. One month."
          },
          "direction": "H-L",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/hou-2015/hou-2015-publisher-fulltext.html",
          "source_page": 1,
          "source_href": "../papers/hou-2015/hou-2015-publisher-fulltext.html#:~:text=In%20our%20model%20%28dubbed%20the%20q-factor%20model%29%2C%20the%20expected%20return%20of%20an%20asset%20in%20excess%20of%20the%20risk-free%20rate%2C%20denoted%20E%5Bri%5D%E2%88%92rf%E2%81%A0%2C%20is%20described%20by%20the%20sensitivities%20of%20its%20returns%20to%204%20"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{ROE}_{i,t}=\\frac{\\mathrm{IB}_{i,t}}{\\mathrm{CEQ}_{i,t-1}}\\)",
        "formula_direction": "+1",
        "data_fields": "Compustat: CEQ, IB",
        "calculation_window": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "accounting_lag": {
          "zh": "年频与季频结果均在 CIZ 中对齐；最终比较 datadate，取较新的可用值。",
          "en": "CIZ aligns both annual and quarterly results, then selects the newer available value by datadate."
        },
        "source_label": "EquityChars CIZ · accounting.py · L674, L1777",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L674",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "674,1777",
        "code_frequency": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "reconcile_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/impute_rank_output.py#L85",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写。年频与季频同时可用时，最终输出按 datadate 选择较新的非空值。",
          "en": "Formula transcribed from chars_ciz. When annual and quarterly values both exist, final output selects the newer non-null value by datadate."
        }
      }
    },
    {
      "id": "roic",
      "name": "Return on invested capital",
      "signal_definition": "Return on invested capital",
      "sort_variable": "roic",
      "code_direction": "H-L",
      "paper_direction": "H-L",
      "direction_label": "高值做多 · 低值做空",
      "agreement": "yes",
      "status": "paper_direction_verified",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Brown and Rowe (2007). Formula table has no entry for this signal.",
      "raw_signal": "return on invested capital",
      "construction_summary": "EBIT minus non-operating income, divided by liabilities plus common equity minus cash.",
      "sample_and_timing": "Annual Compustat data; the original working paper studies subsequent 12-month returns.",
      "breakpoints": "The original paper uses portfolio sorts; exact breakpoints are not available in a final published source.",
      "weighting": "Equal-weighted in the formal replication record.",
      "rebalancing_frequency": "Annual signal.",
      "holding_period": "12 months.",
      "paper_long_leg": "High ROIC.",
      "paper_short_leg": "Low ROIC.",
      "confidence": "high",
      "evidence_type": "formal_published_si_plus_replication",
      "evidence_pointer": "extracted-text/fallahgoul-2024-supplement.txt:4970-4976@supporting-information/fallahgoul-2024/fallahgoul-franstianto-lin-2024-supplement.pdf; extracted-text/gu-2020-internet-appendix.txt:2587-2594@supporting-information/gu-2020/gu-kelly-xiu-2020-internet-appendix.pdf",
      "reviewer_notes": "No journal successor to Brown-Rowe was found, but multiple formal journal supplements and Chen-Zimmermann's public replication code independently confirm the formula, annual frequency, and H-L orientation. High confidence refers to construction and direction, not effect strength; the reported original spread is weak (t=0.9).",
      "audit_sources": [],
      "evidence": [
        {
          "text": "roic Return on invested capital Compustat Annual (Earnings before interest and taxes (ebit) - non-operating in- come (nopi)) / book value of invested capital (lt+ceq-che)",
          "page": 40,
          "line_start": 4970,
          "line_end": 4976,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/fallahgoul-2024-supplement.txt",
          "source_file": "supporting-information/fallahgoul-2024/fallahgoul-franstianto-lin-2024-supplement.pdf",
          "href": "../supporting-information/fallahgoul-2024/fallahgoul-franstianto-lin-2024-supplement.pdf#page=40",
          "open_label": "查看 PDF 第 40 页"
        },
        {
          "text": "roic Return on invested capital Brown & Rowe 2007, WP Compustat Annual 78 rsup",
          "page": 16,
          "line_start": 2587,
          "line_end": 2594,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/gu-2020-internet-appendix.txt",
          "source_file": "supporting-information/gu-2020/gu-kelly-xiu-2020-internet-appendix.pdf",
          "href": "../supporting-information/gu-2020/gu-kelly-xiu-2020-internet-appendix.pdf#page=16",
          "open_label": "查看 PDF 第 16 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "brown-2007",
        "title": "The Productivity Premium in Equity Returns",
        "authors": "David P. Brown; Bradford Rowe",
        "year": "2007",
        "venue": "SSRN working paper",
        "doi": "10.2139/ssrn.993467",
        "source_url": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=993467",
        "local_file": "",
        "local_href": "",
        "artifact_type": "none",
        "pdf_pages": null,
        "access_status": "not_requested"
      },
      "method_variants": [
        {
          "id": "brown-2007",
          "source_id": "brown-2007",
          "role": "original_paper",
          "source_label": "The Productivity Premium in Equity Returns",
          "source_year": "2007",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{ROIC}_{i,t}=\\frac{\\mathrm{EBIT}_{i,t}-\\mathrm{NOPI}_{i,t}}{\\mathrm{LT}_{i,t}+\\mathrm{CEQ}_{i,t}-\\mathrm{CHE}_{i,t}}\\)",
          "data_fields": "return on invested capital",
          "calculation_window": {
            "zh": "Annual Compustat data; the original working paper studies subsequent 12-month returns.",
            "en": "Annual Compustat data; the original working paper studies subsequent 12-month returns."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "The original paper uses portfolio sorts; exact breakpoints are not available in a final published source. Equal-weighted in the formal replication record. Annual signal. 12 months.",
            "en": "The original paper uses portfolio sorts; exact breakpoints are not available in a final published source. Equal-weighted in the formal replication record. Annual signal. 12 months."
          },
          "direction": "H-L",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "",
          "source_page": null,
          "source_href": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=993467"
        },
        {
          "id": "fallahgoul-2024",
          "source_id": "fallahgoul-2024",
          "role": "published_replication",
          "source_label": "Fallahgoul, Franstianto & Lin — Journal Supplement",
          "source_year": "2024",
          "formula": "ROIC = (EBIT − NOPI) / (LT + CEQ − CHE)",
          "formula_latex": "\\(\\displaystyle \\mathrm{ROIC}_{i,t}=\\frac{\\mathrm{EBIT}_{i,t}-\\mathrm{NOPI}_{i,t}}{\\mathrm{LT}_{i,t}+\\mathrm{CEQ}_{i,t}-\\mathrm{CHE}_{i,t}}\\)",
          "data_fields": "Compustat: EBIT, NOPI, LT, CEQ, CHE",
          "calculation_window": {
            "zh": "年频。",
            "en": "Annual."
          },
          "accounting_lag": {
            "zh": "该定义表未注明。",
            "en": "Not stated in the definition table."
          },
          "portfolio_rule": {
            "zh": "该行用于公式复核，没有单列组合形成规则。",
            "en": "This row cross-checks the formula and does not separately state portfolio formation."
          },
          "direction": "未注明",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "正式期刊补充材料给出可复刻字段公式。",
            "en": "The formal journal supplement gives a field-level reproducible formula."
          },
          "source_path": "supporting-information/fallahgoul-2024/fallahgoul-franstianto-lin-2024-supplement.pdf",
          "source_page": 40,
          "source_href": "../supporting-information/fallahgoul-2024/fallahgoul-franstianto-lin-2024-supplement.pdf#page=40"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{ROIC}_{i,t}=\\frac{\\mathrm{EBIT}_{i,t}-\\mathrm{NOPI}_{i,t}}{\\mathrm{CEQ}_{i,t}+\\mathrm{LT}_{i,t}-\\mathrm{CHE}_{i,t}}\\)",
        "formula_direction": "",
        "data_fields": "Compustat: EBIT, NOPI, CEQ, LT, CHE",
        "calculation_window": {
          "zh": "年频。",
          "en": "Annual."
        },
        "accounting_lag": {
          "zh": "按 chars_ciz 年频 jdate 对齐；未另行添加页面假设。",
          "en": "Aligned by the chars_ciz annual jdate rule; the page adds no extra assumption."
        },
        "source_label": "EquityChars CIZ · accounting.py · L684",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L684",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "684",
        "code_frequency": {
          "zh": "年频。",
          "en": "Annual."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      }
    },
    {
      "id": "rsup",
      "name": "Revenue surprise",
      "signal_definition": "Revenue surprise",
      "sort_variable": "rsup",
      "code_direction": "H-L",
      "paper_direction": "not-simple",
      "direction_label": "非简单多空",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Kama (2009). Formula table direction: +1.",
      "raw_signal": "standardized unexpected revenue (SURG), calculated like SUE but using revenue per share",
      "construction_summary": "The paper studies market reaction and post-announcement drift using SURG in Fama-MacBeth regressions and event-window abnormal returns; it does not provide a standalone tradable revenue-surprise high-minus-low or low-minus-high portfolio.",
      "sample_and_timing": "Compustat/CRSP public companies from 1974-2005, excluding financial institutions and utilities and trimming the extreme 1% on each side for SUE, SURG, and SAR.",
      "breakpoints": "No standalone SURG portfolio breakpoints; regressions use continuous SURG and Table 6 uses sign combinations of SUE and SURG.",
      "weighting": "Size-adjusted returns; no standalone simple SURG portfolio weighting.",
      "rebalancing_frequency": "Quarterly event observations; no simple sorted-portfolio rebalance.",
      "holding_period": "Days -2 through +1 around earnings announcement; post-announcement regression uses day +2 through six months after announcement.",
      "paper_long_leg": "no explicit simple long leg",
      "paper_short_leg": "no explicit simple short leg",
      "confidence": "high",
      "evidence_type": "direct_original_text",
      "evidence_pointer": "extracted-text/kama-2009.txt:260-267,286-312,380-388,521-542,713-723,819-826,876-934",
      "reviewer_notes": "Kama (2009) gives regression/event-reaction evidence for SURG and opposite-sign SUE/SURG event groups, not a standalone tradable rsup spread.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "I delete observations with missing data on size- adjusted returns (SAR), standardized unexpected earnings (SUE) and standardized unexpected revenue (SURG).",
          "page": 5,
          "line_start": 260,
          "line_end": 267,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/kama-2009.txt",
          "href": "../papers/kama-2009/kama-2009-author-copy.pdf#page=5",
          "open_label": "查看 PDF 第 5 页"
        },
        {
          "text": "7 j =1 Standardized unexpected revenue (SURG) is calculated in a similar manner but using revenue per share.",
          "page": 6,
          "line_start": 286,
          "line_end": 312,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/kama-2009.txt",
          "href": "../papers/kama-2009/kama-2009-author-copy.pdf#page=6",
          "open_label": "查看 PDF 第 6 页"
        },
        {
          "text": "The return window contains the 4 trading days from −2 through +1, where 0 is the earnings announcement date, as stated in Compustat. r SUE – standardized unexpected earnings – quarterly earnings per share minus earnings per share in the same quarter of the previous year minus a drift, scaled by the standard deviation of earnings in the prior 8 quarters. r SURG r M/B – –market-to-book standardized unexpected revenue – similar to SUE but using revenue per share.",
          "page": 7,
          "line_start": 380,
          "line_end": 388,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/kama-2009.txt",
          "href": "../papers/kama-2009/kama-2009-author-copy.pdf#page=7",
          "open_label": "查看 PDF 第 7 页"
        },
        {
          "text": "This result suggests that the effect of earnings surprises on abnormal stock returns is larger than that of revenue surprises, but that revenue surprises are incrementally informative beyond earnings surprises.",
          "page": 10,
          "line_start": 521,
          "line_end": 542,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/kama-2009.txt",
          "href": "../papers/kama-2009/kama-2009-author-copy.pdf#page=10",
          "open_label": "查看 PDF 第 10 页"
        },
        {
          "text": "Recently, Jegadeesh and Livnat (2006a) find post-announcement drift in the direction of earnings and revenue surprises and Jegadeesh and Livnat (2006b) also show that the magnitude of the drift is stronger when revenue surprises and earnings surprises have the same sign.",
          "page": 13,
          "line_start": 713,
          "line_end": 723,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/kama-2009.txt",
          "href": "../papers/kama-2009/kama-2009-author-copy.pdf#page=13",
          "open_label": "查看 PDF 第 13 页"
        },
        {
          "text": "(3) 2 Definitions of variables: r SAR (6) – size-adjusted-returns from 2 trading days after the earnings announcement date through 6 months after the earnings announcement date. r SUE – standardized unexpected earnings – quarterly earnings per share minus earnings per share in the same quarter of the previous year minus a drift, scaled by the standard deviation of earnings in the prior 8 quarters. r SURG standardized unexpected revenue – similar to SUE but using revenue per share.",
          "page": 15,
          "line_start": 819,
          "line_end": 826,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/kama-2009.txt",
          "href": "../papers/kama-2009/kama-2009-author-copy.pdf#page=15",
          "open_label": "查看 PDF 第 15 页"
        },
        {
          "text": "(iv) Interaction Between SUE and SURG – Portfolio Analysis Next, I focus on the interaction between SUE and SURG and its effect on stock returns.",
          "page": 16,
          "line_start": 876,
          "line_end": 934,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/kama-2009.txt",
          "href": "../papers/kama-2009/kama-2009-author-copy.pdf#page=16",
          "open_label": "查看 PDF 第 16 页"
        },
        {
          "text": "The return window contains the 4 trading days from −2 through +1, where 0 is the earnings announcement date, as stated in Compustat. r SUE – standardized unexpected earnings – quarterly earnings per share minus earnings per share in the same quarter of the previous year minus a drift, scaled by the standard deviation of earnings in the prior 8 quarters. r SURG – standardized unexpected revenue – similar to SUE but using revenue per share.",
          "page": 17,
          "line_start": 876,
          "line_end": 934,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/kama-2009.txt",
          "href": "../papers/kama-2009/kama-2009-author-copy.pdf#page=17",
          "open_label": "查看 PDF 第 17 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "kama-2009",
        "title": "On the Market Reaction to Revenue and Earnings Surprises",
        "authors": "Itay Kama",
        "year": "2009",
        "venue": "Journal of Business Finance & Accounting",
        "doi": "10.1111/j.1468-5957.2008.02121.x",
        "source_url": "https://doi.org/10.1111/j.1468-5957.2008.02121.x",
        "local_file": "papers/kama-2009/kama-2009-author-copy.pdf",
        "local_href": "../papers/kama-2009/kama-2009-author-copy.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 20,
        "access_status": "full_text_pdf_verified"
      },
      "method_variants": [
        {
          "id": "kama-2009",
          "source_id": "kama-2009",
          "role": "original_paper",
          "source_label": "On the Market Reaction to Revenue and Earnings Surprises",
          "source_year": "2009",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{SURG}_{i,q}=\\frac{\\mathrm{RevenuePerShare}_{i,q}-\\mathrm{RevenuePerShare}_{i,q-4}}{\\sigma_i(\\Delta_4\\mathrm{RevenuePerShare})}\\)",
          "data_fields": "standardized unexpected revenue (SURG), calculated like SUE but using revenue per share",
          "calculation_window": {
            "zh": "Compustat/CRSP public companies from 1974-2005, excluding financial institutions and utilities and trimming the extreme 1% on each side for SUE, SURG, and SAR.",
            "en": "Compustat/CRSP public companies from 1974-2005, excluding financial institutions and utilities and trimming the extreme 1% on each side for SUE, SURG, and SAR."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "No standalone SURG portfolio breakpoints; regressions use continuous SURG and Table 6 uses sign combinations of SUE and SURG. Size-adjusted returns; no standalone simple SURG portfolio weighting. Quarterly event observations; no simple sorted-portfolio rebalance. Days -2 through +1 around earnings announcement; post-announcement regression uses day +2 through six months after announcement.",
            "en": "No standalone SURG portfolio breakpoints; regressions use continuous SURG and Table 6 uses sign combinations of SUE and SURG. Size-adjusted returns; no standalone simple SURG portfolio weighting. Quarterly event observations; no simple sorted-portfolio rebalance. Days -2 through +1 around earnings announcement; post-announcement regression uses day +2 through six months after announcement."
          },
          "direction": "not-simple",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/kama-2009/kama-2009-author-copy.pdf",
          "source_page": 5,
          "source_href": "../papers/kama-2009/kama-2009-author-copy.pdf#page=5"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{RSUP}_{i,t}=\\frac{\\mathrm{SALE}_{i,t}-\\mathrm{SALE}_{i,t-1}}{\\mathrm{ME}_{i,t}}\\)",
        "formula_direction": "+1",
        "data_fields": "Compustat: SALE",
        "calculation_window": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "accounting_lag": {
          "zh": "年频与季频结果均在 CIZ 中对齐；最终比较 datadate，取较新的可用值。",
          "en": "CIZ aligns both annual and quarterly results, then selects the newer available value by datadate."
        },
        "source_label": "EquityChars CIZ · accounting.py · L2308, L2450",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L2308",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "2308,2450",
        "code_frequency": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "reconcile_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/impute_rank_output.py#L85",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写。年频与季频同时可用时，最终输出按 datadate 选择较新的非空值。",
          "en": "Formula transcribed from chars_ciz. When annual and quarterly values both exist, final output selects the newer non-null value by datadate."
        }
      },
      "method_design": {
        "family": "cross_sectional_return_regression",
        "summary": {
          "zh": "围绕盈利公告计算事件窗口异常收益，并以收入意外（SURG）进入Fama–MacBeth及公告后漂移回归；部分检验与盈利意外符号进行条件组合。",
          "en": "The paper studies market reaction and post-announcement drift using SURG in Fama-MacBeth regressions and event-window abnormal returns; it does not provide a standalone tradable revenue-surprise high-minus-low or low-minus-high portfolio."
        },
        "signal_role": {
          "zh": "公告信息解释变量",
          "en": "Announcement-information predictor"
        },
        "estimand": {
          "zh": "公告窗口及公告后股票收益",
          "en": "Announcement-window and post-announcement stock returns"
        },
        "interpretation": {
          "zh": "主要识别对象是回归系数与事件反应，而非独立的收入意外两端组合。",
          "en": ""
        }
      }
    },
    {
      "id": "rvar_capm",
      "name": "Residual variance - CAPM rolling 3m",
      "signal_definition": "Residual variance - CAPM rolling 3m",
      "sort_variable": "rvar_capm",
      "code_direction": "L-H",
      "paper_direction": "L-H",
      "direction_label": "低值做多 · 高值做空",
      "agreement": "yes",
      "status": "paper_direction_verified",
      "code_long_leg": "Low",
      "code_short_leg": "High",
      "code_notes": "Repo attribution: Daily Stock residual variance of CAPM (). Formula table direction: -1.",
      "raw_signal": "CAPM residual variance from daily returns",
      "construction_summary": "Ang et al. (2006) use FF3 residual variance as the main idiosyncratic-volatility measure and report that the CAPM version produces almost identical quintile portfolios. The published evidence therefore supports low residual variance minus high residual variance, but not the repository's exact three-month window.",
      "sample_and_timing": "Published benchmark: July 1963-December 2000; daily returns over the previous month, monthly portfolio formation. Repository method label: rolling three-month daily-return window.",
      "breakpoints": "Monthly quintiles from lowest to highest residual volatility.",
      "weighting": "Value-weighted quintile portfolios.",
      "rebalancing_frequency": "Monthly.",
      "holding_period": "One month in the paper.",
      "paper_long_leg": "lowest CAPM residual-volatility quintile",
      "paper_short_leg": "highest CAPM residual-volatility quintile",
      "confidence": "medium",
      "evidence_type": "related_publisher_final_window_mismatch",
      "evidence_pointer": "extracted-text/ang-2006-publisher.txt:1278-1329,1354-1362,1368-1413",
      "reviewer_notes": "The final Journal of Finance article directly states that CAPM-residual-volatility portfolios correlate above 99% with the FF3 counterparts. Direction is supported; the paper's main formation window is one month, versus three months in EquityChars.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "We concentrate most of our analysis on the 1/0/1 strategy, in which we simply sort stocks into quintile portfolios based on their level of idiosyncratic volatility computed using daily returns over the past month, and we hold these value- weighted portfolios for 1 month.",
          "page": 25,
          "line_start": 1278,
          "line_end": 1329,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/ang-2006-publisher.txt",
          "href": "../papers/ang-2006/ang-hodrick-xing-zhang-2006.pdf#page=25",
          "open_label": "查看 PDF 第 25 页"
        },
        {
          "text": "The first (fifth) quintile portfolio consists of 1/12th of the lowest value- weighted (highest) idiosyncratic stocks from 1 month ago, 1/12th of the value- weighted lowest (highest) idiosyncratic stocks from 2 months ago, etc.",
          "page": 26,
          "line_start": 1278,
          "line_end": 1329,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/ang-2006-publisher.txt",
          "href": "../papers/ang-2006/ang-hodrick-xing-zhang-2006.pdf#page=26",
          "open_label": "查看 PDF 第 26 页"
        },
        {
          "text": "Each quintile portfolio of idiosyncratic volatility relative to the CAPM has a correlation of above 99% with its corresponding quintile counterpart when idiosyncratic volatility",
          "page": 26,
          "line_start": 1354,
          "line_end": 1362,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/ang-2006-publisher.txt",
          "href": "../papers/ang-2006/ang-hodrick-xing-zhang-2006.pdf#page=26",
          "open_label": "查看 PDF 第 26 页"
        },
        {
          "text": "We form value-weighted quintile portfolios every month by sorting stocks based on total volatility and idiosyncratic volatility relative to the Fama–French (1993) model.",
          "page": 27,
          "line_start": 1368,
          "line_end": 1413,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/ang-2006-publisher.txt",
          "href": "../papers/ang-2006/ang-hodrick-xing-zhang-2006.pdf#page=27",
          "open_label": "查看 PDF 第 27 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "ang-2006",
        "title": "The Cross-Section of Volatility and Expected Returns",
        "authors": "Andrew Ang; Robert J. Hodrick; Yuhang Xing; Xiaoyan Zhang",
        "year": "2006",
        "venue": "The Journal of Finance",
        "doi": "10.1111/j.1540-6261.2006.00836.x",
        "source_url": "https://doi.org/10.1111/j.1540-6261.2006.00836.x",
        "local_file": "papers/ang-2006/ang-hodrick-xing-zhang-2006.pdf",
        "local_href": "../papers/ang-2006/ang-hodrick-xing-zhang-2006.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 41,
        "access_status": "full_text_pdf_author_final"
      },
      "method_variants": [
        {
          "id": "ang-2006",
          "source_id": "ang-2006",
          "role": "original_paper",
          "source_label": "Ang, Hodrick, Xing & Zhang — The Cross-Section of Volatility and Expected Returns",
          "source_year": "2006",
          "formula": "RET − RF = α + β(MKT−RF) + ε; RVAR_CAPM = Var(ε)",
          "formula_latex": "\\(\\displaystyle \\mathrm{RET}_{i,d}-\\mathrm{RF}_{d}=\\alpha_i+\\beta_i(\\mathrm{MKT}_{d}-\\mathrm{RF}_{d})+\\varepsilon_{i,d},\\quad \\mathrm{RVAR\\_CAPM}_{i,t}=\\operatorname{Var}(\\varepsilon_{i,d})\\)",
          "data_fields": "CRSP daily: RET; Fama–French daily: RF, MKT−RF",
          "calculation_window": {
            "zh": "组合形成日前 1 个月的日收益；论文主规格为 1/0/1。",
            "en": "Daily returns over the previous month; the paper's main specification is 1/0/1."
          },
          "accounting_lag": {
            "zh": "等待期 0 个月。",
            "en": "Zero-month waiting period."
          },
          "portfolio_rule": {
            "zh": "每月市值加权五分位，持有 1 个月；做多低波动 Q1、做空高波动 Q5。",
            "en": "Monthly value-weighted quintiles held for one month; long low-volatility Q1 and short high-volatility Q5."
          },
          "direction": "L-H",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "论文以 FF3 残差波动率为主，并说明 CAPM 口径结果几乎相同。",
            "en": "The paper focuses on FF3 idiosyncratic volatility and reports that the CAPM version gives almost identical results."
          },
          "source_path": "papers/ang-2006/ang-hodrick-xing-zhang-2006.pdf",
          "source_page": 25,
          "source_href": "../papers/ang-2006/ang-hodrick-xing-zhang-2006.pdf#page=25"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{RVAR\\_CAPM}_{i,t}=\\frac{1}{w-1}\\sum_{s=t-w+1}^{t}(\\varepsilon_{i,s}-\\overline{\\varepsilon}_{i,t})^2\\), where \\(\\varepsilon\\) is from a rolling CAPM excess-return regression.",
        "formula_direction": "-1",
        "data_fields": "Derived/intermediate variables; raw fields not stated",
        "calculation_window": {
          "zh": "日频输入；滚动 3 个月，至少 21 个观测。",
          "en": "Daily inputs; rolling three months with at least 21 observations."
        },
        "accounting_lag": {
          "zh": "信号在 t 月形成；最终输出将收益移至 t+1 月。",
          "en": "The signal is formed at month t; final output shifts the return to month t+1."
        },
        "source_label": "EquityChars CIZ · rolling_chars.py · L114",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/rolling_chars.py#L114",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/rolling_chars.py",
        "code_lines": "114",
        "code_frequency": {
          "zh": "日频输入；滚动 3 个月，至少 21 个观测。",
          "en": "Daily inputs; rolling three months with at least 21 observations."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      }
    },
    {
      "id": "rvar_ff3",
      "name": "Residual variance - ff3 rolling 3m",
      "signal_definition": "Residual variance - ff3 rolling 3m",
      "sort_variable": "rvar_ff3",
      "code_direction": "L-H",
      "paper_direction": "L-H",
      "direction_label": "低值做多 · 高值做空",
      "agreement": "yes",
      "status": "paper_direction_verified",
      "code_long_leg": "Low",
      "code_short_leg": "High",
      "code_notes": "Repo attribution: Daily Stock residual variance of Fama French 3 factors (). Formula table direction: -1.",
      "raw_signal": "FF3 residual variance var(εᵢ) from daily returns",
      "construction_summary": "Ang et al. (2006) estimate daily FF3 regressions, rank stocks into idiosyncratic-volatility quintiles, and hold value-weighted portfolios for one month. The reported high-minus-low return is negative, so the profitable orientation is low-minus-high.",
      "sample_and_timing": "Published benchmark: July 1963-December 2000; daily returns over the previous month, monthly portfolio formation. Repository method label: rolling three-month daily-return window.",
      "breakpoints": "Monthly quintiles from lowest to highest FF3 residual volatility.",
      "weighting": "Value-weighted quintile portfolios.",
      "rebalancing_frequency": "Monthly.",
      "holding_period": "One month in the paper.",
      "paper_long_leg": "lowest FF3 residual-volatility quintile",
      "paper_short_leg": "highest FF3 residual-volatility quintile",
      "confidence": "medium",
      "evidence_type": "related_publisher_final_window_mismatch",
      "evidence_pointer": "extracted-text/ang-2006-publisher.txt:1278-1329,1368-1413",
      "reviewer_notes": "The final Journal of Finance article verifies the formula, legs, weighting, holding period, and L-H orientation. The repository extends the estimation window from the paper's main one month to three months, so this is a close benchmark rather than an exact construction match.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "We concentrate most of our analysis on the 1/0/1 strategy, in which we simply sort stocks into quintile portfolios based on their level of idiosyncratic volatility computed using daily returns over the past month, and we hold these value- weighted portfolios for 1 month.",
          "page": 25,
          "line_start": 1278,
          "line_end": 1329,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/ang-2006-publisher.txt",
          "href": "../papers/ang-2006/ang-hodrick-xing-zhang-2006.pdf#page=25",
          "open_label": "查看 PDF 第 25 页"
        },
        {
          "text": "The first (fifth) quintile portfolio consists of 1/12th of the lowest value- weighted (highest) idiosyncratic stocks from 1 month ago, 1/12th of the value- weighted lowest (highest) idiosyncratic stocks from 2 months ago, etc.",
          "page": 26,
          "line_start": 1278,
          "line_end": 1329,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/ang-2006-publisher.txt",
          "href": "../papers/ang-2006/ang-hodrick-xing-zhang-2006.pdf#page=26",
          "open_label": "查看 PDF 第 26 页"
        },
        {
          "text": "We form value-weighted quintile portfolios every month by sorting stocks based on total volatility and idiosyncratic volatility relative to the Fama–French (1993) model.",
          "page": 27,
          "line_start": 1368,
          "line_end": 1413,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/ang-2006-publisher.txt",
          "href": "../papers/ang-2006/ang-hodrick-xing-zhang-2006.pdf#page=27",
          "open_label": "查看 PDF 第 27 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "ang-2006",
        "title": "The Cross-Section of Volatility and Expected Returns",
        "authors": "Andrew Ang; Robert J. Hodrick; Yuhang Xing; Xiaoyan Zhang",
        "year": "2006",
        "venue": "The Journal of Finance",
        "doi": "10.1111/j.1540-6261.2006.00836.x",
        "source_url": "https://doi.org/10.1111/j.1540-6261.2006.00836.x",
        "local_file": "papers/ang-2006/ang-hodrick-xing-zhang-2006.pdf",
        "local_href": "../papers/ang-2006/ang-hodrick-xing-zhang-2006.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 41,
        "access_status": "full_text_pdf_author_final"
      },
      "method_variants": [
        {
          "id": "ang-2006",
          "source_id": "ang-2006",
          "role": "original_paper",
          "source_label": "Ang, Hodrick, Xing & Zhang — The Cross-Section of Volatility and Expected Returns",
          "source_year": "2006",
          "formula": "RET − RF = α + βMKT(MKT−RF) + βSMB·SMB + βHML·HML + ε; RVAR_FF3 = Var(ε)",
          "formula_latex": "\\(\\displaystyle \\mathrm{RET}_{i,d}-\\mathrm{RF}_{d}=\\alpha_i+\\beta_i^{M}(\\mathrm{MKT}_{d}-\\mathrm{RF}_{d})+\\beta_i^{S}\\mathrm{SMB}_{d}+\\beta_i^{H}\\mathrm{HML}_{d}+\\varepsilon_{i,d},\\quad \\mathrm{RVAR\\_FF3}_{i,t}=\\operatorname{Var}(\\varepsilon_{i,d})\\)",
          "data_fields": "CRSP daily: RET; Fama–French daily: RF, MKT−RF, SMB, HML",
          "calculation_window": {
            "zh": "组合形成日前 1 个月的日收益；论文主规格为 1/0/1。",
            "en": "Daily returns over the previous month; the paper's main specification is 1/0/1."
          },
          "accounting_lag": {
            "zh": "等待期 0 个月。",
            "en": "Zero-month waiting period."
          },
          "portfolio_rule": {
            "zh": "每月市值加权五分位，持有 1 个月；做多低波动 Q1、做空高波动 Q5。",
            "en": "Monthly value-weighted quintiles held for one month; long low-volatility Q1 and short high-volatility Q5."
          },
          "direction": "L-H",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "这是论文正文采用的特质波动率主口径。",
            "en": "This is the paper's main idiosyncratic-volatility specification."
          },
          "source_path": "papers/ang-2006/ang-hodrick-xing-zhang-2006.pdf",
          "source_page": 25,
          "source_href": "../papers/ang-2006/ang-hodrick-xing-zhang-2006.pdf#page=25"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{RVAR\\_FF3}_{i,t}=\\frac{1}{w-1}\\sum_{s=t-w+1}^{t}(\\varepsilon_{i,s}-\\overline{\\varepsilon}_{i,t})^2\\), where \\(\\varepsilon\\) is from a rolling Fama--French three-factor regression.",
        "formula_direction": "-1",
        "data_fields": "Derived/intermediate variables; raw fields not stated",
        "calculation_window": {
          "zh": "日频输入；滚动 3 个月，至少 21 个观测。",
          "en": "Daily inputs; rolling three months with at least 21 observations."
        },
        "accounting_lag": {
          "zh": "信号在 t 月形成；最终输出将收益移至 t+1 月。",
          "en": "The signal is formed at month t; final output shifts the return to month t+1."
        },
        "source_label": "EquityChars CIZ · rolling_chars.py · L285",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/rolling_chars.py#L285",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/rolling_chars.py",
        "code_lines": "285",
        "code_frequency": {
          "zh": "日频输入；滚动 3 个月，至少 21 个观测。",
          "en": "Daily inputs; rolling three months with at least 21 observations."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      }
    },
    {
      "id": "rvar_mean",
      "name": "return variance rolling 3m",
      "signal_definition": "return variance rolling 3m",
      "sort_variable": "rvar_mean",
      "code_direction": "L-H",
      "paper_direction": "L-H",
      "direction_label": "低值做多 · 高值做空",
      "agreement": "yes",
      "status": "paper_direction_verified",
      "code_long_leg": "Low",
      "code_short_leg": "High",
      "code_notes": "Repo attribution: Daily Stock return variance (). Formula table has no entry for this signal.",
      "raw_signal": "total variance of daily stock returns",
      "construction_summary": "Ang et al. (2006) also sort directly on total volatility. The final article forms monthly value-weighted quintiles using daily data from the previous month; the highest-minus-lowest portfolio return is negative, implying low total variance minus high total variance.",
      "sample_and_timing": "Published benchmark: July 1963-December 2000; daily returns over the previous month, monthly portfolio formation. Repository method label: rolling three-month daily-return window.",
      "breakpoints": "Monthly quintiles from lowest to highest total volatility.",
      "weighting": "Value-weighted quintile portfolios.",
      "rebalancing_frequency": "Monthly.",
      "holding_period": "One month in the paper.",
      "paper_long_leg": "lowest total-volatility quintile",
      "paper_short_leg": "highest total-volatility quintile",
      "confidence": "medium",
      "evidence_type": "related_publisher_final_window_mismatch",
      "evidence_pointer": "extracted-text/ang-2006-publisher.txt:1294-1329,1368-1413",
      "reviewer_notes": "The final Journal of Finance article directly verifies the low-versus-high direction for total volatility. EquityChars uses a three-month rolling window rather than the paper's main one-month window.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "We concentrate most of our analysis on the 1/0/1 strategy, in which we simply sort stocks into quintile portfolios based on their level of idiosyncratic volatility computed using daily returns over the past month, and we hold these value- weighted portfolios for 1 month.",
          "page": 25,
          "line_start": 1294,
          "line_end": 1329,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/ang-2006-publisher.txt",
          "href": "../papers/ang-2006/ang-hodrick-xing-zhang-2006.pdf#page=25",
          "open_label": "查看 PDF 第 25 页"
        },
        {
          "text": "The first (fifth) quintile portfolio consists of 1/12th of the lowest value- weighted (highest) idiosyncratic stocks from 1 month ago, 1/12th of the value- weighted lowest (highest) idiosyncratic stocks from 2 months ago, etc.",
          "page": 26,
          "line_start": 1294,
          "line_end": 1329,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/ang-2006-publisher.txt",
          "href": "../papers/ang-2006/ang-hodrick-xing-zhang-2006.pdf#page=26",
          "open_label": "查看 PDF 第 26 页"
        },
        {
          "text": "We form value-weighted quintile portfolios every month by sorting stocks based on total volatility and idiosyncratic volatility relative to the Fama–French (1993) model.",
          "page": 27,
          "line_start": 1368,
          "line_end": 1413,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/ang-2006-publisher.txt",
          "href": "../papers/ang-2006/ang-hodrick-xing-zhang-2006.pdf#page=27",
          "open_label": "查看 PDF 第 27 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "ang-2006",
        "title": "The Cross-Section of Volatility and Expected Returns",
        "authors": "Andrew Ang; Robert J. Hodrick; Yuhang Xing; Xiaoyan Zhang",
        "year": "2006",
        "venue": "The Journal of Finance",
        "doi": "10.1111/j.1540-6261.2006.00836.x",
        "source_url": "https://doi.org/10.1111/j.1540-6261.2006.00836.x",
        "local_file": "papers/ang-2006/ang-hodrick-xing-zhang-2006.pdf",
        "local_href": "../papers/ang-2006/ang-hodrick-xing-zhang-2006.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 41,
        "access_status": "full_text_pdf_author_final"
      },
      "method_variants": [
        {
          "id": "ang-2006",
          "source_id": "ang-2006",
          "role": "original_paper",
          "source_label": "Ang, Hodrick, Xing & Zhang — The Cross-Section of Volatility and Expected Returns",
          "source_year": "2006",
          "formula": "RVAR_MEAN = Var(daily RET)",
          "formula_latex": "\\(\\displaystyle \\mathrm{RVAR\\_MEAN}_{i,t}=\\operatorname{Var}_{d\\in W_t}(\\mathrm{RET}_{i,d})\\)",
          "data_fields": "CRSP daily: RET",
          "calculation_window": {
            "zh": "组合形成日前 1 个月的日收益；论文主规格为 1/0/1。",
            "en": "Daily returns over the previous month; the paper's main specification is 1/0/1."
          },
          "accounting_lag": {
            "zh": "等待期 0 个月。",
            "en": "Zero-month waiting period."
          },
          "portfolio_rule": {
            "zh": "每月市值加权五分位，持有 1 个月；做多低总波动 Q1、做空高总波动 Q5。",
            "en": "Monthly value-weighted quintiles held for one month; long low-total-volatility Q1 and short high-total-volatility Q5."
          },
          "direction": "L-H",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "论文 Table VI Panel A 的 total volatility 口径。",
            "en": "This is the total-volatility specification in Table VI, Panel A."
          },
          "source_path": "papers/ang-2006/ang-hodrick-xing-zhang-2006.pdf",
          "source_page": 26,
          "source_href": "../papers/ang-2006/ang-hodrick-xing-zhang-2006.pdf#page=26"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{RVAR\\_MEAN}_{i,t}=\\frac{1}{w-1}\\sum_{s=t-w+1}^{t}(\\mathrm{RET}_{i,s}-\\overline{\\mathrm{RET}}_{i,t})^2\\)",
        "formula_direction": "",
        "data_fields": "CRSP daily: RET",
        "calculation_window": {
          "zh": "日频输入；滚动 3 个月，至少 21 个观测。",
          "en": "Daily inputs; rolling three months with at least 21 observations."
        },
        "accounting_lag": {
          "zh": "信号在 t 月形成；最终输出将收益移至 t+1 月。",
          "en": "The signal is formed at month t; final output shifts the return to month t+1."
        },
        "source_label": "EquityChars CIZ · rolling_chars.py · L144",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/rolling_chars.py#L144",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/rolling_chars.py",
        "code_lines": "144",
        "code_frequency": {
          "zh": "日频输入；滚动 3 个月，至少 21 个观测。",
          "en": "Daily inputs; rolling three months with at least 21 observations."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      }
    },
    {
      "id": "salecash",
      "name": "Sales to cash",
      "signal_definition": "Sales to cash",
      "sort_variable": "salecash",
      "code_direction": "H-L",
      "paper_direction": "not-simple",
      "direction_label": "非简单多空",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Ou and Penman (1989). Formula table has no entry for this signal.",
      "raw_signal": "Sales to total cash",
      "construction_summary": "The paper treats sales to total cash as one accounting descriptor among a large candidate set and combines selected descriptors through a stepwise logit into composite Pr. It does not form a univariate salecash portfolio.",
      "sample_and_timing": "Descriptors are estimated on 1965-1972 or 1973-1977 data; annual positions are formed for 1973-1983 three months after fiscal year-end.",
      "breakpoints": "The published portfolio cutoffs apply to composite Pr (>0.6 versus <=0.4), not to salecash.",
      "weighting": "Mean monthly returns on each composite position; the reported hedge is the zero-investment difference between the two sides.",
      "rebalancing_frequency": "Annual overlapping formation with monthly portfolio rebalancing in the cumulative-return calculation.",
      "holding_period": "24 months.",
      "paper_long_leg": "Composite portfolio only: Pr > 0.6; no univariate salecash long leg.",
      "paper_short_leg": "Composite portfolio only: Pr <= 0.4; no univariate salecash short leg.",
      "confidence": "high",
      "evidence_type": "author_institution_full_text",
      "evidence_pointer": "extracted-text/ou-1989.txt:396-470 (Table 2),535-617 (Table 3),665-685 (preset strategy),860-890 (Table 6 notes); papers/ou-1989/ou-1989.pdf",
      "reviewer_notes": "The source's H-L rule is for composite Pr, not this input descriptor.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "We then drop all variables for which coefficient estimates in this multivariate estimation are not significant at the 0.10 level, leaving 19 variables for the 1965-1972 period and 18 for the 1973-1977 6The first period is longer than the second because of the need to calculate an earnings drift term over four years preceding the relevant earnings prediction year and because the 1984 COMPUSTAT files used have data only from 1965 onwards.",
          "page": 9,
          "line_start": 396,
          "line_end": 470,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/ou-1989.txt",
          "href": "../papers/ou-1989/ou-1989.pdf#page=9",
          "open_label": "查看 PDF 第 9 页"
        },
        {
          "text": "1965-1972 estimation Accounting descriptor a Current ratio %A in 1 Quick ratio %A in 3 Days sales in accs. receivable 15632 %A in 5 Inventory turnover %Zl in 7 Inventory/total assets %A in 9 %A in inventory %A in sales %A in depreciation A in dividend per share Depreciation/plant assets %zi in 15 Return on opening equity A in 17 %A in (capital expenditure/ 13378 19, one-year lag Debt-equity ratio %A in 21 LT debt to equity %A in 23 Equity to fixed assets %A in 25 Times interest earned %A in 27 Sales/total assets %A in 29 Return on total assets Return on closing equity Gross margin ratio %A in 33",
          "page": 10,
          "line_start": 396,
          "line_end": 470,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/ou-1989.txt",
          "href": "../papers/ou-1989/ou-1989.pdf#page=10",
          "open_label": "查看 PDF 第 10 页"
        },
        {
          "text": "Op. profit (before dep.) to sales %A in 35 Pretax income to sales %A in 37 Net profit margin %A in 39 Sales to total cash Sales to accs. receivable Sales to inventory %A in 43 Sales to working capital %A in 45 Sales to fixed assets %A in production %A in R & D %A in ( R & D / s a l e s ) %A in advertising expense %A in (advertising/sales) %A in total assets Cash flow to total debt Working c a p i t a l / t o t a l assets 15604 0.0850 1.16 0.282",
          "page": 11,
          "line_start": 396,
          "line_end": 470,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/ou-1989.txt",
          "href": "../papers/ou-1989/ou-1989.pdf#page=11",
          "open_label": "查看 PDF 第 11 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "ou-1989",
        "title": "Financial statement analysis and the prediction of stock returns",
        "authors": "Jane A. Ou and Stephen H. Penman",
        "year": "1989",
        "venue": "Journal of Accounting and Economics",
        "doi": "10.1016/0165-4101(89)90017-7",
        "source_url": "https://doi.org/10.1016/0165-4101(89)90017-7",
        "local_file": "papers/ou-1989/ou-1989.pdf",
        "local_href": "../papers/ou-1989/ou-1989.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 35,
        "access_status": "full_text_pdf_author_institution"
      },
      "method_variants": [
        {
          "id": "ou-1989",
          "source_id": "ou-1989",
          "role": "original_paper",
          "source_label": "Financial statement analysis and the prediction of stock returns",
          "source_year": "1989",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{SALECASH}_{i,t}=\\frac{\\mathrm{SALE}_{i,t}}{\\mathrm{CHE}_{i,t}}\\)",
          "data_fields": "Sales to total cash",
          "calculation_window": {
            "zh": "Descriptors are estimated on 1965-1972 or 1973-1977 data; annual positions are formed for 1973-1983 three months after fiscal year-end.",
            "en": "Descriptors are estimated on 1965-1972 or 1973-1977 data; annual positions are formed for 1973-1983 three months after fiscal year-end."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "The published portfolio cutoffs apply to composite Pr (>0.6 versus <=0.4), not to salecash. Mean monthly returns on each composite position; the reported hedge is the zero-investment difference between the two sides. Annual overlapping formation with monthly portfolio rebalancing in the cumulative-return calculation. 24 months.",
            "en": "The published portfolio cutoffs apply to composite Pr (>0.6 versus <=0.4), not to salecash. Mean monthly returns on each composite position; the reported hedge is the zero-investment difference between the two sides. Annual overlapping formation with monthly portfolio rebalancing in the cumulative-return calculation. 24 months."
          },
          "direction": "not-simple",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/ou-1989/ou-1989.pdf",
          "source_page": 9,
          "source_href": "../papers/ou-1989/ou-1989.pdf#page=9"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{SALECASH}_{i,t}=\\frac{\\mathrm{SALE}_{i,t}}{\\mathrm{CHE}_{i,t}}\\)",
        "formula_direction": "",
        "data_fields": "Compustat: SALE, CHE",
        "calculation_window": {
          "zh": "年频。",
          "en": "Annual."
        },
        "accounting_lag": {
          "zh": "按 chars_ciz 年频 jdate 对齐；未另行添加页面假设。",
          "en": "Aligned by the chars_ciz annual jdate rule; the page adds no extra assumption."
        },
        "source_label": "EquityChars CIZ · accounting.py · L827",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L827",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "827",
        "code_frequency": {
          "zh": "年频。",
          "en": "Annual."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      },
      "method_design": {
        "family": "multivariate_prediction_model",
        "summary": {
          "zh": "销售收入与现金之比作为候选会计变量进入逐步Logit模型，用于估计下一年度盈利增加的概率Pr；组合按Pr阈值形成。",
          "en": "The paper treats sales to total cash as one accounting descriptor among a large candidate set and combines selected descriptors through a stepwise logit into composite Pr. It does not form a univariate salecash portfolio."
        },
        "signal_role": {
          "zh": "多变量模型的候选解释变量",
          "en": "Candidate predictor in a multivariate model"
        },
        "estimand": {
          "zh": "下一年度盈利增加的预测概率Pr",
          "en": "Predicted probability Pr of a one-year-ahead earnings increase"
        },
        "interpretation": {
          "zh": "该变量仅是综合预测模型的输入；论文交易对象是预测概率Pr，而不是该变量的单变量多空组合。",
          "en": ""
        }
      }
    },
    {
      "id": "saleinv",
      "name": "Sales to inventory",
      "signal_definition": "Sales to inventory",
      "sort_variable": "saleinv",
      "code_direction": "H-L",
      "paper_direction": "not-simple",
      "direction_label": "非简单多空",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Ou and Penman (1989). Formula table has no entry for this signal.",
      "raw_signal": "Sales to inventory",
      "construction_summary": "The paper treats sales to inventory as one accounting descriptor among a large candidate set and combines selected descriptors through a stepwise logit into composite Pr. It does not form a univariate saleinv portfolio.",
      "sample_and_timing": "Descriptors are estimated on 1965-1972 or 1973-1977 data; annual positions are formed for 1973-1983 three months after fiscal year-end.",
      "breakpoints": "The published portfolio cutoffs apply to composite Pr (>0.6 versus <=0.4), not to saleinv.",
      "weighting": "Mean monthly returns on each composite position; the reported hedge is the zero-investment difference between the two sides.",
      "rebalancing_frequency": "Annual overlapping formation with monthly portfolio rebalancing in the cumulative-return calculation.",
      "holding_period": "24 months.",
      "paper_long_leg": "Composite portfolio only: Pr > 0.6; no univariate saleinv long leg.",
      "paper_short_leg": "Composite portfolio only: Pr <= 0.4; no univariate saleinv short leg.",
      "confidence": "high",
      "evidence_type": "author_institution_full_text",
      "evidence_pointer": "extracted-text/ou-1989.txt:396-470 (Table 2),535-617 (Table 3),665-685 (preset strategy),860-890 (Table 6 notes); papers/ou-1989/ou-1989.pdf",
      "reviewer_notes": "The source's H-L rule is for composite Pr, not this input descriptor.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "We then drop all variables for which coefficient estimates in this multivariate estimation are not significant at the 0.10 level, leaving 19 variables for the 1965-1972 period and 18 for the 1973-1977 6The first period is longer than the second because of the need to calculate an earnings drift term over four years preceding the relevant earnings prediction year and because the 1984 COMPUSTAT files used have data only from 1965 onwards.",
          "page": 9,
          "line_start": 396,
          "line_end": 470,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/ou-1989.txt",
          "href": "../papers/ou-1989/ou-1989.pdf#page=9",
          "open_label": "查看 PDF 第 9 页"
        },
        {
          "text": "1965-1972 estimation Accounting descriptor a Current ratio %A in 1 Quick ratio %A in 3 Days sales in accs. receivable 15632 %A in 5 Inventory turnover %Zl in 7 Inventory/total assets %A in 9 %A in inventory %A in sales %A in depreciation A in dividend per share Depreciation/plant assets %zi in 15 Return on opening equity A in 17 %A in (capital expenditure/ 13378 19, one-year lag Debt-equity ratio %A in 21 LT debt to equity %A in 23 Equity to fixed assets %A in 25 Times interest earned %A in 27 Sales/total assets %A in 29 Return on total assets Return on closing equity Gross margin ratio %A in 33",
          "page": 10,
          "line_start": 396,
          "line_end": 470,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/ou-1989.txt",
          "href": "../papers/ou-1989/ou-1989.pdf#page=10",
          "open_label": "查看 PDF 第 10 页"
        },
        {
          "text": "Op. profit (before dep.) to sales %A in 35 Pretax income to sales %A in 37 Net profit margin %A in 39 Sales to total cash Sales to accs. receivable Sales to inventory %A in 43 Sales to working capital %A in 45 Sales to fixed assets %A in production %A in R & D %A in ( R & D / s a l e s ) %A in advertising expense %A in (advertising/sales) %A in total assets Cash flow to total debt Working c a p i t a l / t o t a l assets 15604 0.0850 1.16 0.282",
          "page": 11,
          "line_start": 396,
          "line_end": 470,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/ou-1989.txt",
          "href": "../papers/ou-1989/ou-1989.pdf#page=11",
          "open_label": "查看 PDF 第 11 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "ou-1989",
        "title": "Financial statement analysis and the prediction of stock returns",
        "authors": "Jane A. Ou and Stephen H. Penman",
        "year": "1989",
        "venue": "Journal of Accounting and Economics",
        "doi": "10.1016/0165-4101(89)90017-7",
        "source_url": "https://doi.org/10.1016/0165-4101(89)90017-7",
        "local_file": "papers/ou-1989/ou-1989.pdf",
        "local_href": "../papers/ou-1989/ou-1989.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 35,
        "access_status": "full_text_pdf_author_institution"
      },
      "method_variants": [
        {
          "id": "ou-1989",
          "source_id": "ou-1989",
          "role": "original_paper",
          "source_label": "Financial statement analysis and the prediction of stock returns",
          "source_year": "1989",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{SALEINV}_{i,t}=\\frac{\\mathrm{SALE}_{i,t}}{\\mathrm{INVT}_{i,t}}\\)",
          "data_fields": "Sales to inventory",
          "calculation_window": {
            "zh": "Descriptors are estimated on 1965-1972 or 1973-1977 data; annual positions are formed for 1973-1983 three months after fiscal year-end.",
            "en": "Descriptors are estimated on 1965-1972 or 1973-1977 data; annual positions are formed for 1973-1983 three months after fiscal year-end."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "The published portfolio cutoffs apply to composite Pr (>0.6 versus <=0.4), not to saleinv. Mean monthly returns on each composite position; the reported hedge is the zero-investment difference between the two sides. Annual overlapping formation with monthly portfolio rebalancing in the cumulative-return calculation. 24 months.",
            "en": "The published portfolio cutoffs apply to composite Pr (>0.6 versus <=0.4), not to saleinv. Mean monthly returns on each composite position; the reported hedge is the zero-investment difference between the two sides. Annual overlapping formation with monthly portfolio rebalancing in the cumulative-return calculation. 24 months."
          },
          "direction": "not-simple",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/ou-1989/ou-1989.pdf",
          "source_page": 9,
          "source_href": "../papers/ou-1989/ou-1989.pdf#page=9"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{SALEINV}_{i,t}=\\frac{\\mathrm{SALE}_{i,t}}{\\mathrm{INVT}_{i,t}}\\)",
        "formula_direction": "",
        "data_fields": "Compustat: SALE, INVT",
        "calculation_window": {
          "zh": "年频。",
          "en": "Annual."
        },
        "accounting_lag": {
          "zh": "按 chars_ciz 年频 jdate 对齐；未另行添加页面假设。",
          "en": "Aligned by the chars_ciz annual jdate rule; the page adds no extra assumption."
        },
        "source_label": "EquityChars CIZ · accounting.py · L837",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L837",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "837",
        "code_frequency": {
          "zh": "年频。",
          "en": "Annual."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      },
      "method_design": {
        "family": "multivariate_prediction_model",
        "summary": {
          "zh": "销售收入与存货之比作为候选会计变量进入逐步Logit模型，用于估计下一年度盈利增加的概率Pr；组合按Pr阈值形成。",
          "en": "The paper treats sales to inventory as one accounting descriptor among a large candidate set and combines selected descriptors through a stepwise logit into composite Pr. It does not form a univariate saleinv portfolio."
        },
        "signal_role": {
          "zh": "多变量模型的候选解释变量",
          "en": "Candidate predictor in a multivariate model"
        },
        "estimand": {
          "zh": "下一年度盈利增加的预测概率Pr",
          "en": "Predicted probability Pr of a one-year-ahead earnings increase"
        },
        "interpretation": {
          "zh": "该变量仅是综合预测模型的输入；论文交易对象是预测概率Pr，而不是该变量的单变量多空组合。",
          "en": ""
        }
      }
    },
    {
      "id": "salerec",
      "name": "Sales to receivables",
      "signal_definition": "Sales to receivables",
      "sort_variable": "salerec",
      "code_direction": "H-L",
      "paper_direction": "not-simple",
      "direction_label": "非简单多空",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Ou and Penman (1989). Formula table has no entry for this signal.",
      "raw_signal": "Sales to accounts receivable",
      "construction_summary": "The paper treats sales to accounts receivable as one accounting descriptor among a large candidate set and combines selected descriptors through a stepwise logit into composite Pr. It does not form a univariate salerec portfolio.",
      "sample_and_timing": "Descriptors are estimated on 1965-1972 or 1973-1977 data; annual positions are formed for 1973-1983 three months after fiscal year-end.",
      "breakpoints": "The published portfolio cutoffs apply to composite Pr (>0.6 versus <=0.4), not to salerec.",
      "weighting": "Mean monthly returns on each composite position; the reported hedge is the zero-investment difference between the two sides.",
      "rebalancing_frequency": "Annual overlapping formation with monthly portfolio rebalancing in the cumulative-return calculation.",
      "holding_period": "24 months.",
      "paper_long_leg": "Composite portfolio only: Pr > 0.6; no univariate salerec long leg.",
      "paper_short_leg": "Composite portfolio only: Pr <= 0.4; no univariate salerec short leg.",
      "confidence": "high",
      "evidence_type": "author_institution_full_text",
      "evidence_pointer": "extracted-text/ou-1989.txt:396-470 (Table 2),535-617 (Table 3),665-685 (preset strategy),860-890 (Table 6 notes); papers/ou-1989/ou-1989.pdf",
      "reviewer_notes": "The source's H-L rule is for composite Pr, not this input descriptor.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "We then drop all variables for which coefficient estimates in this multivariate estimation are not significant at the 0.10 level, leaving 19 variables for the 1965-1972 period and 18 for the 1973-1977 6The first period is longer than the second because of the need to calculate an earnings drift term over four years preceding the relevant earnings prediction year and because the 1984 COMPUSTAT files used have data only from 1965 onwards.",
          "page": 9,
          "line_start": 396,
          "line_end": 470,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/ou-1989.txt",
          "href": "../papers/ou-1989/ou-1989.pdf#page=9",
          "open_label": "查看 PDF 第 9 页"
        },
        {
          "text": "1965-1972 estimation Accounting descriptor a Current ratio %A in 1 Quick ratio %A in 3 Days sales in accs. receivable 15632 %A in 5 Inventory turnover %Zl in 7 Inventory/total assets %A in 9 %A in inventory %A in sales %A in depreciation A in dividend per share Depreciation/plant assets %zi in 15 Return on opening equity A in 17 %A in (capital expenditure/ 13378 19, one-year lag Debt-equity ratio %A in 21 LT debt to equity %A in 23 Equity to fixed assets %A in 25 Times interest earned %A in 27 Sales/total assets %A in 29 Return on total assets Return on closing equity Gross margin ratio %A in 33",
          "page": 10,
          "line_start": 396,
          "line_end": 470,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/ou-1989.txt",
          "href": "../papers/ou-1989/ou-1989.pdf#page=10",
          "open_label": "查看 PDF 第 10 页"
        },
        {
          "text": "Op. profit (before dep.) to sales %A in 35 Pretax income to sales %A in 37 Net profit margin %A in 39 Sales to total cash Sales to accs. receivable Sales to inventory %A in 43 Sales to working capital %A in 45 Sales to fixed assets %A in production %A in R & D %A in ( R & D / s a l e s ) %A in advertising expense %A in (advertising/sales) %A in total assets Cash flow to total debt Working c a p i t a l / t o t a l assets 15604 0.0850 1.16 0.282",
          "page": 11,
          "line_start": 396,
          "line_end": 470,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/ou-1989.txt",
          "href": "../papers/ou-1989/ou-1989.pdf#page=11",
          "open_label": "查看 PDF 第 11 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "ou-1989",
        "title": "Financial statement analysis and the prediction of stock returns",
        "authors": "Jane A. Ou and Stephen H. Penman",
        "year": "1989",
        "venue": "Journal of Accounting and Economics",
        "doi": "10.1016/0165-4101(89)90017-7",
        "source_url": "https://doi.org/10.1016/0165-4101(89)90017-7",
        "local_file": "papers/ou-1989/ou-1989.pdf",
        "local_href": "../papers/ou-1989/ou-1989.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 35,
        "access_status": "full_text_pdf_author_institution"
      },
      "method_variants": [
        {
          "id": "ou-1989",
          "source_id": "ou-1989",
          "role": "original_paper",
          "source_label": "Financial statement analysis and the prediction of stock returns",
          "source_year": "1989",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{SALEREC}_{i,t}=\\frac{\\mathrm{SALE}_{i,t}}{\\mathrm{RECT}_{i,t}}\\)",
          "data_fields": "Sales to accounts receivable",
          "calculation_window": {
            "zh": "Descriptors are estimated on 1965-1972 or 1973-1977 data; annual positions are formed for 1973-1983 three months after fiscal year-end.",
            "en": "Descriptors are estimated on 1965-1972 or 1973-1977 data; annual positions are formed for 1973-1983 three months after fiscal year-end."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "The published portfolio cutoffs apply to composite Pr (>0.6 versus <=0.4), not to salerec. Mean monthly returns on each composite position; the reported hedge is the zero-investment difference between the two sides. Annual overlapping formation with monthly portfolio rebalancing in the cumulative-return calculation. 24 months.",
            "en": "The published portfolio cutoffs apply to composite Pr (>0.6 versus <=0.4), not to salerec. Mean monthly returns on each composite position; the reported hedge is the zero-investment difference between the two sides. Annual overlapping formation with monthly portfolio rebalancing in the cumulative-return calculation. 24 months."
          },
          "direction": "not-simple",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/ou-1989/ou-1989.pdf",
          "source_page": 9,
          "source_href": "../papers/ou-1989/ou-1989.pdf#page=9"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{SALEREC}_{i,t}=\\frac{\\mathrm{SALE}_{i,t}}{\\mathrm{RECT}_{i,t}}\\)",
        "formula_direction": "",
        "data_fields": "Compustat: SALE, RECT",
        "calculation_window": {
          "zh": "年频。",
          "en": "Annual."
        },
        "accounting_lag": {
          "zh": "按 chars_ciz 年频 jdate 对齐；未另行添加页面假设。",
          "en": "Aligned by the chars_ciz annual jdate rule; the page adds no extra assumption."
        },
        "source_label": "EquityChars CIZ · accounting.py · L832",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L832",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "832",
        "code_frequency": {
          "zh": "年频。",
          "en": "Annual."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      },
      "method_design": {
        "family": "multivariate_prediction_model",
        "summary": {
          "zh": "销售收入与应收账款之比作为候选会计变量进入逐步Logit模型，用于估计下一年度盈利增加的概率Pr；组合按Pr阈值形成。",
          "en": "The paper treats sales to accounts receivable as one accounting descriptor among a large candidate set and combines selected descriptors through a stepwise logit into composite Pr. It does not form a univariate salerec portfolio."
        },
        "signal_role": {
          "zh": "多变量模型的候选解释变量",
          "en": "Candidate predictor in a multivariate model"
        },
        "estimand": {
          "zh": "下一年度盈利增加的预测概率Pr",
          "en": "Predicted probability Pr of a one-year-ahead earnings increase"
        },
        "interpretation": {
          "zh": "该变量仅是综合预测模型的输入；论文交易对象是预测概率Pr，而不是该变量的单变量多空组合。",
          "en": ""
        }
      }
    },
    {
      "id": "seas1a",
      "name": "Seasonality",
      "signal_definition": "Seasonality",
      "sort_variable": "seas1a",
      "code_direction": "H-L",
      "paper_direction": "H-L",
      "direction_label": "高值做多 · 低值做空",
      "agreement": "yes",
      "status": "paper_direction_verified",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Heston and Sadka (2008). Formula table direction: +1.",
      "raw_signal": "Past same-calendar-month return at the 12-month annual lag",
      "construction_summary": "The published article ranks stocks each month by past performance; its one-year annual strategy sorts on the return exactly 12 months earlier and explicitly buys winners and sells losers.",
      "sample_and_timing": "January 1965-December 2002 monthly returns for NYSE- and AMEX-listed stocks.",
      "breakpoints": "Ten portfolios with equal numbers of stocks; seas1a sorts on the 12-month lagged return.",
      "weighting": "Equal-weighted portfolios.",
      "rebalancing_frequency": "Monthly.",
      "holding_period": "Next month.",
      "paper_long_leg": "Highest past same-calendar-month return decile / winners.",
      "paper_short_leg": "Lowest past same-calendar-month return decile / losers.",
      "confidence": "high",
      "evidence_type": "publisher_full_text",
      "evidence_pointer": "extracted-text/heston-2008-publisher.txt:15,30-32,287-291,650-657",
      "reviewer_notes": "Verified against the formal Journal of Financial Economics publisher full text; the 12-month winner-minus-loser direction is explicit.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "Stocks tend to have relatively high (or low) returns every year in the same calendar month.",
          "page": 1,
          "line_start": 15,
          "line_end": 15,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/heston-2008-publisher.txt",
          "href": "../papers/heston-2008/heston-2008-publisher-fulltext.html#:~:text=Stocks%20tend%20to%20have%20relatively%20high%20%28or%20low%29%20returns%20every%20year%20in%20the%20same%20calendar%20month.",
          "open_label": "在本地 HTML 中定位"
        },
        {
          "text": "Stocks that are winners in a given month continue to outperform stocks that are losers in that same calendar month, for up to 20 years.",
          "page": 1,
          "line_start": 30,
          "line_end": 32,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/heston-2008-publisher.txt",
          "href": "../papers/heston-2008/heston-2008-publisher-fulltext.html#:~:text=Stocks%20that%20are%20winners%20in%20a%20given%20month%20continue%20to%20outperform%20stocks%20that%20are%20losers%20in%20that%20same%20calendar%20month%2C%20for%20up%20to%2020%20years.",
          "open_label": "在本地 HTML 中定位"
        },
        {
          "text": "We form decile portfolios based on the average monthly return of stocks over all months in each lagged interval and measure the returns over the next month.",
          "page": 1,
          "line_start": 287,
          "line_end": 291,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/heston-2008-publisher.txt",
          "href": "../papers/heston-2008/heston-2008-publisher-fulltext.html#:~:text=We%20form%20decile%20portfolios%20based%20on%20the%20average%20monthly%20return%20of%20stocks%20over%20all%20months%20in%20each%20lagged%20interval%20and%20measure%20the%20returns%20over%20the%20next%20month.",
          "open_label": "在本地 HTML 中定位"
        },
        {
          "text": "Risk-adjusted returns of past-performance-based strategies Every month stocks are grouped into ten portfolios (with equal number of stocks in each portfolio) according to various categories based on past performance.",
          "page": 1,
          "line_start": 650,
          "line_end": 657,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/heston-2008-publisher.txt",
          "href": "../papers/heston-2008/heston-2008-publisher-fulltext.html#:~:text=Risk-adjusted%20returns%20of%20past-performance-based%20strategies%20Every%20month%20stocks%20are%20grouped%20into%20ten%20portfolios%20%28with%20equal%20number%20of%20stocks%20in%20each%20portfolio%29%20according%20to%20various%20c",
          "open_label": "在本地 HTML 中定位"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "heston-2008",
        "title": "Seasonality in the cross-section of stock returns",
        "authors": "Steven L. Heston; Ronnie Sadka",
        "year": "2008",
        "venue": "Journal of Financial Economics, 87(2), 418-445",
        "doi": "10.1016/j.jfineco.2007.02.003",
        "source_url": "https://doi.org/10.1016/j.jfineco.2007.02.003",
        "local_file": "papers/heston-2008/heston-2008-publisher-fulltext.html",
        "local_href": "../papers/heston-2008/heston-2008-publisher-fulltext.html",
        "artifact_type": "html",
        "pdf_pages": null,
        "access_status": "full_text_html_publisher_verified"
      },
      "method_variants": [
        {
          "id": "heston-2008",
          "source_id": "heston-2008",
          "role": "original_paper",
          "source_label": "Seasonality in the cross-section of stock returns",
          "source_year": "2008",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{SEAS1A}_{i,t}=R_{i,t-12}\\)",
          "data_fields": "Past same-calendar-month return at the 12-month annual lag",
          "calculation_window": {
            "zh": "January 1965-December 2002 monthly returns for NYSE- and AMEX-listed stocks.",
            "en": "January 1965-December 2002 monthly returns for NYSE- and AMEX-listed stocks."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Ten portfolios with equal numbers of stocks; seas1a sorts on the 12-month lagged return. Equal-weighted portfolios. Monthly. Next month.",
            "en": "Ten portfolios with equal numbers of stocks; seas1a sorts on the 12-month lagged return. Equal-weighted portfolios. Monthly. Next month."
          },
          "direction": "H-L",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/heston-2008/heston-2008-publisher-fulltext.html",
          "source_page": 1,
          "source_href": "../papers/heston-2008/heston-2008-publisher-fulltext.html#:~:text=Stocks%20tend%20to%20have%20relatively%20high%20%28or%20low%29%20returns%20every%20year%20in%20the%20same%20calendar%20month."
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{SEAS1A}_{i,t}=\\mathrm{RET}_{i,t-11}\\)",
        "formula_direction": "+1",
        "data_fields": "CRSP: RET",
        "calculation_window": {
          "zh": "月频。",
          "en": "Monthly."
        },
        "accounting_lag": {
          "zh": "信号在 t 月形成；最终输出将收益移至 t+1 月。",
          "en": "The signal is formed at month t; final output shifts the return to month t+1."
        },
        "source_label": "EquityChars CIZ · accounting.py · L2131",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L2131",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "2131",
        "code_frequency": {
          "zh": "月频。",
          "en": "Monthly."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      }
    },
    {
      "id": "secured",
      "name": "Secured debt",
      "signal_definition": "Secured debt",
      "sort_variable": "secured",
      "code_direction": "H-L",
      "paper_direction": "H-L",
      "direction_label": "高值做多 · 低值做空",
      "agreement": "yes",
      "status": "paper_direction_verified",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Valta (2016). Formula table has no entry for this signal.",
      "raw_signal": "secured debt / total debt",
      "construction_summary": "The published article defines secured debt as secured debt divided by total debt, sorts firms with secured debt outstanding into five quantiles, and defines LS as holding the highest quantile and shorting the lowest.",
      "sample_and_timing": "U.S. CRSP/Compustat/Thomson sample, 1985-2012; fiscal year-ends in calendar t-1 are matched to July t through June t+1 returns; portfolios form monthly.",
      "breakpoints": "Five monthly quantiles among firms with secured debt outstanding; panels also report low/high Z-score subsamples.",
      "weighting": "Individual-stock quantile alphas and equal- and value-weighted monthly portfolio returns.",
      "rebalancing_frequency": "Monthly.",
      "holding_period": "One month, with annual accounting data on July-to-June timing.",
      "paper_long_leg": "Highest secured-debt proportion quintile.",
      "paper_short_leg": "Lowest secured-debt proportion quintile.",
      "confidence": "high",
      "evidence_type": "publisher_final_pdf",
      "evidence_pointer": "extracted-text/valta-2016-publisher.txt:285-363,629-633,743-744,797-848,997-1064,1515-1522",
      "reviewer_notes": "Verified against the formal Journal of Financial and Quantitative Analysis publisher PDF; secured-debt definition and high-minus-low monthly portfolio direction are explicit.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "Despite the fact that firms hold a considerable fraction of secured debt, existing models remain silent on the implications of security provisions for equity risk and expected stock returns.",
          "page": 6,
          "line_start": 285,
          "line_end": 363,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/valta-2016-publisher.txt",
          "href": "../papers/valta-2016/valta-2016-publisher.pdf#page=6",
          "open_label": "查看 PDF 第 6 页"
        },
        {
          "text": "As such, the proportion of secured debt affects equity risk and expected stock returns only through the renegotiation threshold XS .",
          "page": 7,
          "line_start": 285,
          "line_end": 363,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/valta-2016-publisher.txt",
          "href": "../papers/valta-2016/valta-2016-publisher.pdf#page=7",
          "open_label": "查看 PDF 第 7 页"
        },
        {
          "text": "Hence, secured debt is the proportion of secured debt (DM) to total debt (DLC + DLTT), and convertible debt is the proportion of convertible debt",
          "page": 13,
          "line_start": 629,
          "line_end": 633,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/valta-2016-publisher.txt",
          "href": "../papers/valta-2016/valta-2016-publisher.pdf#page=13",
          "open_label": "查看 PDF 第 13 页"
        },
        {
          "text": "Secured debt SECURED DEBT Secured debt divided by total debt Compustat Convertible debt CONVERTIBLE DEBT Convertible debt divided by total debt Compustat",
          "page": 15,
          "line_start": 743,
          "line_end": 744,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/valta-2016-publisher.txt",
          "href": "../papers/valta-2016/valta-2016-publisher.pdf#page=15",
          "open_label": "查看 PDF 第 15 页"
        },
        {
          "text": "Panel A of Table 3 contains descriptive statistics for firms without secured debt, and Panel B for firms with a positive amount of secured debt.",
          "page": 15,
          "line_start": 797,
          "line_end": 848,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/valta-2016-publisher.txt",
          "href": "../papers/valta-2016/valta-2016-publisher.pdf#page=15",
          "open_label": "查看 PDF 第 15 页"
        },
        {
          "text": "Firms with Convertible Debt RETURN (%) TOTAL ASSETS BOOK-TO-MARKET ZSCORE DEFAULT PROBABILITY secured debt tend to be larger and have a higher Z-score, a lower default proba- bility, and a lower book-to-market ratio.",
          "page": 16,
          "line_start": 797,
          "line_end": 848,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/valta-2016-publisher.txt",
          "href": "../papers/valta-2016/valta-2016-publisher.pdf#page=16",
          "open_label": "查看 PDF 第 16 页"
        },
        {
          "text": "In all columns, the strategy of going long the fifth quantile and selling short the firms in the lowest quantile yields positive and significant alphas between 59 (3-factor alpha) and 74 bps (equal-weighted portfolio 5-factor alpha) per month.",
          "page": 19,
          "line_start": 997,
          "line_end": 1064,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/valta-2016-publisher.txt",
          "href": "../papers/valta-2016/valta-2016-publisher.pdf#page=19",
          "open_label": "查看 PDF 第 19 页"
        },
        {
          "text": "These alphas are computed using all individual stocks by quantile, or using equal- (EW) and value-weighted (VW) monthly portfolio returns by quantile.",
          "page": 20,
          "line_start": 997,
          "line_end": 1064,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/valta-2016-publisher.txt",
          "href": "../papers/valta-2016/valta-2016-publisher.pdf#page=20",
          "open_label": "查看 PDF 第 20 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "valta-2016",
        "title": "Strategic Default, Debt Structure, and Stock Returns",
        "authors": "Philip Valta",
        "year": "2016",
        "venue": "Journal of Financial and Quantitative Analysis",
        "doi": "10.1017/S002210901600003X",
        "source_url": "https://www.cambridge.org/core/journals/journal-of-financial-and-quantitative-analysis/article/abs/strategic-default-debt-structure-and-stock-returns/E68AD030B31B9D4E20BDA3B7EA881040",
        "local_file": "papers/valta-2016/valta-2016-publisher.pdf",
        "local_href": "../papers/valta-2016/valta-2016-publisher.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 33,
        "access_status": "full_text_pdf_publisher"
      },
      "method_variants": [
        {
          "id": "valta-2016",
          "source_id": "valta-2016",
          "role": "original_paper",
          "source_label": "Strategic Default, Debt Structure, and Stock Returns",
          "source_year": "2016",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{SecuredDebtShare}_{i,t}=\\frac{\\mathrm{SecuredDebt}_{i,t}}{\\mathrm{TotalDebt}_{i,t}}\\)",
          "data_fields": "secured debt / total debt",
          "calculation_window": {
            "zh": "U.S. CRSP/Compustat/Thomson sample, 1985-2012; fiscal year-ends in calendar t-1 are matched to July t through June t+1 returns; portfolios form monthly.",
            "en": "U.S. CRSP/Compustat/Thomson sample, 1985-2012; fiscal year-ends in calendar t-1 are matched to July t through June t+1 returns; portfolios form monthly."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Five monthly quantiles among firms with secured debt outstanding; panels also report low/high Z-score subsamples. Individual-stock quantile alphas and equal- and value-weighted monthly portfolio returns. Monthly. One month, with annual accounting data on July-to-June timing.",
            "en": "Five monthly quantiles among firms with secured debt outstanding; panels also report low/high Z-score subsamples. Individual-stock quantile alphas and equal- and value-weighted monthly portfolio returns. Monthly. One month, with annual accounting data on July-to-June timing."
          },
          "direction": "H-L",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/valta-2016/valta-2016-publisher.pdf",
          "source_page": 6,
          "source_href": "../papers/valta-2016/valta-2016-publisher.pdf#page=6"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{SECURED}_{i,t}=\\frac{\\mathrm{DM}_{i,t}}{\\mathrm{DLTT}_{i,t}}\\)",
        "formula_direction": "",
        "data_fields": "Compustat: DLTT, DM",
        "calculation_window": {
          "zh": "年频。",
          "en": "Annual."
        },
        "accounting_lag": {
          "zh": "按 chars_ciz 年频 jdate 对齐；未另行添加页面假设。",
          "en": "Aligned by the chars_ciz annual jdate rule; the page adds no extra assumption."
        },
        "source_label": "EquityChars CIZ · accounting.py · L1192",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L1192",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "1192",
        "code_frequency": {
          "zh": "年频。",
          "en": "Annual."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      }
    },
    {
      "id": "securedind",
      "name": "Secured debt indicator",
      "signal_definition": "Secured debt indicator",
      "sort_variable": "securedind",
      "code_direction": "H-L",
      "paper_direction": "not-simple",
      "direction_label": "非简单多空",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Valta (2016). Formula table has no entry for this signal.",
      "raw_signal": "no paper indicator; closest priced variable is secured debt / total debt",
      "construction_summary": "The published article uses the continuous secured-debt proportion and forms quintiles conditional on positive secured debt; the with/no-secured-debt split is descriptive, not a return strategy on the repo binary securedind indicator.",
      "sample_and_timing": "U.S. CRSP/Compustat/Thomson sample, 1985-2012; annual accounting data are matched to July-through-June returns and portfolios form monthly.",
      "breakpoints": "For the closest paper strategy, five monthly quantiles among firms with secured debt; no return-sort breakpoint for the repo binary indicator was found.",
      "weighting": "Individual-stock quantile alphas and equal- and value-weighted monthly portfolio returns.",
      "rebalancing_frequency": "Monthly.",
      "holding_period": "One month, with annual accounting data on July-to-June timing.",
      "paper_long_leg": "Closest paper strategy: highest secured-debt proportion quintile.",
      "paper_short_leg": "Closest paper strategy: lowest secured-debt proportion quintile.",
      "confidence": "high",
      "evidence_type": "publisher_final_pdf",
      "evidence_pointer": "extracted-text/valta-2016-publisher.txt:285-363,629-633,743-744,797-848,997-1064,1515-1522",
      "reviewer_notes": "Verified against the formal publisher PDF. Repo mismatch remains: securedind is binary, while the priced portfolio uses the continuous secured-debt proportion.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "Despite the fact that firms hold a considerable fraction of secured debt, existing models remain silent on the implications of security provisions for equity risk and expected stock returns.",
          "page": 6,
          "line_start": 285,
          "line_end": 363,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/valta-2016-publisher.txt",
          "href": "../papers/valta-2016/valta-2016-publisher.pdf#page=6",
          "open_label": "查看 PDF 第 6 页"
        },
        {
          "text": "As such, the proportion of secured debt affects equity risk and expected stock returns only through the renegotiation threshold XS .",
          "page": 7,
          "line_start": 285,
          "line_end": 363,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/valta-2016-publisher.txt",
          "href": "../papers/valta-2016/valta-2016-publisher.pdf#page=7",
          "open_label": "查看 PDF 第 7 页"
        },
        {
          "text": "Hence, secured debt is the proportion of secured debt (DM) to total debt (DLC + DLTT), and convertible debt is the proportion of convertible debt",
          "page": 13,
          "line_start": 629,
          "line_end": 633,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/valta-2016-publisher.txt",
          "href": "../papers/valta-2016/valta-2016-publisher.pdf#page=13",
          "open_label": "查看 PDF 第 13 页"
        },
        {
          "text": "Secured debt SECURED DEBT Secured debt divided by total debt Compustat Convertible debt CONVERTIBLE DEBT Convertible debt divided by total debt Compustat",
          "page": 15,
          "line_start": 743,
          "line_end": 744,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/valta-2016-publisher.txt",
          "href": "../papers/valta-2016/valta-2016-publisher.pdf#page=15",
          "open_label": "查看 PDF 第 15 页"
        },
        {
          "text": "Panel A of Table 3 contains descriptive statistics for firms without secured debt, and Panel B for firms with a positive amount of secured debt.",
          "page": 15,
          "line_start": 797,
          "line_end": 848,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/valta-2016-publisher.txt",
          "href": "../papers/valta-2016/valta-2016-publisher.pdf#page=15",
          "open_label": "查看 PDF 第 15 页"
        },
        {
          "text": "Firms with No Secured Debt RETURN (%) TOTAL ASSETS BOOK-TO-MARKET ZSCORE DEFAULT PROBABILITY Panel B.",
          "page": 16,
          "line_start": 797,
          "line_end": 848,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/valta-2016-publisher.txt",
          "href": "../papers/valta-2016/valta-2016-publisher.pdf#page=16",
          "open_label": "查看 PDF 第 16 页"
        },
        {
          "text": "In all columns, the strategy of going long the fifth quantile and selling short the firms in the lowest quantile yields positive and significant alphas between 59 (3-factor alpha) and 74 bps (equal-weighted portfolio 5-factor alpha) per month.",
          "page": 19,
          "line_start": 997,
          "line_end": 1064,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/valta-2016-publisher.txt",
          "href": "../papers/valta-2016/valta-2016-publisher.pdf#page=19",
          "open_label": "查看 PDF 第 19 页"
        },
        {
          "text": "These alphas are computed using all individual stocks by quantile, or using equal- (EW) and value-weighted (VW) monthly portfolio returns by quantile.",
          "page": 20,
          "line_start": 997,
          "line_end": 1064,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/valta-2016-publisher.txt",
          "href": "../papers/valta-2016/valta-2016-publisher.pdf#page=20",
          "open_label": "查看 PDF 第 20 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "valta-2016",
        "title": "Strategic Default, Debt Structure, and Stock Returns",
        "authors": "Philip Valta",
        "year": "2016",
        "venue": "Journal of Financial and Quantitative Analysis",
        "doi": "10.1017/S002210901600003X",
        "source_url": "https://www.cambridge.org/core/journals/journal-of-financial-and-quantitative-analysis/article/abs/strategic-default-debt-structure-and-stock-returns/E68AD030B31B9D4E20BDA3B7EA881040",
        "local_file": "papers/valta-2016/valta-2016-publisher.pdf",
        "local_href": "../papers/valta-2016/valta-2016-publisher.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 33,
        "access_status": "full_text_pdf_publisher"
      },
      "method_variants": [
        {
          "id": "valta-2016",
          "source_id": "valta-2016",
          "role": "original_paper",
          "source_label": "Strategic Default, Debt Structure, and Stock Returns",
          "source_year": "2016",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{SecuredDebtShare}_{i,t}=\\frac{\\mathrm{SecuredDebt}_{i,t}}{\\mathrm{TotalDebt}_{i,t}}\\)",
          "data_fields": "no paper indicator; closest priced variable is secured debt / total debt",
          "calculation_window": {
            "zh": "U.S. CRSP/Compustat/Thomson sample, 1985-2012; annual accounting data are matched to July-through-June returns and portfolios form monthly.",
            "en": "U.S. CRSP/Compustat/Thomson sample, 1985-2012; annual accounting data are matched to July-through-June returns and portfolios form monthly."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "For the closest paper strategy, five monthly quantiles among firms with secured debt; no return-sort breakpoint for the repo binary indicator was found. Individual-stock quantile alphas and equal- and value-weighted monthly portfolio returns. Monthly. One month, with annual accounting data on July-to-June timing.",
            "en": "For the closest paper strategy, five monthly quantiles among firms with secured debt; no return-sort breakpoint for the repo binary indicator was found. Individual-stock quantile alphas and equal- and value-weighted monthly portfolio returns. Monthly. One month, with annual accounting data on July-to-June timing."
          },
          "direction": "not-simple",
          "formula_match": "closest_paper_measure",
          "notes": {
            "zh": "论文只给出最接近口径，与项目指标不完全相同。",
            "en": "The paper provides the closest available measure; it is not identical to the project signal."
          },
          "source_path": "papers/valta-2016/valta-2016-publisher.pdf",
          "source_page": 6,
          "source_href": "../papers/valta-2016/valta-2016-publisher.pdf#page=6"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{SECUREDIND}_{i,t}=\\mathbf{1}\\{\\mathrm{DM}_{i,t}\\ne0\\}\\)",
        "formula_direction": "",
        "data_fields": "Compustat: DM",
        "calculation_window": {
          "zh": "年频。",
          "en": "Annual."
        },
        "accounting_lag": {
          "zh": "按 chars_ciz 年频 jdate 对齐；未另行添加页面假设。",
          "en": "Aligned by the chars_ciz annual jdate rule; the page adds no extra assumption."
        },
        "source_label": "EquityChars CIZ · accounting.py · L1200",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L1200",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "1200",
        "code_frequency": {
          "zh": "年频。",
          "en": "Annual."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      },
      "method_design": {
        "family": "sorted_portfolio_comparison",
        "summary": {
          "zh": "在存在担保债务的企业中，按担保债务占比形成五分位组合，考察个股α以及等权和市值加权组合收益；项目特征则为是否存在担保债务的二元指标。",
          "en": "The published article uses the continuous secured-debt proportion and forms quintiles conditional on positive secured debt; the with/no-secured-debt split is descriptive, not a return strategy on the repo binary securedind indicator."
        },
        "signal_role": {
          "zh": "连续代理变量",
          "en": "Continuous proxy for the project indicator"
        },
        "estimand": {
          "zh": "条件于担保债务为正的分位数组合收益",
          "en": "Returns of conditional secured-debt quantile portfolios"
        },
        "interpretation": {
          "zh": "论文排序的是连续债务占比而非二元指标；其端点比较不能作为项目指标的精确多空方向。",
          "en": ""
        }
      }
    },
    {
      "id": "sgr",
      "name": "Sales growth",
      "signal_definition": "Sales growth",
      "sort_variable": "sgr",
      "code_direction": "H-L",
      "paper_direction": "L-H",
      "direction_label": "低值做多 · 高值做空",
      "agreement": "no",
      "status": "paper_direction_verified",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Lakonishok, Shleifer, and Vishny (1994). Formula table direction: +1.",
      "raw_signal": "Five-year weighted-average rank of annual sales growth",
      "construction_summary": "For each stock, rank annual sales growth separately in years -1 through -5, combine the ranks with weights 5, 4, 3, 2, and 1 from most to least recent, and form deciles on the weighted-average rank. The value strategy is long the low-GS decile and short the high-GS decile.",
      "sample_and_timing": "NYSE and AMEX; annual end-of-April formations beginning in 1968; accounting data from COMPUSTAT and returns from CRSP; performance examined for five years.",
      "breakpoints": "Deciles on the weighted-average five-year sales-growth rank.",
      "weighting": "Equal-weighted within portfolios; raw and size-adjusted returns are reported.",
      "rebalancing_frequency": "Annual formation and annual rebalancing.",
      "holding_period": "One through five post-formation years.",
      "paper_long_leg": "Low GS / low past sales-growth decile (value).",
      "paper_short_leg": "High GS / high past sales-growth decile (glamour).",
      "confidence": "high",
      "evidence_type": "publisher_final_jstor_pdf",
      "evidence_pointer": "extracted-text/lakonishok-1994-publisher.txt:215-365,440-540,595-623",
      "reviewer_notes": "Verified against the final Journal of Finance/JSTOR PDF. Low GS earns +2.2% annual size-adjusted return and high GS -2.4%; EquityChars implements H-L, so the source and code directions disagree.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "Consequently, we look at portfolios formed every year starting at the end of April 1968.2 We examine subsequent performance and other characteristics of these portfolios for up to 5 years after formation using returns data from the Center for Research in Security Prices (CRSP) and accounting data from COMPUSTAT (including the research file).",
          "page": 5,
          "line_start": 215,
          "line_end": 365,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/lakonishok-1994-publisher.txt",
          "href": "../papers/lakonishok-1994/lakonishok-1994-publisher.pdf#page=5",
          "open_label": "查看 PDF 第 5 页"
        },
        {
          "text": "For each stock in the portfolio, replace its return in each year with an annual buy-and-hold return on an equally weighted portfolio of all stocks in its size decile for that year.",
          "page": 6,
          "line_start": 215,
          "line_end": 365,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/lakonishok-1994-publisher.txt",
          "href": "../papers/lakonishok-1994/lakonishok-1994-publisher.pdf#page=6",
          "open_label": "查看 PDF 第 6 页"
        },
        {
          "text": "For these classifications, we consider only stocks with positive ratios of cash flow-to-price or earnings-to-price because negative ratios cannot be interpreted in terms of expected growth rates.4 For purposes other than classifying individual stocks into portfolios, these ratios are computed for the entire equally weighted portfolios (and then averaged across all formation periods) without eliminating individual stocks in the portfolio that have negative values for the variable.",
          "page": 7,
          "line_start": 215,
          "line_end": 365,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/lakonishok-1994-publisher.txt",
          "href": "../papers/lakonishok-1994/lakonishok-1994-publisher.pdf#page=7",
          "open_label": "查看 PDF 第 7 页"
        },
        {
          "text": "B/M is the ratio of book value of equity to market value of equity; C/P is the ratio of cash flow to market value of equity; E/P is the ratio of earnings to market value of equity, and GS refers to preformation 5-year average growth rate of sales.",
          "page": 9,
          "line_start": 440,
          "line_end": 540,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/lakonishok-1994-publisher.txt",
          "href": "../papers/lakonishok-1994/lakonishok-1994-publisher.pdf#page=9",
          "open_label": "查看 PDF 第 9 页"
        },
        {
          "text": "Contrarian Investment, Extrapolation, and Risk 1549 Table I-Continued Glamour Value 1 2 3 4 5 6 7 8 9 10 Panel C: E/P R, 0.123 0.125 0.140 0.130 0.135 0.156 0.170 0.180 0.193 0.162 R2 0.101 0.113 0.124 0.143 0.167 0.164 0.180 0.185 0.183 0.174 R3 0.118 0.138 0.157 0.171 0.171 0.191 0.198 0.188 0.188 0.195 R4 0.111 0.124 0.145 0.151 0.157 0.159 0.198 0.199 0.205 0.214 R5 0.119 0.129 0.151 0.167 0.171 0.168 0.196 0.201 0.211 0.207 AR 0.114 0.126 0.143 0.152 0.160 0.167 0.188 0.191 0.196 0.190 CR5 ",
          "page": 10,
          "line_start": 440,
          "line_end": 540,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/lakonishok-1994-publisher.txt",
          "href": "../papers/lakonishok-1994/lakonishok-1994-publisher.pdf#page=10",
          "open_label": "查看 PDF 第 10 页"
        },
        {
          "text": "On a size-adjusted basis the average annual abnormal returns are 2.2 percent for the low GS strategy and -2.4 percent for the high GS strategy.",
          "page": 11,
          "line_start": 595,
          "line_end": 623,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/lakonishok-1994-publisher.txt",
          "href": "../papers/lakonishok-1994/lakonishok-1994-publisher.pdf#page=11",
          "open_label": "查看 PDF 第 11 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "lakonishok-1994",
        "title": "Contrarian Investment, Extrapolation, and Risk",
        "authors": "Josef Lakonishok, Andrei Shleifer, and Robert W. Vishny",
        "year": "1994",
        "venue": "The Journal of Finance",
        "doi": "10.1111/j.1540-6261.1994.tb04772.x",
        "source_url": "https://doi.org/10.1111/j.1540-6261.1994.tb04772.x",
        "local_file": "papers/lakonishok-1994/lakonishok-1994-publisher.pdf",
        "local_href": "../papers/lakonishok-1994/lakonishok-1994-publisher.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 39,
        "access_status": "full_text_pdf_jstor"
      },
      "method_variants": [
        {
          "id": "lakonishok-1994",
          "source_id": "lakonishok-1994",
          "role": "original_paper",
          "source_label": "Contrarian Investment, Extrapolation, and Risk",
          "source_year": "1994",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{SGR}_{i,t}=\\frac{\\sum_{k=1}^{5}(6-k)\\,\\operatorname{Rank}\\!\\left[g(\\mathrm{SALE}_{i,t-k})\\right]}{\\sum_{k=1}^{5}(6-k)}\\)",
          "data_fields": "Five-year weighted-average rank of annual sales growth",
          "calculation_window": {
            "zh": "NYSE and AMEX; annual end-of-April formations beginning in 1968; accounting data from COMPUSTAT and returns from CRSP; performance examined for five years.",
            "en": "NYSE and AMEX; annual end-of-April formations beginning in 1968; accounting data from COMPUSTAT and returns from CRSP; performance examined for five years."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Deciles on the weighted-average five-year sales-growth rank. Equal-weighted within portfolios; raw and size-adjusted returns are reported. Annual formation and annual rebalancing. One through five post-formation years.",
            "en": "Deciles on the weighted-average five-year sales-growth rank. Equal-weighted within portfolios; raw and size-adjusted returns are reported. Annual formation and annual rebalancing. One through five post-formation years."
          },
          "direction": "L-H",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/lakonishok-1994/lakonishok-1994-publisher.pdf",
          "source_page": 5,
          "source_href": "../papers/lakonishok-1994/lakonishok-1994-publisher.pdf#page=5"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{SGR}_{i,t}=\\frac{\\mathrm{SALE}_{i,t}}{\\mathrm{SALE}_{i,t-1}}-1\\)",
        "formula_direction": "+1",
        "data_fields": "Compustat: SALE",
        "calculation_window": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "accounting_lag": {
          "zh": "年频与季频结果均在 CIZ 中对齐；最终比较 datadate，取较新的可用值。",
          "en": "CIZ aligns both annual and quarterly results, then selects the newer available value by datadate."
        },
        "source_label": "EquityChars CIZ · accounting.py · L556, L1643",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L556",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "556,1643",
        "code_frequency": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "reconcile_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/impute_rank_output.py#L85",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写。年频与季频同时可用时，最终输出按 datadate 选择较新的非空值。",
          "en": "Formula transcribed from chars_ciz. When annual and quarterly values both exist, final output selects the newer non-null value by datadate."
        }
      }
    },
    {
      "id": "sin",
      "name": "Sin stocks",
      "signal_definition": "Sin stocks",
      "sort_variable": "sin",
      "code_direction": "H-L",
      "paper_direction": "H-L",
      "direction_label": "高值做多 · 低值做空",
      "agreement": "yes",
      "status": "paper_direction_verified",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Hong and Kacperczyk (2009). Formula table has no entry for this signal.",
      "raw_signal": "Sin-stock indicator: alcohol/beer, tobacco/smoke, and gaming classification from Fama-French SIC groups plus NAICS/segment screens",
      "construction_summary": "The published article identifies sin stocks as Fama-French beer/alcohol and smoke/tobacco groups plus gaming NAICS codes, augmented with Compustat segment data; return tests use an equal-weighted portfolio long sin stocks and short comparable stocks.",
      "sample_and_timing": "CRSP/Compustat firm data cover 1962-2006; the main time-series return regressions use 1965-2006, with a longer 1926-2006 specification also reported.",
      "breakpoints": "No decile breakpoints; binary sin classification versus comparable industries.",
      "weighting": "Equal-weighted sin portfolio and equal-weighted comparable portfolio.",
      "rebalancing_frequency": "Monthly.",
      "holding_period": "One month.",
      "paper_long_leg": "Sin stocks.",
      "paper_short_leg": "Comparable non-sin stocks from Fama-French food, soda, fun, and meals/hotels groups.",
      "confidence": "high",
      "evidence_type": "publisher_full_text",
      "evidence_pointer": "extracted-text/hong-2009-publisher.txt:35,48-52,576,582,739,753,1135-1138",
      "reviewer_notes": "Verified against the formal Journal of Financial Economics publisher full text; classification, equal weighting, comparables, and SIN-minus-COMP direction are explicit.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "First and most conventionally, using time-series regressions during the period of 1965–2006, we find that a portfolio long sin stocks and short their comparables has a return of 26 basis points per month after adjusting for a four-factor model comprising the three Fama-French factors and the momentum (returns) factor.",
          "page": 1,
          "line_start": 35,
          "line_end": 35,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/hong-2009-publisher.txt",
          "href": "../papers/hong-2009/hong-2009-publisher-fulltext.html#:~:text=First%20and%20most%20conventionally%2C%20using%20time-series%20regressions%20during%20the%20period%20of%201965%E2%80%932006%2C%20we%20find%20that%20a%20portfolio%20long%20sin%20stocks%20and%20short%20their%20comparables%20has%20a%20return%20of%2026",
          "open_label": "在本地 HTML 中定位"
        },
        {
          "text": "Stocks in Fama-French industry group 4 (beer or alcohol) and industry group 5 (smoke or tobacco) are classified as sin stocks.",
          "page": 1,
          "line_start": 48,
          "line_end": 52,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/hong-2009-publisher.txt",
          "href": "../papers/hong-2009/hong-2009-publisher-fulltext.html#:~:text=Stocks%20in%20Fama-French%20industry%20group%204%20%28beer%20or%20alcohol%29%20and%20industry%20group%205%20%28smoke%20or%20tobacco%29%20are%20classified%20as%20sin%20stocks.",
          "open_label": "在本地 HTML 中定位"
        },
        {
          "text": "From CRSP, we obtain daily closing stock prices, daily shares outstanding, and daily dollar trading volumes for NYSE, Amex, and Nasdaq stocks over the period of 1962–2006.",
          "page": 1,
          "line_start": 576,
          "line_end": 576,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/hong-2009-publisher.txt",
          "href": "../papers/hong-2009/hong-2009-publisher-fulltext.html#:~:text=From%20CRSP%2C%20we%20obtain%20daily%20closing%20stock%20prices%2C%20daily%20shares%20outstanding%2C%20and%20daily%20dollar%20trading%20volumes%20for%20NYSE%2C%20Amex%2C%20and%20Nasdaq%20stocks%20over%20the%20period%20of%201962%E2%80%932006.",
          "open_label": "在本地 HTML 中定位"
        },
        {
          "text": "EXCOMP is the excess monthly return net of the risk-free rate for an equal-weighted portfolio of sin stocks net of comparable stocks.",
          "page": 1,
          "line_start": 582,
          "line_end": 582,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/hong-2009-publisher.txt",
          "href": "../papers/hong-2009/hong-2009-publisher-fulltext.html#:~:text=EXCOMP%20is%20the%20excess%20monthly%20return%20net%20of%20the%20risk-free%20rate%20for%20an%20equal-weighted%20portfolio%20of%20sin%20stocks%20net%20of%20comparable%20stocks.",
          "open_label": "在本地 HTML 中定位"
        },
        {
          "text": "In our time-series return regressions, the dependent variable EXCOMP (SINPt–COMPt) is the monthly return of an equal-weighted portfolio of sin stocks in month t, net of the monthly return of an equal-weighted portfolio of comparable stocks that belong to the Fama and French (1997) industry groups 2 (food), 3 (soda), 7 (fun), and 43 (meals and hotels).",
          "page": 1,
          "line_start": 739,
          "line_end": 739,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/hong-2009-publisher.txt",
          "href": "../papers/hong-2009/hong-2009-publisher-fulltext.html#:~:text=In%20our%20time-series%20return%20regressions%2C%20the%20dependent%20variable%20EXCOMP%20%28SINPt%E2%80%93COMPt%29%20is%20the%20monthly%20return%20of%20an%20equal-weighted%20portfolio%20of%20sin%20stocks%20in%20month%20t%2C%20net%20of%20the%20monthly",
          "open_label": "在本地 HTML 中定位"
        },
        {
          "text": "Accordingly, we create the dummy variable GDUM, which equals one if a stock resides in the set of Fama and French (1997) industry classifications 2 (food), 3 (soda), 4 (beer), 5 (smoke), 7 (fun), 43 (meals), and our 49th industry (gaming), and zero otherwise.",
          "page": 1,
          "line_start": 753,
          "line_end": 753,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/hong-2009-publisher.txt",
          "href": "../papers/hong-2009/hong-2009-publisher-fulltext.html#:~:text=Accordingly%2C%20we%20create%20the%20dummy%20variable%20GDUM%2C%20which%20equals%20one%20if%20a%20stock%20resides%20in%20the%20set%20of%20Fama%20and%20French%20%281997%29%20industry%20classifications%202%20%28food%29%2C%203%20%28soda%29%2C%204%20%28beer%29%2C%205%20%28s",
          "open_label": "在本地 HTML 中定位"
        },
        {
          "text": "Panel A reports the average coefficients obtained from the time-series regressions of a portfolio (SIN–COMP) that is long SIN (the monthly return for an equal-weighted portfolio of sin stocks—alcohol, gaming, and tobacco) and short COMP (the monthly return for an equal-weighted portfolio of comparable stocks) on a host of well-known factors.",
          "page": 1,
          "line_start": 1135,
          "line_end": 1138,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/hong-2009-publisher.txt",
          "href": "../papers/hong-2009/hong-2009-publisher-fulltext.html#:~:text=Panel%20A%20reports%20the%20average%20coefficients%20obtained%20from%20the%20time-series%20regressions%20of%20a%20portfolio%20%28SIN%E2%80%93COMP%29%20that%20is%20long%20SIN%20%28the%20monthly%20return%20for%20an%20equal-weighted%20portfolio%20of",
          "open_label": "在本地 HTML 中定位"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "hong-2009",
        "title": "The price of sin: The effects of social norms on markets",
        "authors": "Harrison G. Hong; Marcin Kacperczyk",
        "year": "2009",
        "venue": "Journal of Financial Economics, 93(1), 15-36",
        "doi": "10.1016/j.jfineco.2008.09.001",
        "source_url": "https://doi.org/10.1016/j.jfineco.2008.09.001",
        "local_file": "papers/hong-2009/hong-2009-publisher-fulltext.html",
        "local_href": "../papers/hong-2009/hong-2009-publisher-fulltext.html",
        "artifact_type": "html",
        "pdf_pages": null,
        "access_status": "full_text_html_publisher_verified"
      },
      "method_variants": [
        {
          "id": "hong-2009",
          "source_id": "hong-2009",
          "role": "original_paper",
          "source_label": "The price of sin: The effects of social norms on markets",
          "source_year": "2009",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{SIN}_{i,t}=\\mathbf{1}\\!\\left\\{i\\in\\mathrm{Alcohol,Tobacco,Gaming}\\right\\}\\)",
          "data_fields": "Sin-stock indicator: alcohol/beer, tobacco/smoke, and gaming classification from Fama-French SIC groups plus NAICS/segment screens",
          "calculation_window": {
            "zh": "CRSP/Compustat firm data cover 1962-2006; the main time-series return regressions use 1965-2006, with a longer 1926-2006 specification also reported.",
            "en": "CRSP/Compustat firm data cover 1962-2006; the main time-series return regressions use 1965-2006, with a longer 1926-2006 specification also reported."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "No decile breakpoints; binary sin classification versus comparable industries. Equal-weighted sin portfolio and equal-weighted comparable portfolio. Monthly. One month.",
            "en": "No decile breakpoints; binary sin classification versus comparable industries. Equal-weighted sin portfolio and equal-weighted comparable portfolio. Monthly. One month."
          },
          "direction": "H-L",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/hong-2009/hong-2009-publisher-fulltext.html",
          "source_page": 1,
          "source_href": "../papers/hong-2009/hong-2009-publisher-fulltext.html#:~:text=First%20and%20most%20conventionally%2C%20using%20time-series%20regressions%20during%20the%20period%20of%201965%E2%80%932006%2C%20we%20find%20that%20a%20portfolio%20long%20sin%20stocks%20and%20short%20their%20comparables%20has%20a%20return%20of%2026"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{SIN}_{i,t}=\\mathbf{1}\\{\\mathrm{SIC}\\in[2100,2199]\\cup[2080,2085]\\ \\lor\\ \\mathrm{NAICS}\\in\\mathcal{G}_{gaming}\\}\\)",
        "formula_direction": "",
        "data_fields": "Compustat segments: SIC, NAICS, firm/segment identifiers",
        "calculation_window": {
          "zh": "年频。",
          "en": "Annual."
        },
        "accounting_lag": {
          "zh": "按 chars_ciz 年频 jdate 对齐；未另行添加页面假设。",
          "en": "Aligned by the chars_ciz annual jdate rule; the page adds no extra assumption."
        },
        "source_label": "EquityChars CIZ · accounting.py · L1218",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L1218",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "1218",
        "code_frequency": {
          "zh": "年频。",
          "en": "Annual."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      }
    },
    {
      "id": "sp",
      "name": "Sales-to-price",
      "signal_definition": "Sales-to-price",
      "sort_variable": "sp",
      "code_direction": "H-L",
      "paper_direction": "not-simple",
      "direction_label": "非简单多空",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Barbee, Mukherji, and Raines (1996). Formula table direction: +1.",
      "raw_signal": "sales-price ratio, annual sales divided by fiscal-year-end market price",
      "construction_summary": "The published article runs monthly cross-sectional regressions of stock returns on lagged annual financial variables. Sales-price has a positive, consistently significant coefficient and absorbs the explanatory roles of book-market, market value, and debt-equity, but the paper does not form a standalone sales-price hedge portfolio.",
      "sample_and_timing": "Nonfinancial NYSE/AMEX firms with December fiscal year-ends; Compustat financial data begin in 1978 and CRSP returns run April 1979-December 1991.",
      "breakpoints": "N/A; monthly regressions rather than characteristic-sorted portfolios.",
      "weighting": "Regression-based; no portfolio weights.",
      "rebalancing_frequency": "Annual financial signal aligned to monthly regressions.",
      "holding_period": "Monthly dependent returns; no paper-defined portfolio holding period.",
      "paper_long_leg": "N/A",
      "paper_short_leg": "N/A",
      "confidence": "high",
      "evidence_type": "publisher_final_scan_and_proquest_full_text",
      "evidence_pointer": "extracted-text/barbee-1996-publisher.txt:63-79,83-91,95-119",
      "reviewer_notes": "Verified against the formal five-page Financial Analysts Journal publisher scan and authenticated ProQuest full text. The positive S/P-return relation must not be converted into a paper-defined H-L portfolio because the source uses regressions only.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "Our methodology is generally similar to that described in Fama and French's 1992 paper and involved monthly regressions of stock returns on financial data from the previous year.",
          "page": 1,
          "line_start": 63,
          "line_end": 79,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/barbee-1996-publisher.txt",
          "href": "../papers/barbee-1996/barbee-1996-publisher.pdf#page=1",
          "open_label": "查看 PDF 第 1 页"
        },
        {
          "text": "For the sake of consistency, we obtained all financial variables at the fiscal year-end, which is December for our sample of firms. * For reasons previously explained, we do not have any explanatory variable based on reported earnings per share.",
          "page": 1,
          "line_start": 83,
          "line_end": 91,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/barbee-1996-publisher.txt",
          "href": "../papers/barbee-1996/barbee-1996-publisher.pdf#page=1",
          "open_label": "查看 PDF 第 1 页"
        },
        {
          "text": "Generate image description As may be expected in a reasonably efficient market, the relations between expected stock returns and the explanatory financial variables are uniformly weak, even though they are statistically significant.",
          "page": 1,
          "line_start": 95,
          "line_end": 119,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/barbee-1996-publisher.txt",
          "href": "../papers/barbee-1996/barbee-1996-publisher.pdf#page=1",
          "open_label": "查看 PDF 第 1 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "barbee-1996",
        "title": "Do Sales-Price and Debt-Equity Explain Stock Returns Better than Book-Market and Firm Size?",
        "authors": "William C. Barbee Jr.; Sandip Mukherji; Gary A. Raines",
        "year": "1996",
        "venue": "Financial Analysts Journal",
        "doi": "10.2469/faj.v52.n2.1980",
        "source_url": "https://doi.org/10.2469/faj.v52.n2.1980",
        "local_file": "papers/barbee-1996/barbee-1996-publisher.pdf",
        "local_href": "../papers/barbee-1996/barbee-1996-publisher.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 5,
        "access_status": "full_text_pdf_publisher"
      },
      "method_variants": [
        {
          "id": "barbee-1996",
          "source_id": "barbee-1996",
          "role": "original_paper",
          "source_label": "Do Sales-Price and Debt-Equity Explain Stock Returns Better than Book-Market and Firm Size?",
          "source_year": "1996",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{SP}_{i,t}=\\frac{\\mathrm{SALE}_{i,t}}{\\mathrm{ME}_{i,t}}\\)",
          "data_fields": "sales-price ratio, annual sales divided by fiscal-year-end market price",
          "calculation_window": {
            "zh": "Nonfinancial NYSE/AMEX firms with December fiscal year-ends; Compustat financial data begin in 1978 and CRSP returns run April 1979-December 1991.",
            "en": "Nonfinancial NYSE/AMEX firms with December fiscal year-ends; Compustat financial data begin in 1978 and CRSP returns run April 1979-December 1991."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "N/A; monthly regressions rather than characteristic-sorted portfolios. Regression-based; no portfolio weights. Annual financial signal aligned to monthly regressions. Monthly dependent returns; no paper-defined portfolio holding period.",
            "en": "N/A; monthly regressions rather than characteristic-sorted portfolios. Regression-based; no portfolio weights. Annual financial signal aligned to monthly regressions. Monthly dependent returns; no paper-defined portfolio holding period."
          },
          "direction": "not-simple",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/barbee-1996/barbee-1996-publisher.pdf",
          "source_page": 1,
          "source_href": "../papers/barbee-1996/barbee-1996-publisher.pdf#page=1"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{SP}_{i,t}=\\frac{\\mathrm{SALE}_{i,t}}{\\mathrm{ME}_{i,t}}\\)",
        "formula_direction": "+1",
        "data_fields": "Compustat: SALE",
        "calculation_window": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "accounting_lag": {
          "zh": "年频与季频结果均在 CIZ 中对齐；最终比较 datadate，取较新的可用值。",
          "en": "CIZ aligns both annual and quarterly results, then selects the newer available value by datadate."
        },
        "source_label": "EquityChars CIZ · accounting.py · L2318, L2440",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L2318",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "2318,2440",
        "code_frequency": {
          "zh": "年频与季频；最终按 datadate 取较新的非空值。",
          "en": "Annual and quarterly; the final output uses the newer non-null value by datadate."
        },
        "reconcile_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/impute_rank_output.py#L85",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写。年频与季频同时可用时，最终输出按 datadate 选择较新的非空值。",
          "en": "Formula transcribed from chars_ciz. When annual and quarterly values both exist, final output selects the newer non-null value by datadate."
        }
      },
      "method_design": {
        "family": "cross_sectional_return_regression",
        "summary": {
          "zh": "以滞后年度销售收入与市值之比解释逐月股票收益，并与账面市值比、公司规模和债务权益比联合进入横截面回归。",
          "en": "The published article runs monthly cross-sectional regressions of stock returns on lagged annual financial variables. Sales-price has a positive, consistently significant coefficient and absorbs the explanatory roles of book-market, market value, and debt-equity, but the paper does not form a standalone sales-price hedge portfolio."
        },
        "signal_role": {
          "zh": "横截面预测变量",
          "en": "Cross-sectional predictor"
        },
        "estimand": {
          "zh": "下一月股票收益",
          "en": "Next-month stock return"
        },
        "interpretation": {
          "zh": "论文报告的是销售市值比的条件回归系数，没有形成独立的销售市值比对冲组合。",
          "en": ""
        }
      }
    },
    {
      "id": "std_dolvol",
      "name": "Std. of dollar trading volume rolling 3m",
      "signal_definition": "Std. of dollar trading volume rolling 3m",
      "sort_variable": "std_dolvol",
      "code_direction": "L-H",
      "paper_direction": "not-simple",
      "direction_label": "非简单多空",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "Low",
      "code_short_leg": "High",
      "code_notes": "Repo attribution: Chordia, Subrahmanyam, and Anshuman (2001). Formula table direction: -1.",
      "raw_signal": "natural logarithm of the standard deviation of dollar trading volume over the past 36 months",
      "construction_summary": "STDVOL is calculated monthly from the prior 36 months beginning at t-2 and is used as an alternative variability measure in the paper's cross-sectional return regressions. Its coefficients are similar to those on CVVOL, but the paper's portfolio table double-sorts SIZE with CVVOL rather than forming a standalone STDVOL long-short portfolio.",
      "sample_and_timing": "NYSE/AMEX common stocks, January 1966-December 1995; at least 12 dollar-volume observations in the prior 36 months are required.",
      "breakpoints": "Monthly regression characteristic; the reported portfolio double sort is SIZE-CVVOL, not STDVOL endpoints.",
      "weighting": "Fama-MacBeth and purged regression estimators; no standalone STDVOL portfolio weights.",
      "rebalancing_frequency": "Monthly.",
      "holding_period": "One-month return regression.",
      "paper_long_leg": "N/A",
      "paper_short_leg": "N/A",
      "confidence": "high",
      "evidence_type": "extracted_text",
      "evidence_pointer": "extracted-text/chordia-2001-publisher.txt:43-60,110-121,216-219,664-665,1684-1684",
      "reviewer_notes": "Publisher full text defines the exact 36-month measure and reports similar coefficients to CVVOL. That evidence supports a negative regression relation but not a simple L-H portfolio.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "STDVOL – the natural logarithm of the standard deviation of dollar volume calculated over the past 36 months beginning in the second to last month.",
          "page": 1,
          "line_start": 43,
          "line_end": 60,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/chordia-2001-publisher.txt",
          "href": "../papers/chordia-2001/chordia-2001-publisher-fulltext.html#:~:text=STDVOL%20%E2%80%93%20the%20natural%20logarithm%20of%20the%20standard%20deviation%20of%20dollar%20volume%20calculated%20over%20the%20past%2036%20months%20beginning%20in%20the%20second%20to%20last%20month.",
          "open_label": "在本地 HTML 中定位"
        },
        {
          "text": "DVOL is the logarithm of the dollar trading volume, and STDVOL and CVVOL are the logarithms of the standard deviation and the coefficient of variation of dollar trading volume calculated over the past 36 months.",
          "page": 1,
          "line_start": 110,
          "line_end": 121,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/chordia-2001-publisher.txt",
          "href": "../papers/chordia-2001/chordia-2001-publisher-fulltext.html#:~:text=DVOL%20is%20the%20logarithm%20of%20the%20dollar%20trading%20volume%2C%20and%20STDVOL%20and%20CVVOL%20are%20the%20logarithms%20of%20the%20standard%20deviation%20and%20the%20coefficient%20of%20variation%20of%20dollar%20trading%20volume%20calc",
          "open_label": "在本地 HTML 中定位"
        },
        {
          "text": "SIZE represents the market capitalization, CVVOL is the coefficient of variation of dollar trading volume, and CVTURN is the coefficient of variation of turnover calculated each month using 3 years of lagged monthly data.",
          "page": 1,
          "line_start": 216,
          "line_end": 219,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/chordia-2001-publisher.txt",
          "href": "../papers/chordia-2001/chordia-2001-publisher-fulltext.html#:~:text=SIZE%20represents%20the%20market%20capitalization%2C%20CVVOL%20is%20the%20coefficient%20of%20variation%20of%20dollar%20trading%20volume%2C%20and%20CVTURN%20is%20the%20coefficient%20of%20variation%20of%20turnover%20calculated%20each%20mo",
          "open_label": "在本地 HTML 中定位"
        },
        {
          "text": "In order to address the issue that the mean DVOL over the past 36 months could be picking up some level effect, we defined CVVOL by dividing the standard deviation by the value of DVOL at time t−2.",
          "page": 1,
          "line_start": 664,
          "line_end": 665,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/chordia-2001-publisher.txt",
          "href": "../papers/chordia-2001/chordia-2001-publisher-fulltext.html#:~:text=In%20order%20to%20address%20the%20issue%20that%20the%20mean%20DVOL%20over%20the%20past%2036%20months%20could%20be%20picking%20up%20some%20level%20effect%2C%20we%20defined%20CVVOL%20by%20dividing%20the%20standard%20deviation%20by%20the%20value%20of%20",
          "open_label": "在本地 HTML 中定位"
        },
        {
          "text": "The coefficients on standard deviation of volume (STDVOL) were similar to those on CVVOL.",
          "page": 1,
          "line_start": 1684,
          "line_end": 1684,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/chordia-2001-publisher.txt",
          "href": "../papers/chordia-2001/chordia-2001-publisher-fulltext.html#:~:text=The%20coefficients%20on%20standard%20deviation%20of%20volume%20%28STDVOL%29%20were%20similar%20to%20those%20on%20CVVOL.",
          "open_label": "在本地 HTML 中定位"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "chordia-2001",
        "title": "Trading Activity and Expected Stock Returns",
        "authors": "Tarun Chordia; Avanidhar Subrahmanyam; V. Ravi Anshuman",
        "year": "2001",
        "venue": "Journal of Financial Economics",
        "doi": "10.1016/S0304-405X(00)00080-5",
        "source_url": "https://www.sciencedirect.com/science/article/pii/S0304405X00000805",
        "local_file": "papers/chordia-2001/chordia-2001-publisher-fulltext.html",
        "local_href": "../papers/chordia-2001/chordia-2001-publisher-fulltext.html",
        "artifact_type": "html",
        "pdf_pages": null,
        "access_status": "full_text_html_publisher_verified"
      },
      "method_variants": [
        {
          "id": "chordia-2001",
          "source_id": "chordia-2001",
          "role": "original_paper",
          "source_label": "Trading Activity and Expected Stock Returns",
          "source_year": "2001",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{STDVOL}_{i,t}=\\ln\\!\\left[\\operatorname{SD}\\!\\left(\\mathrm{DollarVolume}_{i,\\tau}\\right)_{\\tau=t-37}^{t-2}\\right]\\)",
          "data_fields": "natural logarithm of the standard deviation of dollar trading volume over the past 36 months",
          "calculation_window": {
            "zh": "NYSE/AMEX common stocks, January 1966-December 1995; at least 12 dollar-volume observations in the prior 36 months are required.",
            "en": "NYSE/AMEX common stocks, January 1966-December 1995; at least 12 dollar-volume observations in the prior 36 months are required."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Monthly regression characteristic; the reported portfolio double sort is SIZE-CVVOL, not STDVOL endpoints. Fama-MacBeth and purged regression estimators; no standalone STDVOL portfolio weights. Monthly. One-month return regression.",
            "en": "Monthly regression characteristic; the reported portfolio double sort is SIZE-CVVOL, not STDVOL endpoints. Fama-MacBeth and purged regression estimators; no standalone STDVOL portfolio weights. Monthly. One-month return regression."
          },
          "direction": "not-simple",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/chordia-2001/chordia-2001-publisher-fulltext.html",
          "source_page": 1,
          "source_href": "../papers/chordia-2001/chordia-2001-publisher-fulltext.html#:~:text=STDVOL%20%E2%80%93%20the%20natural%20logarithm%20of%20the%20standard%20deviation%20of%20dollar%20volume%20calculated%20over%20the%20past%2036%20months%20beginning%20in%20the%20second%20to%20last%20month."
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{STD\\_DOLVOL}_{i,t}=\\operatorname{Std}_{s=t-w+1}^{t} \\left(\\log|\\mathrm{VOL}_{i,s}\\mathrm{PRC}_{i,s}|\\right)\\)",
        "formula_direction": "-1",
        "data_fields": "CRSP: PRC, VOL",
        "calculation_window": {
          "zh": "日频输入；滚动 3 个月，至少 21 个观测。",
          "en": "Daily inputs; rolling three months with at least 21 observations."
        },
        "accounting_lag": {
          "zh": "信号在 t 月形成；最终输出将收益移至 t+1 月。",
          "en": "The signal is formed at month t; final output shifts the return to month t+1."
        },
        "source_label": "EquityChars CIZ · rolling_chars.py · L174",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/rolling_chars.py#L174",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/rolling_chars.py",
        "code_lines": "174",
        "code_frequency": {
          "zh": "日频输入；滚动 3 个月，至少 21 个观测。",
          "en": "Daily inputs; rolling three months with at least 21 observations."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      },
      "method_design": {
        "family": "cross_sectional_return_regression",
        "summary": {
          "zh": "用截至t−2的过去36个月数据估计美元成交额标准差，并将其作为替代交易量波动度量置于横截面收益回归；组合表检验的是规模与变异系数的双重排序。",
          "en": "STDVOL is calculated monthly from the prior 36 months beginning at t-2 and is used as an alternative variability measure in the paper's cross-sectional return regressions. Its coefficients are similar to those on CVVOL, but the paper's portfolio table double-sorts SIZE with CVVOL rather than forming a standalone STDVOL long-short portfolio."
        },
        "signal_role": {
          "zh": "替代波动性解释变量",
          "en": "Alternative variability predictor"
        },
        "estimand": {
          "zh": "下一月股票收益",
          "en": "Next-month stock return"
        },
        "interpretation": {
          "zh": "论文对该变量的证据来自回归系数；所报告的双重排序使用另一波动度量，不能视为该变量的独立多空组合。",
          "en": ""
        }
      }
    },
    {
      "id": "std_turn",
      "name": "Std. of Share turnover rolling 3m",
      "signal_definition": "Std. of Share turnover rolling 3m",
      "sort_variable": "std_turn",
      "code_direction": "L-H",
      "paper_direction": "not-simple",
      "direction_label": "非简单多空",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "Low",
      "code_short_leg": "High",
      "code_notes": "Repo attribution: Chordia, Subrahmanyam, and Anshuman (2001). Formula table direction: -1.",
      "raw_signal": "natural logarithm of the standard deviation of share turnover over the past 36 months",
      "construction_summary": "STDTURN is calculated monthly from the prior 36 months beginning at t-2 and enters cross-sectional return tests as a turnover-variability measure. The paper finds returns decrease with turnover variability, but its portfolio table double-sorts SIZE with CVTURN rather than forming a standalone STDTURN long-short portfolio.",
      "sample_and_timing": "NYSE/AMEX common stocks, January 1966-December 1995; monthly characteristics and returns.",
      "breakpoints": "Monthly regression characteristic; the reported portfolio double sort is SIZE-CVTURN, not STDTURN endpoints.",
      "weighting": "Fama-MacBeth and purged regression estimators; no standalone STDTURN portfolio weights.",
      "rebalancing_frequency": "Monthly.",
      "holding_period": "One-month return regression.",
      "paper_long_leg": "N/A",
      "paper_short_leg": "N/A",
      "confidence": "high",
      "evidence_type": "extracted_text",
      "evidence_pointer": "extracted-text/chordia-2001-publisher.txt:36-60,110-121,216-219,665-665,1001-1003",
      "reviewer_notes": "Publisher full text defines the exact 36-month measure and supports a negative regression relation. It does not state a simple STDTURN L-H portfolio.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "STDTURN – the natural logarithm of the standard deviation of turnover calculated over the past 36 months beginning in the second to last month.",
          "page": 1,
          "line_start": 36,
          "line_end": 60,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/chordia-2001-publisher.txt",
          "href": "../papers/chordia-2001/chordia-2001-publisher-fulltext.html#:~:text=STDTURN%20%E2%80%93%20the%20natural%20logarithm%20of%20the%20standard%20deviation%20of%20turnover%20calculated%20over%20the%20past%2036%20months%20beginning%20in%20the%20second%20to%20last%20month.",
          "open_label": "在本地 HTML 中定位"
        },
        {
          "text": "TURN is the logarithm of the share turnover, and STDTURN and CVTURN are the logarithms of the standard deviation and coefficient of variation of share turnover calculated over the past 36 months.",
          "page": 1,
          "line_start": 110,
          "line_end": 121,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/chordia-2001-publisher.txt",
          "href": "../papers/chordia-2001/chordia-2001-publisher-fulltext.html#:~:text=TURN%20is%20the%20logarithm%20of%20the%20share%20turnover%2C%20and%20STDTURN%20and%20CVTURN%20are%20the%20logarithms%20of%20the%20standard%20deviation%20and%20coefficient%20of%20variation%20of%20share%20turnover%20calculated%20over%20the%20",
          "open_label": "在本地 HTML 中定位"
        },
        {
          "text": "Portfolio returns for SIZE-CVVOL and SIZE-CVTURN portfolios This table presents time series averages of the monthly median excess returns and the monthly median risk-adjusted returns.",
          "page": 1,
          "line_start": 216,
          "line_end": 219,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/chordia-2001-publisher.txt",
          "href": "../papers/chordia-2001/chordia-2001-publisher-fulltext.html#:~:text=Portfolio%20returns%20for%20SIZE-CVVOL%20and%20SIZE-CVTURN%20portfolios%20This%20table%20presents%20time%20series%20averages%20of%20the%20monthly%20median%20excess%20returns%20and%20the%20monthly%20median%20risk-adjusted%20retur",
          "open_label": "在本地 HTML 中定位"
        },
        {
          "text": "This result is not surprising given that the correlation in Table 2 between SIZE and DVOL is 0.89 while that between SIZE and TURN is less than 0.1.",
          "page": 1,
          "line_start": 665,
          "line_end": 665,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/chordia-2001-publisher.txt",
          "href": "../papers/chordia-2001/chordia-2001-publisher-fulltext.html#:~:text=This%20result%20is%20not%20surprising%20given%20that%20the%20correlation%20in%20Table%202%20between%20SIZE%20and%20DVOL%20is%200.89%20while%20that%20between%20SIZE%20and%20TURN%20is%20less%20than%200.1.",
          "open_label": "在本地 HTML 中定位"
        },
        {
          "text": "Fama-Macbeth regression estimates: includes non-linear terms and coefficients of variation of DVOL and TURN as explanatory variables (Fama and Macbeth, 1973) This table presents two sets of results, one for dollar trading volume and one for turnover.",
          "page": 1,
          "line_start": 1001,
          "line_end": 1003,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/chordia-2001-publisher.txt",
          "href": "../papers/chordia-2001/chordia-2001-publisher-fulltext.html#:~:text=Fama-Macbeth%20regression%20estimates%3A%20includes%20non-linear%20terms%20and%20coefficients%20of%20variation%20of%20DVOL%20and%20TURN%20as%20explanatory%20variables%20%28Fama%20and%20Macbeth%2C%201973%29%20This%20table%20presents%20tw",
          "open_label": "在本地 HTML 中定位"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "chordia-2001",
        "title": "Trading Activity and Expected Stock Returns",
        "authors": "Tarun Chordia; Avanidhar Subrahmanyam; V. Ravi Anshuman",
        "year": "2001",
        "venue": "Journal of Financial Economics",
        "doi": "10.1016/S0304-405X(00)00080-5",
        "source_url": "https://www.sciencedirect.com/science/article/pii/S0304405X00000805",
        "local_file": "papers/chordia-2001/chordia-2001-publisher-fulltext.html",
        "local_href": "../papers/chordia-2001/chordia-2001-publisher-fulltext.html",
        "artifact_type": "html",
        "pdf_pages": null,
        "access_status": "full_text_html_publisher_verified"
      },
      "method_variants": [
        {
          "id": "chordia-2001",
          "source_id": "chordia-2001",
          "role": "original_paper",
          "source_label": "Trading Activity and Expected Stock Returns",
          "source_year": "2001",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{STDTURN}_{i,t}=\\ln\\!\\left[\\operatorname{SD}\\!\\left(\\mathrm{Turnover}_{i,\\tau}\\right)_{\\tau=t-37}^{t-2}\\right]\\)",
          "data_fields": "natural logarithm of the standard deviation of share turnover over the past 36 months",
          "calculation_window": {
            "zh": "NYSE/AMEX common stocks, January 1966-December 1995; monthly characteristics and returns.",
            "en": "NYSE/AMEX common stocks, January 1966-December 1995; monthly characteristics and returns."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Monthly regression characteristic; the reported portfolio double sort is SIZE-CVTURN, not STDTURN endpoints. Fama-MacBeth and purged regression estimators; no standalone STDTURN portfolio weights. Monthly. One-month return regression.",
            "en": "Monthly regression characteristic; the reported portfolio double sort is SIZE-CVTURN, not STDTURN endpoints. Fama-MacBeth and purged regression estimators; no standalone STDTURN portfolio weights. Monthly. One-month return regression."
          },
          "direction": "not-simple",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/chordia-2001/chordia-2001-publisher-fulltext.html",
          "source_page": 1,
          "source_href": "../papers/chordia-2001/chordia-2001-publisher-fulltext.html#:~:text=STDTURN%20%E2%80%93%20the%20natural%20logarithm%20of%20the%20standard%20deviation%20of%20turnover%20calculated%20over%20the%20past%2036%20months%20beginning%20in%20the%20second%20to%20last%20month."
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{STD\\_TURN}_{i,t}=\\operatorname{Std}_{s=t-w+1}^{t} \\left(\\frac{\\mathrm{VOL}_{i,s}}{\\mathrm{SHROUT}_{i,s}}\\right)\\)",
        "formula_direction": "-1",
        "data_fields": "CRSP: SHROUT, VOL",
        "calculation_window": {
          "zh": "日频输入；滚动 3 个月，至少 21 个观测。",
          "en": "Daily inputs; rolling three months with at least 21 observations."
        },
        "accounting_lag": {
          "zh": "信号在 t 月形成；最终输出将收益移至 t+1 月。",
          "en": "The signal is formed at month t; final output shifts the return to month t+1."
        },
        "source_label": "EquityChars CIZ · rolling_chars.py · L189",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/rolling_chars.py#L189",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/rolling_chars.py",
        "code_lines": "189",
        "code_frequency": {
          "zh": "日频输入；滚动 3 个月，至少 21 个观测。",
          "en": "Daily inputs; rolling three months with at least 21 observations."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      },
      "method_design": {
        "family": "cross_sectional_return_regression",
        "summary": {
          "zh": "用截至t−2的过去36个月数据估计换手率标准差，并将其置于横截面收益回归；组合表检验的是规模与换手率变异系数的双重排序。",
          "en": "STDTURN is calculated monthly from the prior 36 months beginning at t-2 and enters cross-sectional return tests as a turnover-variability measure. The paper finds returns decrease with turnover variability, but its portfolio table double-sorts SIZE with CVTURN rather than forming a standalone STDTURN long-short portfolio."
        },
        "signal_role": {
          "zh": "替代波动性解释变量",
          "en": "Alternative variability predictor"
        },
        "estimand": {
          "zh": "下一月股票收益",
          "en": "Next-month stock return"
        },
        "interpretation": {
          "zh": "论文对该变量的证据来自回归系数；所报告的双重排序使用另一波动度量，不能视为该变量的独立多空组合。",
          "en": ""
        }
      }
    },
    {
      "id": "sue",
      "name": "Unexpected quarterly earnings",
      "signal_definition": "Unexpected quarterly earnings",
      "sort_variable": "sue",
      "code_direction": "H-L",
      "paper_direction": "H-L",
      "direction_label": "高值做多 · 低值做空",
      "agreement": "yes",
      "status": "paper_direction_verified",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Rendelman, Jones, and Latane (1982). Formula table direction: +1.",
      "raw_signal": "standardized unexpected quarterly earnings (SUE)",
      "construction_summary": "The published trading test forms portfolios from the 20 highest and 20 lowest SUE stocks, matches each leg to beta one, and calculates high-SUE minus low-SUE three-month returns. Its broader event study assigns every stock to ten fixed SUE ranges and confirms that the highest categories rise while the lowest fall.",
      "sample_and_timing": "36 quarters from 1971Q3 through 1980Q2; Compustat quarterly earnings and announcement dates are matched to CRSP daily returns.",
      "breakpoints": "Trading test: highest 20 versus lowest 20 SUE stocks. Event study: ten fixed SUE categories from SUE <= -4 through SUE > 4.",
      "weighting": "Each 20-stock leg is divided into two equally weighted ten-stock groups and weighted to beta one; unadjusted results are also reported. Event-category excess returns are equally weighted.",
      "rebalancing_frequency": "Quarterly/event-driven.",
      "holding_period": "Three months for the portfolio test, with starting positions one through five months after fiscal-quarter close; event study covers day -20 through +90 around the announcement.",
      "paper_long_leg": "Highest-SUE stocks / favorable unexpected earnings.",
      "paper_short_leg": "Lowest-SUE stocks / unfavorable unexpected earnings.",
      "confidence": "high",
      "evidence_type": "publisher_final_pdf",
      "evidence_pointer": "extracted-text/rendelman-1982-publisher.txt:267-300,313-338,528-576,616-647,771-812",
      "reviewer_notes": "Verified against the formal 19-page Journal of Financial Economics PDF. The paper explicitly reports differences between high- and low-SUE portfolio returns; this is a high-minus-low direction.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "This was done by dividing each 20 stock portfolio into two equally weighted portfolios portfolio beta to one; that is, both the high and low SUE portfolios are constructed to have a beta risk of one.8 Reinganum in the expected returns between these portfolios should be zero under the null hypothesis that the CAPM describes asset pricing.",
          "page": 6,
          "line_start": 267,
          "line_end": 300,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/rendelman-1982-publisher.txt",
          "href": "../papers/rendelman-1982/rendelman-1982-publisher.pdf#page=6",
          "open_label": "查看 PDF 第 6 页"
        },
        {
          "text": "This will allow us to assess the importance for strategies such as SUE. as differences between the high SUE and low SUE 20 stock to be releasing quarterly earnings analysis covered only the eight 1977.3; therefore, this analysis is able to examine preceding his sample period and the 11 quarters to be noted from table 2 is that, unlike Reinganum, Almost all of the mean ‘abnormal’ returns",
          "page": 7,
          "line_start": 313,
          "line_end": 338,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/rendelman-1982-publisher.txt",
          "href": "../papers/rendelman-1982/rendelman-1982-publisher.pdf#page=7",
          "open_label": "查看 PDF 第 7 页"
        },
        {
          "text": "Table 3 Mean standardized unexpected earnings portfolios wtth alternative rusk adjustments.” Number of months after quarter that portfolio position is taken +1 OLS beta?",
          "page": 11,
          "line_start": 528,
          "line_end": 576,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/rendelman-1982-publisher.txt",
          "href": "../papers/rendelman-1982/rendelman-1982-publisher.pdf#page=11",
          "open_label": "查看 PDF 第 11 页"
        },
        {
          "text": "This analysis will indicate the effectiveness of SUE for all stocks in the sample rather than only the 20 stocks with the highest and lowest SUES.",
          "page": 12,
          "line_start": 616,
          "line_end": 647,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/rendelman-1982-publisher.txt",
          "href": "../papers/rendelman-1982/rendelman-1982-publisher.pdf#page=12",
          "open_label": "查看 PDF 第 12 页"
        },
        {
          "text": "281 with the public announcement all stocks with a SUE 5 -4.0 (category excess returns are calculated the announcement date of as the difference between the market returns, using NYSE-AMEX in the previous should not significantly for all stocks within each over days -20 dates during the quarter, and cumulated a 36 quarter summary of the cumulative",
          "page": 13,
          "line_start": 616,
          "line_end": 647,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/rendelman-1982-publisher.txt",
          "href": "../papers/rendelman-1982/rendelman-1982-publisher.pdf#page=13",
          "open_label": "查看 PDF 第 13 页"
        },
        {
          "text": "Taking the two highest SUE categories (#9 and # lo), we can make the following generalization: of the total response in stock returns over the period extending 20 days before the announcement after the announcement, 31% occurred before the day of announcement, on the day of announcement, the corresponding two lowest SUE categories ( # 1 and #2), the response averaged: 40% prior to announcement, and 45% after the announcement consistent in suggesting that the market does not assimilate favorable or unfavorable",
          "page": 15,
          "line_start": 771,
          "line_end": 812,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/rendelman-1982-publisher.txt",
          "href": "../papers/rendelman-1982/rendelman-1982-publisher.pdf#page=15",
          "open_label": "查看 PDF 第 15 页"
        },
        {
          "text": "Rendleman, Jr. et al., Unexpected earnings and abnormal stock returns Instead, only about one-half of the total response has taken place by the announcement period are statistically excess returns for the negative SUE categories period, but none excess returns in the positive t-statistics are likely to be understated high variance of earnings.",
          "page": 16,
          "line_start": 771,
          "line_end": 812,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/rendelman-1982-publisher.txt",
          "href": "../papers/rendelman-1982/rendelman-1982-publisher.pdf#page=16",
          "open_label": "查看 PDF 第 16 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "rendelman-1982",
        "title": "Empirical anomalies based on unexpected earnings and the importance of risk adjustments",
        "authors": "Richard J. Rendleman Jr., Charles P. Jones, and Henry A. Latane",
        "year": "1982",
        "venue": "Journal of Financial Economics",
        "doi": "10.1016/0304-405X(82)90003-4",
        "source_url": "https://www.sciencedirect.com/science/article/abs/pii/0304405X82900034",
        "local_file": "papers/rendelman-1982/rendelman-1982-publisher.pdf",
        "local_href": "../papers/rendelman-1982/rendelman-1982-publisher.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 19,
        "access_status": "full_text_pdf_publisher"
      },
      "method_variants": [
        {
          "id": "rendelman-1982",
          "source_id": "rendelman-1982",
          "role": "original_paper",
          "source_label": "Empirical anomalies based on unexpected earnings and the importance of risk adjustments",
          "source_year": "1982",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{SUE}_{i,q}=\\frac{\\mathrm{EPS}_{i,q}-\\mathrm{EPS}_{i,q-4}}{\\sigma_i(\\Delta_4\\mathrm{EPS})}\\)",
          "data_fields": "standardized unexpected quarterly earnings (SUE)",
          "calculation_window": {
            "zh": "36 quarters from 1971Q3 through 1980Q2; Compustat quarterly earnings and announcement dates are matched to CRSP daily returns.",
            "en": "36 quarters from 1971Q3 through 1980Q2; Compustat quarterly earnings and announcement dates are matched to CRSP daily returns."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Trading test: highest 20 versus lowest 20 SUE stocks. Event study: ten fixed SUE categories from SUE <= -4 through SUE > 4. Each 20-stock leg is divided into two equally weighted ten-stock groups and weighted to beta one; unadjusted results are also reported. Event-category excess returns are equally weighted. Quarterly/event-driven. Three months for the portfolio test, with starting positions one through five months after fiscal-quarter close; event study covers day -20 through +90 around the announcement.",
            "en": "Trading test: highest 20 versus lowest 20 SUE stocks. Event study: ten fixed SUE categories from SUE <= -4 through SUE > 4. Each 20-stock leg is divided into two equally weighted ten-stock groups and weighted to beta one; unadjusted results are also reported. Event-category excess returns are equally weighted. Quarterly/event-driven. Three months for the portfolio test, with starting positions one through five months after fiscal-quarter close; event study covers day -20 through +90 around the announcement."
          },
          "direction": "H-L",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/rendelman-1982/rendelman-1982-publisher.pdf",
          "source_page": 6,
          "source_href": "../papers/rendelman-1982/rendelman-1982-publisher.pdf#page=6"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{SUE}_{i,t}=\\frac{\\mathrm{EPS}_{i,t}-\\mathrm{EPS}_{i,t-4}}{\\mathrm{SUE\\_STD}_{i,t}},\\quad \\mathrm{EPS}_{i,t}=\\frac{\\mathrm{EPSPXQ}_{i,t}}{\\mathrm{AJEXQ}_{i,t}}\\)",
        "formula_direction": "+1",
        "data_fields": "Compustat: AJEXQ, EPSPXQ",
        "calculation_window": {
          "zh": "季度财报；季度 SUE 对齐到月度。",
          "en": "Quarterly earnings; quarterly SUE aligned to monthly dates."
        },
        "accounting_lag": {
          "zh": "按 chars_ciz 的季度或事件日期对齐；未另行添加页面假设。",
          "en": "Aligned by the chars_ciz quarterly or event-date rule; the page adds no extra assumption."
        },
        "source_label": "EquityChars CIZ · sue.py · L109",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/sue.py#L109",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/sue.py",
        "code_lines": "109",
        "code_frequency": {
          "zh": "季度财报；季度 SUE 对齐到月度。",
          "en": "Quarterly earnings; quarterly SUE aligned to monthly dates."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      }
    },
    {
      "id": "tang",
      "name": "Debt capacity or firm tangibility",
      "signal_definition": "Debt capacity or firm tangibility",
      "sort_variable": "tang",
      "code_direction": "H-L",
      "paper_direction": "not-simple",
      "direction_label": "非简单多空",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Almeida and Campello (2007). Formula table has no entry for this signal.",
      "raw_signal": "asset tangibility / pledgeable assets",
      "construction_summary": "The published paper studies corporate investment-cash-flow sensitivities rather than stock-return portfolios. Its main firm-level liquidation-value proxy is 0.715 × receivables + 0.547 × inventory + 0.535 × capital, with cash added and the total scaled by lagged assets; alternative industry-liquidity and asset-durability measures are also tested.",
      "sample_and_timing": "COMPUSTAT manufacturing firms (SIC 2000-3999), 1985-2000; variables enter annual investment regressions in lagged form.",
      "breakpoints": "Regression and sample-split tests; descriptive low/high tangibility groups use the bottom/top three annual deciles, but they are not return portfolios.",
      "weighting": "Regression analysis; no stock-portfolio weights.",
      "rebalancing_frequency": "Annual firm-year tests.",
      "holding_period": "N/A",
      "paper_long_leg": "N/A",
      "paper_short_leg": "N/A",
      "confidence": "high",
      "evidence_type": "extracted_text",
      "evidence_pointer": "extracted-text/almeida-2007-publisher.txt:390-430,633-708,927-950,1136-1179",
      "reviewer_notes": "The published RFS article gives the accounting formula and sample design, but it does not define a tang stock-return long-short strategy. Low/high tangibility groups support corporate-investment tests only.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "Many studies in the literature use relatively short data panels and require firms to provide observations during the entire period under investigation 4 These same cut-offs for Q are used by Gilchrist and Himmelberg and we find that their adoption reduces the average Q in our sample to about 1.0: only slightly lower than studies that use our same data sources and definitions but that do not impose bounds on the empirical distribution of Q (Kaplan and Zingales (1997) report an average Q of 1.2, while Polk and Sapienza (2004) report 1.6).",
          "page": 9,
          "line_start": 390,
          "line_end": 430,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/almeida-2007-publisher.txt",
          "href": "../papers/almeida-2007/almeida-campello-2007.pdf#page=9",
          "open_label": "查看 PDF 第 9 页"
        },
        {
          "text": "Here, we follow the existing literature but add to the set of variables included in Z the main driver of our credit multiplier story: asset tangibility.",
          "page": 13,
          "line_start": 633,
          "line_end": 708,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/almeida-2007-publisher.txt",
          "href": "../papers/almeida-2007/almeida-campello-2007.pdf#page=13",
          "open_label": "查看 PDF 第 13 页"
        },
        {
          "text": "(1988). • Scheme #2: In every year over the 1985–2000 period we rank firms based on their total assets and assign to the financially constrained (unconstrained) group those firms in the bottom (top) three deciles of the annual asset size distribution.",
          "page": 14,
          "line_start": 633,
          "line_end": 708,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/almeida-2007-publisher.txt",
          "href": "../papers/almeida-2007/almeida-campello-2007.pdf#page=14",
          "open_label": "查看 PDF 第 14 页"
        },
        {
          "text": "Our first two measures of tangibility are continuous variables and we categorize as ‘‘low-tangibility’’ (‘‘high-tangibility’’) firms those firms ranked in the bottom (top) three deciles of the tangibility distribution; these rankings are performed on an annual basis.",
          "page": 18,
          "line_start": 927,
          "line_end": 950,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/almeida-2007-publisher.txt",
          "href": "../papers/almeida-2007/almeida-campello-2007.pdf#page=18",
          "open_label": "查看 PDF 第 18 页"
        },
        {
          "text": "As in their article, we find that companies that are smaller, that are younger, that pay lower amounts of dividends, that have greater investment opportunities, that do not have bond ratings, and that carry greater financial slack are grouped together into one of the investment regimes (regime 1).11 Our theoretical priors suggest that this is the group of firms that are most likely to be financially constrained.",
          "page": 20,
          "line_start": 1136,
          "line_end": 1179,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/almeida-2007-publisher.txt",
          "href": "../papers/almeida-2007/almeida-campello-2007.pdf#page=20",
          "open_label": "查看 PDF 第 20 页"
        },
        {
          "text": "The Review of Financial Studies / v 20 n 5 2007 Table 3 Investment–Cash Flow Sensitivity and Tangibility: Endogenous Constraint Selection Dependent Variable Investment Independent Variables Q CashFlow Tangibility CashFlow× Tangibility N This table displays results from the investment regressions in the switching regression model (Equations (8)–(10) in the text).",
          "page": 21,
          "line_start": 1136,
          "line_end": 1179,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/almeida-2007-publisher.txt",
          "href": "../papers/almeida-2007/almeida-campello-2007.pdf#page=21",
          "open_label": "查看 PDF 第 21 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "almeida-2007",
        "title": "Financial Constraints, Asset Tangibility, and Corporate Investment",
        "authors": "Heitor Almeida; Murillo Campello",
        "year": "2007",
        "venue": "Review of Financial Studies",
        "doi": "10.1093/rfs/hhm019",
        "source_url": "https://doi.org/10.1093/rfs/hhm019",
        "local_file": "papers/almeida-2007/almeida-campello-2007.pdf",
        "local_href": "../papers/almeida-2007/almeida-campello-2007.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 33,
        "access_status": "full_text_pdf_verified"
      },
      "method_variants": [
        {
          "id": "almeida-2007",
          "source_id": "almeida-2007",
          "role": "original_paper",
          "source_label": "Financial Constraints, Asset Tangibility, and Corporate Investment",
          "source_year": "2007",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{Tang}_{i,t}=\\frac{\\mathrm{CHE}_{i,t}+0.715\\,\\mathrm{RECT}_{i,t}+0.547\\,\\mathrm{INVT}_{i,t}+0.535\\,\\mathrm{PPENT}_{i,t}}{\\mathrm{AT}_{i,t-1}}\\)",
          "data_fields": "asset tangibility / pledgeable assets",
          "calculation_window": {
            "zh": "COMPUSTAT manufacturing firms (SIC 2000-3999), 1985-2000; variables enter annual investment regressions in lagged form.",
            "en": "COMPUSTAT manufacturing firms (SIC 2000-3999), 1985-2000; variables enter annual investment regressions in lagged form."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Regression and sample-split tests; descriptive low/high tangibility groups use the bottom/top three annual deciles, but they are not return portfolios. Regression analysis; no stock-portfolio weights. Annual firm-year tests. N/A",
            "en": "Regression and sample-split tests; descriptive low/high tangibility groups use the bottom/top three annual deciles, but they are not return portfolios. Regression analysis; no stock-portfolio weights. Annual firm-year tests. N/A"
          },
          "direction": "not-simple",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/almeida-2007/almeida-campello-2007.pdf",
          "source_page": 9,
          "source_href": "../papers/almeida-2007/almeida-campello-2007.pdf#page=9"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{TANG}_{i,t}=\\frac{\\mathrm{CHE}_{i,t}+0.715\\,\\mathrm{RECT}_{i,t}+0.547\\,\\mathrm{INVT}_{i,t}+0.535\\,\\mathrm{PPENT}_{i,t}}{\\mathrm{AT}_{i,t}}\\)",
        "formula_direction": "",
        "data_fields": "Compustat: CHE, RECT, INVT, PPENT, AT, SIC",
        "calculation_window": {
          "zh": "年频。",
          "en": "Annual."
        },
        "accounting_lag": {
          "zh": "按 chars_ciz 年频 jdate 对齐；未另行添加页面假设。",
          "en": "Aligned by the chars_ciz annual jdate rule; the page adds no extra assumption."
        },
        "source_label": "EquityChars CIZ · accounting.py · L1225",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L1225",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "1225",
        "code_frequency": {
          "zh": "年频。",
          "en": "Annual."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      },
      "method_design": {
        "family": "corporate_investment_regression",
        "summary": {
          "zh": "以应收账款、存货和固定资本清算价值的加权和加现金并除以滞后总资产，度量资产有形性；该变量进入公司投资—现金流敏感性回归及分组异质性检验。",
          "en": "The published paper studies corporate investment-cash-flow sensitivities rather than stock-return portfolios. Its main firm-level liquidation-value proxy is 0.715 × receivables + 0.547 × inventory + 0.535 × capital, with cash added and the total scaled by lagged assets; alternative industry-liquidity and asset-durability measures are also tested."
        },
        "signal_role": {
          "zh": "公司投资回归解释变量",
          "en": "Explanatory variable in corporate investment regressions"
        },
        "estimand": {
          "zh": "资本支出及投资—现金流敏感性",
          "en": "Capital expenditure and investment–cash-flow sensitivity"
        },
        "interpretation": {
          "zh": "被解释变量是公司投资而非股票收益；高低有形性分组是异质性检验，不构成资产定价多空组合。",
          "en": ""
        }
      }
    },
    {
      "id": "tb",
      "name": "Tax income to book income",
      "signal_definition": "Tax income to book income",
      "sort_variable": "tb",
      "code_direction": "H-L",
      "paper_direction": "not-simple",
      "direction_label": "非简单多空",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Lev and Nissim (2004). Formula table has no entry for this signal.",
      "raw_signal": "tax-to-book income ratio / R TAX",
      "construction_summary": "TAX is estimated taxable income after tax divided by net income; R TAX is the within-two-digit-SIC industry-year quintile rank from 1 to 5. Main return evidence is cross-sectional regressions of next-year stock returns, not a standalone univariate long-short portfolio.",
      "sample_and_timing": "Sample years 1973-2000; annual accounting signal; future annual stock return is measured from May 1 of the subsequent year.",
      "breakpoints": "Within industry-year quintiles of TAX; R TAX=1 lowest quintile and R TAX=5 highest quintile.",
      "weighting": "Regression-based; supplemental 2x2 portfolio analysis uses high/low R TAX crossed with high/low R CFO, not a pure tb portfolio.",
      "rebalancing_frequency": "Annual.",
      "holding_period": "One-year-ahead return from May 1.",
      "paper_long_leg": "high R TAX / high taxable income relative to earnings, but only as regression or conditional portfolio side",
      "paper_short_leg": "low R TAX / low taxable income relative to earnings, but only as regression or conditional portfolio side",
      "confidence": "high",
      "evidence_type": "original_full_text",
      "evidence_pointer": "extracted-text/lev-2004.txt:395-420,470-503,520-650,1390-1403,1535-1555",
      "reviewer_notes": "The source supports the raw signal and positive return association, but the design is regressions plus a bivariate R TAX/R CFO portfolio check.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "Noise in the taxable income Estimate (1) may also arise because the current portion of the income tax expense does not reflect the tax benefits associated with the exercise of nonqualified employee stock options (quite a large effect for many firms; see Hanlon and Shevlin 2002; Desai 2002), as well as the tax benefits from other, less common or material items (e.g., tax benefits from dividends paid on unallocated ESOP shares).12 In addition, current income taxes are reported net of changes in tax cushion reserves, which do not affect taxable income.",
          "page": 8,
          "line_start": 395,
          "line_end": 420,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/lev-2004.txt",
          "href": "../papers/lev-2004/lev-nissim-2004.pdf#page=8",
          "open_label": "查看 PDF 第 8 页"
        },
        {
          "text": "Following Hanlon (2005), we measure the deferred tax fundamental (DEF) as the negative of the ratio of the deferred tax expense to average total assets.14 Similar to the industry-ranked R TAX, we define R DEF as a multinomial variable that takes values between 1 (lowest quintile of DEF for the industry-year group) and 5 (highest quintile).15 14 Following previous studies (e.g., Hanlon 2005), we measure deferred taxes as the sum of deferred federal (Compustat #269) and foreign (#270) income taxes, or, when either of these amounts is missing, as total deferred taxes (#50).",
          "page": 9,
          "line_start": 470,
          "line_end": 503,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/lev-2004.txt",
          "href": "../papers/lev-2004/lev-nissim-2004.pdf#page=9",
          "open_label": "查看 PDF 第 9 页"
        },
        {
          "text": "For each sample year t (1973–2000), we compute the cross- sectional means of the ratio of earnings in the current and each of the subsequent five years (t ⫹ j, j ⫽ 0, 1, 2,...,5), to total assets in year t, for three subsamples of firms: (1) those with R TAX equal to 1 (i.e., firms with a low ratio of tax-to-book income), (2) firms with R TAX between 2 and 4 (intermediate values of tax-to-book income), and (3) firms with R TAX of 5 (high values of tax-to-book income).",
          "page": 10,
          "line_start": 520,
          "line_end": 650,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/lev-2004.txt",
          "href": "../papers/lev-2004/lev-nissim-2004.pdf#page=10",
          "open_label": "查看 PDF 第 10 页"
        },
        {
          "text": "Taxable Income, Future Earnings, and Equity Values 1049 items and a short-term trend in earnings; the average changes in earnings over the last three and five years, deflated by total assets, to capture long-term trends in earnings; the ratio of dividends to total assets, controlling for the likelihood of subsequent earnings declines (larger dividends typically imply a lower likelihood); the ratios of R&D and capital expen- ditures to sales, reflecting expected growth from new investments; and the current earnings- price and book-to-market ratios, reflecting the market expectations of future growth.18 If the tax-based fundamentals do predict earnings growth, that information should either be",
          "page": 11,
          "line_start": 520,
          "line_end": 650,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/lev-2004.txt",
          "href": "../papers/lev-2004/lev-nissim-2004.pdf#page=11",
          "open_label": "查看 PDF 第 11 页"
        },
        {
          "text": "The coefficients on the variables of interest—R TAX, R DEF, and R CFO—should capture the near- to medium-term earnings growth implications of these variables (incremental to an- alysts’ long-term growth forecast, GROW), as reflected in current stock prices.",
          "page": 12,
          "line_start": 520,
          "line_end": 650,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/lev-2004.txt",
          "href": "../papers/lev-2004/lev-nissim-2004.pdf#page=12",
          "open_label": "查看 PDF 第 12 页"
        },
        {
          "text": "R TAX is a multinomial variable that takes values between 1 (lowest quintile of TAX for the industry-year group) and 5 (highest quintile), where TAX is measured as the ratio of taxable-to-net income.",
          "page": 26,
          "line_start": 1390,
          "line_end": 1403,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/lev-2004.txt",
          "href": "../papers/lev-2004/lev-nissim-2004.pdf#page=26",
          "open_label": "查看 PDF 第 26 页"
        },
        {
          "text": "Specifically, in each sam- ple year we partition the observations by quintiles on both the tax and cash flow dimensions, and calculate the subsequent-year abnormal stock returns for the following portfolios:32 1) Low R CFO and Low R TAX 2) Low R CFO and High R TAX 3) High R CFO and Low R TAX 4) High R CFO and High R TAX where ‘‘low’’ and ‘‘high’’ (R CFO or R TAX) refer to the lowest and highest quintiles, respectively.",
          "page": 29,
          "line_start": 1535,
          "line_end": 1555,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/lev-2004.txt",
          "href": "../papers/lev-2004/lev-nissim-2004.pdf#page=29",
          "open_label": "查看 PDF 第 29 页"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "lev-2004",
        "title": "Taxable Income, Future Earnings, and Equity Values",
        "authors": "Baruch Lev and Doron Nissim",
        "year": "2004",
        "venue": "The Accounting Review",
        "doi": "10.2308/accr.2004.79.4.1039",
        "source_url": "https://doi.org/10.2308/accr.2004.79.4.1039",
        "local_file": "papers/lev-2004/lev-nissim-2004.pdf",
        "local_href": "../papers/lev-2004/lev-nissim-2004.pdf",
        "artifact_type": "pdf",
        "pdf_pages": 36,
        "access_status": "full_text_pdf_verified"
      },
      "method_variants": [
        {
          "id": "lev-2004",
          "source_id": "lev-2004",
          "role": "original_paper",
          "source_label": "Taxable Income, Future Earnings, and Equity Values",
          "source_year": "2004",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{TAX}_{i,t}=\\frac{\\mathrm{EstimatedTaxableIncomeAfterTax}_{i,t}}{\\mathrm{NetIncome}_{i,t}},\\qquad \\mathrm{RTAX}_{i,t}=\\operatorname{IndustryQuintileRank}(\\mathrm{TAX}_{i,t})\\)",
          "data_fields": "tax-to-book income ratio / R TAX",
          "calculation_window": {
            "zh": "Sample years 1973-2000; annual accounting signal; future annual stock return is measured from May 1 of the subsequent year.",
            "en": "Sample years 1973-2000; annual accounting signal; future annual stock return is measured from May 1 of the subsequent year."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Within industry-year quintiles of TAX; R TAX=1 lowest quintile and R TAX=5 highest quintile. Regression-based; supplemental 2x2 portfolio analysis uses high/low R TAX crossed with high/low R CFO, not a pure tb portfolio. Annual. One-year-ahead return from May 1.",
            "en": "Within industry-year quintiles of TAX; R TAX=1 lowest quintile and R TAX=5 highest quintile. Regression-based; supplemental 2x2 portfolio analysis uses high/low R TAX crossed with high/low R CFO, not a pure tb portfolio. Annual. One-year-ahead return from May 1."
          },
          "direction": "not-simple",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/lev-2004/lev-nissim-2004.pdf",
          "source_page": 8,
          "source_href": "../papers/lev-2004/lev-nissim-2004.pdf#page=8"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle T_{i,t}=\\frac{\\operatorname{coalesce}(\\mathrm{TXFO}_{i,t}+\\mathrm{TXFED}_{i,t},\\mathrm{TXT}_{i,t}-\\mathrm{TXDI}_{i,t})}{\\tau_t\\,\\mathrm{IB}_{i,t}},\\quad \\mathrm{TB}_{i,t}=T_{i,t}-\\overline{T}_{\\mathrm{FFI49}(i),t}\\)",
        "formula_direction": "",
        "data_fields": "Compustat: IB, TXDI, TXFED, TXFO, TXT; Fama–French 49 industry",
        "calculation_window": {
          "zh": "年频。",
          "en": "Annual."
        },
        "accounting_lag": {
          "zh": "按 chars_ciz 年频 jdate 对齐；未另行添加页面假设。",
          "en": "Aligned by the chars_ciz annual jdate rule; the page adds no extra assumption."
        },
        "source_label": "EquityChars CIZ · accounting.py · L1279",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L1279",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "1279",
        "code_frequency": {
          "zh": "年频。",
          "en": "Annual."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      },
      "method_design": {
        "family": "cross_sectional_return_regression",
        "summary": {
          "zh": "估计税后应税收入与账面净利润之比，并在行业—年度内形成五分位秩；主要证据来自下一年度收益回归，补充检验将税会差异与现金流进行二维组合。",
          "en": "TAX is estimated taxable income after tax divided by net income; R TAX is the within-two-digit-SIC industry-year quintile rank from 1 to 5. Main return evidence is cross-sectional regressions of next-year stock returns, not a standalone univariate long-short portfolio."
        },
        "signal_role": {
          "zh": "行业内横截面预测变量",
          "en": "Within-industry cross-sectional predictor"
        },
        "estimand": {
          "zh": "下一年度股票收益",
          "en": "One-year-ahead stock return"
        },
        "interpretation": {
          "zh": "论文的主要识别对象是条件回归系数；补充二维组合也不是税会差异的单变量多空组合。",
          "en": ""
        }
      }
    },
    {
      "id": "turn",
      "name": "Shares turnover",
      "signal_definition": "Shares turnover",
      "sort_variable": "turn",
      "code_direction": "L-H",
      "paper_direction": "not-simple",
      "direction_label": "非简单多空",
      "agreement": "n/a",
      "status": "paper_source_no_simple_lms",
      "code_long_leg": "Low",
      "code_short_leg": "High",
      "code_notes": "Repo attribution: Datar, Naik, and Radcliffe (1998). Formula table direction: -1.",
      "raw_signal": "average shares traded over months t-3 to t-1 divided by shares outstanding",
      "construction_summary": "The published paper measures monthly turnover from average share volume over the previous three months divided by shares outstanding, then runs monthly cross-sectional return regressions using a GLS refinement of Fama-MacBeth. The negative turnover slope implies lower-turnover stocks have higher returns, but no turnover-sorted long-short portfolio is formed.",
      "sample_and_timing": "NYSE common stocks, July 1963-December 1991; 342 monthly cross-sectional regressions, with complete and 1%-trimmed samples.",
      "breakpoints": "Regression characteristic; the 10th-versus-90th-percentile difference is an economic-magnitude calculation from the estimated slope, not a portfolio sort.",
      "weighting": "GLS aggregation of monthly cross-sectional regression slopes; no portfolio weights.",
      "rebalancing_frequency": "Monthly.",
      "holding_period": "One-month return regression.",
      "paper_long_leg": "N/A",
      "paper_short_leg": "N/A",
      "confidence": "high",
      "evidence_type": "extracted_text",
      "evidence_pointer": "extracted-text/datar-1998-publisher.txt:1-30,115-123,457-462",
      "reviewer_notes": "The publisher full text defines the exact three-month turnover input and regression design. The reported percentile comparison is implied by the slope and should not be labeled a traded L-H portfolio.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "For every month t, we calculate the average monthly trading volume (the average number of shares traded during the previous three months, i.e., during months t−3, t−2 and t−1) and divide it by the number of shares outstanding of that firm.",
          "page": 1,
          "line_start": 1,
          "line_end": 30,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/datar-1998-publisher.txt",
          "href": "../papers/datar-1998/datar-1998-publisher-fulltext.html#:~:text=For%20every%20month%20t%2C%20we%20calculate%20the%20average%20monthly%20trading%20volume%20%28the%20average%20number%20of%20shares%20traded%20during%20the%20previous%20three%20months%2C%20i.e.%2C%20during%20months%20t%E2%88%923%2C%20t%E2%88%922%20and%20t%E2%88%921%29%20and%20",
          "open_label": "在本地 HTML 中定位"
        },
        {
          "text": "Average slopes of monthly cross-sectional regressions of returns on turnover, book-to-market, log of size and beta.",
          "page": 1,
          "line_start": 115,
          "line_end": 123,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/datar-1998-publisher.txt",
          "href": "../papers/datar-1998/datar-1998-publisher-fulltext.html#:~:text=Average%20slopes%20of%20monthly%20cross-sectional%20regressions%20of%20returns%20on%20turnover%2C%20book-to-market%2C%20log%20of%20size%20and%20beta.",
          "open_label": "在本地 HTML 中定位"
        },
        {
          "text": "In order to examine the magnitude of illiquidity premium implied by our results, we subtracted the turnover rate of an illiquid stock (the 10th percentile) from that of a liquid stock (the 90th percentile) and found the difference to be around 6%.",
          "page": 1,
          "line_start": 457,
          "line_end": 462,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/datar-1998-publisher.txt",
          "href": "../papers/datar-1998/datar-1998-publisher-fulltext.html#:~:text=In%20order%20to%20examine%20the%20magnitude%20of%20illiquidity%20premium%20implied%20by%20our%20results%2C%20we%20subtracted%20the%20turnover%20rate%20of%20an%20illiquid%20stock%20%28the%2010th%20percentile%29%20from%20that%20of%20a%20liquid%20st",
          "open_label": "在本地 HTML 中定位"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "datar-1998",
        "title": "Liquidity and Stock Returns: An Alternative Test",
        "authors": "Vinay T. Datar; Narayan Y. Naik; Robert Radcliffe",
        "year": "1998",
        "venue": "Journal of Financial Markets",
        "doi": "10.1016/S1386-4181(97)00004-9",
        "source_url": "https://www.sciencedirect.com/science/article/pii/S1386418197000049",
        "local_file": "papers/datar-1998/datar-1998-publisher-fulltext.html",
        "local_href": "../papers/datar-1998/datar-1998-publisher-fulltext.html",
        "artifact_type": "html",
        "pdf_pages": null,
        "access_status": "full_text_html_publisher_verified"
      },
      "method_variants": [
        {
          "id": "datar-1998",
          "source_id": "datar-1998",
          "role": "original_paper",
          "source_label": "Liquidity and Stock Returns: An Alternative Test",
          "source_year": "1998",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{TURN}_{i,t}=\\frac{\\frac{1}{3}\\sum_{\\tau=t-3}^{t-1}\\mathrm{Volume}_{i,\\tau}}{\\mathrm{SharesOutstanding}_{i,t-1}}\\)",
          "data_fields": "average shares traded over months t-3 to t-1 divided by shares outstanding",
          "calculation_window": {
            "zh": "NYSE common stocks, July 1963-December 1991; 342 monthly cross-sectional regressions, with complete and 1%-trimmed samples.",
            "en": "NYSE common stocks, July 1963-December 1991; 342 monthly cross-sectional regressions, with complete and 1%-trimmed samples."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Regression characteristic; the 10th-versus-90th-percentile difference is an economic-magnitude calculation from the estimated slope, not a portfolio sort. GLS aggregation of monthly cross-sectional regression slopes; no portfolio weights. Monthly. One-month return regression.",
            "en": "Regression characteristic; the 10th-versus-90th-percentile difference is an economic-magnitude calculation from the estimated slope, not a portfolio sort. GLS aggregation of monthly cross-sectional regression slopes; no portfolio weights. Monthly. One-month return regression."
          },
          "direction": "not-simple",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/datar-1998/datar-1998-publisher-fulltext.html",
          "source_page": 1,
          "source_href": "../papers/datar-1998/datar-1998-publisher-fulltext.html#:~:text=For%20every%20month%20t%2C%20we%20calculate%20the%20average%20monthly%20trading%20volume%20%28the%20average%20number%20of%20shares%20traded%20during%20the%20previous%20three%20months%2C%20i.e.%2C%20during%20months%20t%E2%88%923%2C%20t%E2%88%922%20and%20t%E2%88%921%29%20and%20"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{TURN}_{i,t}=\\frac{(\\mathrm{VOL}_{i,t-1}+\\mathrm{VOL}_{i,t-2}+\\mathrm{VOL}_{i,t-3})/3/1000}{\\mathrm{SHROUT}_{i,t}}\\)",
        "formula_direction": "-1",
        "data_fields": "CRSP: SHROUT, VOL",
        "calculation_window": {
          "zh": "月频；前 3 个月成交量均值除以当期流通股数。",
          "en": "Monthly; mean volume over the prior three months divided by current shares outstanding."
        },
        "accounting_lag": {
          "zh": "信号在 t 月形成；最终输出将收益移至 t+1 月。",
          "en": "The signal is formed at month t; final output shifts the return to month t+1."
        },
        "source_label": "EquityChars CIZ · accounting.py · L2150",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/accounting.py#L2150",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/accounting.py",
        "code_lines": "2150",
        "code_frequency": {
          "zh": "月频。",
          "en": "Monthly."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      },
      "method_design": {
        "family": "cross_sectional_return_regression",
        "summary": {
          "zh": "以过去三个月平均成交股数除以流通股数构造月度换手率，并采用Fama–MacBeth的GLS扩展估计逐月横截面收益斜率。",
          "en": "The published paper measures monthly turnover from average share volume over the previous three months divided by shares outstanding, then runs monthly cross-sectional return regressions using a GLS refinement of Fama-MacBeth. The negative turnover slope implies lower-turnover stocks have higher returns, but no turnover-sorted long-short portfolio is formed."
        },
        "signal_role": {
          "zh": "流动性代理变量",
          "en": "Liquidity proxy"
        },
        "estimand": {
          "zh": "下一月股票收益",
          "en": "Next-month stock return"
        },
        "interpretation": {
          "zh": "论文报告的是换手率的条件收益斜率及其经济量级，没有形成换手率排序的独立多空组合。",
          "en": ""
        }
      }
    },
    {
      "id": "zerotrade",
      "name": "Number of zero-trading days rolling 3m",
      "signal_definition": "Number of zero-trading days rolling 3m",
      "sort_variable": "zerotrade",
      "code_direction": "H-L",
      "paper_direction": "H-L",
      "direction_label": "高值做多 · 低值做空",
      "agreement": "yes",
      "status": "paper_direction_verified",
      "code_long_leg": "High",
      "code_short_leg": "Low",
      "code_notes": "Repo attribution: Liu (2006). Formula table direction: +1.",
      "raw_signal": "LM12 = standardized turnover-adjusted number of zero daily trading volumes over the prior 12 months",
      "construction_summary": "The published article sorts stocks in ascending LM12 each month, forms equally weighted deciles using NYSE breakpoints, and reports B-S: the highest-LM12 least-liquid decile minus the lowest-LM12 most-liquid decile.",
      "sample_and_timing": "January 1963-December 2003 NYSE/AMEX ordinary common stocks; portfolios form monthly from January 1964 to January 2003.",
      "breakpoints": "Monthly deciles using NYSE breakpoints.",
      "weighting": "Equal-weighted portfolios.",
      "rebalancing_frequency": "Monthly.",
      "holding_period": "12 months.",
      "paper_long_leg": "Highest-LM12 decile B / least liquid stocks.",
      "paper_short_leg": "Lowest-LM12 decile S / most liquid stocks.",
      "confidence": "high",
      "evidence_type": "publisher_full_text",
      "evidence_pointer": "extracted-text/liu-2006-publisher.txt:27,30,34-35,569-577,757,1636",
      "reviewer_notes": "Verified against the formal Journal of Financial Markets publisher full text; LM12 definition, ascending sort, breakpoints, holding period, and B-minus-S direction are explicit.",
      "audit_sources": [],
      "evidence": [
        {
          "text": "In the first part of this study, I propose a new liquidity measure for individual stocks, which I define as the standardized turnover-adjusted number of zero daily trading volumes over the prior 12 months.",
          "page": 1,
          "line_start": 27,
          "line_end": 27,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/liu-2006-publisher.txt",
          "href": "../papers/liu-2006/liu-2006-publisher-fulltext.html#:~:text=In%20the%20first%20part%20of%20this%20study%2C%20I%20propose%20a%20new%20liquidity%20measure%20for%20individual%20stocks%2C%20which%20I%20define%20as%20the%20standardized%20turnover-adjusted%20number%20of%20zero%20daily%20trading%20volumes%20",
          "open_label": "在本地 HTML 中定位"
        },
        {
          "text": "I construct the liquidity factor as the profits of the mimicking portfolio that buys $1 of the low-liquidity portfolio and sells $1 of the high-liquidity portfolio.",
          "page": 1,
          "line_start": 30,
          "line_end": 30,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/liu-2006-publisher.txt",
          "href": "../papers/liu-2006/liu-2006-publisher-fulltext.html#:~:text=I%20construct%20the%20liquidity%20factor%20as%20the%20profits%20of%20the%20mimicking%20portfolio%20that%20buys%20%241%20of%20the%20low-liquidity%20portfolio%20and%20sells%20%241%20of%20the%20high-liquidity%20portfolio.",
          "open_label": "在本地 HTML 中定位"
        },
        {
          "text": "I define the liquidity measure of a security, LMx, as the standardized turnover-adjusted number of zero daily trading volumes over the prior x months (x=1,6,12), that is,(1)LMx=Numberofzerodailyvolumesinpriorxmonths+1/(x-month turnover)Deflator21xNoTD,where x-month turnover is turnover over the prior x months, calculated as the sum of daily turnover over the prior x months, daily turnover is the ratio of the number of shares traded on a day to the number of shares outstanding at the end of the day, NoTD is the total number of trading days in the market over the prior x months, and Deflator is chosen such that 0<1/(x-monthturnover)Deflator<1for all sample stocks.4 Given the turnover adjustmen",
          "page": 1,
          "line_start": 34,
          "line_end": 35,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/liu-2006-publisher.txt",
          "href": "../papers/liu-2006/liu-2006-publisher-fulltext.html#:~:text=I%20define%20the%20liquidity%20measure%20of%20a%20security%2C%20LMx%2C%20as%20the%20standardized%20turnover-adjusted%20number%20of%20zero%20daily%20trading%20volumes%20over%20the%20prior%20x%20months%20%28x%3D1%2C6%2C12%29%2C%20that%20is%2C%281%29LMx%3DNum",
          "open_label": "在本地 HTML 中定位"
        },
        {
          "text": "Looking at the characteristics of the LM12-classified decile portfolios in Table 2, the least liquid decile (B) has, on average, almost two months of zero trading volume days over the prior 12 months.",
          "page": 1,
          "line_start": 569,
          "line_end": 577,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/liu-2006-publisher.txt",
          "href": "../papers/liu-2006/liu-2006-publisher-fulltext.html#:~:text=Looking%20at%20the%20characteristics%20of%20the%20LM12-classified%20decile%20portfolios%20in%20Table%202%2C%20the%20least%20liquid%20decile%20%28B%29%20has%2C%20on%20average%2C%20almost%20two%20months%20of%20zero%20trading%20volume%20days%20over%20",
          "open_label": "在本地 HTML 中定位"
        },
        {
          "text": "At the beginning of each month from January 1964 to January 2003, stocks are sorted in ascending order based on their liquidity measures, LM12—the standardized turnover-adjusted number of zero daily trading volumes over the prior 12 months.",
          "page": 1,
          "line_start": 757,
          "line_end": 757,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/liu-2006-publisher.txt",
          "href": "../papers/liu-2006/liu-2006-publisher-fulltext.html#:~:text=At%20the%20beginning%20of%20each%20month%20from%20January%201964%20to%20January%202003%2C%20stocks%20are%20sorted%20in%20ascending%20order%20based%20on%20their%20liquidity%20measures%2C%20LM12%E2%80%94the%20standardized%20turnover-adjusted%20nu",
          "open_label": "在本地 HTML 中定位"
        },
        {
          "text": "Based on each sort, stocks are grouped into equally weighted decile portfolios using NYSE breakpoints and are held for 12 months.",
          "page": 1,
          "line_start": 1636,
          "line_end": 1636,
          "method": "curated_lines",
          "method_label": "人工定位证据",
          "text_path": "extracted-text/liu-2006-publisher.txt",
          "href": "../papers/liu-2006/liu-2006-publisher-fulltext.html#:~:text=Based%20on%20each%20sort%2C%20stocks%20are%20grouped%20into%20equally%20weighted%20decile%20portfolios%20using%20NYSE%20breakpoints%20and%20are%20held%20for%2012%20months.",
          "open_label": "在本地 HTML 中定位"
        }
      ],
      "evidence_mode": "curated",
      "paper": {
        "id": "liu-2006",
        "title": "A liquidity-augmented capital asset pricing model",
        "authors": "Weimin Liu",
        "year": "2006",
        "venue": "Journal of Financial Economics",
        "doi": "10.1016/j.jfineco.2005.10.001",
        "source_url": "https://doi.org/10.1016/j.jfineco.2005.10.001",
        "local_file": "papers/liu-2006/liu-2006-publisher-fulltext.html",
        "local_href": "../papers/liu-2006/liu-2006-publisher-fulltext.html",
        "artifact_type": "html",
        "pdf_pages": null,
        "access_status": "full_text_html_publisher_verified"
      },
      "method_variants": [
        {
          "id": "liu-2006",
          "source_id": "liu-2006",
          "role": "original_paper",
          "source_label": "A liquidity-augmented capital asset pricing model",
          "source_year": "2006",
          "formula": "",
          "formula_latex": "\\(\\displaystyle \\mathrm{LM12}_{i,t}=\\left[Z_{i,t}^{12}+\\frac{1/\\mathrm{TURN}_{i,t}^{12}}{\\mathrm{Deflator}}\\right]\\frac{252}{\\mathrm{TradingDays}_{i,t}^{12}}\\)",
          "data_fields": "LM12 = standardized turnover-adjusted number of zero daily trading volumes over the prior 12 months",
          "calculation_window": {
            "zh": "January 1963-December 2003 NYSE/AMEX ordinary common stocks; portfolios form monthly from January 1964 to January 2003.",
            "en": "January 1963-December 2003 NYSE/AMEX ordinary common stocks; portfolios form monthly from January 1964 to January 2003."
          },
          "accounting_lag": {
            "zh": "",
            "en": ""
          },
          "portfolio_rule": {
            "zh": "Monthly deciles using NYSE breakpoints. Equal-weighted portfolios. Monthly. 12 months.",
            "en": "Monthly deciles using NYSE breakpoints. Equal-weighted portfolios. Monthly. 12 months."
          },
          "direction": "H-L",
          "formula_match": "paper_definition",
          "notes": {
            "zh": "按论文变量定义转写。",
            "en": "Transcribed from the paper's variable definition."
          },
          "source_path": "papers/liu-2006/liu-2006-publisher-fulltext.html",
          "source_page": 1,
          "source_href": "../papers/liu-2006/liu-2006-publisher-fulltext.html#:~:text=In%20the%20first%20part%20of%20this%20study%2C%20I%20propose%20a%20new%20liquidity%20measure%20for%20individual%20stocks%2C%20which%20I%20define%20as%20the%20standardized%20turnover-adjusted%20number%20of%20zero%20daily%20trading%20volumes%20"
        }
      ],
      "calculation": {
        "formula_latex": "\\(\\displaystyle \\mathrm{ZEROTRADE}_{i,t}= \\left(\\sum_{s=t-w+1}^{t}\\mathrm{COUNTZERO}_{i,s}+ \\frac{1}{\\sum_{s=t-w+1}^{t}\\mathrm{TURN}_{i,s}}/11000\\right) \\frac{21\\cdot 3}{w}\\)",
        "formula_direction": "+1",
        "data_fields": "CRSP: COUNTZERO",
        "calculation_window": {
          "zh": "日频输入；滚动 3 个月，至少 21 个观测。",
          "en": "Daily inputs; rolling three months with at least 21 observations."
        },
        "accounting_lag": {
          "zh": "信号在 t 月形成；最终输出将收益移至 t+1 月。",
          "en": "The signal is formed at month t; final output shifts the return to month t+1."
        },
        "source_label": "EquityChars CIZ · rolling_chars.py · L214",
        "source_url": "https://github.com/Yuning598/EquityChars/blob/9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627/chars_ciz/rolling_chars.py#L214",
        "provenance": "equitychars_ciz_code",
        "source_commit": "9a0fa72d0b2dd688b7bcb72e52ce1f31fc33a627",
        "code_path": "chars_ciz/rolling_chars.py",
        "code_lines": "214",
        "code_frequency": {
          "zh": "日频输入；滚动 3 个月，至少 21 个观测。",
          "en": "Daily inputs; rolling three months with at least 21 observations."
        },
        "reconcile_url": "",
        "notes": {
          "zh": "公式按 chars_ciz 代码转写，不采用旧版 SIZ 口径。",
          "en": "Formula transcribed from chars_ciz; the legacy SIZ definition is not used."
        }
      }
    }
  ]
};
