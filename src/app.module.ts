import { Module } from '@nestjs/common';
import { EquiposModule } from './equipos/equipos.module';
import { ConfigModule } from '@nestjs/config';
import { databaseProviders } from './config/configOrm.providers'

@Module({
  imports: [EquiposModule, ConfigModule.forRoot({
    envFilePath: '.env.development',
  }),],
  controllers: [],
  providers: [...databaseProviders],
  exports: [...databaseProviders]
})
export class AppModule { }
