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

  async findOne(id: number) {
    return `This action returns a #${id} equipo`;
  }

  async update(id: number, updateEquipoDto: UpdateEquipoDto) {
    return `This action updates a #${id} equipo`;
  }

  async remove(id: number) {
    return `This action removes a #${id} equipo`;
  }
}
