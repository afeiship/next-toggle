const nx = require('@feizheng/next-js-core2');
require('../src/next-toggle');

describe('api.basic test', () => {
  test('toggle pure array', function () {
    var arr1 = [1, 2, 3, 4, 5];

    expect(nx.toggle(arr1, 5)).toEqual([1, 2, 3, 4]);
    expect(nx.toggle(arr1, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(nx.toggle(arr1, 5)).toEqual([1, 2, 3, 4]);
    expect(nx.toggle(arr1, 5)).toEqual([1, 2, 3, 4, 5]);
  });

  test('toggle by array  innner object', function () {
    var items = [
      { value: 'deposit', label: '保证金帐户', price: '2000' },
      { value: 'extra', label: '使用余额', price: '1000' },
      { value: 'de1', label: '使用余额xxx', price: '1000' },
      { value: 'de2', label: '使用余额yyy', price: '1000' }
    ];

    var rs1 = nx.toggle(items, items[2], 'value');

    expect(rs1).toEqual([
      { value: 'deposit', label: '保证金帐户', price: '2000' },
      { value: 'extra', label: '使用余额', price: '1000' },
      { value: 'de2', label: '使用余额yyy', price: '1000' }
    ]);
  });
});
