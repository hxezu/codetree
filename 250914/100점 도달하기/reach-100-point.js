const fs = require("fs");
const n = fs.readFileSync(0).toString().trim();

let str =""

for(let i=n; i<=100; i++){
    if(i>=90){
        str+="A "
    }else if(i>=80 && i<90){
        str+="B "
    }
    else if(i>=70&& i<80){
        str+="C "
    }
    else if(i>=60&& i<70){
        str+="D "
    }else{
        str+="F "
    }
}

console.log(str)