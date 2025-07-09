import {Entity, model, property, belongsTo} from '@loopback/repository';
import {MotivoPerda} from './motivo-perda.model';

@model({settings: {strict: false}})
export class Perda extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_perda?: number;

  @property({
    type: 'number',
    required: true,
  })
  id_produto: number;

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

  @belongsTo(() => MotivoPerda, {name: 'motivoPerda'})
  id_motivo: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Perda>) {
    super(data);
  }
}

export interface PerdaRelations {
  // describe navigational properties here
}

export type PerdaWithRelations = Perda & PerdaRelations;
