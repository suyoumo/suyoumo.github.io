(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const dataEl = document.getElementById('llm-board-data');
    if (!dataEl) return;
    let board;
    try {
      board = JSON.parse(dataEl.textContent);
    } catch (err) {
      console.warn('llm-board-data parse failed', err);
      return;
    }

    /* ============ Filter state ============ */
    const state = {
      searchQuery: '',
      hiddenModels: new Set(),
      hiddenBenches: new Set()
    };

    const tbody = document.querySelector('#llm-board-table tbody');
    const table = document.getElementById('llm-board-table');
    const filterCounter = document.getElementById('llm-board-filter-counter');
    const modelsCountEl = document.getElementById('llm-board-filter-models-count');
    const benchesCountEl = document.getElementById('llm-board-filter-benches-count');

    const allModels = Array.from(tbody.querySelectorAll('tr[data-model-name]'))
      .map(function (tr) { return { model: tr.dataset.modelName, company: tr.dataset.company || '' }; });

    const allBenches = [];
    (board.categories || []).forEach(function (cat) {
      (cat.columns || []).forEach(function (col) {
        allBenches.push({ key: col.key, label: col.label, cat: cat.name });
      });
    });

    /* ============ Merge identical scores in table cells ============ */
    // If a single cell has multiple <a.llm-score-entry> with the same
    // <strong> value (e.g., 94.3 from DeepSeek-V4 report AND from
    // Gemini 3.1 Pro report), collapse them into one entry whose <span>
    // is "labelA · labelB · labelC". The first entry's href is kept.
    function dedupScoreCells() {
      const stacks = document.querySelectorAll('.llm-score-stack');
      stacks.forEach(function (stack) {
        const entries = Array.from(stack.querySelectorAll('.llm-score-entry'));
        if (entries.length < 2) return;
        const byValue = new Map();
        entries.forEach(function (e) {
          const strong = e.querySelector('strong');
          if (!strong) return;
          const key = strong.textContent.trim();
          if (!byValue.has(key)) byValue.set(key, []);
          byValue.get(key).push(e);
        });
        byValue.forEach(function (group) {
          if (group.length < 2) return;
          const labels = group.map(function (e) {
            const sp = e.querySelector('span');
            return sp ? sp.textContent.trim() : '';
          }).filter(Boolean);
          // Dedup labels (same source/mode combo could repeat if data added twice)
          const seen = new Set();
          const dedupedLabels = labels.filter(function (l) {
            if (seen.has(l)) return false;
            seen.add(l);
            return true;
          });
          let firstSpan = group[0].querySelector('span');
          if (!firstSpan && dedupedLabels.length) {
            firstSpan = document.createElement('span');
            group[0].appendChild(firstSpan);
          }
          if (firstSpan) firstSpan.textContent = dedupedLabels.join(' · ');
          // If we joined N source labels, mark the chip wider so it doesn't truncate.
          if (dedupedLabels.length > 1 && firstSpan) {
            firstSpan.classList.add('llm-score-multi-source');
          }
          for (let i = 1; i < group.length; i++) {
            group[i].remove();
          }
        });
      });
    }

    dedupScoreCells();

    /* ============ URL hash sync ============ */
    function readHash() {
      const h = (window.location.hash || '').replace(/^#/, '');
      if (!h) return;
      const params = new URLSearchParams(h);
      const xm = params.get('xm');
      const xb = params.get('xb');
      if (xm) state.hiddenModels = new Set(xm.split('|').filter(Boolean));
      if (xb) state.hiddenBenches = new Set(xb.split('|').filter(Boolean));
    }
    function writeHash() {
      const params = new URLSearchParams();
      if (state.hiddenModels.size) params.set('xm', Array.from(state.hiddenModels).join('|'));
      if (state.hiddenBenches.size) params.set('xb', Array.from(state.hiddenBenches).join('|'));
      const s = params.toString();
      const newHash = s ? '#' + s : '';
      if (newHash !== (window.location.hash || '')) {
        try { history.replaceState(null, '', window.location.pathname + window.location.search + newHash); }
        catch (e) { window.location.hash = newHash.replace(/^#/, ''); }
      }
    }

    /* ============ Build popover bodies ============ */
    function buildModelsPanel() {
      const body = document.getElementById('llm-board-filter-models-body');
      const byCompany = new Map();
      allModels.forEach(function (m) {
        if (!byCompany.has(m.company)) byCompany.set(m.company, []);
        byCompany.get(m.company).push(m);
      });
      const frag = document.createDocumentFragment();
      byCompany.forEach(function (models, company) {
        const grp = document.createElement('div');
        grp.className = 'llm-board-filter-group';
        grp.dataset.company = company;
        const head = document.createElement('div');
        head.className = 'llm-board-filter-group-head';
        const lbl = document.createElement('strong');
        lbl.textContent = company || 'Other';
        head.appendChild(lbl);
        const allBtn = document.createElement('button');
        allBtn.type = 'button';
        allBtn.textContent = 'toggle';
        allBtn.addEventListener('click', function () {
          const checkboxes = grp.querySelectorAll('input[type="checkbox"]');
          const anyUnchecked = Array.from(checkboxes).some(function (c) { return !c.checked; });
          checkboxes.forEach(function (c) {
            c.checked = anyUnchecked;
            const k = c.value;
            if (anyUnchecked) state.hiddenModels.delete(k); else state.hiddenModels.add(k);
          });
          afterChange();
        });
        head.appendChild(allBtn);
        grp.appendChild(head);
        const list = document.createElement('div');
        list.className = 'llm-board-filter-group-items';
        models.forEach(function (m) {
          const lab = document.createElement('label');
          lab.className = 'llm-board-filter-item';
          lab.dataset.searchKey = (m.model + ' ' + m.company).toLowerCase();
          const cb = document.createElement('input');
          cb.type = 'checkbox';
          cb.value = m.model;
          cb.checked = !state.hiddenModels.has(m.model);
          cb.addEventListener('change', function () {
            if (cb.checked) state.hiddenModels.delete(m.model);
            else state.hiddenModels.add(m.model);
            afterChange();
          });
          const span = document.createElement('span');
          span.textContent = m.model;
          lab.appendChild(cb);
          lab.appendChild(span);
          list.appendChild(lab);
        });
        grp.appendChild(list);
        frag.appendChild(grp);
      });
      body.innerHTML = '';
      body.appendChild(frag);
    }

    function buildBenchesPanel() {
      const body = document.getElementById('llm-board-filter-benches-body');
      const frag = document.createDocumentFragment();
      (board.categories || []).forEach(function (cat) {
        const grp = document.createElement('div');
        grp.className = 'llm-board-filter-group';
        grp.dataset.category = cat.name;
        const head = document.createElement('div');
        head.className = 'llm-board-filter-group-head';
        const lbl = document.createElement('strong');
        lbl.textContent = cat.name;
        head.appendChild(lbl);
        const allBtn = document.createElement('button');
        allBtn.type = 'button';
        allBtn.textContent = 'toggle';
        allBtn.addEventListener('click', function () {
          const checkboxes = grp.querySelectorAll('input[type="checkbox"]');
          const anyUnchecked = Array.from(checkboxes).some(function (c) { return !c.checked; });
          checkboxes.forEach(function (c) {
            c.checked = anyUnchecked;
            const k = c.value;
            if (anyUnchecked) state.hiddenBenches.delete(k); else state.hiddenBenches.add(k);
          });
          afterChange();
        });
        head.appendChild(allBtn);
        grp.appendChild(head);
        const list = document.createElement('div');
        list.className = 'llm-board-filter-group-items';
        (cat.columns || []).forEach(function (col) {
          const lab = document.createElement('label');
          lab.className = 'llm-board-filter-item';
          lab.dataset.searchKey = (col.label + ' ' + col.key).toLowerCase();
          const cb = document.createElement('input');
          cb.type = 'checkbox';
          cb.value = col.key;
          cb.checked = !state.hiddenBenches.has(col.key);
          cb.addEventListener('change', function () {
            if (cb.checked) state.hiddenBenches.delete(col.key);
            else state.hiddenBenches.add(col.key);
            afterChange();
          });
          const span = document.createElement('span');
          span.textContent = col.label;
          lab.appendChild(cb);
          lab.appendChild(span);
          list.appendChild(lab);
        });
        grp.appendChild(list);
        frag.appendChild(grp);
      });
      body.innerHTML = '';
      body.appendChild(frag);
    }

    /* ============ Apply filter to table ============ */
    function applyFilter() {
      const q = state.searchQuery.toLowerCase();
      // Hide rows
      let visibleModels = 0;
      Array.from(tbody.querySelectorAll('tr[data-model-name]')).forEach(function (tr) {
        const m = tr.dataset.modelName || '';
        const c = tr.dataset.company || '';
        const passSearch = !q || (m + ' ' + c).toLowerCase().indexOf(q) !== -1;
        const passSelected = !state.hiddenModels.has(m);
        const show = passSearch && passSelected;
        tr.style.display = show ? '' : 'none';
        if (show) visibleModels++;
      });

      // Hide benchmark columns
      let visibleBenches = 0;
      allBenches.forEach(function (b) {
        const hide = state.hiddenBenches.has(b.key);
        if (!hide) visibleBenches++;
        const cells = table.querySelectorAll('[data-bench-key="' + cssEscape(b.key) + '"]');
        cells.forEach(function (c) { c.style.display = hide ? 'none' : ''; });
      });

      // Adjust category group <th> colspan: count visible benches per category
      const visiblePerCat = new Map();
      allBenches.forEach(function (b) {
        if (!state.hiddenBenches.has(b.key)) {
          visiblePerCat.set(b.cat, (visiblePerCat.get(b.cat) || 0) + 1);
        }
      });
      Array.from(table.querySelectorAll('[data-cat-name].llm-board-group')).forEach(function (gth) {
        const cnt = visiblePerCat.get(gth.dataset.catName) || 0;
        if (cnt === 0) {
          gth.style.display = 'none';
        } else {
          gth.style.display = '';
          gth.colSpan = cnt;
        }
      });

      // Update counters
      if (modelsCountEl) {
        const total = allModels.length;
        modelsCountEl.textContent = state.hiddenModels.size === 0 ? 'all ' + total : visibleModels + '/' + total;
      }
      if (benchesCountEl) {
        const total = allBenches.length;
        benchesCountEl.textContent = state.hiddenBenches.size === 0 ? 'all ' + total : visibleBenches + '/' + total;
      }
      if (filterCounter) {
        filterCounter.textContent = visibleModels + ' models · ' + visibleBenches + ' benchmarks';
      }

      // Resync sticky head widths (the global llm-leaderboard.js exposes
      // nothing, but it does observe ResizeObserver on table — toggling
      // display triggers reflow and the observer will re-run).
      // As a belt-and-suspenders, dispatch a synthetic resize:
      window.dispatchEvent(new Event('resize'));
    }

    function cssEscape(s) {
      if (window.CSS && window.CSS.escape) return window.CSS.escape(s);
      return String(s).replace(/[^a-zA-Z0-9_-]/g, function (ch) { return '\\' + ch; });
    }

    function afterChange() {
      writeHash();
      applyFilter();
    }

    /* ============ Toolbar wiring ============ */
    const searchInput = document.getElementById('llm-board-filter');
    const resetBtn = document.getElementById('llm-board-filter-reset');

    if (searchInput) {
      searchInput.addEventListener('input', function () {
        state.searchQuery = searchInput.value || '';
        applyFilter();
      });
    }
    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        state.hiddenModels.clear();
        state.hiddenBenches.clear();
        state.searchQuery = '';
        if (searchInput) searchInput.value = '';
        // Re-tick all checkboxes
        document.querySelectorAll('.llm-board-filter-panel input[type="checkbox"]').forEach(function (c) { c.checked = true; });
        afterChange();
      });
    }

    /* ============ Popover open/close ============ */
    function openPanel(name) {
      ['models', 'benches'].forEach(function (n) {
        const panel = document.getElementById('llm-board-filter-' + n + '-panel');
        const btn = document.getElementById('llm-board-filter-' + n + '-btn');
        if (n === name) {
          const isOpen = !panel.hidden;
          panel.hidden = isOpen;
          btn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
        } else {
          panel.hidden = true;
          btn.setAttribute('aria-expanded', 'false');
        }
      });
    }
    document.getElementById('llm-board-filter-models-btn').addEventListener('click', function (e) {
      e.stopPropagation(); openPanel('models');
    });
    document.getElementById('llm-board-filter-benches-btn').addEventListener('click', function (e) {
      e.stopPropagation(); openPanel('benches');
    });

    ['models', 'benches'].forEach(function (name) {
      const panel = document.getElementById('llm-board-filter-' + name + '-panel');
      // Outside click / Escape close
      document.addEventListener('click', function (e) {
        if (panel.hidden) return;
        if (!panel.contains(e.target) && !document.getElementById('llm-board-filter-' + name + '-btn').contains(e.target)) {
          panel.hidden = true;
        }
      });
      // Action buttons inside head
      panel.querySelectorAll('[data-action]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          const action = btn.dataset.action;
          if (action === 'close') {
            panel.hidden = true;
          } else if (action === 'all') {
            // Select all (visible after search)
            panel.querySelectorAll('.llm-board-filter-item').forEach(function (lab) {
              if (lab.style.display === 'none') return;
              const cb = lab.querySelector('input[type="checkbox"]');
              if (!cb.checked) {
                cb.checked = true;
                const k = cb.value;
                if (name === 'models') state.hiddenModels.delete(k);
                else state.hiddenBenches.delete(k);
              }
            });
            afterChange();
          } else if (action === 'none') {
            panel.querySelectorAll('.llm-board-filter-item').forEach(function (lab) {
              if (lab.style.display === 'none') return;
              const cb = lab.querySelector('input[type="checkbox"]');
              if (cb.checked) {
                cb.checked = false;
                const k = cb.value;
                if (name === 'models') state.hiddenModels.add(k);
                else state.hiddenBenches.add(k);
              }
            });
            afterChange();
          }
        });
      });
      // Inner search input
      const searchEl = document.getElementById('llm-board-filter-' + name + '-search');
      if (searchEl) {
        searchEl.addEventListener('input', function () {
          const q = (searchEl.value || '').toLowerCase().trim();
          panel.querySelectorAll('.llm-board-filter-item').forEach(function (lab) {
            const k = lab.dataset.searchKey || '';
            lab.style.display = (!q || k.indexOf(q) !== -1) ? '' : 'none';
          });
          panel.querySelectorAll('.llm-board-filter-group').forEach(function (g) {
            const visible = Array.from(g.querySelectorAll('.llm-board-filter-item')).some(function (lab) { return lab.style.display !== 'none'; });
            g.style.display = visible ? '' : 'none';
          });
        });
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        document.querySelectorAll('.llm-board-filter-panel').forEach(function (p) { p.hidden = true; });
      }
    });

    /* ============ Init ============ */
    readHash();
    buildModelsPanel();
    buildBenchesPanel();
    applyFilter();

    /* ============ Chart (per-benchmark bar chart, unchanged behavior) ============ */
    const select = document.getElementById('llm-chart-benchmark');
    const limitSelect = document.getElementById('llm-chart-limit');
    const bars = document.getElementById('llm-chart-bars');
    const empty = document.getElementById('llm-chart-empty');
    if (!select || !bars) return;

    const popularKeys = ['gpqa', 'hle', 'aime_2025', 'swe_verified', 'livecodebench', 'mmlu_pro', 'mmmu_pro'];

    // Keep a flat list of all (key, label, cat) for the chart so we can
    // rebuild the <select> dynamically when the user types in the chart
    // search box.
    const chartBenches = [];
    (board.categories || []).forEach(function (cat) {
      (cat.columns || []).forEach(function (col) {
        chartBenches.push({ key: col.key, label: col.label, cat: cat.name });
      });
    });

    function rebuildBenchSelect(query) {
      select.innerHTML = '';
      const q = (query || '').trim().toLowerCase();

      // Popular group — always sorted alphabetically; filter by query.
      const popularItems = chartBenches
        .filter(function (b) { return popularKeys.indexOf(b.key) !== -1; })
        .filter(function (b) { return !q || b.label.toLowerCase().indexOf(q) !== -1 || b.key.toLowerCase().indexOf(q) !== -1; })
        .sort(function (a, b) { return a.label.localeCompare(b.label, 'en', { sensitivity: 'base' }); });

      if (popularItems.length && !q) {
        const og = document.createElement('optgroup');
        og.label = '★ Popular';
        popularItems.forEach(function (b) {
          const opt = document.createElement('option');
          opt.value = b.key;
          opt.textContent = b.label;
          og.appendChild(opt);
        });
        select.appendChild(og);
      }

      // Per-category groups, items sorted A→Z within each, filtered by query.
      (board.categories || []).forEach(function (cat) {
        const items = (cat.columns || [])
          .filter(function (col) { return !q || col.label.toLowerCase().indexOf(q) !== -1 || col.key.toLowerCase().indexOf(q) !== -1; })
          .slice()
          .sort(function (a, b) { return a.label.localeCompare(b.label, 'en', { sensitivity: 'base' }); });
        if (!items.length) return;
        const og = document.createElement('optgroup');
        og.label = cat.name;
        items.forEach(function (col) {
          const opt = document.createElement('option');
          opt.value = col.key;
          opt.textContent = col.label;
          og.appendChild(opt);
        });
        select.appendChild(og);
      });
    }

    rebuildBenchSelect('');

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
      const cleaned = String(s).replace(/[,%$#]/g, '').trim();
      const m = cleaned.match(/-?\d+(\.\d+)?/);
      return m ? parseFloat(m[0]) : NaN;
    }

    function allNumeric(rows, key) {
      // Return EVERY numeric entry for this key across the merged
      // model's rows (any mode, any source). Each one becomes its own
      // bar in the chart.
      const out = [];
      rows.forEach(function (row) {
        const arr = (row.scores || {})[key];
        if (!arr) return;
        arr.forEach(function (entry) {
          const v = parseScore(entry.value);
          if (!isNaN(v)) {
            out.push({
              value: entry.value,
              source_label: entry.source_label,
              source_url: entry.source_url,
              mode: row.mode,
              numeric: v
            });
          }
        });
      });
      return out;
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

      const items = [];
      groupedRows.forEach(function (g) {
        const entries = allNumeric(g.rows, key);
        // Merge entries that share the same numeric value within this
        // model. The chart should show one bar per distinct score, with
        // the source labels joined by ·.
        const byValue = new Map();
        entries.forEach(function (entry) {
          // Use the raw string value as the merge key so 94.3 from
          // different reports collapses but 94.3 vs 94 stays separate.
          const k = String(entry.value);
          if (!byValue.has(k)) byValue.set(k, []);
          byValue.get(k).push(entry);
        });
        byValue.forEach(function (group) {
          const first = group[0];
          const labels = group.map(function (e) {
            const parts = [];
            if (e.mode) parts.push(e.mode);
            if (e.source_label) parts.push(e.source_label);
            return parts.join(' · ');
          }).filter(Boolean);
          const seen = new Set();
          const dedup = labels.filter(function (l) {
            if (seen.has(l)) return false;
            seen.add(l);
            return true;
          });
          items.push({
            model: g.model,
            company: g.company,
            numeric: first.numeric,
            entry: {
              value: first.value,
              source_url: first.source_url,
              // Pre-rendered label string with all sources merged.
              merged_label: dedup.join('  ·  '),
              source_count: dedup.length
            }
          });
        });
      });

      items.sort(function (a, b) { return b.numeric - a.numeric; });
      const visible = isFinite(limit) ? items.slice(0, limit) : items;
      bars.innerHTML = '';

      if (!visible.length) { if (empty) empty.hidden = false; return; }
      if (empty) empty.hidden = true;

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
        if (item.entry.merged_label) {
          const meta = document.createElement('span');
          meta.className = 'llm-chart-meta';
          if (item.entry.source_count > 1) meta.classList.add('llm-chart-meta-multi');
          meta.textContent = item.entry.merged_label;
          value.appendChild(meta);
        }
        barWrap.appendChild(value);
        a.appendChild(barWrap);
        bars.appendChild(a);
      });
    }

    let defaultKey = null;
    for (let i = 0; i < select.options.length; i++) {
      const opt = select.options[i];
      if (opt && opt.value) { defaultKey = opt.value; break; }
    }
    if (defaultKey) select.value = defaultKey;
    select.addEventListener('change', renderChart);
    if (limitSelect) limitSelect.addEventListener('change', renderChart);

    // Wire up the chart-side search input: filter the <select>, then
    // auto-select the first surviving option and re-render.
    const chartSearch = document.getElementById('llm-chart-search');
    if (chartSearch) {
      let searchTimer = null;
      chartSearch.addEventListener('input', function () {
        if (searchTimer) clearTimeout(searchTimer);
        searchTimer = setTimeout(function () {
          const prev = select.value;
          rebuildBenchSelect(chartSearch.value);
          // Preserve current selection if still present; otherwise pick first.
          let foundPrev = false;
          for (let i = 0; i < select.options.length; i++) {
            if (select.options[i].value === prev) { foundPrev = true; break; }
          }
          if (foundPrev) {
            select.value = prev;
          } else {
            for (let i = 0; i < select.options.length; i++) {
              if (select.options[i].value) { select.value = select.options[i].value; break; }
            }
          }
          renderChart();
        }, 100);
      });
    }

    renderChart();
  });
})();
