
const timing = (ms) =>{
const time = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Time is up!");
    }, ms);
})
return time
}
console.log(timing(2000))
