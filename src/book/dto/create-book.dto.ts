import { IsInt, IsString, IsArray, ArrayNotEmpty } from "class-validator";

export class CreateBookDto {
  @IsString()
  title: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsInt({ each: true })
  authorIds: number[];
}
