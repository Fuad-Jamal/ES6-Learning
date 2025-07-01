thrro= {
    name: 'Thro',
    age: 25,
    greet: function(a,b) {
    console.log(a,b)
    console.log(`Hello, I am ${this.name}`)
},
arrow: () => {
    console.log(this)
    console.log(`Hello, I am ${this.name}`)
}
};
const x = thrro.greet.bind({ name: 'John' })
console.log(x)
x('ksj', 'kjsd')
