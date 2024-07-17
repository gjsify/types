
import Cvc from './cvc-1.0.js';

declare global {
    export interface GjsGiImports {
        Cvc: typeof Cvc;
    }
}

export default GjsGiImports;


