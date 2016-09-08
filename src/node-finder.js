const MAX_RECURSION = 4;

function recursive(node, nodeName, i = 0) {
  if (node.nodeName === nodeName) {
    return node;
  }

  if (i < MAX_RECURSION) {
    return recursive(node.parentNode, nodeName, i + 1);
  }

  return null;
}

export { MAX_RECURSION, recursive };
