import { booksDatabase, generateId } from "../database/database";
import { TBooks, TCreateBooksBody, TUpdateBooksBody } from "../interfaces/books.interface";

export class BooksService {
    createBook(data: TCreateBooksBody) {
        const now = new Date();
        const newBook: TBooks = {
            ...data,
            id: generateId(),
            name: data.name,
            pages: data.pages,
            category: data.category,
            createdAt: now,
            updatedAt: now,
        };

        booksDatabase.push(newBook);
        return newBook;

    };
    getBooks(search?: string) {
        if (search) {

            const searchResults = booksDatabase.filter((book) =>
                book.name.toLowerCase().includes(search.toLowerCase())
            );
            return searchResults;
        } else {
            return booksDatabase;
        }
    };
    getOneBook(id: number) {
        const specificBook = booksDatabase.find((book) => book.id === id);
        return specificBook
    };
    updateBook(updatingId: number, data: TUpdateBooksBody) {
        const currentBook = booksDatabase.find((book) => book.id === updatingId);

        if (currentBook) {
            const index = booksDatabase.findIndex((book) => book.id === updatingId);

            const newBook = { ...currentBook, ...data };

            booksDatabase.splice(index, 1, newBook);

            return newBook;
        }
    };
    deleteBook(removingId: number) {
        const index = booksDatabase.findIndex((book) => book.id === removingId);

        booksDatabase.splice(index, 1);
    };

}