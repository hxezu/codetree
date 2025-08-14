const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);
// Please Write your code here.

if(a>b){
    a*=2
    b+=10
}else{
    a+=10
    b*=2
}

console.log(a+" "+b)