import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { Book, BookGenre } from '../../../core/domain/models/book.model';

/**
 * Tabla presentacional que renderiza un listado de libros.
 * No conoce casos de uso ni servicios: solo recibe datos por `@Input`.
 */
@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  imports: [CommonModule, BadgeAtom],
})
export class BooksTableComponent {
  /** Libros a mostrar */
  @Input() books: Book[] = [];

  /** Mapa género -> color del badge */
  genreMap: Record<BookGenre, BadgeType> = {
    'Ficcion': 'primary',
    'Ciencia': 'success',
    'Historia': 'warning',
    'Tecnologia': 'danger',
  };
}
