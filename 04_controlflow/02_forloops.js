coding = ["js","ruby","cpp","python","java"]
console.log(coding)
coding.forEach( function (item){console.log(item)} )//call back function mein naam nahi hota
coding.forEach( (val) => {
    console.log(val);
})//arrow fn
function printMe(item){
    console.log(item);
}
coding.forEach(printMe)//here fn reference dete hai bus 

coding.forEach( (item,index,arr)=>{
    console.log(item,index,arr);
})
const mycode = [
    {
       langName: "javaScript",
       langFileName: "js" 
    },
    {
        langName: "java",
        langFileName: "java" 
    },
    {
        langName: "python",
        langFileName: "py"
    }
]
mycode.forEach((item)=>{
    console.log(item.langName)
    console.log(item.langFileName)

})