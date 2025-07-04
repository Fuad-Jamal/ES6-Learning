function happy(yuu){
    let saw = new Set()
    while(yuu!==1 && !saw.has(yuu)){
    saw.add(yuu)
    yuu = (''+yuu).split('').map(x=>x*x).reduce((a,b)=>a+b)
}
return yuu ===1? 'happy': 'unhappy'
}
console.log(happy(1))
console.log(happy(7))
console.log(happy(10))
console.log(happy(20))
console.log(happy(23))
console.log(happy(100))