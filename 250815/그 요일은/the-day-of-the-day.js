const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
const A = input[1];

// Please Write your code here.
const daysOfMonth = [0, 31, 29, 31,30, 31, 30, 31, 31, 30, 31, 30, 31]
const daysOfWeek = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]

function calculateDays(month, day){
    let total = 0;
    for(let i=1; i<=month; i++){
        total += daysOfMonth[i]
    }
    total+=day;
    return total
}

let times = (calculateDays(m2,d2) - calculateDays(m1,d1))/7
let index = daysOfWeek.findIndex(v=>v===A)

if(!Number.isInteger(times)){
   times = Math.floor(times)
    if((calculateDays(m2,d2) - calculateDays(m1,d1))%7 > index) times+=1
}

console.log(times)