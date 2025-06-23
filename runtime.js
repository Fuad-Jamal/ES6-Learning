function add(a,b){
    return a+b
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
    for(let t of fnz){
       let before = Date.now()
       t(1000000, 2000000)
       let after = Date.now()
       times.push(after - before)
    }
    return times.indexOf(Math.min(...times))
}
console.log(time())
