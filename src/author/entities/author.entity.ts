import { Book } from "src/book/entities/book.entity";

export class Author {
    id: number;
    name: string;
    books: Book[];
  }