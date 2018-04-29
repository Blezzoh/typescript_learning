
import shape  = require("./shape_interface");

export class triangle implements shape.shape{
    base:number; 
    height:number;
    constructor(base:number, height:number){
        this.base = base;
        this.height = height;
    }
    area():number{
        return this.base * this.height * 1/2;
    }
}