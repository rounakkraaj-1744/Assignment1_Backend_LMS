import { Author } from "src/author/entities/author.entity";
import { Category } from "src/category/entities/category.entity";

export class Book {
  id: number;
  title: string;
  authorId: number;
  author: Author;
  categories: Category[];
}