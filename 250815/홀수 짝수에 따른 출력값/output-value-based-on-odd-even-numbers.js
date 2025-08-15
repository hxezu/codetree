const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

// Please Write your code here.

function recursion(num){
    if(num<=2){
        return num;
    }else{
        return num + recursion(num-2)
    }
}

console.log(recursion(n))