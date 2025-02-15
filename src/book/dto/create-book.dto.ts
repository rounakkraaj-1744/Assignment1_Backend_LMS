import { IsInt, IsString } from "class-validator";

export class CreateBookDto {
    @IsString()
    title: string

    @IsInt()
    authorId: number
  name: any;
}

