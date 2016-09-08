import { recursive } from './node-finder';

const NODE_NAME = 'A';

export function onForceBegin(event) {
  if (event.target.nodeName === NODE_NAME) {
    event.preventDefault();
  }
}

export function onForceDown(event) {
  const node = recursive(event.target, NODE_NAME);

  if (node) {
    safari.self.tab.dispatchMessage(
      'open-new-tab',
      node.href
    );
  }
}
