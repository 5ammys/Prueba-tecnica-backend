import {
  IsString,
  //IsDateString,
  Matches,
  Min,
  Max,
  IsIn,
  IsInt,
} from 'class-validator';

import { Transform } from 'class-transformer';

export class CreatePersonDto {
  @IsString()
  @Transform(({ value }): string =>
    typeof value === 'string'
      ? value
          .toString()
          .trim()
          .replace(
            /\w\S*/g,
            (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase(),
          )
      : '',
  )
  name: string;

  @IsString()
  @Transform(({ value }): string =>
    typeof value === 'string'
      ? value
          .toString()
          .trim()
          .replace(
            /\w\S*/g,
            (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase(),
          )
      : '',
  )
  surname: string;

  @Matches(/^\d{4}\/\d{2}\/\d{2}$/, {
    message: 'birthday must be in format YYYY/MM/DD',
  })
  birthday: string;

  @IsInt()
  @Min(0)
  @Max(140)
  age: number;

  @IsString()
  @IsIn(['CUIT', 'DNI'])
  documentType: string;

  @IsInt()
  documentNumber: number;
}
