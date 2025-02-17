import { Injectable } from '@nestjs/common';
import { AddressDto } from './dto/create-address.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class AddressService {
  constructor (private prisma: PrismaService){}
  async createAddress(data: AddressDto) {
      return this.prisma.book.create({
        data:{
          //@ts-ignore
          street: data.street,
          city: data.city,
          country: data.country
        }
      })
    }

  findAll() {
    return `This action returns all address`;
  }
}
