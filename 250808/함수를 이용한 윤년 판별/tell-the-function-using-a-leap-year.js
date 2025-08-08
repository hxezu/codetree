const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const y = Number(input[0]);
// Please Write your code here.

function year(n){
    if(n%400===0) return true;
    if(n%100===0) return false;
    if(n%4===0) return true;
    return false
}

console.log(year(y))