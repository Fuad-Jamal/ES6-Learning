
const timing = (ms) =>{
const time = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Time is up!");
    }, ms);
})
return time
}
console.log(timing(2000))
timing(2000).then((message) => {
    console.log(message)
}
)
const fetch = async() => {
    const rere = await timing(1000)
    console.log('kabir',rere)
}
fetch()
console.log('setu')