import { Entity } from '@loopback/repository';
import { Desperdicio } from './desperdicio.model';
export declare class Utilizador extends Entity {
    id?: number;
    nome: string;
    perfil: string;
    login: string;
    senha: string;
    reporta: Desperdicio[];
    turnoId: number;
    [prop: string]: any;
    constructor(data?: Partial<Utilizador>);
}
export interface UtilizadorRelations {
}
export type UtilizadorWithRelations = Utilizador & UtilizadorRelations;
