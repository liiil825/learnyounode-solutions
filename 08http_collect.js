var http = require('http'),
    url = process.argv[2];

http.get(url, function(request) {
  var rel = "";
  request.setEncoding('utf-8');
  request.on('data', function(data) {
    rel += data;
  });
  request.on('end', function() {
    console.log(rel.length);
    console.log(rel);
  });
} );
