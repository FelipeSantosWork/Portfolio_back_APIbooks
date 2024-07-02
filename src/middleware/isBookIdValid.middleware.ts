import { NextFunction, Request, Response } from "express";
import { booksDatabase } from "../database/database";
import { AppError } from "../errors/AppError";

export class IsBookIdValid {
    static execute(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;

        const existingBook = booksDatabase.find(book => book.id === Number(id));

        if (!existingBook) {
            throw new AppError("Book not found.", 404);
        }
        res.locals.book = existingBook;

        next();
    }
}