
import AccountsService from './accountsservice-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        AccountsService: typeof AccountsService;
    }
}

export default GjsGiImports;


