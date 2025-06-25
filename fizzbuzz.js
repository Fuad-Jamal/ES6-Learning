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
fizz(1, 100)