var circle = require("./circle");
var triangle = require("./triangle");
var arr = [new circle.circle(5), new triangle.triangle(4, 5)];
for (var _i = 0; _i < arr.length; _i++) {
    var i = arr[_i];
    console.log("area = ", i.area());
}
