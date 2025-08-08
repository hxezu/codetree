const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const studentData = input.map(line => line.split(' '));
let students = []
// Please write your code here.

class Student{
    constructor(name,kor, eng,math){
        this.name=name
        this.scores = [Number(kor),Number(eng),Number(math)]
    }
    total(){
        return this.scores.reduce((a,b)=>a+b,0)
    }
}

for(let i=0; i<n; i++){
    const [name, kor, eng, math] = studentData[i]
    students.push(new Student(name, kor, eng, math))
}

students.sort((a,b)=> a.total()-b.total())


for(let student of students){
    console.log(student.name + " "+student.scores.join(" "))
}


