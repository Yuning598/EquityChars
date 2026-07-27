"use strict";

(() => {
  const params = () => new URLSearchParams(location.search);

  const writeFilters = (values, historyMode = "replace") => {
    const url = new URL(location.href);
    Object.entries(values).forEach(([key, value]) => {
      if (value) url.searchParams.set(key, value);
      else url.searchParams.delete(key);
    });
    if (historyMode === "push" && url.href !== location.href) {
      history.pushState(null, "", url);
    } else {
      history.replaceState(null, "", url);
    }
  };

  const writeLanguage = (language) => {
    const url = new URL(location.href);
    url.searchParams.set("lang", language);
    history.replaceState(null, "", url);
  };

  window.SignalAtlasUrlState = { params, writeFilters, writeLanguage };
})();