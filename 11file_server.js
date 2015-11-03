var http = require('http'),
    fs = require('fs'),

    filename = process.argv[3];

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' });

  fs.createReadStream(filename).pipe(res);
})

server.listen(+process.argv[2]);
