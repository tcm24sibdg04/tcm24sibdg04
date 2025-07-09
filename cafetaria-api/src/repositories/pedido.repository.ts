import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {CafetariaDataSource} from '../datasources';
import {Pedido, PedidoRelations, ItemPedido} from '../models';
import {ItemPedidoRepository} from './item-pedido.repository';

export class PedidoRepository extends DefaultCrudRepository<
  Pedido,
  typeof Pedido.prototype.id_pedido,
  PedidoRelations
> {

  public readonly itemPedidos: HasManyRepositoryFactory<ItemPedido, typeof Pedido.prototype.id_pedido>;

  constructor(
    @inject('datasources.cafetaria') dataSource: CafetariaDataSource, @repository.getter('ItemPedidoRepository') protected itemPedidoRepositoryGetter: Getter<ItemPedidoRepository>,
  ) {
    super(Pedido, dataSource);
    this.itemPedidos = this.createHasManyRepositoryFactoryFor('itemPedidos', itemPedidoRepositoryGetter,);
    this.registerInclusionResolver('itemPedidos', this.itemPedidos.inclusionResolver);
  }
}
