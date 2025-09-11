const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let a = input[0], b = input[1];
let result = [a, b];

for (let i = 2; i < 10; i++) {
  let next = (result[i - 2] + result[i - 1]) % 10;
  result.push(next);
}

console.log(result.join(" "));