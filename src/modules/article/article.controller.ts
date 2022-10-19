import { Controller } from '@nestjs/common';
import { ArticlePaginateQueryDTO } from './artitle.dto';

@Controller('article')
export class ArticleController {
  @Get()
  async getArticles(@Query query: ArticlePaginateQueryDTO) {
    console.log(query);
    return {};
  }
}
