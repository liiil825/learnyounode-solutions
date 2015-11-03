var http = require('http'),
    urls = process.argv.slice(2),
    results = [];

function printResult() {
  var f = function (i) { return i !== null; },
      len = results.filter(f).length;

  if (len === results.length)
    results.forEach(function(rel) {
      console.log(rel);
    });
}

urls.forEach(function (url, i) {
  results[i] = null;
  (function(i) {
    http.get(url, function(request) {
      var rel = "";
      request.setEncoding('utf-8');
      request.on('data', function(data) {
        rel += data;
      });
      request.on('end', function() {
        results[i] = rel;
        printResult();
      });
    } );
  })(i);
});
