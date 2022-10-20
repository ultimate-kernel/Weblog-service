import { Controller, Get, Query } from '@nestjs/common';
import { ArticlesQueryDTO } from './article.dto';
import { ArticleService } from './article.service';

@Controller('article')
export class ArticleController {
  constructor(private readonly artitleService: ArticleService) {}

  @Get()
  async getArticles(@Query() query: ArticlesQueryDTO) {
    return this.artitleService.getArticles(query);
  }
}
