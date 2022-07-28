import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaisEntity } from './pais.entity';
import { PaisRepository } from './pais.repository';

@Injectable()
export class PaisService {
  constructor(
    @InjectRepository(PaisEntity)
    private paisRepository: PaisRepository,
  ) {}
  async getAll(): Promise<PaisEntity[]> {
    const list = await this.paisRepository.find();
    if (!list.length) {
      throw new NotFoundException({ message: 'la lista esta vacia' });
    }
    return list;
  }
  async findById(id: number): Promise<PaisEntity> {
    const pais = await this.paisRepository.findOneById(id);
    if (!pais) {
      throw new NotFoundException({ message: 'no existe' });
    }
    return pais;
  }
  async findByNombre_Pais(Nombre_Pais: string): Promise<PaisEntity> {
    const pais = await this.paisRepository.findOneBy({
      Nombre_Pais: Nombre_Pais,
    });
    return pais;
  }
  async findByRegion_pais(Region_Pais: string): Promise<PaisEntity> {
    const pais = await this.paisRepository.findOneBy({
      Region_Pais: Region_Pais,
    });
    return pais;
  }
  async findByTipoMoneda_Pais(TipoMoneda_Pais: string): Promise<PaisEntity> {
    const pais = await this.paisRepository.findOneBy({
      TipoMoneda_Pais: TipoMoneda_Pais,
    });
    return pais;
  }
  async findByLengua_Pais(Lengua_Pais: string): Promise<PaisEntity> {
    const pais = await this.paisRepository.findOneBy({
      Lengua_Pais: Lengua_Pais,
    });
    return pais;
  }
  async findByZona_Horaria(Zona_Horaria: string): Promise<PaisEntity> {
    const pais = await this.paisRepository.findOneBy({
      Zona_Horaria: Zona_Horaria,
    });
    return pais;
  }
  async findByBandera_Pais(Bandera_Pais: string): Promise<PaisEntity> {
    const pais = await this.paisRepository.findOneBy({
      Bandera_Pais: Bandera_Pais,
    });
    return pais;
  }
  async findByPoblacion_Pais(Poblacion_Pais: number): Promise<PaisEntity> {
    const pais = await this.paisRepository.findOneBy({
      Poblacion_Pais: Poblacion_Pais,
    });
    return pais;
  }
  async findBySubReg_Pais(SubReg_Pais: string): Promise<PaisEntity> {
    const pais = await this.paisRepository.findOneBy({
      SubReg_Pais: SubReg_Pais,
    });

    return pais;
  }
  async findByCapital_Pais(Capital_Pais: string): Promise<PaisEntity> {
    const pais = await this.paisRepository.findOneBy({
      Capital_Pais: Capital_Pais,
    });

    return pais;
  }
}
