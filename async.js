
const timing = (ms) =>{
const time = new Promise((resolve,reject) => {
    setTimeout(() => {
        reject("Time is up!");
    }, ms);
})
return time
}

const fetch = async() => {
    try{
    const rere = await timing(1000)
    console.log('kabir',rere)
    }catch(err){
        console.log(err)
    }
}
fetch()
console.log('setu')