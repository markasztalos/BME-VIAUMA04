import { IBook } from "./models";

const initialBooks: IBook[] = [
    { isbn: "9786155248214", title: "Egri csillagok" }
    , { isbn: "9789639555054", title: "A kőszívű ember fiai" }
    , { isbn: "9789630980746", title: "Fekete gyémántok" }
];

export class LibraryDB {
    private books: IBook[] = [];

    public getBookByISBN(isbn: string): IBook | null {
        let book = this.books.find((b: IBook) => b.isbn === isbn);
        if (book) {
            return { ...book };
        }
        return null;
    }
    public getAllBooks(): IBook[] {
        return [...this.books];
    }
    public deleteBook(isbn: string) : void {
        let book = this.books.find((b : IBook) => b.isbn === isbn);
        if (book) {
            let index = this.books.indexOf(book);
            if (index >= 0)
                this.books.splice(index, 1);
        }
    }
    public updateBook(book: IBook) : void {
        this.books = this.books.map(b => b.isbn === book.isbn ? book : b);
    }
    public createBook(isbn: string, title: string) : void {
        if (!this.books.some(b => b.isbn === isbn))
            this.books.push({ isbn, title });
    }

    public reloadDB() : void {
        this.books = [...initialBooks];
    }
}