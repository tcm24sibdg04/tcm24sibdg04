import {Entity, model, property, hasMany, belongsTo} from '@loopback/repository';
import {Desperdicio} from './desperdicio.model';
import {Turno} from './turno.model';

@model({settings: {strict: false}})
export class Utilizador extends Entity {
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
  nome: string;

  @property({
    type: 'string',
    required: true,
  })
  perfil: string;

  @property({
    type: 'string',
    required: true,
  })
  login: string;

  @property({
    type: 'string',
    required: true,
  })
  senha: string;

  @hasMany(() => Desperdicio)
  reporta: Desperdicio[];

  @belongsTo(() => Turno, {name: 'ResponsavelPor'})
  turnoId: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Utilizador>) {
    super(data);
  }
}

export interface UtilizadorRelations {
  // describe navigational properties here
}

export type UtilizadorWithRelations = Utilizador & UtilizadorRelations;
