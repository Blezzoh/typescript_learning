var city_1 = {
    name: "Sewanee",
    leader: "vice chancellor",
    population: 200
};
var city_2 = {
    name: "Monteagle",
    leader: "-",
    population: 5000
};
var print_city = function (name) {
    console.log(name.name, name.leader, name.population);
};
var count_1 = {
    name: "franklin",
    leader: "God",
    cities: [city_1, city_2]
};
console.log("county name", count_1.name);
console.log("county leader", count_1.leader);
console.log("county cities");
for (var _i = 0, _a = count_1.cities; _i < _a.length; _i++) {
    var i = _a[_i];
    print_city(i);
}
var area31 = {
    name: "31",
    population: 0,
    leader: "alien",
    coordinates: 37383
};
console.log("area 31", area31);
