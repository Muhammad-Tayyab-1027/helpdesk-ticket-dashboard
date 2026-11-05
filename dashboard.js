// Helpdesk dashboard: plain JavaScript with no libraries.
const NOW = new Date(REPORT_TIME);
const HOUR = 3600000;
const $ = (id) => document.getElementById(id);
const FILTERS = { category: $("f-category"), priority: $("f-priority"), department: $("f-department") };

// Work out the extra facts for each ticket once, at the start.
const tickets = TICKETS.map((t) => {
  const opened = new Date(t.opened);
  const resolved = t.resolved ? new Date(t.resolved) : null;
  const hours = ((resolved || NOW) - opened) / HOUR;
  return {
    ...t,
    openedDate: opened,
    status: resolved ? "Resolved" : "Open",
    hours,
    breached: hours > t.targetHours,
  };
});

function uniqueSorted(key) {
  return [...new Set(tickets.map((t) => t[key]))].sort();
}

function fillFilters() {
  for (const [key, select] of Object.entries(FILTERS)) {
    for (const value of uniqueSorted(key)) select.add(new Option(value, value));
  }
}

function filtered() {
  const status = $("f-status").value;
  return tickets.filter((t) =>
    Object.entries(FILTERS).every(([key, select]) => !select.value || t[key] === select.value) &&
    (!status || t.status === status));
}

function median(numbers) {
  if (!numbers.length) return null;
  const sorted = [...numbers].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

function formatHours(h) {
  return h === null ? "n/a" : h < 48 ? `${h.toFixed(1)} h` : `${(h / 24).toFixed(1)} days`;
}

function renderTiles(list) {
  const done = list.filter((t) => t.status === "Resolved");
  const inTarget = done.filter((t) => !t.breached).length;
  $("k-total").textContent = list.length;
  $("k-open").textContent = list.length - done.length;
  $("k-sla").textContent = done.length ? `${Math.round((inTarget / done.length) * 100)}%` : "n/a";
  $("k-median").textContent = formatHours(median(done.map((t) => t.hours)));
}

// ---------- Charts ----------
const tooltip = $("tooltip");

function showTip(event, text) {
  tooltip.textContent = text;
  tooltip.hidden = false;
  const x = event.clientX ?? event.target.getBoundingClientRect().left;
  const y = event.clientY ?? event.target.getBoundingClientRect().top;
  tooltip.style.left = `${x + 12}px`;
  tooltip.style.top = `${y - 34}px`;
}

function addTips(container) {
  container.querySelectorAll(".hit").forEach((hit) => {
    const text = hit.dataset.tip;
    hit.addEventListener("mousemove", (e) => showTip(e, text));
    hit.addEventListener("focus", (e) => showTip(e, text));
    hit.addEventListener("mouseleave", () => { tooltip.hidden = true; });
    hit.addEventListener("blur", () => { tooltip.hidden = true; });
  });
}

function escapeHtml(text) {
  return String(text).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

function renderCategoryChart(list) {
  const counts = {};
  list.forEach((t) => { counts[t.category] = (counts[t.category] || 0) + 1; });
  const data = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  const rowH = 34, left = 140, width = 520, right = 36;
  const height = Math.max(data.length, 1) * rowH;
  const max = Math.max(1, ...data.map((d) => d[1]));
  const barSpace = width - left - right;
  const rows = data.map(([name, n], i) => {
    const y = i * rowH;
    const w = Math.max(2, (n / max) * barSpace);
    const label = escapeHtml(name);
    return `<text x="${left - 8}" y="${y + 21}" text-anchor="end">${label}</text>
      <rect class="hit" x="0" y="${y}" width="${width}" height="${rowH}" tabindex="0" data-tip="${label}: ${n} tickets"></rect>
      <rect class="mark" x="${left}" y="${y + 7}" width="${w}" height="20" rx="4" pointer-events="none"></rect>
      <text class="value-label" x="${left + w + 6}" y="${y + 21}" pointer-events="none">${n}</text>`;
  }).join("");
  $("chart-category").innerHTML = data.length
    ? `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Tickets by category">${rows}</svg>`
    : "<p class='note'>No tickets match these filters.</p>";
  addTips($("chart-category"));
}

function mondayOf(date) {
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  d.setDate(d.getDate() - ((d.getDay() + 6) % 7));
  return d;
}

function dateKey(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function renderWeekChart(list) {
  // Every week appears, even with zero tickets, so that the time axis stays honest.
  const weeks = [];
  const first = mondayOf(new Date(TICKETS[0].opened));
  for (let d = new Date(first); d <= NOW; d.setDate(d.getDate() + 7)) weeks.push(new Date(d));
  const counts = Object.fromEntries(weeks.map((w) => [dateKey(w), 0]));
  list.forEach((t) => { counts[dateKey(mondayOf(t.openedDate))] += 1; });
  const width = 520, height = 204, top = 12, bottom = 24, left = 30;
  const plot = height - top - bottom;
  const slot = (width - left) / weeks.length;
  const max = Math.max(1, ...Object.values(counts));
  const tick = Math.ceil(max / 2);
  const scaleMax = tick * 2;
  const grid = [0, tick, scaleMax].map((v) => {
    const y = top + plot - (v / scaleMax) * plot;
    return `<line class="grid" x1="${left}" x2="${width}" y1="${y}" y2="${y}"></line>
      <text x="${left - 6}" y="${y + 4}" text-anchor="end">${v}</text>`;
  }).join("");
  const bars = weeks.map((w, i) => {
    const n = counts[dateKey(w)];
    const h = n ? Math.max(2, (n / scaleMax) * plot) : 0;
    const x = left + i * slot;
    const day = w.toLocaleDateString("en-IE", { day: "numeric", month: "short" });
    const showLabel = i % 3 === 0;
    return `<rect class="hit" x="${x}" y="${top}" width="${slot}" height="${plot}" tabindex="0"
        data-tip="Week of ${day}: ${n} tickets"></rect>
      <rect class="mark" x="${x + 2}" y="${top + plot - h}" width="${Math.max(slot - 4, 1)}" height="${h}" rx="3" pointer-events="none"></rect>
      ${showLabel ? `<text x="${x + slot / 2}" y="${height - 6}" text-anchor="middle">${day}</text>` : ""}`;
  }).join("");
  $("chart-week").innerHTML = `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Tickets opened per week">${grid}${bars}</svg>`;
  addTips($("chart-week"));
}

// ---------- Table ----------
function renderTable(list) {
  const problem = list.filter((t) => t.breached || t.status === "Open")
    .sort((a, b) => (b.hours / b.targetHours) - (a.hours / a.targetHours));
  const shown = problem.slice(0, 15);
  $("rows").innerHTML = shown.map((t) => `<tr>
      <td>${escapeHtml(t.id)}</td>
      <td>${t.openedDate.toLocaleDateString("en-IE", { day: "numeric", month: "short" })}</td>
      <td>${escapeHtml(t.issue)}</td>
      <td>${escapeHtml(t.category)}</td>
      <td>${escapeHtml(t.priority)}</td>
      <td>${escapeHtml(t.department)}</td>
      <td class="${t.breached ? "status-bad" : "status-good"}">${t.status}${t.breached ? " (over target)" : " (in target)"}</td>
      <td class="num">${t.hours.toFixed(1)}</td>
    </tr>`).join("");
  $("table-note").textContent = `Showing ${shown.length} of ${problem.length} tickets, ordered by how far they are past their target.`;
}

function render() {
  const list = filtered();
  renderTiles(list);
  renderCategoryChart(list);
  renderWeekChart(list);
  renderTable(list);
}

fillFilters();
document.querySelector(".filters").addEventListener("change", render);
$("reset").addEventListener("click", () => {
  document.querySelectorAll(".filters select").forEach((s) => { s.value = ""; });
  render();
});
render();
