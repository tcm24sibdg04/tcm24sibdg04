"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TurnoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let TurnoController = class TurnoController {
    constructor(turnoRepository) {
        this.turnoRepository = turnoRepository;
    }
    async create(turno) {
        return this.turnoRepository.create(turno);
    }
    async count(where) {
        return this.turnoRepository.count(where);
    }
    async find(filter) {
        return this.turnoRepository.find(filter);
    }
    async updateAll(turno, where) {
        return this.turnoRepository.updateAll(turno, where);
    }
    async findById(id, filter) {
        return this.turnoRepository.findById(id, filter);
    }
    async updateById(id, turno) {
        await this.turnoRepository.updateById(id, turno);
    }
    async replaceById(id, turno) {
        await this.turnoRepository.replaceById(id, turno);
    }
    async deleteById(id) {
        await this.turnoRepository.deleteById(id);
    }
};
exports.TurnoController = TurnoController;
tslib_1.__decorate([
    (0, rest_1.post)('/turnos'),
    (0, rest_1.response)(200, {
        description: 'Turno model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Turno) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Turno, {
                    title: 'NewTurno',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TurnoController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/turnos/count'),
    (0, rest_1.response)(200, {
        description: 'Turno model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Turno)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TurnoController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/turnos'),
    (0, rest_1.response)(200, {
        description: 'Array of Turno model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Turno, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Turno)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TurnoController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/turnos'),
    (0, rest_1.response)(200, {
        description: 'Turno PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Turno, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Turno)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Turno, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TurnoController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/turnos/{id}'),
    (0, rest_1.response)(200, {
        description: 'Turno model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Turno, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Turno, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TurnoController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/turnos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Turno PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Turno, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Turno]),
    tslib_1.__metadata("design:returntype", Promise)
], TurnoController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/turnos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Turno PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Turno]),
    tslib_1.__metadata("design:returntype", Promise)
], TurnoController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/turnos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Turno DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], TurnoController.prototype, "deleteById", null);
exports.TurnoController = TurnoController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.TurnoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.TurnoRepository])
], TurnoController);
//# sourceMappingURL=turno.controller.js.map