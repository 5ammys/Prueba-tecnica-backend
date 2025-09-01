// src/person/person.controller.ts
import {
  Controller,
  Post,
  Body,
  BadRequestException,
  Get,
} from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { PersonService } from './person.service';
import { FirebasePostResponse, Person } from './person.interface';

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Post()
  async createPerson(
    @Body() createPersonDto: CreatePersonDto,
  ): Promise<FirebasePostResponse> {
    const birthdayDate = new Date(createPersonDto.birthday);
    const minDate = new Date('1900-01-01');
    const maxDate = new Date();
    if (birthdayDate < minDate || birthdayDate > maxDate) {
      throw new BadRequestException(
        'Birthday fuera de rango (1900-01-01 hasta hoy)',
      );
    }

    return this.personService.sendToFirebase(createPersonDto);
  }

  @Get()
  async getPersons(): Promise<Person[]> {
    return this.personService.getAllPersons();
  }
}
