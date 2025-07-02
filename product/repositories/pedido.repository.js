"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let PedidoRepository = class PedidoRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, utilizadorRepositoryGetter, turnoRepositoryGetter, receitaRepositoryGetter) {
        super(models_1.Pedido, dataSource);
        this.utilizadorRepositoryGetter = utilizadorRepositoryGetter;
        this.turnoRepositoryGetter = turnoRepositoryGetter;
        this.receitaRepositoryGetter = receitaRepositoryGetter;
        this.usadoEm = this.createHasManyRepositoryFactoryFor('usadoEm', receitaRepositoryGetter);
        this.registerInclusionResolver('usadoEm', this.usadoEm.inclusionResolver);
        this.ocorreEm = this.createBelongsToAccessorFor('ocorreEm', turnoRepositoryGetter);
        this.registerInclusionResolver('ocorreEm', this.ocorreEm.inclusionResolver);
        this.regista = this.createBelongsToAccessorFor('regista', utilizadorRepositoryGetter);
        this.registerInclusionResolver('regista', this.regista.inclusionResolver);
    }
};
exports.PedidoRepository = PedidoRepository;
exports.PedidoRepository = PedidoRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.tcm24sibdg04db')),
    tslib_1.__param(1, repository_1.repository.getter('UtilizadorRepository')),
    tslib_1.__param(2, repository_1.repository.getter('TurnoRepository')),
    tslib_1.__param(3, repository_1.repository.getter('ReceitaRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.Tcm24Sibdg04DbDataSource, Function, Function, Function])
], PedidoRepository);
//# sourceMappingURL=pedido.repository.js.map