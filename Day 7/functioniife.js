// (function(){
//     console.log("hello")
// })();

// ((a,b)=>{
//     console.log(a-b)
// })(10,10);

// (function demo(){
//     console.log("hello demo")
// })();


// let arr = [10,20,"hello",true,1n,undefined]
// console.log(arr);

/// using new keyword to create an object and allocate memory

// let arr1 =new Array(10,20,"hello",true)
// console.log(arr1);

let obj = {
    name: "abhi",
    id : 1,
    arr : [10,20,30],
    boolean : true,
    demo: function(){
        console.log("this is funciton");
    } 
}
console.log(obj)
console.log(obj.arr);
console.log(obj.demo());


function obj1(name,id){
     this.name= name;
     this.id =id;
}
let p1 = new obj1("Kumar",1)
console.log(p1);
console.log(p1.name);
console.log(p1.id);