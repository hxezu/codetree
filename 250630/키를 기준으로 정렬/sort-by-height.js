const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const studentsInput = [];

class Student {
    constructor(name, height,weight){
        this.name = name;
        this.height= height;
        this.weight=weight;
    }
}
for (let i = 1; i <=n; i++) {
    let student  = input[i].split(' ')
    studentsInput.push(new Student(student[0], student[1], student[2]));
}
// Please Write your code here.

studentsInput.sort((a,b)=> a.height-b.height)
for(let i=0 ; i<n; i++){
    console.log(studentsInput[i].name+" " + studentsInput[i].height+ " "+studentsInput[i].weight)
}