import { IsString } from "class-validator"

export class CreateLibraryDto {
    @IsString()
    name: string

    @IsString()
    address: string
}
