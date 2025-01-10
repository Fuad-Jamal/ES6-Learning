let snake = {
    name:'python',
    weight: 20
}
let zoo = {
    type: "anaconda"
}
let about = new Proxy(snake,zoo)
console.log(about)
