
import FPrint from './fprint-2.0.js';

declare global {
    export interface GjsGiImports {
        FPrint: typeof FPrint;
    }
}

export default GjsGiImports;


