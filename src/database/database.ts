import { TBooks } from "../interfaces/books.interface";

export const booksDatabase: TBooks[] = []

export let id = 0;

export const generateId = () => {
    id++;
    return id;
}