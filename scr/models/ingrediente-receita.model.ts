import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Produto} from './produto.model';

@model({settings: {strict: false}})
export class IngredienteReceita extends Entity {

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;


  @property({
    type: 'number',
    required: true,
  })
  id_receita: number;

  @property({
    type: 'number',
    required: true,
  })
  id_produto: number;

  @property({
    type: 'number',
    required: true,
  })
  quantidadeUtilizada: number;

  @belongsTo(() => Produto, {name: 'usa'})
  produtoId: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<IngredienteReceita>) {
    super(data);
  }
}

export interface IngredienteReceitaRelations {
  // describe navigational properties here
}

export type IngredienteReceitaWithRelations = IngredienteReceita & IngredienteReceitaRelations;
