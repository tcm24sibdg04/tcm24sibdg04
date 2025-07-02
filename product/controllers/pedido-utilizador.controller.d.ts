import { Pedido, Utilizador } from '../models';
import { PedidoRepository } from '../repositories';
export declare class PedidoUtilizadorController {
    pedidoRepository: PedidoRepository;
    constructor(pedidoRepository: PedidoRepository);
    getUtilizador(id: typeof Pedido.prototype.id): Promise<Utilizador>;
}
