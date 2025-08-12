const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let num = parseInt(input, 2);

num = num *17

let result = num.toString(2)

console.log(result)