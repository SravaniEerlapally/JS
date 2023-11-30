const tinderUser = new Object()//singleton object
const tinderUser1 = {}//nonsingleton object
tinderUser.id = "12345";
tinderUser.name = "Jemmy";
tinderUser.isLogginedin = false
console.log(tinderUser);
//console.log(tinderUser1);

const User = {
    email: "jem@gmail.com",
    fullName: {
        userfullname:{
            firstname: "Sravani",
            lastname: "Eerlapally"
        }
    }
}
console.log(User);
console.log(User.fullName.userfullname.firstname);
//merging objects
const obj1 = {1:'a',2:'b'}
const obj2 = {3:'c',4:'d'}
const obj3 = {obj1,obj2};
console.log(obj3);
//2nd way merging
const obj4 = Object.assign({},obj1,obj2);//impp
console.log(obj4);
//3rd way mostly used
const obj5 = {...obj1,...obj2}
console.log(obj5);
