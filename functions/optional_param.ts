function print_salary( salary:number,name?:string):void{
    var msg:string = name ? name + " gets paid " + salary : <string> <any> salary;
    console.log(msg);
}
print_salary(200);
print_salary(1000000, "bron");