import { Module } from '@nestjs/common';
import { EquiposService } from './equipos.service';
import { EquiposController } from './equipos.controller';
import { DatabaseModule } from '../config/configOrm.module';
import { equipoProviders } from './equipos.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [EquiposController],
  providers: [...equipoProviders, EquiposService],
})
export class EquiposModule {}
