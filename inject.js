document.addEventListener(
  'webkitmouseforcewillbegin',
  function(event) {
    if (event.target.nodeName === 'A') {
      event.preventDefault();
    }
  }
);

document.addEventListener(
  'webkitmouseforcedown',
  function(event) {
    if (event.target.nodeName === 'A') {
      safari.self.tab.dispatchMessage(
        'open-new-tab',
        event.target.href
      );
    }
  }
);
