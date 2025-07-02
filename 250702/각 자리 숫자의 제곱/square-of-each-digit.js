const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);

// Please Write your code here.

function sqrt2(num){
    if(num <10){
        return num*num;
    }
    return sqrt2(Math.floor(num/10)) + (num%10) * (num%10);
}

console.log(sqrt2(n))