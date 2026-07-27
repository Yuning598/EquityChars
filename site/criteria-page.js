(() => {
  "use strict";
  const params = new URLSearchParams(location.search);
  let language = params.get("lang") === "en" || params.get("lang") === "zh" ? params.get("lang") : localStorage.getItem("signal-atlas-language") === "en" ? "en" : "zh";
  const copy = {
    zh: {nav:["特征目录","组合构造","特征度量","判定准则"], kicker:"CLASSIFICATION CRITERIA",title:"多空方向的判定准则",lead:"以原始文献中的排序、持仓方向与收益对象为依据；不将非两端检验强行解释为可交易多空组合。",sections:[
      ["hl","H–L 组合","文献按特征值排序，明确做多高特征值组合并做空低特征值组合。"],
      ["lh","L–H 组合","文献按特征值排序，明确做多低特征值组合并做空高特征值组合。"],
      ["complex","非两端组合","回归系数、多变量预测、事件研究和模型加权组合不等同于最高组减最低组的多空收益。"],
      ["evidence","证据与复核","组合方向、分组断点、权重、持有期和收益基准应以原始文献的构造描述为准。"]]},
    en: {nav:["Characteristic directory","Portfolio construction","Characteristic measures","Classification criteria"],kicker:"CLASSIFICATION CRITERIA",title:"Criteria for long–short direction",lead:"Classify from the source paper’s sorting rule, portfolio legs, and return object; do not force non-endpoint designs into a tradable long–short interpretation.",sections:[
      ["hl","H–L portfolios","The source sorts on the characteristic and explicitly goes long high-characteristic stocks and short low-characteristic stocks."],
      ["lh","L–H portfolios","The source sorts on the characteristic and explicitly goes long low-characteristic stocks and short high-characteristic stocks."],
      ["complex","Non-endpoint designs","Regression coefficients, multivariate prediction, event studies, and model-weighted portfolios are not equivalent to a highest-minus-lowest long–short return."],
      ["evidence","Evidence and verification","Direction, breakpoints, weights, holding horizon, and return benchmark should follow the construction stated in the source literature."]]}
  };
  const render = () => {
    const text = copy[language];
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    document.title = `${text.title} · Signal Atlas`;
    document.querySelectorAll("[data-equity-nav]").forEach((link,index) => link.textContent=text.nav[index]);
    document.querySelector("#pageKicker").textContent=text.kicker; document.querySelector("#pageTitle").textContent=text.title; document.querySelector("#pageLead").textContent=text.lead;
    document.querySelector("#languageToggle").textContent=language === "zh" ? "EN" : "中文";
    window.SignalAtlasNavigation?.syncEquity({language,active:"criteria"});
    document.querySelector("#criteriaToc").innerHTML=text.sections.map(([id,title])=>`<a href="#${id}">${title}</a>`).join("");
    document.querySelector("#criteriaContent").innerHTML=text.sections.map(([id,title,body])=>`<section id="${id}"><h2>${title}</h2><p>${body}</p></section>`).join("");
  };
  document.querySelector("#languageToggle").addEventListener("click",()=>{language=language==="zh"?"en":"zh";localStorage.setItem("signal-atlas-language",language);const url=new URL(location.href);url.searchParams.set("lang",language);history.replaceState(null,"",url);render();});
  render();
})();
