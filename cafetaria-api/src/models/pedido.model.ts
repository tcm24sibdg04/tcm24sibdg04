import {Entity, model, property, hasMany} from '@loopback/repository';
import {ItemPedido} from './item-pedido.model';

@model({settings: {strict: false}})
export class Pedido extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_pedido?: number;

  @property({
    type: 'date',
    required: true,
  })
  data: string;

  @property({
    type: 'number',
    required: true,
  })
  total: number;

  @hasMany(() => ItemPedido, {keyTo: 'id_pedido'})
  itemPedidos: ItemPedido[];
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
