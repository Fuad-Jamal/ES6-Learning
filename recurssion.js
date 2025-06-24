let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = (array, index) => {
    if(index === arr.length - 1){
        console.log(`base case reached at index: ${index}`)
        return array[index]
    }
    console.log(`current index: ${index}, current value: ${array[index]}`)
    return array[index] + sum(array, index + 1)
}
const result = sum(arr, 2)
console.log(result)

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