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
  var ACCENT = '#e0825f';
  var ACCENT_DEEP = '#c45a3c';
  var INK = '#f5f2ec';
  var SUB = '#a09d94';
  var LINE = 'rgba(255, 255, 255, 0.08)';
  var CARD_W = 1080;
  var PAD = 64;
  var ROW_H = 86;
  var HEADER_H = 210;
  var FOOTER_H = 128;
  var SCALE = 2;

  function rowsOf(card) {
    return Array.prototype.map.call(card.querySelectorAll('tbody tr'), function (tr) {
      return {
        rank: parseInt(tr.dataset.rank, 10),
        model: tr.dataset.model || '',
        company: tr.dataset.company || '',
        score: tr.dataset.score || '',
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

  function drawCard(meta, rows) {
    var height = HEADER_H + rows.length * ROW_H + FOOTER_H;
    var canvas = document.createElement('canvas');
    canvas.width = CARD_W * SCALE;
    canvas.height = height * SCALE;
    var ctx = canvas.getContext('2d');
    ctx.scale(SCALE, SCALE);

    var bg = ctx.createLinearGradient(0, 0, CARD_W, height);
    bg.addColorStop(0, '#1d1f26');
    bg.addColorStop(1, '#101218');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, CARD_W, height);

    // accent edge + brand dot
    var edge = ctx.createLinearGradient(0, 0, CARD_W, 0);
    edge.addColorStop(0, ACCENT_DEEP);
    edge.addColorStop(1, '#8a3a22');
    ctx.fillStyle = edge;
    ctx.fillRect(0, 0, CARD_W, 10);

    ctx.fillStyle = ACCENT;
    roundRect(ctx, PAD, 52, 14, 14, 4);
    ctx.fill();
    ctx.fillStyle = SUB;
    ctx.font = '800 22px ' + FONT;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
    ctx.fillText('SUYOUMO · LLM 模型榜', PAD + 30, 66);

    // title + range chip
    ctx.fillStyle = INK;
    ctx.font = '900 58px ' + FONT;
    var titleY = 148;
    ctx.fillText(meta.title, PAD, titleY);
    var titleW = ctx.measureText(meta.title).width;

    ctx.fillStyle = 'rgba(224, 130, 95, 0.16)';
    var chipW = 118;
    roundRect(ctx, PAD + titleW + 22, titleY - 44, chipW, 50, 25);
    ctx.fill();
    ctx.fillStyle = ACCENT;
    ctx.font = '800 26px ' + FONT;
    ctx.textAlign = 'center';
    ctx.fillText('TOP ' + meta.start, PAD + titleW + 22 + chipW / 2, titleY - 10);

    ctx.textAlign = 'left';
    ctx.fillStyle = SUB;
    ctx.font = '600 27px ' + FONT;
    ctx.fillText(meta.subtitle, PAD, titleY + 44);

    ctx.strokeStyle = LINE;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(PAD, HEADER_H - 14);
    ctx.lineTo(CARD_W - PAD, HEADER_H - 14);
    ctx.stroke();

    // rows
    rows.forEach(function (row, i) {
      var y = HEADER_H + i * ROW_H;
      var cy = y + ROW_H / 2;

      if (i % 2 === 1) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.028)';
        roundRect(ctx, PAD - 18, y + 8, CARD_W - (PAD - 18) * 2, ROW_H - 16, 16);
        ctx.fill();
      }

      var badgeFill = 'rgba(255, 255, 255, 0.07)';
      var badgeInk = SUB;
      if (row.rank === 1) { badgeFill = '#f0ede6'; badgeInk = '#16181d'; }
      else if (row.rank === 2) { badgeFill = '#585b62'; badgeInk = '#f5f3ee'; }
      else if (row.rank === 3) { badgeFill = 'rgba(224, 130, 95, 0.24)'; badgeInk = ACCENT; }
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
      var nameX = PAD + 92;
      ctx.fillText(row.model, nameX, cy - 4);
      if (row.isNew) {
        var nameW = ctx.measureText(row.model).width;
        ctx.fillStyle = ACCENT_DEEP;
        roundRect(ctx, nameX + nameW + 14, cy - 27, 66, 28, 8);
        ctx.fill();
        ctx.fillStyle = '#fff';
        ctx.font = '800 16px ' + FONT;
        ctx.fillText('NEW', nameX + nameW + 14 + 33, cy - 7);
      }
      ctx.fillStyle = SUB;
      ctx.font = '600 23px ' + FONT;
      ctx.fillText(row.company, nameX, cy + 27);

      ctx.textAlign = 'right';
      ctx.fillStyle = row.rank <= 3 ? ACCENT : '#e3e0d8';
      ctx.font = '800 44px ' + MONO;
      ctx.fillText(row.score, CARD_W - PAD, cy + 14);
    });

    // footer
    var fy = height - FOOTER_H + 52;
    ctx.strokeStyle = LINE;
    ctx.beginPath();
    ctx.moveTo(PAD, fy - 44);
    ctx.lineTo(CARD_W - PAD, fy - 44);
    ctx.stroke();

    ctx.textAlign = 'left';
    ctx.fillStyle = SUB;
    ctx.font = '600 24px ' + FONT;
    ctx.fillText('得分 = 对局得分率（win rate）· ' + meta.asOf + ' 快照', PAD, fy);
    ctx.fillStyle = ACCENT;
    ctx.font = '800 24px ' + FONT;
    ctx.textAlign = 'right';
    ctx.fillText('suyoumo.github.io/llm-leaderboard', CARD_W - PAD, fy);

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

      var total = card.querySelectorAll('tbody tr').length;
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
