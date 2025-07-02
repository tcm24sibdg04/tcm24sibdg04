import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Receita } from '../models';
import { ReceitaRepository } from '../repositories';
export declare class ReceitaController {
    receitaRepository: ReceitaRepository;
    constructor(receitaRepository: ReceitaRepository);
    create(receita: Omit<Receita, 'id'>): Promise<Receita>;
    count(where?: Where<Receita>): Promise<Count>;
    find(filter?: Filter<Receita>): Promise<Receita[]>;
    updateAll(receita: Receita, where?: Where<Receita>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Receita>): Promise<Receita>;
    updateById(id: number, receita: Receita): Promise<void>;
    replaceById(id: number, receita: Receita): Promise<void>;
    deleteById(id: number): Promise<void>;
}
