// const waka = new Promise((res, rej) => {
//   setTimeout(() => {
//     console.log("Waka Waka!");
//     rej("don kd");
//   }, 2000);
// });
// // console.log(waka)
// waka.then((res) => {
//     console.log("promise olevoir");
//     console.log(res);
//     console.log(waka)
//     return "impala";
//   })
//   .then((chr) => {
//     console.log(chr);
//   })
//   .catch((error) => {
//     console.log(error);
//     console.log(waka)
//   });

// console.log("program start")
// let saka = new Promise((resolve, reject) => {
//     setTimeout(()=>{
// resolve('promise resolved')
//     },3000)
// }).then((res)=>{
//     console.log(res)
//     return new Promise ((resolve, reject) => {
//         setTimeout(()=>{
//             resolve('second promise resolved')
//         },3000)
//     })
// }).then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })
// console.log(saka)


const one = new Promise ((resolve, reject) => {
    setTimeout(()=>{
        resolve(10)
    }, 3000)
})
const two = new Promise ((resolve, reject) => {
    setTimeout(()=>{
        resolve(20)
    }, 5000)
})
const allPromise = Promise.all([one, two]).then((res)=>{
    let answer = res[0] + res[1]
    console.log(res)
    console.log(answer)
})

function isPromise(value){
    if(value !== null && typeof value === 'object' || typeof value === 'function'){
        return typeof value.then === 'function'? true: false
    }
}
console.log(isPromise({}))