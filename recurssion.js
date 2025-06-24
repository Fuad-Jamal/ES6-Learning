let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = (array, index) => {
    if(index === arr.length - 1){
        console.log(`base case reached at index: ${index}`)
        return array[index]
    }
    console.log(`current index: ${index}, current value: ${array[index]}`)
    return array[index] + sum(array, index + 1)
}
const resul = sum(arr, 2)
console.log(resul)

const mine = {
    gold: 3,
    left:{
        gold: 2,
        left:{
            gold:4
        },
        right:{
            gold: 1,
        },
    },
    right: {
        gold: 5,
        right: {
            gold:1
        }
    }
}
const countGold = (level) =>{
    let total = level.gold
    if(level.left){
       w 
    }
}
const result = countGold(mine)
console.log(result)