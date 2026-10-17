import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../domain/models/book.model';
import { BookRepository } from '../../domain/repositories/book.repository';

/**
 * Caso de uso: obtener el listado de libros (capa Application).
 * Depende solo del contrato {@link BookRepository}.
 */
@Injectable()
export class GetAllBooksUseCase {
  private bookRepository = inject(BookRepository);

  /**
   * Ejecuta el caso de uso.
   * @param countBooks - Cantidad de libros a solicitar
   */
  execute(countBooks: number): Observable<Book[]> {
    return this.bookRepository.getAll(countBooks);
  }
}
