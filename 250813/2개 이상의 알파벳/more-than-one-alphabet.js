const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = input[0].split("");
// Please Write your code here.
const setA = new Set(A)
console.log(setA.size>1?"Yes":"No")