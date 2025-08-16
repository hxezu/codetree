const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

function increase(n){
    if(n===1){
        return 1;
    }else{
        return increase(n-1)+" "+n
    }
}

console.log(increase(n))
// Please Write your code here.
function decrease(n){
    if(n===1){
        return 1;
    }else{
        return n+" "+decrease(n-1)
    }
}
console.log(decrease(n))

