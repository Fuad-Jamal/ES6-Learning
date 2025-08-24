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

class Utility{
    static camelCase(str){
        const splitted = str.split(' ')
        let result = '';
        result += splitted[0].toLowerCase()
        for(let i =1; i<splitted.length; i++){
            let word = splitted[i]
            word = word.toLowerCase()
            result += word[0].toUpperCase() + word.slice(1)
        }
        return result
    }
}
// const util = new Utility()
console.log(Utility.camelCase('hello world this is a test'))
console.log(Object.getOwnPropertyNames(Array.prototype)) // []