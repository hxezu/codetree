const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [a, b, c] = input[0].split(" ").map(Number);

// Please Write your code here.
function recursion(str){
    if(str.length===1){
        return Number(str[0])
    }else{
        return Number(str[0]) + recursion(str.slice(1))
    }
}

console.log(recursion(String(a*b*c)))