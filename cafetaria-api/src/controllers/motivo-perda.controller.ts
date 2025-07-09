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
import {MotivoPerda} from '../models';
import {MotivoPerdaRepository} from '../repositories';

export class MotivoPerdaController {
  constructor(
    @repository(MotivoPerdaRepository)
    public motivoPerdaRepository : MotivoPerdaRepository,
  ) {}

  @post('/motivo-perdas')
  @response(200, {
    description: 'MotivoPerda model instance',
    content: {'application/json': {schema: getModelSchemaRef(MotivoPerda)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MotivoPerda, {
            title: 'NewMotivoPerda',
            exclude: ['id_motivo'],
          }),
        },
      },
    })
    motivoPerda: Omit<MotivoPerda, 'id_motivo'>,
  ): Promise<MotivoPerda> {
    return this.motivoPerdaRepository.create(motivoPerda);
  }

  @get('/motivo-perdas/count')
  @response(200, {
    description: 'MotivoPerda model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(MotivoPerda) where?: Where<MotivoPerda>,
  ): Promise<Count> {
    return this.motivoPerdaRepository.count(where);
  }

  @get('/motivo-perdas')
  @response(200, {
    description: 'Array of MotivoPerda model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(MotivoPerda, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(MotivoPerda) filter?: Filter<MotivoPerda>,
  ): Promise<MotivoPerda[]> {
    return this.motivoPerdaRepository.find(filter);
  }

  @patch('/motivo-perdas')
  @response(200, {
    description: 'MotivoPerda PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MotivoPerda, {partial: true}),
        },
      },
    })
    motivoPerda: MotivoPerda,
    @param.where(MotivoPerda) where?: Where<MotivoPerda>,
  ): Promise<Count> {
    return this.motivoPerdaRepository.updateAll(motivoPerda, where);
  }

  @get('/motivo-perdas/{id}')
  @response(200, {
    description: 'MotivoPerda model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(MotivoPerda, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(MotivoPerda, {exclude: 'where'}) filter?: FilterExcludingWhere<MotivoPerda>
  ): Promise<MotivoPerda> {
    return this.motivoPerdaRepository.findById(id, filter);
  }

  @patch('/motivo-perdas/{id}')
  @response(204, {
    description: 'MotivoPerda PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MotivoPerda, {partial: true}),
        },
      },
    })
    motivoPerda: MotivoPerda,
  ): Promise<void> {
    await this.motivoPerdaRepository.updateById(id, motivoPerda);
  }

  @put('/motivo-perdas/{id}')
  @response(204, {
    description: 'MotivoPerda PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() motivoPerda: MotivoPerda,
  ): Promise<void> {
    await this.motivoPerdaRepository.replaceById(id, motivoPerda);
  }

  @del('/motivo-perdas/{id}')
  @response(204, {
    description: 'MotivoPerda DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.motivoPerdaRepository.deleteById(id);
  }
}
