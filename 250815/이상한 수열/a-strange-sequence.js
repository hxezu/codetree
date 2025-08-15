const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);
// Please Write your code here.
function recursion(num){
    if(num===1){
        return 1;
    }else if(num===2){
        return 2
    }else{
        return recursion(num-1) + recursion(Math.floor(num/3))
    }
}

console.log(recursion(n))