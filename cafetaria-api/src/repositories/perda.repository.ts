import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {CafetariaDataSource} from '../datasources';
import {Perda, PerdaRelations, MotivoPerda} from '../models';
import {MotivoPerdaRepository} from './motivo-perda.repository';

export class PerdaRepository extends DefaultCrudRepository<
  Perda,
  typeof Perda.prototype.id_perda,
  PerdaRelations
> {

  public readonly motivoPerda: BelongsToAccessor<MotivoPerda, typeof Perda.prototype.id_perda>;

  constructor(
    @inject('datasources.cafetaria') dataSource: CafetariaDataSource, @repository.getter('MotivoPerdaRepository') protected motivoPerdaRepositoryGetter: Getter<MotivoPerdaRepository>,
  ) {
    super(Perda, dataSource);
    this.motivoPerda = this.createBelongsToAccessorFor('motivoPerda', motivoPerdaRepositoryGetter,);
    this.registerInclusionResolver('motivoPerda', this.motivoPerda.inclusionResolver);
  }
}
