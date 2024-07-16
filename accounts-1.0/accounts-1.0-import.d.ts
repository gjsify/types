
import Accounts from './accounts-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        Accounts: typeof Accounts;
    }
}

export default GjsGiImports;


