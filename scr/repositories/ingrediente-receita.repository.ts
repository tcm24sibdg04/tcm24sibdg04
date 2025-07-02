import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Tcm24Sibdg04DbDataSource} from '../datasources';
import {IngredienteReceita, IngredienteReceitaRelations, Produto} from '../models';
import {ProdutoRepository} from './produto.repository';

export class IngredienteReceitaRepository extends DefaultCrudRepository<
  IngredienteReceita,
  typeof IngredienteReceita.prototype.id,
  IngredienteReceitaRelations
> {

  public readonly usa: BelongsToAccessor<Produto, typeof IngredienteReceita.prototype.id>;

  constructor(
    @inject('datasources.tcm24sibdg04db') dataSource: Tcm24Sibdg04DbDataSource, @repository.getter('ProdutoRepository') protected produtoRepositoryGetter: Getter<ProdutoRepository>,
  ) {
    super(IngredienteReceita, dataSource);
    this.usa = this.createBelongsToAccessorFor('usa', produtoRepositoryGetter,);
    this.registerInclusionResolver('usa', this.usa.inclusionResolver);
  }
}
