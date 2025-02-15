import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { AuthorModule } from './author/author.module';
import { BookModule } from './book/book.module';
import { LibraryModule } from './library/library.module';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  imports: [CategoryModule, AuthorModule, BookModule, LibraryModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}