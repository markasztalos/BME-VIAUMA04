class: center, middle

# Angular
<img src="https://angular.io/assets/images/logos/angular/angular.svg" height="200" />

`https://angular.io/`

--- web, mobile, desktop ---

---

class: center, middle
# Mintapélda
## `libra-client`

---
# Létrehozás

```console
$ npm install @angular/cli -g
$ ng help
$ ng new libra-client -d
$ ng new libra-client --minimal --skip-install 
--skip-tests --skip-git --prefix libra
```
* *no routing*
* [scss/sass](https://sass-lang.com/)

```console
$ cd libra-client
$ npm install
$ ng serve
```

&rarr; `http://localhost:4200/`

---

# Fontosabb fájlok

* `package.json`
* `angular.json`
* `src/environments` könyvtár
* `src/assets` könyvtár
* `src/main.ts`
* `srrc/app/app.module.ts`
* `app/app.component.ts`

---

# Alapfogalmak

* Modul (`NgModule`): összefüggő kódrészletek halmaza
    * deklarált entitások
    * exportált entitások
    * importált modulok
    * publikált service-ek (`providers`)
    * bootstrap
* Komponens: a UI egy részéért felelős
    * `selector`
    * `template`/`templateUrl`
    * `styles`/`stylesUrl`

---

# Milyen működést szeretnénk és mi kell ehhez?
 * `localhost:4200/books` &rarr; 
    * hozzáférés a szerverhez, könyvek lekérdezése
    * összes könyv megjelenítése
 *  `localhost:4200/books/<ISBN>`
    * hozzáférés a szerverhez és a könyv lekérdezése
    * könyv adatainak megjelenítése

---

# Szolgáltatások

```ts
//libra-api.service.ts
import { Injectable } from '@angular/core';

@Injectable()
export class LibraApiService {
  constructor() { }
}
```

```ts
//app.module.ts
import { LibraApiService } from './libra-api.service';
//...
    providers: [LibraApiService],
```

---
# Modell leíró

```ts
//models.ts
export interface IBook {
    title : string;
    isbn : string;
}
```

---

# HTTP kommunikáció
```ts
//app.module.ts
import { HttpClientModule } from '@angular/common/http';
//...
 imports: [ 
    //...
    HttpClientModule
  ],
```

---

# HTTP  kommunikáció 2

```ts
//libra-api.service.ts
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
```

---
# Könyvek komponens

```console
$ ng g c --help
$ ng g c books --flat --skip-tests -m app
```
&rarr; `books.component.ts`
&rarr; `books.component.scss`
&rarr; `books.component.html`

```ts
//app.module.ts
//...
  declarations: [
    AppComponent,
    BooksComponent
  ],
```
---
# Könyvek komponens 2

```ts
//books.component.ts
@Component({
  selector: 'libra-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor(private apiSvc: LibraApiService) { }

  ngOnInit() {
    this.apiSvc.getBooks().subscribe(result => this.books = result);
  }

  books: IBook[]
}
```

---
# Könyvek komponens 3

```html
<!-- books.component.html --> 
<ul *ngIf="books">
  <li *ngFor="let book of books">
    {{book.title}} (ISBN: {{book.isbn}})
  </li>
</ul>
```

```ts
//app.component.ts
//...
    template: `<libra-books></libra-books>`,
```

---
# Komponensek összefoglaló
 
 * selector (pl. `libra-books`)
 * komponens osztály
    * tagváltozók, metódusok
 * angular sablon (html)
 * sablon és komponens osztály összekötése
    * `*ngIf`, `*ngFor`
    * `{{}}`
    * események később

---
# Dependency Injection (függőség injektálás)

* Például: `HttpClient`, `LibraApiService`
* Ki hozza létre a service-eket?
    * Angular
    * Injektálja minden helyre, ahol kérjük
* Miért?
    * Életcilus management
* Függőség (dependency)


---
# `BookComponent`

```ts
//book.component.ts
import { Component, OnInit } from '@angular/core';
import { IBook } from './models';
import { ActivatedRoute } from '@angular/router';
import { LibraApiService } from './libra-api.service';
@Component({
  selector: 'libra-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  constructor() { }

  book : IBook;

  ngOnInit() {
  }
}
```

---
# `BookComponent` 2

```html
<!-- book.component.html --> 
<ng-container *ngIf="book">
  {{book.title}} (ISBN: {{book.isbn}})
</ng-container>
```

---

# Routing 
```ts
//app-routing.module.ts
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

```ts
//app.module.ts
//...
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
//...
```

---
# Routing 2

```ts
//app-routing.module.ts
const routes: Routes = [
  {path: '', component: BooksComponent},
  {path: 'books', component: BooksComponent},
  {path: 'books/:isbn', component: BookComponent}
];
```

```ts
//app.component.ts
//...
    template: `<router-outlet></router-outlet>`,
```

&rarr; `http://localhost:4200/`: `BooksComponent`

&rarr; `http://localhost:4200/books`: `BooksComponent`

&rarr; `http://localhost:4200/books/ISBN`: `BookComponent`

---
# Routing 3

```ts
@Component({
  selector: 'libra-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
              private libraApiSvc : LibraApiService) { }

  book : IBook;

  ngOnInit() {
    this.route.params.subscribe(parameters => {
      this.libraApiSvc.getBook(parameters.isbn).subscribe(result => 
        this.book = result);
    });
  }
}
```
