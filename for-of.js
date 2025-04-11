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