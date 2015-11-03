var fs = require('fs'),
    path = require('path'),
    dirname = process.argv[2],
    ext = process.argv[3],
    pat = RegExp('\\.' + ext + '$');

fs.readdir(dirname, function(err, files) {
  if (err) console.log("err in fs.readDiv, message:", err);

  for (var i = 0, length = files.length; i < length; i++) {
    if (pat.test(files[i])) {
      console.log(files[i])
    }
  }
});

