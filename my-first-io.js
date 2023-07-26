var fs = require('fs');



var contents = fs.readFileSync(process.argv[2]);

const lines = contents.toString().split('\n').length - 1

console.log(lines);