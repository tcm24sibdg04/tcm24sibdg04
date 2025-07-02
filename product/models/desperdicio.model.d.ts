import { Entity } from '@loopback/repository';
export declare class Desperdicio extends Entity {
    id?: number;
    dataHora: string;
    quantidade: number;
    motivo: string;
    id_utilizador: number;
    id_produto: number;
    utilizadorId?: number;
    produtoId: number;
    [prop: string]: any;
    constructor(data?: Partial<Desperdicio>);
}
export interface DesperdicioRelations {
}
export type DesperdicioWithRelations = Desperdicio & DesperdicioRelations;
