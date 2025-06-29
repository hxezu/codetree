const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [user_id, levelStr] = input[0].split(' ');
const level = parseInt(levelStr);

class Next{
    constructor(user_id="codetree", level=10){
        this.user_id = user_id;
        this.level = level
    }
}

let answer = new Next();
console.log("user " + answer.user_id+" lv "+answer.level)
answer = new Next(user_id, level)
console.log("user " + answer.user_id+" lv "+answer.level)