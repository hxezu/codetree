const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [x1, x2, x3, x4] = input[0].split(' ').map(Number);
// Please Write your code here.

if (x1 > x2) [x1, x2] = [x2, x1];
if (x3 > x4) [x3, x4] = [x4, x3];

console.log(Math.max(x1, x3) <= Math.min(x2, x4) ? "intersecting" : "nonintersecting");

