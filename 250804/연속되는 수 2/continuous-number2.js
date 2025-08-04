const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(Number);
const answer = []

let cnt = 0

// Please Write your code here.
for(let i=0; i<n; i++){
    if(arr[i]==0 || arr[i]!==arr[i-1]){
        cnt=1;
    }else{
        cnt+=1;
    }
    answer.push(cnt)
}

console.log(Math.max(...answer))