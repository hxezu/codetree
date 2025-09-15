const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

let minDist = Infinity
for(let i=0; i<n ; i++){
    let sum = 0
    for(let j=0; j<n; j++){
        if(j!==i) sum += (Math.abs(j-i) * arr[j])
    }
    if(sum<minDist) minDist = sum
}
console.log(minDist)