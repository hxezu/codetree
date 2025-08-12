const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
    segments.push(input[i].split(' ').map(Number));
}

// Please write your code here.
let array = new Array(200).fill(0)
function fillLine(arr){
    for(let i=arr[0]; i<arr[1];i++){
        array[i+100] +=1;
    }
}

segments.forEach(fillLine)
console.log(Math.max(...array))