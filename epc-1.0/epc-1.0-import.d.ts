
import Epc from './epc-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        Epc: typeof Epc;
    }
}

export default GjsGiImports;


