"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ProdutoController = class ProdutoController {
    constructor(produtoRepository) {
        this.produtoRepository = produtoRepository;
    }
    async create(produto) {
        return this.produtoRepository.create(produto);
    }
    async count(where) {
        return this.produtoRepository.count(where);
    }
    async find(filter) {
        return this.produtoRepository.find(filter);
    }
    async updateAll(produto, where) {
        return this.produtoRepository.updateAll(produto, where);
    }
    async findById(id, filter) {
        return this.produtoRepository.findById(id, filter);
    }
    async updateById(id, produto) {
        await this.produtoRepository.updateById(id, produto);
    }
    async replaceById(id, produto) {
        await this.produtoRepository.replaceById(id, produto);
    }
    async deleteById(id) {
        await this.produtoRepository.deleteById(id);
    }
};
exports.ProdutoController = ProdutoController;
tslib_1.__decorate([
    (0, rest_1.post)('/produtos'),
    (0, rest_1.response)(200, {
        description: 'Produto model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Produto) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Produto, {
                    title: 'NewProduto',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProdutoController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/produtos/count'),
    (0, rest_1.response)(200, {
        description: 'Produto model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Produto)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProdutoController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/produtos'),
    (0, rest_1.response)(200, {
        description: 'Array of Produto model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Produto, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Produto)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProdutoController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/produtos'),
    (0, rest_1.response)(200, {
        description: 'Produto PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Produto, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Produto)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Produto, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProdutoController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/produtos/{id}'),
    (0, rest_1.response)(200, {
        description: 'Produto model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Produto, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Produto, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProdutoController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/produtos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Produto PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Produto, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Produto]),
    tslib_1.__metadata("design:returntype", Promise)
], ProdutoController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/produtos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Produto PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Produto]),
    tslib_1.__metadata("design:returntype", Promise)
], ProdutoController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/produtos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Produto DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], ProdutoController.prototype, "deleteById", null);
exports.ProdutoController = ProdutoController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ProdutoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ProdutoRepository])
], ProdutoController);
//# sourceMappingURL=produto.controller.js.map