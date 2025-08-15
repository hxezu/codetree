const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);

// Please Write your code here.

function recursion(num){
    if(num===1){
        return 0;
    }else{
        return num%2===0? recursion(num/2)+1:recursion(num*3 + 1)+1
    }
}

console.log(recursion(n))