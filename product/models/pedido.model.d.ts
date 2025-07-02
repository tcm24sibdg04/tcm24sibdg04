import { Entity } from '@loopback/repository';
import { Receita } from './receita.model';
export declare class Pedido extends Entity {
    id?: number;
    dataHora: string;
    id_receita: number;
    id_utilizador: number;
    id_turno: number;
    utilizadorId: number;
    turnoId: number;
    usadoEm: Receita[];
    [prop: string]: any;
    constructor(data?: Partial<Pedido>);
}
export interface PedidoRelations {
}
export type PedidoWithRelations = Pedido & PedidoRelations;
