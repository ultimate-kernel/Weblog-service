import { Controller } from '@nestjs/common';
import { ArticlePaginateQueryDTO } from './artitle.dto';
import { ArticleService } from './article.service';

@Controller('article')
export class ArticleController {
  constructor(private readonly artitleService: ArticleService) {}

  @Get()
  async getArticles(@Query query: ArticlePaginateQueryDTO) {
    console.log(query);
    return {};
  }
}
