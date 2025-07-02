"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Desperdicio = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const produto_model_1 = require("./produto.model");
let Desperdicio = class Desperdicio extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Desperdicio = Desperdicio;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Desperdicio.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Desperdicio.prototype, "dataHora", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Desperdicio.prototype, "quantidade", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Desperdicio.prototype, "motivo", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Desperdicio.prototype, "id_utilizador", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Desperdicio.prototype, "id_produto", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Desperdicio.prototype, "utilizadorId", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => produto_model_1.Produto, { name: 'ocorreSobre' }),
    tslib_1.__metadata("design:type", Number)
], Desperdicio.prototype, "produtoId", void 0);
exports.Desperdicio = Desperdicio = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Desperdicio);
//# sourceMappingURL=desperdicio.model.js.map