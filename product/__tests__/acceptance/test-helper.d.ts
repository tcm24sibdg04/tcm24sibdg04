import { Tcm24Sibdg04Application } from '../..';
import { Client } from '@loopback/testlab';
export declare function setupApplication(): Promise<AppWithClient>;
export interface AppWithClient {
    app: Tcm24Sibdg04Application;
    client: Client;
}
