const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);

// Please write your code here.

function factorial(num){
    if(num===0){
        return 1;
    }else{
        return num * factorial(num-1)
    }
}

console.log(factorial(N))