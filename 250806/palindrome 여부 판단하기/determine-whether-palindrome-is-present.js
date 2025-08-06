const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const str = input[0].split('');
// Please Write your code here.

console.log(str.slice(0,Math.floor(str.length/2)).join("") === str.slice(Math.floor(str.length/2)+1,).join('') ? "Yes":"No")