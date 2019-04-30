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

  constructor(private route: ActivatedRoute, private libraApiSvc : LibraApiService) { }

  book : IBook;

  ngOnInit() {
    this.route.params.subscribe(parameters => {
      this.libraApiSvc.getBook(parameters.isbn).subscribe(result => this.book = result);
    });
  }

}
