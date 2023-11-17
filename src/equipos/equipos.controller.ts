import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EquiposService } from './equipos.service';
import { CreateEquipoDto } from './dto/create-equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';
import { Auth } from 'src/auth/decorators/auth.decorators';
import { Role } from 'src/common/enums/rol.enum';

@Controller('equipos')
export class EquiposController {
  constructor(private readonly equiposService: EquiposService) {}

  @Post()
  @Auth(Role.Admin)
  create(@Body() createEquipoDto: CreateEquipoDto) {
    try {
      return this.equiposService.create(createEquipoDto);
    } catch (error) {
      console.error(error);
    }
  }

  @Get()
  @Auth(Role.Admin)
  findAll() {
    return this.equiposService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.equiposService.buscarPorId(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateEquipoDto: UpdateEquipoDto) {
    return this.equiposService.update(+id, updateEquipoDto);
  }

  @Delete(':id')
  @Auth(Role.Admin)
  async remove(@Param('id') id: number) {
    try {
      return await this.equiposService.remove(+id);
    } catch (error) {
      console.error(error);
    }
  }
}
