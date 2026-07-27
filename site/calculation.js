(() => {
  "use strict";

  const atlas = window.SIGNAL_ATLAS_DATA;
  if (!atlas || !Array.isArray(atlas.indicators)) {
    document.body.innerHTML =
      "<main style='padding:3rem;font-family:sans-serif'>Signal Atlas data are unavailable.</main>";
    return;
  }

  const I18N = {
    zh: {
      skip: "跳到特征定义",
      longShortNav: "组合构造",
      directoryNav: "\u7279\u5f81\u76ee\u5f55",
      measuresNav: "\u7279\u5f81\u5ea6\u91cf",
      criteriaNav: "\u5224\u5b9a\u51c6\u5219",
      title: "特征度量与实现口径",
      lede: "左栏列示 chars_ciz 的项目实现，右栏列示原始文献及相关文献中的度量定义。",
      searchPlaceholder: "搜索公司特征、度量公式或数据字段…",
      resultMeta: (count) => `${count} 项公司特征`,
      emptyTitle: "无匹配的特征定义",
      emptyCopy: "请调整特征标识、度量公式或字段名称。",
      formula: "度量公式",
      dataFields: "数据字段",
      calculationWindow: "计算频率与度量窗口",
      accountingLag: "会计信息滞后",
      portfolioRule: "组合构造规则",
      more: "字段、度量窗口与说明",
      source: "查阅文献",
      sourceCode: "查阅项目实现",
      reconcile: "查阅年频与季频数据衔接规则",
      backToSignal: "查看组合构造",
      projectLane: "项目实现",
      literatureLane: "文献定义",
      sourceCount: (count) => `${count} 项文献定义`,
      formulaMatches: {
        paper_definition: "文献直接定义",
        closest_paper_measure: "最接近的文献度量"
      },
      notAvailable: "未报告",
      previousPage: "上一页",
      nextPage: "下一页",
      pageStatus: (page, total) => `第 ${page} / ${total} 页`,
      footer: "项目公式来自 chars_ciz 实现；文献公式用于核对度量定义，不表示二者完全一致。",
      roles: {
        original_paper: "原始文献",
        published_followup: "后续发表文献",
        published_replication: "已发表复现研究",
        coverage_audit: "文献库覆盖核验",
        component_decomposition: "组成部分拆分",
        related_top_journal_method: "相近的顶刊构造",
        related_published_method: "相近的已发表构造",
        project_implementation: "项目实现"
      }
    },
    en: {
      skip: "Skip to characteristic definitions",
      longShortNav: "Portfolio formation",
      directoryNav: "Characteristic directory",
      measuresNav: "Characteristic measures",
      criteriaNav: "Classification criteria",
      title: "Characteristic measurement and implementation",
      lede: "The left column reports the chars_ciz implementation; the right column reports measurement definitions from the source and related literature.",
      searchPlaceholder: "Search characteristics, measurement definitions, or data fields…",
      resultMeta: (count) => `${count} characteristics`,
      emptyTitle: "No matching characteristic definitions",
      emptyCopy: "Revise the characteristic ID, measurement definition, or field name.",
      formula: "Measurement definition",
      dataFields: "Data fields",
      calculationWindow: "Frequency and measurement window",
      accountingLag: "Accounting-data lag",
      portfolioRule: "Portfolio-formation rule",
      more: "Fields, measurement window, and notes",
      source: "View reference",
      sourceCode: "View project implementation",
      reconcile: "View annual–quarterly data alignment",
      backToSignal: "View portfolio formation",
      projectLane: "Implementation",
      literatureLane: "Literature definitions",
      sourceCount: (count) => `${count} literature definition${count === 1 ? "" : "s"}`,
      formulaMatches: {
        paper_definition: "Definition reported in the paper",
        closest_paper_measure: "Closest literature measure"
      },
      notAvailable: "Not reported",
      previousPage: "Previous",
      nextPage: "Next",
      pageStatus: (page, total) => `Page ${page} of ${total}`,
      footer: "Project formulas follow the chars_ciz implementation; literature formulas are retained to assess measurement correspondence, not exact equivalence.",
      roles: {
        original_paper: "Source paper",
        published_followup: "Published follow-up study",
        published_replication: "Published replication study",
        coverage_audit: "Literature-coverage audit",
        component_decomposition: "Component decomposition",
        related_top_journal_method: "Related top-journal construction",
        related_published_method: "Related published construction",
        project_implementation: "Project implementation"
      }
    }
  };

  const PAGE_SIZE = 20;
  const MATHJAX_SOURCE = "https://cdn.jsdelivr.net/npm/mathjax@4/tex-svg.js";
  const params = new URLSearchParams(location.search);
  const requestedQuery = params.get("q") || "";
  const mathJaxEnabled = params.get("mathjax") !== "off";
  const requestedLanguage = params.get("lang");
  if (requestedLanguage === "en" || requestedLanguage === "zh") localStorage.setItem("signal-atlas-language", requestedLanguage);
  const storedLanguage = localStorage.getItem("signal-atlas-language");
  let language =
    requestedLanguage === "en" || requestedLanguage === "zh"
      ? requestedLanguage
      : storedLanguage === "en"
        ? "en"
        : "zh";
  let currentPage = 1;

  const elements = {
    search: document.getElementById("calculationSearch"),
    results: document.getElementById("calculationResults"),
    empty: document.getElementById("calculationEmpty"),
    meta: document.getElementById("calculationMeta"),
    pagination: document.getElementById("calculationPagination"),
    languageToggle: document.getElementById("languageToggle")
  };

  const t = (key, ...args) => {
    const value = I18N[language][key];
    return typeof value === "function" ? value(...args) : value;
  };

  const escapeHtml = (value) =>
    String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const valueOrNA = (value) => {
    const text = String(value || "").trim();
    return text && text !== "N/A" ? text : t("notAvailable");
  };

  const localized = (value) => {
    if (!value || typeof value !== "object") return valueOrNA(value);
    return valueOrNA(value[language] || value.en || value.zh);
  };

  const syntheticProjectVariant = (item) => {
    const calculation = item.calculation || {};
    return {
      id: "equitychars-calculation",
      role: "project_implementation",
      source_label: calculation.source_label || "EquityChars",
      formula_latex: calculation.formula_latex || "",
      formula: "",
      data_fields: calculation.data_fields || "",
      calculation_window: calculation.calculation_window || {},
      accounting_lag: calculation.accounting_lag || {},
      portfolio_rule: {
        zh: "多空方向与排序规则见组合构造页面。",
        en: "See the portfolio-formation page for the long–short direction and portfolio-sorting rules."
      },
      direction: item.code_direction || item.paper_direction,
      notes: calculation.notes || {},
      source_href: calculation.source_url || "",
      source_year: calculation.source_commit
        ? calculation.source_commit.slice(0, 8)
        : "",
      reconcile_href: calculation.reconcile_url || "",
      provenance: calculation.provenance || ""
    };
  };

  const calculationVariants = (item) => {
    const variants = Array.isArray(item.method_variants)
      ? item.method_variants
      : [];
    return [
      syntheticProjectVariant(item),
      ...variants.filter((variant) => variant.role !== "project_implementation")
    ];
  };

  const formulaMatchLabel = (variant) =>
    t("formulaMatches")[variant.formula_match] || "";

  const fact = (label, value) => `
    <div class="calculation-fact">
      <span>${escapeHtml(label)}</span>
      <p>${escapeHtml(valueOrNA(value))}</p>
    </div>`;

  const formulaMarkup = (variant) => {
    const latex = String(variant.formula_latex || "").trim();
    if (latex) {
      return `<div class="latex-formula">${escapeHtml(latex)}</div>`;
    }
    return `<code class="formula-fallback">${escapeHtml(valueOrNA(variant.formula))}</code>`;
  };

  const variantCard = (variant, kind) => {
    const role = t("roles")[variant.role] || variant.role;
    const matchLabel = formulaMatchLabel(variant);
    const sourceMeta = [variant.source_year, variant.direction]
      .filter(Boolean)
      .join(" · ");
    const sourceText =
      variant.role === "project_implementation" ? t("sourceCode") : t("source");
    const sourceLink = variant.source_href
      ? `<a class="source-link" href="${escapeHtml(variant.source_href)}" target="_blank" rel="noreferrer">↗ ${escapeHtml(sourceText)}${variant.source_page ? ` · PDF ${variant.source_page}` : ""}</a>`
      : "";
    const reconcileLink = variant.reconcile_href
      ? `<a class="source-link" href="${escapeHtml(variant.reconcile_href)}" target="_blank" rel="noreferrer">↗ ${escapeHtml(t("reconcile"))}</a>`
      : "";
    const note = localized(variant.notes);
    return `
      <article class="calculation-card calculation-card-${escapeHtml(kind)}">
        <header>
          <div class="variant-labels">
            <span class="variant-role">${escapeHtml(role)}</span>
            ${matchLabel ? `<span class="formula-match formula-match-${escapeHtml(variant.formula_match)}">${escapeHtml(matchLabel)}</span>` : ""}
          </div>
          <div>
            <h3>${escapeHtml(variant.source_label)}</h3>
            <p>${escapeHtml(sourceMeta)}</p>
          </div>
        </header>
        <div class="formula-block">
          <span>${escapeHtml(t("formula"))}</span>
          ${formulaMarkup(variant)}
        </div>
        <details class="calculation-more">
          <summary>${escapeHtml(t("more"))}</summary>
          <div class="calculation-facts">
            ${fact(t("dataFields"), variant.data_fields)}
            ${fact(t("calculationWindow"), localized(variant.calculation_window))}
            ${fact(t("accountingLag"), localized(variant.accounting_lag))}
            ${fact(t("portfolioRule"), localized(variant.portfolio_rule))}
          </div>
          ${note !== t("notAvailable") ? `<p class="variant-note">${escapeHtml(note)}</p>` : ""}
        </details>
        <div class="calculation-source-links">${sourceLink}${reconcileLink}</div>
      </article>`;
  };

  const indicatorCard = (item) => {
    const [projectVariant, ...literatureVariants] = calculationVariants(item);
    return `
      <section class="calculation-group" id="${escapeHtml(item.id)}">
        <header class="calculation-group-header">
          <div>
            <span>${escapeHtml(item.id)}</span>
            <h2>${escapeHtml(item.name)}</h2>
          </div>
          <a href="index.html?lang=${escapeHtml(language)}#${escapeHtml(item.id)}">${escapeHtml(t("backToSignal"))} →</a>
        </header>
        <div class="calculation-comparison">
          <section class="comparison-lane comparison-project">
            <header class="comparison-lane-header">
              <h3>${escapeHtml(t("projectLane"))}</h3>
              <span>chars_ciz</span>
            </header>
            ${variantCard(projectVariant, "project")}
          </section>
          <section class="comparison-lane comparison-literature">
            <header class="comparison-lane-header">
              <h3>${escapeHtml(t("literatureLane"))}</h3>
              <span>${escapeHtml(t("sourceCount", literatureVariants.length))}</span>
            </header>
            <div class="literature-card-stack">
              ${literatureVariants.map((variant) => variantCard(variant, "literature")).join("")}
            </div>
          </section>
        </div>
      </section>`;
  };

  const searchableText = (item) =>
    [
      item.id,
      item.name,
      item.calculation?.formula_latex,
      item.calculation?.data_fields,
      localized(item.calculation?.calculation_window),
      ...calculationVariants(item).flatMap((variant) => [
        variant.source_label,
        variant.formula,
        variant.formula_latex,
        variant.data_fields,
        localized(variant.calculation_window),
        localized(variant.accounting_lag),
        localized(variant.portfolio_rule)
      ])
    ]
      .join(" ")
      .toLowerCase();

  const filteredItems = () => {
    const query = elements.search.value.trim().toLowerCase();
    return atlas.indicators.filter(
      (item) => item.calculation && (!query || searchableText(item).includes(query))
    );
  };

  const typesetMath = () => {
    if (!window.MathJax?.typesetPromise) return;
    window.MathJax.typesetClear?.([elements.results]);
    window.MathJax.typesetPromise([elements.results]).catch(() => {
      // The escaped TeX remains readable if the CDN or renderer is unavailable.
    });
  };

  const loadMathJax = () => {
    if (window.MathJax?.typesetPromise) {
      typesetMath();
      return;
    }
    if (document.querySelector('script[data-mathjax-loader="true"]')) return;
    const script = document.createElement("script");
    script.src = MATHJAX_SOURCE;
    script.async = true;
    script.dataset.mathjaxLoader = "true";
    script.addEventListener("load", typesetMath, { once: true });
    document.head.append(script);
  };

  const renderPagination = (itemCount) => {
    const totalPages = Math.max(1, Math.ceil(itemCount / PAGE_SIZE));
    currentPage = Math.min(Math.max(currentPage, 1), totalPages);
    elements.pagination.hidden = itemCount === 0 || totalPages === 1;
    if (elements.pagination.hidden) {
      elements.pagination.innerHTML = "";
      return;
    }
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
    elements.pagination.innerHTML = `
      <button type="button" data-page="${currentPage - 1}" ${currentPage === 1 ? "disabled" : ""}>
        ${escapeHtml(t("previousPage"))}
      </button>
      <span class="pagination-pages">
        ${pages.map((page) => `
          <button
            type="button"
            class="${page === currentPage ? "active" : ""}"
            data-page="${page}"
            aria-current="${page === currentPage ? "page" : "false"}"
          >${page}</button>`).join("")}
      </span>
      <span class="pagination-status">${escapeHtml(t("pageStatus", currentPage, totalPages))}</span>
      <button type="button" data-page="${currentPage + 1}" ${currentPage === totalPages ? "disabled" : ""}>
        ${escapeHtml(t("nextPage"))}
      </button>`;
    elements.pagination.querySelectorAll("[data-page]").forEach((button) => {
      button.addEventListener("click", () => {
        const page = Number(button.dataset.page);
        if (!Number.isInteger(page) || page < 1 || page > totalPages) return;
        currentPage = page;
        render();
        document.querySelector(".calculation-toolbar").scrollIntoView({
          block: "start",
          behavior: "smooth"
        });
      });
    });
  };

  const syncSearchUrl = () => {
    const url = new URL(location.href);
    const query = elements.search.value.trim();
    if (query) url.searchParams.set("q", query);
    else url.searchParams.delete("q");
    history.replaceState(null, "", url);
  };
  const render = () => {
    const items = filteredItems();
    const totalPages = Math.max(1, Math.ceil(items.length / PAGE_SIZE));
    currentPage = Math.min(Math.max(currentPage, 1), totalPages);
    const start = (currentPage - 1) * PAGE_SIZE;
    const pageItems = items.slice(start, start + PAGE_SIZE);
    elements.results.innerHTML = pageItems.map(indicatorCard).join("");
    elements.meta.textContent = t("resultMeta", items.length);
    elements.empty.hidden = items.length !== 0;
    renderPagination(items.length);
    typesetMath();
  };

  const applyLanguage = () => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    document.title =
      language === "zh"
        ? "特征度量与实现口径 · Signal Atlas"
        : "Characteristic measurement and implementation · Signal Atlas";
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const value = t(node.dataset.i18n);
      if (typeof value === "string") node.textContent = value;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
      node.setAttribute("placeholder", t(node.dataset.i18nPlaceholder));
    });
    elements.languageToggle.textContent = language === "zh" ? "EN" : "中文";
    window.SignalAtlasNavigation?.syncEquity({
      language,
      active: "measures"
    });  };

  const rerender = () => {
    applyLanguage();
    render();
  };

  elements.search.addEventListener("input", () => {
    currentPage = 1;
    syncSearchUrl();
    render();
  });
  elements.languageToggle.addEventListener("click", () => {
    language = language === "zh" ? "en" : "zh";
    localStorage.setItem("signal-atlas-language", language);
    const url = new URL(location.href);
    url.searchParams.set("lang", language);
    history.replaceState(null, "", url);
    rerender();
  });

  elements.search.value = requestedQuery;
  const hashId = decodeURIComponent(location.hash.slice(1));
  if (hashId) {
    const index = atlas.indicators.findIndex((item) => item.id === hashId);
    if (index >= 0) currentPage = Math.floor(index / PAGE_SIZE) + 1;
  }
  rerender();
  if (mathJaxEnabled) {
    if (document.readyState === "complete") {
      loadMathJax();
    } else {
      window.addEventListener("load", loadMathJax, { once: true });
    }
  }
  if (hashId) {
    requestAnimationFrame(() => {
      document.getElementById(hashId)?.scrollIntoView({ block: "start" });
    });
  }
})();
