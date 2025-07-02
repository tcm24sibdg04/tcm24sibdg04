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
  Utilizador,
  Desperdicio,
} from '../models';
import {UtilizadorRepository} from '../repositories';

export class UtilizadorDesperdicioController {
  constructor(
    @repository(UtilizadorRepository) protected utilizadorRepository: UtilizadorRepository,
  ) { }

  @get('/utilizadors/{id}/desperdicios', {
    responses: {
      '200': {
        description: 'Array of Utilizador has many Desperdicio',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Desperdicio)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Desperdicio>,
  ): Promise<Desperdicio[]> {
    return this.utilizadorRepository.reporta(id).find(filter);
  }

  @post('/utilizadors/{id}/desperdicios', {
    responses: {
      '200': {
        description: 'Utilizador model instance',
        content: {'application/json': {schema: getModelSchemaRef(Desperdicio)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Utilizador.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Desperdicio, {
            title: 'NewDesperdicioInUtilizador',
            exclude: ['id'],
            optional: ['utilizadorId']
          }),
        },
      },
    }) desperdicio: Omit<Desperdicio, 'id'>,
  ): Promise<Desperdicio> {
    return this.utilizadorRepository.reporta(id).create(desperdicio);
  }

  @patch('/utilizadors/{id}/desperdicios', {
    responses: {
      '200': {
        description: 'Utilizador.Desperdicio PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Desperdicio, {partial: true}),
        },
      },
    })
    desperdicio: Partial<Desperdicio>,
    @param.query.object('where', getWhereSchemaFor(Desperdicio)) where?: Where<Desperdicio>,
  ): Promise<Count> {
    return this.utilizadorRepository.reporta(id).patch(desperdicio, where);
  }

  @del('/utilizadors/{id}/desperdicios', {
    responses: {
      '200': {
        description: 'Utilizador.Desperdicio DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Desperdicio)) where?: Where<Desperdicio>,
  ): Promise<Count> {
    return this.utilizadorRepository.reporta(id).delete(where);
  }
}
