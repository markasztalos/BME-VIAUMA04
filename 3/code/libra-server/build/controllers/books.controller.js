"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BooksController {
    constructor(db) {
        this.db = db;
    }
    getBookByISBN(isbn) {
        return this.db.getBookByISBN(isbn);
    }
    getAllBooks() {
        return this.db.getAllBooks();
    }
    deleteBook(isbn) {
        this.db.deleteBook(isbn);
    }
    updateBook(book) {
        this.db.updateBook(book);
    }
    createBook(isbn, title) {
        this.db.createBook(isbn, title);
    }
}
exports.BooksController = BooksController;
