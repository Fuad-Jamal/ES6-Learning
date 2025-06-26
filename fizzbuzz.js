const fizz = (start, end) => {
    if(start === end){
        return
    }
    if(start%3===0 && start%5===0){
        console.log("FizzBuzz")
    }else if(start%3===0){
        console.log('Fizz')
    }else if(start%5===0){
        console.log('Buzz')
    }else{
        console.log(start)
    }
    fizz(start + 1, end)
}
// fizz(1, 100)

function palinDrome(str){
    if(str === '' || str.length === 1 || str.length=== 0 || (str[0]===str[1])) return true
    if(str[0]!== str[str.length - 1]) return false

    return palinDrome(str.substring(1, str.length - 1))
}

// Test cases for palindrome strings
// console.log(palinDrome("racecar"))
// console.log(palinDrome("hello")) 
// console.log(palinDrome("A man a plan a canal Panama"))
// console.log(palinDrome("No lemon, no melon"))
// console.log(palinDrome("Was it a car or a cat I saw?"))
// console.log(palinDrome("12321"))
// console.log(palinDrome("12345")) 

const flatten = (arr) => {
    const result  = []
    for(const x of arr){
        if(Array.isArray(x)){
         const flattened = flatten(x)
            result.push(...flattened)
        }else{
        result.push(x)
        }
    }
    
    return result

}

// console.log(flatten([1, [2, 3], [4, [5, 6]], 7]))        
// console.log(flatten([[1, 2], [3, 4], 5]))          
// console.log(flatten([1, [2, [3, [4, [5]]]]]))                 
// console.log(flatten([[[[[]]]]]))      
// console.log(flatten([1, [], [2, [3, []]], 4]))  
// console.log(flatten([[[1]], [[2]], [[3]]]))  
// console.log(flatten([1, [2, [3, [4, [5, [6, [7]]]]]]])) 


const flat = (obj)=>{
    let result = {}
for(const [key,value] of Object.entries(obj)){
    if(typeof value === 'object'){
        const flats = flat(value)
        result = {...result, ...flats}
    }else{
        result[key] = value
    }
}

    return result
}


console.log(flat({ a: 1, b: { c: 2, d: 3 } }))
console.log(flat({ a: { b: { c: { d: 1 } } } }))
console.log(flat({ a: 1, b: { c: 2 }, d: 3 }))
console.log(flat({}))
console.log(flat({ a: { b: 2 }, c: { d: { e: 3 } }, f: 4 }))
console.log(flat({ a: { b: { c: 1 } }, d: 2, e: { f: 3, g: { h: 4 } } }))