import { Transaction } from 'symbol-sdk';
export declare class Greeter {
    greet(to: string): void;
}
export interface SSSWindow extends Window {
    SSS: {
        activeName: string;
        activeAddress: string;
        activePublicKey: string;
        activeNetworkType: number;
        getActiveAccountToken: (verifierPublicKey: string, customPayload?: Object, encriptedPayload?: string) => Promise<string>;
        setTransaction: (transaction: Transaction) => void;
        requestSign: () => Promise<any>;
    };
    isAllowedSSS: () => boolean;
}
export declare const getActiveAccountToken: (verifierPublicKey: string, customPayload?: Object, encriptedPayload?: string) => Promise<string>;
export declare const getActiveAddress: () => string;
