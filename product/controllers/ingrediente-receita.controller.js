"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredienteReceitaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let IngredienteReceitaController = class IngredienteReceitaController {
    constructor(ingredienteReceitaRepository) {
        this.ingredienteReceitaRepository = ingredienteReceitaRepository;
    }
    async create(ingredienteReceita) {
        return this.ingredienteReceitaRepository.create(ingredienteReceita);
    }
    async count(where) {
        return this.ingredienteReceitaRepository.count(where);
    }
    async find(filter) {
        return this.ingredienteReceitaRepository.find(filter);
    }
    async updateAll(ingredienteReceita, where) {
        return this.ingredienteReceitaRepository.updateAll(ingredienteReceita, where);
    }
    async findById(id, filter) {
        return this.ingredienteReceitaRepository.findById(id, filter);
    }
    async updateById(id, ingredienteReceita) {
        await this.ingredienteReceitaRepository.updateById(id, ingredienteReceita);
    }
    async replaceById(id, ingredienteReceita) {
        await this.ingredienteReceitaRepository.replaceById(id, ingredienteReceita);
    }
    async deleteById(id) {
        await this.ingredienteReceitaRepository.deleteById(id);
    }
};
exports.IngredienteReceitaController = IngredienteReceitaController;
tslib_1.__decorate([
    (0, rest_1.post)('/ingrediente-receitas'),
    (0, rest_1.response)(200, {
        description: 'IngredienteReceita model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.IngredienteReceita) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.IngredienteReceita, {
                    title: 'NewIngredienteReceita',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], IngredienteReceitaController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/ingrediente-receitas/count'),
    (0, rest_1.response)(200, {
        description: 'IngredienteReceita model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.IngredienteReceita)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], IngredienteReceitaController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/ingrediente-receitas'),
    (0, rest_1.response)(200, {
        description: 'Array of IngredienteReceita model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.IngredienteReceita, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.IngredienteReceita)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], IngredienteReceitaController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/ingrediente-receitas'),
    (0, rest_1.response)(200, {
        description: 'IngredienteReceita PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.IngredienteReceita, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.IngredienteReceita)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.IngredienteReceita, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], IngredienteReceitaController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/ingrediente-receitas/{id}'),
    (0, rest_1.response)(200, {
        description: 'IngredienteReceita model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.IngredienteReceita, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.IngredienteReceita, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], IngredienteReceitaController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/ingrediente-receitas/{id}'),
    (0, rest_1.response)(204, {
        description: 'IngredienteReceita PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.IngredienteReceita, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.IngredienteReceita]),
    tslib_1.__metadata("design:returntype", Promise)
], IngredienteReceitaController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/ingrediente-receitas/{id}'),
    (0, rest_1.response)(204, {
        description: 'IngredienteReceita PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.IngredienteReceita]),
    tslib_1.__metadata("design:returntype", Promise)
], IngredienteReceitaController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/ingrediente-receitas/{id}'),
    (0, rest_1.response)(204, {
        description: 'IngredienteReceita DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], IngredienteReceitaController.prototype, "deleteById", null);
exports.IngredienteReceitaController = IngredienteReceitaController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.IngredienteReceitaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.IngredienteReceitaRepository])
], IngredienteReceitaController);
//# sourceMappingURL=ingrediente-receita.controller.js.map