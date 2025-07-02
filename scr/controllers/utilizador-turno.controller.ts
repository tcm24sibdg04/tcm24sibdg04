import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Utilizador,
  Turno,
} from '../models';
import {UtilizadorRepository} from '../repositories';

export class UtilizadorTurnoController {
  constructor(
    @repository(UtilizadorRepository)
    public utilizadorRepository: UtilizadorRepository,
  ) { }

  @get('/utilizadors/{id}/turno', {
    responses: {
      '200': {
        description: 'Turno belonging to Utilizador',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Turno),
          },
        },
      },
    },
  })
  async getTurno(
    @param.path.number('id') id: typeof Utilizador.prototype.id,
  ): Promise<Turno> {
    return this.utilizadorRepository.ResponsavelPor(id);
  }
}
