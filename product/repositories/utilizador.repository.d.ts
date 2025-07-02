import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory, BelongsToAccessor } from '@loopback/repository';
import { Tcm24Sibdg04DbDataSource } from '../datasources';
import { Utilizador, UtilizadorRelations, Desperdicio, Turno } from '../models';
import { DesperdicioRepository } from './desperdicio.repository';
import { TurnoRepository } from './turno.repository';
export declare class UtilizadorRepository extends DefaultCrudRepository<Utilizador, typeof Utilizador.prototype.id, UtilizadorRelations> {
    protected desperdicioRepositoryGetter: Getter<DesperdicioRepository>;
    protected turnoRepositoryGetter: Getter<TurnoRepository>;
    readonly reporta: HasManyRepositoryFactory<Desperdicio, typeof Utilizador.prototype.id>;
    readonly ResponsavelPor: BelongsToAccessor<Turno, typeof Utilizador.prototype.id>;
    constructor(dataSource: Tcm24Sibdg04DbDataSource, desperdicioRepositoryGetter: Getter<DesperdicioRepository>, turnoRepositoryGetter: Getter<TurnoRepository>);
}
