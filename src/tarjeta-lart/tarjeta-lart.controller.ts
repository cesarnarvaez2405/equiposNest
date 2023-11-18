import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TarjetaLartService } from './tarjeta-lart.service';
import { CreateTarjetaLartDto } from './dto/create-tarjeta-lart.dto';
import { UpdateTarjetaLartDto } from './dto/update-tarjeta-lart.dto';

@Controller('tarjeta')
export class TarjetaLartController {
  constructor(private readonly tarjetaLartService: TarjetaLartService) {}

  @Post()
  create(@Body() createTarjetaLartDto: CreateTarjetaLartDto) {
    return this.tarjetaLartService.create(createTarjetaLartDto);
  }

  @Get()
  findAll() {
    return this.tarjetaLartService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tarjetaLartService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTarjetaLartDto: UpdateTarjetaLartDto) {
    return this.tarjetaLartService.update(+id, updateTarjetaLartDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tarjetaLartService.remove(+id);
  }
}
