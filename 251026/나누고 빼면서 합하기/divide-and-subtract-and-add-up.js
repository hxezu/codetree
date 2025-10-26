const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);

function sumSequence(M) {
    let sum = 0;
    let idx = M;

    while (idx > 0) {
        sum += A[idx - 1]; 

        if (idx % 2 === 0) idx = idx / 2; 
        else idx = idx - 1;              
    }

    return sum;
}

console.log(sumSequence(M));
