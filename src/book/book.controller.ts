import { Controller, Post, Get, Body } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateBookDto } from './dto/create-book.dto';


@Controller('books')
export class BookController {
  constructor(private prisma: PrismaService) {}

  @Post()
  async createBook(@Body() data: CreateBookDto) {
    return this.prisma.book.create({
      data: {
        title: data.title,
        authorId: data.authorId,
      }
    });
  }

  @Get()
  async getAllBooks() {
    return this.prisma.book.findMany();
  }
}