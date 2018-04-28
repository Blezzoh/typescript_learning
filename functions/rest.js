function average() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i - 0] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0; _a < nums.length; _a++) {
        var x = nums[_a];
        sum += x;
    }
    return sum / nums.length;
}
console.log(average(1, 2, 3, 4, 6, 2, 4, 5, 6, 8, 13));
