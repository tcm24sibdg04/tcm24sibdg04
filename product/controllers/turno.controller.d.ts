import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Turno } from '../models';
import { TurnoRepository } from '../repositories';
export declare class TurnoController {
    turnoRepository: TurnoRepository;
    constructor(turnoRepository: TurnoRepository);
    create(turno: Omit<Turno, 'id'>): Promise<Turno>;
    count(where?: Where<Turno>): Promise<Count>;
    find(filter?: Filter<Turno>): Promise<Turno[]>;
    updateAll(turno: Turno, where?: Where<Turno>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Turno>): Promise<Turno>;
    updateById(id: number, turno: Turno): Promise<void>;
    replaceById(id: number, turno: Turno): Promise<void>;
    deleteById(id: number): Promise<void>;
}
