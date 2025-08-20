const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
// Please Write your code here.

function printLine(n){
 if(n===0) return ""
 if(n===1) return "*"
 return "* "+ printLine(n-1)
}

function printStars(n){
    if(n===1) return "*\n*"
    
    return printLine(n)+ "\n" + printStars(n-1)+"\n"  + printLine(n)
}
console.log(printStars(n))