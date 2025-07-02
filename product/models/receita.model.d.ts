import { Entity } from '@loopback/repository';
import { IngredienteReceita } from './ingrediente-receita.model';
export declare class Receita extends Entity {
    id?: number;
    nomeBebida: string;
    descricao: string;
    pedidoId?: number;
    ingredienteReceitas: IngredienteReceita[];
    [prop: string]: any;
    constructor(data?: Partial<Receita>);
}
export interface ReceitaRelations {
}
export type ReceitaWithRelations = Receita & ReceitaRelations;
