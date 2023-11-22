const name = "sravani"
const repoCount = 50
console.log(name + repoCount + " Value");//not readable
console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);//modern way with back strings preferred and high readable
const gameName = new String('SravaniE')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());//original string mein change nahi hua
console.log(gameName.charAt(4));
console.log(gameName.indexOf('n'));
const newString = gameName.substring(0,4)
console.log(newString);