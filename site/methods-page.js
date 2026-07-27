(() => {
  "use strict";
  const atlas = window.SIGNAL_ATLAS_DATA;
  if (!atlas) return;
  const params = new URLSearchParams(location.search);
  let language = params.get("lang") === "en" || params.get("lang") === "zh"
    ? params.get("lang")
    : localStorage.getItem("signal-atlas-language") === "en" ? "en" : "zh";
  const labels = {
    zh: {
      nav: ["特征目录", "组合构造", "特征度量", "判定准则"],
      kicker: "EMPIRICAL DESIGNS", title: "组合构造",
      lead: "区分两端排序多空组合与回归、预测、事件研究、模型加权等非两端检验设计。",
      heading: "文献检验设计", meta: (count) => `${count} 项非两端检验特征`, action: "查看特征",
      families: {cross_sectional_return_regression:"横截面收益回归",multivariate_prediction_model:"多变量预测模型",model_weighted_zero_investment:"模型加权零投资组合",sorted_portfolio_comparison:"特征排序组合比较",event_study:"事件研究与基准调整收益",implied_cost_of_capital:"隐含资本成本检验",corporate_investment_regression:"公司投资回归",beta_pricing_test:"β定价检验"}
    },
    en: {
      nav: ["Characteristic directory", "Portfolio construction", "Characteristic measures", "Classification criteria"],
      kicker: "EMPIRICAL DESIGNS", title: "Portfolio construction",
      lead: "Distinguish endpoint-sorted long–short portfolios from regression, prediction, event-study, and model-weighted empirical designs.",
      heading: "Empirical designs in the source", meta: (count) => `${count} characteristics without a simple endpoint spread`, action: "View characteristics",
      families: {cross_sectional_return_regression:"Cross-sectional return regression",multivariate_prediction_model:"Multivariate prediction model",model_weighted_zero_investment:"Model-weighted zero-investment portfolio",sorted_portfolio_comparison:"Characteristic-sorted portfolio comparison",event_study:"Event study and benchmark-adjusted returns",implied_cost_of_capital:"Implied cost-of-capital test",corporate_investment_regression:"Corporate investment regression",beta_pricing_test:"Beta-pricing test"}
    }
  };
  const families = Object.keys(labels.en.families);
  const render = () => {
    const copy = labels[language];
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    document.title = `${copy.title} · Signal Atlas`;
    document.querySelectorAll("[data-equity-nav]").forEach((link, index) => link.textContent = copy.nav[index]);
    document.querySelector("#pageKicker").textContent = copy.kicker;
    document.querySelector("#pageTitle").textContent = copy.title;
    document.querySelector("#pageLead").textContent = copy.lead;
    document.querySelector("#methodDirectoryTitle").textContent = copy.heading;
    document.querySelector("#methodDirectoryMeta").textContent = copy.meta(families.reduce((sum, family) => sum + (atlas.summary.methods?.[family] || 0), 0));
    document.querySelector("#languageToggle").textContent = language === "zh" ? "EN" : "中文";
    window.SignalAtlasNavigation?.syncEquity({ language, active: "methods" });
    document.querySelector("#methodFamilyChips").innerHTML = families.map((family) => `<button class="method-family-chip" type="button" data-family="${family}"><strong>${copy.families[family]}</strong><span>${atlas.summary.methods?.[family] || 0}</span><em>${copy.action} →</em></button>`).join("");
    document.querySelectorAll("[data-family]").forEach((button) => button.addEventListener("click", () => {
      const url = new URL("index.html", location.href);
      url.searchParams.set("method", button.dataset.family);
      url.searchParams.set("lang", language);
      location.assign(url);
    }));
  };
  document.querySelector("#languageToggle").addEventListener("click", () => {
    language = language === "zh" ? "en" : "zh";
    localStorage.setItem("signal-atlas-language", language);
    const url = new URL(location.href); url.searchParams.set("lang", language); history.replaceState(null, "", url); render();
  });
  render();
})();
