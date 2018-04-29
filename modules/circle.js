var circle = (function () {
    function circle(radius) {
        this.radius = radius;
    }
    circle.prototype.area = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return circle;
})();
exports.circle = circle;
