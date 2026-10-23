(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var tabs = Array.from(document.querySelectorAll('[data-monthly-tab]'));
    var panels = Array.from(document.querySelectorAll('[data-monthly-panel]'));
    if (!tabs.length || !panels.length) return;

    // The board ships two variants: "full" ranks every model, "ex" leaves the
    // post-trained models out so they take up no rank position. The page shows
    // "ex" by default; the hero toggle switches to the full board.
    var page = document.querySelector('.llm-monthly-page');
    var toggle = document.querySelector('[data-pt-toggle]');
    var toggleLabel = document.querySelector('[data-pt-toggle-label]');
    var note = document.querySelector('[data-pt-note]');
    var showingFull = false;

    function hiddenCount() {
      var active = panels.filter(function (panel) { return !panel.hidden; })[0] || panels[0];
      if (!active) return 0;
      return active.querySelectorAll(
        'tbody tr[data-board-variant="full"][data-post-trained="true"]').length;
    }

    function refresh() {
      if (!page || !toggle) return;
      page.classList.toggle('show-post-trained', showingFull);
      toggle.setAttribute('aria-pressed', showingFull ? 'true' : 'false');
      if (toggleLabel) toggleLabel.textContent = showingFull ? '隐藏后训练模型' : '显示后训练模型';
      if (note) {
        note.textContent = showingFull ? '' : ('已隐藏 ' + hiddenCount() + ' 个后训练模型 · 名次已重排');
        note.hidden = showingFull;
      }
    }

    function activate(key, moveFocus) {
      var activeTab = tabs.find(function (tab) { return tab.dataset.monthlyTab === key; });
      var activePanel = panels.find(function (panel) { return panel.dataset.monthlyPanel === key; });
      if (!activeTab || !activePanel) return;

      tabs.forEach(function (tab) {
        var selected = tab === activeTab;
        tab.classList.toggle('is-active', selected);
        tab.setAttribute('aria-selected', selected ? 'true' : 'false');
        tab.tabIndex = selected ? 0 : -1;
      });
      panels.forEach(function (panel) { panel.hidden = panel !== activePanel; });

      if (moveFocus) activeTab.focus();
      if (window.location.hash !== '#' + key) {
        try { window.history.replaceState(null, '', '#' + key); }
        catch (err) { window.location.hash = key; }
      }
      refresh();
    }

    tabs.forEach(function (tab, index) {
      tab.addEventListener('click', function () { activate(tab.dataset.monthlyTab, false); });
      tab.addEventListener('keydown', function (event) {
        var nextIndex = null;
        if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
        if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length;
        if (event.key === 'Home') nextIndex = 0;
        if (event.key === 'End') nextIndex = tabs.length - 1;
        if (nextIndex === null) return;
        event.preventDefault();
        activate(tabs[nextIndex].dataset.monthlyTab, true);
      });
    });

    if (toggle) {
      toggle.addEventListener('click', function () {
        showingFull = !showingFull;
        refresh();
      });
    }

    var initialKey = window.location.hash.replace(/^#/, '');
    if (initialKey) activate(initialKey, false);
    refresh();
  });
})();
