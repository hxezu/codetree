const fs = require("fs");

const [A, B] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let result = 1;
for (let i = A; i <= B; i++) {
    result *= i;
}

console.log(result);
