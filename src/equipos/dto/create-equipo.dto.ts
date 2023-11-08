import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateEquipoDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
