var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-toggle');

describe('next/toggle', function () {

  it('toggle pure array', function () {
    var arr1 = [1,2,3,4,5];

    assert.deepEqual( nx.toggle(arr1, 5), [1,2,3,4]);
    assert.deepEqual( nx.toggle(arr1, 5), [1,2,3,4,5]);
    assert.deepEqual( nx.toggle(arr1, 5), [1,2,3,4]);
    assert.deepEqual( nx.toggle(arr1, 5), [1,2,3,4,5]);
  });

});
