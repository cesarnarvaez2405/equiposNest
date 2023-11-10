import { Module } from '@nestjs/common';
import { EquiposModule } from './equipos/equipos.module';
import { ConfigModule } from '@nestjs/config';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [
    EquiposModule,
    ConfigModule.forRoot({
      envFilePath: '.env.development',
    }),
    UsuariosModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
