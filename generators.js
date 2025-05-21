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
   let id = 1
   while(true){
    yield id
    id++
   }
}
const generator = generating()
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())

