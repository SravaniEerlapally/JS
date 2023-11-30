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
