import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Pedido} from './pedido.model';
import {Produto} from './produto.model';

@model({settings: {strict: false}})
export class ItemPedido extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_item?: number;
  @property({
    type: 'number',
    required: true,
  })
  quantidade: number;

  @belongsTo(() => Pedido, {name: 'pedido'})
  id_pedido: number;

  @belongsTo(() => Produto, {name: 'produto'})
  id_produto: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ItemPedido>) {
    super(data);
  }
}

export interface ItemPedidoRelations {
  // describe navigational properties here
}

export type ItemPedidoWithRelations = ItemPedido & ItemPedidoRelations;
