

import ModemManager10 from '@girs/modemmanager-1.0';

declare global {
    export interface GjsGiImports {
        ModemManager: typeof ModemManager10;
    }
}

export default GjsGiImports;


