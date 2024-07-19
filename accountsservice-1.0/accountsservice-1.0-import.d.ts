import AccountsService10 from '@girs/accountsservice-1.0';

declare global {
    export interface GjsGiImports {
        AccountsService: typeof AccountsService10;
    }
}

export default GjsGiImports;
