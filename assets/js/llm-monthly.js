(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var tabs = Array.from(document.querySelectorAll('[data-monthly-tab]'));
    var panels = Array.from(document.querySelectorAll('[data-monthly-panel]'));
    if (!tabs.length || !panels.length) return;

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

    var initialKey = window.location.hash.replace(/^#/, '');
    if (initialKey) activate(initialKey, false);
  });
})();
