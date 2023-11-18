import { Module } from '@nestjs/common';
import { TarjetaLartService } from './tarjeta-lart.service';
import { TarjetaLartController } from './tarjeta-lart.controller';
import { tarjetaProviders } from './tarjeta.providers';
import { DatabaseModule } from 'src/config/configOrm.module';

@Module({
  imports: [DatabaseModule],
  controllers: [TarjetaLartController],
  providers: [...tarjetaProviders, TarjetaLartService],
})
export class TarjetaLartModule {}
