/* Range-selectable PNG export for the monthly top-50 boards.
 *
 * Each board card carries an export bar with start/end rank inputs. The
 * handler reads the rows straight from the card's table (data-* attributes),
 * validates the range (at least 10 models, within the board), paints a
 * share-style card on a 2x canvas and downloads it as a PNG.
 */
(function () {
  'use strict';

  var MIN_EXPORT = 10;
  var FONT = '"PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans SC", -apple-system, "Segoe UI", sans-serif';
  var MONO = 'ui-monospace, "SF Mono", Menlo, Consolas, monospace';
  var ACCENT = '#d4724f';
  var INK = '#f2efe9';
  var SUB = '#9a978f';
  var LINE = 'rgba(255, 255, 255, 0.07)';
  var CARD_W = 1000;
  var PAD = 56;
  var ROW_H = 68;
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
    var headerH = 150;
    var footerH = 86;
    var height = headerH + rows.length * ROW_H + footerH;
    var canvas = document.createElement('canvas');
    canvas.width = CARD_W * SCALE;
    canvas.height = height * SCALE;
    var ctx = canvas.getContext('2d');
    ctx.scale(SCALE, SCALE);

    var bg = ctx.createLinearGradient(0, 0, 0, height);
    bg.addColorStop(0, '#191b21');
    bg.addColorStop(1, '#111318');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, CARD_W, height);

    // header
    ctx.fillStyle = ACCENT;
    ctx.font = '800 15px ' + FONT;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
    ctx.fillText('S U Y O U M O  ·  L L M  L E A D E R B O A R D', PAD, 62);
    ctx.fillStyle = INK;
    ctx.font = '800 40px ' + FONT;
    ctx.fillText(meta.title, PAD, 112);
    ctx.fillStyle = SUB;
    ctx.font = '600 19px ' + FONT;
    ctx.fillText(meta.subtitle, PAD, 142);

    ctx.strokeStyle = LINE;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(PAD, headerH - 8);
    ctx.lineTo(CARD_W - PAD, headerH - 8);
    ctx.stroke();

    // rows
    rows.forEach(function (row, i) {
      var y = headerH + i * ROW_H;
      var cy = y + ROW_H / 2;

      if (i > 0) {
        ctx.strokeStyle = LINE;
        ctx.beginPath();
        ctx.moveTo(PAD, y);
        ctx.lineTo(CARD_W - PAD, y);
        ctx.stroke();
      }

      var badgeFill = 'rgba(255, 255, 255, 0.06)';
      var badgeInk = SUB;
      if (row.rank === 1) { badgeFill = '#f0ede6'; badgeInk = '#16181d'; }
      else if (row.rank === 2) { badgeFill = '#54575e'; badgeInk = '#f5f3ee'; }
      else if (row.rank === 3) { badgeFill = 'rgba(212, 114, 79, 0.22)'; badgeInk = ACCENT; }
      ctx.fillStyle = badgeFill;
      roundRect(ctx, PAD, cy - 22, 44, 44, 12);
      ctx.fill();
      ctx.fillStyle = badgeInk;
      ctx.font = '800 20px ' + FONT;
      ctx.textAlign = 'center';
      ctx.fillText(String(row.rank), PAD + 22, cy + 7);

      ctx.textAlign = 'left';
      ctx.fillStyle = INK;
      ctx.font = '700 25px ' + FONT;
      var nameX = PAD + 72;
      ctx.fillText(row.model, nameX, cy - 2);
      if (row.isNew) {
        var nameW = ctx.measureText(row.model).width;
        ctx.fillStyle = ACCENT;
        roundRect(ctx, nameX + nameW + 10, cy - 21, 52, 22, 6);
        ctx.fill();
        ctx.fillStyle = '#fff';
        ctx.font = '800 12px ' + FONT;
        ctx.fillText('NEW', nameX + nameW + 10 + 26, cy - 5);
      }
      ctx.fillStyle = SUB;
      ctx.font = '600 18px ' + FONT;
      ctx.fillText(row.company, nameX, cy + 22);

      ctx.textAlign = 'right';
      ctx.fillStyle = row.rank <= 3 ? ACCENT : '#dedbd3';
      ctx.font = '800 27px ' + MONO;
      ctx.fillText(row.score, CARD_W - PAD, cy + 9);
    });

    // footer
    var fy = height - footerH + 34;
    ctx.textAlign = 'left';
    ctx.fillStyle = SUB;
    ctx.font = '600 16px ' + FONT;
    ctx.fillText('得分 = 对局得分率（win rate）· ' + meta.asOf + ' 快照', PAD, fy);
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
          title: month + ' · ' + (bar.dataset.catLabel || '') + ' · ' + board,
          subtitle: '第 ' + start + '–' + end + ' 名 · 对局得分率排名 · 共导出 ' + rows.length + ' 名',
          asOf: bar.dataset.asOf || ''
        };
        var filename = 'llm-board-' + month + '-' + catKey + '-' +
          (board === '国产榜' ? 'domestic' : 'global') + '-' + start + '-' + end + '.png';
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
