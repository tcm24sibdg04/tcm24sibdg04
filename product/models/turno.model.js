"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Turno = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Turno = class Turno extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Turno = Turno;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Turno.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Turno.prototype, "data", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Turno.prototype, "horaInicio", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Turno.prototype, "horaFim", void 0);
exports.Turno = Turno = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Turno);
//# sourceMappingURL=turno.model.js.map