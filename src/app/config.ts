import { InjectionToken, Type } from '@angular/core';

export interface AppConfig {
    apiUrl: string;
    courseCacheSize: number;
}

interface Options {
    providedIn?: Type<any> | 'root' | 'platform' | 'any' | null;
    factory: () => AppConfig;
}

export const APP_CONFIG: AppConfig = {
    apiUrl: 'http://localhost:9000',
    courseCacheSize: 10,
};

const options: Options = {
    providedIn: 'root',
    factory: () => APP_CONFIG,
};

const desc = 'CONFIG_TOKEN';

export const CONFIG_TOKEN = new InjectionToken<AppConfig>(desc, options);
