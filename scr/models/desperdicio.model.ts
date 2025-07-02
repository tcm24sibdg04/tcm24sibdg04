import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Produto} from './produto.model';

@model({settings: {strict: false}})
export class Desperdicio extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'date',
    required: true,
  })
  dataHora: string;

  @property({
    type: 'number',
    required: true,
  })
  quantidade: number;

  @property({
    type: 'string',
    required: true,
  })
  motivo: string;

  @property({
    type: 'number',
    required: true,
  })
  id_utilizador: number;

  @property({
    type: 'number',
    required: true,
  })
  id_produto: number;

  @property({
    type: 'number',
  })
  utilizadorId?: number;

  @belongsTo(() => Produto, {name: 'ocorreSobre'})
  produtoId: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Desperdicio>) {
    super(data);
  }
}

export interface DesperdicioRelations {
  // describe navigational properties here
}

export type DesperdicioWithRelations = Desperdicio & DesperdicioRelations;
