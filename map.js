const that = new Map()
that.set('name', 'John Doe')
that.set('age', 30)
console.log(that)
console.log(that.get('name'))
that.set('age', 31)
console.log(that.get('age'))
console.log(that.has('nam'))
console.log(that.size)

const apple = {
    name: "Apple",
    color: "Red",
    taste: "Sweet"
};

const banana = {
    name: "Banana",
    color: "Yellow",
    taste: "Sweet"
};

const orange = {
    name: "Orange",
    color: "Orange",
    taste: "Citrus"
};

const newMap = new Map();
newMap.set('hobbies', [orange , banana, apple]);
newMap.set('profession', 'Software Developer');
newMap.set('location', 'New York')
newMap.set('numbers', [1, 2, 33, 4, 5]);

newMap.set('profession', 'maibobo')
newMap.get('hobbies').push('swimming')

newMap.set('color','oosiu')
newMap.get('hobbies').pop()
newMap.get('hobbies')[2].color = 'green'
newMap.delete('color')

console.log(newMap)
let me = newMap.get('numbers').reduce((acc, curr) => {
return Math.max(...newMap.get('numbers'))
})
console.log(me)
