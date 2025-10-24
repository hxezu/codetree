const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const result = []
const visited = Array(n+1).fill(false)

function dfs(path){
    if(path.length === n){
        result.push(path.join(" "))
        return;
    }

    for(let j=n; j>=1; j--){
        if(!visited[j]){
            visited[j] = true
            dfs([...path, j])
            visited[j] = false
        }
    }
}

dfs([])
console.log(result.join("\n"))