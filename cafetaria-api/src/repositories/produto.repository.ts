import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {CafetariaDataSource} from '../datasources';
import {Produto, ProdutoRelations, Perda} from '../models';
import {PerdaRepository} from './perda.repository';

export class ProdutoRepository extends DefaultCrudRepository<
  Produto,
  typeof Produto.prototype.id_produto,
  ProdutoRelations
> {

  public readonly perdas: HasManyRepositoryFactory<Perda, typeof Produto.prototype.id_produto>;

  constructor(
    @inject('datasources.cafetaria') dataSource: CafetariaDataSource, @repository.getter('PerdaRepository') protected perdaRepositoryGetter: Getter<PerdaRepository>,
  ) {
    super(Produto, dataSource);
    this.perdas = this.createHasManyRepositoryFactoryFor('perdas', perdaRepositoryGetter,);
    this.registerInclusionResolver('perdas', this.perdas.inclusionResolver);
  }
}
