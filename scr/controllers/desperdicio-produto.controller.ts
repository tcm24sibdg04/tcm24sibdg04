import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Desperdicio,
  Produto,
} from '../models';
import {DesperdicioRepository} from '../repositories';

export class DesperdicioProdutoController {
  constructor(
    @repository(DesperdicioRepository)
    public desperdicioRepository: DesperdicioRepository,
  ) { }

  @get('/desperdicios/{id}/produto', {
    responses: {
      '200': {
        description: 'Produto belonging to Desperdicio',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Produto),
          },
        },
      },
    },
  })
  async getProduto(
    @param.path.number('id') id: typeof Desperdicio.prototype.id,
  ): Promise<Produto> {
    return this.desperdicioRepository.ocorreSobre(id);
  }
}
