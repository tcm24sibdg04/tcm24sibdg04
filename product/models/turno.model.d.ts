import { Entity } from '@loopback/repository';
export declare class Turno extends Entity {
    id?: number;
    data: string;
    horaInicio: string;
    horaFim: string;
    [prop: string]: any;
    constructor(data?: Partial<Turno>);
}
export interface TurnoRelations {
}
export type TurnoWithRelations = Turno & TurnoRelations;
