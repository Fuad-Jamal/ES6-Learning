//  Numbers are fun! Write a generator function fibonacciGenerator(limit) 
//  that yields Fibonacci numbers up to a specified limit. Remember, 
//  the first two Fibonacci numbers are 0 and 1, and each 
//  subsequent number is the sum of the previous two.

function* fibonacciGenerator(limit) {
    let x = 0
    let y = 1
    while(x<=limit){
        yield x
        [x,y] = [y, x+y]
    }
}
fibonacciGenerator()
for(const num of fibonacciGenerator(10)){
    console.log(num);
}