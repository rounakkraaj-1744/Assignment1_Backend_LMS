import { Injectable } from '@nestjs/common';
import { CreateLibraryDto } from './dto/create-library.dto';
import { PrismaService } from 'prisma/prisma.service';
@Injectable()
export class LibraryService {
  constructor (private prisma: PrismaService){}
  create(data: CreateLibraryDto) {
    return this.prisma.library.create({
      data:{
        name: data.name,
        //@ts-ignore
        address: data.address
      }
    })
  }

  findAll() {
    return this.prisma.library.findMany();
  }
}
