"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoReceitaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PedidoReceitaController = class PedidoReceitaController {
    constructor(pedidoRepository) {
        this.pedidoRepository = pedidoRepository;
    }
    async find(id, filter) {
        return this.pedidoRepository.usadoEm(id).find(filter);
    }
    async create(id, receita) {
        return this.pedidoRepository.usadoEm(id).create(receita);
    }
    async patch(id, receita, where) {
        return this.pedidoRepository.usadoEm(id).patch(receita, where);
    }
    async delete(id, where) {
        return this.pedidoRepository.usadoEm(id).delete(where);
    }
};
exports.PedidoReceitaController = PedidoReceitaController;
tslib_1.__decorate([
    (0, rest_1.get)('/pedidos/{id}/receitas', {
        responses: {
            '200': {
                description: 'Array of Pedido has many Receita',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Receita) },
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
], PedidoReceitaController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/pedidos/{id}/receitas', {
        responses: {
            '200': {
                description: 'Pedido model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Receita) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Receita, {
                    title: 'NewReceitaInPedido',
                    exclude: ['id'],
                    optional: ['pedidoId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PedidoReceitaController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/pedidos/{id}/receitas', {
        responses: {
            '200': {
                description: 'Pedido.Receita PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Receita, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Receita))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PedidoReceitaController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/pedidos/{id}/receitas', {
        responses: {
            '200': {
                description: 'Pedido.Receita DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Receita))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PedidoReceitaController.prototype, "delete", null);
exports.PedidoReceitaController = PedidoReceitaController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.PedidoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PedidoRepository])
], PedidoReceitaController);
//# sourceMappingURL=pedido-receita.controller.js.map