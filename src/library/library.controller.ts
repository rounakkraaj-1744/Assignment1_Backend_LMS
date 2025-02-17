import { Controller, Get, Post, Body } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateLibraryDto } from './dto/create-library.dto';

@Controller('libraries')
export class LibraryController {
  constructor(private prisma: PrismaService) {}

  @Post()
  create(@Body() data: CreateLibraryDto) {
    return this.prisma.library.create({
      data: {
        name: data.name,
        address: {
          create: {
            street: data.address.street,
            city: data.address.city,
            country: data.address.country,
          },
        },
      },
    });
  }

  @Get()
  findAll() {
    return this.prisma.library.findMany({
      include: {
        address: true,
      },
    });
  }
}