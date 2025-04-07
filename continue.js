for(let i = 0; i<100; i+=10){
    console.log(i)
    if(i === 20){
        i += 20
    continue;
    }
    console.log('loop num', i)
if(i==60){
    break;
}
}

for(let log= false, i=1; !log; i++){
    console.log('invalid log')
    if(i === 3){
        log = true
    }
}
console.log('complete log')