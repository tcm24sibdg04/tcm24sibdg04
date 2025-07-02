import { DefaultCrudRepository } from '@loopback/repository';
import { Tcm24Sibdg04DbDataSource } from '../datasources';
import { Turno, TurnoRelations } from '../models';
export declare class TurnoRepository extends DefaultCrudRepository<Turno, typeof Turno.prototype.id, TurnoRelations> {
    constructor(dataSource: Tcm24Sibdg04DbDataSource);
}
