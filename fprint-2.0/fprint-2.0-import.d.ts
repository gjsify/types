
import FPrint20 from '@girs/fprint-2.0';

declare global {
    export interface GjsGiImports {
        FPrint: typeof FPrint20;
    }
}

export default GjsGiImports;


