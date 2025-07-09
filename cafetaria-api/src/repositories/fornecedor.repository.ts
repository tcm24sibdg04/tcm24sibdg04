import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CafetariaDataSource} from '../datasources';
import {Fornecedor, FornecedorRelations} from '../models';

export class FornecedorRepository extends DefaultCrudRepository<
  Fornecedor,
  typeof Fornecedor.prototype.id_fornecedor,
  FornecedorRelations
> {
  constructor(
    @inject('datasources.cafetaria') dataSource: CafetariaDataSource,
  ) {
    super(Fornecedor, dataSource);
  }
}
