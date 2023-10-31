import { Injectable } from '@nestjs/common';
import { CreateEquipoDto } from './dto/create-equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Equipo } from './entities/equipo.entity'
import { Repository } from 'typeorm';

@Injectable()
export class EquiposService {

  constructor(
    @InjectRepository(Equipo)
    private readonly equipoRepository: Repository<Equipo>
  ) { }
  async create(createEquipoDto: CreateEquipoDto) {
    return 'This action adds a new equipo';
  }

  async findAll() {
    return await this.equipoRepository.find()
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
