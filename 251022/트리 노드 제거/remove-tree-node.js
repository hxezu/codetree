const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const parents = input[1].split(" ").map(Number);
const delNode = Number(input[2]);

const graph = Array.from({length: n}, ()=>[])
let root = -1

for(let i=0; i<n; i++){
    if(parents[i]===-1) root = i;
    else graph[parents[i]].push(i);
}

function dfs(node){
    if(node === delNode) return 0

    if(!graph[node].some(child => child!== delNode)) return 1

    let cnt = 0

    for(const child of graph[node]){
        cnt += dfs(child)
    }
    return cnt
}

console.log((root === delNode) ? 0 : dfs(root))