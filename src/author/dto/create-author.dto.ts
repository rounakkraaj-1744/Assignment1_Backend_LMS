import { IsEmail, IsInt, IsString } from "class-validator";

export class CreateAuthorDto {
    @IsString()
    name: string
}