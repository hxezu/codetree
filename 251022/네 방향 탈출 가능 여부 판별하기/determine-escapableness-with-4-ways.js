const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

const dx = [-1, 1, 0, 0]
const dy = [0, 0, -1, 1]

function bfs(){
    const visited = Array.from({length:n}, ()=> Array(m).fill(false))
    const queue = [[0,0]]

    if(grid[0][0]===0) return false
    
    visited[0][0] = true

    while(queue.length>0){
        const [x,y] = queue.shift()

        if(x===n-1 && y===m-1) return true
        
        for(let i=0; i<4; i++){
            const nx = x + dx[i]
            const ny = y + dy[i]
        if(
            nx>=0 && nx<n && 
            ny>=0 && ny<m && 
            !visited[nx][ny] &&
            grid[nx][ny]=== 1 ){
                visited[nx][ny] = true
                queue.push([nx,ny])
            }
        }
    }
    return false
}

console.log(bfs()? 1:0)