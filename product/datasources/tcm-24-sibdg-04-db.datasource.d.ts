import { LifeCycleObserver } from '@loopback/core';
import { juggler } from '@loopback/repository';
export declare class Tcm24Sibdg04DbDataSource extends juggler.DataSource implements LifeCycleObserver {
    static dataSourceName: string;
    static readonly defaultConfig: {
        name: string;
        connector: string;
        host: string;
        port: number;
        user: string;
        database: string;
    };
    constructor(dsConfig?: object);
}
