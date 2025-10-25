const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const memo = Array(n+1).fill(-1)

function Fibbo(n) {
    if(memo[n] !== -1)          
        return memo[n];       
    if(n <= 2)                 
        memo[n] = 1;          
    else                     
        memo[n] = Fibbo(n - 1) + Fibbo(n - 2); 
                                               
    return memo[n];                            
}

console.log(Fibbo(n))