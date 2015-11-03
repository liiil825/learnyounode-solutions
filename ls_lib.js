var fs = require('fs'),
    path = require('path');

module.exports = function(dirname, ext, callback) {
  var extension = "." + ext,
      rel = [];

  fs.readdir(dirname, function(err, files) {
    if (err) return callback(err);
    files = files.filter(function(file) {
      return path.extname(file) === extension;
    });
    callback(null, files);
  });
};
