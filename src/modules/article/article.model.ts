import { prop } from '@typegoose/typegoose';
import {
  IsString,
  IsBoolean,
  IsNotEmpty,
  IsArray,
  IsOptional,
  IsDefined,
  MaxLength,
  Matches,
  ArrayUnique,
} from 'class-validator';

import { getProviderByTypegooseClass } from '@app/transformers/model.transformer';

export class Article {
  @prop({ unique: true })
  id: number;

  @Matches(/^[a-zA-Z0-9-_]+$/)
  @MaxLength(50)
  @IsString()
  @IsOptional()
  @prop({ default: null, validate: /^[a-zA-Z0-9-_]+$/, index: true })
  slug: string;

  @IsString()
  @IsNotEmpty({ message: 'title?' })
  @prop({ required: true, validate: /\S+/, text: true })
  title: string;

  @IsString()
  @IsNotEmpty({ message: 'content?' })
  @prop({ required: true, validate: /\S+/, text: true })
  content: string;

  @IsString()
  @prop({ default: '', text: true })
  description: string;

  @ArrayUnique()
  @IsArray()
  @IsDefined()
  @prop({ default: [], type: () => [String] })
  keywords: string[];

  @IsString()
  @IsOptional()
  @prop({ type: String, default: null })
  thumb: string | null;

  // disabled comment
  @IsBoolean()
  @prop({ default: false })
  disabled_comment: boolean;

  @prop({ default: Date.now, index: true, immutable: true })
  create_at?: Date;

  @prop({ default: Date.now })
  update_at?: Date;
}

export const ArticleProvider = getProviderByTypegooseClass(Article);
