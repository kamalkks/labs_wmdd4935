
var fs = require('fs');

let file = fs.readFileSync(process.argv[2]);

let data = file.toString();

console.log(data.split('\n').length - 1);