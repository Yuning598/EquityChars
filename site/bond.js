(() => {
  "use strict";

  const data = window.BOND_ATLAS_DATA;
  if (!data) {
    document.body.insertAdjacentHTML(
      "afterbegin",
      '<p class="data-error">未找到 bond-data.js。请先运行 scripts/build_bond_site.py。</p>',
    );
    return;
  }

  const $ = (selector) => document.querySelector(selector);
  const rows = data.characteristics || [];
  const summary = data.summary || {};
  const methods = data.methods || [];
  const auxiliary = data.auxiliaryFields || [];
  const paperWiki = data.paperWiki || [];
  const sourceEvidence = data.sourceEvidence || [];
  const calculationRules = window.SignalAtlasBondCalculations?.rules || {};
  const returnEvidence = window.SignalAtlasBondReturnEvidence || [];
  const audit = data.audit || {};
  const number = new Intl.NumberFormat("zh-CN");
  const bondUrlParams = new URLSearchParams(location.search);
  let activeMethodFamily = bondUrlParams.get("method") || "";

  const requestedBondView = bondUrlParams.get("view");
  const requestedBondLanguage = bondUrlParams.get("lang");
  const pageBondView = document.body.dataset.bondView;
  const validBondViews = ["characteristics", "returns", "methods", "provenance", "papers"];
  const bondView = validBondViews.includes(requestedBondView)
    ? requestedBondView
    : validBondViews.includes(pageBondView)
      ? pageBondView
      : "overview";
  if (!pageBondView && !requestedBondView) {
    const url = new URL("bond-characteristics.html", location.href);
    url.search = location.search;
    location.replace(url);
    return;
  }

  const legacyBondRoutes = window.SignalAtlasNavigation?.bondRoutes || {};
  if (legacyBondRoutes[requestedBondView] && !pageBondView) {
    const url = new URL(legacyBondRoutes[requestedBondView], location.href);
    url.search = location.search;
    url.searchParams.delete("view");
    location.replace(url);
    return;
  }
  document.body.dataset.bondView = bondView;
  document.querySelector(".return-basis").id = "bondReturns";
  const returnsLink = document.createElement("a");
  returnsLink.className = "ghost-button";
  returnsLink.href = "#bondReturns";
  returnsLink.dataset.bondNav = "returns";
  returnsLink.textContent = "\u6536\u76ca\u5b9a\u4e49";
  document.querySelector(".module-nav").insertBefore(returnsLink, document.querySelector('.module-nav a[href="#bondMethods"]'));

  const escapeHtml = (value = "") =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const metric = (key) => audit[key]?.value || "—";

  let locale = requestedBondLanguage === "en" || requestedBondLanguage === "zh"
    ? requestedBondLanguage
    : localStorage.getItem("bond-atlas-language") === "en" ? "en" : "zh";
  const isEnglish = () => locale === "en";
  const copy = (zh, en) => (isEnglish() ? en : zh);
  const syncBondNavigation = () => {
    const languageCode = isEnglish() ? "en" : "zh";
    window.SignalAtlasNavigation?.syncBond({ language: languageCode, active: bondView });
    document.querySelectorAll("[data-bond-overview]").forEach((link) => {
      const route = window.SignalAtlasNavigation?.bondRoutes?.[link.dataset.bondOverview];
      if (route) link.href = `${route}?lang=${languageCode}`;
    });
  };
  const syncBondFilterUrl = ({ historyMode = "replace" } = {}) => {
    const url = new URL(location.href);
    const query = $("#bondSearch").value.trim();
    const category = $("#bondCategoryFilter").value;
    if (query) url.searchParams.set("q", query);
    else url.searchParams.delete("q");
    if (category) url.searchParams.set("category", category);
    else url.searchParams.delete("category");
    if (activeMethodFamily) url.searchParams.set("method", activeMethodFamily);
    else url.searchParams.delete("method");
    if (historyMode === "push" && url.href !== location.href) history.pushState(null, "", url);
    else history.replaceState(null, "", url);
  };
  const { categoryLabel, familyLabel } = window.SignalAtlasBondI18n;

  function setText(selector, value) {
    const element = $(selector);
    if (element) element.textContent = value;
  }

  function applyLanguage() {
    const en = isEnglish();
    const languageCode = en ? "en" : "zh";
    syncBondNavigation();
    localStorage.setItem("bond-atlas-language", languageCode);
    document.documentElement.lang = en ? "en" : "zh-CN";
    setText("#bondSourceEvidenceTitle", copy("\u539f\u59cb\u6587\u732e\u5b9a\u4f4d", "Primary-source locators"));
    setText("#bondSourceEvidenceLead", copy("\u4ec5\u4fdd\u7559\u53ef\u672c\u5730\u6253\u5f00\u3001\u5e76\u5df2\u6838\u9a8c\u9875\u7801\u7684\u5173\u952e\u539f\u6587\u3002", "Only core papers with a local copy and verified page location are retained."));
    if (!en) return;
    document.title = en
      ? "Corporate-Bond Characteristics and Portfolio Construction ? Signal Atlas"
      : "?????????? ? Signal Atlas";
    document.querySelector('meta[name="description"]').content = en
      ? "Corporate-bond characteristics, long?short excess-return construction, return benchmarks, and primary-source evidence."
      : "??????long?short excess return ???????????????";
    const languageButton = $("#bondLanguageToggle");
    languageButton.textContent = en ? "\u4e2d\u6587" : "EN";
    languageButton.setAttribute("aria-label", en ? "?????" : "Switch language");
    setText(".skip-link", copy("????????", "Skip to the bond-characteristic directory"));
    const actions = document.querySelectorAll(".topbar-actions a");
    ["", "", "", ""].forEach((zh, index) => {
      actions[index].textContent = copy(zh, ["Characteristics", "Return definitions", "Portfolio methods", "Data provenance"][index]);
    });
    const paperNav = document.querySelector("[data-bond-nav=\"papers\"]");
    if (paperNav) paperNav.textContent = copy("原文定位", "Paper wiki");
    setText("#bondOverviewTitle", copy("从研究对象到收益口径", "From research object to return convention"));
    setText("#bondOverviewLead", copy("按研究任务进入相应模块；每一页只保留实现、收益定义或数据证据中与该任务直接相关的内容。", "Enter through the research task. Each module retains only the implementation, return definition, or data evidence required for that task."));
    const overviewCards = document.querySelectorAll("[data-bond-overview]");
    [["特征目录", "Characteristic directory", "41 个与文献表格逐项匹配的债券特征。", "41 bond characteristics matched field-by-field to the source table."], ["收益定义", "Return definitions", "区分单债券超额收益、零成本多空收益与久期调整收益。", "Separate bond-level excess returns, zero-cost long–short returns, and duration-adjusted returns."], ["组合构造", "Portfolio construction", "核对形成期、断点、权重、持有期与收益基准。", "Verify formation period, breakpoints, weights, holding horizon, and return benchmark."], ["数据出处", "Data provenance", "阅读共享数据的样本范围、字段匹配与只读核验。", "Review sample coverage, field matching, and read-only verification."]].forEach((labels, index) => {
      const card = overviewCards[index];
      if (!card) return;
      card.querySelector("strong").textContent = copy(labels[0], labels[1]);
      card.querySelector("p").textContent = copy(labels[2], labels[3]);
    });    setText(".bond-hero h1", copy("????????????", "Corporate-Bond Characteristics and Excess-Return Construction"));
    $(".bond-hero h1").innerHTML = en
      ? "Corporate-Bond Characteristics<br>and Excess-Return Construction"
      : "??????<br>??????";
    setText(".bond-hero-copy > p", copy(
      "?????????????????????????????????????????????????????????????",
      "Distinguish bond-level excess returns, zero-cost long?short factors, duration-adjusted returns, and model-optimal weights. Every signal retains its formation period, breakpoints, weights, holding horizon, and return benchmark.",
    ));
    setText(".audit-stamp strong", copy("BondChars ???", "BondChars unchanged"));
    setText(".audit-stamp small", copy("?????????? SHA-256 ???", "Schema, sample coverage, and SHA-256 verified"));
    const summary = document.querySelectorAll(".bond-summary .summary-card");
    [["??????", "Source-matched characteristics"], ["?????", "Bond-month observations"], ["????", "Unique bonds"], ["????", "Portfolio methods"]].forEach((labels, index) => setText(".bond-summary .summary-card:nth-child(" + (index + 1) + ") span", copy(...labels)));
    setText("#provenanceTitle", copy("????????", "Read-only verification of shared data"));
    const provenance = document.querySelectorAll(".provenance-grid article");
    [["??", "Sample"], ["????", "Field classification"], ["????", "Source assessment"]].forEach((labels, index) => setText(".provenance-grid article:nth-child(" + (index + 1) + ") span", copy(...labels)));
    setText(".provenance-grid article:nth-child(1) p", copy("raw ? imputed ???? 1,207,327 ???????", "Both raw and imputed files contain 1,207,327 bond-month observations."));
    setText(".provenance-grid article:nth-child(2) p", copy("????? Table A1 ????? 41 ??????????", "Only the 41 fields matched item-by-item to Table A1 enter the core directory."));
    setText(".provenance-grid article:nth-child(3) strong", copy("??????????????", "Strong structural match; not identity confirmation"));
    setText(".provenance-grid article:nth-child(3) p", copy("?????? README ????????????????????????????", "The shared directory has no README or generation code; field agreement is not treated as proof of an identical final version."));
    setText("#provenanceTitle", copy("计算与数据来源", "Reproducibility sources"));
    setText(".provenance-grid article:nth-child(1) span", copy("计算实现", "Implementation"));
    setText(".provenance-grid article:nth-child(1) strong", copy("BondChars 公开实现", "BondChars public implementation"));
    setText(".provenance-grid article:nth-child(1) p", copy("逐项口径、滚动窗口与滞后规则来自可读源码；特征页内提供函数与行号定位。", "Calculation rules, windows, and lags come from readable source code; the characteristic directory records function and line locators."));
    setText(".provenance-grid article:nth-child(1) a", copy("查看源码 ↗", "View source ↗"));
    setText(".provenance-grid article:nth-child(2) span", copy("字段定义", "Field definitions"));
    setText(".provenance-grid article:nth-child(2) p", copy("核心目录只保留与原文 Table A1 逐项对应的 41 个债券特征，并保留本地 PDF 定位。", "The core directory retains only the 41 bond characteristics matched item by item to Table A1, with local PDF locators."));
    setText(".provenance-grid article:nth-child(2) a", copy("查看文献证据 →", "View paper evidence →"));
    setText(".provenance-grid article:nth-child(3) span", copy("数据快照", "Data snapshot"));
    setText(".provenance-grid article:nth-child(3) p", copy("raw 与 imputed Feather 文件用于字段与样本核验；计算定义以公开实现为准。", "Raw and imputed Feather files support field and sample checks; calculation definitions follow the public implementation."));
    setText("#returnBasisTitle", copy("??????????", "Four return objects must be distinguished"));
    setText("#returnEvidenceTitle", copy("逐项原文定位", "Source map by return object"));
    setText(".return-source-evidence .section-heading > p", copy("收益对象、论文口径与定位分开列示，避免将不同的 excess return 定义混为一谈。", "Each return object is mapped separately to its paper convention and locator; distinct excess-return definitions are not conflated."));
    setText(".return-basis .section-heading > p", copy("?Excess return???????????????", '?Excess return? is not a unique convention in the corporate-bond literature.'));
    const returnCards = document.querySelectorAll(".return-basis-grid article");
    [["???????", "Bond-level excess return"], ["???????", "Zero-cost long?short return"], ["???????", "Duration-adjusted return"], ["??????", "Model-weighted return"]].forEach((labels, index) => setText(".return-basis-grid article:nth-child(" + (index + 1) + ") h3", copy(...labels)));
    setText("#bondCharacteristicsTitle", copy("41 ?????", "41 bond characteristics"));
    setText("#bondCharacteristicContext", copy("这 41 项均为联合估计的特征输入；原文未为单项变量设定独立的 H−L 组合方向。", "All 41 variables enter a joint estimation as characteristic inputs; the source does not assign a standalone H–L direction to any individual variable."));
    $("#bondSearch").placeholder = copy("??????????????", "Search characteristics, fields, definitions, or papers?");
    setText(".bond-controls label:nth-child(2) > span", copy("??", "Category"));
    document.querySelectorAll(".bond-table th").forEach((cell, index) => { cell.textContent = copy(["论文标识", "共享字段", "经济含义", "文献定义"][index], ["Paper identifier", "Shared field", "Economic meaning", "Literature definition"][index]); });
    setText("#bondEmpty h3", copy("?????", "No matching characteristics"));
    setText("#bondEmpty p", copy("??????????", "Adjust the search terms or category."));
    setText("#bondSourceEvidenceTitle", copy("原始文献定位", "Primary-source locators"));
    setText("#bondSourceEvidenceLead", copy("仅保留可本地打开、并已核验页码的关键原文。", "Only core papers with a local copy and verified page location are retained."));
    setText("#bondPaperWikiTitle", copy("相关论文与定义定位", "Paper wiki and definition locators"));
    setText("#bondPaperWikiLead", copy("字段的直接定义来源与相关组合方法论文分开标示；只对已核验的页码提供本地 PDF 跳转。", "Direct field-definition sources and related portfolio-method papers are shown separately; local PDF links are provided only for verified pages."));
    setText("#bondMethodsTitle", copy("????????", "Portfolio-construction evidence"));
    setText(".method-section .section-heading > p", copy("??????????????????????", "Choose a method family, then verify the formation rule, weights, and return benchmark."));
    setText("#auxiliaryTitle", copy("13 ???????????", "13 fields not classified as core characteristics"));
    setText(".auxiliary-section > div > p:last-child", copy("???????????????????????????????????????????????????", "These fields are return, price, benchmark-matching inputs, or candidate variants. They do not enter the main table without a clear original definition and reproducible construction."));
    setText(".auxiliary-section summary", copy("??????", "View auxiliary fields"));
    setText("footer p", copy("??????????????????? BondChars ??????????????????????", "Portfolio direction and return conventions follow the original papers. Shared BondChars is used only for read-only field verification; this directory writes nothing to it."));
  }
    $("#bondCharacteristicCount").textContent = number.format(Number(summary.characteristicCount || rows.length));
  function renderSummary() {
    $("#bondObservationCount").textContent = number.format(Number(metric("raw_rows")));
    $("#bondCusipCount").textContent = number.format(Number(metric("unique_bonds")));
    $("#bondMethodCount").textContent = number.format(Number(summary.methodCount || methods.length));
    $("#bondDateRange").textContent =
      `${metric("sample_start").slice(0, 7)} — ${metric("sample_end").slice(0, 7)}`;
  }

  function populateCategories() {
    const select = $("#bondCategoryFilter");
    [...new Set(rows.map((row) => row.category))]
      .sort((a, b) => a.localeCompare(b, "zh-CN"))
      .forEach((category) => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        select.append(option);
      });
  }

  function renderReturnEvidence() {
    const list = $("#returnEvidenceList");
    if (!list) return;
    list.innerHTML = returnEvidence.map((item, index) => `
      <article class="return-evidence-card">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <h3>${escapeHtml(copy(item.titleZh, item.titleEn))}</h3>
        <p class="return-evidence-citation">${escapeHtml(item.citation)}</p>
        <p>${escapeHtml(copy(item.locatorZh, item.locatorEn))}</p>
        <footer>${item.local ? `<a href="${escapeHtml(item.local)}" target="_blank" rel="noreferrer">${copy("打开本地 PDF ↗", "Open local PDF ↗")}</a>` : ""}<a href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">${copy("原始链接 ↗", "Primary source ↗")}</a></footer>
      </article>`).join("");
  }
  function calculationMarkup(row) {
    const calculation = calculationRules[row.source_field];
    if (!calculation) return "";
    const steps = calculation.steps
      ?.map((item) => `<li>${escapeHtml(copy(item.zh, item.en))}</li>`)
      .join("") || "";
    return `<details class="bond-calculation"><summary>${copy("计算口径", "Calculation rule")}</summary><div class="bond-calculation-body"><div class="latex-formula">${escapeHtml(calculation.latex)}</div><div class="bond-evidence-tags"><span class="evidence-source">${copy("原文定义：Table A1 逐项匹配", "Definition evidence: Table A1 matched")}</span><span class="evidence-code">${copy("计算口径：公开实现复核", "Calculation evidence: public implementation")}</span><span class="evidence-model">${copy("组合方向：联合模型决定", "Portfolio direction: jointly estimated")}</span></div><p>${escapeHtml(copy(calculation.zh, calculation.en))}</p>${steps ? `<section class="bond-calculation-steps"><strong>${copy("计算步骤", "Algorithm")}</strong><ol>${steps}</ol></section>` : ""}<small>${escapeHtml(calculation.inputs)}</small><code>${escapeHtml(calculation.source)}</code></div></details>`;
  }
  function renderCharacteristics() {
    const query = $("#bondSearch").value.trim().toLocaleLowerCase("zh-CN");
    const category = $("#bondCategoryFilter").value;
    const filtered = rows.filter((row) => {
      if (category && row.category !== category) return false;
      if (!query) return true;
      return [
        row.source_acronym,
        row.source_field,
        row.name_zh,
        row.name_en,
        row.definition_zh,
        row.definition_en,
        row.notes,
      ]
        .join(" ")
        .toLocaleLowerCase("zh-CN")
        .includes(query);
    });

    $("#bondCharacteristicMeta").textContent = `显示 ${filtered.length} / ${rows.length}`;
    $("#bondEmpty").hidden = filtered.length > 0;
    $("#bondCharacteristicRows").innerHTML = filtered
      .map(
        (row) => `
          <tr class="bond-characteristic-row" tabindex="0" role="button" data-paper-open="${escapeHtml(row.paper_id || "deep-tangency-portfolio")}" aria-label="${escapeHtml(copy("打开文献详情：", "Open paper detail: "))}${escapeHtml(row.source_acronym)}">
            <td>
              <span class="paper-wiki-link">${escapeHtml(row.source_acronym)}</span>
              <small>${escapeHtml(row.category)}</small>
            </td>
            <td><code>${escapeHtml(row.source_field)}</code></td>
            <td>
              <strong>${escapeHtml(row.name_zh)}</strong>
              <small>${escapeHtml(row.name_en)}</small>
            </td>
            <td>
              <p>${escapeHtml(row.definition_zh)}</p>
              ${row.notes ? `<small class="row-note">${escapeHtml(row.notes)}</small>` : ""}
              ${calculationMarkup(row)}
            </td>
          </tr>
        `,
      )
      .join("");
    window.SignalAtlasBondMath?.typeset?.(document.querySelector("#bondCharacteristicRows"));
    if (isEnglish()) {
      $("#bondCharacteristicMeta").textContent = `Showing ${filtered.length} of ${rows.length}`;
      document.querySelectorAll("#bondCharacteristicRows tr").forEach((tr, index) => {
        const row = filtered[index];
        const cells = tr.querySelectorAll("td");
        cells[0].querySelector("small").textContent = categoryLabel(row.category);
        cells[2].querySelector("strong").textContent = row.name_en;
        cells[2].querySelector("small").remove();
        cells[3].querySelector("p").textContent = row.definition_en;
        cells[3].querySelector(".row-note")?.remove();
      });
    }

  }
  function renderMethodFilters() {
    const families = [...new Set(methods.map((method) => method.method_family))];
    $("#bondMethodFilters").innerHTML = [
      `<button class="chip ${activeMethodFamily ? "" : "active"}" type="button" data-method-family="">全部方法</button>`,
      ...families.map(
        (family) =>
          `<button class="chip ${activeMethodFamily === family ? "active" : ""}" type="button" data-method-family="${escapeHtml(family)}">${escapeHtml(family)}</button>`,
      ),
    ].join("");

    $("#bondMethodFilters").addEventListener("click", (event) => {
      const button = event.target.closest("[data-method-family]");
      if (!button) return;
      activeMethodFamily = button.dataset.methodFamily;
      $("#bondMethodFilters")
        .querySelectorAll("[data-method-family]")
        .forEach((item) => item.classList.toggle("active", item === button));
      syncBondFilterUrl({ historyMode: "push" });
      renderMethods();
    });
  }

  function methodDatum(label, value) {
    return `
      <div>
        <dt>${escapeHtml(label)}</dt>
        <dd>${escapeHtml(value || "未说明")}</dd>
      </div>
    `;
  }

  function renderMethods() {
    const filtered = activeMethodFamily
      ? methods.filter((method) => method.method_family === activeMethodFamily)
      : methods;

    $("#bondMethodList").innerHTML = filtered
      .map(
        (method, index) => `
          <article class="bond-method-card">
            <header>
              <div>
                <span class="method-index">${String(index + 1).padStart(2, "0")}</span>
                <span class="method-family">${escapeHtml(method.method_family)}</span>
              </div>
              <a href="${escapeHtml(method.source_url)}" target="_blank" rel="noreferrer">
                原始文献 ↗
              </a>
            </header>
            <div class="method-title-row">
              <div>
                <h3>${escapeHtml(method.method_short_name)}</h3>
                <p>${escapeHtml(method.authors_year)} · ${escapeHtml(method.title)}</p>
              </div>
              <span class="outlet-status">${escapeHtml(method.outlet_status)}</span>
            </div>
            <dl>
              ${methodDatum("信号时点", method.formation_timing)}
              ${methodDatum("组合形成", method.portfolio_formation)}
              ${methodDatum("权重", method.weighting)}
              ${methodDatum("再平衡 / 持有期", method.rebalancing_holding)}
              ${methodDatum("多空方向", method.long_short_convention)}
              ${methodDatum("超额收益定义", method.excess_return_definition)}
              ${methodDatum("估计或优化目标", method.optimization_target)}
            </dl>
            <p class="method-caution"><strong>核验提示</strong>${escapeHtml(method.caution_zh)}</p>
            <footer>${escapeHtml(method.evidence_pointer)}</footer>
          </article>
        `,
      )
      .join("");
  }

  function renderSourceEvidence() {
    const grid = $("#bondSourceEvidenceGrid");
    if (!grid) return;
    grid.innerHTML = sourceEvidence.map((paper) => `
      <article class="bond-source-card"><span>${escapeHtml(paper.authors_year)}</span><h3>${escapeHtml(copy(paper.title_zh, paper.title))}</h3>
      <p class="source-citation">${escapeHtml(paper.venue)}</p><p class="source-locator">${escapeHtml(copy(paper.locator_zh, paper.locator_en))}</p><blockquote>${escapeHtml(paper.quote)}</blockquote>
      <footer><a href="${escapeHtml(paper.local_file)}#page=${escapeHtml(paper.local_page)}" target="_blank" rel="noreferrer">${copy("打开本地 PDF ↗", "Open local PDF ↗")}</a><a href="${escapeHtml(paper.source_url)}" target="_blank" rel="noreferrer">${copy("作者原始链接 ↗", "Author source ↗")}</a></footer></article>`).join("");
  }

  function renderPaperWiki() {
    const list = $("#bondPaperWikiList");
    if (!list) return;
    const selected = new URLSearchParams(location.search).get("paper");
    list.innerHTML = paperWiki.map((paper) => {
      const local = paper.local_file
        ? `<a href="${escapeHtml(paper.local_file)}#page=${paper.local_page}" target="_blank" rel="noreferrer">${copy("本地 PDF →", "Local PDF →")}</a>`
        : "";
      const locators = (paper.locators || []).slice(0, 2).map(escapeHtml).join(" · ");
      const direct = Number(paper.characteristic_count || 0);
      const related = Number(paper.method_count || 0);
      const scope = direct
        ? copy(`直接定义 ${direct} 个字段；相关方法 ${related} 项`, `Direct definition source for ${direct} fields; linked to ${related} methods`)
        : copy(`相关组合方法 ${related} 项`, `Linked to ${related} portfolio methods`);
      return `
        <article class="bond-paper-wiki-card" data-paper-id="${escapeHtml(paper.paper_id)}">
          <span>${escapeHtml(scope)}</span>
          <h3><button class="paper-wiki-link" type="button" data-paper-open="${escapeHtml(paper.paper_id)}">${escapeHtml(paper.title)}</button></h3>
          <p class="paper-authors">${escapeHtml(paper.authors_year)}</p>
          <p class="paper-venue">${escapeHtml(paper.venue)}</p>
          <p class="paper-locator"><strong>${copy("定位", "Locator")}</strong>${locators || copy("待补充", "Pending")}</p>
          <footer>${local}<a href="${escapeHtml(paper.source_url)}" target="_blank" rel="noreferrer">${copy("原始链接 ↗", "Primary source ↗")}</a></footer>
        </article>`;
    }).join("");
    if (selected) requestAnimationFrame(() => list.querySelector(`[data-paper-id="${CSS.escape(selected)}"]`)?.scrollIntoView({ block: "center" }));
  }
  function renderAuxiliary() {
    $("#bondAuxiliaryList").innerHTML = auxiliary
      .map(
        (field) => `
          <article>
            <code>${escapeHtml(field.source_field)}</code>
            <span>${escapeHtml(field.field_role)}</span>
            <p>${escapeHtml(field.rationale_zh)}</p>
          </article>
        `,
      )
      .join("");
  }

  renderSummary();
  renderReturnEvidence();
  function localizeDynamicContent() {
    if (!isEnglish()) return;
    const categorySelect = $("#bondCategoryFilter");
    categorySelect.options[0].textContent = "All categories";
    [...categorySelect.options].slice(1).forEach((option) => {
      option.textContent = categoryLabel(option.value);
    });
    document.querySelectorAll("#bondMethodFilters [data-method-family]").forEach((button) => {
      button.textContent = button.dataset.methodFamily
        ? familyLabel(button.dataset.methodFamily)
        : "All methods";
    });
    const methodLabels = ["Signal timing", "Portfolio formation", "Weighting", "Rebalancing / holding horizon", "Long?short convention", "Excess-return definition", "Estimation or optimization target"];
    document.querySelectorAll(".bond-method-card").forEach((card, index) => {
      const method = methods[index];
      card.querySelector("header a").textContent = "Primary source ?";
      card.querySelector(".method-family").textContent = familyLabel(method.method_family);
      card.querySelectorAll("dl dt").forEach((term, termIndex) => { term.textContent = methodLabels[termIndex]; });
      const caution = card.querySelector(".method-caution");
      caution.innerHTML = `<strong>Verification note</strong>${escapeHtml(method.caution_en || method.caution_zh)}`;
    });
    document.querySelectorAll("#bondAuxiliaryList article").forEach((card, index) => {
      card.querySelector("span").textContent = "Auxiliary input";
      card.querySelector("p").textContent = auxiliary[index].rationale_en || auxiliary[index].rationale_zh;
    });
  }

  const renderActiveView = () => {
    if (bondView === "characteristics") {
      renderCharacteristics();
      return;
    }
    if (bondView === "methods") {
      renderMethodFilters();
      renderMethods();
      return;
    }
    if (bondView === "papers") renderPaperWiki();
  };

  if (bondView === "characteristics") {
    populateCategories();
    $("#bondSearch").value = bondUrlParams.get("q") || "";
    const requestedCategory = bondUrlParams.get("category") || "";
    if ([...$("#bondCategoryFilter").options].some((option) => option.value === requestedCategory)) {
      $("#bondCategoryFilter").value = requestedCategory;
    }
  }
  if (!methods.some((method) => method.method_family === activeMethodFamily)) activeMethodFamily = "";
  renderActiveView();

  applyLanguage();
  localizeDynamicContent();
  if (bondView === "characteristics" || bondView === "papers") {
    window.SignalAtlasBondPaperDrawer?.create({ papers: paperWiki, copy, escapeHtml }).bind();
  }

  $("#bondLanguageToggle").addEventListener("click", () => {
    const nextLanguage = isEnglish() ? "zh" : "en";
    localStorage.setItem("bond-atlas-language", nextLanguage);
    const url = new URL(location.href);
    url.searchParams.set("lang", nextLanguage);
    location.assign(url);
  });

  window.addEventListener("popstate", () => {
    const params = new URLSearchParams(location.search);
    if (bondView === "characteristics") {
      $("#bondSearch").value = params.get("q") || "";
      const category = params.get("category") || "";
      $("#bondCategoryFilter").value = [...$("#bondCategoryFilter").options].some((option) => option.value === category) ? category : "";
    }
    const method = params.get("method") || "";
    activeMethodFamily = methods.some((item) => item.method_family === method) ? method : "";
    renderActiveView();
    localizeDynamicContent();
  });
  $("#bondSearch").addEventListener("input", () => {
    syncBondFilterUrl();
    renderCharacteristics();
  });
  $("#bondCategoryFilter").addEventListener("change", () => {
    syncBondFilterUrl({ historyMode: "push" });
    renderCharacteristics();
  });
})();
