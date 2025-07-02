import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { Tcm24Sibdg04DbDataSource } from '../datasources';
import { IngredienteReceita, IngredienteReceitaRelations, Produto } from '../models';
import { ProdutoRepository } from './produto.repository';
export declare class IngredienteReceitaRepository extends DefaultCrudRepository<IngredienteReceita, typeof IngredienteReceita.prototype.id, IngredienteReceitaRelations> {
    protected produtoRepositoryGetter: Getter<ProdutoRepository>;
    readonly usa: BelongsToAccessor<Produto, typeof IngredienteReceita.prototype.id>;
    constructor(dataSource: Tcm24Sibdg04DbDataSource, produtoRepositoryGetter: Getter<ProdutoRepository>);
}
