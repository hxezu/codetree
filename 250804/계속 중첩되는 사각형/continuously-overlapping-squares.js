const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const rectangles = [];
for (let i = 1; i <= n; i++) {
    const [x1, y1, x2, y2] = input[i].split(' ').map(Number);
    rectangles.push([x1, y1, x2, y2]);
}
// Please Write your code here.

let arr = Array.from({length:200},()=>Array(200).fill(false))
let count=0

function fillRed([x1,y1,x2,y2]){
    x1+=100; x2+=100;
    y1+=100; y2+=100;
    for(let i=x1; i<x2; i++){
        for(let j=y1; j<y2; j++){
            arr[i][j]=false
        }
    }
}

function filleBlue([x1,y1,x2,y2]){
    x1+=100; x2+=100;
    y1+=100; y2+=100;
    for(let i=x1; i<x2; i++){
        for(let j=y1; j<y2; j++){
            arr[i][j]=true
        }
    }
}

for(let i=0; i<n; i++){
    if(i%2===0){
        fillRed(rectangles[i])
    }else{
        filleBlue(rectangles[i])
    }
}

for(let i=0; i<200; i++){
    for(let j=0; j<200; j++){
        if(arr[i][j]){
            count++
        }
    }
}

console.log(count)