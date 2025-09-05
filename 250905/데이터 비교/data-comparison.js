const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr1 = input[1].trim().split(' ').map(Number);
const m = Number(input[2]);
const arr2 = input[3].trim().split(' ').map(Number);

// Please Write your code here.
const arr1Set = new Set(arr1)

let result = ""

arr2.forEach(num =>{
    arr1Set.has(num)? result+="1 ": result+="0 "
})

console.log(result)