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
  Fornecedor,
} from '../models';
import {ReposicaoRepository} from '../repositories';

export class ReposicaoFornecedorController {
  constructor(
    @repository(ReposicaoRepository)
    public reposicaoRepository: ReposicaoRepository,
  ) { }

  @get('/reposicaos/{id}/fornecedor', {
    responses: {
      '200': {
        description: 'Fornecedor belonging to Reposicao',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Fornecedor),
          },
        },
      },
    },
  })
  async getFornecedor(
    @param.path.number('id') id: typeof Reposicao.prototype.id_reposicao,
  ): Promise<Fornecedor> {
    return this.reposicaoRepository.fornecedor(id);
  }
}
