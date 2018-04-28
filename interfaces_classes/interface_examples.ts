interface city{
    name:string;
    population:number;
    leader:string;
}
interface county{
    name:string;
    leader:string;
    cities:city[];
}

var city_1:city={
    name: "Sewanee",
    leader: "vice chancellor",
    population: 200
};

var city_2:city = {
    name: "Monteagle",
    leader: "-",
    population: 5000
}

var print_city= (name:city):void =>{
    console.log(name.name, name.leader,name.population);
}
var count_1:county = {
    name:"franklin",
    leader: "God",
    cities: [city_1, city_2]
}

console.log("county name", count_1.name);
console.log("county leader", count_1.leader);
console.log("county cities");
for(let i of count_1.cities){
    print_city(i);
}
//inheritance

interface area extends city{
    coordinates:number| number[]
}

var area31:area = {
    name: "31",
    population: 0,
    leader: "alien",
    coordinates: 37383
}
console.log("area 31", area31);
