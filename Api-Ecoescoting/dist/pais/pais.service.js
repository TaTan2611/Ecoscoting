"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaisService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const pais_entity_1 = require("./pais.entity");
const pais_repository_1 = require("./pais.repository");
let PaisService = class PaisService {
    constructor(paisRepository) {
        this.paisRepository = paisRepository;
    }
    async getAll() {
        const list = await this.paisRepository.find();
        if (!list.length) {
            throw new common_1.NotFoundException({ message: 'la lista esta vacia' });
        }
        return list;
    }
    async findById(id) {
        const pais = await this.paisRepository.findOneById(id);
        if (!pais) {
            throw new common_1.NotFoundException({ message: 'no existe' });
        }
        return pais;
    }
    async findByNombre_Pais(Nombre_Pais) {
        const pais = await this.paisRepository.findOneBy({
            Nombre_Pais: Nombre_Pais,
        });
        return pais;
    }
    async findByRegion_pais(Region_Pais) {
        const pais = await this.paisRepository.findOneBy({
            Region_Pais: Region_Pais,
        });
        return pais;
    }
    async findByTipoMoneda_Pais(TipoMoneda_Pais) {
        const pais = await this.paisRepository.findOneBy({
            TipoMoneda_Pais: TipoMoneda_Pais,
        });
        return pais;
    }
    async findByLengua_Pais(Lengua_Pais) {
        const pais = await this.paisRepository.findOneBy({
            Lengua_Pais: Lengua_Pais,
        });
        return pais;
    }
    async findByZona_Horaria(Zona_Horaria) {
        const pais = await this.paisRepository.findOneBy({
            Zona_Horaria: Zona_Horaria,
        });
        return pais;
    }
    async findByBandera_Pais(Bandera_Pais) {
        const pais = await this.paisRepository.findOneBy({
            Bandera_Pais: Bandera_Pais,
        });
        return pais;
    }
    async findByPoblacion_Pais(Poblacion_Pais) {
        const pais = await this.paisRepository.findOneBy({
            Poblacion_Pais: Poblacion_Pais,
        });
        return pais;
    }
    async findBySubReg_Pais(SubReg_Pais) {
        const pais = await this.paisRepository.findOneBy({
            SubReg_Pais: SubReg_Pais,
        });
        return pais;
    }
    async findByCapital_Pais(Capital_Pais) {
        const pais = await this.paisRepository.findOneBy({
            Capital_Pais: Capital_Pais,
        });
        return pais;
    }
};
PaisService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(pais_entity_1.PaisEntity)),
    __metadata("design:paramtypes", [pais_repository_1.PaisRepository])
], PaisService);
exports.PaisService = PaisService;
//# sourceMappingURL=pais.service.js.map