const num=400;//automatically defines as number
console.log(num);
const balance = new Number(1000);//specifically says in o/p as it is number when done in objects
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const num2 = 233.55;
console.log(num2.toPrecision(3));

const hundreds = 100000000
console.log(hundreds.toLocaleString('en-IN'));
//====================MATH=====================
console.log("======================================MATH======================================");
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.55));//used mostly than ceil & floor
console.log(Math.ceil(6.3));
console.log(Math.floor(6.9));
console.log(Math.pow(2,3));
console.log(Math.min(-4,6,8,9,2,0));
console.log(Math.max(5,77,88,99,9999));

console.log(Math.random());//gives random no b/w 0 & 1
console.log(Math.floor(Math.random()*10) + 1);//we shifted values to left to get no>1 & to avoid zero's we added 1 

const min = 10;
const max = 44;
console.log(Math.floor(Math.random() * (max-min+1)) + min)




















                                    
