// shows how the most important string methods work
var mystring = (function () {
    function mystring(str) {
        this.str = str;
    }
    mystring.prototype.print = function () {
        console.log(this.str);
    };
    mystring.prototype.char_at = function (x) {
        return this.str.charAt(x);
    };
    mystring.prototype.char_code_at = function (x) {
        return this.str.charCodeAt(x);
    };
    mystring.prototype.concat = function () {
        var strs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            strs[_i - 0] = arguments[_i];
        }
        for (var _a = 0; _a < strs.length; _a++) {
            var words = strs[_a];
            this.str += words;
        }
    };
    mystring.prototype.index_of = function (str) {
        return this.str.indexOf(str);
    };
    mystring.prototype.last_index_of = function (str) {
        return this.str.lastIndexOf(str);
    };
    mystring.prototype.locale_compare = function (str) {
        return this.str.localeCompare(str);
    };
    mystring.prototype.slice = function (start, end) {
        return this.str.slice(start, end);
    };
    mystring.prototype.split = function (separator, limit) {
        return this.str.split(separator, limit);
    };
    mystring.prototype.toString = function () {
        return this.str;
    };
    return mystring;
})();
var str = new mystring("ugh nice watch! ugh nice watch!\n");
str.print();
console.log("char at 2: " + str.char_at(2));
console.log("ascii for char at 2" + str.char_code_at(2));
console.log("\nlets make the string longer\n");
str.concat("Ugh nice watch. ", "No more Mr. Nice Guy. ", "Hello, Mr. Nice Watch\n");
str.print();
console.log(str.locale_compare("(Ugh nice watch, ugh nice watch Ugh nice watch. No more Mr. Nice Guy. Hello, Mr. Nice Watch)"));
console.log(str.locale_compare("watch"));
console.log();
console.log(str.slice(2, 15));
console.log();
console.log(str.split("watch", 10));
console.log();
