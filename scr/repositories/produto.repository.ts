import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Tcm24Sibdg04DbDataSource} from '../datasources';
import {Produto, ProdutoRelations} from '../models';

export class ProdutoRepository extends DefaultCrudRepository<
  Produto,
  typeof Produto.prototype.id,
  ProdutoRelations
> {
  constructor(
    @inject('datasources.tcm24sibdg04db') dataSource: Tcm24Sibdg04DbDataSource,
  ) {
    super(Produto, dataSource);
  }
}
