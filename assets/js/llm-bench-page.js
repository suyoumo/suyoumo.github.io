(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var dataEl = document.getElementById('llm-bench-data');
    var root = document.getElementById('llm-bench-page');
    if (!dataEl || !root || !window.LLMCore) return;
    var C = window.LLMCore;
    var board;
    try { board = JSON.parse(dataEl.textContent); } catch (err) { return; }

    var key = new URLSearchParams(window.location.search).get('b') || '';
    var meta = C.benchMeta(board);
    var benchLabels = meta.labels, benchCat = meta.cat;

    var notFound = function () {
      root.innerHTML = '<div class="bp-hero"><h1>未找到 benchmark</h1>' +
        '<p class="bp-meta" style="margin-top:8px;">没有 key 为 “' + C.escapeHtml(key) + '” 的 benchmark，请从榜单表头进入。</p></div>';
    };
    if (!key || !benchLabels[key]) { notFound(); return; }

    var collections = C.collections(board, benchLabels);
    var inColl = {};
    Object.keys(collections).forEach(function (n) {
      if (collections[n].keys.indexOf(key) !== -1) inColl[n] = String(collections[n].label || n).replace(/[\uFE0F\u200B]/g, '').trim();
    });

    // A few benchmarks live in more than one category — list them all.
    var catNames = [];
    (board.categories || []).forEach(function (c) {
      (c.columns || []).forEach(function (col) {
        if (col.key === key && catNames.indexOf(c.name) === -1) catNames.push(c.name);
      });
    });

    // Collect every score entry for this benchmark, merging duplicate model rows.
    var models = [];           // stable order of first appearance
    var byMk = {};
    (board.rows || []).forEach(function (r) {
      var mk = r.company + '|' + r.model;
      if (!byMk[mk]) { byMk[mk] = { company: r.company, model: r.model, entries: [] }; models.push(mk); }
      var e = (r.scores || {})[key];
      if (e && e.length) byMk[mk].entries = byMk[mk].entries.concat(e);
    });

    // Ranking value follows the main board's scoreMap rule: drop excluded
    // entries, prefer preferred sources, take the max of what remains.
    var rankingValue = function (entries) {
      var e = entries.filter(function (s) { return !s.exclude_from_ranking; });
      if (!e.length) return NaN;
      var pref = e.filter(function (s) { return s.preferred; });
      var pool = pref.length ? pref : e;
      var maxV = NaN;
      pool.forEach(function (s) {
        var v = parseFloat(s.value);
        if (!isNaN(v) && (isNaN(maxV) || v > maxV)) maxV = v;
      });
      return maxV;
    };
    var displayBest = function (entries, excluded) {
      var pool = entries.filter(function (s) { return !!s.exclude_from_ranking === !!excluded; });
      var best = null, bestV = NaN;
      pool.forEach(function (s) {
        var v = parseFloat(s.value);
        if (best === null || (!isNaN(v) && (isNaN(bestV) || v > bestV))) { best = s; bestV = v; }
      });
      return best;
    };

    var ranked = [], muted = [];
    models.forEach(function (mk) {
      var m = byMk[mk];
      if (!m.entries.length) return;
      var rv = rankingValue(m.entries);
      if (isNaN(rv)) muted.push({ mk: mk, m: m, v: parseFloat(displayBest(m.entries, true).value) || 0 });
      else ranked.push({ mk: mk, m: m, v: rv });
    });
    ranked.sort(function (a, b) { return b.v - a.v || a.mk.localeCompare(b.mk); });
    muted.sort(function (a, b) { return b.v - a.v || a.mk.localeCompare(b.mk); });

    var vals = ranked.map(function (r) { return r.v; }).sort(function (a, b) { return a - b; });
    var median = vals.length ? (vals.length % 2 ? vals[(vals.length - 1) / 2] : (vals[vals.length / 2 - 1] + vals[vals.length / 2]) / 2) : NaN;
    var mean = vals.length ? vals.reduce(function (s, v) { return s + v; }, 0) / vals.length : NaN;
    var top = ranked[0];
    var maxV = top ? top.v : (muted.length ? muted[0].v : 1);

    // ===== Hero =====
    var pills = '<span class="bp-pill">分类 <b>' + C.escapeHtml(catNames.join(' / ')) + '</b></span>';
    pills += '<span class="bp-pill">报分模型 <b>' + (ranked.length + muted.length) + '</b></span>';
    if (ranked.length) pills += '<span class="bp-pill">中位数 <b>' + median.toFixed(1) + '</b></span>';
    Object.keys(inColl).forEach(function (n) {
      pills += '<span class="bp-pill">计入 ' + C.escapeHtml(String(inColl[n]).trim()) + ' 排名</span>';
    });
    var html = '<div class="bp-hero">' +
      '<div class="bp-cat">' + C.escapeHtml(catNames[0] || 'Benchmark') + '</div>' +
      '<h1>' + C.escapeHtml(benchLabels[key]) + '</h1>' +
      '<span class="bp-key">' + C.escapeHtml(key) + '</span>' +
      '<div class="bp-pills">' + pills + '</div></div>';

    // ===== Stat tiles =====
    html += '<div class="bp-tiles">';
    html += '<div class="bp-tile"><h3>报分模型</h3><div class="bp-num">' + ranked.length + (muted.length ? ' <small>+ ' + muted.length + ' 不计排名</small>' : '') + '</div><div class="bp-sub">共 ' + (ranked.length + muted.length) + ' 个模型有数据</div></div>';
    if (top) {
      html += '<div class="bp-tile"><h3>最高分</h3><div class="bp-num">' + C.escapeHtml(displayBest(top.m.entries, false).value) + '</div><div class="bp-sub"><a href="../model/?m=' + encodeURIComponent(top.m.model) + '">' + C.escapeHtml(top.m.model) + '</a></div></div>';
      html += '<div class="bp-tile"><h3>中位数</h3><div class="bp-num">' + median.toFixed(1) + '</div><div class="bp-sub">全部报分模型的中位</div></div>';
      html += '<div class="bp-tile"><h3>平均分</h3><div class="bp-num">' + mean.toFixed(1) + '</div><div class="bp-sub">仅计参与排名的分数</div></div>';
    }
    html += '</div>';

    // ===== Rows =====
    var total = ranked.length + muted.length;
    html += '<div class="bp-sec-title">全部模型分数<small>按参与排名的分数降序；灰色条为不计入排名的报分</small></div>';
    html += '<div class="bp-toolbar"><div class="bp-search"><input id="bpSearch" type="search" placeholder="搜索模型或厂商…" autocomplete="off"></div><span class="bp-count" id="bpCount"></span></div>';
    html += '<div class="bp-card" id="bpList">';

    var rowHtml = function (r, rankNo, isMuted) {
      var bestEntry = displayBest(r.m.entries, isMuted);
      if (!bestEntry) return '';
      var pct = Math.max(2, Math.min(100, (r.v / (maxV || 1)) * 100));
      var rc = isMuted ? '#8a8a84' : C.rankColor(rankNo, total);
      var entries = '';
      r.m.entries.forEach(function (s) {
        var excluded = !!s.exclude_from_ranking;
        var isBest = s === bestEntry;
        var src = s.source_label
          ? (s.source_url
            ? '<a class="bp-src" href="' + C.escapeHtml(s.source_url) + '" target="_blank" rel="noopener">' + C.escapeHtml(s.source_label) + '</a>'
            : '<span class="bp-src">' + C.escapeHtml(s.source_label) + '</span>')
          : '';
        var flags = '';
        if (excluded) flags += '<span class="bp-flag bp-flag-exc">' + (s.partial ? '部分/不计排名' : '不计排名') + '</span>';
        if (s.preferred) flags += '<span class="bp-flag bp-flag-pref">优选</span>';
        entries += '<span class="bp-entry' + (isBest ? ' bp-best' : '') + (excluded ? ' bp-excluded' : '') + '">' +
          '<span class="bp-dot"></span><strong>' + C.escapeHtml(s.value) + '</strong>' + src + flags + '</span>';
      });
      return '<div class="bp-row' + (isMuted ? ' bp-muted' : '') + '" data-hay="' + C.escapeHtml((r.m.model + ' ' + r.m.company).toLowerCase()) + '">' +
        '<div class="bp-rank" style="color:' + rc + ';">' + (isMuted ? '—' : '#' + rankNo) + '</div>' +
        '<div class="bp-identity"><a class="bp-model" href="../model/?m=' + encodeURIComponent(r.m.model) + '"><span>' + C.escapeHtml(r.m.model) + '</span></a>' +
        '<div class="bp-company">' + C.escapeHtml(r.m.company) + '</div>' +
        '<div class="bp-entries">' + entries + '</div></div>' +
        '<div class="bp-value-col"><div class="bp-value">' + C.escapeHtml(bestEntry.value) + (isMuted ? '<small>不计排名</small>' : '') + '</div>' +
        '<div class="bp-bar"><span style="width:' + pct.toFixed(1) + '%"></span></div></div></div>';
    };
    var listHtml = '';
    ranked.forEach(function (r, i) { listHtml += rowHtml(r, i + 1, false); });
    muted.forEach(function (r) { listHtml += rowHtml(r, 0, true); });
    html += listHtml || '<div class="bp-empty">该 benchmark 暂无模型分数</div>';
    html += '</div>';

    root.innerHTML = html;

    // ===== Search filter =====
    var search = document.getElementById('bpSearch');
    var countEl = document.getElementById('bpCount');
    var list = document.getElementById('bpList');
    var applyFilter = function () {
      var q = (search.value || '').toLowerCase().trim();
      var visible = 0;
      list.querySelectorAll('.bp-row').forEach(function (el) {
        var show = !q || el.dataset.hay.indexOf(q) !== -1;
        el.style.display = show ? '' : 'none';
        if (show) visible++;
      });
      countEl.textContent = q ? ('匹配 ' + visible + ' / ' + total + ' 个模型') : ('共 ' + total + ' 个模型');
    };
    search.addEventListener('input', applyFilter);
    applyFilter();
  });
})();
