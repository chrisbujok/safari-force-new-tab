import jsdom from 'mocha-jsdom';
import assert from 'assert';
import sinon from 'sinon';
import * as finder from '../src/node-finder';

describe('Node finder', function() {
  jsdom();

  it('should call recursive() only once for A element', function() {
    let spy = sinon.spy(finder, 'recursive');

    finder.recursive(document.createElement('a'), 'A');

    assert(spy.calledOnce);

    spy.restore();
  });

  it('should recusrively find <a> element', function() {
    let spy = sinon.spy(finder, 'recursive');

    const a = document.createElement('a');
    const span1 = document.createElement('span');
    const span2 = document.createElement('span');
    const span3 = document.createElement('span');

    a.appendChild(span1);
    span1.appendChild(span2);
    span2.appendChild(span3);

    const result = finder.recursive(
      span3,
      'A'
    );

    assert.equal(result, a);
  });
});
