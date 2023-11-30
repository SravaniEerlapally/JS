//Destructuring
const course ={
    coursename: "js in hindi",
    price: "999",
    Instructor: "Hitesh",
}
console.log(course.Instructor);//lengthy and not readable
const {Instructor} =course;//better readablity
console.log(Instructor);
const {Instructor:Instr} =course;
console.log(Instr);
//-------JSON API-------------
/*=======json there won't be any objectname and keys are also done in strings format=====*/
{
    "name": "Sravani",
    "course1": "js",
    "price": "free"
}
[
    {},
    {},
    {}
]
