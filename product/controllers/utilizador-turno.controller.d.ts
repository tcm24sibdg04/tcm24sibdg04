import { Utilizador, Turno } from '../models';
import { UtilizadorRepository } from '../repositories';
export declare class UtilizadorTurnoController {
    utilizadorRepository: UtilizadorRepository;
    constructor(utilizadorRepository: UtilizadorRepository);
    getTurno(id: typeof Utilizador.prototype.id): Promise<Turno>;
}
