"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredienteReceitaRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let IngredienteReceitaRepository = class IngredienteReceitaRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, produtoRepositoryGetter) {
        super(models_1.IngredienteReceita, dataSource);
        this.produtoRepositoryGetter = produtoRepositoryGetter;
        this.usa = this.createBelongsToAccessorFor('usa', produtoRepositoryGetter);
        this.registerInclusionResolver('usa', this.usa.inclusionResolver);
    }
};
exports.IngredienteReceitaRepository = IngredienteReceitaRepository;
exports.IngredienteReceitaRepository = IngredienteReceitaRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.tcm24sibdg04db')),
    tslib_1.__param(1, repository_1.repository.getter('ProdutoRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.Tcm24Sibdg04DbDataSource, Function])
], IngredienteReceitaRepository);
//# sourceMappingURL=ingrediente-receita.repository.js.map