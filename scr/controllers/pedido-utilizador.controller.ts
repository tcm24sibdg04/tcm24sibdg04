import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Pedido,
  Utilizador,
} from '../models';
import {PedidoRepository} from '../repositories';

export class PedidoUtilizadorController {
  constructor(
    @repository(PedidoRepository)
    public pedidoRepository: PedidoRepository,
  ) { }

  @get('/pedidos/{id}/utilizador', {
    responses: {
      '200': {
        description: 'Utilizador belonging to Pedido',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Utilizador),
          },
        },
      },
    },
  })
  async getUtilizador(
    @param.path.number('id') id: typeof Pedido.prototype.id,
  ): Promise<Utilizador> {
    return this.pedidoRepository.regista(id);
  }
}
