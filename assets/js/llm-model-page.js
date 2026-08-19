(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var dataEl = document.getElementById('llm-model-data');
    var root = document.getElementById('llm-model-page');
    if (!dataEl || !root || !window.LLMCore) return;
    var C = window.LLMCore;
    var board;
    try { board = JSON.parse(dataEl.textContent); } catch (err) { return; }

    var name = new URLSearchParams(window.location.search).get('m') || '';
    var modelRows = (board.rows || []).filter(function (r) { return r.model === name; });
    if (!name || !modelRows.length) {
      root.innerHTML = '<div class="mp-card"><h1>未找到模型</h1><p class="mp-meta">没有名为 “' + C.escapeHtml(name) + '” 的模型。</p></div>';
      return;
    }

    var meta = C.benchMeta(board);
    var benchLabels = meta.labels, benchCat = meta.cat;
    var collections = C.collections(board, benchLabels);
    var setOf = {};
    Object.keys(collections).forEach(function (n) { setOf[n] = {}; collections[n].keys.forEach(function (k) { setOf[n][k] = true; }); });

    var sm = C.scoreMap(board.rows);
    var mk = modelRows[0].company + '|' + modelRows[0].model;

    var html = '';
    html += '<div class="mp-card"><div class="mp-head"><h1>' + C.escapeHtml(name) + '</h1>' +
      '<span class="mp-meta">' + C.escapeHtml(modelRows[0].company) + '</span>' +
      modelRows.map(function (r) { return '<span class="mp-meta">模式 ' + C.escapeHtml(r.mode || '--') + '</span>'; }).join('') +
      modelRows.map(function (r) { return r.released ? '<span class="mp-meta">发布 ' + C.escapeHtml(r.released) + '</span>' : ''; }).join('') +
      '<a class="mp-meta" style="color:#b4552d;" href="../compare/?a=' + encodeURIComponent(name) + '">对比其他模型 →</a>' +
      '</div>';
    var seenSrc = {};
    var srcHtml = '';
    modelRows.forEach(function (r) {
      (r.sources || []).forEach(function (s) {
        if (seenSrc[s.label]) return; seenSrc[s.label] = true;
        srcHtml += s.url ? '<a href="' + C.escapeHtml(s.url) + '" target="_blank" rel="noopener">' + C.escapeHtml(s.label) + '</a>' : '<a>' + C.escapeHtml(s.label) + '</a>';
      });
    });
    if (srcHtml) html += '<div class="mp-sources">' + srcHtml + '</div>';

    var rankData = {};
    ['Overall', 'Code', 'General'].forEach(function (n) {
      rankData[n] = C.computeRanking(sm, collections[n].keys, collections[n].minBench);
    });

    html += '<div class="mp-tiles">';
    ['Overall', 'Code', 'General'].forEach(function (n) {
      var rd = rankData[n];
      var idx = -1;
      rd.results.forEach(function (r, i) { if (r.mk === mk) idx = i; });
      if (idx >= 0) {
        var r = rd.results[idx];
        html += '<div class="mp-tile"><h3>' + C.escapeHtml((collections[n].label || n).trim()) + ' 排名</h3>' +
          '<div class="mp-rank">#' + (idx + 1) + '<span class="mp-meta"> / ' + rd.results.length + '</span></div>' +
          '<div class="mp-sub">得分率 ' + (r.scoreRate * 100).toFixed(1) + '% · ' + r.wins + '胜/' + r.draws + '平/' + r.losses + '负</div>' +
          '<div class="mp-sub">均百分位 ' + r.avg.toFixed(3) + ' · 命中 ' + r.cnt + '/' + rd.validKeys.length + ' bench</div></div>';
      } else {
        html += '<div class="mp-tile mp-out"><h3>' + C.escapeHtml((collections[n].label || n).trim()) + ' 排名</h3>' +
          '<div class="mp-rank">--</div><div class="mp-sub">未达入围线（≥' + collections[n].minBench + ' 个 bench）</div></div>';
      }
    });
    html += '</div></div>';

    html += '<h2 class="mp-sec-title">综合排名各榜单分数<small>颜色为该 bench 上的百分位位次（绿=靠前）</small></h2><div class="mp-card">';
    ['Overall', 'Code', 'General'].forEach(function (n) {
      var rd = rankData[n];
      var chips = '';
      var catOrder = [];
      collections[n].keys.forEach(function (bk) {
        var cat = benchCat[bk] || 'Other';
        if (catOrder.indexOf(cat) === -1) catOrder.push(cat);
      });
      catOrder.forEach(function (cat) {
        var group = '';
        collections[n].keys.forEach(function (bk) {
          if ((benchCat[bk] || 'Other') !== cat) return;
          if (!rd.br[bk] || !rd.br[bk][mk]) return;
          var pooled = sm[mk][bk];
          if (pooled === undefined) return;
          var rk = rd.br[bk][mk], tot = Object.keys(rd.br[bk]).length;
          group += '<span class="mp-chip" style="background:' + C.rankColor(rk, tot) + ';color:' + C.rankTextColor(rk, tot) + ';">' +
            '<span class="mp-chip-label">' + C.escapeHtml(benchLabels[bk]) + '</span><span class="mp-chip-val">' + pooled + '</span>' +
            '<span class="mp-chip-label">#' + rk + '/' + tot + '</span></span>';
        });
        if (group) chips += '<div class="mp-coll-block"><div class="mp-coll-head"><span>' + C.escapeHtml(cat) + '</span></div><div class="mp-chips">' + group + '</div></div>';
      });
      html += '<div class="mp-coll-block"><div class="mp-coll-head"><strong>' + C.escapeHtml((collections[n].label || n).trim()) + '</strong><span>' + rd.validKeys.length + ' benchmarks</span></div>' + (chips || '<div class="mp-meta">该模型在此榜单没有分数</div>') + '</div>';
    });
    html += '</div>';

    html += '<h2 class="mp-sec-title">全部 benchmark 分数<small>徽章：综=Overall · C=Code · G=General</small></h2>';
    html += '<div class="mp-toolbar"><label><input type="checkbox" id="mp-only-composite"> 仅显示综合排名（Overall）包含的 bench</label></div>';
    html += '<div class="mp-card">';
    (board.categories || []).forEach(function (cat) {
      var items = [];
      (cat.columns || []).forEach(function (col) {
        var entries = [];
        modelRows.forEach(function (r) {
          var e = (r.scores || {})[col.key]; if (!e) return;
          e.forEach(function (s) { entries.push(s); });
        });
        if (!entries.length) return;
        var badges = '';
        if (setOf.Overall[col.key]) badges += '<span class="mp-badge mp-badge-o">综</span>';
        if (setOf.Code[col.key]) badges += '<span class="mp-badge mp-badge-c">C</span>';
        if (setOf.General[col.key]) badges += '<span class="mp-badge mp-badge-g">G</span>';
        var scores = entries.map(function (s) {
          return '<span class="mp-entry"><strong>' + C.escapeHtml(s.value) + '</strong>' + (s.source_label ? '<span class="mp-src">' + C.escapeHtml(s.source_label) + '</span>' : '') + '</span>';
        }).join('');
        items.push('<div class="mp-item" data-composite="' + (setOf.Overall[col.key] ? '1' : '0') + '"><div class="mp-bench">' + C.escapeHtml(col.label) + badges + '</div><div class="mp-scores">' + scores + '</div></div>');
      });
      if (!items.length) return;
      html += '<div class="mp-cat">' + C.escapeHtml(cat.name) + ' <span class="mp-meta">(' + items.length + ')</span></div><div class="mp-grid">' + items.join('') + '</div>';
    });
    html += '</div>';

    root.innerHTML = html;

    var cb = document.getElementById('mp-only-composite');
    if (cb) cb.addEventListener('change', function () {
      root.querySelectorAll('.mp-item').forEach(function (el) {
        el.style.display = (cb.checked && el.dataset.composite !== '1') ? 'none' : '';
      });
      root.querySelectorAll('.mp-cat').forEach(function (el) {
        var grid = el.nextElementSibling;
        var visible = grid ? Array.prototype.filter.call(grid.querySelectorAll('.mp-item'), function (it) { return it.style.display !== 'none'; }) : [];
        el.style.display = visible.length ? '' : 'none';
        if (grid) grid.style.display = visible.length ? '' : 'none';
      });
    });
  });
})();
