const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

// Please Write your code here.

function even(array){
for(let i=0;i<n; i++){
    if(array[i]%2===0){
        array[i] = array[i]/2
    }
}
}

even(arr)

for(let elem of arr){
    process.stdout.write(elem+" ")
}
