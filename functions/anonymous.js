var vector_length = function (x, y, z) {
    var sum_of_squares = z ? x * x + y * y + z * z : x * x + y * y;
    return Math.sqrt(sum_of_squares);
};
console.log(vector_length(1, 1, 1));
console.log(vector_length(2, 2));
