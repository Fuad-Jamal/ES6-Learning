function* fibonacciGenerator(limit){
    let x = 0
    let y = 1
    while(x<=limit){
        yield x
        let next = x+y
        x = y
        y = next
    }
}

const fibo = (fibonacciGenerator(20))
for(const num of fibo){
    console.log(num)
}
fibo.next() // { value: undefined, done: true }