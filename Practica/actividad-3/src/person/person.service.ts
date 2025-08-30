// src/person/person.service.ts
import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import axios from 'axios';

@Injectable()
export class PersonService {
  async sendToFirebase(person: CreatePersonDto): Promise<any> {
    try {
      const url =
        'https://reclutamiento-dev-procontacto-default-rtdb.firebaseio.com/reclutier.json';
      const response = await axios.post(url, person);
      return response.data;
    } catch (error) {
      throw new Error('Error al enviar los datos a Firebase', error);
    }
  }
}
