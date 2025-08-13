const myPet = {
    name: "Buddy",
    species: "Dog",
    breed: "Golden Retriever",
    age: 3,
    color: "Golden",
    isFriendly: true,
    favoriteActivities: ["fetch", "walks", "napping"]
};

myPet.color = "Black";
console.log(myPet)
// delet=e myPet.favoriteActivities
console.log(myPet)
myPet.favoriteActivities.push("playing with toys")
console.log(myPet)


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

const product = {
    id: 101,
    category: "Fruits",
    price: [15.99,44,43,324,142,2,62,14,52,52,4,25,234,52],
    inStock: true,
    fruits: [ apple, banana, orange ]
};

console.log(product.fruits[0]);

for(let i = 0; i < product.fruits.length; i++){
    console.log(product.fruits[i])
}
product.fruits[2].color = "Green"
console.log(product.fruits[2])

let x = product.price.reduce((acc, curr) => {
if(acc<curr){
    return curr
}
return acc
},0)
console.log(x)

const iii= {
    log: (mmm) =>{
        console.log(mmm)
    }
}
iii.log("hello")
console.log(console)

function right(arr){
    return Object.prototype.toString.call(arr)==='[object Object]'?true: false
}
console.log(right(product))
