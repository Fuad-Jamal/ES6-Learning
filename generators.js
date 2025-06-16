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


// function *generating () {
//    let id = 1
//    while( id<=10){
//     yield id
//     id++
//    }
// }
// const generator = generating()

// for(const val of generator){
//    console.log(val)
// }

// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())


const random = function *(amount, min, max){
for(let i=0; i<amount; i++){
   yield Math.floor(Math.random() * (max-min +1) + min)
}
}
const nums = random(10, 1, 100)
for(const num of nums){
   console.log(num)
}