import { Module } from '@nestjs/common';
import { TarjetaLartService } from './tarjeta-lart.service';
import { TarjetaLartController } from './tarjeta-lart.controller';

@Module({
  controllers: [TarjetaLartController],
  providers: [TarjetaLartService],
})
export class TarjetaLartModule {}
