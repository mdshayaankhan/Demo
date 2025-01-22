// function main(a) {
//     console.log(a);
//     console.log(a());
// }
// main(function(){
//     return "I am callback function."
// })
// main(function(){
//     return "I am callback function."
// })


// function main(task) {
//     console.log(task(10,20));
// }
// main(function(a,b){
//     return a+b;
// })
// main(function(a,b){
//     return a-b;
// })
// main(function(a,b){
//     return a*b;
// })


//--> it was introduced in ES-6 version 2015 (ECMA-SCRIPT)

// let a = () => console.log("hello");
// console.log(a);
// console.log(a());

// let b = () => {return "explictAF" };
// console.log(b);
// console.log(b());

let operation=(a,b,task) => {
    console.log(task(a,b));
}
operation(a= Number(window.prompt("Enter the value of a for addition:"),
        b= Number(window.prompt("Enter the value of b for addition:")),
        (a,b) => {
            return a+b;
        }
    ))