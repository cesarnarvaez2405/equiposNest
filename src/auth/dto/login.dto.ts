import { IsEmail, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
export class LoginDto {
  @IsEmail()
  email: string;

  @IsString()
  @Transform(({ value }) => value.trim()) //Esto no permite los espacios en null o en blanco
  password: string;
}
