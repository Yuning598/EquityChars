(() => {
  "use strict";

  const atlas = window.SIGNAL_ATLAS_DATA;
  const config = window.SIGNAL_ATLAS_CONFIG || {};
  if (!atlas || !Array.isArray(atlas.indicators)) {
    document.body.innerHTML =
      "<main style='padding:3rem;font-family:sans-serif'>Signal Atlas data are unavailable.</main>";
    return;
  }

  const I18N = window.SIGNAL_ATLAS_I18N;
  if (!I18N) {
    throw new Error("Signal Atlas translations are unavailable.");
  }
  const elements = {
    results: document.getElementById("results"),
    emptyState: document.getElementById("emptyState"),
    search: document.getElementById("searchInput"),
    direction: document.getElementById("directionFilter"),
    artifact: document.getElementById("artifactFilter"),
    confidence: document.getElementById("confidenceFilter"),
    method: document.getElementById("methodFilter"),
    sort: document.getElementById("sortSelect"),
    resultMeta: document.getElementById("resultMeta"),
    directionKey: document.getElementById("directionKey"),
    methodFamilyChips: document.getElementById("methodFamilyChips"),
    advancedFilters: document.getElementById("advancedFilters"),
    activeFilterCount: document.getElementById("activeFilterCount"),
    methodTaxonomyList: document.getElementById("methodTaxonomyList"),
    pagination: document.getElementById("pagination"),
    drawer: document.getElementById("detailDrawer"),
    drawerContent: document.getElementById("drawerContent"),
    drawerBackdrop: document.getElementById("drawerBackdrop"),
    pdfDialog: document.getElementById("pdfDialog"),
    pdfFrame: document.getElementById("pdfFrame"),
    pdfDialogTitle: document.getElementById("pdfDialogTitle"),
    pdfExternalLink: document.getElementById("pdfExternalLink"),
    methodDialog: document.getElementById("methodDialog")
  };

  const urlParams = window.SignalAtlasUrlState.params();
  const requestedLanguage = urlParams.get("lang");
  const storedLanguage = localStorage.getItem("signal-atlas-language");
  let language =
    requestedLanguage === "en" || requestedLanguage === "zh"
      ? requestedLanguage
      : storedLanguage === "en"
        ? "en"
        : "zh";
  let quickFilter = "all";
  if (requestedLanguage === "en" || requestedLanguage === "zh") localStorage.setItem("signal-atlas-language", requestedLanguage);
  const requestedView = urlParams.get("view");
  const pageView = document.body.dataset.equityView;
  const equityView = ["methods", "criteria"].includes(requestedView)
    ? requestedView
    : ["methods", "criteria"].includes(pageView)
      ? pageView
      : "directory";
  const legacyPageRoutes = {
    methods: "equity-portfolio-construction.html",
    criteria: "equity-classification-criteria.html"
  };
  if (legacyPageRoutes[requestedView] && !pageView) {
    const url = new URL(legacyPageRoutes[requestedView], location.href);
    url.search = location.search;
    url.searchParams.delete("view");
    location.replace(url);
    return;
  }
  document.body.dataset.equityView = equityView;

  let currentPage = 1;
  let activeIndicator = null;
  let drawerTrigger = null;
  const PAGE_SIZE = 20;
  const METHOD_FAMILIES = [
    "cross_sectional_return_regression",
    "multivariate_prediction_model",
    "model_weighted_zero_investment",
    "sorted_portfolio_comparison",
    "event_study",
    "implied_cost_of_capital",
    "corporate_investment_regression",
    "beta_pricing_test"
  ];
  const requestedMethodFamily = urlParams.get("method");
  const requestedQuickFilter = ["all", "simple", "mismatch", "review", "pdf"].includes(urlParams.get("quick"))
    ? urlParams.get("quick")
    : "all";

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

  const safeValue = (value) => {
    const text = String(value || "").trim();
    return text && text !== "N/A" ? text : t("na");
  };

  const localizedValue = (value, fallback = "") => {
    if (value && typeof value === "object") {
      return String(value[language] || fallback || "").trim();
    }
    return String(value || fallback || "").trim();
  };

  const methodFamilyLabel = (family) =>
    t("methodFamilyLabels")[family] || family;

  const methodInterpretation = (item) => {
    const design = item.method_design || {};
    const direct = localizedValue(design.interpretation);
    if (direct) return direct;
    return t("methodFamilyInterpretations")?.[design.family] || "";
  };

  const directionClass = (direction) => {
    if (direction === "H-L") return "hl";
    if (direction === "L-H") return "lh";
    if (direction === "not-simple" || direction === "transformed") return "complex";
    return "muted";
  };

  const confidenceRank = { high: 0, medium: 1, low: 2 };
  const directionRank = {
    "H-L": 0,
    "L-H": 1,
    "not-simple": 2,
    transformed: 3,
    ambiguous: 4,
    "N/A": 5
  };

  const formatDate = (value) => {
    const date = new Date(value);
    return new Intl.DateTimeFormat(language === "zh" ? "zh-CN" : "en-GB", {
      year: "numeric",
      month: "short",
      day: "numeric"
    }).format(date);
  };

  const encodePath = (value) =>
    String(value)
      .split("/")
      .map((part) => encodeURIComponent(part))
      .join("/");

  const localDocumentUrl = (item, page = null) => {
    if (!item.paper.local_file) return "";
    const base = config.documentBase || "../";
    const url = `${base}${encodePath(item.paper.local_file)}`;
    return page ? `${url}#page=${page}&zoom=page-width` : url;
  };

  const applyLanguage = () => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    document.title =
      language === "zh"
        ? "公司特征组合 · Signal Atlas"
        : "Characteristic portfolios · Signal Atlas";
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const value = t(node.dataset.i18n);
      if (typeof value === "string") node.textContent = value;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
      node.setAttribute("placeholder", t(node.dataset.i18nPlaceholder));
    });
    document.getElementById("languageToggle").textContent =
      language === "zh" ? "EN" : "中文";
    const selectedMethod = elements.method.value;
    const languageCode = language;
    window.SignalAtlasNavigation?.syncEquity({
      language: languageCode,
      active: equityView
    });
    elements.method.innerHTML = [
      `<option value="">${escapeHtml(t("allMethodFamilies"))}</option>`,
      ...METHOD_FAMILIES.map(
        (family) => `<option value="${escapeHtml(family)}">${escapeHtml(methodFamilyLabel(family))}</option>`
      )
    ].join("");
    elements.method.value = selectedMethod;
    elements.directionKey.innerHTML = t("directionKey");
  };

  const updateSummary = () => {
    document.getElementById("totalCount").textContent = atlas.summary.indicators;
    document.getElementById("highLowCount").textContent =
      atlas.summary.directions["H-L"] || 0;
    document.getElementById("lowHighCount").textContent =
      atlas.summary.directions["L-H"] || 0;
    document.getElementById("pdfCount").textContent =
      atlas.summary.artifacts.pdf || 0;
  };

  const renderMethodOverview = () => {
    const counts = atlas.summary.methods || {};
    elements.methodFamilyChips.innerHTML = METHOD_FAMILIES.map((family) => `
      <button
        class="method-family-chip ${elements.method.value === family ? "active" : ""}"
        type="button"
        data-method-family="${escapeHtml(family)}"
      >
        <strong>${escapeHtml(methodFamilyLabel(family))}</strong>
        <span>${escapeHtml(t("methodCount", counts[family] || 0))}</span>
      </button>`).join("");
    elements.methodTaxonomyList.innerHTML = METHOD_FAMILIES.map((family) => `
      <div>
        <dt>${escapeHtml(methodFamilyLabel(family))} · ${escapeHtml(t("methodCount", counts[family] || 0))}</dt>
        <dd>${escapeHtml(t("methodFamilyDescriptions")[family])}</dd>
      </div>`).join("");
    elements.methodFamilyChips.querySelectorAll("[data-method-family]").forEach((button) => {
      button.addEventListener("click", () => {
        const family = button.dataset.methodFamily;
        const url = new URL(location.href);
        url.searchParams.delete("view");
        url.searchParams.set("method", family);
        url.searchParams.set("lang", language);
        window.location.assign(url);
      });
    });
  };

  const searchHaystack = (item) =>
    [
      item.id,
      item.name,
      item.signal_definition,
      item.raw_signal,
      item.construction_summary,
      localizedValue(item.method_design?.summary),
      localizedValue(item.method_design?.signal_role),
      localizedValue(item.method_design?.estimand),
      item.method_design ? methodFamilyLabel(item.method_design.family) : "",
      item.breakpoints,
      item.paper_long_leg,
      item.paper_short_leg,
      item.paper.title,
      item.paper.authors,
      item.paper.venue,
      item.paper.doi
    ]
      .join(" ")
      .toLowerCase();

  const filterItems = () => {
    const query = elements.search.value.trim().toLowerCase();
    let items = atlas.indicators.filter((item) => {
      if (query && !searchHaystack(item).includes(query)) return false;
      if (elements.direction.value && item.paper_direction !== elements.direction.value)
        return false;
      if (elements.artifact.value && item.paper.artifact_type !== elements.artifact.value)
        return false;
      if (elements.confidence.value && item.confidence !== elements.confidence.value)
        return false;
      if (
        elements.method.value &&
        item.method_design?.family !== elements.method.value
      )
        return false;
      if (
        quickFilter === "simple" &&
        !["H-L", "L-H"].includes(item.paper_direction)
      )
        return false;
      if (quickFilter === "mismatch" && item.agreement !== "no") return false;
      if (quickFilter === "review" && item.agreement !== "needs-review") return false;
      if (quickFilter === "pdf" && item.paper.artifact_type !== "pdf") return false;
      return true;
    });

    const sortMode = elements.sort.value;
    items = items.slice().sort((a, b) => {
      if (sortMode === "direction") {
        return (
          directionRank[a.paper_direction] - directionRank[b.paper_direction] ||
          a.id.localeCompare(b.id)
        );
      }
      if (sortMode === "year-desc") {
        return Number(b.paper.year || 0) - Number(a.paper.year || 0) ||
          a.id.localeCompare(b.id);
      }
      if (sortMode === "confidence") {
        return confidenceRank[a.confidence] - confidenceRank[b.confidence] ||
          a.id.localeCompare(b.id);
      }
      return a.id.localeCompare(b.id);
    });
    return items;
  };

  const evidenceBadge = (item) => {
    const count = item.evidence_count ?? item.evidence.length;
    if (item.paper.artifact_type === "pdf")
      return `<span class="evidence-badge pdf">${escapeHtml(t("pdfEvidence", count))}</span>`;
    if (item.paper.artifact_type === "html")
      return `<span class="evidence-badge">${escapeHtml(t("htmlEvidence", count))}</span>`;
    if (item.evidence_type === "method_label")
      return `<span class="evidence-badge">${escapeHtml(t("auditBasis"))}</span>`;
    return `<span class="evidence-badge">${escapeHtml(t("externalEvidence"))}</span>`;
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
        renderResults();
        document.getElementById("workspaceTitle").scrollIntoView({
          block: "start",
          behavior: "smooth"
        });
      });
    });
  };

  const renderResults = () => {
    const items = filterItems();
    const totalPages = Math.max(1, Math.ceil(items.length / PAGE_SIZE));
    currentPage = Math.min(Math.max(currentPage, 1), totalPages);
    const start = (currentPage - 1) * PAGE_SIZE;
    const pageItems = items.slice(start, start + PAGE_SIZE);
    elements.resultMeta.textContent = t(
      "resultMeta",
      items.length,
      formatDate(atlas.generated_at)
    );
    elements.emptyState.hidden = items.length !== 0;
    elements.results.hidden = items.length === 0;
    if (!items.length) {
      elements.results.innerHTML = "";
      renderPagination(0);
      return;
    }

    const header = `
      <div class="result-header" aria-hidden="true">
        <span>${escapeHtml(t("columnSignal"))}</span>
        <span>${escapeHtml(t("columnDirection"))}</span>
        <span>${escapeHtml(t("columnLegs"))}</span>
        <span>${escapeHtml(t("columnPaper"))}</span>
        <span>${escapeHtml(t("columnEvidence"))}</span>
      </div>`;
    const cards = pageItems
      .map(
        (item) => `
          <button class="signal-card" type="button" data-indicator-id="${escapeHtml(item.id)}" aria-label="${escapeHtml(t("details"))}: ${escapeHtml(item.id)}">
            <span class="signal-identity">
              <span class="signal-code">${escapeHtml(item.id)}</span>
              <span>
                <strong>${escapeHtml(item.name)}</strong>
                <small>${escapeHtml(item.raw_signal || item.signal_definition)}</small>
              </span>
            </span>
            <span>
              <span class="direction-badge ${directionClass(item.paper_direction)}">
                ${escapeHtml(t("directionLabels")[item.paper_direction] || item.paper_direction)}
              </span>
              ${item.method_design ? `<span class="method-family-badge">${escapeHtml(methodFamilyLabel(item.method_design.family))}</span>` : ""}
            </span>
            <span class="legs">
              <span class="leg-line long"><i>${escapeHtml(t("long"))}</i><span>${escapeHtml(safeValue(item.paper_long_leg))}</span></span>
              <span class="leg-line short"><i>${escapeHtml(t("short"))}</i><span>${escapeHtml(safeValue(item.paper_short_leg))}</span></span>
            </span>
            <span class="paper-cell">
              <strong>${escapeHtml(item.paper.title)}</strong>
              <small>${escapeHtml(item.paper.authors)} · ${escapeHtml(item.paper.year)}</small>
            </span>
            <span class="evidence-cell">
              ${evidenceBadge(item)}
              <span class="arrow" aria-hidden="true">→</span>
            </span>
          </button>`
      )
      .join("");
    elements.results.innerHTML = header + cards;
    renderPagination(items.length);
    elements.results.querySelectorAll("[data-indicator-id]").forEach((button) => {
      button.addEventListener("click", () => openDrawer(button.dataset.indicatorId, true, button));
    });
  };

  const sourceLinks = (item) => {
    const links = [];
    if (config.preferLocalDocuments !== false && item.paper.local_file) {
      const label =
        item.paper.artifact_type === "pdf" ? t("openLocalPdf") : t("openLocalHtml");
      links.push(
        `<a class="source-link" href="${escapeHtml(localDocumentUrl(item))}" target="_blank" rel="noreferrer">↗ ${escapeHtml(label)}</a>`
      );
    }
    if (item.paper.source_url) {
      links.push(
        `<a class="source-link" href="${escapeHtml(item.paper.source_url)}" target="_blank" rel="noreferrer">↗ ${escapeHtml(t("publisherPage"))}</a>`
      );
    }
    if (item.paper.doi) {
      links.push(
        `<a class="source-link" href="https://doi.org/${encodeURIComponent(item.paper.doi)}" target="_blank" rel="noreferrer">↗ ${escapeHtml(t("doiLink"))}</a>`
      );
    }
    (item.audit_sources || []).forEach((source) => {
      links.push(
        `<a class="source-link" href="${escapeHtml(source.href)}" target="_blank" rel="noreferrer">↗ ${escapeHtml(t("auditSource"))}: ${escapeHtml(source.path)}</a>`
      );
    });
    return links.join("");
  };

  const fact = (label, value) => `
    <div class="fact">
      <span>${escapeHtml(label)}</span>
      <p>${escapeHtml(safeValue(value))}</p>
    </div>`;

  const evidenceMarkup = (item) => {
    if (!item.evidence.length) {
      return `<div class="no-evidence">${escapeHtml(t("noExcerpt"))}</div>`;
    }
    return item.evidence
      .map((evidence, index) => {
        const method =
          evidence.method === "curated_lines"
            ? t("curatedLines")
            : evidence.method === "automatic_html_search"
              ? t("automaticHtmlCandidate")
              : t("automaticCandidate");
        const location = evidence.page
          ? t("pdfPage", evidence.page)
          : evidence.line_start
            ? t("textLines", evidence.line_start, evidence.line_end)
            : t("clickToVerify");
        return `
          <button class="evidence-quote ${evidence.method !== "curated_lines" ? "auto" : ""}" type="button" data-evidence-index="${index}">
            <blockquote>“${escapeHtml(evidence.text)}”</blockquote>
            <span class="evidence-meta">
              <span>${escapeHtml(method)}${evidence.line_start ? ` · ${escapeHtml(t("textLines", evidence.line_start, evidence.line_end))}` : ""}</span>
              <strong>${escapeHtml(location)} →</strong>
            </span>
          </button>`;
      })
      .join("");
  };

  const renderDrawer = (item) => {
    const directionLabel =
      t("directionLabels")[item.paper_direction] || item.paper_direction;
    const agreementLabel =
      t("agreementLabels")[item.agreement] || item.agreement;
    elements.drawerContent.innerHTML = `
      <p class="drawer-id">${escapeHtml(item.id)} · ${escapeHtml(item.paper.id)}</p>
      <h2 class="drawer-title" id="drawerTitle">${escapeHtml(item.name)}</h2>
      <div class="drawer-badges">
        <span class="direction-badge ${directionClass(item.paper_direction)}">${escapeHtml(directionLabel)}</span>
        <span class="confidence-badge ${escapeHtml(item.confidence)}">${escapeHtml(t("confidence"))}: ${escapeHtml(t(item.confidence))}</span>
        <span class="agreement-badge ${escapeHtml(item.agreement)}">${escapeHtml(t("agreement"))}: ${escapeHtml(agreementLabel)}</span>
      </div>

      <div class="direction-visual">
        <div class="leg-card long">
          <span>${escapeHtml(t("long"))} · LONG</span>
          <strong>${escapeHtml(safeValue(item.paper_long_leg))}</strong>
        </div>
        <div class="direction-minus" aria-hidden="true">−</div>
        <div class="leg-card short">
          <span>${escapeHtml(t("short"))} · SHORT</span>
          <strong>${escapeHtml(safeValue(item.paper_short_leg))}</strong>
        </div>
      </div>

      <section class="drawer-section ${item.method_design ? "method-design-section" : ""}">
        <h3>${escapeHtml(item.method_design ? t("methodDesignTitle") : t("sourceConstruction"))}</h3>
        ${item.method_design ? `
          <div class="method-design-header">
            <span class="method-family-badge prominent">${escapeHtml(methodFamilyLabel(item.method_design.family))}</span>
            <p class="construction-summary">${escapeHtml(localizedValue(item.method_design.summary, item.construction_summary))}</p>
          </div>
          <div class="facts-grid method-design-facts">
            ${fact(t("signalRole"), localizedValue(item.method_design.signal_role))}
            ${fact(t("estimand"), localizedValue(item.method_design.estimand))}
            <div class="fact method-interpretation">
              <span>${escapeHtml(t("longShortInterpretation"))}</span>
              <p>${escapeHtml(methodInterpretation(item))}</p>
            </div>
          </div>
          <h4 class="drawer-subheading">${escapeHtml(t("designImplementation"))}</h4>` : `
          <p class="construction-summary">${escapeHtml(item.construction_summary)}</p>`}
        <div class="facts-grid" style="margin-top:1rem">
          ${fact(t("sampleTiming"), item.sample_and_timing)}
          ${fact(t("breakpoints"), item.breakpoints)}
          ${fact(t("weighting"), item.weighting)}
          ${fact(t("rebalance"), item.rebalancing_frequency)}
          ${fact(t("holding"), item.holding_period)}
          ${fact(t("sourcePointer"), item.evidence_pointer)}
        </div>
      </section>

      <section class="drawer-section">
        <h3>${escapeHtml(t("evidenceTitle"))}</h3>
        <p class="result-meta">${escapeHtml(t("evidenceOriginalNote"))}</p>
        <div class="evidence-list">${evidenceMarkup(item)}</div>
      </section>

      <section class="drawer-section">
        <h3>${escapeHtml(t("paperSource"))}</h3>
        <div class="paper-citation">
          <strong>${escapeHtml(item.paper.title)}</strong>
          <span>${escapeHtml(item.paper.authors)} (${escapeHtml(item.paper.year)}). ${escapeHtml(item.paper.venue)}.</span>
          <span>${escapeHtml(item.paper.doi ? `DOI: ${item.paper.doi}` : "")}</span>
        </div>
        <div class="source-actions">${sourceLinks(item)}</div>
      </section>

      <section class="drawer-section">
        <h3>${escapeHtml(t("codeComparison"))}</h3>
        <div class="facts-grid">
          ${fact(t("codeDirection"), item.code_direction)}
          ${fact(t("paperDirectionLabel"), directionLabel)}
          ${fact(t("codeLongLeg"), item.code_long_leg)}
          ${fact(t("codeShortLeg"), item.code_short_leg)}
        </div>
      </section>

      <section class="drawer-section">
        <h3>${escapeHtml(t("reviewerNote"))}</h3>
        <p class="reviewer-note">${escapeHtml(item.reviewer_notes || item.code_notes)}</p>
      </section>`;

    elements.drawerContent
      .querySelectorAll("[data-evidence-index]")
      .forEach((button) => {
        button.addEventListener("click", () => {
          openEvidence(item, item.evidence[Number(button.dataset.evidenceIndex)]);
        });
      });
  };

  let evidenceLoadPromise = null;
  const ensureDrawerEvidence = async (item) => {
    if (item._detailsLoaded) return item;
    if (!evidenceLoadPromise) {
      evidenceLoadPromise = new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = new URL("data-details.js", document.baseURI).href;
        script.onload = resolve;
        script.onerror = () => reject(new Error("Signal Atlas evidence details could not be loaded."));
        document.head.append(script);
      });
    }
    try {
      await evidenceLoadPromise;
      const details = window.SIGNAL_ATLAS_DETAILS?.[item.id] || {};
      item.evidence = details.evidence || [];
      item.audit_sources = details.audit_sources || [];
    } catch (error) {
      console.error(error);
      item.evidence = item.evidence || [];
      item.audit_sources = item.audit_sources || [];
    }
    item._detailsLoaded = true;
    return item;
  };

  const openDrawer = async (id, updateHash = true, trigger = null) => {
    const item = atlas.indicators.find((candidate) => candidate.id === id);
    if (!item) return;
    if (trigger instanceof HTMLElement) drawerTrigger = trigger;
    await ensureDrawerEvidence(item);
    activeIndicator = item;
    renderDrawer(item);
    elements.drawerBackdrop.hidden = false;
    elements.drawer.setAttribute("aria-hidden", "false");
    requestAnimationFrame(() => elements.drawer.classList.add("open"));
    document.body.classList.add("drawer-open");
    if (updateHash) history.replaceState(null, "", `#${encodeURIComponent(id)}`);
  };

  const closeDrawer = (clearHash = true) => {
    elements.drawer.classList.remove("open");
    elements.drawer.setAttribute("aria-hidden", "true");
    elements.drawerBackdrop.hidden = true;
    document.body.classList.remove("drawer-open");
    activeIndicator = null;
    const returnFocus = drawerTrigger;
    drawerTrigger = null;
    if (clearHash && location.hash) history.replaceState(null, "", location.pathname + location.search);
    if (returnFocus?.isConnected) returnFocus.focus();
  };

  const openEvidence = (item, evidence) => {
    const localAvailable =
      config.preferLocalDocuments !== false && item.paper.local_file;
    if (item.paper.artifact_type === "pdf" && localAvailable && evidence.page) {
      const url = localDocumentUrl(item, evidence.page);
      elements.pdfFrame.src = url;
      elements.pdfExternalLink.href = url;
      elements.pdfDialogTitle.textContent = t(
        "pdfDialogTitle",
        item.paper.title,
        evidence.page
      );
      elements.pdfDialog.showModal();
      return;
    }
    const url = localAvailable
      ? evidence.href || localDocumentUrl(item)
      : (!item.paper.local_file && evidence.href) ||
        item.paper.source_url ||
        (item.paper.doi ? `https://doi.org/${item.paper.doi}` : "");
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  const closePdf = () => {
    elements.pdfDialog.close();
    elements.pdfFrame.src = "about:blank";
  };

  const activeFilterTotal = () => [
    elements.search.value.trim(),
    elements.direction.value,
    elements.artifact.value,
    elements.confidence.value,
    elements.method.value,
    elements.sort.value !== "id" ? "sort" : "",
    quickFilter !== "all" ? "quick" : ""
  ].filter(Boolean).length;

  const updateFilterSummary = ({ reveal = false } = {}) => {
    const count = activeFilterTotal();
    elements.activeFilterCount.hidden = count === 0;
    elements.activeFilterCount.textContent = count ? t("activeFilters", count) : "";
    if (reveal && count) elements.advancedFilters.open = true;
  };
  const syncFilterUrl = ({ historyMode = "replace" } = {}) => {
    const url = new URL(location.href);
    const values = {
      q: elements.search.value.trim(),
      direction: elements.direction.value,
      source: elements.artifact.value,
      confidence: elements.confidence.value,
      method: elements.method.value,
      sort: elements.sort.value === "id" ? "" : elements.sort.value,
      quick: quickFilter === "all" ? "" : quickFilter
    };
    window.SignalAtlasUrlState.writeFilters(values, historyMode);

  };

  const restoreFiltersFromUrl = () => {
    const params = window.SignalAtlasUrlState.params();
    const restoreSelect = (element, value, fallback = "") => {
      element.value = [...element.options].some((option) => option.value === value) ? value : fallback;
    };
    elements.search.value = params.get("q") || "";
    restoreSelect(elements.direction, params.get("direction") || "");
    restoreSelect(elements.artifact, params.get("source") || "");
    restoreSelect(elements.confidence, params.get("confidence") || "");
    restoreSelect(elements.sort, params.get("sort") || "id", "id");
    const restoredMethod = params.get("method");
    elements.method.value = METHOD_FAMILIES.includes(restoredMethod) ? restoredMethod : "";
    quickFilter = ["all", "simple", "mismatch", "review", "pdf"].includes(params.get("quick"))
      ? params.get("quick")
      : "all";
    document.querySelectorAll("[data-quick-filter]").forEach((button) => {
      button.classList.toggle("active", button.dataset.quickFilter === quickFilter);
    });
  };
  const clearFilters = () => {
    elements.search.value = "";
    elements.direction.value = "";
    elements.artifact.value = "";
    elements.confidence.value = "";
    elements.method.value = "";
    elements.sort.value = "id";
    quickFilter = "all";
    currentPage = 1;
    syncFilterUrl({ historyMode: "push" });
    updateFilterSummary();

    document.querySelectorAll("[data-quick-filter]").forEach((button) => {
      button.classList.toggle("active", button.dataset.quickFilter === "all");
    });
    renderMethodOverview();
    renderResults();
  };

  const rerender = () => {
    applyLanguage();
    updateSummary();
    renderMethodOverview();
    renderResults();
    if (activeIndicator) renderDrawer(activeIndicator);
  };

  const resetPageAndRender = ({ historyMode = "replace" } = {}) => {
    currentPage = 1;
    syncFilterUrl({ historyMode });
    updateFilterSummary();
    renderMethodOverview();
    renderResults();
  };

  elements.search.addEventListener("input", () => resetPageAndRender());
  [elements.direction, elements.artifact, elements.confidence, elements.method, elements.sort]
    .forEach((control) => control.addEventListener("change", () => {
      resetPageAndRender({ historyMode: "push" });
    }));

  document.querySelectorAll("[data-quick-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      quickFilter = button.dataset.quickFilter;
      document.querySelectorAll("[data-quick-filter]").forEach((candidate) => {
        candidate.classList.toggle("active", candidate === button);
      });
      resetPageAndRender({ historyMode: "push" });
    });
  });

  window.addEventListener("popstate", () => {
    currentPage = 1;
    restoreFiltersFromUrl();
    updateFilterSummary({ reveal: true });
    renderMethodOverview();
    renderResults();
  });

  document.getElementById("languageToggle").addEventListener("click", () => {
    language = language === "zh" ? "en" : "zh";
    localStorage.setItem("signal-atlas-language", language);
    window.SignalAtlasUrlState.writeLanguage(language);

    rerender();
  });
  document.getElementById("clearFiltersButton").addEventListener("click", clearFilters);
  document.getElementById("closeDrawerButton").addEventListener("click", () => closeDrawer());
  elements.drawerBackdrop.addEventListener("click", () => closeDrawer());
  document.getElementById("closePdfButton").addEventListener("click", closePdf);
  elements.pdfDialog.addEventListener("click", (event) => {
    if (event.target === elements.pdfDialog) closePdf();
  });
  const methodButton = document.getElementById("methodButton");
  if (methodButton?.tagName === "BUTTON") {
    methodButton.addEventListener("click", () => elements.methodDialog.showModal());
  }
  document.getElementById("closeMethodButton").addEventListener("click", () => {
    elements.methodDialog.close();
  });

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "/" &&
      !["INPUT", "SELECT", "TEXTAREA"].includes(document.activeElement.tagName)
    ) {
      event.preventDefault();
      elements.search.focus();
    }
    if (event.key === "Escape") {
      if (elements.pdfDialog.open) closePdf();
      else if (elements.methodDialog.open) elements.methodDialog.close();
      else if (activeIndicator) closeDrawer();
    }
  });

  rerender();
  restoreFiltersFromUrl();
  updateFilterSummary({ reveal: true });
  if (window.matchMedia("(max-width: 760px)").matches && activeFilterTotal() === 0) {
    elements.advancedFilters.open = false;
  }
  renderMethodOverview();
  renderResults();
  const hashId = decodeURIComponent(location.hash.slice(1));
  if (hashId) openDrawer(hashId, false);
  if (equityView === "criteria" && !elements.methodDialog.open) {
    elements.methodDialog.show();
  }
})();
