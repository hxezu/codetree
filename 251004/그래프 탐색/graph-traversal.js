const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const graph = Array.from({length:n+1},()=>[])

for (let i = 1; i <= m; i++) {
    const [u,v] = input[i].split(' ').map(Number);
    graph[u].push(v)
    graph[v].push(u)
}

const visited = Array(n+1).fill(false)
const queue = [1]
visited[1] = true

while(queue.length){
    const cur = queue.shift()
    for(const next of graph[cur]){
        if(!visited[next]){
            visited[next] = true
            queue.push(next)
        }
    }
}

const reachable = visited.filter(v=>v).length-1
console.log(reachable)