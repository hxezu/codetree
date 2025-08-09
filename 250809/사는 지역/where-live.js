const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const personLines = input.slice(1, n + 1);

class Person{
    constructor(name, addr, city){
        this.name = name;
        this.addr= addr;
        this.city=city
    }
}

// Please Write your code here.
let people = []


for(let i=0; i<n; i++){
   const [name,addr, city] = personLines[i].split(" ")
    people.push(new Person(name, addr, city))
}

people.sort((a,b)=>b.name.localeCompare(a.name))
console.log("name " +people[0].name)
console.log("addr " +people[0].addr)
console.log("city " +people[0].city)