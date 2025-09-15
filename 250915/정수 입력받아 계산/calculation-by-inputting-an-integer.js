const fs = require("fs");
const n = fs.readFileSync(0).toString().trim();
console.log(n*2+3)