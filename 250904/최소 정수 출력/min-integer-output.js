const Heap = require("collections/heap")
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);
const pq = new Heap()

arr.forEach(num =>{
    if(num===0){
        pq.length? console.log(-pq.pop()) : console.log(0)
    }else{
        pq.push(-Number(num))
    }
})