const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

// Please Write your code here.
function maxNum(num){
    if(num===1){
        return arr[0];
    }else{
        return Math.max(arr[num-1], maxNum(num-1))
    }
}

console.log(maxNum(n))