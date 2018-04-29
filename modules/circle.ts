
import shape = require("./shape_interface");

export class circle implements shape.shape{
    radius:number;
    constructor(radius:number){
        this.radius = radius;
    }
    public area():number{
        return Math.PI * Math.pow(this.radius, 2);
    }
}