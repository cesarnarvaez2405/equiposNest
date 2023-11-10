import { Inject, Injectable } from '@nestjs/common';
import { CreateEquipoDto } from './dto/create-equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';
import { Equipo } from './entities/equipo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EquiposService {
  constructor(
    @Inject('EQUIPO_REPOSITORY')
    private equipoRepository: Repository<Equipo>,
  ) {}
  async create(createEquipoDto: CreateEquipoDto) {
    const equipo = this.equipoRepository.create(createEquipoDto);
    return await this.equipoRepository.save(equipo);
  }

  async findAll() {
    return await this.equipoRepository.find();
  }

  async buscarPorId(id: number) {
    const datos = await this.equipoRepository.findOne({
      where: {id}
    })
    if(!datos){
      return `No se encontro el equipo ${id}`
    }
    return datos
  }

  async update(id: number, updateEquipoDto: UpdateEquipoDto) {
    const datos = await this.buscarPorId(id)
    if(!datos){
      return `No se encontro el equipo ${id}`
    }
    return await this.equipoRepository.update(id, updateEquipoDto)
  }

  async remove(id: number) {
    return await this.equipoRepository.delete(id)
  }
}
