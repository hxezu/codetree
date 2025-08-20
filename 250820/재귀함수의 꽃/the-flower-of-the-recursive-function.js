const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);

// Please Write your code here.
function recursion(n){
    if(n===1){
        return "1 1";
    }
    return n +" "+recursion(n-1)+" "+n
}

console.log(recursion(n))