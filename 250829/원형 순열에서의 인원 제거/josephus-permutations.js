const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(" ").map(Number);
// Please Write your code here.

let arr = []
let anwer = []

for(let i=1; i<=n;i++){
    arr.push(i)
}


while(arr.length!==0){
    for(let i=0; i<k-1; i++){
        arr.push(arr[0])
        arr.shift()
    }
    anwer.push(arr.shift())
}

console.log(anwer.join(" "))