import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { IngredienteReceita } from '../models';
import { IngredienteReceitaRepository } from '../repositories';
export declare class IngredienteReceitaController {
    ingredienteReceitaRepository: IngredienteReceitaRepository;
    constructor(ingredienteReceitaRepository: IngredienteReceitaRepository);
    create(ingredienteReceita: Omit<IngredienteReceita, 'id'>): Promise<IngredienteReceita>;
    count(where?: Where<IngredienteReceita>): Promise<Count>;
    find(filter?: Filter<IngredienteReceita>): Promise<IngredienteReceita[]>;
    updateAll(ingredienteReceita: IngredienteReceita, where?: Where<IngredienteReceita>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<IngredienteReceita>): Promise<IngredienteReceita>;
    updateById(id: number, ingredienteReceita: IngredienteReceita): Promise<void>;
    replaceById(id: number, ingredienteReceita: IngredienteReceita): Promise<void>;
    deleteById(id: number): Promise<void>;
}
