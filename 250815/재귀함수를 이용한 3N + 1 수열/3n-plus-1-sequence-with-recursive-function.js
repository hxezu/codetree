const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);

// Please Write your code here.
let cnt = 0;

function recursion(num){
    if(num===1){
        return cnt;
    }else{
        cnt++
        return num%2===0? recursion(num/2):recursion(num*3 + 1)
    }
}

console.log(recursion(n))