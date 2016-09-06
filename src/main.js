safari.application.addEventListener(
  'message',
  event => {
    var currentIndex = safari.application.activeBrowserWindow.tabs
      .indexOf(safari.application.activeBrowserWindow.activeTab);

    var tab = safari.application.activeBrowserWindow.openTab(
      null,
      currentIndex + 1
    );
    tab.url = event.message;
  },
  false
);
