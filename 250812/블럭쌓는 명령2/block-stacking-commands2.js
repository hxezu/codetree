const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const segments = input.slice(1, k + 1).map(line => line.split(' ').map(Number));

// Please write your code here.
let answer = new Array(n).fill(0)

function block(arr){
    for(let i=arr[0]; i<=arr[1]; i++){
        answer[i-1]+=1
    }
}
segments.forEach(block)
console.log(Math.max(...answer))