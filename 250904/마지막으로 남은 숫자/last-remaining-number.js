const Heap = require("collections/heap")
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const pq = new Heap()

arr.forEach(num=>pq.push(num))

while(pq.length>=2){
    const value = pq.pop() - pq.pop()
    if(value >0) pq.push(value)
}

console.log(pq.length ? pq.peek():-1 )