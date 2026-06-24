(async function () {
  const root = document.querySelector("[data-long-short-explorer]");
  if (!root) return;

  const status = root.querySelector("[data-portfolio-status]");
  const select = root.querySelector("[data-portfolio-characteristic-select]");
  const weighting = root.querySelector("[data-portfolio-weighting-select]");
  const scaleSelect = root.querySelector("[data-portfolio-scale-select]");
  const chart = root.querySelector("[data-portfolio-chart]");
  const summary = root.querySelector("[data-portfolio-summary]");
  const caption = root.querySelector("[data-portfolio-caption]");
  const range = root.querySelector("[data-portfolio-range]");
  const rangeCanvas = root.querySelector("[data-portfolio-range-canvas]");
  const rangeStart = root.querySelector("[data-portfolio-range-start]");
  const rangeEnd = root.querySelector("[data-portfolio-range-end]");
  const rangeSelection = root.querySelector("[data-portfolio-range-selection]");
  const rangeLabels = root.querySelector("[data-portfolio-range-labels]");
  const rangeCaption = root.querySelector("[data-portfolio-range-caption]");

  let data;
  try {
    const response = await fetch(root.dataset.summaryUrl);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    data = await response.json();
  } catch (error) {
    status.textContent = "Long-short portfolio summary is not available yet.";
    chart.innerHTML = "";
    summary.innerHTML = "";
    caption.textContent = "Run scripts/build_long_short_portfolios.py to generate the portfolio JSON.";
    return;
  }

  const characteristics = data.characteristics || [];
  const series = data.series || {};
  select.innerHTML = characteristics.map((name) => `<option value="${name}">${name}</option>`).join("");
  status.textContent = `${data.metadata.release_id} release, direction-adjusted 10-1 portfolios`;

  function formatPercent(value) {
    if (value == null || !Number.isFinite(Number(value))) return "n/a";
    return `${(Number(value) * 100).toLocaleString(undefined, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    })}%`;
  }

  function formatNumber(value) {
    if (value == null || !Number.isFinite(Number(value))) return "n/a";
    return Number(value).toLocaleString(undefined, { maximumFractionDigits: 2 });
  }

  function formatMultiple(value) {
    if (value == null || !Number.isFinite(Number(value))) return "n/a";
    return `${Number(value).toLocaleString(undefined, {
      maximumFractionDigits: value >= 100 ? 0 : 1,
    })}x`;
  }

  function annualizedSharpe(returns) {
    if (returns.length < 2) return null;
    const mean = returns.reduce((sum, value) => sum + value, 0) / returns.length;
    const variance = returns.reduce((sum, value) => sum + (value - mean) ** 2, 0) / (returns.length - 1);
    if (variance <= 0) return null;
    return (mean / Math.sqrt(variance)) * Math.sqrt(12);
  }

  function maxDrawdown(returns) {
    let wealth = 1;
    let peak = 1;
    let drawdown = 0;
    returns.forEach((value) => {
      wealth *= 1 + value;
      peak = Math.max(peak, wealth);
      drawdown = Math.min(drawdown, wealth / peak - 1);
    });
    return drawdown;
  }

  function summarizeRows(rows) {
    const returns = rows.map((row) => Number(row.long_short)).filter((value) => Number.isFinite(value));
    if (!returns.length) return {};
    const mean = returns.reduce((sum, value) => sum + value, 0) / returns.length;
    return {
      months: returns.length,
      mean_monthly: mean,
      sharpe_annualized: annualizedSharpe(returns),
      max_drawdown: maxDrawdown(returns),
      max_1m_loss: Math.min(...returns),
    };
  }

  function rowsWithWindowWealth(rows) {
    let wealth = 1;
    return rows.map((row, index) => {
      if (index > 0) {
        const monthlyReturn = Number(row.long_short);
        if (Number.isFinite(monthlyReturn)) {
          wealth *= 1 + monthlyReturn;
        }
      }
      return {
        ...row,
        window_wealth: wealth,
        window_cum_long_short: wealth - 1,
      };
    });
  }

  function niceTicks(minValue, maxValue, count = 5) {
    if (!Number.isFinite(minValue) || !Number.isFinite(maxValue)) return [];
    if (minValue === maxValue) return [minValue];
    const span = maxValue - minValue;
    const rawStep = span / Math.max(1, count - 1);
    const magnitude = 10 ** Math.floor(Math.log10(rawStep));
    const normalized = rawStep / magnitude;
    const niceNormalized = normalized <= 1 ? 1 : normalized <= 2 ? 2 : normalized <= 5 ? 5 : 10;
    const step = niceNormalized * magnitude;
    const start = Math.ceil(minValue / step) * step;
    const ticks = [];
    for (let value = start; value <= maxValue + step * 0.5; value += step) {
      ticks.push(Number(value.toPrecision(12)));
    }
    return ticks.length ? ticks : [minValue, maxValue];
  }

  function wealthTicks(minValue, maxValue) {
    const minWealth = Math.exp(minValue);
    const maxWealth = Math.exp(maxValue);
    const bases = [0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2, 5, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000];
    const ticks = bases.filter((value) => value >= minWealth * 0.98 && value <= maxWealth * 1.02);
    if (!ticks.includes(1) && minWealth <= 1 && maxWealth >= 1) ticks.push(1);
    return ticks.sort((a, b) => a - b).map((value) => Math.log(value));
  }

  let rangeKey = "";

  function currentRangeIndexes(rows, char, weight) {
    if (!rangeStart || !rangeEnd || !rows.length) return [0, Math.max(0, rows.length - 1)];
    const key = `${char}:${weight}:${rows[0].date}:${rows[rows.length - 1].date}:${rows.length}`;
    if (key !== rangeKey) {
      rangeKey = key;
      const lastIndex = rows.length - 1;
      const firstYear = Number(rows[0].date.slice(0, 4));
      const lastYear = Number(rows[lastIndex].date.slice(0, 4));
      const defaultStartYear = Math.max(firstYear, lastYear - 29);
      const defaultStart = rows.findIndex((row) => Number(row.date.slice(0, 4)) >= defaultStartYear);
      rangeStart.max = String(lastIndex);
      rangeEnd.max = String(lastIndex);
      rangeStart.value = String(Math.max(0, defaultStart));
      rangeEnd.value = String(lastIndex);
    }
    let start = Number(rangeStart.value);
    let end = Number(rangeEnd.value);
    if (start > end) {
      const active = document.activeElement;
      if (active === rangeStart) {
        end = start;
        rangeEnd.value = String(end);
      } else {
        start = end;
        rangeStart.value = String(start);
      }
    }
    return [start, end];
  }

  function drawRangeOverview(rows, startIndex, endIndex) {
    if (!range || !rangeCanvas || !rangeSelection || !rangeLabels || !rangeCaption || !rows.length) return;
    range.hidden = false;
    const ctx = rangeCanvas.getContext("2d");
    const ratio = window.devicePixelRatio || 1;
    const width = rangeCanvas.clientWidth || 900;
    const height = rangeCanvas.clientHeight || 42;
    rangeCanvas.width = Math.round(width * ratio);
    rangeCanvas.height = Math.round(height * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    ctx.clearRect(0, 0, width, height);

    const values = rows.map((row) => Number(row.cum_long_short)).filter((value) => Number.isFinite(value));
    const minValue = Math.min(...values, 0);
    const maxValue = Math.max(...values, 0);
    const span = maxValue - minValue || 1;
    const x = (index) => (index / Math.max(1, rows.length - 1)) * width;
    const y = (value) => height - 7 - ((value - minValue) / span) * (height - 14);

    ctx.fillStyle = "#edf3f8";
    ctx.fillRect(0, 0, width, height);
    ctx.beginPath();
    rows.forEach((row, index) => {
      const value = Number(row.cum_long_short);
      const px = x(index);
      const py = y(Number.isFinite(value) ? value : 0);
      if (index === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    });
    ctx.lineWidth = 1.2;
    ctx.strokeStyle = "#7fa8ce";
    ctx.stroke();

    const left = (startIndex / Math.max(1, rows.length - 1)) * 100;
    const right = 100 - (endIndex / Math.max(1, rows.length - 1)) * 100;
    rangeSelection.style.left = `${left}%`;
    rangeSelection.style.right = `${right}%`;

    const first = rows[0].date.slice(0, 4);
    const last = rows[rows.length - 1].date.slice(0, 4);
    const mid = rows[Math.floor(rows.length / 2)].date.slice(0, 4);
    rangeLabels.innerHTML = `<span>${first}</span><span>${mid}</span><span>${last}</span>`;
    rangeCaption.textContent = `${rows[startIndex].date} to ${rows[endIndex].date}`;
  }

  function draw() {
    const char = select.value;
    const weight = weighting.value;
    const selectedSeries = series[char] || {};
    const allRows = (selectedSeries[weight] || []).filter((row) => row.cum_long_short != null);
    const [startIndex, endIndex] = currentRangeIndexes(allRows, char, weight);
    const rawRows = allRows.slice(startIndex, endIndex + 1);
    const rows = rowsWithWindowWealth(rawRows);
    drawRangeOverview(allRows, startIndex, endIndex);
    const startYear = rows[0]?.date.slice(0, 4);
    const endYear = rows[rows.length - 1]?.date.slice(0, 4);
    const stats = summarizeRows(rawRows);
    const longLeg = selectedSeries.long_leg || "High";
    const shortLeg = selectedSeries.short_leg || "Low";
    const scale = scaleSelect?.value || "log";

    summary.innerHTML = `
      <div><strong>${formatPercent(stats.mean_monthly)}</strong><span>mean monthly 10-1</span></div>
      <div><strong>${formatNumber(stats.sharpe_annualized)}</strong><span>annualized Sharpe</span></div>
      <div><strong>${formatPercent(stats.max_drawdown)}</strong><span>max drawdown</span></div>
      <div><strong>${formatPercent(stats.max_1m_loss)}</strong><span>worst month</span></div>
    `;

    if (!rows.length) {
      if (range) range.hidden = true;
      chart.innerHTML = "";
      caption.textContent = "No portfolio data for this characteristic.";
      return;
    }

    const width = 920;
    const height = 390;
    const margin = { top: 54, right: 28, bottom: 54, left: 76 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    const chartValue = (row) => (scale === "log" ? Math.log(Number(row.window_wealth)) : Number(row.window_cum_long_short));
    const values = rows.map(chartValue).filter((value) => Number.isFinite(value));
    let minValue = Math.min(...values, 0);
    let maxValue = Math.max(...values, 0);
    if (minValue === maxValue) {
      minValue -= 1;
      maxValue += 1;
    }
    const padding = (maxValue - minValue) * 0.08;
    minValue -= padding;
    maxValue += padding;

    const x = (index) => margin.left + (index / Math.max(1, rows.length - 1)) * innerWidth;
    const y = (value) =>
      margin.top + innerHeight - ((value - minValue) / (maxValue - minValue)) * innerHeight;

    const points = rows.map((row, index) => ({
      date: row.date,
      value: Number(row.window_cum_long_short),
      monthly: Number(row.long_short),
      wealth: Number(row.window_wealth),
      sx: x(index),
      sy: y(chartValue(row)),
    }));
    const path = points.map((point, index) => `${index ? "L" : "M"} ${point.sx.toFixed(2)} ${point.sy.toFixed(2)}`).join(" ");
    const areaPath = `${path} L ${points[points.length - 1].sx.toFixed(2)} ${y(0).toFixed(2)} L ${points[0].sx.toFixed(2)} ${y(0).toFixed(2)} Z`;
    const valueTicks = scale === "log" ? wealthTicks(minValue, maxValue) : niceTicks(minValue, maxValue);
    const yearTicks = [];
    for (let i = 0; i < rows.length; i += 1) {
      const year = rows[i].date.slice(0, 4);
      if (rows[i].date.endsWith("-01") && Number(year) % 10 === 0) {
        yearTicks.push({ index: i, label: year });
      }
    }
    if (!yearTicks.length) {
      yearTicks.push({ index: 0, label: rows[0].date.slice(0, 4) });
      yearTicks.push({ index: rows.length - 1, label: rows[rows.length - 1].date.slice(0, 4) });
    }

    chart.innerHTML = `
      <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${char} long-short portfolio cumulative return">
        <text class="chart-title" x="${margin.left}" y="26">${char}</text>
        <text class="chart-subtitle" x="${margin.left}" y="45">${weighting.options[weighting.selectedIndex].text}, ${longLeg} minus ${shortLeg}, ${startYear}-${endYear}</text>
        <line class="axis" x1="${margin.left}" y1="${margin.top + innerHeight}" x2="${margin.left + innerWidth}" y2="${margin.top + innerHeight}"></line>
        <line class="axis" x1="${margin.left}" y1="${margin.top}" x2="${margin.left}" y2="${margin.top + innerHeight}"></line>
        ${yearTicks
          .map(
            (tick) => `
              <line class="gridline vertical" x1="${x(tick.index)}" x2="${x(tick.index)}" y1="${margin.top}" y2="${margin.top + innerHeight}"></line>
              <text class="tick" x="${x(tick.index)}" y="${height - 12}" text-anchor="middle">${tick.label}</text>
            `,
          )
          .join("")}
        ${valueTicks
          .map(
            (value) => `
              <line class="gridline" x1="${margin.left}" x2="${margin.left + innerWidth}" y1="${y(value)}" y2="${y(value)}"></line>
              <text class="tick" x="${margin.left - 10}" y="${y(value) + 4}" text-anchor="end">${scale === "log" ? formatMultiple(Math.exp(value)) : formatPercent(value)}</text>
            `,
          )
          .join("")}
        <line class="zero-line" x1="${margin.left}" x2="${margin.left + innerWidth}" y1="${y(0)}" y2="${y(0)}"></line>
        <path class="series-area" d="${areaPath}"></path>
        <path class="series-line" d="${path}"></path>
        <g class="hover-layer" data-hover-layer hidden>
          <line class="hover-line" data-hover-line y1="${margin.top}" y2="${margin.top + innerHeight}"></line>
          <circle class="hover-point" data-hover-point r="4.8"></circle>
          <g data-hover-tooltip>
            <rect class="hover-tooltip-box" width="210" height="68" rx="2"></rect>
            <text class="hover-label" x="12" y="20" data-hover-date></text>
            <text class="hover-value" x="12" y="42" data-hover-value></text>
            <text class="hover-label" x="12" y="58" data-hover-monthly></text>
          </g>
        </g>
        <rect class="hit-area" x="${margin.left}" y="${margin.top}" width="${innerWidth}" height="${innerHeight}" data-hit-area></rect>
      </svg>
    `;
    caption.textContent = `${char}: direction-adjusted monthly long-short decile portfolio (${longLeg} minus ${shortLeg}) from ${data.metadata.dataset}. The selected window is rebased to 1 at the start date. ${scale === "log" ? "Vertical axis uses wealth multiples on a log scale." : "Vertical axis uses cumulative return."} Hover over the line for date-level returns.`;

    const svg = chart.querySelector("svg");
    const hitArea = chart.querySelector("[data-hit-area]");
    const hoverLayer = chart.querySelector("[data-hover-layer]");
    const hoverLine = chart.querySelector("[data-hover-line]");
    const hoverPoint = chart.querySelector("[data-hover-point]");
    const hoverTooltip = chart.querySelector("[data-hover-tooltip]");
    const hoverDate = chart.querySelector("[data-hover-date]");
    const hoverValue = chart.querySelector("[data-hover-value]");
    const hoverMonthly = chart.querySelector("[data-hover-monthly]");

    function nearestPoint(svgX) {
      return points.reduce(
        (best, point) => (Math.abs(point.sx - svgX) < Math.abs(best.sx - svgX) ? point : best),
        points[0],
      );
    }

    function showHover(event) {
      const rect = svg.getBoundingClientRect();
      const svgX = Math.max(0, Math.min(rect.width, event.clientX - rect.left)) * (width / rect.width);
      const point = nearestPoint(Math.max(margin.left, Math.min(margin.left + innerWidth, svgX)));
      const tooltipWidth = 210;
      const tooltipHeight = 68;
      const tooltipX = point.sx > width - margin.right - tooltipWidth - 10
        ? point.sx - tooltipWidth - 12
        : point.sx + 12;
      const tooltipY = Math.max(
        margin.top + 8,
        Math.min(margin.top + innerHeight - tooltipHeight - 8, point.sy - tooltipHeight - 10),
      );

      hoverLayer.removeAttribute("hidden");
      hoverLine.setAttribute("x1", point.sx);
      hoverLine.setAttribute("x2", point.sx);
      hoverPoint.setAttribute("cx", point.sx);
      hoverPoint.setAttribute("cy", point.sy);
      hoverTooltip.setAttribute("transform", `translate(${tooltipX.toFixed(2)} ${tooltipY.toFixed(2)})`);
      hoverDate.textContent = point.date;
      hoverValue.textContent = `Cumulative: ${formatPercent(point.value)} (${formatMultiple(point.wealth)})`;
      hoverMonthly.textContent = `Monthly 10-1: ${formatPercent(point.monthly)}`;
    }

    hitArea.addEventListener("pointermove", showHover);
    hitArea.addEventListener("pointerenter", showHover);
    hitArea.addEventListener("pointerleave", () => {
      hoverLayer.setAttribute("hidden", "");
    });
  }

  select.addEventListener("change", draw);
  weighting.addEventListener("change", draw);
  scaleSelect?.addEventListener("change", draw);
  rangeStart?.addEventListener("input", draw);
  rangeEnd?.addEventListener("input", draw);
  window.addEventListener("resize", draw);
  if (characteristics.includes("bm")) select.value = "bm";
  draw();
})();
