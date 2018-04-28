class menu {
    items: string[];
    constructor(){
        this.items = new Array();
    }
    addItem(name:string):void{
        this.items.push(name);
    }
    printItems():void{
        for(let i of this.items){
            console.log(i);
        }
    }
}
class restaurant extends menu{
    name: string;
    constructor(id:string){
        super();
        this.name = id;
    }
    printItems():void{
        console.log("restaurant", this.name, "has the menu consisting of");
        super.printItems();
    }
}

var sterling = new restaurant("Sterlings");
sterling.addItem("smoothie");
sterling.addItem("chicken salad");
sterling.addItem("apple juice");
sterling.printItems();
console.log("is", sterling, "instance of restaurant");
console.log(sterling instanceof restaurant);
console.log("sterling is not type restaurant instead it is", typeof sterling);
