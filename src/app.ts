import express, { json } from "express";
import { booksRoutes } from "./routes/books.routes";
import { HandleErrors } from "./errors/handleErrors";
import helmet from "helmet";

export const app = express();

app.use(helmet());

app.use(json());

app.use("/books", booksRoutes);

app.use(HandleErrors.execute);