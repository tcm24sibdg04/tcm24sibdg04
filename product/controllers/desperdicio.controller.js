"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesperdicioController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let DesperdicioController = class DesperdicioController {
    constructor(desperdicioRepository) {
        this.desperdicioRepository = desperdicioRepository;
    }
    async create(desperdicio) {
        return this.desperdicioRepository.create(desperdicio);
    }
    async count(where) {
        return this.desperdicioRepository.count(where);
    }
    async find(filter) {
        return this.desperdicioRepository.find(filter);
    }
    async updateAll(desperdicio, where) {
        return this.desperdicioRepository.updateAll(desperdicio, where);
    }
    async findById(id, filter) {
        return this.desperdicioRepository.findById(id, filter);
    }
    async updateById(id, desperdicio) {
        await this.desperdicioRepository.updateById(id, desperdicio);
    }
    async replaceById(id, desperdicio) {
        await this.desperdicioRepository.replaceById(id, desperdicio);
    }
    async deleteById(id) {
        await this.desperdicioRepository.deleteById(id);
    }
};
exports.DesperdicioController = DesperdicioController;
tslib_1.__decorate([
    (0, rest_1.post)('/desperdicios'),
    (0, rest_1.response)(200, {
        description: 'Desperdicio model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Desperdicio) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Desperdicio, {
                    title: 'NewDesperdicio',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DesperdicioController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/desperdicios/count'),
    (0, rest_1.response)(200, {
        description: 'Desperdicio model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Desperdicio)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DesperdicioController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/desperdicios'),
    (0, rest_1.response)(200, {
        description: 'Array of Desperdicio model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Desperdicio, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Desperdicio)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DesperdicioController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/desperdicios'),
    (0, rest_1.response)(200, {
        description: 'Desperdicio PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Desperdicio, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Desperdicio)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Desperdicio, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DesperdicioController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/desperdicios/{id}'),
    (0, rest_1.response)(200, {
        description: 'Desperdicio model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Desperdicio, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Desperdicio, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DesperdicioController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/desperdicios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Desperdicio PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Desperdicio, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Desperdicio]),
    tslib_1.__metadata("design:returntype", Promise)
], DesperdicioController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/desperdicios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Desperdicio PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Desperdicio]),
    tslib_1.__metadata("design:returntype", Promise)
], DesperdicioController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/desperdicios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Desperdicio DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], DesperdicioController.prototype, "deleteById", null);
exports.DesperdicioController = DesperdicioController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.DesperdicioRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.DesperdicioRepository])
], DesperdicioController);
//# sourceMappingURL=desperdicio.controller.js.map