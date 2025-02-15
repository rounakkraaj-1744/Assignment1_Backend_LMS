import { Controller, Post, Get, Body } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Controller('authors')
export class AuthorController {
  constructor(private prisma: PrismaService) {}

  @Post()
  async createAuthor(@Body() data: { name: string }) {
    return this.prisma.author.create({ data });
  }

  @Get()
  async getAllAuthors() {
    return this.prisma.author.findMany();
  }
}