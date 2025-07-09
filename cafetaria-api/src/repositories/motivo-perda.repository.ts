import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CafetariaDataSource} from '../datasources';
import {MotivoPerda, MotivoPerdaRelations} from '../models';

export class MotivoPerdaRepository extends DefaultCrudRepository<
  MotivoPerda,
  typeof MotivoPerda.prototype.id_motivo,
  MotivoPerdaRelations
> {
  constructor(
    @inject('datasources.cafetaria') dataSource: CafetariaDataSource,
  ) {
    super(MotivoPerda, dataSource);
  }
}
