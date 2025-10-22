const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = parseInt(input[0]);
const tree = {}

for(let i=1; i<=n; i++){
    const [root, left, right] = input[i].split(" ")
    tree[root] = [left, right]
}

let preorder = ""
let inorder = ""
let postorder = ""

function buildPreorder(node){
    if(node===".") return
    preorder += node
    buildPreorder(tree[node][0])
    buildPreorder(tree[node][1])
}

function buildInorder(node){
    if(node===".") return
    buildInorder(tree[node][0])
    inorder += node
    buildInorder(tree[node][1])
}

function buildPostOrder(node){
    if(node===".") return
    buildPostOrder(tree[node][0])
    buildPostOrder(tree[node][1])
    postorder += node
}

buildPreorder("A")
buildInorder("A")
buildPostOrder("A")

console.log(preorder)
console.log(inorder)
console.log(postorder)