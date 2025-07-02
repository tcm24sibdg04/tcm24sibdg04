"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReceitaRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let ReceitaRepository = class ReceitaRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, produtoRepositoryGetter, ingredienteReceitaRepositoryGetter) {
        super(models_1.Receita, dataSource);
        this.produtoRepositoryGetter = produtoRepositoryGetter;
        this.ingredienteReceitaRepositoryGetter = ingredienteReceitaRepositoryGetter;
        this.ingredienteReceitas = this.createHasManyThroughRepositoryFactoryFor('ingredienteReceitas', ingredienteReceitaRepositoryGetter, produtoRepositoryGetter);
        this.registerInclusionResolver('ingredienteReceitas', this.ingredienteReceitas.inclusionResolver);
    }
};
exports.ReceitaRepository = ReceitaRepository;
exports.ReceitaRepository = ReceitaRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.tcm24sibdg04db')),
    tslib_1.__param(1, repository_1.repository.getter('ProdutoRepository')),
    tslib_1.__param(2, repository_1.repository.getter('IngredienteReceitaRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.Tcm24Sibdg04DbDataSource, Function, Function])
], ReceitaRepository);
//# sourceMappingURL=receita.repository.js.map