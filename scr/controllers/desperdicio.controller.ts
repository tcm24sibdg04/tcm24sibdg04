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
import {Desperdicio} from '../models';
import {DesperdicioRepository} from '../repositories';

export class DesperdicioController {
  constructor(
    @repository(DesperdicioRepository)
    public desperdicioRepository : DesperdicioRepository,
  ) {}

  @post('/desperdicios')
  @response(200, {
    description: 'Desperdicio model instance',
    content: {'application/json': {schema: getModelSchemaRef(Desperdicio)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Desperdicio, {
            title: 'NewDesperdicio',
            exclude: ['id'],
          }),
        },
      },
    })
    desperdicio: Omit<Desperdicio, 'id'>,
  ): Promise<Desperdicio> {
    return this.desperdicioRepository.create(desperdicio);
  }

  @get('/desperdicios/count')
  @response(200, {
    description: 'Desperdicio model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Desperdicio) where?: Where<Desperdicio>,
  ): Promise<Count> {
    return this.desperdicioRepository.count(where);
  }

  @get('/desperdicios')
  @response(200, {
    description: 'Array of Desperdicio model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Desperdicio, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Desperdicio) filter?: Filter<Desperdicio>,
  ): Promise<Desperdicio[]> {
    return this.desperdicioRepository.find(filter);
  }

  @patch('/desperdicios')
  @response(200, {
    description: 'Desperdicio PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Desperdicio, {partial: true}),
        },
      },
    })
    desperdicio: Desperdicio,
    @param.where(Desperdicio) where?: Where<Desperdicio>,
  ): Promise<Count> {
    return this.desperdicioRepository.updateAll(desperdicio, where);
  }

  @get('/desperdicios/{id}')
  @response(200, {
    description: 'Desperdicio model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Desperdicio, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Desperdicio, {exclude: 'where'}) filter?: FilterExcludingWhere<Desperdicio>
  ): Promise<Desperdicio> {
    return this.desperdicioRepository.findById(id, filter);
  }

  @patch('/desperdicios/{id}')
  @response(204, {
    description: 'Desperdicio PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Desperdicio, {partial: true}),
        },
      },
    })
    desperdicio: Desperdicio,
  ): Promise<void> {
    await this.desperdicioRepository.updateById(id, desperdicio);
  }

  @put('/desperdicios/{id}')
  @response(204, {
    description: 'Desperdicio PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() desperdicio: Desperdicio,
  ): Promise<void> {
    await this.desperdicioRepository.replaceById(id, desperdicio);
  }

  @del('/desperdicios/{id}')
  @response(204, {
    description: 'Desperdicio DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.desperdicioRepository.deleteById(id);
  }
}
