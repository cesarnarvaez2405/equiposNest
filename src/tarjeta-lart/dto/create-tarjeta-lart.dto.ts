import { IsBoolean, IsNotEmpty, IsOptional, IsPositive, IsString, Min } from 'class-validator';

export class CreateTarjetaLartDto {
  @IsString()
  @IsNotEmpty()
  uId: string;

  @Min(1)
  @IsPositive()
  saldo: number;

  @IsBoolean()
  @IsOptional()
  esta_activo: boolean;
}
