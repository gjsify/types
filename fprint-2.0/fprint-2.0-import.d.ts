
import FPrint from './fprint-2.0.d.ts';

declare global {
    export interface GjsGiImports {
        FPrint: typeof FPrint;
    }
}

export default GjsGiImports;


