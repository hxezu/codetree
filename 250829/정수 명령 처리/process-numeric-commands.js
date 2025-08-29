const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1);

// Please Write your code here.

class Stack{
    constructor(){
        this.items = []
    }

    push(item){
        this.items.push(item)
    }

    empty(){
        return this.items.length === 0
    }
    
    size(){
        return this.items.length
    }

    pop(){
        if(this.empty()){
            throw new Error("Stack is Empty")
        }
        return this.items.pop()
    }

    top(){
        if(this.empty()){
            throw new Error("Stack is Empty")
        }
        return this.items[this.items.length-1]
    }
}

const s = new Stack()
for(let cmd of commands){
    const parts = cmd.split(" ")
    if(parts[0]==="push"){
        s.push(parts[1])
    }else if(parts[0]==="pop"){
        console.log(s.pop())
    }else if(parts[0]==="size"){
        console.log(s.size())
    }else if(parts[0]==="empty"){
        console.log(s.empty()?1:0)
    }else{
        console.log(s.top())
    }
}