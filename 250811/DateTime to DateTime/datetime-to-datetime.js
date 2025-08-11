const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B, C] = input[0].split(' ').map(Number);

// Please write your code here.

let elapsed_mins = 0;
let day = 11;
let hour = 11;
let min = 11;

while(true){
    if(day===A  && hour===B&& min===C){
        break;
    }
    if(day<11 && hour<11 && min<11){
        elapsed_mins= -1
        break
    }

    elapsed_mins+=1;
    min +=1;

    if(min>60){
        hour+=1;
        min=1;
    }
    if(hour>24){
        day+=1
        hour=1
    }
}

console.log(elapsed_mins)