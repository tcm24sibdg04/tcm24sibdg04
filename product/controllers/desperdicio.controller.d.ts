import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Desperdicio } from '../models';
import { DesperdicioRepository } from '../repositories';
export declare class DesperdicioController {
    desperdicioRepository: DesperdicioRepository;
    constructor(desperdicioRepository: DesperdicioRepository);
    create(desperdicio: Omit<Desperdicio, 'id'>): Promise<Desperdicio>;
    count(where?: Where<Desperdicio>): Promise<Count>;
    find(filter?: Filter<Desperdicio>): Promise<Desperdicio[]>;
    updateAll(desperdicio: Desperdicio, where?: Where<Desperdicio>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Desperdicio>): Promise<Desperdicio>;
    updateById(id: number, desperdicio: Desperdicio): Promise<void>;
    replaceById(id: number, desperdicio: Desperdicio): Promise<void>;
    deleteById(id: number): Promise<void>;
}
