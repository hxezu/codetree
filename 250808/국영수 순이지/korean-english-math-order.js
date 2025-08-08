const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rawStudentData = input.slice(1, n + 1);

// Please Write your code here.
let students = []

class Student{
    constructor(name,kor, eng, math){
        this.name = name
        this.kor = Number(kor);
        this.eng= Number(eng);
        this.math=Number(math)
    }
    total(){
        return this.kor + this.eng+this.math
    }
}

for(let i=0;i<n; i++){
    const [name, kor, eng, math] = rawStudentData[i].trim().split(/\s+/)
    students.push(new Student(name, kor, eng, math))
}

students.sort((a,b)=>{
    if(a.total() !== b.total()) return b.total() - a.total()
    if(b.kor !== a.kor) return b.kor - a.kor
    if(b.eng !== a.eng) return b.eng - a.eng
})

for (let student of students) {
    console.log(student.name + " " + student.kor + " " + student.eng + " "+student.math);
}