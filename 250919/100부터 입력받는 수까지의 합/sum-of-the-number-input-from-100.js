const fs = require("fs"); 
const N = Number(fs.readFileSync(0).toString().trim());
let sum = 0
for(let N; N<=100; N++){
    sum += N
}
console.log(sum)