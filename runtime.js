function add(a,b){
    for(let i = 0; i < 1000000; i++) {
        a += b
    }
}
function subtract(a,b){
    return a-b
}
function multiply(a,b){
    return a*b
}

function time(){
    let fnz = [add, subtract, multiply]
    let times = []
    for(let each of fnz){
       let before = Date.now()
       each(1000000, 2000000)
       let after = Date.now()
       times.push(after - before)
    }
    return times.indexOf(Math.min(...times))
}
console.log(time())
