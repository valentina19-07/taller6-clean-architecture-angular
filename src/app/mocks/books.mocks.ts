import { Book } from "../core/domain/models/book.model";

export const BOOKS_MOCK: Book[] = [
    {
        id: 1,
        title: 'Clean Code',
        author: 'Robert C. Martin',
        genre: 'Tecnologia',
        year: 2008,
    },
    {
        id: 2,
        title: 'Cosmos',
        author: 'Carl Sagan',
        genre: 'Ciencia',
        year: 1980,
    }
];
