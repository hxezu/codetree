const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);
// Please Write your code here.

function recursion(num){
    if(num===1){
        return 2;
    }else if(num===2){
        return 4;
    }else{
        return (recursion(num-2)*recursion(num-1))%100
    }
}

console.log(recursion(N))