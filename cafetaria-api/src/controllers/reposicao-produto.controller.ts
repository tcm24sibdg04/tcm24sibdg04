import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Reposicao,
  Produto,
} from '../models';
import {ReposicaoRepository} from '../repositories';

export class ReposicaoProdutoController {
  constructor(
    @repository(ReposicaoRepository)
    public reposicaoRepository: ReposicaoRepository,
  ) { }

  @get('/reposicaos/{id}/produto', {
    responses: {
      '200': {
        description: 'Produto belonging to Reposicao',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Produto),
          },
        },
      },
    },
  })
  async getProduto(
    @param.path.number('id') id: typeof Reposicao.prototype.id_reposicao,
  ): Promise<Produto> {
    return this.reposicaoRepository.produto(id);
  }
}
