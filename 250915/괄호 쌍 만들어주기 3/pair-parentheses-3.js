const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input[0].split("");

let cnt = 0

for(let i=0; i< arr.length; i++){
    if(arr[i]==="("){
        for(let j=i+1; j< arr.length; j++){
            if(arr[j]===")") cnt++
        }
    }
}

console.log(cnt)