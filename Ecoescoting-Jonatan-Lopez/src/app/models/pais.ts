export class Pais {
  id?: number;
  Nombre_Pais: string;
  Capital_Pais: string;
  Region_Pais: string;
  Poblacion_Pais: number;
  TipoMoneda_Pais: string;
  Lengua_Pais: string;
  Zona_Horaria: string;
  Bandera_Pais: string;
  SubReg_Pais: string;

  constructor(
    Nombre_Pais: string,
    Capital_Pais: string,
    Region_Pais: string,
    Poblacion_Pais: number,
    TipoMoneda_Pais: string,
    Lengua_Pais: string,
    Zona_Horaria: string,
    Bandera_Pais: string,
    SubReg_Pais: string
  ) {
    this.Nombre_Pais = Nombre_Pais;
    this.Capital_Pais = Capital_Pais;
    this.Region_Pais = Region_Pais;
    this.Poblacion_Pais = Poblacion_Pais;
    this.TipoMoneda_Pais = TipoMoneda_Pais;
    this.Lengua_Pais = Lengua_Pais;
    this.Zona_Horaria = Zona_Horaria;
    this.Bandera_Pais = Bandera_Pais;
    this.SubReg_Pais = SubReg_Pais;
  }
}
