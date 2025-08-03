const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

let answerSet = new Set()
let answer = 0;

function colorRects([x1,y1,x2,y2]){
    for(let i=x1; i<x2; i++){
        for(let j=y1; j<y2; j++){
            const key = `${i}${j}`
            if(!answerSet.has(key)){
                answerSet.add(key)
                answer++;
            }
        }
    }
}

rects.forEach(colorRects)
console.log(answer)
