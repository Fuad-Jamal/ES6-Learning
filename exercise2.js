function getUser(name) {
    return `Welcome back, dear ${name}!`;
}
console.log(getUser('John'))


function add(a, b) {
    return a + b;
}
function track(add){
    let begin = performance.now()
    let result = add(2,3)
    let end = performance.now()
    let time = end - begin
    console.log(`Function executed in ${time} milliseconds`)
    return result
}
console.log(track(add))