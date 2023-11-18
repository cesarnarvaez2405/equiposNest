import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateTarjetaLartDto } from './dto/create-tarjeta-lart.dto';
import { UpdateTarjetaLartDto } from './dto/update-tarjeta-lart.dto';
import { Repository } from 'typeorm';
import { TarjetaLart } from './entities/tarjeta-lart.entity';

@Injectable()
export class TarjetaLartService {
  constructor(
    @Inject('TARJETA_REPOSITORY')
    private tarjetaRepository: Repository<TarjetaLart>,
  ) {}
  async create(createTarjetaLartDto: CreateTarjetaLartDto) {
    const { uId } = createTarjetaLartDto;
    const tarjeta = await this.findOne({
      uId: { uId },
    });
    console.log(tarjeta)
    if (tarjeta) {
      throw new BadRequestException('La tarjeta ya existe');
    }
    const tarjetaNueva = this.tarjetaRepository.create(createTarjetaLartDto);
    return await this.tarjetaRepository.save(tarjetaNueva);
  }

  findAll() {
    return this.tarjetaRepository.find();
  }

  findOne(options?: any) {
    return this.tarjetaRepository.findBy({
      ...options,
    });
  }

  update(RowId: number, updateTarjetaLartDto: UpdateTarjetaLartDto) {
    const tarjeta = this.findOne({
      where: { RowId },
    });
    if (!tarjeta) {
      throw new BadRequestException('Tarjeta no existe');
    }
  }

  remove(id: number) {
    return `This action removes a #${id} tarjetaLart`;
  }
}
