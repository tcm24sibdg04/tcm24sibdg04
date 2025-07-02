import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {Tcm24Sibdg04DbDataSource} from '../datasources';
import {Pedido, PedidoRelations, Utilizador, Turno, Receita} from '../models';
import {UtilizadorRepository} from './utilizador.repository';
import {TurnoRepository} from './turno.repository';
import {ReceitaRepository} from './receita.repository';

export class PedidoRepository extends DefaultCrudRepository<
  Pedido,
  typeof Pedido.prototype.id,
  PedidoRelations
> {

  public readonly regista: BelongsToAccessor<Utilizador, typeof Pedido.prototype.id>;

  public readonly ocorreEm: BelongsToAccessor<Turno, typeof Pedido.prototype.id>;

  public readonly usadoEm: HasManyRepositoryFactory<Receita, typeof Pedido.prototype.id>;

  constructor(
    @inject('datasources.tcm24sibdg04db') dataSource: Tcm24Sibdg04DbDataSource, @repository.getter('UtilizadorRepository') protected utilizadorRepositoryGetter: Getter<UtilizadorRepository>, @repository.getter('TurnoRepository') protected turnoRepositoryGetter: Getter<TurnoRepository>, @repository.getter('ReceitaRepository') protected receitaRepositoryGetter: Getter<ReceitaRepository>,
  ) {
    super(Pedido, dataSource);
    this.usadoEm = this.createHasManyRepositoryFactoryFor('usadoEm', receitaRepositoryGetter,);
    this.registerInclusionResolver('usadoEm', this.usadoEm.inclusionResolver);
    this.ocorreEm = this.createBelongsToAccessorFor('ocorreEm', turnoRepositoryGetter,);
    this.registerInclusionResolver('ocorreEm', this.ocorreEm.inclusionResolver);
    this.regista = this.createBelongsToAccessorFor('regista', utilizadorRepositoryGetter,);
    this.registerInclusionResolver('regista', this.regista.inclusionResolver);
  }
}
