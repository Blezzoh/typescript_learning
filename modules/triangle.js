var triangle = (function () {
    function triangle(base, height) {
        this.base = base;
        this.height = height;
    }
    triangle.prototype.area = function () {
        return this.base * this.height * 1 / 2;
    };
    return triangle;
})();
exports.triangle = triangle;
