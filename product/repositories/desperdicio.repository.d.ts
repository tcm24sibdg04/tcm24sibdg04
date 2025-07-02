import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { Tcm24Sibdg04DbDataSource } from '../datasources';
import { Desperdicio, DesperdicioRelations, Produto } from '../models';
import { ProdutoRepository } from './produto.repository';
export declare class DesperdicioRepository extends DefaultCrudRepository<Desperdicio, typeof Desperdicio.prototype.id, DesperdicioRelations> {
    protected produtoRepositoryGetter: Getter<ProdutoRepository>;
    readonly ocorreSobre: BelongsToAccessor<Produto, typeof Desperdicio.prototype.id>;
    constructor(dataSource: Tcm24Sibdg04DbDataSource, produtoRepositoryGetter: Getter<ProdutoRepository>);
}
