"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utilizador = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const desperdicio_model_1 = require("./desperdicio.model");
const turno_model_1 = require("./turno.model");
let Utilizador = class Utilizador extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Utilizador = Utilizador;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Utilizador.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Utilizador.prototype, "nome", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Utilizador.prototype, "perfil", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Utilizador.prototype, "login", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Utilizador.prototype, "senha", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => desperdicio_model_1.Desperdicio),
    tslib_1.__metadata("design:type", Array)
], Utilizador.prototype, "reporta", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => turno_model_1.Turno, { name: 'ResponsavelPor' }),
    tslib_1.__metadata("design:type", Number)
], Utilizador.prototype, "turnoId", void 0);
exports.Utilizador = Utilizador = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Utilizador);
//# sourceMappingURL=utilizador.model.js.map