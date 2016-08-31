function recursive(node, i) {
  if (node.nodeName === 'A') {
    return node;
  }

  if (i < 4) {
    return recursive(node.parentNode, i + 1);
  }

  return null;
}

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
    var node = recursive(event.target, 0);

    if (node) {
      safari.self.tab.dispatchMessage(
        'open-new-tab',
        node.href
      );
    }
  }
);
