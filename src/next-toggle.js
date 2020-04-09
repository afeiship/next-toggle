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
