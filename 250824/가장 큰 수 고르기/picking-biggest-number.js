const fs = require("fs")
let arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);

console.log(Math.max(...arr))