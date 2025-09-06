const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
const a = input[0]
const b = input[1]

console.log(a+" * "+b+" = "+a*b)
console.log(a+" / "+b+" = "+Math.floor(a/b))