import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Pedido,
  Receita,
} from '../models';
import {PedidoRepository} from '../repositories';

export class PedidoReceitaController {
  constructor(
    @repository(PedidoRepository) protected pedidoRepository: PedidoRepository,
  ) { }

  @get('/pedidos/{id}/receitas', {
    responses: {
      '200': {
        description: 'Array of Pedido has many Receita',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Receita)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Receita>,
  ): Promise<Receita[]> {
    return this.pedidoRepository.usadoEm(id).find(filter);
  }

  @post('/pedidos/{id}/receitas', {
    responses: {
      '200': {
        description: 'Pedido model instance',
        content: {'application/json': {schema: getModelSchemaRef(Receita)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Pedido.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Receita, {
            title: 'NewReceitaInPedido',
            exclude: ['id'],
            optional: ['pedidoId']
          }),
        },
      },
    }) receita: Omit<Receita, 'id'>,
  ): Promise<Receita> {
    return this.pedidoRepository.usadoEm(id).create(receita);
  }

  @patch('/pedidos/{id}/receitas', {
    responses: {
      '200': {
        description: 'Pedido.Receita PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Receita, {partial: true}),
        },
      },
    })
    receita: Partial<Receita>,
    @param.query.object('where', getWhereSchemaFor(Receita)) where?: Where<Receita>,
  ): Promise<Count> {
    return this.pedidoRepository.usadoEm(id).patch(receita, where);
  }

  @del('/pedidos/{id}/receitas', {
    responses: {
      '200': {
        description: 'Pedido.Receita DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Receita)) where?: Where<Receita>,
  ): Promise<Count> {
    return this.pedidoRepository.usadoEm(id).delete(where);
  }
}
