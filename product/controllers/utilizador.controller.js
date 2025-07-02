"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilizadorController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let UtilizadorController = class UtilizadorController {
    constructor(utilizadorRepository) {
        this.utilizadorRepository = utilizadorRepository;
    }
    async create(utilizador) {
        return this.utilizadorRepository.create(utilizador);
    }
    async count(where) {
        return this.utilizadorRepository.count(where);
    }
    async find(filter) {
        return this.utilizadorRepository.find(filter);
    }
    async updateAll(utilizador, where) {
        return this.utilizadorRepository.updateAll(utilizador, where);
    }
    async findById(id, filter) {
        return this.utilizadorRepository.findById(id, filter);
    }
    async updateById(id, utilizador) {
        await this.utilizadorRepository.updateById(id, utilizador);
    }
    async replaceById(id, utilizador) {
        await this.utilizadorRepository.replaceById(id, utilizador);
    }
    async deleteById(id) {
        await this.utilizadorRepository.deleteById(id);
    }
};
exports.UtilizadorController = UtilizadorController;
tslib_1.__decorate([
    (0, rest_1.post)('/utilizadors'),
    (0, rest_1.response)(200, {
        description: 'Utilizador model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Utilizador) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Utilizador, {
                    title: 'NewUtilizador',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UtilizadorController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/utilizadors/count'),
    (0, rest_1.response)(200, {
        description: 'Utilizador model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Utilizador)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UtilizadorController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/utilizadors'),
    (0, rest_1.response)(200, {
        description: 'Array of Utilizador model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Utilizador, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Utilizador)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UtilizadorController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/utilizadors'),
    (0, rest_1.response)(200, {
        description: 'Utilizador PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Utilizador, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Utilizador)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Utilizador, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UtilizadorController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/utilizadors/{id}'),
    (0, rest_1.response)(200, {
        description: 'Utilizador model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Utilizador, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Utilizador, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UtilizadorController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/utilizadors/{id}'),
    (0, rest_1.response)(204, {
        description: 'Utilizador PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Utilizador, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Utilizador]),
    tslib_1.__metadata("design:returntype", Promise)
], UtilizadorController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/utilizadors/{id}'),
    (0, rest_1.response)(204, {
        description: 'Utilizador PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Utilizador]),
    tslib_1.__metadata("design:returntype", Promise)
], UtilizadorController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/utilizadors/{id}'),
    (0, rest_1.response)(204, {
        description: 'Utilizador DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], UtilizadorController.prototype, "deleteById", null);
exports.UtilizadorController = UtilizadorController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.UtilizadorRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UtilizadorRepository])
], UtilizadorController);
//# sourceMappingURL=utilizador.controller.js.map