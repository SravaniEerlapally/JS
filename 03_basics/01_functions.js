function sayMyName(){
    console.log("Sravani");
}
//sayMyName->reference ||||sayMyName->calling function
sayMyName();
function addTwoNum(num1,num2){
    console.log(num1+num2);
}
addTwoNum(5,7);
addTwoNum(4,null);
function addNums(n1,n2){
    let result = n1 + n2
    //console.log("Sravani");
    return result;
}
const result = addNums(3,66);

console.log("Result: ",result);
function loginUserMessage(username){
    if(!username){
        console.log("Please Enter your Name");
        return;
    }
    return `${username} just logged in`

}
console.log(loginUserMessage("Sravani"));
console.log(loginUserMessage());
function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(22,555,99,777));

const user = {
    username: "SRAVANI",
    id: 2000,
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and id is ${anyobject.id}`);
}
handleObject(user)
handleObject({
    username: "KIM",
    id: 555
})

const arr = [200,300,500,800]
function returnSecVal(getnum){
    return getnum[1];
}
console.log(returnSecVal(arr));
console.log(returnSecVal([55,66,88,99]))