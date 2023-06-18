import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString, Max, Min } from 'class-validator';

export class BodyDto {
  @Type(() => Number)
  @IsInt()
  @Max(10)
  @Min(1)
  @IsOptional()
  score?: number;

  @IsOptional()
  @IsString()
  comment?: string;
}
