import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Turno extends Entity {
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
  data: string;

  @property({
    type: 'date',
    required: true,
  })
  horaInicio: string;

  @property({
    type: 'date',
    required: true,
  })
  horaFim: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Turno>) {
    super(data);
  }
}

export interface TurnoRelations {
  // describe navigational properties here
}

export type TurnoWithRelations = Turno & TurnoRelations;
