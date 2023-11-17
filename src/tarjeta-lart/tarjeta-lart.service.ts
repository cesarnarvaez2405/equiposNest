import { Injectable } from '@nestjs/common';
import { CreateTarjetaLartDto } from './dto/create-tarjeta-lart.dto';
import { UpdateTarjetaLartDto } from './dto/update-tarjeta-lart.dto';

@Injectable()
export class TarjetaLartService {
  create(createTarjetaLartDto: CreateTarjetaLartDto) {
    return 'This action adds a new tarjetaLart';
  }

  findAll() {
    return `This action returns all tarjetaLart`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tarjetaLart`;
  }

  update(id: number, updateTarjetaLartDto: UpdateTarjetaLartDto) {
    return `This action updates a #${id} tarjetaLart`;
  }

  remove(id: number) {
    return `This action removes a #${id} tarjetaLart`;
  }
}
