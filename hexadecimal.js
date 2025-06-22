function color(){
    let one = Math.floor(Math.random()*0xFFFFFF)
    let hexade = one.toString(16)
    return '#' + hexade
}
console.log(color())