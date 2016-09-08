export default function(event) {
  const { tabs, activeTab } = safari.application.activeBrowserWindow;

  safari.application.activeBrowserWindow
    .openTab(null, tabs.indexOf(activeTab) + 1)
      .url = event.message;
}
