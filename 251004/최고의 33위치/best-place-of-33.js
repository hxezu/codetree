const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1).map(line => line.split(' ').map(Number));

// Please Write your code here.

let max = 0
for(let i=1; i<n-1; i++){
    for(let j=1; j<n-1; j++){
        let cnt=0;
        for(let k=i-1; k<=i+1; k++){
            for(let l=j-1; l<=j+1; l++){
                if(grid[k][l]) cnt ++;
            }
        }
        max = Math.max(max,cnt)
    }
}

console.log(max)