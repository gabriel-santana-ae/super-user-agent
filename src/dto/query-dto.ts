import { Type } from 'class-transformer';
import { IsInt, IsOptional, Max, Min } from 'class-validator';

export class QueryDto {
  @Type(() => Number)
  @IsInt()
  @Max(10)
  @Min(1)
  @IsOptional()
  score?: number;
}
