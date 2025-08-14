const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const str = input[0].split("");
// Please Write your code here.

console.log(str.join("") === str.reverse().join("")?"Yes":"No")