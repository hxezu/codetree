const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

class Node{
    constructor(data){
        this.data = data;
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    push(value){
        const newNode = new Node(value)
        if(!this.size || this.head.data < value){
            newNode.next = this.head
            this.head = newNode
        }else{
            let curNode = this.head
            while( curNode.next && curNode.next.data >= value ){
                curNode = curNode.next
            }
            newNode.next = curNode.next
            curNode.next = newNode
        }
        this.size++
    }

    pop(){
        if(!this.size) return 0
        const value = this.head.data
        this.head = this.head.next
        this.size--
        return value
    }
}

const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);
const nodes = new LinkedList()

// Please Write your code here.
for(const num of arr){
    num ? nodes.push(num) : console.log(nodes.pop())
}