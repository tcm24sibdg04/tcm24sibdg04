"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReceitaIngredienteReceitaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ReceitaIngredienteReceitaController = class ReceitaIngredienteReceitaController {
    constructor(receitaRepository) {
        this.receitaRepository = receitaRepository;
    }
    async find(id, filter) {
        return this.receitaRepository.ingredienteReceitas(id).find(filter);
    }
    async create(id, ingredienteReceita) {
        return this.receitaRepository.ingredienteReceitas(id).create(ingredienteReceita);
    }
    async patch(id, ingredienteReceita, where) {
        return this.receitaRepository.ingredienteReceitas(id).patch(ingredienteReceita, where);
    }
    async delete(id, where) {
        return this.receitaRepository.ingredienteReceitas(id).delete(where);
    }
};
exports.ReceitaIngredienteReceitaController = ReceitaIngredienteReceitaController;
tslib_1.__decorate([
    (0, rest_1.get)('/receitas/{id}/ingrediente-receitas', {
        responses: {
            '200': {
                description: 'Array of Receita has many IngredienteReceita through Produto',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.IngredienteReceita) },
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
], ReceitaIngredienteReceitaController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/receitas/{id}/ingrediente-receitas', {
        responses: {
            '200': {
                description: 'create a IngredienteReceita model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.IngredienteReceita) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.IngredienteReceita, {
                    title: 'NewIngredienteReceitaInReceita',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReceitaIngredienteReceitaController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/receitas/{id}/ingrediente-receitas', {
        responses: {
            '200': {
                description: 'Receita.IngredienteReceita PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.IngredienteReceita, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.IngredienteReceita))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReceitaIngredienteReceitaController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/receitas/{id}/ingrediente-receitas', {
        responses: {
            '200': {
                description: 'Receita.IngredienteReceita DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.IngredienteReceita))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReceitaIngredienteReceitaController.prototype, "delete", null);
exports.ReceitaIngredienteReceitaController = ReceitaIngredienteReceitaController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ReceitaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ReceitaRepository])
], ReceitaIngredienteReceitaController);
//# sourceMappingURL=receita-ingrediente-receita.controller.js.map