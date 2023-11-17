import { PartialType } from '@nestjs/mapped-types';
import { CreateTarjetaLartDto } from './create-tarjeta-lart.dto';

export class UpdateTarjetaLartDto extends PartialType(CreateTarjetaLartDto) {}
