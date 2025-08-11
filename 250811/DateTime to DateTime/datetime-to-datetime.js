const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B, C] = input[0].split(' ').map(Number);

// Please write your code here.

let elapsed_mins = 0;

const baseTime = 11*24*60 + 11*60 + 11;
const calTime = A*24*60 + B*60 + C

console.log((calTime-baseTime)<0?-1:calTime-baseTime)