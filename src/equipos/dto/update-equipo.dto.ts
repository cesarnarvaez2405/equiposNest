import { PartialType } from '@nestjs/mapped-types';
import { CreateEquipoDto } from './create-equipo.dto';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateEquipoDto extends PartialType(CreateEquipoDto) {
    @IsString()
    @IsOptional()
    name?: string;
  
    @IsEmail()
    @IsOptional()
    email?: string;
  
    @IsNotEmpty()
    @IsString()
    @IsOptional()
    password?: string;
}
