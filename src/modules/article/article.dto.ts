import { IsInt, Min } from 'class-validator';

export class ArticlesQueryDTO {
  @Min(1)
  @IsInt()
  pageNum: number;

  @IsInt()
  pageSize?: number;

  query?: any;
}
