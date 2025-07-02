import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Produto extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nome: string;

  @property({
    type: 'string',
    required: true,
  })
  tipo: string;

  @property({
    type: 'number',
    required: true,
  })
  quantidadeStock: number;

  @property({
    type: 'string',
    required: true,
  })
  unidadeMedida: string;

  @property({
    type: 'number',
    required: true,
  })
  limiteAlerta: number;

  @property({
    type: 'number',
  })
  receitaId?: number;

  @property({
    type: 'number',
  })
  ingredienteReceitaId?: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Produto>) {
    super(data);
  }
}

export interface ProdutoRelations {
  // describe navigational properties here
}

export type ProdutoWithRelations = Produto & ProdutoRelations;
