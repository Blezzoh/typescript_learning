function average(...nums:number[]):number{
    var sum:number = 0;
    for(let x of nums){
        sum += x;
    }
    return sum/nums.length;
}

console.log(average(1,2,3,4,6,2,4,5,6,8,13));