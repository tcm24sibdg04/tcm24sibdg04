import { IngredienteReceita, Produto } from '../models';
import { IngredienteReceitaRepository } from '../repositories';
export declare class IngredienteReceitaProdutoController {
    ingredienteReceitaRepository: IngredienteReceitaRepository;
    constructor(ingredienteReceitaRepository: IngredienteReceitaRepository);
    getProduto(id: typeof IngredienteReceita.prototype.id): Promise<Produto>;
}
