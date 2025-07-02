"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReceitaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ReceitaController = class ReceitaController {
    constructor(receitaRepository) {
        this.receitaRepository = receitaRepository;
    }
    async create(receita) {
        return this.receitaRepository.create(receita);
    }
    async count(where) {
        return this.receitaRepository.count(where);
    }
    async find(filter) {
        return this.receitaRepository.find(filter);
    }
    async updateAll(receita, where) {
        return this.receitaRepository.updateAll(receita, where);
    }
    async findById(id, filter) {
        return this.receitaRepository.findById(id, filter);
    }
    async updateById(id, receita) {
        await this.receitaRepository.updateById(id, receita);
    }
    async replaceById(id, receita) {
        await this.receitaRepository.replaceById(id, receita);
    }
    async deleteById(id) {
        await this.receitaRepository.deleteById(id);
    }
};
exports.ReceitaController = ReceitaController;
tslib_1.__decorate([
    (0, rest_1.post)('/receitas'),
    (0, rest_1.response)(200, {
        description: 'Receita model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Receita) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Receita, {
                    title: 'NewReceita',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReceitaController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/receitas/count'),
    (0, rest_1.response)(200, {
        description: 'Receita model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Receita)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReceitaController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/receitas'),
    (0, rest_1.response)(200, {
        description: 'Array of Receita model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Receita, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Receita)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReceitaController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/receitas'),
    (0, rest_1.response)(200, {
        description: 'Receita PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Receita, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Receita)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Receita, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReceitaController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/receitas/{id}'),
    (0, rest_1.response)(200, {
        description: 'Receita model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Receita, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Receita, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReceitaController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/receitas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Receita PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Receita, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Receita]),
    tslib_1.__metadata("design:returntype", Promise)
], ReceitaController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/receitas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Receita PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Receita]),
    tslib_1.__metadata("design:returntype", Promise)
], ReceitaController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/receitas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Receita DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], ReceitaController.prototype, "deleteById", null);
exports.ReceitaController = ReceitaController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ReceitaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ReceitaRepository])
], ReceitaController);
//# sourceMappingURL=receita.controller.js.map