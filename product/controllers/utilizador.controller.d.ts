import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Utilizador } from '../models';
import { UtilizadorRepository } from '../repositories';
export declare class UtilizadorController {
    utilizadorRepository: UtilizadorRepository;
    constructor(utilizadorRepository: UtilizadorRepository);
    create(utilizador: Omit<Utilizador, 'id'>): Promise<Utilizador>;
    count(where?: Where<Utilizador>): Promise<Count>;
    find(filter?: Filter<Utilizador>): Promise<Utilizador[]>;
    updateAll(utilizador: Utilizador, where?: Where<Utilizador>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Utilizador>): Promise<Utilizador>;
    updateById(id: number, utilizador: Utilizador): Promise<void>;
    replaceById(id: number, utilizador: Utilizador): Promise<void>;
    deleteById(id: number): Promise<void>;
}
