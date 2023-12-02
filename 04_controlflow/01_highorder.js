//for of
//["",""]
//[{},{},{}]
const arr = [1,3,5,7,8];
for (const val of arr) {
    console.log(val);
}
const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);  
}
//Maps==unique values hote and it is a object//map->key value pairs, remembers order as we give whereas objects not remembers order
//JS main sab kuch objects hai
const map = new Map();
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('UK',"United Kingdom")
map.set('UK',"London")//returns only unique so this is overwritten and returned unique 
map.set('IN',"India")

console.log(map);
for (const key of map) {
    console.log(key);
}//we get in arrays
for (const [key,value] of map) {
    console.log(key,":",value);
}
const myObject = {
    'game1': "NFS",
    'game2': "Spiderman",
}
/*for (const [key,value] of myObject) {
    console.log(key,":",value);
}//in this way forof objects is not iterable8/*/
const myLan = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    sql: "SQL DB",
}
//==================for in============ 
//forin for objects
for (const value in myLan) {
        console.log(`${value} value is:${myLan[value]}`);
}
//forin for arrays
const tools = ["js","rb","py","cpp","html","css","php","java"];
for (const key in tools) {
    console.log(key);//gives indexes
    console.log(tools[key]);//gives values
}
//for in for maps is not iteratable
for (const key in map) {
    console.log(key);
}//map is not iterablein forin
