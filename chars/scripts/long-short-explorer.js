(function () {
  document.querySelectorAll("[data-long-short-explorer]").forEach(async (root) => {

  const characteristic = root.querySelector("[data-portfolio-characteristic-select]");
  const quantiles = root.querySelector("[data-portfolio-quantiles-select]");
  const weighting = root.querySelector("[data-portfolio-weighting-select]");
  const scale = root.querySelector("[data-portfolio-scale-select]");
  const chart = root.querySelector("[data-portfolio-chart]");
  const summary = root.querySelector("[data-portfolio-summary]");
  const caption = root.querySelector("[data-portfolio-caption]");
  const range = root.querySelector("[data-portfolio-range]");
  const rangeStart = root.querySelector("[data-portfolio-range-start]");
  const rangeEnd = root.querySelector("[data-portfolio-range-end]");
  const rangeCaption = root.querySelector("[data-portfolio-range-caption]");
  const rangeSelection = root.querySelector("[data-portfolio-range-selection]");
  const fullStart = root.querySelector("[data-portfolio-full-start]");
  const fullEnd = root.querySelector("[data-portfolio-full-end]");
  const quickRanges = [...root.querySelectorAll("[data-portfolio-years]")];
  const downloadButton = root.querySelector("[data-portfolio-download]");
  const portfolioId = root.dataset.portfolioId || "portfolio";
  const stateKey = (name) => `${portfolioId}_${name}`;
  const initialParams = new URLSearchParams(window.location.search);
  let pendingWindow = {
    start: initialParams.get(stateKey("start")),
    end: initialParams.get(stateKey("end")),
  };
  let data;
  let selectedSeries = null;
  let loadVersion = 0;
  const seriesCache = new Map();

  try {
    const response = await fetch(root.dataset.summaryUrl);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    data = await response.json();
  } catch (_) {
    caption.textContent = "Long-short portfolio data is not available yet. Run the corresponding portfolio workflow to publish the precomputed JSON.";
    return;
  }

  async function loadSeries(name) {
    if (data.series?.[name]) return data.series[name];
    if (seriesCache.has(name)) return seriesCache.get(name);
    const baseUrl = root.dataset.seriesBaseUrl;
    if (!baseUrl) throw new Error("Missing series base URL");
    const response = await fetch(`${baseUrl}/${encodeURIComponent(name)}.json`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const result = await response.json();
    seriesCache.set(name, result);
    return result;
  }

  const formatPercent = (value) => Number.isFinite(Number(value))
    ? `${(Number(value) * 100).toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 })}%`
    : "n/a";
  const formatNumber = (value) => Number.isFinite(Number(value)) ? Number(value).toLocaleString(undefined, { maximumFractionDigits: 2 }) : "n/a";
  const annualSharpe = (returns) => {
    if (returns.length < 2) return null;
    const mean = returns.reduce((sum, value) => sum + value, 0) / returns.length;
    const variance = returns.reduce((sum, value) => sum + (value - mean) ** 2, 0) / (returns.length - 1);
    return variance > 0 ? mean / Math.sqrt(variance) * Math.sqrt(12) : null;
  };
  const maxDrawdown = (returns) => {
    let wealth = 1; let peak = 1; let drawdown = 0;
    returns.forEach((value) => { wealth *= 1 + value; peak = Math.max(peak, wealth); drawdown = Math.min(drawdown, wealth / peak - 1); });
    return drawdown;
  };
  const yearlyReturns = (rows) => {
    const wealth = new Map();
    rows.forEach((row) => {
      const value = Number(row.long_short);
      if (!Number.isFinite(value)) return;
      const year = row.date.slice(0, 4);
      wealth.set(year, (wealth.get(year) || 1) * (1 + value));
    });
    return [...wealth.values()].map((value) => value - 1);
  };
  const stats = (rows) => {
    const returns = rows.map((row) => Number(row.long_short)).filter(Number.isFinite);
    if (!returns.length) return {};
    const arithmetic = returns.reduce((sum, value) => sum + value, 0) / returns.length;
    const geometric = returns.every((value) => value > -1)
      ? Math.pow(returns.reduce((wealth, value) => wealth * (1 + value), 1), 12 / returns.length) - 1 : null;
    return { arithmetic, geometric, sharpe: annualSharpe(returns), monthlyMdd: maxDrawdown(returns), yearlyMdd: maxDrawdown(yearlyReturns(rows)), worst: Math.min(...returns) };
  };
  const portfolio = () => {
    const selected = selectedSeries || {};
    return selected.quantiles?.[quantiles.value] || (quantiles.value === "10" ? selected : {});
  };
  const rowsForSelection = () => (portfolio()[weighting.value] || []).filter((row) => row.long_short != null);
  let rangeKey = "";

  function selection(rows) {
    if (!rows.length) { range.hidden = true; return []; }
    const key = `${characteristic.value}:${quantiles.value}:${weighting.value}:${rows.length}:${rows[0].date}:${rows.at(-1).date}`;
    if (key !== rangeKey) {
      rangeKey = key;
      const latestYear = Number(rows.at(-1).date.slice(0, 4));
      const first = Math.max(0, rows.findIndex((row) => Number(row.date.slice(0, 4)) >= latestYear - 29));
      rangeStart.max = rangeEnd.max = String(rows.length - 1);
      rangeStart.value = String(first);
      rangeEnd.value = String(rows.length - 1);
      if (pendingWindow.start && pendingWindow.end) {
        const requestedStart = rows.findIndex((row) => row.date >= pendingWindow.start);
        const requestedEnd = rows.findLastIndex((row) => row.date <= pendingWindow.end);
        if (requestedStart >= 0 && requestedEnd >= requestedStart) {
          rangeStart.value = String(requestedStart);
          rangeEnd.value = String(requestedEnd);
        }
      }
      pendingWindow = { start: null, end: null };
      fullStart.textContent = rows[0].date;
      fullEnd.textContent = rows.at(-1).date;
      quickRanges.forEach((button) => button.toggleAttribute("data-active", button.dataset.portfolioYears === "30"));
    }
    let start = Number(rangeStart.value); let end = Number(rangeEnd.value);
    if (start > end) { if (document.activeElement === rangeStart) end = start; else start = end; }
    rangeStart.value = String(start); rangeEnd.value = String(end);
    const denominator = Math.max(1, rows.length - 1);
    rangeSelection.style.left = `${start / denominator * 100}%`;
    rangeSelection.style.right = `${(denominator - end) / denominator * 100}%`;
    range.hidden = false;
    rangeCaption.textContent = `Selected window: ${rows[start].date} to ${rows[end].date}`;
    const params = new URLSearchParams(window.location.search);
    params.set(stateKey("characteristic"), characteristic.value);
    params.set(stateKey("sort"), quantiles.value);
    params.set(stateKey("weighting"), weighting.value);
    params.set(stateKey("scale"), scale.value);
    params.set(stateKey("start"), rows[start].date);
    params.set(stateKey("end"), rows[end].date);
    window.history.replaceState(null, "", `${window.location.pathname}?${params.toString()}${window.location.hash}`);
    return rows.slice(start, end + 1);
  }

  function drawChart(rows, label) {
    if (!rows.length) { chart.innerHTML = ""; return; }
    let wealth = 1;
    const points = [{ index: null, position: 0, wealth: 1, date: rows[0].date, monthly: null }];
    rows.forEach((row, index) => {
      wealth *= 1 + Number(row.long_short);
      points.push({ index, position: index + 1, wealth, date: row.date, monthly: Number(row.long_short) });
    });
    const width = 920; const height = 340; const margin = { top: 48, right: 30, bottom: 44, left: 72 };
    const logScale = scale?.value === "log";
    const chartValue = (point) => logScale ? Math.log(point.wealth) : point.wealth - 1;
    const values = points.map(chartValue); const low = Math.min(0, ...values); const high = Math.max(0, ...values);
    const padding = Math.max(0.02, (high - low) * 0.08); const min = low - padding; const max = high + padding;
    const innerWidth = width - margin.left - margin.right; const innerHeight = height - margin.top - margin.bottom;
    const x = (position) => margin.left + position / Math.max(1, points.length - 1) * innerWidth;
    const y = (value) => margin.top + (max - value) / (max - min) * innerHeight;
    const path = points.map((point, index) => `${index ? "L" : "M"}${x(point.position).toFixed(1)},${y(chartValue(point)).toFixed(1)}`).join(" ");
    const ticks = [min, min + (max - min) / 2, max];
    chart.innerHTML = `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${characteristic.value} ${label} cumulative return">
      <text class="chart-title" x="${margin.left}" y="25">${characteristic.value}</text>
      <text class="chart-subtitle" x="${margin.left}" y="43">${label}, ${rows[0].date} to ${rows.at(-1).date}</text>
      ${ticks.map((value) => `<line class="gridline" x1="${margin.left}" x2="${width - margin.right}" y1="${y(value)}" y2="${y(value)}"></line><text class="tick" x="${margin.left - 8}" y="${y(value) + 4}" text-anchor="end">${logScale ? `${Math.exp(value).toLocaleString(undefined, { maximumFractionDigits: 1 })}x` : formatPercent(value)}</text>`).join("")}
      <line class="zero-line" x1="${margin.left}" x2="${width - margin.right}" y1="${y(0)}" y2="${y(0)}"></line>
      <path class="series-line" d="${path}"></path>
      <text class="tick" x="${margin.left}" y="${height - 12}">${rows[0].date.slice(0, 4)}</text><text class="tick" x="${width - margin.right}" y="${height - 12}" text-anchor="end">${rows.at(-1).date.slice(0, 4)}</text>
      <g class="hover-layer" data-hover-layer hidden>
        <line class="hover-line" data-hover-line y1="${margin.top}" y2="${margin.top + innerHeight}"></line>
        <circle class="hover-point" data-hover-point r="4.8"></circle>
        <g data-hover-tooltip>
          <rect class="hover-tooltip-box" width="238" height="103" rx="2"></rect>
          <text class="hover-label" x="12" y="19" data-hover-date></text>
          <text class="hover-value" x="12" y="38" data-hover-long></text>
          <text class="hover-value" x="12" y="55" data-hover-short></text>
          <text class="hover-value" x="12" y="72" data-hover-spread></text>
          <text class="hover-label" x="12" y="91" data-hover-cumulative></text>
        </g>
      </g>
      <rect class="hit-area" x="${margin.left}" y="${margin.top}" width="${innerWidth}" height="${innerHeight}" data-hit-area></rect>
    </svg>`;

    const svg = chart.querySelector("svg");
    const hitArea = chart.querySelector("[data-hit-area]");
    const hoverLayer = chart.querySelector("[data-hover-layer]");
    const hoverLine = chart.querySelector("[data-hover-line]");
    const hoverPoint = chart.querySelector("[data-hover-point]");
    const hoverTooltip = chart.querySelector("[data-hover-tooltip]");
    const hoverDate = chart.querySelector("[data-hover-date]");
    const hoverLong = chart.querySelector("[data-hover-long]");
    const hoverShort = chart.querySelector("[data-hover-short]");
    const hoverSpread = chart.querySelector("[data-hover-spread]");
    const hoverCumulative = chart.querySelector("[data-hover-cumulative]");
    const hoverPoints = points.slice(1);
    const nearest = (svgX) => hoverPoints.reduce((best, point) => Math.abs(x(point.position) - svgX) < Math.abs(x(best.position) - svgX) ? point : best, hoverPoints[0]);
    let keyboardIndex = hoverPoints.length - 1;
    const showPoint = (point) => {
      const pointX = x(point.position); const pointY = y(chartValue(point));
      const tooltipX = pointX > width - margin.right - 250 ? pointX - 250 : pointX + 12;
      const tooltipY = Math.max(margin.top + 5, Math.min(margin.top + innerHeight - 108, pointY - 108));
      hoverLayer.removeAttribute("hidden");
      hoverLine.setAttribute("x1", pointX); hoverLine.setAttribute("x2", pointX);
      hoverPoint.setAttribute("cx", pointX); hoverPoint.setAttribute("cy", pointY);
      hoverTooltip.setAttribute("transform", `translate(${tooltipX.toFixed(1)} ${tooltipY.toFixed(1)})`);
      const raw = rows[point.index];
      hoverDate.textContent = point.date;
      hoverLong.textContent = `Long: ${formatPercent(raw.long)}`;
      hoverShort.textContent = `Short: ${formatPercent(raw.short)}`;
      hoverSpread.textContent = `Long−short: ${formatPercent(raw.long_short)}`;
      hoverCumulative.textContent = `Window cumulative: ${formatPercent(point.wealth - 1)} (${point.wealth.toLocaleString(undefined, { maximumFractionDigits: 2 })}x)`;
    };
    const showHover = (event) => {
      const rect = svg.getBoundingClientRect();
      const svgX = (event.clientX - rect.left) * width / rect.width;
      const point = nearest(Math.max(margin.left, Math.min(margin.left + innerWidth, svgX)));
      keyboardIndex = point.index;
      showPoint(point);
    };
    hitArea.addEventListener("pointermove", showHover);
    hitArea.addEventListener("pointerenter", showHover);
    hitArea.addEventListener("pointerleave", () => hoverLayer.setAttribute("hidden", ""));
    chart.tabIndex = 0;
    chart.setAttribute("aria-label", `${characteristic.value} chart. Use left and right arrow keys to inspect monthly values.`);
    chart.onfocus = () => showPoint(hoverPoints[keyboardIndex]);
    chart.onblur = () => hoverLayer.setAttribute("hidden", "");
    chart.onkeydown = (event) => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      if (event.key === 'Home') keyboardIndex = 0;
      else if (event.key === 'End') keyboardIndex = hoverPoints.length - 1;
      else keyboardIndex = Math.max(0, Math.min(hoverPoints.length - 1, keyboardIndex + (event.key === 'ArrowRight' ? 1 : -1)));
      showPoint(hoverPoints[keyboardIndex]);
    };
  }

  function draw() {
    const allRows = rowsForSelection();
    const rows = selection(allRows);
    const selected = selectedSeries || {};
    const longLeg = selected.long_leg || "High"; const shortLeg = selected.short_leg || "Low";
    const groupCount = Number(quantiles.value);
    const partitionLabel = groupCount === 5 ? "Quintile" : "Decile";
    const tailShare = groupCount === 5 ? "20%" : "10%";
    const longRank = longLeg === "High" ? `highest ${tailShare}` : `lowest ${tailShare}`;
    const shortRank = shortLeg === "High" ? `highest ${tailShare}` : `lowest ${tailShare}`;
    const bucketLabel = `${partitionLabel}: Long ${longRank} − Short ${shortRank}`;
    const values = stats(rows);
    summary.innerHTML = `
      <div><strong>${formatPercent(values.arithmetic)}</strong><span title="Arithmetic mean of monthly returns">Average monthly return</span></div>
      <div><strong>${formatPercent(values.geometric)}</strong><span title="Geometric mean of monthly returns, annualized">Annualized compound return</span></div>
      <div><strong>${formatNumber(values.sharpe)}</strong><span>Annualized Sharpe</span></div>
      <div><strong>${formatPercent(values.monthlyMdd)}</strong><span title="Drawdown from monthly compounded returns">Max drawdown (monthly data)</span></div>
      <div><strong>${formatPercent(values.yearlyMdd)}</strong><span title="Drawdown from calendar-year compounded returns">Max drawdown (annual data)</span></div>
      <div><strong>${formatPercent(values.worst)}</strong><span>Worst monthly return</span></div>`;
    drawChart(rows, bucketLabel);
    const returnLabel = (root.dataset.returnLabel || "return").replace(/[.。]+$/, "");
    caption.textContent = `${bucketLabel}; ${weighting.options[weighting.selectedIndex].text}. Metrics use the selected window. ${returnLabel}. The chart uses ${scale?.value === "log" ? "a log wealth-multiple axis" : "a linear cumulative-return axis"}.`;
  }

  characteristic.innerHTML = (data.characteristics || []).map((name) => `<option value="${name}">${name}</option>`).join("");
  const requestedCharacteristic = initialParams.get(stateKey("characteristic"));
  if (requestedCharacteristic && data.characteristics.includes(requestedCharacteristic)) characteristic.value = requestedCharacteristic;
  if (["5", "10"].includes(initialParams.get(stateKey("sort")))) quantiles.value = initialParams.get(stateKey("sort"));
  if (["vw", "ew"].includes(initialParams.get(stateKey("weighting")))) weighting.value = initialParams.get(stateKey("weighting"));
  if (["log", "linear"].includes(initialParams.get(stateKey("scale")))) scale.value = initialParams.get(stateKey("scale"));

  async function changeCharacteristic() {
    const version = ++loadVersion;
    chart.setAttribute("aria-busy", "true");
    summary.setAttribute("aria-busy", "true");
    try {
      const result = await loadSeries(characteristic.value);
      if (version !== loadVersion) return;
      selectedSeries = result;
      rangeKey = "";
      draw();
    } catch (_) {
      if (version !== loadVersion) return;
      selectedSeries = null;
      summary.innerHTML = "";
      chart.innerHTML = "";
      range.hidden = true;
      caption.textContent = "Portfolio data for this characteristic is not available.";
    } finally {
      if (version === loadVersion) {
        chart.removeAttribute("aria-busy");
        summary.removeAttribute("aria-busy");
      }
    }
  }

  quickRanges.forEach((button) => button.addEventListener("click", () => {
    const rows = rowsForSelection();
    if (!rows.length) return;
    const years = button.dataset.portfolioYears;
    const latestYear = Number(rows.at(-1).date.slice(0, 4));
    const first = years === "full" ? 0 : Math.max(0, rows.findIndex((row) => Number(row.date.slice(0, 4)) >= latestYear - Number(years) + 1));
    rangeStart.value = String(first);
    rangeEnd.value = String(rows.length - 1);
    draw();
    quickRanges.forEach((item) => item.toggleAttribute("data-active", item === button));
  }));
  downloadButton.addEventListener("click", () => {
    const rows = selection(rowsForSelection());
    if (!rows.length) return;
    const header = "date,long,short,long_short,long_count,short_count";
    const csv = [header, ...rows.map((row) => [row.date, row.long, row.short, row.long_short, row.long_count, row.short_count].join(","))].join("\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = `${portfolioId}_${characteristic.value}_${quantiles.value}groups_${weighting.value}_${rows[0].date}_${rows.at(-1).date}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  });
  characteristic.addEventListener("change", () => {
    pendingWindow = { start: null, end: null };
    changeCharacteristic();
  });
  [quantiles, weighting, scale].forEach((control) => control.addEventListener("change", draw));
  [rangeStart, rangeEnd].forEach((control) => control.addEventListener("input", () => {
    quickRanges.forEach((button) => button.removeAttribute("data-active"));
    draw();
  }));
  window.addEventListener("resize", draw);
  await changeCharacteristic();
  });
})();
