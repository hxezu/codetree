const fs = require("fs"); 
const N = Number(fs.readFileSync(0).toString().trim());
let sum = 0
for(let i=N; i<=100; i++){
    sum += i
}
console.log(sum)