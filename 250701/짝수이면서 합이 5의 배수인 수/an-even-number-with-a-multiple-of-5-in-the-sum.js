const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.
const sum = String(n).split('').reduce((a,b)=>a+Number(b), 0);

if(n %2===0 && sum%5===0){
    console.log("Yes")
}else{
    console.log("No")
}