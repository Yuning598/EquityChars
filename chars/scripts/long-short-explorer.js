(function () {
  document.querySelectorAll("[data-long-short-explorer]").forEach(async (root) => {

  const status = root.querySelector("[data-portfolio-status]");
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
  let data;

  try {
    const response = await fetch(root.dataset.summaryUrl);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    data = await response.json();
  } catch (_) {
    status.textContent = "Long-short portfolio data is not available yet.";
    caption.textContent = "Run the corresponding portfolio workflow to publish the precomputed JSON.";
    return;
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
    const selected = (data.series || {})[characteristic.value] || {};
    // Backward compatible with the existing decile-only JSON during the first deployment.
    return selected.quantiles?.[quantiles.value] || (quantiles.value === "10" ? selected : {});
  };
  const rowsForSelection = () => (portfolio()[weighting.value] || []).filter((row) => row.long_short != null);
  let rangeKey = "";

  function selection(rows) {
    if (!rows.length) return [];
    const key = `${characteristic.value}:${quantiles.value}:${weighting.value}:${rows.length}:${rows[0].date}:${rows.at(-1).date}`;
    if (key !== rangeKey) {
      rangeKey = key;
      const latestYear = Number(rows.at(-1).date.slice(0, 4));
      const first = Math.max(0, rows.findIndex((row) => Number(row.date.slice(0, 4)) >= latestYear - 29));
      rangeStart.max = rangeEnd.max = String(rows.length - 1);
      rangeStart.value = String(first);
      rangeEnd.value = String(rows.length - 1);
    }
    let start = Number(rangeStart.value); let end = Number(rangeEnd.value);
    if (start > end) { if (document.activeElement === rangeStart) end = start; else start = end; }
    rangeStart.value = String(start); rangeEnd.value = String(end);
    range.hidden = false;
    rangeCaption.textContent = `${rows[start].date} to ${rows[end].date}`;
    return rows.slice(start, end + 1);
  }

  function drawChart(rows, label) {
    if (!rows.length) { chart.innerHTML = ""; return; }
    let wealth = 1;
    const points = rows.map((row, index) => {
      if (index > 0) wealth *= 1 + Number(row.long_short);
      return { index, wealth, date: row.date, monthly: Number(row.long_short) };
    });
    const width = 920; const height = 340; const margin = { top: 48, right: 30, bottom: 44, left: 72 };
    const logScale = scale?.value === "log";
    const chartValue = (point) => logScale ? Math.log(point.wealth) : point.wealth - 1;
    const values = points.map(chartValue); const low = Math.min(0, ...values); const high = Math.max(0, ...values);
    const padding = Math.max(0.02, (high - low) * 0.08); const min = low - padding; const max = high + padding;
    const innerWidth = width - margin.left - margin.right; const innerHeight = height - margin.top - margin.bottom;
    const x = (index) => margin.left + index / Math.max(1, points.length - 1) * innerWidth;
    const y = (value) => margin.top + (max - value) / (max - min) * innerHeight;
    const path = points.map((point, index) => `${index ? "L" : "M"}${x(index).toFixed(1)},${y(chartValue(point)).toFixed(1)}`).join(" ");
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
    const nearest = (svgX) => points.reduce((best, point) => Math.abs(x(point.index) - svgX) < Math.abs(x(best.index) - svgX) ? point : best, points[0]);
    const showHover = (event) => {
      const rect = svg.getBoundingClientRect();
      const svgX = (event.clientX - rect.left) * width / rect.width;
      const point = nearest(Math.max(margin.left, Math.min(margin.left + innerWidth, svgX)));
      const pointX = x(point.index); const pointY = y(chartValue(point));
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
    hitArea.addEventListener("pointermove", showHover);
    hitArea.addEventListener("pointerenter", showHover);
    hitArea.addEventListener("pointerleave", () => hoverLayer.setAttribute("hidden", ""));
  }

  function draw() {
    const allRows = rowsForSelection();
    const rows = selection(allRows);
    const selected = (data.series || {})[characteristic.value] || {};
    const longLeg = selected.long_leg || "High"; const shortLeg = selected.short_leg || "Low";
    const bucketLabel = `${quantiles.value}-tile ${longLeg} minus ${shortLeg}`;
    const values = stats(rows);
    summary.innerHTML = `
      <div><strong>${formatPercent(values.arithmetic)}</strong><span>Arithmetic mean monthly return</span></div>
      <div><strong>${formatPercent(values.geometric)}</strong><span>Geometric mean annualized return</span></div>
      <div><strong>${formatNumber(values.sharpe)}</strong><span>Annualized Sharpe</span></div>
      <div><strong>${formatPercent(values.monthlyMdd)}</strong><span>Max drawdown — monthly return path</span></div>
      <div><strong>${formatPercent(values.yearlyMdd)}</strong><span>Max drawdown — calendar-year return path</span></div>
      <div><strong>${formatPercent(values.worst)}</strong><span>Worst monthly return</span></div>`;
    drawChart(rows, bucketLabel);
    const returnLabel = root.dataset.returnLabel || "return";
    caption.textContent = `${bucketLabel}; ${weighting.options[weighting.selectedIndex].text}. ${returnLabel}. The chart uses ${scale?.value === "log" ? "a log wealth-multiple axis" : "a linear cumulative-return axis"}. The maximum-drawdown labels state whether monthly compounded returns or calendar-year compounded returns were used.`;
  }

  characteristic.innerHTML = (data.characteristics || []).map((name) => `<option value="${name}">${name}</option>`).join("");
  status.textContent = `${data.metadata.release_id || "current"} release · ${data.metadata.orientation === "high_minus_low" ? "High−Low baseline" : "literature-directed long−short"}`;
  [characteristic, quantiles, weighting, scale, rangeStart, rangeEnd].filter(Boolean).forEach((control) => control.addEventListener(control === rangeStart || control === rangeEnd ? "input" : "change", draw));
  window.addEventListener("resize", draw);
  draw();
  });
})();
