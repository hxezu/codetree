const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

function fibonacci(num){
    if(num <=1) {
        return 1
    }else{
        return fibonacci(num-2) + fibonacci(num-1)
    }
}

console.log(fibonacci(n-1))