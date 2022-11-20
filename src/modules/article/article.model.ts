import { prop, Ref } from '@typegoose/typegoose';
import {
  IsString,
  IsBoolean,
  IsNotEmpty,
  IsArray,
  IsOptional,
  IsDefined,
  MaxLength,
  Matches,
  ArrayNotEmpty,
  ArrayUnique,
} from 'class-validator';

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

  // category
  @ArrayUnique()
  @ArrayNotEmpty()
  @IsArray()
  @prop({ ref: () => Category, required: true, index: true })
  category: Ref<Category>[];

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
