import { Injectable } from '@nestjs/common';
import { Article } from './article.model';
import { InjectModel } from '@app/transformers/model.transformer';

@Injectable()
export class ArticleService {
  constructor(@InjectModel(Article) private readonly articleModel: any) {}
  public getArticles(query: any): Promise<any> {
    const result: any = {
      query: query,
      code: 0,
      data: {},
      msg: 'success',
    };
    console.log(this.articleModel);
    return result;
  }
}
