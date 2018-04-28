// shows how the most important string methods work
class mystring{
    str:string;
    constructor (str:string){
        this.str = str;
    }
    print():void{
        console.log(this.str);
    }
    get
    char_at(x:number){
        return this.str.charAt(x);
    }
    char_code_at(x:number){
        return this.str.charCodeAt(x);
    }
    concat(... strs:string[]){
        for(let words of strs){
            this.str += words;
        }
    }
    index_of(str:string):number{
        return this.str.indexOf(str);
    }
    last_index_of(str:string):number{
        return this.str.lastIndexOf(str);
    }
    locale_compare(str:string):number{
        return this.str.localeCompare(str);
    }
    slice(start:number, end:number){
        return this.str.slice(start, end);
    }
    split(separator:string, limit:number){
        return this.str.split(separator, limit);
    }
    toString(){
        return this.str;
    }
    // other methods are self explanatory like to uppercase, lowercase, ...
}

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
console.log(str.slice(2,15));
console.log();
console.log(str.split("watch", 10));
console.log();
