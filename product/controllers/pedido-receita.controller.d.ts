import { Count, Filter, Where } from '@loopback/repository';
import { Pedido, Receita } from '../models';
import { PedidoRepository } from '../repositories';
export declare class PedidoReceitaController {
    protected pedidoRepository: PedidoRepository;
    constructor(pedidoRepository: PedidoRepository);
    find(id: number, filter?: Filter<Receita>): Promise<Receita[]>;
    create(id: typeof Pedido.prototype.id, receita: Omit<Receita, 'id'>): Promise<Receita>;
    patch(id: number, receita: Partial<Receita>, where?: Where<Receita>): Promise<Count>;
    delete(id: number, where?: Where<Receita>): Promise<Count>;
}
