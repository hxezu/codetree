const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
const h = Number(input[0]);
const w = Number(input[1]); 

const bmi = (10000 * w) / (h * h);
const bmiInt = Math.floor(bmi);

console.log(bmiInt);
if (bmiInt >= 25) {
    console.log("Obesity");
}