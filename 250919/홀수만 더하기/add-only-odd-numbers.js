const fs = require("fs"); 
const arr = fs.readFileSync(0).toString().trim().split("\n").map(Number);
let sum =0
for(let i=0; i<arr.length; i++){
    if(arr[i]%3===0 && arr[i]%2!==0){
sum += arr[i]
    }
}

console.log(sum)