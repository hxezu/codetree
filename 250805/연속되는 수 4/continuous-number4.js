const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);
// Please Write your code here.

let cnt=0;
let answer = []

for(let i=0; i<n; i++){
    if(i===0|| arr[i]<arr[i-1]){
        cnt =0;
    }else{
        cnt+=1
    }
    answer.push(cnt)
}

console.log(Math.max(...answer))