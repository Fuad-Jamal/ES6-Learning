// function *generating () {
//     let x = 7
//     if( x => 0){
//         console.log('wataguan') 
//     }
//     console.log(0)
//     let yank = [4,2,2,4,5,2,5]
//     for (let yan of yank){
//         console.log(yan)
//         yield;
//     }
// }
// let xiq = generating()
// xiq.next()
// xiq.next()


function *generating () {
    yield 1
    yield 2
    yield 3
}
const generator = generating()
console.log(generator)


console.log(generator.next())