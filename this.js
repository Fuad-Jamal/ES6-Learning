thro= {
    name: 'Thro',
    age: 25
}
Object.prototype.greet = function() {
    console.log(`Hello, I am ${this.name}`)
}
thro.greet()