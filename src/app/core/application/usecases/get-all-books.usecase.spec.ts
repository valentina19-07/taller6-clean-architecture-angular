import { TestBed } from "@angular/core/testing";
import { firstValueFrom, of, throwError } from "rxjs";
import { BOOKS_MOCK } from "../../../mocks/books.mocks";
import { BookRepository } from "../../domain/repositories/book.repository";
import { GetAllBooksUseCase } from "./get-all-books.usecase";

describe('GetAllBooksUseCase', () => {
  let useCase: GetAllBooksUseCase;

  const countBooks = 5;
  const BookRepositoryMock: jest.Mocked<BookRepository> = { getAll: jest.fn() };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        GetAllBooksUseCase,
        { provide: BookRepository, useValue: BookRepositoryMock }
      ]
    }).compileComponents();
    useCase = TestBed.inject(GetAllBooksUseCase);
  });

  it('debería ser inyectable y crearse correctamente', () => {
    expect(useCase).toBeInstanceOf(GetAllBooksUseCase);
  });

  it('debería delegar la llamada al repository', async () => {
    BookRepositoryMock.getAll.mockReturnValue(of(BOOKS_MOCK));
    const result = await firstValueFrom(useCase.execute(countBooks));
    expect(BookRepositoryMock.getAll).toHaveBeenCalledTimes(1);
    expect(BookRepositoryMock.getAll).toHaveBeenCalledWith(countBooks);
    expect(result).toEqual(BOOKS_MOCK);
  });

  it('debería propagar un error cuando el repositorio falle', async () => {
    const errorMessage = 'Falló la búsqueda de libros';
    BookRepositoryMock.getAll.mockReturnValue(throwError(() => new Error(errorMessage)));
    await expect(firstValueFrom(useCase.execute(countBooks))).rejects.toThrow(errorMessage);
    expect(BookRepositoryMock.getAll).toHaveBeenCalledWith(countBooks);
  });
});
