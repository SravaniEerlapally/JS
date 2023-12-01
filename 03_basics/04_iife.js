//Immediately Invoked Function Expressions(IIFE)
(function get(){
    console.log("IIFI");
})();//named iife
((name) => {
    console.log(`hey ${name}`);
})("sravani");//unnamed iife
