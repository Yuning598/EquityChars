(() => {
  "use strict";
  if (document.body.dataset.bondView) return;
  const url = new URL("bond-characteristics.html", location.href);
  url.search = location.search;
  url.searchParams.delete("view");
  location.replace(url);
})();