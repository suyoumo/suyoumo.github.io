(function () {
  document.addEventListener('DOMContentLoaded', function () {
    // -------- Data load --------
    const dataEl = document.getElementById('llm-board-data');
    if (!dataEl) return;
    let board;
    try {
      board = JSON.parse(dataEl.textContent);
    } catch (err) {
      console.warn('llm-board-data parse failed', err);
      return;
    }

    // -------- Filter: model search --------
    const filterInput = document.getElementById('llm-board-filter');
    const filterCounter = document.getElementById('llm-board-filter-counter');
    const filterReset = document.getElementById('llm-board-filter-reset');
    const tbody = document.querySelector('#llm-board-table tbody');

    function applyFilter() {
      if (!tbody) return;
      const q = (filterInput.value || '').trim().toLowerCase();
      const rows = tbody.querySelectorAll('tr');
      let shown = 0;
      rows.forEach(function (tr) {
        const cell = tr.querySelector('.llm-model-cell');
        if (!cell) return;
        const text = cell.textContent.toLowerCase();
        const match = !q || text.indexOf(q) !== -1;
        tr.style.display = match ? '' : 'none';
        if (match) shown++;
      });
      if (filterCounter) {
        filterCounter.textContent = q
          ? shown + ' / ' + rows.length + ' models'
          : rows.length + ' models';
      }
    }

    if (filterInput) {
      filterInput.addEventListener('input', applyFilter);
      applyFilter();
    }
    if (filterReset) {
      filterReset.addEventListener('click', function () {
        if (filterInput) filterInput.value = '';
        applyFilter();
        filterInput && filterInput.focus();
      });
    }

    // -------- Chart: per-benchmark bars --------
    const select = document.getElementById('llm-chart-benchmark');
    const limitSelect = document.getElementById('llm-chart-limit');
    const bars = document.getElementById('llm-chart-bars');
    const empty = document.getElementById('llm-chart-empty');
    if (!select || !bars) return;

    // Build benchmark options grouped by category, with a few popular defaults at top.
    const popularKeys = ['gpqa', 'hle', 'aime_2025', 'swe_verified', 'livecodebench', 'mmlu_pro', 'mmmu_pro'];
    const seenKeys = new Set();

    // Top group: popular benchmarks
    const popularGroup = document.createElement('optgroup');
    popularGroup.label = '★ Popular';
    (board.categories || []).forEach(function (cat) {
      (cat.columns || []).forEach(function (col) {
        if (popularKeys.indexOf(col.key) !== -1 && !seenKeys.has(col.key)) {
          seenKeys.add(col.key);
          const opt = document.createElement('option');
          opt.value = col.key;
          opt.textContent = col.label;
          popularGroup.appendChild(opt);
        }
      });
    });
    if (popularGroup.children.length) select.appendChild(popularGroup);

    // Category groups
    (board.categories || []).forEach(function (cat) {
      const og = document.createElement('optgroup');
      og.label = cat.name;
      (cat.columns || []).forEach(function (col) {
        const opt = document.createElement('option');
        opt.value = col.key;
        opt.textContent = col.label;
        og.appendChild(opt);
      });
      if (og.children.length) select.appendChild(og);
    });

    // Group rows by model name (same as the table's merge logic)
    const groupedRows = (function () {
      const seen = new Map();
      (board.rows || []).forEach(function (row) {
        if (!seen.has(row.model)) {
          seen.set(row.model, { model: row.model, company: row.company, rows: [] });
        }
        seen.get(row.model).rows.push(row);
      });
      return Array.from(seen.values());
    })();

    function parseScore(s) {
      if (s == null) return NaN;
      // strip commas, percent, $, # etc.
      const cleaned = String(s).replace(/[,%$#]/g, '').trim();
      // values like '52.3/43.3' — take the first number
      const m = cleaned.match(/-?\d+(\.\d+)?/);
      return m ? parseFloat(m[0]) : NaN;
    }

    function bestNumeric(rows, key) {
      let best = NaN;
      let bestEntry = null;
      rows.forEach(function (row) {
        const arr = (row.scores || {})[key];
        if (!arr) return;
        arr.forEach(function (entry) {
          const v = parseScore(entry.value);
          if (!isNaN(v) && (isNaN(best) || v > best)) {
            best = v;
            bestEntry = { value: entry.value, source_label: entry.source_label, source_url: entry.source_url, mode: row.mode };
          }
        });
      });
      return bestEntry;
    }

    const palette = [
      ['#5ea95d', '#4f9850'],
      ['#467bde', '#3f73d4'],
      ['#c78462', '#bf7a57'],
      ['#d84b74', '#ca3e67'],
      ['#f17a28', '#eb6e18'],
      ['#7b62c7', '#6b53b8']
    ];

    function renderChart() {
      const key = select.value;
      const limitRaw = limitSelect ? limitSelect.value : 'all';
      const limit = limitRaw === 'all' ? Infinity : parseInt(limitRaw, 10);
      if (!key) return;

      // Compute best score per model
      const items = [];
      groupedRows.forEach(function (g) {
        const best = bestNumeric(g.rows, key);
        if (best && !isNaN(parseScore(best.value))) {
          items.push({
            model: g.model,
            company: g.company,
            numeric: parseScore(best.value),
            entry: best
          });
        }
      });

      // Sort desc by numeric
      items.sort(function (a, b) { return b.numeric - a.numeric; });

      const visible = isFinite(limit) ? items.slice(0, limit) : items;
      bars.innerHTML = '';

      if (!visible.length) {
        empty && (empty.hidden = false);
        return;
      }
      empty && (empty.hidden = true);

      const max = visible[0].numeric;
      visible.forEach(function (item, idx) {
        const a = document.createElement(item.entry.source_url ? 'a' : 'div');
        a.className = 'llm-chart-item';
        if (item.entry.source_url) {
          a.href = item.entry.source_url;
          a.target = '_blank';
          a.rel = 'noopener';
        }

        const rank = document.createElement('span');
        rank.className = 'llm-chart-rank';
        rank.textContent = '#' + (idx + 1);
        a.appendChild(rank);

        const labelTrack = document.createElement('span');
        labelTrack.className = 'llm-chart-label';
        const strong = document.createElement('strong');
        strong.textContent = item.model;
        const sub = document.createElement('span');
        sub.textContent = item.company;
        labelTrack.appendChild(strong);
        labelTrack.appendChild(sub);
        a.appendChild(labelTrack);

        const barWrap = document.createElement('span');
        barWrap.className = 'llm-chart-bar';
        const fill = document.createElement('span');
        fill.className = 'llm-chart-fill';
        const pct = max > 0 ? (item.numeric / max) * 100 : 0;
        fill.style.width = Math.max(1, pct) + '%';
        const colors = palette[idx % palette.length];
        fill.style.background = 'linear-gradient(90deg, ' + colors[0] + ' 0%, ' + colors[1] + ' 100%)';
        barWrap.appendChild(fill);

        const value = document.createElement('span');
        value.className = 'llm-chart-value';
        value.textContent = item.entry.value;
        if (item.entry.mode || item.entry.source_label) {
          const meta = document.createElement('span');
          meta.className = 'llm-chart-meta';
          const parts = [];
          if (item.entry.mode) parts.push(item.entry.mode);
          if (item.entry.source_label) parts.push(item.entry.source_label);
          meta.textContent = parts.join(' · ');
          value.appendChild(meta);
        }
        barWrap.appendChild(value);
        a.appendChild(barWrap);

        bars.appendChild(a);
      });
    }

    // Default to first popular benchmark that has data; fall back to first option
    let defaultKey = null;
    for (let i = 0; i < select.options.length; i++) {
      const opt = select.options[i];
      if (opt && opt.value) { defaultKey = opt.value; break; }
    }
    if (defaultKey) select.value = defaultKey;
    select.addEventListener('change', renderChart);
    if (limitSelect) limitSelect.addEventListener('change', renderChart);
    renderChart();
  });
})();
