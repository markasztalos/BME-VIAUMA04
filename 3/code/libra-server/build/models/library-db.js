"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const initialBooks = [
    { isbn: "9786155248214", title: "Egri csillagok" },
    { isbn: "9789639555054", title: "A kőszívű ember fiai" },
    { isbn: "9789630980746", title: "Fekete gyémántok" }
];
class LibraryDB {
    constructor() {
        this.books = [];
    }
    getBookByISBN(isbn) {
        let book = this.books.find((b) => b.isbn === isbn);
        if (book) {
            return Object.assign({}, book);
        }
        return null;
    }
    getAllBooks() {
        return [...this.books];
    }
    deleteBook(isbn) {
        let book = this.books.find((b) => b.isbn === isbn);
        if (book) {
            let index = this.books.indexOf(book);
            if (index >= 0)
                this.books.splice(index, 1);
        }
    }
    updateBook(book) {
        this.books = this.books.map(b => b.isbn === book.isbn ? book : b);
    }
    createBook(isbn, title) {
        if (!this.books.some(b => b.isbn === isbn))
            this.books.push({ isbn, title });
    }
    reloadDB() {
        this.books = [...initialBooks];
    }
}
exports.LibraryDB = LibraryDB;
