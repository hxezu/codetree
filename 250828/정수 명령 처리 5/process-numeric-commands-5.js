const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1);

// Please Write your code here.

let arr = []

for(let cmd of commands){
    const parts = cmd.split(" ")
    const op = parts[0]

    if(op==="push_back"){
        arr.push(parts[1])
    }else if(op==="pop_back"){
        arr.pop()
    }else if(op==="size"){
        console.log(arr.length)
    }else{
        console.log(arr[parts[1]-1])
    }
}