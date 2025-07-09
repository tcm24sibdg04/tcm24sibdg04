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
import {Reposicao} from '../models';
import {ReposicaoRepository} from '../repositories';

export class ReposicaoController {
  constructor(
    @repository(ReposicaoRepository)
    public reposicaoRepository : ReposicaoRepository,
  ) {}

  @post('/reposicaos')
  @response(200, {
    description: 'Reposicao model instance',
    content: {'application/json': {schema: getModelSchemaRef(Reposicao)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Reposicao, {
            title: 'NewReposicao',
            exclude: ['id_reposicao'],
          }),
        },
      },
    })
    reposicao: Omit<Reposicao, 'id_reposicao'>,
  ): Promise<Reposicao> {
    return this.reposicaoRepository.create(reposicao);
  }

  @get('/reposicaos/count')
  @response(200, {
    description: 'Reposicao model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Reposicao) where?: Where<Reposicao>,
  ): Promise<Count> {
    return this.reposicaoRepository.count(where);
  }

  @get('/reposicaos')
  @response(200, {
    description: 'Array of Reposicao model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Reposicao, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Reposicao) filter?: Filter<Reposicao>,
  ): Promise<Reposicao[]> {
    return this.reposicaoRepository.find(filter);
  }

  @patch('/reposicaos')
  @response(200, {
    description: 'Reposicao PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Reposicao, {partial: true}),
        },
      },
    })
    reposicao: Reposicao,
    @param.where(Reposicao) where?: Where<Reposicao>,
  ): Promise<Count> {
    return this.reposicaoRepository.updateAll(reposicao, where);
  }

  @get('/reposicaos/{id}')
  @response(200, {
    description: 'Reposicao model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Reposicao, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Reposicao, {exclude: 'where'}) filter?: FilterExcludingWhere<Reposicao>
  ): Promise<Reposicao> {
    return this.reposicaoRepository.findById(id, filter);
  }

  @patch('/reposicaos/{id}')
  @response(204, {
    description: 'Reposicao PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Reposicao, {partial: true}),
        },
      },
    })
    reposicao: Reposicao,
  ): Promise<void> {
    await this.reposicaoRepository.updateById(id, reposicao);
  }

  @put('/reposicaos/{id}')
  @response(204, {
    description: 'Reposicao PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() reposicao: Reposicao,
  ): Promise<void> {
    await this.reposicaoRepository.replaceById(id, reposicao);
  }

  @del('/reposicaos/{id}')
  @response(204, {
    description: 'Reposicao DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.reposicaoRepository.deleteById(id);
  }
}
