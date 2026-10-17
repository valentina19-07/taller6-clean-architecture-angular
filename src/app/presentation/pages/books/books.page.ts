import { Component, inject, OnInit } from '@angular/core';
import { GetAllBooksUseCase } from '../../../core/application/usecases/get-all-books.usecase';
import { Book } from '../../../core/domain/models/book.model';
import { AlertComponent } from '../../components/alert/alert.component';
import { BooksTableComponent } from '../../components/books-table/books-table.component';
import { State } from '../../interfaces/state.interface';

/**
 * Página de libros. Consume SOLO el caso de uso {@link GetAllBooksUseCase},
 * nunca servicios ni APIs directamente.
 */
@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  imports: [BooksTableComponent, AlertComponent],
  providers: [GetAllBooksUseCase],
})
export class BooksPage implements OnInit {
  /** Libros obtenidos */
  books: Book[] = [];
  /** Estado actual de la carga */
  state: State = 'init';

  private getAllBooksUseCase = inject(GetAllBooksUseCase);

  ngOnInit(): void {
    this.state = 'loading';
    this.getAllBooksUseCase.execute(10).subscribe({
      next: (books) => {
        this.books = books;
        this.state = 'success';
      },
      error: () => {
        this.state = 'error';
      },
    });
  }
}
