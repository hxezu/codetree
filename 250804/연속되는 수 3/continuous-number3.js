const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);

// Please Write your code here.

let cnt = 0;
let arr2 = []

for(let i=0; i<n; i++){
    if(i===0 || arr[i]*arr[i-1]<0){
        cnt =1;
    }else{
        cnt+=1;
    }
    arr2.push(cnt)
}

console.log(Math.max(...arr2))