import { IsString } from 'class-validator';

class AddressDto {
  @IsString()
  street: string;

  @IsString()
  city: string;

  @IsString()
  country: string;
}

export class CreateLibraryDto {
  @IsString()
  name: string;

  address: AddressDto;
}