const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
console.log(Number(input[0]) + Number(input[1]))
console.log(Number(input[0]) - Number(input[1]))
console.log(Math.floor(Number(input[0]) / Number(input[1])))
console.log(Number(input[0]) % Number(input[1]))