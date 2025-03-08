import { BookAuthor } from "src/book/entities/bookAuthor.entity";
import { Category } from "src/category/entities/category.entity";

export class Book {
  id: number;
  title: string;
  authors: BookAuthor[];
  categories: Category[];
}
