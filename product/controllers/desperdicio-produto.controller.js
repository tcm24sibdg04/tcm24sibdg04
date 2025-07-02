"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesperdicioProdutoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let DesperdicioProdutoController = class DesperdicioProdutoController {
    constructor(desperdicioRepository) {
        this.desperdicioRepository = desperdicioRepository;
    }
    async getProduto(id) {
        return this.desperdicioRepository.ocorreSobre(id);
    }
};
exports.DesperdicioProdutoController = DesperdicioProdutoController;
tslib_1.__decorate([
    (0, rest_1.get)('/desperdicios/{id}/produto', {
        responses: {
            '200': {
                description: 'Produto belonging to Desperdicio',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Produto),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DesperdicioProdutoController.prototype, "getProduto", null);
exports.DesperdicioProdutoController = DesperdicioProdutoController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.DesperdicioRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.DesperdicioRepository])
], DesperdicioProdutoController);
//# sourceMappingURL=desperdicio-produto.controller.js.map