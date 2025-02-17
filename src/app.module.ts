import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { AuthorModule } from './author/author.module';
import { BookModule } from './book/book.module';
import { LibraryModule } from './library/library.module';
import { PrismaService } from 'prisma/prisma.service';
import { AddressModule } from './address/address.module';

@Module({
  imports: [CategoryModule, AuthorModule, BookModule, LibraryModule, AddressModule],
  providers: [PrismaService],
})
export class AppModule {}