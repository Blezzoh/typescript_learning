var some = ['a', 1, 100];
var another = new Array(3);
for (var i = 0; i < some.length; i++) {
    another[i] = some[i];
}
console.log(another);
console.log(another.concat(some));
//checking if the type of every element is a string
var is_string_array = function (element, arr) { return typeof element === "string"; };
console.log(another, " is a string array: " + another.every(is_string_array));
console.log(["bob", "kanye", "jay"], " is a string array: " + ["bob", "kanye", "jay"].every(is_string_array));
function double(element, index, array) {
    console.log(element * 2);
    array[index] = element * 2;
}
var arr = [1, 2, 3].forEach(double);
console.log([1, 2, 3], "mapped to cosines are ", [1, 2, 3].map(Math.cos));
console.log([12, 1, 3, 5, 14, 6], "elements that are bigger than 5", [12, 1, 3, 5, 14, 6].filter(function (element, array) { return element > 5; }));
console.log([12, 1, 3, 5, 14, 6], "sorted", [12, 1, 3, 5, 14, 6].sort(function (a, b) { return a - b; }));
var value = "(Ugh nice watch, ugh nice watch Ugh nice watch. No more Mr. Nice Guy. Hello, Mr. Nice Watch)";
value = value.split(" ");
console.log(value);
console.log("united with reduce");
console.log(value.reduce(function (a, b) { return a + " " + b; }));
//slice works the same on strings as on arrays
// reverse does what it means
var newArr = new Array(1, 2, 3, 4, 5);
console.log(newArr, "shift()", newArr.shift());
console.log(newArr, "pop()", newArr.pop());
//function returning an array
var fy = function () {
    return newArr;
};
console.log(fy());
var juice = (function () {
    function juice(name, price) {
        this._name = name;
        this._price = price ? price : 0;
    }
    return juice;
})();
//array of objects
var juices = [new juice("mango", 10), new juice("apple", 5), new juice("pineapple", 11)];
console.log();
console.log("juices");
for (var _i = 0; _i < juices.length; _i++) {
    var i_1 = juices[_i];
    console.log(i_1._name);
    console.log(i_1._price);
}
