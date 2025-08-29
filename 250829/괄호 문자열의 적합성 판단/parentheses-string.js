const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const bracketStr = input[0];
// Please write your code here.

const stack = [];
let isValid = true

for(let x of bracketStr){
    if(x==="("){
        stack.push(x)
    }else if(x===")"){
        if(stack.length===0){
            isValid = false
            break
        }else{
            stack.pop()
        }
    }
}

console.log(stack.length===0 && isValid? "Yes":"No")