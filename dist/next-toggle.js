/*!
 * name: @feizheng/next-toggle
 * description: Toggle array element.
 * url: https://github.com/afeiship/next-toggle
 * version: 1.0.0
 * date: 2020-04-10 07:56:29
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var UNDEFIND = 'undefined';

  nx.toggle = function (inArray, inItem, inPath) {
    var idx = inArray.findIndex(function (item) {
      return typeof inPath === UNDEFIND
        ? inItem === item
        : nx.get(item, inPath) === nx.get(inItem, inPath);
    });

    idx === -1 ? inArray.push(inItem) : inArray.splice(idx, 1);

    return inArray;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.toggle;
  }
})();

//# sourceMappingURL=next-toggle.js.map
