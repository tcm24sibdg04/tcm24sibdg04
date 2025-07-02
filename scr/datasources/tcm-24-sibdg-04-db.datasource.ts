import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'tcm24sibdg04db',
  connector: 'mysql',
  host: 'localhost',
  port: 3306,
  user: 'root',              // seu usuário MySQL
  database: 'tcm24sibdg04db' // o nome do banco no MySQL
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class Tcm24Sibdg04DbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'tcm24sibdg04db';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.tcm24sibdg04db', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
