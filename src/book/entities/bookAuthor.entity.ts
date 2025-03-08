import { Book } from "src/book/entities/book.entity";
import { Author } from "src/author/entities/author.entity";

export class BookAuthor {
  bookId: number;
  authorId: number;
  book: Book;
  author: Author;
}
