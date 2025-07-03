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


const book ={
    name: 'The Great Adventure',
    author: 'John Doe',
    characters: {
        main: ['Alice', 'Bob', 'Charlie'],
        list: function() {
            for (const character of this.main) {
                console.log(character);
            }
        }
    }
}
book.characters.list()
const nnw = book.characters.list.bind({
    main: ['Alicqu', 'Boby', 'Chaie']
})
nnw()


function Person(name, age, food){
    this.name = name
    this.age = age
    this.food = food
}

Person.prototype.greet = function() {
    console.log(`Hello, I am ${this.name}, I am ${this.age} years old and I love ${this.food}.`)
}

function Person2  (name, age, food, power){
return { name,
        age,
        food,
        power,
}
}

Person2.prototype.__.proto__ = Person.prototype
const eve = new Person2('Eve', 30, 'Pizza', 'Invisibility')
const adam = new Person2('Adam', 28, 'Burger', 'Super Strength')

let prot = eve.__proto__
