"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoTurnoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PedidoTurnoController = class PedidoTurnoController {
    constructor(pedidoRepository) {
        this.pedidoRepository = pedidoRepository;
    }
    async getTurno(id) {
        return this.pedidoRepository.ocorreEm(id);
    }
};
exports.PedidoTurnoController = PedidoTurnoController;
tslib_1.__decorate([
    (0, rest_1.get)('/pedidos/{id}/turno', {
        responses: {
            '200': {
                description: 'Turno belonging to Pedido',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Turno),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PedidoTurnoController.prototype, "getTurno", null);
exports.PedidoTurnoController = PedidoTurnoController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.PedidoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PedidoRepository])
], PedidoTurnoController);
//# sourceMappingURL=pedido-turno.controller.js.map