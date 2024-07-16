
import GnomeBluetooth from './gnomebluetooth-3.0.d.ts';

declare global {
    export interface GjsGiImports {
        GnomeBluetooth: typeof GnomeBluetooth;
    }
}

export default GjsGiImports;


