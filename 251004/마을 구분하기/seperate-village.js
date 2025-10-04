const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

const visited = Array.from({length:n}, ()=> Array(n).fill(false))

function canCount(x,y){
    if(x<0 || x>=n || y<0 || y>=n) return false
    if(visited[x][y] || grid[x][y]===0) return false
    return true
}

function dfs(x,y){
    visited[x][y] = true
    let cnt = 1;

    const dx = [1,-1,0,0]
    const dy = [0,0,1,-1]

    for(let i=0; i<dx.length; i++){
        const newX = x + dx[i]
        const newY = y + dy[i]

        if(canCount(newX, newY)){
            cnt += dfs(newX, newY)
        }
    }

    return cnt
}


let village = []

for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
        if(canCount(i,j)){
            const people = dfs(i,j)
            village.push(people)
        }
    }
}

village.sort((a,b)=>a-b)
console.log(village.length)
village.forEach((arr)=> console.log(arr))