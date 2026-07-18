(function () {
  const pickers = document.querySelectorAll("[data-download-picker]");

  pickers.forEach((picker) => {
    const select = picker.querySelector("[data-download-select]");
    const link = picker.querySelector("[data-download-link]");
    const updated = picker.querySelector("[data-download-updated]");
    const description = picker.querySelector("[data-download-description]");

    if (!select || !link || !updated || !description) {
      return;
    }

    const sync = () => {
      const option = select.options[select.selectedIndex];
      link.href = option.value;
      updated.textContent = option.dataset.status || `Updated ${option.dataset.updated || "TBA"}`;
      description.textContent = option.dataset.description || "";
    };

    select.addEventListener("change", sync);
    sync();
  });
})();
