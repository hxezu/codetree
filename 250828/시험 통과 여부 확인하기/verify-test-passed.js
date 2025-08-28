const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

console.log(Number(input)>=80?"pass":80-Number(input) +" more score");
