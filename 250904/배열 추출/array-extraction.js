const Heap = require("collections/heap")
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);
const pq = new Heap()

arr.forEach(x=>{
    if(x!==0){
        pq.push(x)
    }
    else{
        if(!pq.length){
            console.log(0)
        }else{
            console.log(pq.pop())
        }
    }
})