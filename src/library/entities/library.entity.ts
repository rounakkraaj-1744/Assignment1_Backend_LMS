export class Library {
    id: number;
    name: string;
    address: Address;
  }
  
  export class Address {
    id: number;
    street: string;
    city: string;
    country: string;
    libraryId: number;
  }