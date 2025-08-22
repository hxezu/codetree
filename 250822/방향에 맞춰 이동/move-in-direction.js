const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const moves = input.slice(1).map((move)=>move.split(" "));

// Please Write your code here.
let dx = {"N" : 0, "S":0, "E":1, "W":-1}
let dy = {"N" : 1, "S":-1, "E":0, "W":0}

let x=0; y=0;

for(let [dir,amount] of moves){
    let dist = Number(amount)
    x+= dx[dir] * dist
    y+=dy[dir] *dist
}

console.log(x+" "+y)