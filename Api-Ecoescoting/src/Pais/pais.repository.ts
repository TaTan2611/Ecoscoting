import { EntityRepository, Repository } from 'typeorm';
import { PaisEntity } from './pais.entity';

@EntityRepository(PaisEntity)
export class PaisRepository extends Repository<PaisEntity> {}
