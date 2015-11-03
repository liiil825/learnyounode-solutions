var fs = require('fs');

fs.readFile(process.argv[2], function(err, buff) {
  if (err) console.log("error in fs.readFile, message:", err);

  var lines = buff.toString().split('\n').length - 1;

  console.log(lines);
});
