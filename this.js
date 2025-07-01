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


const pet = {name: 'Dog', age: 5, type: 'Mammal'}

Object.prototype.sayHello = function() {
    console.log(`Hello, I am a ${this.type} named ${this.name} and I am ${this.age} years old.`)
}
pet.sayHello()

const pet2 = {name: 'Cat', age: 3, type: 'Mammal'}
pet2.sayHello()