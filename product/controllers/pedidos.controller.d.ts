import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Pedido } from '../models';
import { PedidoRepository } from '../repositories';
export declare class PedidosController {
    pedidoRepository: PedidoRepository;
    constructor(pedidoRepository: PedidoRepository);
    create(pedido: Omit<Pedido, 'id'>): Promise<Pedido>;
    count(where?: Where<Pedido>): Promise<Count>;
    find(filter?: Filter<Pedido>): Promise<Pedido[]>;
    updateAll(pedido: Pedido, where?: Where<Pedido>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Pedido>): Promise<Pedido>;
    updateById(id: number, pedido: Pedido): Promise<void>;
    replaceById(id: number, pedido: Pedido): Promise<void>;
    deleteById(id: number): Promise<void>;
}
