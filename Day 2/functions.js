
// let s = parseFloat(window.prompt("Enter the input a number:"));
// let d = parseFloat(window.prompt("Enter the input b number:"));
// let c=s+d;
// let a=s-d;
// let b=s*d;
// let e=s/d;
// console.log(c,a,b,e);

///create a function to find largest of three numbers and input should be given by end user
let a = parseFloat(window.prompt("Enter the input a number:"));
let b = parseFloat(window.prompt("Enter the input b number:"));
let c = parseFloat(window.prompt("Enter the input a number:"));
function whichgreat(a,b,c) {
    if(a>b||a>c){
      console.log("The greatest number is:",a)
    }
    else if(b>c){
      console.log("the greatest number is:",b);
    }
    else{
      console.log("The greates number is ",c);
    }
}
console.log(whichgreat(a,b,c));
