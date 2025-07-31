let log = false
let loop = 0

while(!log){
    console.log(loop)
if(loop === 3){
    log = true
}
loop ++
}
console.log(loop)
console.log('loop complete')

let num = 1

while(num<=100){
    if(num === 50){
        console.log('almost')
        num++
        continue;
    }
    if(num === 100){
        console.log('bobmo')
        num ++
        continue;
    }
    if(num%10 ===0){
        console.log(`checkpoint ${num}`)
    }
    num++
}
console.log('tayari')

let i = 3
while(i>0){
    console.log(i)
    i--
}
let zza = 15
do{
    console.log(zza)
    zza--
}while(zza < 15 && zza > 0)