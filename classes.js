class Bookstore {
    constructor(books){
        this.books = books
    }
    listBooks(){
    for(const book of this.books){
        console.log(`Book: ${book.name}, Author: ${book.author}`)
    }
}
}
class Book{
    constructor(name, author){
        this.name = name
        this.author = author
    }
    display(){
        console.log(`Title: ${this.name}, Author: ${this.author}`)
    }
}
const halidon = new Book('The Halidon', 'Robert Ludlum')
const hp = new Book('Harry Potter', 'J.K. Rowling')
const bookstore = new Bookstore([halidon, hp])
bookstore.listBooks()
