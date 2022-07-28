import { PaisService } from './pais.service';
export declare class PaisController {
    private paisService;
    constructor(paisService: PaisService);
    getAll(): Promise<import("./pais.entity").PaisEntity[]>;
    getOne(id: number): Promise<import("./pais.entity").PaisEntity>;
}
