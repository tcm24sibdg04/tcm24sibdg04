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
  Turno,
} from '../models';
import {PedidoRepository} from '../repositories';

export class PedidoTurnoController {
  constructor(
    @repository(PedidoRepository)
    public pedidoRepository: PedidoRepository,
  ) { }

  @get('/pedidos/{id}/turno', {
    responses: {
      '200': {
        description: 'Turno belonging to Pedido',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Turno),
          },
        },
      },
    },
  })
  async getTurno(
    @param.path.number('id') id: typeof Pedido.prototype.id,
  ): Promise<Turno> {
    return this.pedidoRepository.ocorreEm(id);
  }
}
