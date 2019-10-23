import { AxiosPromise } from 'axios';

export type FunctionScheme = (...args: any[]) => AxiosPromise<any>;
