import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { BOOKS_MOCK } from '../../../../mocks/books.mocks';
import { Book } from '../../../domain/models/book.model';
import { DataService } from '../../services/data.service';
import { BookLocalRepositoryImpl } from './book-local.repository.impl';

describe('BookLocalRepositoryImpl (Infrastructure)', () => {
  let repository: BookLocalRepositoryImpl;

  const countBooks = 5;
  const DataServiceMock = { getAllBooksLocal: jest.fn() };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BookLocalRepositoryImpl,
        { provide: DataService, useValue: DataServiceMock }
      ]
    }).compileComponents();
    repository = TestBed.inject(BookLocalRepositoryImpl);
  });

  it('debe crearse correctamente', () => {
    expect(repository).toBeTruthy();
  });

  it('debe delegar la llamada a DataService.getAllBooksLocal()', () => {
    const getAllSpy = DataServiceMock.getAllBooksLocal.mockReturnValue(of([]));
    repository.getAll(countBooks).subscribe();
    expect(getAllSpy).toHaveBeenCalledTimes(1);
    expect(getAllSpy).toHaveBeenCalledWith(countBooks);
  });

  it('debe devolver el listado de libros como Observable', (done) => {
    DataServiceMock.getAllBooksLocal.mockReturnValue(of(BOOKS_MOCK));
    repository.getAll(countBooks).subscribe((books: Book[]) => {
      expect(books).toEqual(BOOKS_MOCK);
      done();
    });
  });
});
