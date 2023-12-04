//MAP 
const arr=[1,2,3,4,5]
const newarr = arr.map((num)=>num*10).map((num)=>{
    return num*num}).filter((num)=>num>30);
console.log(newarr)
const arr2 = arr.map((num)=>num-10);
console.log(arr2)//[-9,-8,-7,-6,-5]
//FILTER
const coding = [{lang:"java",published:1995}, 
                {lang:"ruby",published:1990},
                {lang:"cpp",published:1987},
                {lang:"python",published:1981},
                {lang:"javascript",published:1997}]
const mycode = coding.filter((item)=> item.published>1990)
console.log(mycode)
//NOTE:In call back fn if you start code in block space{} then definitely you must return/use return keyword otherwise you'll get empty array[] as output
//nameless arrow fn is only called as call back fn

//REDUCE
const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);