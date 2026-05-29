(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const card = document.getElementById('llm-board-card');
    const tableWrap = document.getElementById('llm-board-table-wrap');
    const table = document.getElementById('llm-board-table');
    if (!card || !tableWrap || !table) return;

    const topScrollbar = document.getElementById('llm-board-top-scrollbar');
    const topScrollbarTrack = document.getElementById('llm-board-top-scrollbar-track');
    const topScrollbarInner = document.getElementById('llm-board-top-scrollbar-inner');
    const stickyHead = document.getElementById('llm-board-sticky-head');
    const stickyHeadViewport = document.getElementById('llm-board-sticky-head-viewport');
    const stickyHeadTable = document.getElementById('llm-board-sticky-head-table');
    const siteHeader = document.querySelector('.site-header');

    let syncingTableWrap = false;
    let syncingTopScrollbar = false;
    let syncingStickyViewport = false;

    function release(flag) {
      window.requestAnimationFrame(function () {
        if (flag === 'top') syncingTopScrollbar = false;
        if (flag === 'table') syncingTableWrap = false;
        if (flag === 'sticky') syncingStickyViewport = false;
      });
    }

    function syncHorizontal(left, source) {
      if (source !== 'table') {
        syncingTableWrap = true;
        tableWrap.scrollLeft = left;
        release('table');
      }
      if (topScrollbarTrack && source !== 'top') {
        syncingTopScrollbar = true;
        topScrollbarTrack.scrollLeft = left;
        release('top');
      }
      if (stickyHeadViewport && source !== 'sticky') {
        syncingStickyViewport = true;
        stickyHeadViewport.scrollLeft = left;
        release('sticky');
      }
    }

    function buildStickyHeader() {
      if (!stickyHeadTable || !table.tHead) return;
      stickyHeadTable.innerHTML = '';
      stickyHeadTable.appendChild(table.tHead.cloneNode(true));
    }

    function syncStickyWidths() {
      if (!stickyHeadTable || !stickyHeadViewport) return;
      const sourceHead = table.tHead;
      const stickyHead = stickyHeadTable.tHead;
      if (!sourceHead || !stickyHead) return;

      const sourceRows = sourceHead.rows;
      const stickyRows = stickyHead.rows;
      if (!sourceRows.length || !stickyRows.length) return;

      // Build/refresh <colgroup> on the cloned table based on the deepest header row
      // (whichever row has the most cells — usually the second/leaf row).
      let leafRow = sourceRows[0];
      for (let i = 1; i < sourceRows.length; i++) {
        if (sourceRows[i].cells.length > leafRow.cells.length) leafRow = sourceRows[i];
      }

      let colgroup = stickyHeadTable.querySelector('colgroup');
      if (!colgroup) {
        colgroup = document.createElement('colgroup');
        stickyHeadTable.insertBefore(colgroup, stickyHeadTable.firstChild);
      }
      if (colgroup.children.length !== leafRow.cells.length) {
        colgroup.innerHTML = '';
        for (let i = 0; i < leafRow.cells.length; i++) {
          colgroup.appendChild(document.createElement('col'));
        }
      }
      const cols = colgroup.children;

      Array.from(leafRow.cells).forEach(function (cell, idx) {
        const w = Math.ceil(cell.getBoundingClientRect().width);
        const col = cols[idx];
        if (col) {
          col.style.width = w + 'px';
          col.style.minWidth = w + 'px';
          col.style.maxWidth = w + 'px';
        }
      });

      // Also propagate widths to the cloned header cells (group + leaf rows)
      for (let r = 0; r < sourceRows.length; r++) {
        const srcRow = sourceRows[r];
        const dstRow = stickyRows[r];
        if (!dstRow) continue;
        Array.from(srcRow.cells).forEach(function (cell, idx) {
          const dstCell = dstRow.cells[idx];
          if (!dstCell) return;
          const w = Math.ceil(cell.getBoundingClientRect().width);
          dstCell.style.width = w + 'px';
          dstCell.style.minWidth = w + 'px';
          dstCell.style.maxWidth = w + 'px';
        });
      }

      stickyHeadViewport.style.width = tableWrap.clientWidth + 'px';
      stickyHeadTable.style.width = table.scrollWidth + 'px';
      stickyHeadTable.style.tableLayout = 'fixed';
      syncHorizontal(tableWrap.scrollLeft, 'table');
    }

    function setOffsets() {
      const headerHeight = siteHeader ? siteHeader.getBoundingClientRect().height : 64;
      const scrollbarHeight = topScrollbar && topScrollbar.classList.contains('is-visible')
        ? topScrollbar.getBoundingClientRect().height
        : 0;
      if (topScrollbar) topScrollbar.style.top = Math.ceil(headerHeight + 8) + 'px';
      if (stickyHead) stickyHead.style.top = Math.ceil(headerHeight + scrollbarHeight + 8) + 'px';
    }

    function syncTopScrollbarWidth() {
      if (!topScrollbar || !topScrollbarInner || !topScrollbarTrack) return;
      topScrollbar.style.width = tableWrap.clientWidth + 'px';
      topScrollbarInner.style.width = table.scrollWidth + 'px';
      syncHorizontal(tableWrap.scrollLeft, 'table');
      syncStickyWidths();
      setOffsets();
    }

    function updateVisibility() {
      if (!topScrollbar || !topScrollbarTrack) return;
      const canScrollX = table.scrollWidth - tableWrap.clientWidth > 2;
      const cardRect = card.getBoundingClientRect();
      const headerHeight = siteHeader ? siteHeader.getBoundingClientRect().height : 64;
      const shouldShow = canScrollX && cardRect.top <= headerHeight + 20 && cardRect.bottom >= headerHeight + 84;
      const headRect = tableWrap.getBoundingClientRect();
      const stickyHeadTop = headerHeight + (shouldShow && topScrollbar ? topScrollbar.getBoundingClientRect().height : 0) + 8;
      const shouldShowSticky = headRect.top <= stickyHeadTop && cardRect.bottom >= stickyHeadTop + 56;

      topScrollbar.hidden = !shouldShow;
      topScrollbar.setAttribute('aria-hidden', shouldShow ? 'false' : 'true');
      topScrollbar.classList.toggle('is-visible', shouldShow);
      if (stickyHead) {
        stickyHead.hidden = !shouldShowSticky;
        stickyHead.setAttribute('aria-hidden', shouldShowSticky ? 'false' : 'true');
        stickyHead.classList.toggle('is-visible', shouldShowSticky);
      }
      syncStickyWidths();
      setOffsets();
    }

    buildStickyHeader();
    syncTopScrollbarWidth();
    updateVisibility();

    tableWrap.addEventListener('scroll', function () {
      if (syncingTableWrap) return;
      syncHorizontal(tableWrap.scrollLeft, 'table');
    }, { passive: true });

    if (topScrollbarTrack) {
      topScrollbarTrack.addEventListener('scroll', function () {
        if (syncingTopScrollbar) return;
        syncHorizontal(topScrollbarTrack.scrollLeft, 'top');
      }, { passive: true });
    }

    if (stickyHeadViewport) {
      stickyHeadViewport.addEventListener('scroll', function () {
        if (syncingStickyViewport) return;
        syncHorizontal(stickyHeadViewport.scrollLeft, 'sticky');
      }, { passive: true });
    }

    window.addEventListener('scroll', updateVisibility, { passive: true });
    window.addEventListener('resize', function () {
      syncTopScrollbarWidth();
      updateVisibility();
    }, { passive: true });
    window.addEventListener('load', function () {
      syncTopScrollbarWidth();
      updateVisibility();
    });

    if (window.ResizeObserver) {
      const ro = new window.ResizeObserver(function () {
        syncTopScrollbarWidth();
        updateVisibility();
      });
      ro.observe(tableWrap);
      ro.observe(table);
    }
  });
})();
