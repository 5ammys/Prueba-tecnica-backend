export interface Person {
  name: string;
  surname: string;
  birthday: string;
  age: number;
  documentType: 'CUIT' | 'DNI';
  documentNumber: number;
}

export interface FirebasePostResponse {
  name: string;
}
