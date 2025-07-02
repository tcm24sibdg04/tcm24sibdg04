import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {Tcm24Sibdg04DbDataSource} from '../datasources';
import {Receita, ReceitaRelations, IngredienteReceita, Produto} from '../models';
import {ProdutoRepository} from './produto.repository';
import {IngredienteReceitaRepository} from './ingrediente-receita.repository';

export class ReceitaRepository extends DefaultCrudRepository<
  Receita,
  typeof Receita.prototype.id,
  ReceitaRelations
> {

  public readonly ingredienteReceitas: HasManyThroughRepositoryFactory<IngredienteReceita, typeof IngredienteReceita.prototype.id,
          Produto,
          typeof Receita.prototype.id
        >;

  constructor(
    @inject('datasources.tcm24sibdg04db') dataSource: Tcm24Sibdg04DbDataSource, @repository.getter('ProdutoRepository') protected produtoRepositoryGetter: Getter<ProdutoRepository>, @repository.getter('IngredienteReceitaRepository') protected ingredienteReceitaRepositoryGetter: Getter<IngredienteReceitaRepository>,
  ) {
    super(Receita, dataSource);
    this.ingredienteReceitas = this.createHasManyThroughRepositoryFactoryFor('ingredienteReceitas', ingredienteReceitaRepositoryGetter, produtoRepositoryGetter,);
    this.registerInclusionResolver('ingredienteReceitas', this.ingredienteReceitas.inclusionResolver);
  }
}
