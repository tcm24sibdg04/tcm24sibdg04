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
  Produto,
  Perda,
} from '../models';
import {ProdutoRepository} from '../repositories';

export class ProdutoPerdaController {
  constructor(
    @repository(ProdutoRepository) protected produtoRepository: ProdutoRepository,
  ) { }

  @get('/produtos/{id}/perdas', {
    responses: {
      '200': {
        description: 'Array of Produto has many Perda',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Perda)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Perda>,
  ): Promise<Perda[]> {
    return this.produtoRepository.perdas(id).find(filter);
  }

  @post('/produtos/{id}/perdas', {
    responses: {
      '200': {
        description: 'Produto model instance',
        content: {'application/json': {schema: getModelSchemaRef(Perda)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Produto.prototype.id_produto,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Perda, {
            title: 'NewPerdaInProduto',
            exclude: ['id_perda'],
            optional: ['id_produto']
          }),
        },
      },
    }) perda: Omit<Perda, 'id_perda'>,
  ): Promise<Perda> {
    return this.produtoRepository.perdas(id).create(perda);
  }

  @patch('/produtos/{id}/perdas', {
    responses: {
      '200': {
        description: 'Produto.Perda PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Perda, {partial: true}),
        },
      },
    })
    perda: Partial<Perda>,
    @param.query.object('where', getWhereSchemaFor(Perda)) where?: Where<Perda>,
  ): Promise<Count> {
    return this.produtoRepository.perdas(id).patch(perda, where);
  }

  @del('/produtos/{id}/perdas', {
    responses: {
      '200': {
        description: 'Produto.Perda DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Perda)) where?: Where<Perda>,
  ): Promise<Count> {
    return this.produtoRepository.perdas(id).delete(where);
  }
}
