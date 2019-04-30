import { LibraryDB } from "../models/library-db";
import { IBook } from "../models/models";

export class BooksController {
    constructor(private db : LibraryDB) {

    }
    public getBookByISBN(isbn: string): IBook | null {
        return this.db.getBookByISBN(isbn);
    }
    public getAllBooks(): IBook[] {
        return this.db.getAllBooks();
    }
    public deleteBook(isbn: string) {
        this.db.deleteBook(isbn);
    }
    public updateBook(book: IBook) {
        this.db.updateBook(book);
    }
    public createBook(isbn: string, title: string) {
      this.db.createBook(isbn, title);
    }
}