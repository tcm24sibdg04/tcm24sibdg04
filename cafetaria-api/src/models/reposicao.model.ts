import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Produto} from './produto.model';
import {Fornecedor} from './fornecedor.model';

@model({settings: {strict: false}})
export class Reposicao extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_reposicao?: number;
  @property({
    type: 'date',
    required: true,
  })
  data: string;

  @property({
    type: 'number',
    required: true,
  })
  quantidade: number;

  @belongsTo(() => Produto, {name: 'produto'})
  id_produto: number;

  @belongsTo(() => Fornecedor, {name: 'fornecedor'})
  id_fornecedor: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Reposicao>) {
    super(data);
  }
}

export interface ReposicaoRelations {
  // describe navigational properties here
}

export type ReposicaoWithRelations = Reposicao & ReposicaoRelations;
