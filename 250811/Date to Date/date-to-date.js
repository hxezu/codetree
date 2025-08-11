const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);

// Please Write your code here.

const daysArr = [0, 31, 28, 31, 30,31 ,30, 31, 31, 30, 31, 30, 31]
let elapsed_days = 1;
let month = m1;
let day = d1

while(true){
    if(month=== m2 && day===d2){
        break
    }

    elapsed_days += 1;
    day +=1;

    if(day>daysArr[month]){
        month+=1;
        day=1
    }
}

console.log(elapsed_days)