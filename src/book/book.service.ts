import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}

  async createBook(data: CreateBookDto) {
    return this.prisma.book.create({
      data: {
        title: data.title,
        authors: {
          create: data.authorIds.map((authorId) => ({
            author: { connect: { id: authorId } },
          })),
        },
      },
      include: {
        authors: {
          include: {
            author: true,
          },
        },
      },
    });
  }
  

  async getAllBooks() {
    return this.prisma.book.findMany({
      include: {
        authors: true,
      },
    });
  }
}
