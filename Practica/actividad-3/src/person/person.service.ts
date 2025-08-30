// src/person/person.service.ts
import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import axios from 'axios';
import { FirebasePostResponse, Person } from './person.interface';

@Injectable()
export class PersonService {
  async sendToFirebase(person: CreatePersonDto): Promise<FirebasePostResponse> {
    try {
      const url =
        'https://reclutamiento-dev-procontacto-default-rtdb.firebaseio.com/reclutier.json';
      const response = await axios.post<FirebasePostResponse>(url, person);
      return response.data;
    } catch (error) {
      throw new Error('Error al enviar los datos a Firebase', error);
    }
  }

  async getAllPersons(): Promise<Person[]> {
    try {
      const url =
        'https://reclutamiento-dev-procontacto-default-rtdb.firebaseio.com/reclutier.json';
      const response = await axios.get(url);

      if (!response.data) return [];

      const persons: Person[] = Object.values(response.data);
      return persons;
    } catch (error) {
      throw new Error('Error al obtener los datos de Firebase', error);
    }
  }
}
