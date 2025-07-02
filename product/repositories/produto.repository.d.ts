import { DefaultCrudRepository } from '@loopback/repository';
import { Tcm24Sibdg04DbDataSource } from '../datasources';
import { Produto, ProdutoRelations } from '../models';
export declare class ProdutoRepository extends DefaultCrudRepository<Produto, typeof Produto.prototype.id, ProdutoRelations> {
    constructor(dataSource: Tcm24Sibdg04DbDataSource);
}
