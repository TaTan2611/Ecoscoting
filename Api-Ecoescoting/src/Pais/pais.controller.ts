import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PaisService } from './pais.service';

@Controller('pais')
export class PaisController {
  constructor(private paisService: PaisService) {}

  @Get()
  async getAll() {
    return this.paisService.getAll();
  }
  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return this.paisService.findById(id);
  }
}
