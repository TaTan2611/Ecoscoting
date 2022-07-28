import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'pais' })
export class PaisEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  Nombre_Pais: string;

  @Column({ type: 'varchar', length: 150 })
  Capital_Pais: string;

  @Column({ type: 'varchar', length: 255 })
  Region_Pais: string;

  @Column({})
  Poblacion_Pais: number;

  @Column({ type: 'varchar', length: 100 })
  TipoMoneda_Pais: string;

  @Column({ type: 'varchar', length: 100 })
  Lengua_Pais: string;

  @Column({ type: 'varchar', length: 100 })
  Zona_Horaria: string;

  @Column({ type: 'varchar', length: 200 })
  Bandera_Pais: string;
  @Column({ type: 'varchar', length: 500 })
  SubReg_Pais: string;
}
