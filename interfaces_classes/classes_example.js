var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var menu = (function () {
    function menu() {
        this.items = new Array();
    }
    menu.prototype.addItem = function (name) {
        this.items.push(name);
    };
    menu.prototype.printItems = function () {
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var i = _a[_i];
            console.log(i);
        }
    };
    return menu;
})();
var restaurant = (function (_super) {
    __extends(restaurant, _super);
    function restaurant(id) {
        _super.call(this);
        this.name = id;
    }
    restaurant.prototype.printItems = function () {
        console.log("restaurant", this.name, "has the menu consisting of");
        _super.prototype.printItems.call(this);
    };
    return restaurant;
})(menu);
var sterling = new restaurant("Sterlings");
sterling.addItem("smoothie");
sterling.addItem("chicken salad");
sterling.addItem("apple juice");
sterling.printItems();
console.log("is", sterling, "instance of restaurant");
console.log(sterling instanceof restaurant);
console.log("sterling is not type restaurant instead it is", typeof sterling);
