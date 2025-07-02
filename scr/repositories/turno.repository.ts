import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Tcm24Sibdg04DbDataSource} from '../datasources';
import {Turno, TurnoRelations} from '../models';

export class TurnoRepository extends DefaultCrudRepository<
  Turno,
  typeof Turno.prototype.id,
  TurnoRelations
> {
  constructor(
    @inject('datasources.tcm24sibdg04db') dataSource: Tcm24Sibdg04DbDataSource,
  ) {
    super(Turno, dataSource);
  }
}
