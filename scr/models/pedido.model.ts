import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Utilizador} from './utilizador.model';
import {Turno} from './turno.model';
import {Receita} from './receita.model';

@model({settings: {strict: false}})
export class Pedido extends Entity {
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
  id_receita: number;

  @property({
    type: 'number',
    required: true,
  })
  id_utilizador: number;

  @property({
    type: 'number',
    required: true,
  })
  id_turno: number;

  @belongsTo(() => Utilizador, {name: 'regista'})
  utilizadorId: number;

  @belongsTo(() => Turno, {name: 'ocorreEm'})
  turnoId: number;

  @hasMany(() => Receita)
  usadoEm: Receita[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Pedido>) {
    super(data);
  }
}

export interface PedidoRelations {
  // describe navigational properties here
}

export type PedidoWithRelations = Pedido & PedidoRelations;
