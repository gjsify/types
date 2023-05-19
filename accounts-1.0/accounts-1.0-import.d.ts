

import Accounts10 from '@girs/accounts-1.0';

declare global {
    export interface GjsGiImports {
        Accounts: typeof Accounts10;
    }
}

export default GjsGiImports;


