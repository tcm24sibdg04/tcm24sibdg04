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
import {Fornecedor} from '../models';
import {FornecedorRepository} from '../repositories';

export class FornecedorController {
  constructor(
    @repository(FornecedorRepository)
    public fornecedorRepository : FornecedorRepository,
  ) {}

  @post('/fornecedors')
  @response(200, {
    description: 'Fornecedor model instance',
    content: {'application/json': {schema: getModelSchemaRef(Fornecedor)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Fornecedor, {
            title: 'NewFornecedor',
            exclude: ['id_fornecedor'],
          }),
        },
      },
    })
    fornecedor: Omit<Fornecedor, 'id_fornecedor'>,
  ): Promise<Fornecedor> {
    return this.fornecedorRepository.create(fornecedor);
  }

  @get('/fornecedors/count')
  @response(200, {
    description: 'Fornecedor model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Fornecedor) where?: Where<Fornecedor>,
  ): Promise<Count> {
    return this.fornecedorRepository.count(where);
  }

  @get('/fornecedors')
  @response(200, {
    description: 'Array of Fornecedor model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Fornecedor, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Fornecedor) filter?: Filter<Fornecedor>,
  ): Promise<Fornecedor[]> {
    return this.fornecedorRepository.find(filter);
  }

  @patch('/fornecedors')
  @response(200, {
    description: 'Fornecedor PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Fornecedor, {partial: true}),
        },
      },
    })
    fornecedor: Fornecedor,
    @param.where(Fornecedor) where?: Where<Fornecedor>,
  ): Promise<Count> {
    return this.fornecedorRepository.updateAll(fornecedor, where);
  }

  @get('/fornecedors/{id}')
  @response(200, {
    description: 'Fornecedor model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Fornecedor, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Fornecedor, {exclude: 'where'}) filter?: FilterExcludingWhere<Fornecedor>
  ): Promise<Fornecedor> {
    return this.fornecedorRepository.findById(id, filter);
  }

  @patch('/fornecedors/{id}')
  @response(204, {
    description: 'Fornecedor PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Fornecedor, {partial: true}),
        },
      },
    })
    fornecedor: Fornecedor,
  ): Promise<void> {
    await this.fornecedorRepository.updateById(id, fornecedor);
  }

  @put('/fornecedors/{id}')
  @response(204, {
    description: 'Fornecedor PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() fornecedor: Fornecedor,
  ): Promise<void> {
    await this.fornecedorRepository.replaceById(id, fornecedor);
  }

  @del('/fornecedors/{id}')
  @response(204, {
    description: 'Fornecedor DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.fornecedorRepository.deleteById(id);
  }
}
