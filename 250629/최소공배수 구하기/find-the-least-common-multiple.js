const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);

const largeNum = Math.max(n,m)

for(let i=largeNum; i<=n*m; i++){
    if(i%n===0 && i%m===0){
        console.log(i)
        return ;
    }
}