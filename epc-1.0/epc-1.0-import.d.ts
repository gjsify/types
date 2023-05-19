

import Epc10 from '@girs/epc-1.0';

declare global {
    export interface GjsGiImports {
        Epc: typeof Epc10;
    }
}

export default GjsGiImports;


