import { Count, Filter, Where } from '@loopback/repository';
import { Receita, IngredienteReceita } from '../models';
import { ReceitaRepository } from '../repositories';
export declare class ReceitaIngredienteReceitaController {
    protected receitaRepository: ReceitaRepository;
    constructor(receitaRepository: ReceitaRepository);
    find(id: number, filter?: Filter<IngredienteReceita>): Promise<IngredienteReceita[]>;
    create(id: typeof Receita.prototype.id, ingredienteReceita: Omit<IngredienteReceita, 'id'>): Promise<IngredienteReceita>;
    patch(id: number, ingredienteReceita: Partial<IngredienteReceita>, where?: Where<IngredienteReceita>): Promise<Count>;
    delete(id: number, where?: Where<IngredienteReceita>): Promise<Count>;
}
