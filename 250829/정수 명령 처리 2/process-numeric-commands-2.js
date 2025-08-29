const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1, n + 1);

// Please write your code here.

class Queue{
    constructor(){
        this.q = []
    }
    push(item){
        this.q.push(item)
    }
    empty(){
        return this.q.length===0
    }
    size(){
        return this.q.length
    }
    pop(){
        if(this.empty()){
            throw new Error("Queue is Empty")
        }
        return this.q.shift()
    }
    front(){
        if(this.empty()){
            throw new Error("Queue is Empty")
        }
        return this.q[0]
    }
}
const que = new Queue()

for(let cmd of commands){
    const parts = cmd.split(" ")
    if(parts[0]==="push"){
        que.push(parts[1])
    }else if(parts[0]==="front"){
        console.log(que.front())
    }else if(parts[0]==="size"){
        console.log(que.size())
    }else if(parts[0]==="pop"){
        console.log(que.pop())
    }else if(parts[0]==="empty"){
        console.log(que.empty()?1:0)
    }
}
