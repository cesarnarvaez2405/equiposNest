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

  async findAll() { 
    return `This action returns all usuarios`;
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
