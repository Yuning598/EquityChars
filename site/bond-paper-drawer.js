(() => {
  "use strict";

  function create({ papers, copy, escapeHtml }) {
    const drawer = document.querySelector("#bondPaperDrawer");
    const backdrop = document.querySelector("#bondPaperDrawerBackdrop");
    const content = document.querySelector("#bondPaperDrawerContent");
    const closeButton = document.querySelector("#closeBondPaperDrawerButton");
    let activePaperId = null;
    let trigger = null;

    function scope(paper) {
      const direct = Number(paper.characteristic_count || 0);
      const related = Number(paper.method_count || 0);
      return direct
        ? copy(`直接定义来源：${direct} 个字段；相关方法：${related} 项`, `Direct definition source: ${direct} fields; related methods: ${related}`)
        : copy(`相关组合方法：${related} 项`, `Related portfolio methods: ${related}`);
    }

    function render(paper) {
      const local = paper.local_file
        ? `<a class="ghost-button dark" href="${escapeHtml(paper.local_file)}#page=${escapeHtml(paper.local_page || 1)}" target="_blank" rel="noreferrer">${copy("打开本地 PDF", "Open local PDF")}</a>`
        : "";
      const locators = (paper.locators || []).map((locator) => `<li>${escapeHtml(locator)}</li>`).join("");
      const evidence = (paper.evidence_excerpts || []).map((item) => `<a class="evidence-quote bond-evidence-quote" href="${escapeHtml(paper.local_file)}#page=${escapeHtml(item.page)}" target="_blank" rel="noreferrer"><blockquote>“${escapeHtml(item.quote)}”</blockquote><span class="evidence-meta"><span>${copy("已核验原文", "Verified source text")}</span><strong>${copy(`PDF 第 ${item.page} 页 ↗`, `PDF p. ${item.page} ↗`)}</strong></span></a>`).join("");
      content.innerHTML = `
        <p class="drawer-id">${escapeHtml(paper.authors_year)}</p>
        <h2 class="drawer-title" id="bondPaperDrawerTitle">${escapeHtml(paper.title)}</h2>
        <div class="drawer-badges"><span class="agreement-badge verified">${escapeHtml(scope(paper))}</span></div>
        <section class="drawer-section">
          <h3>${copy("文献出处", "Publication")}</h3>
          <div class="paper-citation"><strong>${escapeHtml(paper.venue || "—")}</strong></div>
        </section>
        <section class="drawer-section">
          <h3>${copy("已核验定位", "Verified locators")}</h3>
          ${locators ? `<ul class="bond-paper-drawer-locators">${locators}</ul>` : `<p class="result-meta">${copy("暂无可核验定位。", "No verified locator is available.")}</p>`}
        </section>
                <section class="drawer-section">
          <h3>${copy("具体证据", "Quoted evidence")}</h3>
          ${evidence ? `<div class="evidence-list">${evidence}</div>` : `<p class="result-meta">${copy("尚未核验可引用原句。", "No verified verbatim excerpt is available.")}</p>`}
        </section>
<section class="drawer-section">
          <h3>${copy("访问原文", "Access")}</h3>
          <div class="bond-paper-drawer-actions">${local}<a class="ghost-button" href="${escapeHtml(paper.source_url)}" target="_blank" rel="noreferrer">${copy("原始链接", "Primary source")}</a></div>
        </section>`;
    }

    function open(paperId, updateHash = true, opener = null) {
      const paper = papers.find((item) => item.paper_id === paperId);
      if (!paper || !drawer) return;
      activePaperId = paper.paper_id;
      if (opener instanceof HTMLElement) trigger = opener;
      render(paper);
      backdrop.hidden = false;
      drawer.setAttribute("aria-hidden", "false");
      requestAnimationFrame(() => drawer.classList.add("open"));
      document.body.classList.add("drawer-open");
      if (updateHash) history.replaceState(null, "", `${location.pathname}${location.search}#paper-${encodeURIComponent(paper.paper_id)}`);
      closeButton?.focus();
    }

    function close(clearHash = true) {
      if (!drawer) return;
      drawer.classList.remove("open");
      drawer.setAttribute("aria-hidden", "true");
      backdrop.hidden = true;
      document.body.classList.remove("drawer-open");
      activePaperId = null;
      const returnFocus = trigger;
      trigger = null;
      if (clearHash && location.hash.startsWith("#paper-")) history.replaceState(null, "", location.pathname + location.search);
      if (returnFocus?.isConnected) returnFocus.focus();
    }

    function bind() {
      document.addEventListener("click", (event) => {
        if (event.target.closest(".bond-calculation")) return;
        const opener = event.target.closest("[data-paper-open]");
        if (!opener) return;
        event.preventDefault();
        open(opener.dataset.paperOpen, true, opener);
      });
      closeButton?.addEventListener("click", () => close());
      backdrop?.addEventListener("click", () => close());
      document.addEventListener("keydown", (event) => {
        if ((event.key === "Enter" || event.key === " ") && event.target.matches("tr[data-paper-open]")) { event.preventDefault(); open(event.target.dataset.paperOpen, true, event.target); }
        else if (event.key === "Escape" && activePaperId) close();
      });
      window.addEventListener("hashchange", () => {
        const match = location.hash.match(/^#paper-(.+)$/);
        if (match) open(decodeURIComponent(match[1]), false);
        else if (activePaperId) close(false);
      });
      const initial = location.hash.match(/^#paper-(.+)$/);
      if (initial) open(decodeURIComponent(initial[1]), false);
    }

    return { bind };
  }

  window.SignalAtlasBondPaperDrawer = { create };
})();