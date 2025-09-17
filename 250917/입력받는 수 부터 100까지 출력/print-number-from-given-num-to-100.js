const fs = require( "fs" ); 
let n = Number(fs.readFileSync(0).toString().trim());

let str=""
for(let i=n; i<=100; i++){
    str+= (i+" ")
}
console.log(str)