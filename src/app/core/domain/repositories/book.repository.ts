import { Observable } from 'rxjs';
import { Book } from '../models/book.model';

/**
 * Contrato del repositorio de libros (capa Domain).
 * No conoce HTTP, mocks ni bases de datos.
 */
export abstract class BookRepository {
  /**
   * Obtiene un listado de libros.
   * @param countBooks - Cantidad de libros a solicitar
   */
  abstract getAll(countBooks: number): Observable<Book[]>;
}
