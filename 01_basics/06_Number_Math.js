const num=400;//automatically defines as number
console.log(num);
const balance = new Number(1000);//specifically says it is number when done in objects
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const num2 = 233.55;
console.log(num2.toPrecision(3))
