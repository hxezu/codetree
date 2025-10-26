const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let x = 0, y = 0;
let dir = 0; // 0: 북, 1: 동, 2: 남, 3: 서
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

for (const cmd of input) {
    if (cmd === "L") dir = (dir + 3) % 4;
    else if (cmd === "R") dir = (dir + 1) % 4;
    else if (cmd === "F") {
        x += dx[dir];
        y += dy[dir];
    }
}

console.log(x, y);
