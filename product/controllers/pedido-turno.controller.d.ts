import { Pedido, Turno } from '../models';
import { PedidoRepository } from '../repositories';
export declare class PedidoTurnoController {
    pedidoRepository: PedidoRepository;
    constructor(pedidoRepository: PedidoRepository);
    getTurno(id: typeof Pedido.prototype.id): Promise<Turno>;
}
