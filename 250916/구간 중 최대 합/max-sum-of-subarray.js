const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
let maxSum = 0

for(let i=0; i<n-k+1; i++){
    let sum = 0
    for(let j=i; j<i+k; j++){
        sum += arr[j]
    }
    maxSum = Math.max(maxSum, sum)
}

console.log(maxSum)