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
import {Perda} from '../models';
import {PerdaRepository} from '../repositories';

export class PerdaController {
  constructor(
    @repository(PerdaRepository)
    public perdaRepository : PerdaRepository,
  ) {}

  @post('/perdas')
  @response(200, {
    description: 'Perda model instance',
    content: {'application/json': {schema: getModelSchemaRef(Perda)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Perda, {
            title: 'NewPerda',
            exclude: ['id_perda'],
          }),
        },
      },
    })
    perda: Omit<Perda, 'id_perda'>,
  ): Promise<Perda> {
    return this.perdaRepository.create(perda);
  }

  @get('/perdas/count')
  @response(200, {
    description: 'Perda model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Perda) where?: Where<Perda>,
  ): Promise<Count> {
    return this.perdaRepository.count(where);
  }

  @get('/perdas')
  @response(200, {
    description: 'Array of Perda model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Perda, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Perda) filter?: Filter<Perda>,
  ): Promise<Perda[]> {
    return this.perdaRepository.find(filter);
  }

  @patch('/perdas')
  @response(200, {
    description: 'Perda PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Perda, {partial: true}),
        },
      },
    })
    perda: Perda,
    @param.where(Perda) where?: Where<Perda>,
  ): Promise<Count> {
    return this.perdaRepository.updateAll(perda, where);
  }

  @get('/perdas/{id}')
  @response(200, {
    description: 'Perda model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Perda, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Perda, {exclude: 'where'}) filter?: FilterExcludingWhere<Perda>
  ): Promise<Perda> {
    return this.perdaRepository.findById(id, filter);
  }

  @patch('/perdas/{id}')
  @response(204, {
    description: 'Perda PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Perda, {partial: true}),
        },
      },
    })
    perda: Perda,
  ): Promise<void> {
    await this.perdaRepository.updateById(id, perda);
  }

  @put('/perdas/{id}')
  @response(204, {
    description: 'Perda PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() perda: Perda,
  ): Promise<void> {
    await this.perdaRepository.replaceById(id, perda);
  }

  @del('/perdas/{id}')
  @response(204, {
    description: 'Perda DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.perdaRepository.deleteById(id);
  }
}
