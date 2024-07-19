import GnomeBluetooth30 from '@girs/gnomebluetooth-3.0';

declare global {
    export interface GjsGiImports {
        GnomeBluetooth: typeof GnomeBluetooth30;
    }
}

export default GjsGiImports;
