const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const commands = input.slice(1, 1 + n).map(line => line.split(' '));

// Please Write your code here.
const newset = new Set()

commands.forEach(([op,num]) =>{
    if(op === "find"){
        console.log(newset.has(num)? "true":"false")
    }else if(op==="add"){
        newset.add(num)
    }else{
        newset.delete(num)
    }
})