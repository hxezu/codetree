const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
  segments.push(input[i].split(' ').map(Number));
}

// Please Write your code here.
let answer = new Array(100).fill(0)

function fillLine(arr){
    for(let i=arr[0]; i<=arr[1]; i++){
        answer[i]+=1
    }
}

segments.forEach(fillLine)

console.log(Math.max(...answer))