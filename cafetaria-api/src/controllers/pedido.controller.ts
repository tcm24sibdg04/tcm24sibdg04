import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Pedido} from '../models';
import {PedidoRepository} from '../repositories';

export class PedidoController {
  constructor(
    @repository(PedidoRepository)
    public pedidoRepository : PedidoRepository,
  ) {}

  @post('/pedidos')
  @response(200, {
    description: 'Pedido model instance',
    content: {'application/json': {schema: getModelSchemaRef(Pedido)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pedido, {
            title: 'NewPedido',
            exclude: ['id_pedido'],
          }),
        },
      },
    })
    pedido: Omit<Pedido, 'id_pedido'>,
  ): Promise<Pedido> {
    return this.pedidoRepository.create(pedido);
  }

  @get('/pedidos/count')
  @response(200, {
    description: 'Pedido model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Pedido) where?: Where<Pedido>,
  ): Promise<Count> {
    return this.pedidoRepository.count(where);
  }

  @get('/pedidos')
  @response(200, {
    description: 'Array of Pedido model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Pedido, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Pedido) filter?: Filter<Pedido>,
  ): Promise<Pedido[]> {
    return this.pedidoRepository.find(filter);
  }

  @patch('/pedidos')
  @response(200, {
    description: 'Pedido PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pedido, {partial: true}),
        },
      },
    })
    pedido: Pedido,
    @param.where(Pedido) where?: Where<Pedido>,
  ): Promise<Count> {
    return this.pedidoRepository.updateAll(pedido, where);
  }

  @get('/pedidos/{id}')
  @response(200, {
    description: 'Pedido model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Pedido, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Pedido, {exclude: 'where'}) filter?: FilterExcludingWhere<Pedido>
  ): Promise<Pedido> {
    return this.pedidoRepository.findById(id, filter);
  }

  @patch('/pedidos/{id}')
  @response(204, {
    description: 'Pedido PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pedido, {partial: true}),
        },
      },
    })
    pedido: Pedido,
  ): Promise<void> {
    await this.pedidoRepository.updateById(id, pedido);
  }

  @put('/pedidos/{id}')
  @response(204, {
    description: 'Pedido PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() pedido: Pedido,
  ): Promise<void> {
    await this.pedidoRepository.replaceById(id, pedido);
  }

  @del('/pedidos/{id}')
  @response(204, {
    description: 'Pedido DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.pedidoRepository.deleteById(id);
  }
}
