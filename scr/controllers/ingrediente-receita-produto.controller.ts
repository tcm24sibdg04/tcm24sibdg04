import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  IngredienteReceita,
  Produto,
} from '../models';
import {IngredienteReceitaRepository} from '../repositories';

export class IngredienteReceitaProdutoController {
  constructor(
    @repository(IngredienteReceitaRepository)
    public ingredienteReceitaRepository: IngredienteReceitaRepository,
  ) { }

  @get('/ingrediente-receitas/{id}/produto', {
    responses: {
      '200': {
        description: 'Produto belonging to IngredienteReceita',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Produto),
          },
        },
      },
    },
  })
  async getProduto(
    @param.path.number('id') id: typeof IngredienteReceita.prototype.id,
  ): Promise<Produto> {
    return this.ingredienteReceitaRepository.usa(id);
  }
}
