(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const tableWrap = document.getElementById('llm-board-table-wrap');
    const table = document.getElementById('llm-board-table');
    if (!tableWrap || !table) return;

    const rowsInput = document.getElementById('llm-board-visible-rows');

    try {
      const saved = parseInt(window.localStorage.getItem('llm-board-visible-rows'), 10);
      if (!isNaN(saved) && rowsInput) rowsInput.value = saved;
    } catch (e) {}

    // The wrap scrolls on both axes; CSS position:sticky keeps the two
    // header rows and the Model column pinned. JS only feeds two values:
    //   --llm-board-head-row1-h : height of the first header row (row 2 of
    //                             the thead pins below it)
    //   wrap max-height         : thead height + N visible data rows, from
    //                             the 显示行数 control
    function applyViewport() {
      const thead = table.tHead;
      if (thead && thead.rows.length) {
        // Guard against no-change writes: the MutationObserver below watches
        // the table's style attribute, so an unconditional write would
        // re-trigger this function forever.
        const rowH = thead.rows[0].offsetHeight + 'px';
        if (table.style.getPropertyValue('--llm-board-head-row1-h') !== rowH) {
          table.style.setProperty('--llm-board-head-row1-h', rowH);
        }
      }
      const n = rowsInput ? parseInt(rowsInput.value, 10) : NaN;
      let maxH = '';
      if (!isNaN(n) && n > 0) {
        let h = thead ? thead.offsetHeight : 0;
        let count = 0;
        const body = table.tBodies[0];
        const rows = body ? body.rows : [];
        for (let i = 0; i < rows.length && count < n; i++) {
          // Skip rows hidden by the model/benchmark filters.
          if (rows[i].offsetParent === null) continue;
          h += rows[i].offsetHeight;
          count++;
        }
        // No cap needed when every visible row fits.
        if (count >= n) maxH = (h + 2) + 'px';
      }
      if (tableWrap.style.maxHeight !== maxH) tableWrap.style.maxHeight = maxH;
    }

    if (rowsInput) {
      rowsInput.addEventListener('change', function () {
        try { window.localStorage.setItem('llm-board-visible-rows', rowsInput.value); } catch (e) {}
        applyViewport();
      });
    }

    applyViewport();

    window.addEventListener('resize', applyViewport, { passive: true });
    window.addEventListener('load', applyViewport);

    if (window.ResizeObserver) {
      const ro = new window.ResizeObserver(applyViewport);
      ro.observe(tableWrap);
      ro.observe(table);
    }

    // The extras script rewrites score cells (multi-source chips) and the
    // filters hide/show rows and columns — both change row heights and the
    // set of visible rows, so re-measure whenever the table mutates. The
    // handler only writes to the wrap/table style, never to the observed
    // DOM, so there is no loop.
    if (window.MutationObserver) {
      let queued = false;
      const mo = new window.MutationObserver(function () {
        if (queued) return;
        queued = true;
        window.requestAnimationFrame(function () {
          queued = false;
          applyViewport();
        });
      });
      mo.observe(table, { childList: true, subtree: true, attributes: true, attributeFilter: ['class', 'style'] });
    }
  });
})();
