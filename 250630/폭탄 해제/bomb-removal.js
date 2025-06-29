const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [u_code, l_color, time] = input[0].split(' ');

class Bomb{
    constructor(u_code, l_color, time){
        this.u_code = u_code;
        this.l_color = l_color;
        this.time = time
    }
}

const answer = new Bomb(u_code, l_color, time)
console.log("code : "+ answer.u_code);
console.log("color : "+ answer.l_color);
console.log("second : "+ answer.time)