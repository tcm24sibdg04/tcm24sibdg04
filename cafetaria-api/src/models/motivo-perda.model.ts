import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class MotivoPerda extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_motivo?: number;

  @property({
    type: 'string',
    required: true,
  })
  descricao: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<MotivoPerda>) {
    super(data);
  }
}

export interface MotivoPerdaRelations {
  // describe navigational properties here
}

export type MotivoPerdaWithRelations = MotivoPerda & MotivoPerdaRelations;
