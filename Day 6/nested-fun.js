// function parent() {
//     function child() {
//         console.log("i am child fun");
//     }
//     child()
// }
// parent()

// var a = 10;
// let b = 20;
// function parent1(){
//     var a="hello"
//     let b="hi"
//     console.log(a);
//     console.log(b);
//     console.log(this.a);
//     console.log(this.b);
// }
// parent1();

// console.log("start")
// function main()
// {
//     let a = 10;
//     function child()
//     {
//         console.log(a);
//     }
//     return child
// }
// main()()

console.log("start")
function parent(){
      function child1() {
        console.log("i am child1");
       } return child1;
      function child2(){
        console.log("i am child2");
      }
      return [child,child2]
}

parent()[0]()()
parent()[1]()