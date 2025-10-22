const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));
const startPoints = input.slice(n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.

const dx = [-1, 1, 0, 0]
const dy = [0, 0, -1, 1]
const visited = Array.from({length:n}, ()=>Array(n).fill(false))

function bfs(x,y){
    const queue = [[x,y]]
    let count = 1
    visited[x][y] = true

    while(queue.length){
        const [sx, sy] = queue.shift()

        for(let i=0; i<4; i++){
            const nx = sx + dx[i]
            const ny = sy + dy[i]

            if(
                nx>=0 && nx<n &&
                ny>=0 && ny<n &&
                !visited[nx][ny] &&
                grid[nx][ny] === 0
            ){
                count++
                visited[nx][ny] = true
                queue.push([nx, ny])
            }
        }
    }
    return count
}

let totalCount = 0
for(const [x,y] of startPoints){
    if (!visited[x - 1][y - 1] && grid[x - 1][y - 1] === 0) {
    totalCount += bfs(x - 1, y - 1);
  }
}

console.log(totalCount)