const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("");

const result = input.map((val,i)=> (i===1 || i===input.length-2)? "a" : val)
console.log(result.join(""))
