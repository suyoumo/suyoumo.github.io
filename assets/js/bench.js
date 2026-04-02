document.addEventListener('DOMContentLoaded', function () {
  const table = document.getElementById('leaderboard-table');
  if (table) {
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    const headers = Array.from(table.querySelectorAll('th[data-sort-key]'));
    let currentKey = 'pass3';
    let currentDirection = 'desc';

    function parseValue(row, key, index) {
      if (key === 'model_name' || key === 'platform') {
        return row.children[index].innerText.trim().toLowerCase();
      }
      const cell = row.children[index];
      return Number(cell.dataset.value || cell.textContent.replace(/[^0-9.-]/g, ''));
    }

    function updateRanks(sortedRows) {
      sortedRows.forEach(function (row, idx) {
        row.children[0].textContent = idx + 1;
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
    }

    headers.forEach(function (header) {
      header.classList.add('bench-sortable');
      header.addEventListener('click', function () {
        const key = header.dataset.sortKey;
        if (currentKey === key) {
          currentDirection = currentDirection === 'asc' ? 'desc' : 'asc';
        } else {
          currentKey = key;
          currentDirection = key === 'model_name' || key === 'platform' ? 'asc' : 'desc';
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
});
