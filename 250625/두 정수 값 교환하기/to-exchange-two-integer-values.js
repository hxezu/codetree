const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [n, m] = input[0].split(" ").map(Number);

function swap(a,b){
    return [b,a]
}

[n,m] = swap(n,m)
console.log(n,m)