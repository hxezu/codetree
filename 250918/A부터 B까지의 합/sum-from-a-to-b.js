const fs = require("fs");
const [A, B] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let sum = 0;
for (let i = A; i <= B; i++) {
    sum += i;
}

console.log(sum);