import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { ArticleProvider } from './article.model';

@Module({
  controllers: [ArticleController],
  providers: [ArticleService, ArticleProvider],
})
export class ArticleModule {}
