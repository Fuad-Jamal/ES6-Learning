function color(){
    let one = Math.floor(Math.random()*0xFFFFFF)
    let hexade = one.toString(16)
    return '#' + hexade
}
console.log(color())

function round(a,b){
 return parseFloat(a.toFixed(b))
}
console.log(round(1.234567, 2))
