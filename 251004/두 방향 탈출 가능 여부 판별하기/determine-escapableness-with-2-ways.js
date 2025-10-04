const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, n + 1).map(row => row.split(' ').map(Number));

const visited = Array.from({length:n}, ()=>Array(m).fill(false))

function canGo(x,y){
    if(x<0 || x>=n || y<0 || y>=m) return false
    if(visited[x][y] || grid[x][y]===0) return false
    return true
}

let reachable = 0

function dfs(x,y){
    if(x===n-1 && y===m-1){
        reachable = 1
        return 
    }

    visited[x][y] = true
    const dx = [1,0]
    const dy = [0,1]

    for(let i=0; i<dx.length; i++){
        const newX = x + dx[i]
        const newY = y + dy[i]

        if(canGo(newX, newY)){
            dfs(newX, newY)
        }
    }
}

dfs(0,0)
console.log(reachable)