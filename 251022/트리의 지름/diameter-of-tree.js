const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = parseInt(input[0]);

const graph = Array.from({length:n+1}, ()=>[])

for (let i = 1; i < n; i++) {
    const [x, y, d] = input[i].split(" ").map(Number);
    graph[x].push({ node: y, weight: d });
    graph[y].push({ node: x, weight: d });
}


function bfs(start){
    const visited = Array(n+1).fill(false)
    const dist = Array(n+1).fill(0)
    const queue = [start]
    visited[start] = true

    while(queue.length){
        const cur = queue.shift()

        for(const {node: next, weight} of graph[cur]){
            if(!visited[next]){
                visited[next] = true
                dist[next] = dist[cur]+ weight
                queue.push(next)
            }
        }
    }

    const maxDist = Math.max(...dist)
    const farthesetNode = dist.indexOf(maxDist)
    return {maxDist, farthesetNode}
}

const first = bfs(1)
const second = bfs(first.farthesetNode)

console.log(second.maxDist)