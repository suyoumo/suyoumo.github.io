document.addEventListener('DOMContentLoaded', function () {
  const app = document.getElementById('modelpk-app');
  const dataNode = document.getElementById('modelpk-data');
  if (!app || !dataNode) return;

  const baseUrl = app.dataset.baseurl || '';
  let models = [];

  try {
    models = JSON.parse(dataNode.textContent || '[]');
  } catch (error) {
    renderFatalError('ModelPK data failed to load.');
    return;
  }

  const selectA = document.getElementById('modelpk-model-a');
  const selectB = document.getElementById('modelpk-model-b');
  const swapButton = document.getElementById('modelpk-swap');
  const resetButton = document.getElementById('modelpk-reset');
  const warning = document.getElementById('modelpk-warning');
  const summaryGrid = document.getElementById('modelpk-summary-grid');
  const verdict = document.getElementById('modelpk-verdict');
  const dimensionGrid = document.getElementById('modelpk-dimension-grid');
  const dimensionFilter = document.getElementById('modelpk-dimension-filter');
  const taskSort = document.getElementById('modelpk-task-sort');
  const taskSearch = document.getElementById('modelpk-task-search');
  const diffOnly = document.getElementById('modelpk-diff-only');
  const taskSummary = document.getElementById('modelpk-task-summary');
  const taskRows = document.getElementById('modelpk-task-rows');
  const taskHeadA = document.getElementById('modelpk-task-head-a');
  const taskHeadB = document.getElementById('modelpk-task-head-b');

  const dimensionDefs = [
    { key: 'planning_score', label: 'Planning', dimension: 'planning', icon: 'route' },
    { key: 'safety_score', label: 'Safety', dimension: 'safety', icon: 'shield' },
    { key: 'tool_use_score', label: 'Tool Use', dimension: 'tool_use', icon: 'tool' },
    { key: 'constraints_score', label: 'Constraints', dimension: 'constraints', icon: 'lock' },
    { key: 'error_recovery_score', label: 'Error Recovery', dimension: 'error_recovery', icon: 'recover' },
    { key: 'synthesis_score', label: 'Synthesis', dimension: 'synthesis', icon: 'layers' }
  ];

  const coreMetrics = [
    { key: 'final_score', label: 'Final', type: 'score' },
    { key: 'overall_score', label: 'Avg Score', type: 'percent' },
    { key: 'pass3', label: 'Pass^3', type: 'percent' },
    { key: 'pass_at_3', label: 'Pass@3', type: 'percent' }
  ];

  const modelById = new Map(models.map(function (model) {
    return [model.id, model];
  }));

  const rankedModels = models.slice().sort(function (a, b) {
    const rankA = Number(a.rank) || 9999;
    const rankB = Number(b.rank) || 9999;
    if (rankA !== rankB) return rankA - rankB;
    return String(a.model_name || '').localeCompare(String(b.model_name || ''));
  });

  function renderFatalError(message) {
    if (!app) return;
    app.innerHTML = '<div class="container-wide bench-shell"><div class="bench-card modelpk-warning-card">' + escapeHtml(message) + '</div></div>';
  }

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function toNumber(value) {
    const num = Number(value);
    return Number.isFinite(num) ? num : 0;
  }

  function signed(value, digits) {
    const rounded = value.toFixed(digits);
    return value > 0 ? '+' + rounded : rounded;
  }

  function formatMetric(value, type) {
    const num = toNumber(value);
    if (type === 'score') return num.toFixed(2);
    if (type === 'tokens') return Math.round(num).toLocaleString();
    if (type === 'runtime') return num.toFixed(2) + 's';
    if (type === 'currency') return '$' + num.toFixed(4);
    return (num * 100).toFixed(1);
  }

  function formatDelta(value, type) {
    if (type === 'score') return signed(value, 2);
    return signed(value * 100, 1);
  }

  function scoreWidth(value, type) {
    const num = toNumber(value);
    if (type === 'score') return Math.max(0, Math.min(100, num));
    return Math.max(0, Math.min(100, num * 100));
  }

  function iconSvg(name) {
    const paths = {
      route: '<path d="M5 19c4 0 4-14 8-14s4 14 8 14"/><circle cx="5" cy="19" r="2"/><circle cx="13" cy="5" r="2"/><circle cx="21" cy="19" r="2"/>',
      shield: '<path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z"/><path d="m9 12 2 2 4-5"/>',
      tool: '<path d="M14.7 6.3a4 4 0 0 0 5 5L11 20l-4-4 8.7-8.7Z"/><path d="m7 16-3 3"/>',
      lock: '<rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
      recover: '<path d="M4 12a8 8 0 1 1 2.3 5.7"/><path d="M4 18v-6h6"/>',
      layers: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/><path d="m3 18 9 5 9-5"/>',
      trophy: '<path d="M8 4h8v4a4 4 0 0 1-8 0V4Z"/><path d="M8 6H5a3 3 0 0 0 3 3"/><path d="M16 6h3a3 3 0 0 1-3 3"/><path d="M12 12v5"/><path d="M9 21h6"/><path d="M10 17h4"/>'
    };
    return '<svg viewBox="0 0 24 24" aria-hidden="true">' + (paths[name] || paths.trophy) + '</svg>';
  }

  function modelLogo(model) {
    if (!model || !model.logo) {
      return '<span class="modelpk-logo-placeholder">' + escapeHtml((model && model.model_name ? model.model_name[0] : '?').toUpperCase()) + '</span>';
    }
    return '<img src="' + baseUrl + '/assets/images/bench/' + escapeHtml(model.logo) + '" alt="' + escapeHtml(model.provider_key || model.model_name || 'model') + ' logo" />';
  }

  function optionLabel(model) {
    const rank = model.rank ? '#' + model.rank + ' · ' : '';
    return rank + model.model_name + ' · ' + model.provider_key;
  }

  function populateModelOptions() {
    const html = rankedModels.map(function (model) {
      return '<option value="' + escapeHtml(model.id) + '">' + escapeHtml(optionLabel(model)) + '</option>';
    }).join('');
    selectA.innerHTML = html;
    selectB.innerHTML = html;
  }

  function scenarioMap(model) {
    const map = new Map();
    (model.scenario_rows || []).forEach(function (row) {
      if (row && row.scenario_id) map.set(row.scenario_id, row);
    });
    return map;
  }

  function allScenarioRows(modelA, modelB) {
    const mapA = scenarioMap(modelA);
    const mapB = scenarioMap(modelB);
    const ids = new Set([].concat(Array.from(mapA.keys()), Array.from(mapB.keys())));
    return Array.from(ids).map(function (id) {
      const rowA = mapA.get(id) || {};
      const rowB = mapB.get(id) || {};
      const base = rowA.scenario_id ? rowA : rowB;
      const scoreA = rowA.scenario_id ? toNumber(rowA.avg_score) : null;
      const scoreB = rowB.scenario_id ? toNumber(rowB.avg_score) : null;
      return {
        scenario_id: id,
        name: base.name || id,
        dimension: base.dimension || 'unknown',
        difficulty: base.difficulty || '',
        scoreA: scoreA,
        scoreB: scoreB,
        strictA: Boolean(rowA.strict_pass_k),
        strictB: Boolean(rowB.strict_pass_k),
        delta: scoreA == null || scoreB == null ? 0 : scoreA - scoreB
      };
    });
  }

  function renderModelCard(model, side) {
    const metrics = coreMetrics.map(function (metric) {
      return '<div><span>' + metric.label + '</span><strong>' + formatMetric(model[metric.key], metric.type) + '</strong></div>';
    }).join('');
    return [
      '<article class="bench-card modelpk-model-card modelpk-' + side + '">',
      '  <div class="modelpk-model-head">',
      '    <div class="modelpk-logo">' + modelLogo(model) + '</div>',
      '    <div>',
      '      <span class="modelpk-side-label">Model ' + side.toUpperCase() + '</span>',
      '      <h3>' + escapeHtml(model.model_name || model.id) + '</h3>',
      '      <p>' + escapeHtml(model.provider_key || '') + ' · ' + escapeHtml(model.platform || '') + '</p>',
      '    </div>',
      '  </div>',
      '  <div class="modelpk-model-meta">',
      '    <span>Rank #' + escapeHtml(model.rank || 'NA') + '</span>',
      '    <span>' + escapeHtml(model.status || 'unknown') + '</span>',
      '    <span>' + escapeHtml(model.released_at || 'release unknown') + '</span>',
      '  </div>',
      '  <div class="modelpk-model-metrics">' + metrics + '</div>',
      '  <a class="modelpk-model-link" href="' + baseUrl + '/bench/models/' + escapeHtml(model.slug || '') + '/">Open detail</a>',
      '</article>'
    ].join('');
  }

  function renderSummary(modelA, modelB) {
    summaryGrid.innerHTML = renderModelCard(modelA, 'a') + renderModelCard(modelB, 'b');
  }

  function renderVerdict(modelA, modelB, taskRowsForPair) {
    const dimensionWins = dimensionDefs.reduce(function (acc, def) {
      const delta = toNumber(modelA[def.key]) - toNumber(modelB[def.key]);
      if (Math.abs(delta) < 0.0001) acc.tie += 1;
      else if (delta > 0) acc.a += 1;
      else acc.b += 1;
      return acc;
    }, { a: 0, b: 0, tie: 0 });

    const taskWins = taskRowsForPair.reduce(function (acc, row) {
      if (row.scoreA == null || row.scoreB == null || Math.abs(row.delta) < 0.0001) acc.tie += 1;
      else if (row.delta > 0) acc.a += 1;
      else acc.b += 1;
      return acc;
    }, { a: 0, b: 0, tie: 0 });

    const biggest = taskRowsForPair
      .filter(function (row) { return row.scoreA != null && row.scoreB != null; })
      .sort(function (a, b) { return Math.abs(b.delta) - Math.abs(a.delta); })
      .slice(0, 3)
      .map(function (row) {
        const leader = row.delta > 0 ? modelA.model_name : modelB.model_name;
        return '<li><strong>' + escapeHtml(row.scenario_id) + '</strong><span>' + escapeHtml(leader) + ' leads by ' + Math.abs(row.delta * 100).toFixed(1) + '</span></li>';
      }).join('');

    const finalDelta = toNumber(modelA.final_score) - toNumber(modelB.final_score);
    const headline = Math.abs(finalDelta) < 0.0001
      ? 'Final Score is tied'
      : (finalDelta > 0 ? modelA.model_name : modelB.model_name) + ' leads Final Score by ' + Math.abs(finalDelta).toFixed(2);

    verdict.innerHTML = [
      '<div class="modelpk-verdict-main">',
      '  <div class="modelpk-verdict-icon">' + iconSvg('trophy') + '</div>',
      '  <div><p class="bench-kicker">PK verdict</p><h2>' + escapeHtml(headline) + '</h2><p>Dimension wins: ' + escapeHtml(modelA.model_name) + ' ' + dimensionWins.a + ', ' + escapeHtml(modelB.model_name) + ' ' + dimensionWins.b + ', ties ' + dimensionWins.tie + '.</p></div>',
      '</div>',
      '<div class="modelpk-verdict-stats">',
      '  <div><span>Task wins A</span><strong>' + taskWins.a + '</strong></div>',
      '  <div><span>Task wins B</span><strong>' + taskWins.b + '</strong></div>',
      '  <div><span>Task ties</span><strong>' + taskWins.tie + '</strong></div>',
      '</div>',
      '<ul class="modelpk-biggest-gaps">' + biggest + '</ul>'
    ].join('');
  }

  function renderDimensions(modelA, modelB) {
    dimensionGrid.innerHTML = dimensionDefs.map(function (def) {
      const valueA = toNumber(modelA[def.key]);
      const valueB = toNumber(modelB[def.key]);
      const delta = valueA - valueB;
      const winner = Math.abs(delta) < 0.0001 ? 'Tie' : (delta > 0 ? 'A leads' : 'B leads');
      return [
        '<div class="modelpk-dimension-row">',
        '  <div class="modelpk-dimension-label"><span class="modelpk-dimension-icon">' + iconSvg(def.icon) + '</span><strong>' + def.label + '</strong></div>',
        '  <div class="modelpk-dimension-bars">',
        '    <div><span>A</span><div class="modelpk-score-track"><i style="width:' + scoreWidth(valueA, 'percent') + '%"></i></div><strong>' + formatMetric(valueA, 'percent') + '</strong></div>',
        '    <div><span>B</span><div class="modelpk-score-track"><i style="width:' + scoreWidth(valueB, 'percent') + '%"></i></div><strong>' + formatMetric(valueB, 'percent') + '</strong></div>',
        '  </div>',
        '  <div class="modelpk-delta ' + (delta > 0 ? 'positive' : delta < 0 ? 'negative' : 'neutral') + '"><strong>' + formatDelta(delta, 'percent') + '</strong><span>' + winner + '</span></div>',
        '</div>'
      ].join('');
    }).join('');
  }

  function populateDimensionFilter(rows) {
    const current = dimensionFilter.value || 'all';
    const dimensions = Array.from(new Set(rows.map(function (row) { return row.dimension; }))).sort();
    dimensionFilter.innerHTML = '<option value="all">All dimensions</option>' + dimensions.map(function (dimension) {
      return '<option value="' + escapeHtml(dimension) + '">' + escapeHtml(dimension.replace(/_/g, ' ')) + '</option>';
    }).join('');
    if (dimensions.includes(current)) dimensionFilter.value = current;
  }

  function filteredTaskRows(rows) {
    const dimension = dimensionFilter.value || 'all';
    const query = (taskSearch.value || '').trim().toLowerCase();
    const onlyDifferent = diffOnly.checked;
    let filtered = rows.filter(function (row) {
      if (dimension !== 'all' && row.dimension !== dimension) return false;
      if (onlyDifferent && Math.abs(row.delta) < 0.0001) return false;
      if (!query) return true;
      const haystack = [row.scenario_id, row.name, row.dimension, row.difficulty].join(' ').toLowerCase();
      return haystack.includes(query);
    });

    const sortKey = taskSort.value || 'delta_abs';
    filtered.sort(function (a, b) {
      if (sortKey === 'delta_a') return b.delta - a.delta;
      if (sortKey === 'delta_b') return a.delta - b.delta;
      if (sortKey === 'a_score') return (b.scoreA || 0) - (a.scoreA || 0);
      if (sortKey === 'b_score') return (b.scoreB || 0) - (a.scoreB || 0);
      if (sortKey === 'scenario') return String(a.scenario_id).localeCompare(String(b.scenario_id));
      return Math.abs(b.delta) - Math.abs(a.delta);
    });
    return filtered;
  }

  function scoreCell(score, strict) {
    if (score == null) return '<span class="modelpk-missing">NA</span>';
    return [
      '<div class="modelpk-task-score">',
      '  <div class="modelpk-score-track"><i style="width:' + scoreWidth(score, 'percent') + '%"></i></div>',
      '  <strong>' + formatMetric(score, 'percent') + '</strong>',
      '  <span>' + (strict ? 'strict' : 'soft') + '</span>',
      '</div>'
    ].join('');
  }

  function renderTasks(modelA, modelB, rows) {
    const filtered = filteredTaskRows(rows);
    taskHeadA.textContent = modelA.model_name;
    taskHeadB.textContent = modelB.model_name;

    const wins = filtered.reduce(function (acc, row) {
      if (row.scoreA == null || row.scoreB == null || Math.abs(row.delta) < 0.0001) acc.tie += 1;
      else if (row.delta > 0) acc.a += 1;
      else acc.b += 1;
      return acc;
    }, { a: 0, b: 0, tie: 0 });

    taskSummary.innerHTML = [
      '<span>Showing <strong>' + filtered.length + '</strong> tasks</span>',
      '<span>A wins <strong>' + wins.a + '</strong></span>',
      '<span>B wins <strong>' + wins.b + '</strong></span>',
      '<span>Ties <strong>' + wins.tie + '</strong></span>'
    ].join('');

    taskRows.innerHTML = filtered.map(function (row) {
      const deltaClass = row.delta > 0 ? 'positive' : row.delta < 0 ? 'negative' : 'neutral';
      const winner = Math.abs(row.delta) < 0.0001 ? 'Tie' : (row.delta > 0 ? 'A' : 'B');
      return [
        '<tr>',
        '  <td><div class="bench-model-cell"><span>' + escapeHtml(row.scenario_id) + '</span><strong>' + escapeHtml(row.name) + '</strong></div></td>',
        '  <td>' + escapeHtml(row.dimension) + '</td>',
        '  <td>' + escapeHtml(row.difficulty) + '</td>',
        '  <td>' + scoreCell(row.scoreA, row.strictA) + '</td>',
        '  <td>' + scoreCell(row.scoreB, row.strictB) + '</td>',
        '  <td><span class="modelpk-task-delta ' + deltaClass + '">' + formatDelta(row.delta, 'percent') + '</span></td>',
        '  <td><span class="modelpk-winner-pill ' + deltaClass + '">' + winner + '</span></td>',
        '</tr>'
      ].join('');
    }).join('');
  }

  function updateUrl(aId, bId) {
    const params = new URLSearchParams(window.location.search);
    params.set('a', aId);
    params.set('b', bId);
    window.history.replaceState({}, '', window.location.pathname + '?' + params.toString());
  }

  function render() {
    const modelA = modelById.get(selectA.value);
    const modelB = modelById.get(selectB.value);
    if (!modelA || !modelB) return;

    if (modelA.id === modelB.id) {
      warning.hidden = false;
      warning.textContent = 'Choose two different models to compare.';
      summaryGrid.innerHTML = '';
      verdict.innerHTML = '';
      dimensionGrid.innerHTML = '';
      taskRows.innerHTML = '';
      taskSummary.innerHTML = '';
      return;
    }

    warning.hidden = true;
    const rows = allScenarioRows(modelA, modelB);
    populateDimensionFilter(rows);
    renderSummary(modelA, modelB);
    renderVerdict(modelA, modelB, rows);
    renderDimensions(modelA, modelB);
    renderTasks(modelA, modelB, rows);
    updateUrl(modelA.id, modelB.id);
  }

  function setDefaultSelection() {
    const params = new URLSearchParams(window.location.search);
    const aParam = params.get('a');
    const bParam = params.get('b');
    const first = rankedModels[0] && rankedModels[0].id;
    const second = rankedModels[1] && rankedModels[1].id;
    selectA.value = modelById.has(aParam) ? aParam : first;
    selectB.value = modelById.has(bParam) && bParam !== selectA.value ? bParam : second;
  }

  populateModelOptions();
  setDefaultSelection();
  render();

  selectA.addEventListener('change', render);
  selectB.addEventListener('change', render);
  dimensionFilter.addEventListener('change', render);
  taskSort.addEventListener('change', render);
  taskSearch.addEventListener('input', render);
  diffOnly.addEventListener('change', render);

  swapButton.addEventListener('click', function () {
    const a = selectA.value;
    selectA.value = selectB.value;
    selectB.value = a;
    render();
  });

  resetButton.addEventListener('click', function () {
    selectA.value = rankedModels[0] && rankedModels[0].id;
    selectB.value = rankedModels[1] && rankedModels[1].id;
    dimensionFilter.value = 'all';
    taskSort.value = 'delta_abs';
    taskSearch.value = '';
    diffOnly.checked = false;
    render();
  });
});
