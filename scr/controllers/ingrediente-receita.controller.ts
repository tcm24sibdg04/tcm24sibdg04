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
import {IngredienteReceita} from '../models';
import {IngredienteReceitaRepository} from '../repositories';

export class IngredienteReceitaController {
  constructor(
    @repository(IngredienteReceitaRepository)
    public ingredienteReceitaRepository : IngredienteReceitaRepository,
  ) {}

  @post('/ingrediente-receitas')
  @response(200, {
    description: 'IngredienteReceita model instance',
    content: {'application/json': {schema: getModelSchemaRef(IngredienteReceita)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(IngredienteReceita, {
            title: 'NewIngredienteReceita',
            exclude: ['id'],
          }),
        },
      },
    })
    ingredienteReceita: Omit<IngredienteReceita, 'id'>,
  ): Promise<IngredienteReceita> {
    return this.ingredienteReceitaRepository.create(ingredienteReceita);
  }

  @get('/ingrediente-receitas/count')
  @response(200, {
    description: 'IngredienteReceita model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(IngredienteReceita) where?: Where<IngredienteReceita>,
  ): Promise<Count> {
    return this.ingredienteReceitaRepository.count(where);
  }

  @get('/ingrediente-receitas')
  @response(200, {
    description: 'Array of IngredienteReceita model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(IngredienteReceita, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(IngredienteReceita) filter?: Filter<IngredienteReceita>,
  ): Promise<IngredienteReceita[]> {
    return this.ingredienteReceitaRepository.find(filter);
  }

  @patch('/ingrediente-receitas')
  @response(200, {
    description: 'IngredienteReceita PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(IngredienteReceita, {partial: true}),
        },
      },
    })
    ingredienteReceita: IngredienteReceita,
    @param.where(IngredienteReceita) where?: Where<IngredienteReceita>,
  ): Promise<Count> {
    return this.ingredienteReceitaRepository.updateAll(ingredienteReceita, where);
  }

  @get('/ingrediente-receitas/{id}')
  @response(200, {
    description: 'IngredienteReceita model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(IngredienteReceita, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(IngredienteReceita, {exclude: 'where'}) filter?: FilterExcludingWhere<IngredienteReceita>
  ): Promise<IngredienteReceita> {
    return this.ingredienteReceitaRepository.findById(id, filter);
  }

  @patch('/ingrediente-receitas/{id}')
  @response(204, {
    description: 'IngredienteReceita PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(IngredienteReceita, {partial: true}),
        },
      },
    })
    ingredienteReceita: IngredienteReceita,
  ): Promise<void> {
    await this.ingredienteReceitaRepository.updateById(id, ingredienteReceita);
  }

  @put('/ingrediente-receitas/{id}')
  @response(204, {
    description: 'IngredienteReceita PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() ingredienteReceita: IngredienteReceita,
  ): Promise<void> {
    await this.ingredienteReceitaRepository.replaceById(id, ingredienteReceita);
  }

  @del('/ingrediente-receitas/{id}')
  @response(204, {
    description: 'IngredienteReceita DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ingredienteReceitaRepository.deleteById(id);
  }
}
