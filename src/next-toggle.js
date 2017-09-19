(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.toggle = function (inArray, inItem) {
    var idx = inArray.indexOf(inItem);
    if(idx !== -1) {
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
