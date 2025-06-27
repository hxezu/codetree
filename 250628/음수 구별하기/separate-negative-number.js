const fs = require("fs");
let num = Number(fs.readFileSync(0).toString().trim())
let answer = ""
if(num<0){
    answer="minus";
}
console.log(num)
console.log(answer)