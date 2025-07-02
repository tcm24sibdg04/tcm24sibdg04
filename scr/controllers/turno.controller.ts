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
import {Turno} from '../models';
import {TurnoRepository} from '../repositories';

export class TurnoController {
  constructor(
    @repository(TurnoRepository)
    public turnoRepository : TurnoRepository,
  ) {}

  @post('/turnos')
  @response(200, {
    description: 'Turno model instance',
    content: {'application/json': {schema: getModelSchemaRef(Turno)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Turno, {
            title: 'NewTurno',
            exclude: ['id'],
          }),
        },
      },
    })
    turno: Omit<Turno, 'id'>,
  ): Promise<Turno> {
    return this.turnoRepository.create(turno);
  }

  @get('/turnos/count')
  @response(200, {
    description: 'Turno model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Turno) where?: Where<Turno>,
  ): Promise<Count> {
    return this.turnoRepository.count(where);
  }

  @get('/turnos')
  @response(200, {
    description: 'Array of Turno model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Turno, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Turno) filter?: Filter<Turno>,
  ): Promise<Turno[]> {
    return this.turnoRepository.find(filter);
  }

  @patch('/turnos')
  @response(200, {
    description: 'Turno PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Turno, {partial: true}),
        },
      },
    })
    turno: Turno,
    @param.where(Turno) where?: Where<Turno>,
  ): Promise<Count> {
    return this.turnoRepository.updateAll(turno, where);
  }

  @get('/turnos/{id}')
  @response(200, {
    description: 'Turno model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Turno, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Turno, {exclude: 'where'}) filter?: FilterExcludingWhere<Turno>
  ): Promise<Turno> {
    return this.turnoRepository.findById(id, filter);
  }

  @patch('/turnos/{id}')
  @response(204, {
    description: 'Turno PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Turno, {partial: true}),
        },
      },
    })
    turno: Turno,
  ): Promise<void> {
    await this.turnoRepository.updateById(id, turno);
  }

  @put('/turnos/{id}')
  @response(204, {
    description: 'Turno PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() turno: Turno,
  ): Promise<void> {
    await this.turnoRepository.replaceById(id, turno);
  }

  @del('/turnos/{id}')
  @response(204, {
    description: 'Turno DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.turnoRepository.deleteById(id);
  }
}
