function apply(element) {
  element.addEventListener(
    'webkitmouseforcewillbegin',
    function(event) {
      event.preventDefault();
    }
  );

  element.addEventListener(
    'webkitmouseforcedown',
    function(event) {
      safari.self.tab.dispatchMessage('open-new-tab', element.href);
    }
  )
}

var elements = document.getElementsByTagName('A');

for (var i = 0; i < elements.length; i++) {
  apply(elements.item(i));
}
