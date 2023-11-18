import { Module } from '@nestjs/common';
import { EquiposModule } from './equipos/equipos.module';
import { ConfigModule } from '@nestjs/config';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';
import { TarjetaLartModule } from './tarjeta-lart/tarjeta-lart.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development',
    }),
    EquiposModule,
    UsuariosModule,
    AuthModule,
    TarjetaLartModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
