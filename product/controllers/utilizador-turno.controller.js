"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilizadorTurnoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let UtilizadorTurnoController = class UtilizadorTurnoController {
    constructor(utilizadorRepository) {
        this.utilizadorRepository = utilizadorRepository;
    }
    async getTurno(id) {
        return this.utilizadorRepository.ResponsavelPor(id);
    }
};
exports.UtilizadorTurnoController = UtilizadorTurnoController;
tslib_1.__decorate([
    (0, rest_1.get)('/utilizadors/{id}/turno', {
        responses: {
            '200': {
                description: 'Turno belonging to Utilizador',
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
], UtilizadorTurnoController.prototype, "getTurno", null);
exports.UtilizadorTurnoController = UtilizadorTurnoController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.UtilizadorRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UtilizadorRepository])
], UtilizadorTurnoController);
//# sourceMappingURL=utilizador-turno.controller.js.map