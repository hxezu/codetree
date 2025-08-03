const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

const covered = new Set();
let answer = 0;

function coloring([x,y]){
    for(let i=x; i<x+8; i++){
        for(let j=y; j<y+8; j++){
            const key = `${i}:${j}`
            if(!covered.has(key)){
                covered.add(key)
answer++
            }
        }
    }
}

rects.forEach(coloring)
console.log(answer)