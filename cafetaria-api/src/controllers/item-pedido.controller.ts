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
import {ItemPedido} from '../models';
import {ItemPedidoRepository} from '../repositories';

export class ItemPedidoController {
  constructor(
    @repository(ItemPedidoRepository)
    public itemPedidoRepository : ItemPedidoRepository,
  ) {}

  @post('/item-pedidos')
  @response(200, {
    description: 'ItemPedido model instance',
    content: {'application/json': {schema: getModelSchemaRef(ItemPedido)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ItemPedido, {
            title: 'NewItemPedido',
            exclude: ['id_item'],
          }),
        },
      },
    })
    itemPedido: Omit<ItemPedido, 'id_item'>,
  ): Promise<ItemPedido> {
    return this.itemPedidoRepository.create(itemPedido);
  }

  @get('/item-pedidos/count')
  @response(200, {
    description: 'ItemPedido model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ItemPedido) where?: Where<ItemPedido>,
  ): Promise<Count> {
    return this.itemPedidoRepository.count(where);
  }

  @get('/item-pedidos')
  @response(200, {
    description: 'Array of ItemPedido model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ItemPedido, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ItemPedido) filter?: Filter<ItemPedido>,
  ): Promise<ItemPedido[]> {
    return this.itemPedidoRepository.find(filter);
  }

  @patch('/item-pedidos')
  @response(200, {
    description: 'ItemPedido PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ItemPedido, {partial: true}),
        },
      },
    })
    itemPedido: ItemPedido,
    @param.where(ItemPedido) where?: Where<ItemPedido>,
  ): Promise<Count> {
    return this.itemPedidoRepository.updateAll(itemPedido, where);
  }

  @get('/item-pedidos/{id}')
  @response(200, {
    description: 'ItemPedido model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ItemPedido, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ItemPedido, {exclude: 'where'}) filter?: FilterExcludingWhere<ItemPedido>
  ): Promise<ItemPedido> {
    return this.itemPedidoRepository.findById(id, filter);
  }

  @patch('/item-pedidos/{id}')
  @response(204, {
    description: 'ItemPedido PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ItemPedido, {partial: true}),
        },
      },
    })
    itemPedido: ItemPedido,
  ): Promise<void> {
    await this.itemPedidoRepository.updateById(id, itemPedido);
  }

  @put('/item-pedidos/{id}')
  @response(204, {
    description: 'ItemPedido PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() itemPedido: ItemPedido,
  ): Promise<void> {
    await this.itemPedidoRepository.replaceById(id, itemPedido);
  }

  @del('/item-pedidos/{id}')
  @response(204, {
    description: 'ItemPedido DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.itemPedidoRepository.deleteById(id);
  }
}
