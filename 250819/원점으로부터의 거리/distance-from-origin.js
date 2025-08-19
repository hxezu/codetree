const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

class Point{
    constructor(x,y,index){
        this.x = x;
        this.y = y
        this.index = index
    }
    distance(){
        return Math.abs(this.x-0) + Math.abs(this.y-0)
    }
}

const n = Number(input[0]);
const points = input.slice(1).map(line => line.trim().split(' ').map(Number));
const pointArr = points.map(([x,y], index)=>new Point(x,y,index))
// Please Write your code here.

pointArr.sort((a,b)=>{
    if(a.distance()===b.distance()){
        return a.index-b.index
    }
    return a.distance()-b.distance()})

pointArr.forEach(p=>{
    console.log(p.index+1)
})