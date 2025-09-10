const fs = require("fs");
let stringArray = fs.readFileSync(0).toString().trim().split(' ');
console.log(stringArray.reverse().join(""));
