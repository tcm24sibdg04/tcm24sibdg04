import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyThroughRepositoryFactory } from '@loopback/repository';
import { Tcm24Sibdg04DbDataSource } from '../datasources';
import { Receita, ReceitaRelations, IngredienteReceita, Produto } from '../models';
import { ProdutoRepository } from './produto.repository';
import { IngredienteReceitaRepository } from './ingrediente-receita.repository';
export declare class ReceitaRepository extends DefaultCrudRepository<Receita, typeof Receita.prototype.id, ReceitaRelations> {
    protected produtoRepositoryGetter: Getter<ProdutoRepository>;
    protected ingredienteReceitaRepositoryGetter: Getter<IngredienteReceitaRepository>;
    readonly ingredienteReceitas: HasManyThroughRepositoryFactory<IngredienteReceita, typeof IngredienteReceita.prototype.id, Produto, typeof Receita.prototype.id>;
    constructor(dataSource: Tcm24Sibdg04DbDataSource, produtoRepositoryGetter: Getter<ProdutoRepository>, ingredienteReceitaRepositoryGetter: Getter<IngredienteReceitaRepository>);
}
