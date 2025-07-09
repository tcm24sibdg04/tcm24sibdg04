import {Entity, model, property, hasMany} from '@loopback/repository';
import {Perda} from './perda.model';

@model({settings: {strict: false}})
export class Produto extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_produto?: number;

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
    type: 'string',
    required: true,
  })
  unidade_medida: string;

  @property({
    type: 'number',
    required: true,
  })
  stock_atual: number;

  @property({
    type: 'number',
    required: true,
  })
  stock_minimo: number;

  @hasMany(() => Perda, {keyTo: 'id_produto'})
  perdas: Perda[];
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
