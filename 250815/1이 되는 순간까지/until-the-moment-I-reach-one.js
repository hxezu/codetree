const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

let cnt = 0 ;

function recursion(num){
   if(num ===1 ) return cnt;

   if(num%2===0){
      cnt++
    return recursion(num/2)
   }else{
      cnt++
    return recursion(Math.floor(num/3))
   }
}

console.log(recursion(n))