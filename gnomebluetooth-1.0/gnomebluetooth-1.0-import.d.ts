

import GnomeBluetooth10 from '@girs/gnomebluetooth-1.0';

declare global {
    export interface GjsGiImports {
        GnomeBluetooth: typeof GnomeBluetooth10;
    }
}

export default GjsGiImports;


