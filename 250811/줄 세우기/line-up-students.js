const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);

class Student {
    constructor(height, weight, num){
        this.height = height;
        this.weight=weight;
        this.num= num
    }
}
const students = [];
for (let i = 1; i <= n; i++) {
    const [height, weight] = input[i].split(" ").map(Number);
    students.push(new Student(height, weight, i));
}

// Please Write your code here.
students.sort((a,b)=>{
    if(a.height!==b.height) return b.height-a.height
    if(a.weight!==b.weight) return b.weight-a.weight
    return a.num-b.num
})

for(let i=0; i<n; i++){
    console.log(students[i].height+" "+students[i].weight+" "+students[i].num)
}