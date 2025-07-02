import { Entity } from '@loopback/repository';
export declare class IngredienteReceita extends Entity {
    id?: number;
    id_receita: number;
    id_produto: number;
    quantidadeUtilizada: number;
    produtoId: number;
    [prop: string]: any;
    constructor(data?: Partial<IngredienteReceita>);
}
export interface IngredienteReceitaRelations {
}
export type IngredienteReceitaWithRelations = IngredienteReceita & IngredienteReceitaRelations;
