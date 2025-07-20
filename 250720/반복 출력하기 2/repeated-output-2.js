const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

function printHello(n){
    if(n===0){
        return;
    }
    printHello(n-1);
    console.log("HelloWorld")
}

printHello(n);

// Please Write your code here.