var some: any[] = ['a', 1, 100];
var another: any[] = new Array(3);
for (var i = 0; i < some.length; i++) {
    another[i] = some[i] as number;
}
console.log(another);
console.log(another.concat(some));

//checking if the type of every element is a string
var is_string_array = (element, arr) => { return typeof element === "string" };

console.log(another, " is a string array: " + another.every(is_string_array));
console.log(["bob", "kanye", "jay"], " is a string array: " + ["bob", "kanye", "jay"].every(is_string_array));

function double(element: number, index, array) {
    console.log(element * 2);
    array[index] = element * 2;
}
var arr = [1, 2, 3].forEach(double);
console.log([1, 2, 3], "mapped to cosines are ", [1, 2, 3].map(Math.cos));
console.log([12, 1, 3, 5, 14, 6], "elements that are bigger than 5", [12, 1, 3, 5, 14, 6].filter((element, array) => element > 5))
console.log([12, 1, 3, 5, 14, 6], "sorted", [12, 1, 3, 5, 14, 6].sort((a, b) => a - b));

var value: any = "(Ugh nice watch, ugh nice watch Ugh nice watch. No more Mr. Nice Guy. Hello, Mr. Nice Watch)";
value = value.split(" ");
console.log(value);
console.log("united with reduce");
console.log(value.reduce((a, b) => a + " " + b));

//slice works the same on strings as on arrays

// reverse does what it means

var newArr = new Array(1, 2, 3, 4, 5);
console.log(newArr, "shift()", newArr.shift());
console.log(newArr, "pop()", newArr.pop());

//function returning an array

var fy = function (): number[] {
    return newArr
}
console.log(fy());

