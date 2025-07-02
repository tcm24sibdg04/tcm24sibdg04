import {Entity, model, property, hasMany} from '@loopback/repository';
import {IngredienteReceita} from './ingrediente-receita.model';
import {Produto} from './produto.model';

@model({settings: {strict: false}})
export class Receita extends Entity {
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
  nomeBebida: string;

  @property({
    type: 'string',
    required: true,
  })
  descricao: string;

  @property({
    type: 'number',
  })
  pedidoId?: number;

  @hasMany(() => IngredienteReceita, {through: {model: () => Produto}})
  ingredienteReceitas: IngredienteReceita[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Receita>) {
    super(data);
  }
}

export interface ReceitaRelations {
  // describe navigational properties here
}

export type ReceitaWithRelations = Receita & ReceitaRelations;
