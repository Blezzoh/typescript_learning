declare var require: any;

import shape = require("./shape_interface"); 
import circle = require("./circle"); 
import triangle = require("./triangle");

let arr = [new circle.circle(5), new triangle.triangle(4,5)];

for(let i of arr){
    console.log("area = ", i.area());
}