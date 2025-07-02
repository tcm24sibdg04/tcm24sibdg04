import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Produto } from '../models';
import { ProdutoRepository } from '../repositories';
export declare class ProdutoController {
    produtoRepository: ProdutoRepository;
    constructor(produtoRepository: ProdutoRepository);
    create(produto: Omit<Produto, 'id'>): Promise<Produto>;
    count(where?: Where<Produto>): Promise<Count>;
    find(filter?: Filter<Produto>): Promise<Produto[]>;
    updateAll(produto: Produto, where?: Where<Produto>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Produto>): Promise<Produto>;
    updateById(id: number, produto: Produto): Promise<void>;
    replaceById(id: number, produto: Produto): Promise<void>;
    deleteById(id: number): Promise<void>;
}
