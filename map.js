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


let iii = new Map()
iii.set(    'log', (mmm) =>{
        console.log(mmm)
    }
)
iii.get('log')("hello")

const nums = [1, 2, 3, 4, 5, 3, 2, 6, 7, 8, 1];
let titi = new Map()
for(let i=0; i<nums.length; i++){
    if(titi.has(nums[i])){
console.log(i, titi.get(nums[i]))
    }else{
        titi.set(nums[i], i)
    }
}
console.log(titi)
