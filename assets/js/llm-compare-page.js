(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var dataEl = document.getElementById('cp-data');
    var root = document.getElementById('cp-root');
    if (!dataEl || !root || !window.LLMCore) return;
    var C = window.LLMCore;
    var board;
    try { board = JSON.parse(dataEl.textContent); } catch (err) { return; }

    var meta = C.benchMeta(board);
    var benchLabels = meta.labels;
    var collections = C.collections(board, benchLabels);
    var sm = C.scoreMap(board.rows);
    var overallRank = C.computeRanking(sm, collections.Overall.keys, collections.Overall.minBench);
    var rankOf = {};
    overallRank.results.forEach(function (r, i) { rankOf[r.mk] = { rank: i + 1, r: r }; });

    var options = Object.keys(sm).sort(function (a, b) {
      var ra = rankOf[a] ? rankOf[a].rank : 1e9, rb = rankOf[b] ? rankOf[b].rank : 1e9;
      if (ra !== rb) return ra - rb;
      return a.localeCompare(b);
    });

    var params = new URLSearchParams(window.location.search);
    function companyKey(name) {
      for (var i = 0; i < options.length; i++) { if (options[i].split('|')[1] === name) return options[i]; }
      return null;
    }
    var selA = params.get('a') ? companyKey(params.get('a')) : null;
    var selB = params.get('b') ? companyKey(params.get('b')) : null;
    if (!selA) selA = overallRank.results[0] ? overallRank.results[0].mk : options[0];
    if (!selB) selB = overallRank.results[1] ? overallRank.results[1].mk : options[1];
    if (selA === selB && options.length > 1) selB = options[selA === options[0] ? 1 : 0];

    root.innerHTML =
      '<div class="cp-card"><div class="cp-pick">' +
      '<div><label for="cp-a">模型 A</label><select id="cp-a"></select></div>' +
      '<button class="cp-swap" id="cp-swap" type="button">⇄ 互换</button>' +
      '<div><label for="cp-b">模型 B</label><select id="cp-b"></select></div>' +
      '</div><div class="cp-toolbar" style="margin-top:12px;"><label><input type="checkbox" id="cp-all"> 包含全部共有 bench（不限于综合排名 Overall）</label></div>' +
      '<div id="cp-body"></div></div>';

    var elA = document.getElementById('cp-a'), elB = document.getElementById('cp-b');
    options.forEach(function (mk) {
      var p = mk.split('|');
      [elA, elB].forEach(function (sel) {
        var o = document.createElement('option');
        o.value = mk;
        o.textContent = p[1] + '（' + p[0] + '）' + (rankOf[mk] ? ' · #' + rankOf[mk].rank : '');
        sel.appendChild(o);
      });
    });
    elA.value = selA; elB.value = selB;

    function fmt(v) { return Math.round(v * 100) / 100; }

    function render() {
      var A = elA.value, B = elB.value;
      var all = document.getElementById('cp-all').checked;
      var keys = all ? Object.keys(benchLabels) : overallRank.validKeys;
      var shared = [];
      keys.forEach(function (bk) {
        if (sm[A].hasOwnProperty(bk) && sm[B].hasOwnProperty(bk)) shared.push(bk);
      });
      var winA = [], winB = [], draw = [];
      shared.forEach(function (bk) {
        var a = sm[A][bk], b = sm[B][bk];
        var item = { bk: bk, a: a, b: b, m: (a - b) / Math.max(Math.abs(a), Math.abs(b), 1e-9) };
        if (a > b) winA.push(item); else if (b > a) winB.push(item); else draw.push(item);
      });
      winA.sort(function (x, y) { return y.m - x.m; });
      winB.sort(function (x, y) { return x.m - y.m; });

      var pa = A.split('|'), pb = B.split('|');
      var ra = rankOf[A], rb = rankOf[B];
      var total = shared.length || 1;
      var html = '<div class="cp-sum">';
      html += '<div class="cp-a"><div class="cp-side"><span class="cp-name"><a href="../model/?m=' + encodeURIComponent(pa[1]) + '">' + C.escapeHtml(pa[1]) + '</a></span><span class="cp-meta">' + C.escapeHtml(pa[0]) + (ra ? ' · 综合 #' + ra.rank + ' · 得分率 ' + (ra.r.scoreRate * 100).toFixed(1) + '%' : '') + '</span></div><div class="cp-sum-num">' + winA.length + ' 领先</div></div>';
      html += '<div class="cp-mid"><div class="cp-draw">' + draw.length + ' 打平</div><div class="cp-meta" style="font-size:0.78rem;color:#8a8a84;">共有 ' + shared.length + ' 个 bench</div></div>';
      html += '<div class="cp-b" style="text-align:right;"><div class="cp-side" style="justify-content:flex-end;"><span class="cp-meta">' + (rb ? '综合 #' + rb.rank + ' · 得分率 ' + (rb.r.scoreRate * 100).toFixed(1) + '% · ' : '') + C.escapeHtml(pb[0]) + '</span><span class="cp-name"><a href="../model/?m=' + encodeURIComponent(pb[1]) + '">' + C.escapeHtml(pb[1]) + '</a></span></div><div class="cp-sum-num">' + winB.length + ' 领先</div></div>';
      html += '</div>';
      html += '<div class="cp-bar"><div class="cp-seg-a" style="width:' + (winA.length / total * 100) + '%"></div><div class="cp-seg-d" style="width:' + (draw.length / total * 100) + '%"></div><div class="cp-seg-b" style="width:' + (winB.length / total * 100) + '%"></div></div>';
      html += '<div class="cp-note">口径与综合排名对局一致：Overall 有效 bench、每 bench 取 preferred/最高分；' + (all ? '当前显示全部共有 bench。' : '勾选"包含全部共有 bench"可看综合之外的维度。') + '</div>';

      function rows(items, cls) {
        if (!items.length) return '<div class="cp-note">无</div>';
        return items.map(function (it) {
          var w = Math.min(50, Math.abs(it.m) * 50).toFixed(1);
          var fill = it.a === it.b ? '' : (it.a > it.b ? '<div class="cp-fill cp-fill-a" style="width:' + w + '%"></div>' : '<div class="cp-fill cp-fill-b" style="width:' + w + '%"></div>');
          return '<div class="cp-row"><div class="cp-bench">' + C.escapeHtml(benchLabels[it.bk]) + '</div>' +
            '<div class="cp-val ' + (it.a > it.b ? 'cp-hi-a' : '') + '">' + fmt(it.a) + '</div>' +
            '<div class="cp-track">' + fill + '</div>' +
            '<div class="cp-val ' + (it.b > it.a ? 'cp-hi-b' : '') + '">' + fmt(it.b) + '</div></div>';
        }).join('');
      }

      html += '<div class="cp-sec cp-sec-a">' + C.escapeHtml(pa[1]) + ' 领先的 bench<small>' + winA.length + '</small></div>' + rows(winA);
      html += '<div class="cp-sec cp-sec-d">打平<small>' + draw.length + '</small></div>' + rows(draw);
      html += '<div class="cp-sec cp-sec-b">' + C.escapeHtml(pb[1]) + ' 领先的 bench<small>' + winB.length + '</small></div>' + rows(winB);

      document.getElementById('cp-body').innerHTML = html;
      try {
        var q = new URLSearchParams();
        q.set('a', pa[1]); q.set('b', pb[1]);
        history.replaceState(null, '', window.location.pathname + '?' + q.toString());
      } catch (e) {}
    }

    elA.addEventListener('change', render);
    elB.addEventListener('change', render);
    document.getElementById('cp-all').addEventListener('change', render);
    document.getElementById('cp-swap').addEventListener('click', function () {
      var t = elA.value; elA.value = elB.value; elB.value = t; render();
    });
    render();
  });
})();
