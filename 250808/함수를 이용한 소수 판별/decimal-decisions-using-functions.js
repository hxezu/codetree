const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B] = input[0].split(" ").map(Number);

let answer = []
for(let i=A; i<=B; i++){
    let isPrime = true
    for(let j=2; j<i; j++){
        if(i%j===0){
            isPrime = false;
        }
    }
    if(isPrime) answer.push(i)
}

console.log(answer.reduce((a,b)=>a+b,0))