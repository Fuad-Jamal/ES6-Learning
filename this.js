thrro= {
    name: 'Thro',
    age: 25,
    greet: function() {
    console.log(this)
    console.log(`Hello, I am ${this.name}`)
},
arrow: () => {
    console.log(this)
    console.log(`Hello, I am ${this.name}`)
}
};
thro.arrow()