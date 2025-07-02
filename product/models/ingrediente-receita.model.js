"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredienteReceita = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const produto_model_1 = require("./produto.model");
let IngredienteReceita = class IngredienteReceita extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.IngredienteReceita = IngredienteReceita;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], IngredienteReceita.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], IngredienteReceita.prototype, "id_receita", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], IngredienteReceita.prototype, "id_produto", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], IngredienteReceita.prototype, "quantidadeUtilizada", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => produto_model_1.Produto, { name: 'usa' }),
    tslib_1.__metadata("design:type", Number)
], IngredienteReceita.prototype, "produtoId", void 0);
exports.IngredienteReceita = IngredienteReceita = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], IngredienteReceita);
//# sourceMappingURL=ingrediente-receita.model.js.map