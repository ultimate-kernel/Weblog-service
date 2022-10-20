import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticleService {
  public getArticles(query: any): Promise<any> {
    const result: any = {
      query: query,
      code: 0,
      data: {},
      msg: 'success',
    };
    return result;
  }
}
