const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let n = Number(input[0]);
let m = Number(input[1]);
// Please Write your code here.

let num = n<m? n : m
let answer = 1;

for(let i=0; i<=num; i++){
    if(n%i ===0 && m%i===0){
        answer = i;
    }
}

console.log(answer)