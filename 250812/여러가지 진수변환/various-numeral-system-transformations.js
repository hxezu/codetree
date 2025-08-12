const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [n, b] = input[0].split(' ').map(Number);

// Please Write your code here.
let answer = []

while(true){
    if(n<b){
        answer.push(n)
        break;
    }

    answer.push(n%b)
    n = Math.floor(n/b)
}

console.log(answer.reverse().join(""))