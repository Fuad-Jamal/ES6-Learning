class Database{
    token = 'abc242'
    constructor() {}
    
    saveData(data) {
        this.initDBConnection()
        this.authorize()
    }
    
    initDBConnection(){}
    authorize(){}
    updateQuery(){}
}