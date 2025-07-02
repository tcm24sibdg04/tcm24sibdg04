import { Count, Filter, Where } from '@loopback/repository';
import { Utilizador, Desperdicio } from '../models';
import { UtilizadorRepository } from '../repositories';
export declare class UtilizadorDesperdicioController {
    protected utilizadorRepository: UtilizadorRepository;
    constructor(utilizadorRepository: UtilizadorRepository);
    find(id: number, filter?: Filter<Desperdicio>): Promise<Desperdicio[]>;
    create(id: typeof Utilizador.prototype.id, desperdicio: Omit<Desperdicio, 'id'>): Promise<Desperdicio>;
    patch(id: number, desperdicio: Partial<Desperdicio>, where?: Where<Desperdicio>): Promise<Count>;
    delete(id: number, where?: Where<Desperdicio>): Promise<Count>;
}
