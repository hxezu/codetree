const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [k, n] = input[0].split(' ').map(Number);

const result = []

function dfs(path){
    if(path.length ===n){
        result.push(path.join(" "))
        return 
    }

    for(let i=1; i<=k; i++){
        dfs([...path, i])
    }
}

dfs([])
console.log(result.join("\n"))