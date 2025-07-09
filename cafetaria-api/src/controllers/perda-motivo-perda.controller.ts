import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Perda,
  MotivoPerda,
} from '../models';
import {PerdaRepository} from '../repositories';

export class PerdaMotivoPerdaController {
  constructor(
    @repository(PerdaRepository)
    public perdaRepository: PerdaRepository,
  ) { }

  @get('/perdas/{id}/motivo-perda', {
    responses: {
      '200': {
        description: 'MotivoPerda belonging to Perda',
        content: {
          'application/json': {
            schema: getModelSchemaRef(MotivoPerda),
          },
        },
      },
    },
  })
  async getMotivoPerda(
    @param.path.number('id') id: typeof Perda.prototype.id_perda,
  ): Promise<MotivoPerda> {
    return this.perdaRepository.motivoPerda(id);
  }
}
