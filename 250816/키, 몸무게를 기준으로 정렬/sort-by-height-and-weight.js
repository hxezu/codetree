const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

class Person{
    constructor(name, height, weight){
        this.name=name;
        this.height=height;
        this.weight=weight
    }
}

const n = Number(input[0]);
const records = [];
for (let i = 1; i <= n; i++) {
  const [name, height, weight] = input[i].split(" ");
  records.push(new Person(name, Number(height), Number(weight)));
}

// Please Write your code here.

records.sort((a,b)=>{
    if(a.height!==b.height) return a.height-b.height
    if(a.weight!==b.weight) return b.weight-a.weight
}  
)

records.forEach((s)=>
    console.log(s.name+" "+s.height+" "+s.weight)
)