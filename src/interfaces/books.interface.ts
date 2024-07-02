// export interface IBooks {
//     id: number;
//     name: string;
//     pages: number;
//     category?: string;
//     createdAt: Date;
//     updatedAt: Date;
// }

import { booksSchema, createBookSchema, updateBookSchema } from "../schemas/books.schemas";
import { z } from "zod";

// export type TCreateBooksBody = Omit<IBooks, "id" | "createdAt" | "updatedAt">;
// export type TUpdateBooksBody = Partial<TCreateBooksBody>;

export type TBooks = z.infer<typeof booksSchema>;
export type TCreateBooksBody = z.infer<typeof createBookSchema>;
export type TUpdateBooksBody = z.infer<typeof updateBookSchema>;