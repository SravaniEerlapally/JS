let myDate = new Date()
console.log(typeof myDate);//interview ques
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
//console.log(myDate.toLocaleDatesString());
console.log(myDate.toLocaleString());

let createDate = new Date(2023,10,23)
console.log(createDate.toDateString());

let Date2 = new Date(2023,10,23,3,50,10);
console.log(Date2.toLocaleString());

let Date3 = new Date("11-23-2023")//MM-DD-YY
console.log(Date3.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(Date3.getTime());//imp asked in iv
console.log(Math.floor(Date.now()/1000));//seconds 

let Date4 = new Date()
console.log(Date4);
console.log(Date4.getDate());
console.log(Date4.getDay());
console.log(Date4.getMonth() + 1);
console.log(`${Date4.getMonth()} and the ${Date4.getDay()}`);

Date4.toLocaleString('default',{weekday:"long",day:"numeric"});
console.log(Date4.toLocaleString('default',{weekday:"long",day:"numeric"}));





