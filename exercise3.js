class product {
    constructor(name, price){
        this.name = name
        this.price = price
    }
    getDetails(){
        console.log(`The product we have is ${this.name} which costs about ${this.price}`)
    }
    getDiscount(disc){
        this.price = this.price * disc/100
        console.log(`The product ${this.name} is now available at a discounted price of ${this.price}`)
    }
}