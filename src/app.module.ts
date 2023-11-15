import { Module } from '@nestjs/common';
import { EquiposModule } from './equipos/equipos.module';
import { ConfigModule } from '@nestjs/config';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    EquiposModule,
    UsuariosModule,
    ConfigModule.forRoot({
      envFilePath: '.env.development',
    }),
    AuthModule,
    
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
