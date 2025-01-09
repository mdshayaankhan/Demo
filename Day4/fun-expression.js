// let demo = function(){
//     console.log("hello")
// }
// console.log(demo)
// demo()


// 
// let operator = function(a) { 
//     console.log(a); 
// };


// operator(10, 20, 30);  
// output:is 10

// to get all 10,20,30 we should use object:"arguments"

// let operator = function(a) { 
//     console.log(a); 
//     console.log(arguments);
//     console.log(arguments[1]);
//     console.log(arguments[2]);
// };
// operator(10, 20, 30); 


///create a function expression to perform arthematic operation for three numbers and find the largest of three and the input should be taken from the end user.
let demo1 = function () {
    let a = Number(prompt('Enter the first number'));
    let b = Number(prompt('Enter the second number'));
    let c = Number(prompt('Enter the third number'));
    let d = a + b + c;
    console.log(d);
    let e = a * b * c;
    console.log(e);
    let f = a - b - c;
    console.log(f);
    //function largest(a, b, c) {
    if (a > b && a > c) {
      console.log('The largest number is: ' + a);
    } else if (b > c) {
      console.log('The largest number is: ' + b);
    } else {
      console.log('The largest number is: ' + c);
    }
  };
  
