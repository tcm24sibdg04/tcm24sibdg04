import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {CafetariaDataSource} from '../datasources';
import {ItemPedido, ItemPedidoRelations, Pedido, Produto} from '../models';
import {PedidoRepository} from './pedido.repository';
import {ProdutoRepository} from './produto.repository';

export class ItemPedidoRepository extends DefaultCrudRepository<
  ItemPedido,
  typeof ItemPedido.prototype.id_item,
  ItemPedidoRelations
> {

  public readonly pedido: BelongsToAccessor<Pedido, typeof ItemPedido.prototype.id_item>;

  public readonly produto: BelongsToAccessor<Produto, typeof ItemPedido.prototype.id_item>;

  constructor(
    @inject('datasources.cafetaria') dataSource: CafetariaDataSource, @repository.getter('PedidoRepository') protected pedidoRepositoryGetter: Getter<PedidoRepository>, @repository.getter('ProdutoRepository') protected produtoRepositoryGetter: Getter<ProdutoRepository>,
  ) {
    super(ItemPedido, dataSource);
    this.produto = this.createBelongsToAccessorFor('produto', produtoRepositoryGetter,);
    this.registerInclusionResolver('produto', this.produto.inclusionResolver);
    this.pedido = this.createBelongsToAccessorFor('pedido', pedidoRepositoryGetter,);
    this.registerInclusionResolver('pedido', this.pedido.inclusionResolver);
  }
}
