const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [R, C] = input[0].split(' ').map(Number);
const grid = input.slice(1).map(line => line.trim().split(' '));
let cnt = 0

function canJump(x1,y1, x2,y2){
    if(x2<=x1 || y2<=y1) return false;
    if(grid[x1][y1]===grid[x2][y2]) return false;
    return true;
}

for(let i=0; i<R; i++){
    for(let j=0; j<C; j++){
        if(i===0 && j===0) continue;
        if(i===R-1 && j===C-1) continue;

        for(let k=0; k<R; k++){
            for(let l=0; l<C; l++){
                if(k===0 && l===0) continue;
                if(i===R-1 && l===C-1) continue;
                if(canJump(0,0, i,j) && canJump(i,j,k,l) && canJump(k,l,R-1,C-1)) cnt++
            }
        }
    }
}

console.log(cnt)