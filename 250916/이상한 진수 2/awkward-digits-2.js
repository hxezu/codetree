const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let arr = input[0].split("").map(Number);

for(let i=0; i<arr.length; i++){
    if(arr[i]===0) {
        arr[i]=1
        break;
    }
    if(i===arr.length-1 && arr[i]===1){
        arr[i] = 0
    }
}

console.log(parseInt(arr.join(""), 2))