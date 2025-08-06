const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);

let gcd = 1;
for(let i=1; i<=Math.min(n,m); i++){
    if(n%i===0 && m%i===0){
        gcd=i
    }
}

const result = (n*m)/gcd
console.log(result)