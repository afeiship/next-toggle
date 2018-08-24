var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-toggle');

describe('next/toggle', function () {

  it('toggle pure array', function () {
    var arr1 = [1, 2, 3, 4, 5];

    assert.deepEqual(nx.toggle(arr1, 5), [1, 2, 3, 4]);
    assert.deepEqual(nx.toggle(arr1, 5), [1, 2, 3, 4, 5]);
    assert.deepEqual(nx.toggle(arr1, 5), [1, 2, 3, 4]);
    assert.deepEqual(nx.toggle(arr1, 5), [1, 2, 3, 4, 5]);
  });

  it('toggle by array  innner object', function () {
    var items = [
      { value: 'deposit', label: '保证金帐户', price: '2000' },
      { value: 'extra', label: '使用余额', price: '1000' },
      { value: 'de1', label: '使用余额xxx', price: '1000' },
      { value: 'de2', label: '使用余额yyy', price: '1000' },
    ];

    var rs1 = nx.toggle(items, { value: 'de1', label: '使用余额xxx', price: '1000' }, 'value');

    assert.deepEqual(rs1, [
      { value: 'deposit', label: '保证金帐户', price: '2000' },
      { value: 'extra', label: '使用余额', price: '1000' },
      { value: 'de2', label: '使用余额yyy', price: '1000' },
    ])

  });

});
