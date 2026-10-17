/**
 * Representa un libro del sistema.
 *
 * @example
 * ```ts
 * const libro: Book = { id: 1, title: 'Clean Code', author: 'Robert C. Martin', genre: 'Tecnologia', year: 2008 };
 * ```
 */
export interface Book {
  /** Identificador único del libro */
  id: number;
  /** Título del libro */
  title: string;
  /** Autor del libro */
  author: string;
  /** Género del libro */
  genre: BookGenre;
  /** Año de publicación */
  year: number;
}

/** Géneros permitidos. Se usa para mapear badges de colores en la UI. */
export type BookGenre = 'Ficcion' | 'Ciencia' | 'Historia' | 'Tecnologia';
