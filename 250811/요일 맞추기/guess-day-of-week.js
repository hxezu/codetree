const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
// Please Write your code here.

const daysArr = [0, 31, 28, 31, 30, 31,30,31,31,30, 31, 30, 31]


function calculateDays(month,day){
    let result=0
    for(let i=1; i<month; i++ ){
        result += daysArr[i]
    }
    result += day
    return result
}

let diff = (((calculateDays(m2,d2)  - calculateDays(m1,d1))%7)+7)%7

const week =  [ "Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

console.log(week[(diff+1)%7])