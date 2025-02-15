import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateBookDto } from './dto/create-book.dto';


@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}

  async createBook(data: CreateBookDto) {
    return this.prisma.book.create({
      data:{
        title: data.title,
        authorId: data.authorId
      }
    })
  }

  async getAllBooks() {
    return this.prisma.book.findMany();
  }
}