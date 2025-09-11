const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0])
const numbers = input[1].split(" ").map(Number); 

let result = numbers.map(x=>x**2)
console.log(result.join(" "));
