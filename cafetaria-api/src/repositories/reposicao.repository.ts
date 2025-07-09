import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {CafetariaDataSource} from '../datasources';
import {Reposicao, ReposicaoRelations, Produto, Fornecedor} from '../models';
import {ProdutoRepository} from './produto.repository';
import {FornecedorRepository} from './fornecedor.repository';

export class ReposicaoRepository extends DefaultCrudRepository<
  Reposicao,
  typeof Reposicao.prototype.id_reposicao,
  ReposicaoRelations
> {

  public readonly produto: BelongsToAccessor<Produto, typeof Reposicao.prototype.id_reposicao>;

  public readonly fornecedor: BelongsToAccessor<Fornecedor, typeof Reposicao.prototype.id_reposicao>;

  constructor(
    @inject('datasources.cafetaria') dataSource: CafetariaDataSource, @repository.getter('ProdutoRepository') protected produtoRepositoryGetter: Getter<ProdutoRepository>, @repository.getter('FornecedorRepository') protected fornecedorRepositoryGetter: Getter<FornecedorRepository>,
  ) {
    super(Reposicao, dataSource);
    this.fornecedor = this.createBelongsToAccessorFor('fornecedor', fornecedorRepositoryGetter,);
    this.registerInclusionResolver('fornecedor', this.fornecedor.inclusionResolver);
    this.produto = this.createBelongsToAccessorFor('produto', produtoRepositoryGetter,);
    this.registerInclusionResolver('produto', this.produto.inclusionResolver);
  }
}
