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
Receita,
Produto,
IngredienteReceita,
} from '../models';
import {ReceitaRepository} from '../repositories';

export class ReceitaIngredienteReceitaController {
  constructor(
    @repository(ReceitaRepository) protected receitaRepository: ReceitaRepository,
  ) { }

  @get('/receitas/{id}/ingrediente-receitas', {
    responses: {
      '200': {
        description: 'Array of Receita has many IngredienteReceita through Produto',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(IngredienteReceita)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<IngredienteReceita>,
  ): Promise<IngredienteReceita[]> {
    return this.receitaRepository.ingredienteReceitas(id).find(filter);
  }

  @post('/receitas/{id}/ingrediente-receitas', {
    responses: {
      '200': {
        description: 'create a IngredienteReceita model instance',
        content: {'application/json': {schema: getModelSchemaRef(IngredienteReceita)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Receita.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(IngredienteReceita, {
            title: 'NewIngredienteReceitaInReceita',
            exclude: ['id'],
          }),
        },
      },
    }) ingredienteReceita: Omit<IngredienteReceita, 'id'>,
  ): Promise<IngredienteReceita> {
    return this.receitaRepository.ingredienteReceitas(id).create(ingredienteReceita);
  }

  @patch('/receitas/{id}/ingrediente-receitas', {
    responses: {
      '200': {
        description: 'Receita.IngredienteReceita PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(IngredienteReceita, {partial: true}),
        },
      },
    })
    ingredienteReceita: Partial<IngredienteReceita>,
    @param.query.object('where', getWhereSchemaFor(IngredienteReceita)) where?: Where<IngredienteReceita>,
  ): Promise<Count> {
    return this.receitaRepository.ingredienteReceitas(id).patch(ingredienteReceita, where);
  }

  @del('/receitas/{id}/ingrediente-receitas', {
    responses: {
      '200': {
        description: 'Receita.IngredienteReceita DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(IngredienteReceita)) where?: Where<IngredienteReceita>,
  ): Promise<Count> {
    return this.receitaRepository.ingredienteReceitas(id).delete(where);
  }
}
