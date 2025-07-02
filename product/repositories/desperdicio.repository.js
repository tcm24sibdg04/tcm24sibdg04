"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesperdicioRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let DesperdicioRepository = class DesperdicioRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, produtoRepositoryGetter) {
        super(models_1.Desperdicio, dataSource);
        this.produtoRepositoryGetter = produtoRepositoryGetter;
        this.ocorreSobre = this.createBelongsToAccessorFor('ocorreSobre', produtoRepositoryGetter);
        this.registerInclusionResolver('ocorreSobre', this.ocorreSobre.inclusionResolver);
    }
};
exports.DesperdicioRepository = DesperdicioRepository;
exports.DesperdicioRepository = DesperdicioRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.tcm24sibdg04db')),
    tslib_1.__param(1, repository_1.repository.getter('ProdutoRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.Tcm24Sibdg04DbDataSource, Function])
], DesperdicioRepository);
//# sourceMappingURL=desperdicio.repository.js.map