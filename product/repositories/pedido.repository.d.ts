import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor, HasManyRepositoryFactory } from '@loopback/repository';
import { Tcm24Sibdg04DbDataSource } from '../datasources';
import { Pedido, PedidoRelations, Utilizador, Turno, Receita } from '../models';
import { UtilizadorRepository } from './utilizador.repository';
import { TurnoRepository } from './turno.repository';
import { ReceitaRepository } from './receita.repository';
export declare class PedidoRepository extends DefaultCrudRepository<Pedido, typeof Pedido.prototype.id, PedidoRelations> {
    protected utilizadorRepositoryGetter: Getter<UtilizadorRepository>;
    protected turnoRepositoryGetter: Getter<TurnoRepository>;
    protected receitaRepositoryGetter: Getter<ReceitaRepository>;
    readonly regista: BelongsToAccessor<Utilizador, typeof Pedido.prototype.id>;
    readonly ocorreEm: BelongsToAccessor<Turno, typeof Pedido.prototype.id>;
    readonly usadoEm: HasManyRepositoryFactory<Receita, typeof Pedido.prototype.id>;
    constructor(dataSource: Tcm24Sibdg04DbDataSource, utilizadorRepositoryGetter: Getter<UtilizadorRepository>, turnoRepositoryGetter: Getter<TurnoRepository>, receitaRepositoryGetter: Getter<ReceitaRepository>);
}
