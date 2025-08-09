const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
// Please Write your code here.

class CodeName{
    constructor(code, score){
        this.code = code;
        this.score = score
    }
}

let codeList = []

for(let i=0;i<5;i++){
    const [code, s] = input[i].split(" ")
    codeList.push(new CodeName(code, Number(s)))
}

codeList.sort((a,b)=> a.score-b.score)

console.log(codeList[0].code+" "+ codeList[0].score)