function greet(name) {
    return "hello " + name;
}
function caller() {
    var msg = greet("King");
    console.log(msg);
}
caller();
