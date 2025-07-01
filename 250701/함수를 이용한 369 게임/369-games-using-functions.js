const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [A, B] = input[0].split(" ").map(Number);
let count = 0;
// Please Write your code here.
for(let i=A; i<=B; i++){
    if(i%3===0 || [3,6,9].some(d=>String(i).includes(d))){
        count++;
    }
}
console.log(count)