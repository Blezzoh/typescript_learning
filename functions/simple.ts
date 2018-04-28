function greet( name:string):string {
  return "hello " + name;
}

function caller(){
  var msg:string = greet("King");
  console.log(msg);
}

caller();




