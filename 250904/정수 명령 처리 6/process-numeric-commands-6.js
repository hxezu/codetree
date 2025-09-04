const Heap = require("collections/heap")
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const commands = input.slice(1, n + 1);
const pq = new Heap()

// Please Write your code here.

commands.forEach(cmd=>{
    const [op, num] = cmd.split(" ")
    if(op==="push"){
        pq.push(num)
    }else if(op==="pop"){
        console.log(pq.pop())
    }else if(op==="size"){
        console.log(pq.length)
    }else if(op==="empty"){
        pq.length ? console.log(0):console.log(1)
    }else{
        console.log(pq.peek())
    }
})