import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressDto } from './dto/create-address.dto';
import { PrismaService } from 'prisma/prisma.service';

@Controller('address')
export class AddressController {
  constructor(private prisma: PrismaService) {}

  @Post()
  create(@Body() data: AddressDto) {
    //@ts-ignore
    return this.prisma.address.create(data);
  }

  @Get()
  findAll() {
    return this.prisma.address.findMany();
  }
}
