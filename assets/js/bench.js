document.addEventListener('DOMContentLoaded', function () {
  const table = document.getElementById('leaderboard-table');
  if (table) {
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    const headers = Array.from(table.querySelectorAll('th[data-sort-key]'));
    let currentKey = 'pass3';
    let currentDirection = 'desc';

    function parseValue(row, key, index) {
      const cell = row.children[index];
      if (key === 'model_name' || key === 'platform' || key === 'openclaw_version' || key === 'updated_at') {
        return cell.innerText.trim().toLowerCase();
      }
      return Number(cell.dataset.value || cell.textContent.replace(/[^0-9.-]/g, ''));
    }

    function updateRanks(sortedRows) {
      sortedRows.forEach(function (row, idx) {
        row.children[0].textContent = idx + 1;
      });
    }

    function updateSortIndicators() {
      headers.forEach(function (header) {
        const indicator = header.querySelector('.bench-sort-indicator');
        header.classList.remove('bench-sort-active', 'bench-sort-asc', 'bench-sort-desc');
        if (!indicator) return;
        indicator.textContent = '↕';
        if (header.dataset.sortKey === currentKey) {
          header.classList.add('bench-sort-active', currentDirection === 'asc' ? 'bench-sort-asc' : 'bench-sort-desc');
          indicator.textContent = currentDirection === 'asc' ? '↑' : '↓';
        }
      });
    }

    function sortRows(key, direction) {
      const index = headers.findIndex(function (header) {
        return header.dataset.sortKey === key;
      }) + 1;

      const sorted = rows.slice().sort(function (a, b) {
        const av = parseValue(a, key, index);
        const bv = parseValue(b, key, index);
        if (typeof av === 'string' || typeof bv === 'string') {
          return direction === 'asc' ? av.localeCompare(bv) : bv.localeCompare(av);
        }
        return direction === 'asc' ? av - bv : bv - av;
      });

      updateRanks(sorted);
      sorted.forEach(function (row) {
        tbody.appendChild(row);
      });
      updateSortIndicators();
    }

    headers.forEach(function (header) {
      header.classList.add('bench-sortable');
      header.addEventListener('click', function () {
        const key = header.dataset.sortKey;
        if (currentKey === key) {
          currentDirection = currentDirection === 'asc' ? 'desc' : 'asc';
        } else {
          currentKey = key;
          currentDirection = key === 'model_name' || key === 'platform' || key === 'updated_at' ? 'asc' : 'desc';
        }
        sortRows(currentKey, currentDirection);
      });
    });

    rows.forEach(function (row) {
      row.addEventListener('click', function () {
        const href = row.dataset.href;
        if (href) window.location.href = href;
      });
    });

    sortRows(currentKey, currentDirection);
  }

  const leaderboardChart = document.getElementById('leaderboard-chart-bars');
  const leaderboardMetric = document.getElementById('leaderboard-chart-metric');
  if (leaderboardChart && leaderboardMetric) {
    const leaderboardLimit = document.getElementById('leaderboard-chart-limit');
    const bars = Array.from(leaderboardChart.querySelectorAll('.bench-chart-item'));

    function parseChartNumber(value) {
      const parsed = Number(value);
      return Number.isFinite(parsed) ? parsed : 0;
    }

    function parseVersion(value) {
      return String(value || '')
        .split('.')
        .reduce(function (total, part, index) {
          return total + parseChartNumber(part) / Math.pow(1000, index);
        }, 0);
    }

    function parseDate(value) {
      const timestamp = Date.parse(value);
      return Number.isFinite(timestamp) ? timestamp : 0;
    }

    function metricValue(bar, metric) {
      const raw = bar.dataset[metric] || '';
      if (metric === 'openclaw_version') return parseVersion(raw);
      if (metric === 'released_at' || metric === 'updated_at') return parseDate(raw);
      return parseChartNumber(raw);
    }

    function formatMetricValue(metric, format, bar) {
      const raw = bar.dataset[metric] || '';
      const value = metricValue(bar, metric);
      if (format === 'percent') return (value * 100).toFixed(1) + '%';
      if (format === 'runtime') return value.toFixed(2) + 's';
      if (format === 'tokens') return Math.round(value).toLocaleString('en-US');
      if (format === 'currency') return '$' + value.toFixed(4);
      if (format === 'decimal4') return value.toFixed(4);
      if (format === 'version') return 'v' + raw;
      if (format === 'date') return String(raw).slice(0, 10);
      return raw;
    }

    function chartLimit() {
      if (!leaderboardLimit || leaderboardLimit.value === 'all') return bars.length;
      const parsed = Number(leaderboardLimit.value);
      return Number.isFinite(parsed) ? parsed : bars.length;
    }

    function renderChart() {
      const selectedOption = leaderboardMetric.options[leaderboardMetric.selectedIndex];
      const metric = selectedOption.value;
      const direction = selectedOption.dataset.direction || 'desc';
      const format = selectedOption.dataset.format || 'percent';
      const sorted = bars.slice().sort(function (a, b) {
        const av = metricValue(a, metric);
        const bv = metricValue(b, metric);
        return direction === 'asc' ? av - bv : bv - av;
      });
      const visibleBars = sorted.slice(0, chartLimit());
      const values = visibleBars.map(function (bar) {
        return metricValue(bar, metric);
      });
      const max = values.length ? Math.max.apply(null, values) : 0;
      const min = values.length ? Math.min.apply(null, values) : 0;
      const range = max - min || 1;

      sorted.forEach(function (bar, index) {
        const isVisible = index < visibleBars.length;
        const value = metricValue(bar, metric);
        const normalized = direction === 'asc' ? (max - value) / range : (value - min) / range;
        const height = 72 + normalized * 188;
        const fill = bar.querySelector('.bench-chart-fill');
        const rank = bar.querySelector('.bench-chart-rank');
        const valueNode = bar.querySelector('.bench-chart-value');
        const label = bar.querySelector('.bench-chart-label');
        if (fill) fill.style.height = height + 'px';
        if (rank) rank.textContent = isVisible ? index + 1 : '';
        if (valueNode) {
          valueNode.textContent = isVisible ? formatMetricValue(metric, format, bar) : '';
          valueNode.style.top = (58 + (268 - height) - 10) + 'px';
        }
        bar.style.order = index;
        bar.dataset.activeMetric = metric;
        bar.style.display = isVisible ? '' : 'none';
        if (label) label.title = (bar.dataset.modelName || '') + ' · ' + (bar.dataset.provider || '') + ' · ' + (bar.dataset.platform || '');
      });
    }

    leaderboardMetric.addEventListener('change', renderChart);
    if (leaderboardLimit) leaderboardLimit.addEventListener('change', renderChart);
    renderChart();
  }

  const taskGrid = document.getElementById('task-grid');
  if (taskGrid) {
    const cards = Array.from(taskGrid.querySelectorAll('.bench-task-card'));
    const dimensionFilter = document.getElementById('task-dimension-filter');
    const difficultyFilter = document.getElementById('task-difficulty-filter');
    const searchInput = document.getElementById('task-search-input');

    function applyTaskFilters() {
      const dimensionValue = (dimensionFilter.value || 'all').toLowerCase();
      const difficultyValue = (difficultyFilter.value || 'all').toLowerCase();
      const searchValue = (searchInput.value || '').trim().toLowerCase();

      cards.forEach(function (card) {
        const matchesDimension = dimensionValue === 'all' || card.dataset.dimension === dimensionValue;
        const matchesDifficulty = difficultyValue === 'all' || card.dataset.difficulty === difficultyValue;
        const matchesSearch = !searchValue || (card.dataset.search || '').toLowerCase().includes(searchValue);
        card.style.display = matchesDimension && matchesDifficulty && matchesSearch ? '' : 'none';
      });
    }

    [dimensionFilter, difficultyFilter, searchInput].forEach(function (element) {
      element.addEventListener('input', applyTaskFilters);
      element.addEventListener('change', applyTaskFilters);
    });
  }

  const scenarioTables = document.querySelectorAll('.bench-scenario-table');
  scenarioTables.forEach(function (table) {
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    const headers = Array.from(table.querySelectorAll('th[data-sort-key]'));
    let sortKey = 'avg_score';
    let direction = 'desc';

    function valueFor(row, key, index) {
      const cell = row.children[index];
      if (key === 'name' || key === 'dimension' || key === 'difficulty') {
        return cell.innerText.trim().toLowerCase();
      }
      if (key === 'strict_pass_k') {
        return cell.dataset.value === 'true' ? 1 : 0;
      }
      return Number(cell.dataset.value || cell.textContent.replace(/[^0-9.-]/g, ''));
    }

    function updateScenarioIndicators() {
      headers.forEach(function (header) {
        const indicator = header.querySelector('.bench-sort-indicator');
        if (!indicator) return;
        indicator.textContent = header.dataset.sortKey === sortKey ? (direction === 'asc' ? '↑' : '↓') : '↕';
        header.classList.toggle('bench-sort-active', header.dataset.sortKey === sortKey);
      });
    }

    function applyScenarioSort() {
      const index = headers.findIndex(function (header) {
        return header.dataset.sortKey === sortKey;
      }) + 1;
      const sorted = rows.slice().sort(function (a, b) {
        const av = valueFor(a, sortKey, index);
        const bv = valueFor(b, sortKey, index);
        if (typeof av === 'string' || typeof bv === 'string') {
          return direction === 'asc' ? av.localeCompare(bv) : bv.localeCompare(av);
        }
        return direction === 'asc' ? av - bv : bv - av;
      });
      sorted.forEach(function (row) {
        tbody.appendChild(row);
      });
      updateScenarioIndicators();
    }

    headers.forEach(function (header) {
      header.addEventListener('click', function () {
        const key = header.dataset.sortKey;
        if (sortKey === key) {
          direction = direction === 'asc' ? 'desc' : 'asc';
        } else {
          sortKey = key;
          direction = key === 'name' || key === 'dimension' || key === 'difficulty' ? 'asc' : 'desc';
        }
        applyScenarioSort();
      });
    });

    applyScenarioSort();
  });

  document.querySelectorAll('.bench-task-toggle').forEach(function (button) {
    button.addEventListener('click', function () {
      const card = button.closest('.bench-task-card');
      const preview = card.querySelector('.bench-task-preview');
      const full = card.querySelector('.bench-task-full');
      const expanded = card.classList.contains('is-expanded');
      if (expanded) {
        card.classList.remove('is-expanded');
        button.setAttribute('aria-expanded', 'false');
      } else {
        card.classList.add('is-expanded');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });
});
