const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
let answer = []

for(let i=0; i<n; i+=2){
    const array = arr.slice(0,i+1).sort((a,b)=>a-b)
    answer.push(array[i/2])
}

let str=""
answer.forEach((v)=> str+=v+" ")

console.log(str)