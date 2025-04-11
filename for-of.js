// Creating a Map with different items
const myMap = new Map();

myMap.set('name', 'John Doe');
myMap.set('age', 30);
myMap.set('isStudent', false);
myMap.set('hobbies', ['reading', 'traveling', 'coding']);
myMap.set('address', { city: 'New York', zip: '10001' });

for(const iti of myMap){
    console.log(iti[0], iti[1])
}

// Creating a Set with various properties
const mySet = new Set();

mySet.add('apple');
mySet.add(42);
mySet.add(true);
mySet.add({ type: 'object', value: 'example' });
mySet.add(['array', 'example']);

for (const item of mySet) {
    console.log(item);
}

// Creating a regular object with properties
const myObject = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 25,
    isEmployed: true,
    skills: ['JavaScript', 'React', 'Node.js'],
    address: {
        city: 'Los Angeles',
        zip: '90001'
    }
};

for(const lee of Object.entries(myObject)){
    console.log(lee)
}

const ages = [30, 25, 40, 18, 60, 22, 35, 50, 28, 45];
const result = [];
for(const age of ages){
    const did = {
        'age': age,
        'name': 'John Doe'
    }
    result.push(did)
}
console.log(result)

const namesSet = new Set();
let tont = new Set()

namesSet.add('Alice');
namesSet.add('Bob');
namesSet.add('Charlie');
namesSet.add('Diana');
namesSet.add('Eve');

for(const name of namesSet) {
    tont.add(name.toUpperCase())
}
console.log(tont)
console.log(namesSet)