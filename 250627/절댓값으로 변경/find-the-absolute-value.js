const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

// Please Write your code here.

arr=arr.map((val)=>Math.abs(val))
console.log(arr.join(" "))