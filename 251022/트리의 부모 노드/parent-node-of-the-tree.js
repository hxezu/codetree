const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = parseInt(input[0]);
const edges = input.slice(1).map(line => line.split(" ").map(Number));

// Please Write your code here.
const graph = Array.from({length:n+1},()=> [])
const parent = Array(n+1).fill(0)

for(let i=1; i<n;i++){
    const [u,v] = input[i].split(" ").map(Number)
    graph[u].push(v)
    graph[v].push(u)
}

const visited = Array(n+1).fill(false)

function dfs(node){
    visited[node] = true

    for(const next of graph[node]){
        if(!visited[next]){
            parent[next] = node
            dfs(next) 
        }
    }
}

dfs(1)

let result = ""
for(let i=2; i<=n; i++){
    result += parent[i] + "\n"
}

console.log(result)