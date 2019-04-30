import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBook } from './models';
import { Observable } from 'rxjs';

@Injectable()
export class LibraApiService {
  constructor(private http: HttpClient) { }

  public getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>("http://localhost:3000/books");
  }
  public getBook(isbn: string): Observable<IBook> {
    return this.http.get<IBook>(`http://localhost:3000/books/${isbn}`);
  }
}
