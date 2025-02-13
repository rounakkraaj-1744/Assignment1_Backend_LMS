import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { AuthorModule } from './author/author.module';
import { BookModule } from './book/book.module';
import { LibraryModule } from './library/library.module';

@Module({
  imports: [CategoryModule, AuthorModule, BookModule, LibraryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}