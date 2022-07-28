import { PaisEntity } from './pais.entity';
import { PaisRepository } from './pais.repository';
export declare class PaisService {
    private paisRepository;
    constructor(paisRepository: PaisRepository);
    getAll(): Promise<PaisEntity[]>;
    findById(id: number): Promise<PaisEntity>;
    findByNombre_Pais(Nombre_Pais: string): Promise<PaisEntity>;
    findByRegion_pais(Region_Pais: string): Promise<PaisEntity>;
    findByTipoMoneda_Pais(TipoMoneda_Pais: string): Promise<PaisEntity>;
    findByLengua_Pais(Lengua_Pais: string): Promise<PaisEntity>;
    findByZona_Horaria(Zona_Horaria: string): Promise<PaisEntity>;
    findByBandera_Pais(Bandera_Pais: string): Promise<PaisEntity>;
    findByPoblacion_Pais(Poblacion_Pais: number): Promise<PaisEntity>;
    findBySubReg_Pais(SubReg_Pais: string): Promise<PaisEntity>;
    findByCapital_Pais(Capital_Pais: string): Promise<PaisEntity>;
}
