const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rectA = input[0].split(' ').map(Number);
const rectB = input[1].split(' ').map(Number);
const rectM = input[2].split(' ').map(Number);

const covered = new Set()
let answer = 0 ;

function coloring([x1,y1,x2,y2]){
    for(let i=x1; i<x2; i++){
        for(let j=y1;j<y2; j++){
            const key = `${i}:${j}`
            if(!covered.has(key)){
                covered.add(key)
                answer++
            }
        }
    }
}

function substract([x1,y1,x2,y2]){
    for(let i=x1; i<x2; i++){
        for(let j=y1;j<y2; j++){
            const key = `${i}:${j}`
            if(covered.has(key)){
                covered.delete(key)
                answer--
            }
        }
    }
}

coloring(rectA)
coloring(rectB)
substract(rectM)

console.log(answer)