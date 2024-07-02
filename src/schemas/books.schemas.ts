import { z } from "zod";

export const booksSchema = z.object({
    id: z.number().positive(),
    name: z.string().min(3),
    pages: z.number().min(1),
    category: z.string().optional(),
    createdAt: z.date(),
    updatedAt: z.date(),
});

export const createBookSchema = booksSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

export const updateBookSchema = booksSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
})
    .partial();