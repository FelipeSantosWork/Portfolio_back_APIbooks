import { Request, Response } from "express";
import { BooksService } from "../services/books.service";

export class BooksControllers {

    createBook(req: Request, res: Response) {
        const booksService = new BooksService;

        const response = booksService.createBook(req.body);

        res.status(201).json(response)
    }
    getBooks(req: Request, res: Response) {
        const booksService = new BooksService();

        const search = req.query.search;

        const response = booksService.getBooks(search as string);

        res.status(200).json(response)
    }
    getOneBook(req: Request, res: Response) {
        const booksService = new BooksService();

        const { id } = req.params;

        const response = booksService.getOneBook(Number(id));

        res.status(200).json(response)
    }
    updateBook(req: Request, res: Response) {
        const booksService = new BooksService();

        const { id } = req.params;

        const response = booksService.updateBook(Number(id), req.body);

        res.status(200).json(response)
    }
    deleteBook(req: Request, res: Response) {
        const booksService = new BooksService();

        const { id } = req.params;

        booksService.deleteBook(Number(id));

        res.status(204).json()
    }
}