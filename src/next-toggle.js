(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var UNDEFIND = 'undefined';

  nx.toggle = function (inArray, inItem, inPath) {
    //inItem is a callback:
    var array = inArray;
    var value = inItem;
    var idx = -1;

    if (typeof inPath !== UNDEFIND) {
      value = nx.path(inItem, inPath);
      array = nx.map(inArray, function (_, item) {
        return nx.path(item, inPath);
      });
    }

    idx = array.indexOf(value);
    if (idx !== -1) {
      inArray.splice(idx, 1);
    } else {
      inArray.push(inItem);
    }

    return inArray;
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.toggle;
  }

}());
