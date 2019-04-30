import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BooksComponent } from './books.component';
import { BookComponent } from './book.component';

const routes: Routes = [
  {path: '', component: BooksComponent},
  {path: 'books', component: BooksComponent},
  {path: 'books/:isbn', component: BookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
