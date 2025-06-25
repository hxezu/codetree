const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let map = input[0].split(" ").map(Number);

map.sort((a,b)=>a-b)

console.log(map[0])

// Please Write your code here.