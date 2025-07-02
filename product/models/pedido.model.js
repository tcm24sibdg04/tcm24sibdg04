"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const utilizador_model_1 = require("./utilizador.model");
const turno_model_1 = require("./turno.model");
const receita_model_1 = require("./receita.model");
let Pedido = class Pedido extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Pedido = Pedido;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Pedido.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Pedido.prototype, "dataHora", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Pedido.prototype, "id_receita", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Pedido.prototype, "id_utilizador", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Pedido.prototype, "id_turno", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => utilizador_model_1.Utilizador, { name: 'regista' }),
    tslib_1.__metadata("design:type", Number)
], Pedido.prototype, "utilizadorId", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => turno_model_1.Turno, { name: 'ocorreEm' }),
    tslib_1.__metadata("design:type", Number)
], Pedido.prototype, "turnoId", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => receita_model_1.Receita),
    tslib_1.__metadata("design:type", Array)
], Pedido.prototype, "usadoEm", void 0);
exports.Pedido = Pedido = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Pedido);
//# sourceMappingURL=pedido.model.js.map