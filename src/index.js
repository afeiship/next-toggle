(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var UNDEFINED = 'undefined';

  nx.toggle = function (inArray, inItem, inPath) {
    var idx = inArray.findIndex(function (item) {
      return typeof inPath === UNDEFINED
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
