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
      const expanded = button.getAttribute('aria-expanded') === 'true';
      if (expanded) {
        button.setAttribute('aria-expanded', 'false');
        preview.hidden = false;
        full.hidden = true;
      } else {
        button.setAttribute('aria-expanded', 'true');
        preview.hidden = true;
        full.hidden = false;
      }
    });
  });
});
