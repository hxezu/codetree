const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const numbers = input[1].split(" ").map(Number);
// Please Write your code here.

const gcd = (a,b)=> b===0?a:gcd(b,a%b)
const lcm = (a,b) => (a*b)/gcd(a,b)

function lcms(idx, currLcm){
    if(idx===n) return currLcm
    return lcms(idx+1, lcm(currLcm, numbers[idx]))
}

console.log(lcms(1,numbers[0]))