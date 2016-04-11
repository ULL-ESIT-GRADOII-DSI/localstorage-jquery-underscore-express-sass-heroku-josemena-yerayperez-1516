//FICHERO ACTUALMENTE EN DESUSO, NO LO BORRAMOS HASTA QUE ESTE TERMINADA LA PRACTICA.
(function(exports) {
main = function() {
  var original = document.getElementById("original").value;
  if (window.localStorage) localStorage.original = original;
  //var r = calculate(original);
//  var template = fillTable.innerHTML;
//  finaltable.innerHTML = _.template(template, {items: r});

  //return r;
};

$(document).ready(function () {
  // If the browser supports localStorage and we have some stored data
  if (window.localStorage && localStorage.original) {
    original.value = localStorage.original;
  }
  //$("button").click(main);
});
})(this);