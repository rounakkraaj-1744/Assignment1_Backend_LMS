import { Controller, Post, Get, Body } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateBookDto } from 'src/book/dto/create-book.dto';

@Controller('categories')
export class CategoryController {
  constructor(private prisma: PrismaService) {}

  @Post()
  async createCategory(@Body() data: CreateBookDto) {
    return this.prisma.category.create({
      data:{
        name: data.name
      }
    })
  }

  @Get()
  async getAllCategories() {
    return this.prisma.category.findMany();
  }
}