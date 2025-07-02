"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let ProdutoRepository = class ProdutoRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource) {
        super(models_1.Produto, dataSource);
    }
};
exports.ProdutoRepository = ProdutoRepository;
exports.ProdutoRepository = ProdutoRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.tcm24sibdg04db')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.Tcm24Sibdg04DbDataSource])
], ProdutoRepository);
//# sourceMappingURL=produto.repository.js.map