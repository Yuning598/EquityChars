"use strict";

(() => {
  const withLanguage = (route, language) => {
    const url = new URL(route, location.href);
    url.searchParams.set("lang", language);
    return url.pathname.split("/").pop() + url.search;
  };

  const syncRouteLinks = (selector, routes, language) => {
    document.querySelectorAll(selector).forEach((link) => {
      const route = routes[link.dataset[selector === "[data-equity-route]" ? "equityRoute" : "bondRoute"]];
      if (route) link.href = withLanguage(route, language);
    });
  };
  const setCurrent = (link, active) => {
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  };

  const equityRoutes = {
    directory: "index.html",
    methods: "equity-portfolio-construction.html",
    measures: "calculation.html",
    criteria: "equity-classification-criteria.html"
  };

  const bondRoutes = {
    characteristics: "bond-characteristics.html",
    returns: "bond-return-definitions.html",
    methods: "bond-portfolio-construction.html",
    provenance: "bond-data-provenance.html",
    papers: "bond-paper-wiki.html"
  };

  window.SignalAtlasNavigation = {
    equityRoutes,
    bondRoutes,
    syncEquity({ language, active }) {
      syncRouteLinks("[data-equity-route]", equityRoutes, language);
      document.querySelectorAll("[data-equity-nav]").forEach((link) => {
        const route = equityRoutes[link.dataset.equityNav];
        if (!route) return;
        link.href = withLanguage(route, language);
        setCurrent(link, link.dataset.equityNav === active);
      });
      const brand = document.querySelector(".brand");
      if (brand) brand.href = withLanguage(equityRoutes.directory, language);
      const equitySwitch = document.querySelector(".asset-switch a:first-child");
      if (equitySwitch) equitySwitch.href = withLanguage(equityRoutes.directory, language);
      const bondSwitch = document.querySelector(".asset-switch a:last-child");
      if (bondSwitch) bondSwitch.href = withLanguage("bond.html", language);
    },
    syncBond({ language, active }) {
      syncRouteLinks("[data-bond-route]", bondRoutes, language);
      document.querySelectorAll("[data-bond-nav]").forEach((link) => {
        const route = bondRoutes[link.dataset.bondNav];
        if (!route) return;
        link.href = withLanguage(route, language);
        setCurrent(link, link.dataset.bondNav === active);
      });
      const brand = document.querySelector(".brand");
      if (brand) brand.href = withLanguage("bond.html", language);
      const equitySwitch = document.querySelector(".asset-switch a:first-child");
      if (equitySwitch) equitySwitch.href = withLanguage(equityRoutes.directory, language);
      const bondSwitch = document.querySelector(".asset-switch a:last-child");
      if (bondSwitch) bondSwitch.href = withLanguage("bond.html", language);
    }
  };
})();
