import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BookRepository } from "../../../domain/repositories/book.repository";
import { DataService } from "../../services/data.service";
import { Book } from "../../../domain/models/book.model";

/**
 * Implementación del repositorio de libros usando la fuente: Local.
 * Adapta {@link DataService} al contrato {@link BookRepository}.
 */
@Injectable()
export class BookLocalRepositoryImpl extends BookRepository {
    private dataService = inject(DataService);

    /**
     * Obtiene el listado de libros.
     * @param countBooks - Cantidad de libros a solicitar
     */
    getAll(countBooks: number): Observable<Book[]> {
        return this.dataService.getAllBooksLocal(countBooks);
    }
}
