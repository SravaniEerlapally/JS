if(true){
    let a =5 
    var d =10
    const c =15
}
//console.log(a)//as it in local scope we can't get that value
console.log("local scope but for var no scope:",d)//var has no scope at all
//console.log(c)//const->as it in local scope we can't get

let a = 30
const b = 55
console.log(a)
console.log(b)
//++++++++++++++interesting+++++++++++++++++++
console.log(addOne(5));//here it works before initialization
function addOne(num){
    return num + 1;
}
console.log(addTwo(6));//here before function we won't get
const addTwo = function(num){
    return num + 2;
}
//console.log(addTwo(6));-->here we get output



