class Product {
    constructor(name, price){
        this.name = name
        this.price = price
    }
    getDetails(){
       return `The product we have is ${this.name} which costs about ${this.price}`
    }
    getDiscount(disc){
        this.price = this.price - (this.price * disc/100)
       return `The product ${this.name} is now available at a discounted price of ${this.price}`
    }
}
class DigitalProduct extends Product {
    constructor(name, price, fileSize){
        super(name, price)
        this.fileSize = fileSize
    }
    download(){
        return `This product ${this.name} is available for download.`
    }
}
class DiscountManager {
    constructor(product){
        this.product = product
    }
    static apply(product, discount){
        return product.getDiscount(discount)
    }
}

const book = DigitalProduct('JavaScript Basics', 20, '5MB')
console.log(book.getDetails())