const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [prod2_id, code2] = input[0].split(' ');
// Please Write your code here.

class Product {
    constructor(prod_id="codetree", code="50"){
        this.prod_id = prod_id
        this.code = code;
    }
}

let product = new Product()
console.log("product "+product.code + " is "+product.prod_id)
product.code = code2;
product.prod_id = prod2_id;
console.log("product "+product.code + " is "+product.prod_id)