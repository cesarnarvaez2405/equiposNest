import { Module } from '@nestjs/common';
import { EquiposModule } from './equipos/equipos.module';
import { ConfigModule } from '@nestjs/config';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [
    EquiposModule,
    UsuariosModule,
    ConfigModule.forRoot({
      envFilePath: '.env.development',
    }),
    
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
