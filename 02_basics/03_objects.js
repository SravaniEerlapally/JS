//singleton->Object.create

//object literals

const mySym = Symbol("key1")//symbol declaration

const JsUser = {
    name: "Sravani",
    "full Name": "SravaniEerlapally",
    [mySym]: "mykey1",//symbol format
    age: 20,
    location: "Hyderabad",
    email: "sravani@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["Friday","Saturday"]
}
console.log(JsUser.email);
console.log(JsUser["email"]);//better way to access in objects
//console.log(JsUser.full Name);//here we get error
console.log(JsUser["full Name"]);
console.log(JsUser[mySym]);

JsUser.email = "sravani@chatgpt.com";
//Object.freeze(JsUser);
JsUser.email = "sravani@gmal.com";
//console.log(JsUser);

JsUser.greeting = function(){
    console.log(`Hello JsUser,${this.name}`);//refering the object by back ticks
}
JsUser.greeting2 = function(){
    console.log("Hello JsUser");
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());


