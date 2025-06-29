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

const db = new Database()
console.log(db)