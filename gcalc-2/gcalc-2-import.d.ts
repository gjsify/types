
import GCalc2 from '@girs/gcalc-2';


declare global {
    export interface GjsGiImports {
        GCalc: typeof GCalc2;
    }
}

export default GjsGiImports;


