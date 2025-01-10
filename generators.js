function *generating () {
    let x = 7
    if( x => 0){
        console.log('wataguan') 
    }
    console.log(0)
    let yank = [4,2,2,4,5,2,5]
    for (let yan of yank){
        console.log(yan)
        yield;
    }
}
let xiq = generating()
xiq.next()
xiq.next()
