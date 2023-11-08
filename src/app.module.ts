import { Module } from '@nestjs/common';
import { EquiposModule } from './equipos/equipos.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    EquiposModule,
    ConfigModule.forRoot({
      envFilePath: '.env.development',
    }),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
