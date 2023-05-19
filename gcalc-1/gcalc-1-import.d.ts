

import GCalc1 from '@girs/gcalc-1';

declare global {
    export interface GjsGiImports {
        GCalc: typeof GCalc1;
    }
}

export default GjsGiImports;


