// typescript provides a way to unite types using | 

let big:number|string = 12
console.log(big);
big = "abba group";
console.log(big);


function display(num:number|number[]){
    if(typeof num === "number"){
        console.log(num)
    }
    else{
        for(let i of num){
            console.log(i);
        }
    }
}

display(12);
display([1,2,3,4]);

