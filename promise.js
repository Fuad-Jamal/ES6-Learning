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

console.log("program start")
let saka = new Promise((resolve, reject) => {
    setTimeout(()=>{
resolve('promise resolved')
    },3000)
    setTimeout(()=>{
        reject('promise rejected')
    }, 2000)
}).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})
console.log(saka)
