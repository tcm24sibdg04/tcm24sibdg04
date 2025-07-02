import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Tcm24Sibdg04DbDataSource} from '../datasources';
import {Desperdicio, DesperdicioRelations, Produto} from '../models';
import {ProdutoRepository} from './produto.repository';

export class DesperdicioRepository extends DefaultCrudRepository<
  Desperdicio,
  typeof Desperdicio.prototype.id,
  DesperdicioRelations
> {

  public readonly ocorreSobre: BelongsToAccessor<Produto, typeof Desperdicio.prototype.id>;

  constructor(
    @inject('datasources.tcm24sibdg04db') dataSource: Tcm24Sibdg04DbDataSource, @repository.getter('ProdutoRepository') protected produtoRepositoryGetter: Getter<ProdutoRepository>,
  ) {
    super(Desperdicio, dataSource);
    this.ocorreSobre = this.createBelongsToAccessorFor('ocorreSobre', produtoRepositoryGetter,);
    this.registerInclusionResolver('ocorreSobre', this.ocorreSobre.inclusionResolver);
  }
}
