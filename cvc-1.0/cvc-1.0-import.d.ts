
import Cvc10 from '@girs/cvc-1.0';

declare global {
    export interface GjsGiImports {
        Cvc: typeof Cvc10;
    }
}

export default GjsGiImports;


