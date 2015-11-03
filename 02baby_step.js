// var args = process.argv.slice(2),
//     rel = 0;

// args.forEach(function(item) {
//   rel += +item;
// });
// console.log(rel);
var result = 0

for (var i = 2; i < process.argv.length; i++)
  result += Number(process.argv[i])

console.log(result)

