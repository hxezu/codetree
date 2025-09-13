const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

if(input[0].length > input[1].length){
    console.log(input[0] + " "+ input[0].length)
}else if(input[1].length > input[0].length) {
    console.log(input[1] + " "+ input[1].length)
}else{
    console.log("same")
}