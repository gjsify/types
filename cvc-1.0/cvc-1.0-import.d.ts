
import Cvc from './cvc-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        Cvc: typeof Cvc;
    }
}

export default GjsGiImports;


