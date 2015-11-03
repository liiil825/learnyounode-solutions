var fs = require('fs'),
    content = fs.readFileSync(process.argv[2]),
    lines = content.toString().split('\n').length - 1;

console.log(lines);
