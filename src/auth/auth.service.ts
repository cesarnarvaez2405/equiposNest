import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuariosService: UsuariosService,
    private readonly jwtService: JwtService,
  ) {}

  async register(registro) {
    const { email } = registro;
    const tieneEmail = await this.usuariosService.buscarPorEmail(email);
    if (tieneEmail) {
      throw new BadRequestException('Usuario ya existe');
    }
    registro.password = await bcrypt.hash(registro.password, 10);
    return await this.usuariosService.create(registro);
  }

  async login(login) {
    const { email, password} = login;
    const tieneEmail = await this.usuariosService.buscarPorEmail(email);
    if (!tieneEmail) {
      throw new BadRequestException('Usuario no esta registrado');
    }

    const passwordValido = await bcrypt.compare(password, tieneEmail.password);

    if (!passwordValido) {
      throw new UnauthorizedException('La contraseña es ioncorrecta');
    }

    const payload = { email: tieneEmail.email, rol:tieneEmail.rol_id  };

    const token = await this.jwtService.signAsync(payload);

    return {
      token,
      payload
    };
  }
}
