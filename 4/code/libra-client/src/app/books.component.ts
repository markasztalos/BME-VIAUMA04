import { Component, OnInit } from '@angular/core';
import { LibraApiService } from './libra-api.service';
import { IBook } from './models';

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

  books: IBook[];

}
