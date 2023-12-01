//this refers to current context
const user = {
    username : "sravani",
    id : 588,
    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`),
        console.log(this)
    },
}
user.welcomeMessage();
user.username = "Nimmy",
user.welcomeMessage();
console.log(this);//we get empty in node whereas in engine we get windows object
function chai() {
    console.log(this);
}
chai();//in function this will show so many 
/*function chaii(){
    let username = "sravani"
    console.log(this.username);
}
chaii();//in functions this is not used, you'll get undefined*/
const cafe = () =>{
    let user = "Vishnu"
    console.log(this.user);//o/p:undefined
    console.log(this);//give o/p:{}
}

cafe()
//===Explicit Arrow fn==={}->using this we must return
const addTwo = (n1,n2) => {
    return n1 + n2;
}
console.log(addTwo(5,8));
//==implicit arrow fn==when no {} then no needof return
const addOne = (n1) => n1 + 1;
//const addOne = (n1) => (n1+1);
console.log(addOne(7));
const name1 = () => ({firstname:"Sravani",secondName:"Eerlapally"})
console.log(name1());







