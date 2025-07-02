import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory, BelongsToAccessor} from '@loopback/repository';
import {Tcm24Sibdg04DbDataSource} from '../datasources';
import {Utilizador, UtilizadorRelations, Desperdicio, Turno} from '../models';
import {DesperdicioRepository} from './desperdicio.repository';
import {TurnoRepository} from './turno.repository';

export class UtilizadorRepository extends DefaultCrudRepository<
  Utilizador,
  typeof Utilizador.prototype.id,
  UtilizadorRelations
> {

  public readonly reporta: HasManyRepositoryFactory<Desperdicio, typeof Utilizador.prototype.id>;

  public readonly ResponsavelPor: BelongsToAccessor<Turno, typeof Utilizador.prototype.id>;

  constructor(
    @inject('datasources.tcm24sibdg04db') dataSource: Tcm24Sibdg04DbDataSource, @repository.getter('DesperdicioRepository') protected desperdicioRepositoryGetter: Getter<DesperdicioRepository>, @repository.getter('TurnoRepository') protected turnoRepositoryGetter: Getter<TurnoRepository>,
  ) {
    super(Utilizador, dataSource);
    this.ResponsavelPor = this.createBelongsToAccessorFor('ResponsavelPor', turnoRepositoryGetter,);
    this.registerInclusionResolver('ResponsavelPor', this.ResponsavelPor.inclusionResolver);
    this.reporta = this.createHasManyRepositoryFactoryFor('reporta', desperdicioRepositoryGetter,);
    this.registerInclusionResolver('reporta', this.reporta.inclusionResolver);
  }
}
