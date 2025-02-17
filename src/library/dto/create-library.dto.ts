import { IsString } from 'class-validator';
import { AddressDto } from 'src/address/dto/create-address.dto';

export class CreateLibraryDto {
  @IsString()
  name: string;

  address: AddressDto;
}