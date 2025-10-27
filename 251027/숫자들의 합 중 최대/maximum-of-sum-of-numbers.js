const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x, y] = input[0].split(' ').map(Number);
// Please Write your code here.

let maxSum = 0
for(let i=x; i<=y; i++){
    const nums = String(i).split("").map(Number)
    maxSum=Math.max(nums.reduce((a,b)=>a+b, 0), maxSum)
}

console.log(maxSum)