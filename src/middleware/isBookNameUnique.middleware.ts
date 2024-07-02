import { NextFunction, Request, Response } from "express";
import { booksDatabase } from "../database/database";
import { AppError } from "../errors/AppError";

export class IsBookNameUnique {
    static execute(req: Request, res: Response, next: NextFunction) {
        const { name } = req.body;

        const existingBookName = booksDatabase.find(book => book.name === String(name));

        if (existingBookName) {
            throw new AppError("Book already registered.", 409);
        }
        res.locals.book = existingBookName;

        next();
    }
}