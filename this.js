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
thrro.greet.apply({ name: 'John' },['juy']); // Hello, I am John