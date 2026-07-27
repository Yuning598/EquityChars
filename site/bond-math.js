(() => {
  "use strict";

  const normalize = (value) => String(value || "")
    .trim()
    .replace(/^\\\(\s?/, "")
    .replace(/\s?\\\)$/, "");

  const typeset = (root = document) => {
    const nodes = [...root.querySelectorAll?.(".latex-formula") || []];
    if (!nodes.length) return;
    nodes.forEach((node) => {
      const latex = node.dataset.latex || normalize(node.textContent);
      node.dataset.latex = latex;
      if (!window.katex?.render) {
        node.textContent = latex;
        node.classList.add("formula-fallback");
        return;
      }
      window.katex.render(latex, node, {
        displayMode: true,
        throwOnError: false,
        strict: "ignore"
      });
      node.classList.remove("formula-fallback");
    });
  };

  window.SignalAtlasBondMath = { typeset };
  typeset(document);
})();