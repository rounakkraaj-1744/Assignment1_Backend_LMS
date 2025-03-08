import { Controller, Post, Get, Body } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('books')
export class BookController {
  constructor(private bookService: BookService) {}

  @Post()
  async createBook(@Body() data: CreateBookDto) {
    return this.bookService.createBook(data);
  }

  @Get()
  async getAllBooks() {
    return this.bookService.getAllBooks();
  }
}
