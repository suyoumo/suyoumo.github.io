/* Range-selectable PNG export for the monthly top-50 boards.
 *
 * The card targets Xiaohongshu sharing: 1080px-wide portrait image, large
 * model names and scores that stay readable at feed-thumbnail size. Each
 * board card carries an export bar with quick range presets plus custom
 * start/end inputs (at least 10 models). Rows are read from the card's
 * table via data-* attributes and painted on a 2x canvas.
 */
(function () {
  'use strict';

  var MIN_EXPORT = 10;
  var FONT = '"PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans SC", -apple-system, "Segoe UI", sans-serif';
  var MONO = 'ui-monospace, "SF Mono", Menlo, Consolas, monospace';
  // Anthropic-flavoured warm palette: ivory paper, coral accent, warm greys.
  var ACCENT = '#d97757';
  var ACCENT_DEEP = '#b8552f';
  var INK = '#1f1e1d';
  var SUB = '#7d7972';
  var FAINT = '#a9a49b';
  var LINE = '#e8e4da';
  var ROW_ALT = '#f4f1ea';
  var CARD_W = 1080;
  var PAD = 64;
  var ROW_H = 92;
  var HEADER_H = 268;
  var FOOTER_H = 168;
  var SCALE = 2;
  // Right-hand columns: the score keeps the hero position, the release date
  // sits in its own column on the far right with a matching header label.
  var DATE_COL_W = 140;
  var SCORE_RESERVE = 130;
  var SCORE_RIGHT = CARD_W - PAD - DATE_COL_W;
  var DATE_RIGHT = CARD_W - PAD;
  var NAME_X = PAD + 92;
  var NEW_CHIP_W = 76;

  // The monthly board ships two variants: "full" ranks every model, "ex" leaves
  // the post-trained models out so they take up no rank position. The page
  // shows "ex" until the reader asks for the full board.
  function activeVariant() {
    var page = document.querySelector('.llm-monthly-page');
    return (page && page.classList.contains('show-post-trained')) ? 'full' : 'ex';
  }

  function rowsOf(card) {
    return Array.prototype.map.call(
      card.querySelectorAll('tbody tr[data-board-variant="' + activeVariant() + '"]'),
      function (tr) {
        return {
          rank: parseInt(tr.dataset.rank, 10),
          model: tr.dataset.model || '',
          company: tr.dataset.company || '',
          trainingLabel: tr.dataset.trainingLabel || '',
          score: tr.dataset.score || '',
          released: tr.dataset.released || '',
          isNew: tr.dataset.new === 'true'
        };
      });
  }

  function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  // Wrap a model name onto at most two lines, splitting on spaces and hyphens
  // so long identifiers break cleanly instead of running off the card.
  function wrapModel(ctx, text, maxWidth) {
    var words = text.split(/(?=[ -])/);
    var lines = [''];
    for (var i = 0; i < words.length; i++) {
      var w = words[i];
      var candidate = (lines[lines.length - 1] + w).trim();
      if (ctx.measureText(candidate).width <= maxWidth || lines.length >= 2) {
        if (ctx.measureText(candidate).width > maxWidth && lines.length >= 2) {
          // second line still overflows: hard-truncate it
          var acc = '';
          for (var j = 0; j < w.length; j++) {
            if (ctx.measureText(acc + w[j] + '…').width > maxWidth) break;
            acc += w[j];
          }
          lines[lines.length - 1] = (lines[lines.length - 1] + acc).trim();
          lines.push('…');
          return lines;
        }
        lines[lines.length - 1] = candidate;
      } else {
        lines.push(w.trim());
      }
    }
    return lines.filter(function (l) { return l !== ''; });
  }

  function drawCard(meta, rows) {
    // rows needing a two-line name get extra height
    var measure = document.createElement('canvas').getContext('2d');
    measure.font = '750 37px ' + FONT;
    var nameMax = SCORE_RIGHT - SCORE_RESERVE - NAME_X;
    var wrapped = rows.map(function (row) {
      // a NEW chip sits right after the name, so leave room for it
      return wrapModel(measure, row.model, nameMax - (row.isNew ? NEW_CHIP_W : 0));
    });
    var totalH = wrapped.reduce(function (sum, lines, i) {
      return sum + (lines.length > 1 ? ROW_H + 34 : ROW_H);
    }, 0);

    var height = HEADER_H + totalH + FOOTER_H;
    var canvas = document.createElement('canvas');
    canvas.width = CARD_W * SCALE;
    canvas.height = height * SCALE;
    var ctx = canvas.getContext('2d');
    ctx.scale(SCALE, SCALE);

    // ivory paper
    var bg = ctx.createLinearGradient(0, 0, CARD_W, height);
    bg.addColorStop(0, '#faf8f3');
    bg.addColorStop(1, '#f2efe7');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, CARD_W, height);

    // accent top edge
    var edge = ctx.createLinearGradient(0, 0, CARD_W, 0);
    edge.addColorStop(0, ACCENT_DEEP);
    edge.addColorStop(1, ACCENT);
    ctx.fillStyle = edge;
    ctx.fillRect(0, 0, CARD_W, 9);

    ctx.fillStyle = ACCENT;
    roundRect(ctx, PAD, 54, 13, 13, 4);
    ctx.fill();
    ctx.fillStyle = SUB;
    ctx.font = '800 21px ' + FONT;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
    ctx.fillText('SUYOUMO · LLM 模型榜', PAD + 28, 68);

    // title + TOP-N chip; the title shrinks before the chip is ever pushed
    // off the card edge
    var titleY = 152;
    var chipW = 118;
    var availTitle = CARD_W - PAD * 2 - chipW - 22;
    ctx.fillStyle = INK;
    var titleSize = 56;
    ctx.font = '900 ' + titleSize + 'px ' + FONT;
    var titleW = ctx.measureText(meta.title).width;
    while (titleW > availTitle && titleSize > 34) {
      titleSize -= 2;
      ctx.font = '900 ' + titleSize + 'px ' + FONT;
      titleW = ctx.measureText(meta.title).width;
    }
    ctx.fillText(meta.title, PAD, titleY);

    var chipX = PAD + titleW + 22;
    ctx.fillStyle = 'rgba(217, 119, 87, 0.14)';
    roundRect(ctx, chipX, titleY - 42, chipW, 50, 25);
    ctx.fill();
    ctx.fillStyle = ACCENT_DEEP;
    ctx.font = '800 26px ' + FONT;
    ctx.textAlign = 'center';
    ctx.fillText('TOP ' + meta.start, chipX + chipW / 2, titleY - 8);

    ctx.textAlign = 'left';
    ctx.fillStyle = SUB;
    ctx.font = '600 27px ' + FONT;
    ctx.fillText(meta.subtitle, PAD, titleY + 42);

    // column labels for the two right-hand columns
    ctx.textAlign = 'right';
    ctx.fillStyle = FAINT;
    ctx.font = '700 19px ' + FONT;
    ctx.fillText('得分', SCORE_RIGHT, HEADER_H - 32);
    ctx.fillText('发布日期', DATE_RIGHT, HEADER_H - 32);

    ctx.strokeStyle = LINE;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(PAD, HEADER_H - 20);
    ctx.lineTo(CARD_W - PAD, HEADER_H - 20);
    ctx.stroke();

    // rows
    var y = HEADER_H;
    rows.forEach(function (row, i) {
      var lines = wrapped[i];
      var rowH = lines.length > 1 ? ROW_H + 34 : ROW_H;
      var cy = y + rowH / 2;

      if (i % 2 === 1) {
        ctx.fillStyle = ROW_ALT;
        roundRect(ctx, PAD - 18, y + 7, CARD_W - (PAD - 18) * 2, rowH - 14, 16);
        ctx.fill();
      }

      var badgeFill = '#eae6dc';
      var badgeInk = SUB;
      if (row.rank === 1) { badgeFill = ACCENT; badgeInk = '#fff'; }
      else if (row.rank === 2) { badgeFill = '#b9b2a5'; badgeInk = '#fff'; }
      else if (row.rank === 3) { badgeFill = 'rgba(217, 119, 87, 0.2)'; badgeInk = ACCENT_DEEP; }
      ctx.fillStyle = badgeFill;
      roundRect(ctx, PAD, cy - 29, 58, 58, 16);
      ctx.fill();
      ctx.fillStyle = badgeInk;
      ctx.font = '800 27px ' + FONT;
      ctx.textAlign = 'center';
      ctx.fillText(String(row.rank), PAD + 29, cy + 10);

      ctx.textAlign = 'left';
      ctx.fillStyle = INK;
      ctx.font = '750 37px ' + FONT;
      var nameX = NAME_X;
      if (lines.length > 1) {
        ctx.fillText(lines[0], nameX, cy - 4);
        ctx.fillText(lines[1], nameX, cy + 38);
      } else {
        ctx.fillText(lines[0], nameX, cy + 14);
      }
      // Measure the name while the 37px font is still active, then draw the
      // NEW chip — measuring later would use the vendor font and land on top.
      var nameW = ctx.measureText(lines[0]).width;
      if (row.isNew) {
        var chipX = nameX + nameW + 14;
        var chipY = lines.length > 1 ? cy - 24 : cy - 8;
        ctx.fillStyle = ACCENT;
        roundRect(ctx, chipX, chipY, 62, 28, 8);
        ctx.fill();
        ctx.fillStyle = '#fff';
        ctx.font = '800 16px ' + FONT;
        ctx.textAlign = 'center';
        ctx.fillText('NEW', chipX + 31, chipY + 20);
        ctx.textAlign = 'left';
      }

      ctx.fillStyle = SUB;
      ctx.font = '600 23px ' + FONT;
      var compY = lines.length > 1 ? cy + 76 : cy + 44;
      ctx.fillText(row.company, nameX, compY);
      if (row.trainingLabel) {
        var labelX = nameX + ctx.measureText(row.company).width + 14;
        ctx.font = '700 19px ' + FONT;
        var labelW = ctx.measureText(row.trainingLabel).width + 20;
        ctx.fillStyle = 'rgba(217, 119, 87, 0.12)';
        roundRect(ctx, labelX, compY - 23, labelW, 30, 8);
        ctx.fill();
        ctx.fillStyle = ACCENT_DEEP;
        ctx.fillText(row.trainingLabel, labelX + 10, compY);
      }

      ctx.textAlign = 'right';
      ctx.fillStyle = row.rank <= 3 ? ACCENT_DEEP : INK;
      ctx.font = '800 44px ' + MONO;
      ctx.fillText(row.score, SCORE_RIGHT, cy + 15);

      // release-date column, mirroring the table's 发布日期 cell
      ctx.fillStyle = row.released ? SUB : FAINT;
      ctx.font = '700 20px ' + MONO;
      ctx.fillText(row.released || '--', DATE_RIGHT, cy + 7);

      y += rowH;
    });

    // footer: the metric note and the site link sit on separate lines so they
    // cannot collide on narrow cards
    var fy = height - FOOTER_H + 48;
    ctx.strokeStyle = LINE;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(PAD, fy - 42);
    ctx.lineTo(CARD_W - PAD, fy - 42);
    ctx.stroke();

    ctx.textAlign = 'left';
    ctx.fillStyle = SUB;
    ctx.font = '600 23px ' + FONT;
    ctx.fillText('得分 = 对局得分率（win rate）· ' + meta.asOf + ' 快照', PAD, fy);
    ctx.fillStyle = ACCENT_DEEP;
    ctx.font = '800 22px ' + FONT;
    ctx.textAlign = 'left';
    ctx.fillText('suyoumo.github.io/llm-leaderboard', PAD, fy + 38);

    return canvas;
  }

  function download(canvas, filename) {
    if (canvas.toBlob) {
      canvas.toBlob(function (blob) {
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(function () { URL.revokeObjectURL(url); }, 4000);
      }, 'image/png');
    } else {
      var a2 = document.createElement('a');
      a2.href = canvas.toDataURL('image/png');
      a2.download = filename;
      document.body.appendChild(a2);
      a2.click();
      a2.remove();
    }
  }

  function init() {
    var bars = document.querySelectorAll('[data-export-card]');
    Array.prototype.forEach.call(bars, function (bar) {
      var card = bar.closest('.llm-monthly-card');
      var panel = bar.closest('[data-monthly-panel]');
      var msg = bar.querySelector('.llm-monthly-export-msg');
      var startEl = bar.querySelector('.llm-export-start');
      var endEl = bar.querySelector('.llm-export-end');
      var btn = bar.querySelector('.llm-export-btn');
      if (!card || !msg || !startEl || !endEl || !btn) return;

      var total = card.querySelectorAll('tbody tr[data-board-variant="' + activeVariant() + '"]').length;
      startEl.max = total;
      endEl.max = total;
      if (total < 30) endEl.value = Math.max(1, total);

      Array.prototype.forEach.call(bar.querySelectorAll('.llm-export-presets [data-range]'), function (chip) {
        chip.addEventListener('click', function () {
          var range = chip.dataset.range.split(',');
          startEl.value = Math.min(parseInt(range[0], 10), total);
          endEl.value = Math.min(parseInt(range[1], 10), total);
          say('已选择第 ' + startEl.value + '–' + endEl.value + ' 名', false);
        });
      });

      function say(text, isError) {
        msg.textContent = text;
        msg.classList.toggle('is-error', !!isError);
      }

      btn.addEventListener('click', function () {
        var start = parseInt(startEl.value, 10);
        var end = parseInt(endEl.value, 10);
        if (!start || !end || start < 1 || end < 1 || start > total || end > total) {
          say('名次需在 1–' + total + ' 之间', true);
          return;
        }
        if (start > end) { var t = start; start = end; end = t; }
        if (end - start + 1 < MIN_EXPORT) {
          say('每次至少导出 ' + MIN_EXPORT + ' 名（当前 ' + (end - start + 1) + ' 名）', true);
          return;
        }

        var all = rowsOf(card);
        var rows = all.slice(start - 1, end);
        var catKey = panel ? panel.dataset.monthlyPanel : 'board';
        var month = (bar.dataset.monthLabel || '').replace(/\s+/g, '');
        var board = bar.dataset.boardLabel || '';
        var meta = {
          title: month + ' · ' + (bar.dataset.catLabel || '') + board,
          subtitle: '第 ' + start + '–' + end + ' 名 · 对局得分率 · 共 ' + rows.length + ' 名',
          start: start,
          asOf: bar.dataset.asOf || ''
        };
        var filename = 'llm-board-' + month + '-' + catKey + '-' +
          (board.indexOf('国产') !== -1 ? 'domestic' : 'global') + '-' + start + '-' + end + '.png';
        download(drawCard(meta, rows), filename);
        say('已导出 ' + filename);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
