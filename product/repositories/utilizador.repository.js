"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilizadorRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let UtilizadorRepository = class UtilizadorRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, desperdicioRepositoryGetter, turnoRepositoryGetter) {
        super(models_1.Utilizador, dataSource);
        this.desperdicioRepositoryGetter = desperdicioRepositoryGetter;
        this.turnoRepositoryGetter = turnoRepositoryGetter;
        this.ResponsavelPor = this.createBelongsToAccessorFor('ResponsavelPor', turnoRepositoryGetter);
        this.registerInclusionResolver('ResponsavelPor', this.ResponsavelPor.inclusionResolver);
        this.reporta = this.createHasManyRepositoryFactoryFor('reporta', desperdicioRepositoryGetter);
        this.registerInclusionResolver('reporta', this.reporta.inclusionResolver);
    }
};
exports.UtilizadorRepository = UtilizadorRepository;
exports.UtilizadorRepository = UtilizadorRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.tcm24sibdg04db')),
    tslib_1.__param(1, repository_1.repository.getter('DesperdicioRepository')),
    tslib_1.__param(2, repository_1.repository.getter('TurnoRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.Tcm24Sibdg04DbDataSource, Function, Function])
], UtilizadorRepository);
//# sourceMappingURL=utilizador.repository.js.map