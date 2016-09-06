const NODE_NAME = 'A';
const MAX_RECURSION = 4;

function recursive(node, i = 0) {
  if (node.nodeName === NODE_NAME) {
    return node;
  }

  if (i < MAX_RECURSION) {
    return recursive(node.parentNode, i + 1);
  }

  return null;
}

document.addEventListener(
  'webkitmouseforcewillbegin',
  event => {
    if (event.target.nodeName === NODE_NAME) {
      event.preventDefault();
    }
  }
);

document.addEventListener(
  'webkitmouseforcedown',
  event => {
    var node = recursive(event.target);

    if (node) {
      safari.self.tab.dispatchMessage(
        'open-new-tab',
        node.href
      );
    }
  }
);
