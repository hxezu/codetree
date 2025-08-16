const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

class Student{
    constructor(name, height, weight){
        this.name = name;
        this.height = height;
        this.weight = weight
    }
}

const students = [];
for (let i = 0; i < 5; i++) {
  const [name, heightStr, weightStr] = input[i].split(' ');
  const height = Number(heightStr);
  const weight = Number(weightStr);
  students.push(new Student(name, height, weight.toFixed(1)));
}

// Please Write your code here.
function sortByName(students){
    console.log("name")
    students
    .slice()
    .sort((a,b)=> a.name.localeCompare(b.name))
    .forEach(s=> console.log(s.name +" "+s.height+" "+s.weight))
}
sortByName(students)
console.log("")

function sortByHeight(students){
    console.log("height")
    students
    .slice()
    .sort((a,b)=>b.height-a.height)
    .forEach(s=> console.log(s.name +" "+s.height+" "+s.weight))
}
sortByHeight(students)