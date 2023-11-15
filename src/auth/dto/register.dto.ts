import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';

export class RegisterDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @Transform(({ value }) => value.trim()) //Esto no permite los espacios en null o en blanco
  password: string;

  @IsString()
  nombre: string;

  @IsNumber()
  @Min(4)
  @IsPositive()
  telefono: number;

  @IsString()
  rol_id: string;

  @IsBoolean()
  @IsOptional()
  esta_activo: boolean;
}
