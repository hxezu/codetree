const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rectA = input[0].split(' ').map(Number);
const rectB = input[1].split(' ').map(Number);
const rectM = input[2].split(' ').map(Number);

const OFFSET = 1000;
const SIZE = 2000;

const answer = Array.from({length:SIZE}, ()=>Array(SIZE).fill(false))

function fill([x1,y1,x2,y2]){
    x1+= OFFSET; x2+=OFFSET
    y1+= OFFSET; y2+=OFFSET

    for(let i=x1; i<x2; i++){
        for(let j=y1; j<y2; j++){
            answer[i][j] = true
        }
    }
}

function erase([x1,y1,x2,y2]){
    x1+= OFFSET; x2+=OFFSET
    y1+= OFFSET; y2+=OFFSET

    for(let i=x1; i<x2; i++){
        for(let j=y1; j<y2; j++){
            answer[i][j] = false
        }
    }
}

fill(rectA)
fill(rectB)
erase(rectM)

let cnt=0;

    for(let i=0; i<SIZE; i++){
        for(let j=0; j<SIZE; j++){
            if(answer[i][j]) cnt++
        }
    }

    console.log(cnt)