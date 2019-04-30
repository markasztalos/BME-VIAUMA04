import express from 'express';
import { LibraryDB } from './models/library-db';
import { BooksController } from './controllers/books.controller';
import { IBook } from './models/models';
import { configureRouting } from './app.routing';

// Create a new express application instance
const app: express.Application = express();
const db = new LibraryDB();
db.reloadDB();
const booksController = new BooksController(db);

configureRouting(app, booksController);

app.listen(3000, function () {
  console.log('Libra server listening on port 3000!');
});