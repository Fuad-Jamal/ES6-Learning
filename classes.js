class Database{
    token = 'abc242'
    constructor() {}
    
    saveData(data) {
        this.#initDBConnection()
        this.#authorize()
        this.#updateQuery
    }
    
    #initDBConnection(){}
    #authorize(){}
    #updateQuery(){}
}

class CustomDB extends Database{
    #token = 'xyz123'
    saveData(data) {}
}

const db = new Database()
console.log(db)

class Printer{
    constructor(brand, color) {
        this.#setUpPrinter(brand, color)

    }
    #setUpPrinter(brand, color){
        this.brand = brand
        this.color = color
    }
}
const printer = new Printer('HP', ['Black', 'White'])
console.log(printer.brand, printer.color)