import express from 'express';
import { BooksController } from './controllers/books.controller';
import { IBook } from './models/models';

export function configureRouting(app: express.Application, booksController: BooksController) {

    app.get('/', (req, res) => res.send('Libra server'));

    app.get('/books', (req, res) => {
        console.log('get books');
        res.json(booksController.getAllBooks())
    });
    app.get('/books/:isbn', (req, res) => {
        let isbn = req.params.isbn;
        console.log(`get book ${isbn}`);
        res.json(booksController.getBookByISBN(isbn))
    });
    app.post('/books', (req, res) => {
        let isbn = req.body.isbn;
        let title = req.body.title;
        console.log(`creating new book, isbn: ${isbn}, title: ${title}`);
        booksController.createBook(isbn, title);
    });
    app.put('/books/:isbn', (req, res) => {
        let book = req.body as IBook;
        console.log(`updating book ${book.isbn}`);
        booksController.updateBook(book);
    })
    app.delete('/books/:isbn', (req, res) => {
        let isbn = req.params.isbn;
        console.log(`deleting book ${isbn}`);
        booksController.deleteBook(isbn);
    });
}