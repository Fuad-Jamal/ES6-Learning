const waka = new Promise((res,rej)=>{
    setTimeout(() => {
        console.log('Waka Waka!');
        rej('don kd')
    }, 2000);
})
// console.log(waka)
waka.then((res)=>{
    console.log('promise olevoir')
    console.log(res)
}).catch((rej)=>{
    
})