Object.prototype.speak = ()=>{
    console.log(`I am a ${this.type} with ${this.legs} legs.`);
}

const animal = {
    type: 'monkey',
    legs: 2,
}
console.log(animal.toString())
console.log(animal.__proto__.__proto__)
console.log(Object.getOwnPropertyNames(animal.legs.__proto__))

animal.speak()