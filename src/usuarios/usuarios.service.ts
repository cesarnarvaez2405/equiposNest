import { Inject, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @Inject('USUARIOS_REPOSITORY')
    private usuariosRepository: Repository<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    const usuario = this.usuariosRepository.create(createUsuarioDto)
    return await this.usuariosRepository.save(usuario)
  }

  async buscarPorEmail(email: string){
    return this.usuariosRepository.findOneBy({
      email
    })
  }

  async buscaPorEmailYPassword(email: string){
    return this.usuariosRepository.findOne({
      where: {email},
      select:  ['RowId', 'nombre', 'email', 'password', 'rol_id', 'esta_activo']
    })
  }

  async findAll() { 
    return this.usuariosRepository.find()
  }

  async findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  async remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
