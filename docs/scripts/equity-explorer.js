(async function () {
  const root = document.querySelector("[data-equity-explorer]");
  if (!root) return;

  const status = root.querySelector("[data-explorer-status]");
  const select = root.querySelector("[data-characteristic-select]");
  const metric = root.querySelector("[data-metric-select]");
  const chart = root.querySelector("[data-monthly-chart]");
  const caption = root.querySelector("[data-chart-caption]");
  const range = root.querySelector("[data-monthly-range]");
  const rangeCanvas = root.querySelector("[data-monthly-range-canvas]");
  const rangeStart = root.querySelector("[data-monthly-range-start]");
  const rangeEnd = root.querySelector("[data-monthly-range-end]");
  const rangeSelection = root.querySelector("[data-monthly-range-selection]");
  const rangeLabels = root.querySelector("[data-monthly-range-labels]");
  const rangeCaption = root.querySelector("[data-monthly-range-caption]");

  const url = root.dataset.summaryUrl;
  let data;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    data = await response.json();
  } catch (error) {
    status.textContent = "Monthly summary is not available yet.";
    return;
  }

  const characteristics = data.characteristics || [];
  const series = data.series || {};
  const frequency = data.metadata?.frequency || "monthly";

  status.textContent = `${data.metadata.release_id} release, ${data.metadata.characteristics} characteristics, ${frequency}`;
  select.innerHTML = characteristics
    .map((name) => `<option value="${name}">${name}</option>`)
    .join("");

  function rowPeriod(row) {
    if (row.period) return String(row.period);
    if (row.date) return String(row.date).slice(0, 7);
    if (row.year) return String(row.year);
    return "";
  }

  function periodYear(period) {
    return Number(String(period).slice(0, 4));
  }

  function periodMonth(period) {
    return Number(String(period).slice(5, 7) || "1");
  }

  function formatValue(value, metricName) {
    if (value == null) return "n/a";
    if (metricName === "coverage") return `${Math.round(value * 100)}%`;
    if (metricName === "n") return Math.round(value).toLocaleString();
    const absolute = Math.abs(Number(value));
    if (absolute >= 100) return Number(value).toLocaleString(undefined, { maximumFractionDigits: 0 });
    if (absolute >= 1) return Number(value).toLocaleString(undefined, { maximumFractionDigits: 2 });
    return Number(value).toLocaleString(undefined, { maximumFractionDigits: 4 });
  }

  function metricLabel(metricName) {
    return metric.options[metric.selectedIndex].text;
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

  function monthTicks(rows) {
    if (!rows.length) return [];
    const firstPeriod = rowPeriod(rows[0]);
    const lastPeriod = rowPeriod(rows[rows.length - 1]);
    const firstYear = periodYear(firstPeriod);
    const lastYear = periodYear(lastPeriod);
    const span = Math.max(0, lastYear - firstYear);
    const interval = span > 45 ? 10 : span > 20 ? 5 : span > 8 ? 2 : 1;
    const ticks = [{ index: 0, label: firstPeriod }];
    for (let index = 1; index < rows.length - 1; index += 1) {
      const period = rowPeriod(rows[index]);
      const year = periodYear(period);
      if (periodMonth(period) === 1 && year % interval === 0) {
        ticks.push({ index, label: String(year) });
      }
    }
    if (rows.length > 1) ticks.push({ index: rows.length - 1, label: lastPeriod });
    return ticks.filter((tick, index, all) => index === 0 || tick.index !== all[index - 1].index);
  }

  let rangeKey = "";

  function currentRangeIndexes(rows, char, metricName) {
    if (!rangeStart || !rangeEnd || !rows.length) return [0, Math.max(0, rows.length - 1)];
    const first = rowPeriod(rows[0]);
    const last = rowPeriod(rows[rows.length - 1]);
    const key = `${char}:${metricName}:${first}:${last}:${rows.length}`;
    if (key !== rangeKey) {
      rangeKey = key;
      const lastIndex = rows.length - 1;
      rangeStart.max = String(lastIndex);
      rangeEnd.max = String(lastIndex);
      rangeStart.value = "0";
      rangeEnd.value = String(lastIndex);
    }
    let start = Number(rangeStart.value);
    let end = Number(rangeEnd.value);
    if (start > end) {
      if (document.activeElement === rangeStart) {
        end = start;
        rangeEnd.value = String(end);
      } else {
        start = end;
        rangeStart.value = String(start);
      }
    }
    return [start, end];
  }

  function drawRangeOverview(rows, metricName, startIndex, endIndex) {
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

    const values = rows.map((row) => Number(row[metricName])).filter((value) => Number.isFinite(value));
    const minValue = Math.min(...values);
    const maxValue = Math.max(...values);
    const span = maxValue - minValue || 1;
    const x = (index) => (index / Math.max(1, rows.length - 1)) * width;
    const y = (value) => height - 7 - ((value - minValue) / span) * (height - 14);

    ctx.fillStyle = "#edf3f8";
    ctx.fillRect(0, 0, width, height);
    ctx.beginPath();
    rows.forEach((row, index) => {
      const value = Number(row[metricName]);
      const px = x(index);
      const py = y(Number.isFinite(value) ? value : minValue);
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
    const first = rowPeriod(rows[0]);
    const last = rowPeriod(rows[rows.length - 1]);
    const mid = rowPeriod(rows[Math.floor(rows.length / 2)]);
    rangeLabels.innerHTML = `<span>${first}</span><span>${mid}</span><span>${last}</span>`;
    rangeCaption.textContent = `${rowPeriod(rows[startIndex])} to ${rowPeriod(rows[endIndex])}`;
  }

  function draw() {
    const char = select.value;
    const metricName = metric.value;
    const allRows = (series[char] || []).filter((row) => row[metricName] != null);
    const [startIndex, endIndex] = currentRangeIndexes(allRows, char, metricName);
    const rows = allRows.slice(startIndex, endIndex + 1);
    drawRangeOverview(allRows, metricName, startIndex, endIndex);
    if (!rows.length) {
      if (range) range.hidden = true;
      chart.innerHTML = "";
      caption.textContent = "No data for this characteristic.";
      return;
    }

    const width = 920;
    const height = 292;
    const margin = { top: 28, right: 28, bottom: 40, left: 82 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    const values = rows.map((row) => Number(row[metricName]));
    let minValue = Math.min(...values);
    let maxValue = Math.max(...values);
    if (minValue === maxValue) {
      minValue -= 1;
      maxValue += 1;
    }
    const padding = (maxValue - minValue) * 0.08;
    minValue -= padding;
    maxValue += padding;
    const valueTicks = niceTicks(minValue, maxValue);
    if (valueTicks.length) {
      minValue = Math.min(minValue, valueTicks[0]);
      maxValue = Math.max(maxValue, valueTicks[valueTicks.length - 1]);
    }

    const x = (index) => margin.left + (index / Math.max(1, rows.length - 1)) * innerWidth;
    const y = (value) =>
      margin.top + innerHeight - ((value - minValue) / (maxValue - minValue)) * innerHeight;

    const path = rows
      .map((row, index) => `${index ? "L" : "M"} ${x(index).toFixed(2)} ${y(Number(row[metricName])).toFixed(2)}`)
      .join(" ");
    const areaPath = `${path} L ${x(rows.length - 1).toFixed(2)} ${(margin.top + innerHeight).toFixed(2)} L ${x(0).toFixed(2)} ${(margin.top + innerHeight).toFixed(2)} Z`;
    const points = rows.map((row, index) => ({
      period: rowPeriod(row),
      index,
      value: Number(row[metricName]),
      sx: x(index),
      sy: y(Number(row[metricName])),
    }));
    const minPoint = points.reduce((best, point) => (point.value < best.value ? point : best), points[0]);
    const maxPoint = points.reduce((best, point) => (point.value > best.value ? point : best), points[0]);
    const keyIndexes = new Set([0, points.length - 1, minPoint.index, maxPoint.index]);

    const xTicks = monthTicks(rows);
    const zeroLine =
      minValue < 0 && maxValue > 0
        ? `<line class="zero-line" x1="${margin.left}" x2="${margin.left + innerWidth}" y1="${y(0)}" y2="${y(0)}"></line>`
        : "";
    const metricText = metricLabel(metricName);

    chart.innerHTML = `
      <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${char} monthly ${metricName}">
        <line class="axis" x1="${margin.left}" y1="${margin.top + innerHeight}" x2="${margin.left + innerWidth}" y2="${margin.top + innerHeight}"></line>
        <line class="axis" x1="${margin.left}" y1="${margin.top}" x2="${margin.left}" y2="${margin.top + innerHeight}"></line>
        ${xTicks
          .map(
            (tick) => `
              <line class="gridline vertical" x1="${x(tick.index)}" x2="${x(tick.index)}" y1="${margin.top}" y2="${margin.top + innerHeight}"></line>
              <text class="tick" x="${x(tick.index)}" y="${height - 10}" text-anchor="middle">${tick.label}</text>
            `,
          )
          .join("")}
        ${valueTicks
          .map(
            (value) => `
              <line class="gridline" x1="${margin.left}" x2="${margin.left + innerWidth}" y1="${y(value)}" y2="${y(value)}"></line>
              <text class="tick" x="${margin.left - 10}" y="${y(value) + 4}" text-anchor="end">${formatValue(value, metricName)}</text>
            `,
          )
          .join("")}
        ${zeroLine}
        <path class="series-area" d="${areaPath}"></path>
        <path class="series-line" d="${path}"></path>
        ${points
          .filter((point) => keyIndexes.has(point.index))
          .map(
            (point) => `
              <circle class="series-point" cx="${point.sx}" cy="${point.sy}" r="2.4"></circle>
            `,
          )
          .join("")}
        <g class="hover-layer" data-hover-layer hidden>
          <line class="hover-line" data-hover-line y1="${margin.top}" y2="${margin.top + innerHeight}"></line>
          <circle class="hover-point" data-hover-point r="4.5"></circle>
          <g data-hover-tooltip>
            <rect class="hover-tooltip-box" width="142" height="54" rx="2"></rect>
            <text class="hover-label" x="12" y="20" data-hover-period></text>
            <text class="hover-value" x="12" y="40" data-hover-value></text>
          </g>
        </g>
        <rect class="hit-area" x="${margin.left}" y="${margin.top}" width="${innerWidth}" height="${innerHeight}" data-hit-area></rect>
      </svg>
    `;
    caption.textContent = `${char}: monthly ${metricText.toLowerCase()} from chars_raw_no_impute.parquet. Hover over the line for monthly values.`;

    const svg = chart.querySelector("svg");
    const hitArea = chart.querySelector("[data-hit-area]");
    const hoverLayer = chart.querySelector("[data-hover-layer]");
    const hoverLine = chart.querySelector("[data-hover-line]");
    const hoverPoint = chart.querySelector("[data-hover-point]");
    const hoverTooltip = chart.querySelector("[data-hover-tooltip]");
    const hoverPeriod = chart.querySelector("[data-hover-period]");
    const hoverValue = chart.querySelector("[data-hover-value]");

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
      const tooltipWidth = 142;
      const tooltipHeight = 54;
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
      hoverPeriod.textContent = point.period;
      hoverValue.textContent = formatValue(point.value, metricName);
    }

    hitArea.addEventListener("pointermove", showHover);
    hitArea.addEventListener("pointerenter", showHover);
    hitArea.addEventListener("pointerleave", () => {
      hoverLayer.setAttribute("hidden", "");
    });
  }

  select.addEventListener("change", draw);
  metric.addEventListener("change", draw);
  rangeStart?.addEventListener("input", draw);
  rangeEnd?.addEventListener("input", draw);
  window.addEventListener("resize", draw);
  if (characteristics.includes("bm")) select.value = "bm";
  draw();
})();
