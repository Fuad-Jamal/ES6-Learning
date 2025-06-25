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
    if(str === '' || str.length === 1 || str.length=== 0 || (str[0]===str[1])) return true;
}

// Test cases for palindrome strings
console.log(palinDrome("racecar")) // true
console.log(palinDrome("hello")) // false
console.log(palinDrome("A man a plan a canal Panama")) // true
console.log(palinDrome("No lemon, no melon")) // true
console.log(palinDrome("Was it a car or a cat I saw?")) // true
console.log(palinDrome("12321")) // true
console.log(palinDrome("12345")) // false
