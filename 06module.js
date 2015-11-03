var lslib = require('./ls_lib');
var dirname = process.argv[2];
var ext = process.argv[3];

lslib(dirname, ext, function(err, files) {
  files.forEach(function(item) {
    console.log(item);
  });
});
