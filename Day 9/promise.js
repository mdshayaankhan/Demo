// function main(m,n) {
//     new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(isNaN(m) || isNaN(n) ){
//                 return reject()
//             }
//             for (let i = m; i <= n; i++) {
//                 console.log(i);
//             }
//             return resolve()
//         },5000)

//     })
//     .then(()=>console.log("promise accepted"))
//     .catch(()=>
//         console.log("error occured")
//     )
// }
// main(1,10);

// function sample() {
//     console.log("printed numbers")
// }
// sample()