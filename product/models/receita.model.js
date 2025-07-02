"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Receita = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const ingrediente_receita_model_1 = require("./ingrediente-receita.model");
const produto_model_1 = require("./produto.model");
let Receita = class Receita extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Receita = Receita;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Receita.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Receita.prototype, "nomeBebida", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Receita.prototype, "descricao", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Receita.prototype, "pedidoId", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => ingrediente_receita_model_1.IngredienteReceita, { through: { model: () => produto_model_1.Produto } }),
    tslib_1.__metadata("design:type", Array)
], Receita.prototype, "ingredienteReceitas", void 0);
exports.Receita = Receita = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Receita);
//# sourceMappingURL=receita.model.js.map