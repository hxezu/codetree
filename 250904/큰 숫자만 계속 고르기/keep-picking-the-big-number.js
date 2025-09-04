const Heap = require("collections/heap")
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
const pq = new Heap()

// Please Write your code here.
arr.forEach(num => pq.push(num))

for(let i=0; i<m; i++){
    pq.push(pq.pop()-1)
}

console.log(pq.peek())