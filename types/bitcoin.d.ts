interface GetBalanceResult {
    confirmed: number;
    unconfirmed: number;
    total: number;
}
interface SignPsbtOption {
    autoFinalized: boolean;
    toSignInputs: {
        index: number;
        address?: string;
        publicKey?: string;
        sighashTypes?: number[];
        disableTweakSigner?: boolean;
    }[];
}
export default class Bitcoin {
    connect(): Promise<{
        address: string;
        publicKey: string;
    }>;
    getAccounts(): Promise<string[]>;
    getNetwork(): Promise<string>;
    getBalance(): Promise<GetBalanceResult>;
    signMessage(signStr: string, type?: string): Promise<string>;
    signPsbt(psbtHex: string, options: SignPsbtOption): Promise<string>;
    signPsbts(psbtHexs: string[], options: SignPsbtOption[]): Promise<string>;
}
export {};
