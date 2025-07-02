import { Entity } from '@loopback/repository';
export declare class Produto extends Entity {
    id?: number;
    nome: string;
    tipo: string;
    quantidadeStock: number;
    unidadeMedida: string;
    limiteAlerta: number;
    receitaId?: number;
    ingredienteReceitaId?: number;
    [prop: string]: any;
    constructor(data?: Partial<Produto>);
}
export interface ProdutoRelations {
}
export type ProdutoWithRelations = Produto & ProdutoRelations;
