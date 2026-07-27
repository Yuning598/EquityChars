(() => {
  const categoryLabel = (value) => ({
    "???????": "Contract terms and credit status",
    "????????": "Tail risk and liquidity",
    "???????": "Systematic risk exposures",
    "???????": "Return distribution and momentum",
  }[value] || value);
  const familyLabel = (value) => ({
    "?????": "Univariate sorts",
    "??????": "Conditional sorts",
    "????": "Regression prediction",
    "????": "Composite scores",
    "????": "Optimized portfolios",
    "????": "Event portfolios",
  }[value] || value);

  window.SignalAtlasBondI18n = { categoryLabel, familyLabel };
})();
