"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilizadorDesperdicioController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let UtilizadorDesperdicioController = class UtilizadorDesperdicioController {
    constructor(utilizadorRepository) {
        this.utilizadorRepository = utilizadorRepository;
    }
    async find(id, filter) {
        return this.utilizadorRepository.reporta(id).find(filter);
    }
    async create(id, desperdicio) {
        return this.utilizadorRepository.reporta(id).create(desperdicio);
    }
    async patch(id, desperdicio, where) {
        return this.utilizadorRepository.reporta(id).patch(desperdicio, where);
    }
    async delete(id, where) {
        return this.utilizadorRepository.reporta(id).delete(where);
    }
};
exports.UtilizadorDesperdicioController = UtilizadorDesperdicioController;
tslib_1.__decorate([
    (0, rest_1.get)('/utilizadors/{id}/desperdicios', {
        responses: {
            '200': {
                description: 'Array of Utilizador has many Desperdicio',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Desperdicio) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('filter')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UtilizadorDesperdicioController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/utilizadors/{id}/desperdicios', {
        responses: {
            '200': {
                description: 'Utilizador model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Desperdicio) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Desperdicio, {
                    title: 'NewDesperdicioInUtilizador',
                    exclude: ['id'],
                    optional: ['utilizadorId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UtilizadorDesperdicioController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/utilizadors/{id}/desperdicios', {
        responses: {
            '200': {
                description: 'Utilizador.Desperdicio PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Desperdicio, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Desperdicio))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UtilizadorDesperdicioController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/utilizadors/{id}/desperdicios', {
        responses: {
            '200': {
                description: 'Utilizador.Desperdicio DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Desperdicio))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UtilizadorDesperdicioController.prototype, "delete", null);
exports.UtilizadorDesperdicioController = UtilizadorDesperdicioController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.UtilizadorRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UtilizadorRepository])
], UtilizadorDesperdicioController);
//# sourceMappingURL=utilizador-desperdicio.controller.js.map