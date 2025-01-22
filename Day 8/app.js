//asyncronous function

// window.setTimeout(()=>{
//     console.log("iam settimeout")
// },5000)

// window.setInterval(()=>{
//     console.log("I am setInterval")
// },3000)

// function main(m,n) {
//     setTimeout(()=>{
//         for(let i=m;i<=n;i++){
//             console.log(i);
//         }
//     },5000)
// }
// main(1,10)

// function sample() {
//     console.log("start")
// }
// sample()


///promise
let online=window.navigator.online

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(online==true){
            return resolve()
        }else{
            return reject()
        }
    },2000)
})
.then(()=>{
    console.log("Online... 😊")
})
.catch(()=>{
    console.log("offline... 😴")
})