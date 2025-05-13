//factory function
function createCircle (radius){
return{
    radius,
    draw: function(){
    console.log('draw');
   }
};
}
const circle = createCircle(1);

//constructor function
function Circle(radius){
    // console.log('this', this);
    this.radius = radius
    let defaultLocation = {x:0, y:0}
    this.computeOptimumLocation = function(factor){}

    this.draw = function(){
        this.computeOptimumLocation(0.1)
    }

    Object.defineProperty(this, 'defaultLocation', {
        get: function(){
            return defaultLocation
        },
        set: function(value){
            defaultLocation = value
        }
    })
}


Circle.call({}, 1)
Circle.apply({}, [1, 2, 3])

const second = new Circle(1)

for (let key in second){
    console.log(key, second[key]);
}
const keys = Object.keys(second)
console.log(Circle.defaultLocation)

// let age = window.prompt('uFITE IMYAKE igera kuri ingahe')
// age = Number(age)
// age+=1
// console.log(age, typeof age);

class Product{
    constructor(name, price){
        this.name = name
        this.price = price
    }
    displayProduct(){
        console.log(`Product: ${this.name}`)
        console.log(`Price: $${this.price.toFixed(2)}`)
    }
    calculateTotal(tax){
        return this.price +(this.price * tax)
    }
}

const tax = 0.05

const product1 = new Product('Shirt', 19.99)
const product2 = new Product('Pants', 9.76)
const product3 = new Product('Shoes', 49.99)

product3.displayProduct()

const total = product1.calculateTotal(tax)
console.log(`Total price: $${total.toFixed(2)}`)