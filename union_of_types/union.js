// typescript provides a way to unite types using | 
var big = 12;
console.log(big);
big = "abba group";
console.log(big);
function display(num) {
    if (typeof num === "number") {
        console.log(num);
    }
    else {
        for (var _i = 0; _i < num.length; _i++) {
            var i = num[_i];
            console.log(i);
        }
    }
}
display(12);
display([1, 2, 3, 4]);
