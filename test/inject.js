import jsdom from 'mocha-jsdom';
import assert from 'assert';
import sinon from 'sinon';

describe("Injected script", function() {
  jsdom();

  it('should attach event listeners', function() {
    let spy = sinon. spy(document, 'addEventListener');

    require('../src/inject.js');

    assert(spy.calledTwice);
    assert.equal(
      spy.getCall(0).args[0],
      'webkitmouseforcewillbegin',
      'Force will begin event listener'
    );
    assert.equal(
      spy.getCall(1).args[0],
      'webkitmouseforcedown',
      'Force down event listener'
    );
  });


});
