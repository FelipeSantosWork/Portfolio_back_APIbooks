import { Router } from "express";
import { BooksControllers } from "../controllers/books.controllers";
import { IsBookIdValid } from "../middleware/isBookIdValid.middleware";
import { IsBookNameUnique } from "../middleware/isBookNameUnique.middleware";
import { BodyValidator } from "../middleware/bodyValidator.middleware";
import { createBookSchema, updateBookSchema } from "../schemas/books.schemas";

export const booksRoutes = Router();

const booksControllers = new BooksControllers();

booksRoutes.post("/", BodyValidator.execute(createBookSchema), IsBookNameUnique.execute, booksControllers.createBook);

booksRoutes.get("/", IsBookNameUnique.execute, booksControllers.getBooks);

booksRoutes.get("/:id", IsBookIdValid.execute, booksControllers.getOneBook);

booksRoutes.patch("/:id", BodyValidator.execute(updateBookSchema), IsBookNameUnique.execute, IsBookIdValid.execute, booksControllers.updateBook);

booksRoutes.delete("/:id", IsBookIdValid.execute, booksControllers.deleteBook);