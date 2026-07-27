Object.assign(window.BOND_ATLAS_DATA ||= {}, {
  "generatedAt": "2026-07-27T17:07:53+00:00",
  "audit": {
    "source_directory": {
      "metric": "source_directory",
      "value": "E:\\Dropbox\\Research\\Data\\BondChars",
      "unit": "path",
      "source": "filesystem",
      "status": "read-only",
      "note": "共享目录本轮仅执行读取、模式检查与哈希计算。"
    },
    "raw_file": {
      "metric": "raw_file",
      "value": "characteristics_raw.feather",
      "unit": "file",
      "source": "filesystem",
      "status": "read-only",
      "note": "未改动。"
    },
    "imputed_file": {
      "metric": "imputed_file",
      "value": "characteristics_imputed.feather",
      "unit": "file",
      "source": "filesystem",
      "status": "read-only",
      "note": "未改动。"
    },
    "raw_rows": {
      "metric": "raw_rows",
      "value": "1207327",
      "unit": "bond-months",
      "source": "PyArrow metadata",
      "status": "verified",
      "note": ""
    },
    "raw_columns": {
      "metric": "raw_columns",
      "value": "59",
      "unit": "columns",
      "source": "PyArrow schema",
      "status": "verified",
      "note": "含标识、日期、收益、价格与特征字段。"
    },
    "raw_numeric_fields": {
      "metric": "raw_numeric_fields",
      "value": "54",
      "unit": "numeric fields",
      "source": "PyArrow schema",
      "status": "verified",
      "note": "排除 index、complete_cusip、trd_exctn_dt、last_trade_on 与 date。"
    },
    "core_characteristics": {
      "metric": "core_characteristics",
      "value": "41",
      "unit": "characteristics",
      "source": "Deep Tangency Portfolio, Table A1",
      "status": "verified",
      "note": "41 个原文特征均能逐项匹配到 raw Feather 字段。"
    },
    "auxiliary_numeric_fields": {
      "metric": "auxiliary_numeric_fields",
      "value": "13",
      "unit": "fields",
      "source": "schema-to-paper crosswalk",
      "status": "verified",
      "note": "不作为已确认的核心债券特征。"
    },
    "unique_bonds": {
      "metric": "unique_bonds",
      "value": "22235",
      "unit": "CUSIPs",
      "source": "PyArrow scan",
      "status": "verified",
      "note": ""
    },
    "sample_start": {
      "metric": "sample_start",
      "value": "2002-08-31",
      "unit": "date",
      "source": "PyArrow scan",
      "status": "verified",
      "note": ""
    },
    "sample_end": {
      "metric": "sample_end",
      "value": "2024-12-31",
      "unit": "date",
      "source": "PyArrow scan",
      "status": "verified",
      "note": ""
    },
    "imputed_rows": {
      "metric": "imputed_rows",
      "value": "1207327",
      "unit": "bond-months",
      "source": "PyArrow metadata",
      "status": "verified",
      "note": ""
    },
    "imputed_columns": {
      "metric": "imputed_columns",
      "value": "49",
      "unit": "columns",
      "source": "PyArrow schema",
      "status": "verified",
      "note": "含 41 个核心特征、标识字段及必要收益字段。"
    },
    "imputation_transform": {
      "metric": "imputation_transform",
      "value": "cross-sectional ranks in [-1,1]; missing values set to zero",
      "unit": "method",
      "source": "Deep Tangency Portfolio and Feather inspection",
      "status": "verified",
      "note": "原文说明按月横截面排序并标准化至 [-1,1]、均值为零；imputed 文件无缺失且数值形态一致。"
    },
    "raw_sha256": {
      "metric": "raw_sha256",
      "value": "0AD8E4C5CBA0EF4BC0EACCE1F192ED9041F8A672C31663E7DAAE40AF996C70E7",
      "unit": "SHA-256",
      "source": "Get-FileHash",
      "status": "baseline",
      "note": "完成后再次计算以验证只读约束。"
    },
    "imputed_sha256": {
      "metric": "imputed_sha256",
      "value": "86F1FD92D7BB296F397819B2FD8D218175C4B92DDD02A167C3D6659E8E5FD99B",
      "unit": "SHA-256",
      "source": "Get-FileHash",
      "status": "baseline",
      "note": "完成后再次计算以验证只读约束。"
    },
    "provenance_assessment": {
      "metric": "provenance_assessment",
      "value": "strong structural match; identity not proven",
      "unit": "text",
      "source": "research audit",
      "status": "caution",
      "note": "共享文件的字段集合与论文 41 个债券特征完全匹配，但目录内没有 README、代码或论文元数据足以证明文件即论文最终发布版本。"
    }
  },
  "auxiliaryFields": [
    {
      "source_field": "clean_price",
      "field_role": "价格输入",
      "rationale_zh": "用于收益计算与数据质量检查，不是 Table A1 的独立特征。",
      "rationale_en": "Price input for return calculation and data-quality checks; not a standalone Table A1 characteristic.",
      "core_signal": "no"
    },
    {
      "source_field": "monthly_return",
      "field_role": "实现收益",
      "rationale_zh": "债券月度总收益，是被解释变量或组合收益输入。",
      "rationale_en": "Monthly total bond return; an outcome or portfolio-return input.",
      "core_signal": "no"
    },
    {
      "source_field": "monthly_return_winsorized",
      "field_role": "实现收益",
      "rationale_zh": "缩尾后的债券月度收益，是稳健性处理后的被解释变量。",
      "rationale_en": "Winsorized monthly bond return; a robustness-transformed outcome.",
      "core_signal": "no"
    },
    {
      "source_field": "min_daily",
      "field_role": "诊断统计",
      "rationale_zh": "月内最小日收益；Table A1 未将其列作独立输入。",
      "rationale_en": "Minimum daily return in the month; not listed as a standalone Table A1 input.",
      "core_signal": "no"
    },
    {
      "source_field": "max_daily",
      "field_role": "诊断统计",
      "rationale_zh": "月内最大日收益；Table A1 未将其列作独立输入。",
      "rationale_en": "Maximum daily return in the month; not listed as a standalone Table A1 input.",
      "core_signal": "no"
    },
    {
      "source_field": "PI_Roll",
      "field_role": "候选流动性变体",
      "rationale_zh": "Roll 指标的价格冲击变体；当前未在 Table A1 中逐项确认。",
      "rationale_en": "Price-impact variant of Roll liquidity; not separately identified in Table A1.",
      "core_signal": "no"
    },
    {
      "source_field": "PI_HL",
      "field_role": "候选流动性变体",
      "rationale_zh": "高低价指标的价格冲击变体；当前未在 Table A1 中逐项确认。",
      "rationale_en": "Price-impact variant of the high–low measure; not separately identified in Table A1.",
      "core_signal": "no"
    },
    {
      "source_field": "P_Zeros",
      "field_role": "候选流动性变体",
      "rationale_zh": "零交易或零收益概率指标；当前未在 Table A1 中逐项确认。",
      "rationale_en": "Zero-trading or zero-return probability measure; not separately identified in Table A1.",
      "core_signal": "no"
    },
    {
      "source_field": "PI_FHT",
      "field_role": "候选流动性变体",
      "rationale_zh": "FHT 指标的价格冲击变体；Table A1 对应的是 P_FHT。",
      "rationale_en": "Price-impact variant of FHT liquidity; Table A1 maps to P_FHT instead.",
      "core_signal": "no"
    },
    {
      "source_field": "VaR_5%ES",
      "field_role": "候选尾部风险变体",
      "rationale_zh": "5% 预期损失；Table A1 仅列出 5% VaR。",
      "rationale_en": "Five-percent expected shortfall; Table A1 lists 5% VaR, not ES.",
      "core_signal": "no"
    },
    {
      "source_field": "VaR_10%ES",
      "field_role": "候选尾部风险变体",
      "rationale_zh": "10% 预期损失；Table A1 仅列出 10% VaR。",
      "rationale_en": "Ten-percent expected shortfall; Table A1 lists 10% VaR, not ES.",
      "core_signal": "no"
    },
    {
      "source_field": "benchmark_duration",
      "field_role": "基准匹配输入",
      "rationale_zh": "用于持续期匹配基准或诊断，不是 Table A1 的独立特征。",
      "rationale_en": "Benchmark-matching input or diagnostic; not a standalone Table A1 characteristic.",
      "core_signal": "no"
    },
    {
      "source_field": "volume",
      "field_role": "交易量输入",
      "rationale_zh": "总交易量可能进入换手率与流动性度量，但 Table A1 使用 barQ、trades 与 TURN 等成品特征。",
      "rationale_en": "Trading-volume input that may enter turnover or liquidity measures; Table A1 uses derived variables such as barQ, trades, and TURN.",
      "core_signal": "no"
    }
  ],
  "paperWiki": [
    {
      "paper_id": "deep-tangency-portfolio",
      "title": "Deep Tangency Portfolio",
      "authors_year": "Feng, Jiang, Li, Song, and Wang (2026)",
      "venue": "Management Science, forthcoming; local author-version PDF",
      "source_url": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3971274",
      "locators": [
        "Internet Appendix, Table A1, pp. 1–2",
        "Equations (12)–(16) and (19)–(21)",
        "Equations (17)–(21)",
        "Section 4.5.2 in the 2023 working-paper version"
      ],
      "characteristic_count": 41,
      "method_count": 3,
      "local_file": "papers/bond/feng-et-al-deep-tangency-portfolio.pdf",
      "local_page": 45,
      "evidence_excerpts": [
        {
          "page": 4,
          "quote": "We use 132 firm-level characteristics from three sources: (i) 41 bond-specific variables from the merged TRACE-FISD data."
        },
        {
          "page": 45,
          "quote": "Table A1: Description of 41 Bond Characteristics."
        }
      ]
    },
    {
      "paper_id": "common-risk-factors-in-the-cross-section-of-corporate-bond-returns",
      "title": "Common Risk Factors in the Cross-Section of Corporate Bond Returns",
      "authors_year": "Bai, Bali, and Wen (2019)",
      "venue": "Journal of Financial Economics 131, 619-642",
      "source_url": "https://faculty.georgetown.edu/qw50/RiskFactor.pdf",
      "locators": [
        "Local PDF, p. 1, abstract"
      ],
      "characteristic_count": 0,
      "method_count": 0,
      "local_file": "papers/bond/bai-bali-wen-common-risk-factors-corporate-bond-returns.pdf",
      "local_page": 1,
      "evidence_excerpts": [
        {
          "page": 1,
          "quote": "We investigate the cross-sectional determinants of corporate bond returns and find that downside risk is the strongest predictor of future bond returns."
        }
      ]
    },
    {
      "paper_id": "common-risk-factors-in-the-returns-on-stocks-and-bonds",
      "title": "Common Risk Factors in the Returns on Stocks and Bonds",
      "authors_year": "Fama and French (1993)",
      "venue": "Journal of Financial Economics 33, 3–56",
      "source_url": "https://doi.org/10.1016/0304-405X(93)90023-5",
      "locators": [
        "Section 2.1.1"
      ],
      "characteristic_count": 0,
      "method_count": 1
    },
    {
      "paper_id": "duration-based-valuation-of-corporate-bonds",
      "title": "Duration-Based Valuation of Corporate Bonds",
      "authors_year": "van Binsbergen, Nozawa, and Schwert (2025)",
      "venue": "Review of Financial Studies 38, 158–191",
      "source_url": "https://doi.org/10.1093/rfs/hhae054",
      "locators": [
        "Sections 2–4 and Table 7"
      ],
      "characteristic_count": 0,
      "method_count": 1
    },
    {
      "paper_id": "factor-investing-and-the-integration-of-corporate-bond-and-equity-markets",
      "title": "Factor Investing and the Integration of Corporate Bond and Equity Markets",
      "authors_year": "Hao, He, Wang, and Wang (2026)",
      "venue": "SSRN working paper; revised 12 July 2026",
      "source_url": "https://ssrn.com/abstract=6588823",
      "locators": [
        "Abstract and SSRN metadata"
      ],
      "characteristic_count": 0,
      "method_count": 1
    },
    {
      "paper_id": "factor-investing-in-the-corporate-bond-market",
      "title": "Factor Investing in the Corporate Bond Market",
      "authors_year": "Houweling and van Zundert (2017)",
      "venue": "Financial Analysts Journal 73, 100–115",
      "source_url": "https://doi.org/10.2469/faj.v73.n2.1",
      "locators": [
        "Data and Methodology; pp. 102–106"
      ],
      "characteristic_count": 0,
      "method_count": 1
    },
    {
      "paper_id": "long-term-reversals-in-the-corporate-bond-market",
      "title": "Long-Term Reversals in the Corporate Bond Market",
      "authors_year": "Bali, Subrahmanyam, and Wen (2021)",
      "venue": "Journal of Financial Economics 139, 656–677",
      "source_url": "https://faculty.georgetown.edu/qw50/LTR.pdf",
      "locators": [
        "Sections 2.5 and 3.1, pp. 8–9",
        "Section 4.1, p. 19"
      ],
      "characteristic_count": 0,
      "method_count": 2,
      "local_file": "papers/bond/bali-et-al-long-term-reversals-corporate-bond-market.pdf",
      "local_page": 1,
      "evidence_excerpts": [
        {
          "page": 10,
          "quote": "For each month from January 1977 to December 2017, we form quintile portfolios by sorting corporate bonds based on their past 36-month cumulative returns (LTR)."
        }
      ]
    },
    {
      "paper_id": "modeling-corporate-bond-returns",
      "title": "Modeling Corporate Bond Returns",
      "authors_year": "Kelly, Palhares, and Pruitt (2023)",
      "venue": "Journal of Finance 78, 1967–2008",
      "source_url": "https://doi.org/10.1111/jofi.13233",
      "locators": [
        "Model specification and out-of-sample portfolio analysis"
      ],
      "characteristic_count": 0,
      "method_count": 1
    },
    {
      "paper_id": "momentum-in-corporate-bond-returns",
      "title": "Momentum in Corporate Bond Returns",
      "authors_year": "Jostova, Nikolova, Philipov, and Stahel (2013)",
      "venue": "Review of Financial Studies 26, 1649–1693",
      "source_url": "https://doi.org/10.1093/rfs/hht022",
      "locators": [
        "Section II and Equation (1); FDIC working-paper pp. 11 and 14–15"
      ],
      "characteristic_count": 0,
      "method_count": 1
    },
    {
      "paper_id": "the-corporate-bond-factor-replication-crisis",
      "title": "The Corporate Bond Factor Replication Crisis",
      "authors_year": "Dickerson, Mueller, and Robotti (2026)",
      "venue": "arXiv working paper; 11 April 2026",
      "source_url": "https://arxiv.org/abs/2604.07880",
      "locators": [
        "Specification grid and Table 6"
      ],
      "characteristic_count": 0,
      "method_count": 1
    },
    {
      "paper_id": "volatility-and-the-cross-section-of-corporate-bond-returns",
      "title": "Volatility and the Cross-Section of Corporate Bond Returns",
      "authors_year": "Chung, Wang, and Wu (2019)",
      "venue": "Journal of Financial Economics 133, 397–417",
      "source_url": "https://doi.org/10.1016/j.jfineco.2019.02.002",
      "locators": [
        "Portfolio analysis in Sections 3 and 4"
      ],
      "characteristic_count": 0,
      "method_count": 1
    }
  ],
  "sourceEvidence": [
    {
      "paper_id": "deep-tangency-portfolio",
      "title": "Deep Tangency Portfolio",
      "authors_year": "Feng, Jiang, Li, Song, and Wang (2026)",
      "venue": "Management Science, forthcoming; local author-version PDF",
      "source_url": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3971274",
      "locators": [
        "Internet Appendix, Table A1, pp. 1–2",
        "Equations (12)–(16) and (19)–(21)",
        "Equations (17)–(21)",
        "Section 4.5.2 in the 2023 working-paper version"
      ],
      "characteristic_count": 41,
      "method_count": 3,
      "local_file": "papers/bond/feng-et-al-deep-tangency-portfolio.pdf",
      "local_page": 45,
      "evidence_excerpts": [
        {
          "page": 4,
          "quote": "We use 132 firm-level characteristics from three sources: (i) 41 bond-specific variables from the merged TRACE-FISD data."
        },
        {
          "page": 45,
          "quote": "Table A1: Description of 41 Bond Characteristics."
        }
      ],
      "title_zh": "深度切点组合",
      "locator_zh": "定位：摘要第 1 页；132 项特征与 41 项债券变量第 4 页；Table A1 第 45 页。",
      "locator_en": "Locator: p. 1 abstract; 132 characteristics and 41 bond variables p. 4; Table A1 p. 45.",
      "quote": "We use 132 firm-level characteristics from three sources."
    },
    {
      "paper_id": "common-risk-factors-in-the-cross-section-of-corporate-bond-returns",
      "title": "Common Risk Factors in the Cross-Section of Corporate Bond Returns",
      "authors_year": "Bai, Bali, and Wen (2019)",
      "venue": "Journal of Financial Economics 131, 619-642",
      "source_url": "https://faculty.georgetown.edu/qw50/RiskFactor.pdf",
      "locators": [
        "Local PDF, p. 1, abstract"
      ],
      "characteristic_count": 0,
      "method_count": 0,
      "local_file": "papers/bond/bai-bali-wen-common-risk-factors-corporate-bond-returns.pdf",
      "local_page": 1,
      "evidence_excerpts": [
        {
          "page": 1,
          "quote": "We investigate the cross-sectional determinants of corporate bond returns and find that downside risk is the strongest predictor of future bond returns."
        }
      ],
      "title_zh": "公司债横截面风险因子",
      "locator_zh": "定位：本地 PDF 第 1 页，摘要。",
      "locator_en": "Locator: local PDF, p. 1, abstract.",
      "quote": "downside risk is the strongest predictor of future bond returns."
    },
    {
      "paper_id": "long-term-reversals-in-the-corporate-bond-market",
      "title": "Long-Term Reversals in the Corporate Bond Market",
      "authors_year": "Bali, Subrahmanyam, and Wen (2021)",
      "venue": "Journal of Financial Economics 139, 656–677",
      "source_url": "https://faculty.georgetown.edu/qw50/LTR.pdf",
      "locators": [
        "Sections 2.5 and 3.1, pp. 8–9",
        "Section 4.1, p. 19"
      ],
      "characteristic_count": 0,
      "method_count": 2,
      "local_file": "papers/bond/bali-et-al-long-term-reversals-corporate-bond-market.pdf",
      "local_page": 1,
      "evidence_excerpts": [
        {
          "page": 10,
          "quote": "For each month from January 1977 to December 2017, we form quintile portfolios by sorting corporate bonds based on their past 36-month cumulative returns (LTR)."
        }
      ],
      "title_zh": "公司债市场的长期反转",
      "locator_zh": "定位：本地 PDF 第 1 页，摘要；形成期与分组规则见第 10 页。",
      "locator_en": "Locator: local PDF, p. 1 abstract; formation rule on p. 10.",
      "quote": "Long-term reversals in corporate bond returns are economically and statistically significant."
    }
  ],
  "summary": {
    "characteristicCount": 41,
    "methodCount": 13
  }
});
