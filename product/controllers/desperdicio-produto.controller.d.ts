import { Desperdicio, Produto } from '../models';
import { DesperdicioRepository } from '../repositories';
export declare class DesperdicioProdutoController {
    desperdicioRepository: DesperdicioRepository;
    constructor(desperdicioRepository: DesperdicioRepository);
    getProduto(id: typeof Desperdicio.prototype.id): Promise<Produto>;
}
